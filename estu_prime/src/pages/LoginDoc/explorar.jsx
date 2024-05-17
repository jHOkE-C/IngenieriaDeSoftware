import React, {useState} from 'react'
import styled from 'styled-components'
function ExplorarD() {
  const [resultados, setResultados] = useState(null)
  const [buscado, setBuscado] = useState()
  const buscarDatos = (e) =>{
    
  }
  return (
    <ExplorarContainer>
      <form className='boxS'>
        <input type="text" 
          className='boxS__search'
          value={buscado}
          onChange={buscarDatos}
        />
        <div className="resultados">
          {resultados === null ? 
          <h5>Búsqueda no encontrada...</h5> 
          : 
          null
          }
        </div>
      </form>
    </ExplorarContainer>
  )
}

export default ExplorarD

const ExplorarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  min-height: 90vh;
  .boxS{
    position: relative;
    width: 35vw;
    height: 3vw;
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
  .resultados{
      width: 100%;
      position: absolute;
      background-color: #F2E9E4;
      border: 1px solid black;
      border-radius: 3px;
      visibility: hidden;
      padding: 1%;
  }
  .boxS__search:focus-visible + .resultados{
    visibility: visible;
  } 
`