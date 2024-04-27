import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {ReactComponent as ArrowLeft} from '../../assents/svg/left.svg';
import {ReactComponent as ArrowRight} from '../../assents/svg/right.svg';
import CardsCursos from '../../components/courseCard/cardCursoDocente';



function TusCursos() {
  const [cursos, setCursos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  

  useEffect(() => {
    peticionDocenteCursosCreados();
  }, []);

  const peticionDocenteCursosCreados = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((user) => ({
          title: user.title,
          id: user.id
        }));
        setCursos(newData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const renderCursos = () => {
    const startIndex = currentPage * 8;
    const endIndex = startIndex + 8;
    return cursos.slice(startIndex, endIndex).map((curso) => (
      <CardsCursos key={curso.id} title={curso.title} ide={curso.id} />
    ));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage === 0? prevPage:prevPage-1);
  };

  return (
    <ListaCrearCursoContainer>
      {renderCursos()}
      <div className='arrows'>
        <button className='arrows__flecha' onClick={goToPreviousPage}>
          <ArrowLeft className='home__icon'/>
        </button>
        <button className='arrows__flecha' onClick={goToNextPage}>
          <ArrowRight className='home__icon'/>
        </button>
      </div>
    </ListaCrearCursoContainer>
  );
}

export default TusCursos;

const ListaCrearCursoContainer = styled.nav`
  width: 80vw;
  position: relative;
  left: 10%;

  .arrows {
    display: flex;
    position: relative;
    justify-content: center;
    margin: 1.5%;
  }
  .arrows__flecha{
    background: none;
    margin: 0.1em;
    border:  none;
  }
  .arrows__flecha svg:hover{
    fill: #B4D2DA;
    transition: 100ms;
    stroke: black;
  }
  .arrows__flecha svg:active{
    fill: white;
  }
  
`;