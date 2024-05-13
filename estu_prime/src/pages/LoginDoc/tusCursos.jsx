import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assents/svg/left.svg';
import { ReactComponent as ArrowRight } from '../../assents/svg/right.svg';
import CardsCursos from '../../components/courseCard/cardCursoDocente';

function TusCursos() {
  const [cursos, setCursos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    peticionDocenteCursosCreados();
  }, []);

  const peticionDocenteCursosCreados = () => {
    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/mostrarCurso.php', {
      method: 'GET',
      credentials: 'include'
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        return res.json();
      })
      .then((data) => {
        setCursos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const renderCursos = () => {
    const startIndex = currentPage * 8;
    const endIndex = startIndex + 8;
    return cursos.slice(startIndex, endIndex).map((curso) => (
      <CardsCursos key={curso.idCurso} title={curso.nombre} ide={curso.idCurso} />
    ));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? prevPage : prevPage - 1));
  };

  return (
<<<<<<< HEAD
    <CrearCursoContainer>
      <form action='http://localhost:80/estu_prime/src/api/curso.php' id='formC' method='post' encType='multipart/form-data'>
        <div id='laminaBotonesRight'>
          <button type='submit' className='buttonImg'><img src={Save} alt=""className='imgA' /></button>
          <button type='button' className='buttonImg'><img src={Cancelar} alt=""className='imgA' /></button>
        </div>
        <h2>EDITA TUS CURSOS</h2>
        <div>
          <label id='especialL' >Titulo: </label>
          <input type="text" name='titulo' className='inputText'required/>
          <label >Docente: </label>
          <input type="text" value='Juan Carlos Luna' readOnly className='inputText'/>
          <input type="file" accept="image/*" onChange={handleImageChange} id='inputSubmit' name="imagen" />     
          <div id='divPrueba'>
            <label >Descripcion: </label>
            <textarea type="text" name='descripcion' maxLength={200} id='descripcionText' />
            {image && (
              <div className="image-container">
                <img src={image} alt="Uploaded" className="uploaded-image" />
              </div>
            )}
          </div>
        </div>
        <div>
          {componentes.map((componente, index) => (
            <div key={index}>{componente}</div>
          ))}
        </div>
        <div>
          <button type='button' onClick={agregarComponenteA} className='buttonImg'><img src={Subir} alt=""className='imgA' /></button>
          <button type='button' onClick={agregarComponente} className='buttonImg'><img src={Text} alt="" className='imgA'/></button>
        </div>
      </form>
    </CrearCursoContainer>
  )
=======
    <ListaCrearCursoContainer>
      {renderCursos()}
      <div className='arrows'>
        <button className='arrows__flecha' onClick={goToPreviousPage}>
          <ArrowLeft className='home__icon' />
        </button>
        <button className='arrows__flecha' onClick={goToNextPage}>
          <ArrowRight className='home__icon' />
        </button>
      </div>
    </ListaCrearCursoContainer>
  );
>>>>>>> 286fd827918c48e58ed9b05b2172bdec224b9732
}

export default TusCursos;

const ListaCrearCursoContainer = styled.nav`
  width: 80vw;
  position: relative;
  left: 10%;
  min-height: 80vh;
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
`
