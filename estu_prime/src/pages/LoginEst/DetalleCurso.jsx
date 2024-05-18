import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

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
    // Lógica para añadir el curso al carrito
    console.log('Curso añadido al carrito');
  };

  const buyNow = () => {
    // Lógica para comprar el curso
    console.log('Comprar curso');
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
        <div className="col-md-6">
        <div className="curso-imagen">
            <img src={curso.ruta} alt={curso.titulo} />
            <p>Precio: {curso.precio}Bs.</p>
          </div>
          <div className="curso-detalles">
            <button onClick={addToCart}>Añadir a la cesta</button>
            <button onClick={buyNow}>Comprar ahora</button>
          </div>
        </div>
        <div className="col-md-6">
            <div className="curso-detalles">
                <h2>{curso.titulo}</h2>
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
  
  .curso-detalles {
    padding: 20px;
  }
  
  .curso-imagen {
    padding: 20px;
  }
  
  .curso-imagen img {
    max-width: 100%;
    height: auto;
  }
  
  .curso-detalles p {
    margin-bottom: 10px;
  }
  
  .curso-detalles button,
  .curso-imagen button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .curso-detalles button:hover,
  .curso-imagen button:hover {
    background-color: #0056b3;
  }
  
  .row {
    display: flex;
  }
  
  .col-md-6 {
    flex: 0 0 50%;
  }
  
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }
  }
`;  
