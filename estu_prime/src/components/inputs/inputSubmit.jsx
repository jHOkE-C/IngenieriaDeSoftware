import React from 'react';
import styled from 'styled-components';
import trash from '../../assents/basurero.png';

function InputA({ key, eliminarComponente}) {

  


  const handleClickEliminar = () => {
    eliminarComponente(key);
  };


  return (
    <InputSubmitContainer>
      <form id='inputsT' >
        <input
          type="file"
          id="fileInput"
          accept=".mp4, .mkv, .AVI, .H.264"
        />
        <button className="buttonImg" onClick={handleClickEliminar}>
          <img src={trash} alt="" className="imgA" />
        </button>
      </form>
    </InputSubmitContainer>
  );
}

export default InputA;



const InputSubmitContainer = styled.nav`
  .spanA{
    color: red;
    margin: 0px;
    padding: 0px;
    font-size: calc(0.01vw + 0.8em);
  }
  #inputsT{
    display: flex;
    align-content:center;
  }
    #fileInput{
    width: 80%;
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