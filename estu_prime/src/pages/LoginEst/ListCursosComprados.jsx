import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assents/svg/left.svg';
import { ReactComponent as ArrowRight } from '../../assents/svg/right.svg';
import CardsCursos from '../../components/courseCard/cardCursoEstudiante';
import { useNavigate } from "react-router-dom";

function PaginaCursos() {
  const [cursosRecomendados, setCursosRecomendados] = useState([]);
  const [cursosFavoritos, setCursosFavoritos] = useState([]);
  
  const [currentPageRecomendados, setCurrentPageRecomendados] = useState(0);
  const [currentPageFavoritos, setCurrentPageFavoritos] = useState(0);

const navigate = useNavigate();


const navegarDetalle = (idCurso) => {
  navigate(`/LoginEstudiante/ListCursos/DetalleCurso/${idCurso}`);

};

/* fin explorar*/

  useEffect(() => {
    obtenerCursos();
    obtenerCursosFavoritos();
  }, []);
/** 
  const obtenerCursos = () => {
    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/mostrarComprados.php')
      .then(res => res.json())
      .then(data => setCursosRecomendados(data))
      .catch(error => console.error('Error fetching data:', error));
  };*/
  const obtenerCursos = () => {
    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/mostrarComprados.php', {
      method: 'GET',
      credentials: 'include' // Esto es necesario si tu PHP utiliza sesiones
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
  const obtenerCursosFavoritos = () => {
    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/mostrarFavoritos.php', {
      method: 'GET',
      credentials: 'include' // Esto es necesario si tu PHP utiliza sesiones
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al obtener los cursos');
        }
        return res.json();
      })
      .then(data => setCursosFavoritos(data))
      .catch(error => console.error('Error fetching data:', error));
  };
  const renderCursos = (cursos, currentPage, setCurrentPage) => {
    const startIndex = currentPage * 12;
    const endIndex = startIndex + 12;
    return cursos.slice(startIndex, endIndex).map((curso) => (
    <CardsCursos 
      key={curso.idCurso} 
      title={curso.titulo} 
      id={curso.idCurso} 
      nombre_docente={curso.nombre_docente} 
      precio={curso.precio} 
      img={curso.ruta} 
    />
   ));
  };

  const goToNextPage = (currentPage, setCurrentPage, cursos) => {
    const startIndex = currentPage * 12;
    const endIndex = startIndex + 12;
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
   {/*      <Titulo>Listado de Cursos</Titulo>*/}
      <Titulo>Listado de Cursos Comprados</Titulo>
      {cursosFavoritos.length > 0 && (
        <>
          <h2>Cursos Favoritos</h2>
          <ListaCrearCursoContainer>
            {renderCursos(cursosFavoritos, currentPageFavoritos, setCurrentPageFavoritos)}
            <div className='arrows'>
              <button className='arrows__flecha' onClick={() => goToPreviousPage(currentPageFavoritos, setCurrentPageFavoritos)}>
                <ArrowLeft className='home__icon' style={{ visibility: currentPageFavoritos === 0 ? 'hidden' : 'visible' }} />
              </button>
              <p>Página {currentPageFavoritos + 1}</p>
              <button className='arrows__flecha' onClick={() => goToNextPage(currentPageFavoritos, setCurrentPageFavoritos, cursosFavoritos)}>
                <ArrowRight className='home__icon' style={{ visibility: (currentPageFavoritos + 1) * 4 >= cursosFavoritos.length ? 'hidden' : 'visible' }} />
              </button>
            </div>
          </ListaCrearCursoContainer>
        </>
      )}
      <h2>Cursos Comprados </h2>
      {!(cursosFavoritos.length > 0) && (
        <>
          <span>Al añadir un curso a tus favoritos, se hará una lista de favoritos encima</span>´
        </>
      )}
      <ListaCrearCursoContainer>
        {renderCursos(cursosRecomendados, currentPageRecomendados, setCurrentPageRecomendados)}
        <div className='arrows'>
          <button className='arrows__flecha' onClick={() => goToPreviousPage(currentPageRecomendados, setCurrentPageRecomendados)}>
            <ArrowLeft className='home__icon' style={{ visibility: currentPageRecomendados === 0 ? 'hidden' : 'visible' }} />
          </button>
          <p>Página {currentPageRecomendados + 1}</p>
          <button className='arrows__flecha' onClick={() => goToNextPage(currentPageRecomendados, setCurrentPageRecomendados, cursosRecomendados)}>
            <ArrowRight className='home__icon' style={{ visibility: (currentPageRecomendados + 1) * 4 >= cursosRecomendados.length ? 'hidden' : 'visible' }} />
          </button>
        </div>
      </ListaCrearCursoContainer>
    </div>
  );
}

export default PaginaCursos;

const Titulo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;
const ListaCrearCursoContainer = styled.nav`
  width: 81vw;
  position: relative;
  left: 10%;
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
