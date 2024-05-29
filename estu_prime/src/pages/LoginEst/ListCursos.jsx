import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assents/svg/left.svg';
import { ReactComponent as ArrowRight } from '../../assents/svg/right.svg';
import CardsCursos from '../../components/courseCard/cardCursoEstudiante';
import { useNavigate } from "react-router-dom";

function PaginaCursos() {
  const [cursosRecomendados, setCursosRecomendados] = useState([]);
  const [cursosNuevos, setCursosNuevos] = useState([]);
  const [cursosRecientes, setCursosRecientes] = useState([]);
  
  const [currentPageRecomendados, setCurrentPageRecomendados] = useState(0);
  const [currentPageNuevos, setCurrentPageNuevos] = useState(0);
  const [currentPageRecientes, setCurrentPageRecientes] = useState(0);

/* parte de Explorar.jsx */
const [cursos, setCursos] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [filteredCursos, setFilteredCursos] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    cursosBuscar();
  }, []);
  useEffect(() => {
    const filtered = cursos.filter(curso =>
      curso.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCursos(filtered);
  }, [searchTerm, cursos]);
const cursosBuscar = () => {
  fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/cursoEstudiante.php')
    .then(res => res.json())
    .then(data => setCursos(data))
    .catch(error => console.error('Error fetching data:', error));
};

const navegarDetalle = (idCurso) => {
  navigate(`/LoginEstudiante/ListCursos/DetalleCurso/${idCurso}`);

};

/* fin explorar*/

  useEffect(() => {
    obtenerCursos();
  }, []);

  const obtenerCursos = () => {
    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/cursoEstudiante.php')
      .then(res => res.json())
      .then(data => setCursosRecomendados(data))
      .catch(error => console.error('Error fetching data:', error));

    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/cursoNuevos.php')
      .then(res => res.json())
      .then(data => setCursosNuevos(data))
      .catch(error => console.error('Error fetching data:', error));

    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/cursoPrueba.php')
      .then(res => res.json())
      .then(data => setCursosRecientes(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const renderCursos = (cursos, currentPage, setCurrentPage) => {
    const startIndex = currentPage * 4;
    const endIndex = startIndex + 4;
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
    const startIndex = currentPage * 4;
    const endIndex = startIndex + 4;
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
   <Titulo>Listado de Cursos</Titulo>
      <h2>Cursos recomendados</h2>
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

      <h2>Cursos Nuevos</h2>
      <ListaCrearCursoContainer>
        {renderCursos(cursosNuevos, currentPageNuevos, setCurrentPageNuevos)}
        <div className='arrows'>
          <button className='arrows__flecha' onClick={() => goToPreviousPage(currentPageNuevos, setCurrentPageNuevos)}>
            <ArrowLeft className='home__icon' style={{ visibility: currentPageNuevos === 0 ? 'hidden' : 'visible' }} />
          </button>
          <p>Página {currentPageNuevos + 1}</p>
          <button className='arrows__flecha' onClick={() => goToNextPage(currentPageNuevos, setCurrentPageNuevos, cursosNuevos)}>
            <ArrowRight className='home__icon' style={{ visibility: (currentPageNuevos + 1) * 4 >= cursosNuevos.length ? 'hidden' : 'visible' }} />
          </button>
        </div>
      </ListaCrearCursoContainer>

      <h2>Más Cursos</h2>
      <ListaCrearCursoContainer>
        {renderCursos(cursosRecientes, currentPageRecientes, setCurrentPageRecientes)}
        <div className='arrows'>
          <button className='arrows__flecha' onClick={() => goToPreviousPage(currentPageRecientes, setCurrentPageRecientes)}>
            <ArrowLeft className='home__icon' style={{ visibility: currentPageRecientes === 0 ? 'hidden' : 'visible' }} />
          </button>
          <p>Página {currentPageRecientes + 1}</p>
          <button className='arrows__flecha' onClick={() => goToNextPage(currentPageRecientes, setCurrentPageRecientes, cursosRecientes)}>
            <ArrowRight className='home__icon' style={{ visibility: (currentPageRecientes + 1) * 4 >= cursosRecientes.length ? 'hidden' : 'visible' }} />
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
const Container = styled.div`
  padding: 20px;
`;


const SearchBarContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 20px auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 20px;
  outline: none;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 102%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 20px;
  z-index: 1000; /* Asegúrate de que esté por encima de otros elementos */
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: #f0f0f0;
    }
  }
`;