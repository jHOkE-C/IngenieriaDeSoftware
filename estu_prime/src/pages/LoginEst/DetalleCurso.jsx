import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Swal from 'sweetalert2';
import corazon from '../../assents/img/heart.png';
import corazonFavorito from '../../assents/img/heartFavorito.png';

function DetalleCurso() {
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [mensaje, setMensaje] = useState(null); // Para mostrar mensajes de éxito o error
  const [haComprado, setHaComprado] = useState(false);
  const [esFavorito, setEsFavorito] = useState(false);
  let { idCurso } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(`http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/mostrarCursoPorId.php?id=${idCurso}`, {
      method: 'GET',
      credentials: 'include' // Esto es necesario si tu PHP utiliza sesiones
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener el curso');
      }
      return response.json();
    })
    .then(data => {
      setCurso(data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    });
  }, [idCurso]);

  
  useEffect(() => {
    if (curso) {
      verificarCompra();
      verificarFavorito();
    }
  }, [curso]);

  const addToCart = () => {
    // Lógica para añadir el curso al carrito
    console.log('Curso añadido al carrito');
  };  

  const verificarCompra = async () => {
    try {
      const response = await fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/verificarCompra.php', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idCurso })
      });
      
      if (!response.ok) {
        throw new Error('Error al verificar la compra');
      }

      const data = await response.json();

      if (data.success) {
        setHaComprado(data.haComprado);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const manejarFavorito = async () => {
    const url = esFavorito
      ? 'http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/quitarFavorito.php'
      : 'http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/anadirFavorito.php';

    try {
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idCurso })
      });

      if (!response.ok) {
        throw new Error('Error al actualizar favorito');
      }

      const data = await response.json();

      if (data.success) {
        setEsFavorito(!esFavorito);
        Swal.fire({
          title: esFavorito ? 'Curso quitado de favoritos' : 'Curso añadido a favoritos',
          icon: 'success',
          confirmButtonText: 'OK',
          background:'#F2E9E4',
          confirmButtonColor:'#15292E',
        });
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: data.message || 'Por favor, inténtelo de nuevo más tarde',
          confirmButtonText: 'OK',
          background:'#F2E9E4',
          confirmButtonColor:'#15292E',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: `Error: ${error.message}`,
        confirmButtonText: 'OK'
      });
    }
  };

  const verificarFavorito = async () => {
    try {
      const response = await fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/verificarFavorito.php', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idCurso })
      });
      
      if (!response.ok) {
        throw new Error('Error al verificar favorito');
      }

      const data = await response.json();

      if (data.success) {
        setEsFavorito(data.esFavorito);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const buyNow = () => {
    Swal.fire({
      icon: 'question',
      text: 'Se comprara el curso por el Precio de: '+curso.precio+', esta seguro?',
      background:'#F2E9E4',
      confirmButtonColor:'#15292E',
      showCancelButton: true,
      confirmButtonText: "Comprar",
    }).then(result => {
      if (result.isConfirmed) {
        console.log(idCurso);
        setMensaje(null); // Resetear el mensaje
        fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/comprarCurso.php', {
          method: 'POST',
          credentials: 'include', // Esto es necesario si tu PHP utiliza sesiones
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ idCurso })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al realizar la compra');
          }
          return response.json();
        })
        .then(data => {
          if (data.success) {
            Swal.fire({
              title: 'Compra realizada con éxito',
              icon: 'success',
              confirmButtonText: 'OK',
              background:'#F2E9E4',
              confirmButtonColor:'#15292E',
            }).then(() => {
              // Recargar la página
              window.location.reload();
            }); 
          } else {
            Swal.fire({
              title: 'Error al realizar la compra',
              icon: 'error',
              text: data.message || 'Por favor, inténtelo de nuevo más tarde',
              confirmButtonText: 'OK',
              background:'#F2E9E4',
              confirmButtonColor:'#15292E',
            }).then(() => {
              // Recargar la página
              window.location.reload();
            }); 
          }
        })
        .catch(error => {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: `Error: ${error.message}`,
            confirmButtonText: 'OK'
          }).then(() => {
            // Recargar la página
            window.location.reload();
          }); 
        });
      }
    }); 
    
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!curso) {
    return <div>No se encontró el curso</div>;
  }

  return (
    <DetalleCursoCSS>
    <div className="container">
      <div className="row">
        <div className="col-md-imagen">
          <div className="curso-imagen">
          <h2>DETALLE DE CURSO</h2>
          <br/>
          <img src={curso.ruta} alt={curso.titulo} />
          <p className="precio">Precio: <strong>{curso.precio}Bs.</strong></p>
            {!haComprado && (
              <>
                <div className="botones">
                  <button className="comprar" onClick={buyNow}><strong>COMPRAR AHORA</strong></button>
                </div>
              </>
            )}
            {haComprado && (
              <>
                <div className="botones">
                  <button className="yaComprado" onClick={() => {}}><strong>YA COMPRADO</strong></button>
                  <button className="corazon" onClick={manejarFavorito}>
                    <img src={esFavorito ? corazonFavorito : corazon} alt='' className='corazon__img' />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-md-detalles">
          <div className="curso-detalles">
                <h3>{curso.titulo}</h3>
                <p>Docente: {curso.nombre_docente}</p>
                <p>Descripción: {curso.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  </DetalleCursoCSS>
  );
}

export default DetalleCurso;

const DetalleCursoCSS = styled.nav`
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .curso-imagen {
    padding: 20px;
    flex: 0 0 40%; /* Define un ancho del 40% del contenedor */
  }
  
  .curso-detalles {
    margin-top: 50px;
    font-size: 1.2rem;
    padding: 20px;
    flex: 0 0 60%; /* Define un ancho del 60% del contenedor */
  }
  
  .curso-imagen img {
    max-width: 100%;
    border-radius: 5px;
    height: auto;
  }
  
  .curso-detalles p {
    margin-bottom: 10px;
  }

  .precio {
    text-align: center;
    font-weight: bold;
  }

  .botones {
    display: flex;
    justify-content: center;
    margin: 20px;
  }

  .botones button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .corazon {
    border: none;
    background-color: transparent;
    margin-left: 5px;
  }

  .corazon__img {  
    height: auto; /* Para mantener la relación de aspecto */
    width: 35px; /* Ajusta el ancho de la imagen según sea necesario */
  }

  .corazon:hover, .anadir:hover  {
    transition: 300ms;
    color: black;  
    background-color: #B4D2DA;
  }

  .anadir {
    width: 245px;
    height: 50px;
    background-color: transparent;
  }
  .comprar {
    transition: 300ms;
    width: 300px;
    height: 50px;
    background-color: #035058;
    color: white;    
    border: 1px solid;
  }
  .yaComprado {
    transition: 300ms;
    width: 245px;
    height: 50px;
    background-color: #B4D2DA;
    color: black;    
    border: 1px solid;
  }

  .comprar:hover {
    transition: 300ms;
    color: black;  
    background-color: #B4D2DA;
  }

  .row {
    display: flex;
  }
  
  .col-md-imagen {
    flex: 0 0 45%;
  }

  .col-md-detalles {
    flex: 0 0 55%;
  }
  
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }
  }
`;  
