import React from 'react'
import styled from'styled-components'
function inputText() {
  return (
    <InputTextContainer >
      <div>
          <input type="text" id='textInput' placeholder='Titulo o Descripciones' />
      </div>
    </InputTextContainer>
  )
}

export default inputText
const InputTextContainer = styled.nav`
    #textInput{
        padding-left: 20px;
        padding-right: 250px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #AAC7CE;
        border: none;
        border-radius: 5px;
        margin-bottom: 5px;
    }
`