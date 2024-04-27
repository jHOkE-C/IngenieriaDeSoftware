import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrowLeft from '../../assents/img/left.png';
import arrowRight from '../../assents/img/right.png';
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
    setCurrentPage((prevPage) => prevPage == 0? prevPage:prevPage-1);
  };

  return (
    <ListaCrearCursoContainer>
      {renderCursos()}
      <div className='arrows'>
        <button className='arrows__flecha' onClick={goToPreviousPage}>
          <img src={arrowLeft} alt='Previous Page' />
        </button>
        <button className='arrows__flecha' onClick={goToNextPage}>
          <img src={arrowRight} alt='Next Page' />
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
    justify-content: center;
    margin: 2%;
  }
  .arrows__flecha{
    background: none;
    border: 1px solid #F2E9E4;
  }
  .arrows__flecha:hover{
    background: none;
    border: 1px solid #AAC7CE;
  }
  .arrows__flecha:active{
    background: none;
    border: 1px solid white;
  }
`;