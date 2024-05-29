import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assents/svg/left.svg';
import { ReactComponent as ArrowRight } from '../../assents/svg/right.svg';
import CardsCursos from '../../components/courseCard/cardCursoDocente';
import { useNavigate } from "react-router-dom";

function TusCursos() {
  const [cursosRecomendados, setCursosRecomendados] = useState([]);
  
  const [currentPageRecomendados, setCurrentPageRecomendados] = useState(0);

  useEffect(() => {
    obtenerCursos();
  }, []);

  const obtenerCursos = () => {
    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/mostrarCurso.php', {
      method: 'GET',
      credentials: 'include' // sesiones
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al obtener los cursos');
        }
        return res.json();
      })
      .then(data => setCursosRecomendados(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const renderCursos = (cursos, currentPage, setCurrentPage) => {
    const startIndex = currentPage * 10; // Cambiado a 10
    const endIndex = startIndex + 10; // Cambiado a 10
    return cursos.slice(startIndex, endIndex).map((curso) => (
      <CardsCursos 
        key={curso.IDCURSO} 
        title={curso.NOMBRECURSO} 
        id={curso.IDCURSO} 
        nombre_docente={curso.nombre_docente} 
        precio={curso.PRECIOCURSO} 
        img={curso.RUTACURSO}
      />
    ));
  };

  const goToNextPage = (currentPage, setCurrentPage, cursos) => {
    const startIndex = currentPage * 10; // Cambiado a 10
    const endIndex = startIndex + 10; // Cambiado a 10
    if (endIndex < cursos.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const goToPreviousPage = (currentPage, setCurrentPage) => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div>
      <Container>
        <Titulo>Tus Cursos</Titulo>
      </Container>
      <ListaCrearCursoContainer>
        <CursosContainer>
          {renderCursos(cursosRecomendados, currentPageRecomendados, setCurrentPageRecomendados)}
        </CursosContainer>
        <div className='arrows'>
          <button className='arrows__flecha' onClick={() => goToPreviousPage(currentPageRecomendados, setCurrentPageRecomendados)}>
            <ArrowLeft className='home__icon' style={{ visibility: currentPageRecomendados === 0 ? 'hidden' : 'visible' }} />
          </button>
          <p>Página {currentPageRecomendados + 1}</p>
          <button className='arrows__flecha' onClick={() => goToNextPage(currentPageRecomendados, setCurrentPageRecomendados, cursosRecomendados)}>
            <ArrowRight className='home__icon' style={{ visibility: (currentPageRecomendados + 1) * 10 >= cursosRecomendados.length ? 'hidden' : 'visible' }} />
          </button>
        </div>
      </ListaCrearCursoContainer>
    </div>
  );
}

export default TusCursos;

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;
const ListaCrearCursoContainer = styled.nav`
  width: 97vw;
  position: relative;
  left: 2%;
  min-height: 40vh;
  .arrows {
    display: flex;
    position: relative;
    justify-content: center;
    margin: 1.5%;
  }
  .arrows__flecha {
    background: none;
    margin: 0.1em;
    border: none;
  }
  .arrows__flecha svg:hover {
    fill: #b4d2da;
    transition: 100ms;
    stroke: black;
  }
  .arrows__flecha svg:active {
    fill: white;
  }
  .titulo-cursos {
    font-size: 36px;
    font-weight: bold;
    color: #007bff;
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
const CursosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // Cambiado a 5 columnas
  gap: 10px; // Espacio entre los cursos
`;
const Container = styled.div`
  padding: 5px;
`;