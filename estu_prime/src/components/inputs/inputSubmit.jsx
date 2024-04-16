
import styled from 'styled-components'
import trash from '../../assents/basurero.png'
function inputSubmit({ eliminarComponente }) {
  const handleClickEliminar = () => {
    eliminarComponente();
  };
  return (
    <InputSubmitContainer>
    <div id='inputsT'>
        <input 
          type="file" 
          id='fileInput'
          accept=".mp4, .mkv, .AVI, .H.264"
        />
        <button className='buttonImg' onClick={handleClickEliminar}><img src={trash} alt=""className='imgA' /></button>
    </div>
    </InputSubmitContainer>
  )
}

export default inputSubmit

const InputSubmitContainer = styled.nav`  
  #inputsT{
    display: flex;
    align-content:center;
  }
  #fileInput{
    width: 75%;
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