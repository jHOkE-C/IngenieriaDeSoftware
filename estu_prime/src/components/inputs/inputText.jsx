import React from 'react';
import styled from 'styled-components';
import trash from '../../assents/basurero.png';

function InputText({ eliminarComponente }) {
  const handleClickEliminar = () => {
    eliminarComponente();
  };

  return (
    <InputTextContainer>
      <div id='inputsT'>
        <input type="text" id='textInput' placeholder='Titulo o Descripciones' />
        <button className='buttonImg' onClick={handleClickEliminar}><img src={trash} alt="" className='imgA' /></button>
      </div>
    </InputTextContainer>
  );
}

export default InputText;
const InputTextContainer = styled.nav`
  #inputsT{
    display: flex;
    align-content:center;
  }
    #textInput{
    width: 100%;
    padding-left: 1% ;
    padding-right: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: #AAC7CE;
    border: none;
    border-radius: 5px;
    margin-top: 1%;
    margin-right: 1%;
  }
  .imgA{
    height: 100%;
  }
  .buttonImg{
    border: none;
    background-color: #15292E;
    border-radius: 8px;
  }
  .buttonImg:hover{
    border: none;
    background-color: #035058;
    border-radius: 8px;
  }
`