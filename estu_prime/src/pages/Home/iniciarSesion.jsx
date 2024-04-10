import React, { useState } from 'react';
import styled from 'styled-components'
import Trash from '../../assents/basurero.png'
import Subir from '../../assents/subir.png'
import Text from '../../assents/text.png'
import Save from '../../assents/save.png'
import Cancelar from '../../assents/cancelar.png'
import InputT from '../../components/inputs/inputText'
import InputA from '../../components/inputs/inputSubmit'
function IniciarSesion() {
  const [componentes, setComponentes] = useState([]);

  const agregarComponente = () => {
    setComponentes([...componentes, <InputT key={componentes.length} />]);
  }
  const agregarComponenteA = () => {
    setComponentes([...componentes, <InputA key={componentes.length} />]);
  }

  return (
    <CrearCursoContainer>
      <form action=''>
        <div id='laminaBotonesRight'>
          <button type='submit' className='buttonImg'><img src={Save} alt=""className='imgA' /></button>
          <button type='button' className='buttonImg'><img src={Cancelar} alt=""className='imgA' /></button>
        </div>
        <h2>Crear Curso</h2>
        <div>
          <label htmlFor="">Titulo: </label>
          <input type="text" className='inputText'required/>
          <label htmlFor="">Docente: </label>
          <input type="text" value='Juan Carlos Luna' readOnly className='inputText'/>
          <div>
            <label htmlFor="">Descripcion: </label>
            <textarea type="text" maxLength={200} id='descripcionText' />
            <input type="file" />
          </div>
        </div>
        <div>
          {componentes.map((componente, index) => (
            <div key={index}>{componente}</div>
          ))}
        </div>
        <div>
          <button type='button' onClick={agregarComponenteA} className='buttonImg'><img src={Subir} alt=""className='imgA' /></button>
          <button type='button' onClick={agregarComponente} className='buttonImg'><img src={Text} alt="" className='imgA'/></button>
        </div>
      </form>
    </CrearCursoContainer>
  )
}

export default IniciarSesion

const CrearCursoContainer = styled.nav`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 50px;
  .inputText{
    border: none;
    height: 30px;
    background-color: #AAC7CE;
    border-radius: 8px;
  }
  #descripcionText{
    border: none;
    background-color: #AAC7CE;
    resize: none;
    width: 90%;
    height: 100px;
    border-radius: 8px;
  }
  #laminaBotonesRight{
    justify-content: flex-end;
  }
  .imgA{
    width: 38px;
    height: 38px;
  }
  .buttonImg{
    border: none;
    margin-top: 1%;
    background-color: #15292E;
    border-radius: 8px;
    margin-right: 10px;
  }
  .buttonImg:hover{
    border: none;
    background-color: #035058;
    border-radius: 8px;
  }
`
