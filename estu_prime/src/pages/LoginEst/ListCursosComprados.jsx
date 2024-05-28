import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assents/svg/left.svg';
import { ReactComponent as ArrowRight } from '../../assents/svg/right.svg';
import CardsCursos from '../../components/courseCard/cardCursoEstudiante';
import { useNavigate } from "react-router-dom";

function PaginaCursos() {
  const [cursosRecomendados, setCursosRecomendados] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCursos, setFilteredCursos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCursos();
  }, []);

  useEffect(() => {
    const filtered = cursosRecomendados.filter(curso =>
      curso.NOMBRECURSO.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCursos(filtered);
  }, [searchTerm, cursosRecomendados]);

  const fetchCursos = () => {
    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/mostrarComprados.php')
      .then(res => res.json())
      .then(data => {
        console.log('Cursos comprados:', data);
        setCursosRecomendados(data);
        setFilteredCursos(data); // Inicialmente mostrar todos los cursos
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const navegarDetalle = (idCurso) => {
    navigate(`/LoginEstudiante/ListCursos/DetalleCurso/${idCurso}`);
  };

  const renderCursos = (cursos, currentPage) => {
    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
    return cursos.slice(startIndex, endIndex).map((curso) => (
      <CardsCursos key={curso.IDCURSO} title={curso.NOMBRECURSO} id={curso.IDCURSO} nombre_docente={curso.nombre_docente} precio={curso.PRECIOCURSO} img={curso.RUTACURSO}/>
    ));
  };

  const goToNextPage = () => {
    const startIndex = (currentPage + 1) * 10;
    if (startIndex < filteredCursos.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div>
      <Container>
        <Titulo>Listado de Cursos Comprados</Titulo>
        <SearchBarContainer>
          <SearchInput
            type="text"
            placeholder="Buscar cursos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <SuggestionsList>
              {filteredCursos.map(curso => (
                <li key={curso.IDCURSO} onClick={() => navegarDetalle(curso.IDCURSO)}>
                  {curso.NOMBRECURSO}
                </li>
              ))}
            </SuggestionsList>
          )}
        </SearchBarContainer>
      </Container>
      <h2>Cursos Comprados</h2>
      <ListaCrearCursoContainer>
        {renderCursos(filteredCursos, currentPage)}
        <div className='arrows'>
          <button className='arrows__flecha' onClick={goToPreviousPage}>
            <ArrowLeft className='home__icon' style={{ visibility: currentPage === 0 ? 'hidden' : 'visible' }} />
          </button>
          <p>Página {currentPage + 1}</p>
          <button className='arrows__flecha' onClick={goToNextPage}>
            <ArrowRight className='home__icon' style={{ visibility: (currentPage + 1) * 10 >= filteredCursos.length ? 'hidden' : 'visible' }} />
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
  z-index: 1000;
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
