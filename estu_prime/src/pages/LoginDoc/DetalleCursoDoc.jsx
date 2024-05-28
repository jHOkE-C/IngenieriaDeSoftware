import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import corazon from '../../assents/img/heart.png'
import Swal from 'sweetalert2'

function DetalleCurso() {
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
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
    Swal.fire({
      icon: 'info',
      text: 'Funcionalidad solo permitida en cuentas <Estudiante>',
      background:'#F2E9E4',
      confirmButtonColor:'#15292E',
    })
  };  

  const buyNow = () => {
    Swal.fire({
      icon: 'info',
      text: 'Funcionalidad solo permitida en cuentas <Estudiante>',
      background:'#F2E9E4',
      confirmButtonColor:'#15292E',
    })
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
      <div className="row">
        <div className="col-md-imagen">
          <div className="curso-imagen">
          <h2>DETALLE DE CURSO</h2>
          <br/>
          <img src={curso.ruta} alt={curso.titulo} className='imagen'/>
            <p className="precio">Precio: <strong>{curso.precio}Bs.</strong></p>
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
  </DetalleCursoCSS>
  );
}

export default DetalleCurso;

const DetalleCursoCSS= styled.nav`
display: flex;
justify-content: center;
  .imagen{
    border-radius: 1vw;
  }
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
    width: 80%;
    border: 1px solid #035058;
    border-radius: 1vw;
    margin: 1vw;
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
