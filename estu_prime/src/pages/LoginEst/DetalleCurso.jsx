import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import corazon from '../../assents/img/heart.png'

function DetalleCurso() {
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [mensaje, setMensaje] = useState(null); // Para mostrar mensajes de éxito o error
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

  const addToCart = () => {
    // Lógica para añadir el curso al carrito
    console.log('Curso añadido al carrito');
  };

  const buyNow = () => {
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
        setMensaje('Compra realizada con éxito');
      } else {
        setMensaje('Error al realizar la compra');
      }
    })
    .catch(error => {
      setMensaje(`Error: ${error.message}`);
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
            <div className="botones">
              <button className="anadir" onClick={addToCart}><b>Añadir a la cesta</b></button>
              <button className="corazon" onClick={addToCart}>
                <img src={corazon} alt='' className='corazon__img' />
              </button>
            </div>
            <div className="botones">
              <button className="comprar" onClick={buyNow}><strong>COMPRAR AHORA</strong></button>
            </div>
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

const DetalleCursoCSS= styled.nav`
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
    margin-top: 5px;
  }

  .botones button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 5px;
    //padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .corazon {
    border: none;
    background-color: transparent;
    margin-left: 5px;
  }

  .corazon__img{  
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
    height: 40px;
    background-color: #035058;
    color: white;    
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
