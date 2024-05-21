
import styled from 'styled-components';
import trash from '../../assents/basurero.png';
import { useState } from 'react';




function InputText({eliminarComponente, onChangeTexto, index}) {
  const [texto,setTexto] = useState();
  const handleClickEliminar = () => {
    eliminarComponente(index);
  };
  const onChange = (e) =>{
    setTexto(e.target.value);
    onChangeTexto(texto, index);
  }
  
  return (
    <InputTextContainer>
      <form id='inputsT'>
        <input 
          type="text" 
          id='textInput' 
          value = {texto}
          placeholder='Titulo o Descripciones' 
          maxLength={20}
          onChange={onChange}
        />
        <button className='buttonImg' onClick={handleClickEliminar}><img src={trash} alt="" className='imgA' /></button>
      </form>
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