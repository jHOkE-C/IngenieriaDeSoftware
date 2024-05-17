import React, {useState} from 'react'
import styled from 'styled-components'
function ExplorarD() {
  const [resultados, setResultados] = useState()
  const [buscado, setBuscado] = useState()
  const buscarDatos = () =>{
    
  }
  return (
    <ExplorarContainer>
      <form>
        <input type="text" 
          value={buscado}
          onChange={buscarDatos}
        />
      </form>
    </ExplorarContainer>
  )
}

export default ExplorarD

const ExplorarContainer = styled.nav`
  
`