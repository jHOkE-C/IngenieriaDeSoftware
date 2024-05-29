import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import trash from '../../assents/basurero.png';

function InputA({ eliminarComponente, onChangeVideo, index }) {
  const [video, setVideo] = useState(null);

  const onChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  useEffect(() => {
    if (video) {
      onChangeVideo(video, index);
      console.log(video);
    }
  }, [video, index, onChangeVideo]);

  const handleClickEliminar = (e) => {
    e.preventDefault(); // Previene la recarga de la página
    eliminarComponente(index);
  };

  return (
    <InputSubmitContainer>
      <form id='inputsT'>
        <input
          type="file"
          id="fileInput"
          accept=".mp4, .mkv, .AVI, .H.264"
          onChange={onChange}
        />
        <button className="buttonImg" onClick={handleClickEliminar}>
          <img src={trash} alt="Eliminar" className="imgA" />
        </button>
      </form>
    </InputSubmitContainer>
  );
}

export default InputA;

const InputSubmitContainer = styled.nav`
  .spanA {
    color: red;
    margin: 0px;
    padding: 0px;
    font-size: calc(0.01vw + 0.8em);
  }
  #inputsT {
    display: flex;
    align-content: center;
  }
  #fileInput {
    width: 80%;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: #AAC7CE;
    border: none;
    border-radius: 5px;
    margin-top: 1%;
    margin-right: 1%;
  }
  .imgA {
    height: 100%;
  }
  .buttonImg {
    border: none;
    background-color: #15292E;
    border-radius: 8px;
  }
  .buttonImg:hover {
    border: none;
    background-color: #035058;
    border-radius: 8px;
  }
`;
