import { useForm, useEffect } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from 'styled-components';
import trash from '../../assents/basurero.png';


const schema = yup
    .object({
      idCursoDocente : yup.string(),
      posicion: yup.string(),
      texto: yup.string()
    })
    .required();


function InputText({ eliminarComponente, i, onSubmit, idCurso }) {
  const index = i;
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema),})
  
  const handleClickEliminar = () => {
    eliminarComponente(index);
  };
  const handleFormSubmit =  (data) => {
    onSubmit(data, i);
  };
  return (
    <InputTextContainer>
      <form id='inputsT' onSubmit={handleSubmit(handleFormSubmit)}>
        <input 
          type="text" 
          id='textInput' 
          placeholder='Titulo o Descripciones' 
          maxLength={20}
          {... register('texto')} 
        />
        <button className='buttonImg' onClick={handleClickEliminar}><img src={trash} alt="" className='imgA' /></button>
      </form>
      <p className='spanA'>{errors.texto?.message}</p>
    </InputTextContainer>
  );
}

export default InputText;
const InputTextContainer = styled.nav`
  padding  : 0;
  margin: 0;
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
    #textInput{
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