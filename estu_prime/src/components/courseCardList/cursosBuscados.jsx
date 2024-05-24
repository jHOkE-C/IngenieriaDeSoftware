import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assents/svg/left.svg';
import { ReactComponent as ArrowRight } from '../../assents/svg/right.svg';
import CardsCursos from '../../components/courseCard/cardCursosDocExp';



function TusCursos({ resultados }) {
  const [cursos, setCursos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hayMasCursos, setHayMasCursos] = useState(false);

  useEffect(() => {
    if (Array.isArray(resultados)) {
      setCursos(resultados);
    } else {
      console.error('Expected resultados to be an array', resultados);
    }
  }, [resultados]);

  useEffect(() => {
    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
    setHayMasCursos(endIndex < cursos.length);
  }, [currentPage, cursos]);

  const renderCursos = () => {
    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
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

  const goToNextPage = () => {
    if (hayMasCursos) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? prevPage : prevPage - 1));
  };

  return (
    <ListaCrearCursoContainer>
      <div className='cursos'>
        {resultados.length === 0 ? (
          <div className='cursos__noFound'><h1>Busqueda no encontrada...</h1></div>
        ) : (
          renderCursos()
        )}
      </div>
      <div className='arrows'>
        {currentPage > 0 ? 
          (<button className='arrows__flecha' onClick={goToPreviousPage}>
            <ArrowLeft className='home__icon' />
          </button>)
        :
          (<button className='arrows__flecha--desactivado'>
            <ArrowLeft className='home__icon' />
          </button>)
        }
        {hayMasCursos ?
          (<button className='arrows__flecha' onClick={goToNextPage}>
            <ArrowRight className='home__icon' />
          </button>)
        :
          (<button className='arrows__flecha--desactivado'>
            <ArrowRight className='home__icon' />
          </button>)
        }
      </div>
    </ListaCrearCursoContainer>
  );
}

TusCursos.propTypes = {
  resultados: PropTypes.array.isRequired,
};

export default TusCursos;


const ListaCrearCursoContainer = styled.nav`
  min-width: 700px;
  .cursos {
    display: flex;
    min-height: 75vh;
    flex-wrap: wrap;
  }
  .cursos__noFound{
    margin-top: 2vw;
    margin-left:5vw;
  }
  .arrows {
    display: flex;
    position: relative;
    justify-content: center;
    margin-bottom: 1%;
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
  .arrows__flecha--desactivado{
    
    background: none;
    margin: 0.1em;
    border: none;
  }
  .arrows__flecha--desactivado svg{
    fill: #F2E9E4;
  }
`;
