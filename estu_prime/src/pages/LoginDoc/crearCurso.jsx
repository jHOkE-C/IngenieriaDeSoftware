import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Trash from '../../assents/basurero.png'
import Subir from '../../assents/subir.png'
import Text from '../../assents/text.png'
import Save from '../../assents/save.png'
import Cancelar from '../../assents/cancelar.png'
import InputT from '../../components/inputs/inputText'
import InputA from '../../components/inputs/inputSubmit'
import Swal from 'sweetalert2'


function CrearCurso() {
  const [componentes, setComponentes] = useState([]);
  const [image, setImage] = useState(null);

  const agregarComponente = () => {
    setComponentes([...componentes, <InputT key={componentes.length} eliminarComponente={eliminarComponente} />]);
  };

  const agregarComponenteA = () => {
    setComponentes([...componentes, <InputA key={componentes.length} eliminarComponente={eliminarComponente} />]);
  };

  const eliminarComponente = (index) => {
    const nuevosComponentes = componentes.filter((_, i) => i !== index);
    setComponentes(nuevosComponentes);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('imagen', file);
      // Puedes enviar formData a través de una solicitud HTTP POST si es necesario
    }
  };

 function mostrarAlerta(successMessage){
  if (successMessage) {
    Swal.fire({
        icon: 'success',
        text: successMessage,
        buttons: [,"ok uwu"]
    }).then(respuesta => {
        if (respuesta) {
            // No hagas nada si el usuario hace clic en "ok"
        }
    });
}
}

 useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get('success');
  if (success) {
    mostrarAlerta(success); // Ejecuta la función si hay un mensaje de éxito
  }
}, []);
 
 function cancelarTodo (){
  window.location.reload();
 }

  return (
    <CrearCursoContainer>
      <form action='http://localhost:80/estu_prime/src/api/curso.php' id='formC' method='post' encType='multipart/form-data'>
        <div id='laminaBotonesRight'>
          <button onClick={mostrarAlerta} type='submit' className='buttonImg'><img src={Save} alt=""className='imgA' /></button>
          <button onClick={cancelarTodo} type='button' className='buttonImg'><img src={Cancelar} alt=""className='imgA' /></button>
        </div>
        <h2>Crear Curso</h2>
        <div>
          <label id='especialL' >Titulo: </label>
          <input 
            type="text" 
            name='titulo' 
            className='inputText'
            maxLength={20}
            required/>
          <label >Docente: </label>
          <input 
            type="text" 
            value='Juan Carlos Luna' 
            readOnly 
            className='inputText'/>
          <input 
            type="file" 
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange} 
            id='inputSubmit' 
            name="imagen" 
            />     
          <div id='divPrueba'>
            <label >Descripcion: </label>
            <textarea 
              type="text" 
              name='descripcion' 
              maxLength={200} 
              id='descripcionText' />
            {image && (
              <div className="image-container">
                <img src={image} alt="Uploaded" className="uploaded-image" />
              </div>
            )}
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

export default CrearCurso

const CrearCursoContainer = styled.nav`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 50px;
  min-height: calc(65vh);
  width: 100%;
  min-width: 1000px;
  #divPrueba{
    display: inline;
  }
  .image-container{
    display: inline;
  }
  #inputSubmit{
    position: relative;
  }
  #formC{
    width: 60%;
  }
  #especialL{
    margin-right: 5%;
  }
  .inputText{
    border: none;
    height: 30px;
    background-color: #AAC7CE;
    border-radius: 8px;
    margin-right: 1%;
  }
  #descripcionText{
    display: inline;
    border: none;
    background-color: #AAC7CE;
    resize: none;
    width: 52%;
    height: 100px;
    border-radius: 8px;
    margin-top: 2%;
  }
  #laminaBotonesRight{
    justify-content: right;
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
  .uploaded-image{
    width: 20%;
  }
`
