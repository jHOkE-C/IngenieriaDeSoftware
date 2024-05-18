import React, {Fragment, useState} from 'react'
import styled from 'styled-components'
import SearchSVG from '../../assents/svg/search.svg'
import Cursos from './tusCursos'
import {Link} from "react-router-dom";

function ExplorarD() {
  const [resultados, setResultados] = useState(null)
  const [buscado, setBuscado] = useState()
  const buscarDatos = async (e) =>{
    setBuscado(e.target.value);
    console.log(buscado);
    const response = await fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/cursoBuscar.php', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
            buscado: buscado
          }),
        });
    const dataResponse = await response.json();
    console.log(dataResponse.mensaje);
    setResultados(null)
    let res = dataResponse.map(data => {
        <Link to={`/detalleCurso/${data.idCurso}`}>{data.titulo}</Link>
    })
    setResultados(res);
  }
  return (
    <Fragment>
      <ExplorarContainer>
        <form className='formS'>
          <div className='boxS'>
            <input 
              type="text" 
              className='boxS__search'
              value={buscado}
              onChange={buscarDatos}
            ></input>  
            <div className="resultados">
              {resultados === null ? 
              <h5>Búsqueda no encontrada...</h5> 
              : 
              resultados.map((componentes)=>{
                <div>{componentes}</div>
              })
              }
            </div>
            <img src={SearchSVG} alt="" className='boxS__img'/> 
          </div>
          
        </form>
        
      </ExplorarContainer>
      <Cursos></Cursos>
    </Fragment>
  )
}

export default ExplorarD

const ExplorarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  .formS{
    position: relative;
    width: 35vw;
    height: 3vw;
  }
  .boxS{
    display: block;
  }
  .boxS__search{
    margin-top: 0.3vw;
    background-color: #F2E9E4;
    border: none;
    border: 1px solid black;
    border-radius: 3px;
    width: 100%;
    height: 70%;
    padding: 1%;
  }
  .boxS__img{
    position: absolute;
    height: 20px;
    top: 0.5vw;
    left: 97%;
  }
  .resultados{
      width: 100%;
      position: absolute;
      background-color: #F2E9E4;
      border: 1px solid black;
      border-radius: 3px;
      visibility: hidden;
      padding: 1%;
      max-height: 220%;
  }
  .boxS__search:focus-visible + .resultados{
    visibility: visible;
    z-index: 100;
  } 
`