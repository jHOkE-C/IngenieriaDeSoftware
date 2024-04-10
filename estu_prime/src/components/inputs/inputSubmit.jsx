import React from 'react'
import styled from 'styled-components'
function inputSubmit() {
  return (
    <InputSubmitContainer>
    <div>
        <input type="file" id='fileInput'></input>
    </div>
    </InputSubmitContainer>
  )
}

export default inputSubmit

const InputSubmitContainer = styled.nav`
    #fileInput{
        width: 400px;
        margin-bottom: 5px;
        padding-left: 20px;
        padding-right: 20px;    
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #AAC7CE;
        border: none;
        border-radius: 5px;
    }
`