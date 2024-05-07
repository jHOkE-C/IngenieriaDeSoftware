import React from 'react';
import styled from 'styled-components';
import trash from '../../assents/basurero.png';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup
    .object({
      position: yup.string(),
      video: yup.mixed()
    })
    .required();

function InputA({ eliminarComponente, i, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema),})

  const index = i;
  


  const handleClickEliminar = () => {
    eliminarComponente(index);
  };

  const handleFormSubmit = (data) => {
    // Trigger the onSubmit function passed from the parent component
    onSubmit(data);
  };

  return (
    <InputSubmitContainer>
      <form id='inputsT' onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="file"
          id="fileInput"
          accept=".mp4, .mkv, .AVI, .H.264"
          {...register('video')}
        />
        <button className="buttonImg" onClick={handleClickEliminar}>
          <img src={trash} alt="" className="imgA" />
        </button>
      </form>
      <p className='spanA'>{errors.video?.message}</p>
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