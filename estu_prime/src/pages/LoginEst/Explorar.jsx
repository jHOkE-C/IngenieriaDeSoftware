import React, {Fragment, useEffect, useState} from 'react'
import styled from 'styled-components'
import SearchSVG from '../../assents/svg/search.svg'
import {Link} from "react-router-dom";
import CursosBuscados from '../../components/courseCardList/cursosBuscadosAlumno'
function ExplorarE() {
  const [resultados, setResultados] = useState([]);
  const [buscado, setBuscado] = useState();
  const [cursos, setCursos] = useState();
  const buscarDatos = async (e) =>{
    setBuscado(e.target.value);
    const response = await fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/cursoBuscar.php', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
            buscado: e.target.value
          }),
        });

    response.json().then(result => {
      setResultados([]);
  
      setResultados(result);
    }).catch(error => {
      console.error('problema con el pedido', error);
    });

  }
  useEffect(()=>{
    fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/cursoEstudiante.php')
      .then(res => res.json())
      .then(result => {
        setResultados(result);
        setCursos(
          <CursosBuscados resultados = {result}></CursosBuscados>
        )
      })
      .catch(error => {
        console.error('problema con el pedido', error);
      });
  },[])

  
  const changeCursos = () =>{
    setCursos(
      <CursosBuscados resultados = {resultados}></CursosBuscados>
    )
  }
  return (
    <Fragment>
      <ExplorarContainerE>
        <form className='boxS'>
            <input 
              type="text" 
              className='boxS__search'
              value={buscado}
              onChange={buscarDatos}
            ></input> 
            
            <div className="resultados">
              {resultados.length === 0 ? 
                (<h5>Búsqueda no encontrada...</h5>)
              : 
                (resultados.map(data =>
                  <div key={data.idCurso} className='resultados__links'>
                    <Link 
                      key={data.idCurso} 
                      to={`/detalleCurso/${data.idCurso}`}
                    >
                      <img src={data.ruta} alt="" className='links__img' />
                      {data.titulo}
                      <span id='especial'>: {data.nombre_docente}</span>
                    </Link>
                  </div>
                ))
              }
            </div>
            <img src={SearchSVG} alt="" className='boxS__img'/> 
            <button type='Button'  className='boxS__bButton' onClick={changeCursos}>Buscar</button>
        </form>
      </ExplorarContainerE>
      {cursos}
    </Fragment>
  )
}

export default ExplorarE

const ExplorarContainerE = styled.nav`
  display: flex;
  justify-content: space-around;
  min-width: 700px;
  span{
    font-weight: 400;
    color: #8b8b8b;
  }
  a{
    display: flex;
    align-content: center;
    margin-left: 0.5vw;
    text-decoration: none;
    color: #15292E;
    font-weight: bold ;
    font-size: calc(1vw+ .1em);
  }
  .resultados__links{
    border-radius: 5px ;
    padding-top: 2%;
    padding-bottom: 2%; 
  }
  .resultados__links:hover{
    background-color: #D6CDC8;
  }
  .links__img{
    border-radius: 5px;
    height: 40px;
    width: 40px;
    margin-right: 1vw;
  }
  .boxS{
    position: relative;
    width: calc(35vw + .9em);
    height: 3vw;
  }
  .boxS__bButton{
    top: 0;
    margin-top: 0.3vw;
    left: 105%;
    position: absolute;
    height: 100%;
    color: white;
    border: none;
    background-color: #15292E;
    border-radius: 4px;
    border: #15292E solid 1px;
  }
  .boxS__bButton:hover{
    background-color: #F2E9E4;
    color: #15292E;
  }
  .boxS__search{
    display: flex;
    margin-top: 0.3vw;
    background-color: #F2E9E4;
    border: none;
    border: 1px solid black;
    border-radius: 3px;
    width: 100%;
    height: 70%;
    padding: 1%;
    padding-left: 0.9vw;
  }
  .boxS__img{
    position: absolute;
    opacity: 1;
    height: calc(0.5vw + .9em);
    top: 30%; 
    left: 47%
  }
  .resultados{
    width: 101.4%;
    position: absolute;
    background-color: #F2E9E4;
    border: 1px solid black;
    border-radius: 3px;
    visibility: hidden;
    padding: 1%;
    max-height: 10vw;
    overflow-y: auto;
    
  }
  
  .boxS__search:focus + .resultados{
    visibility: visible;
    z-index: 100;
  }

  .resultados:hover{
    visibility: visible;
    z-index: 100;
  }
`