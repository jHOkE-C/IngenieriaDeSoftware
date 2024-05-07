import React, { useState } from 'react';
import styled from 'styled-components'
import Trash from '../../assents/basurero.png'
import Subir from '../../assents/subir.png'
import Text from '../../assents/text.png'
import Save from '../../assents/save.png'
import Cancelar from '../../assents/cancelar.png'
import InputT from '../../components/inputs/inputText'
import InputA from '../../components/inputs/inputSubmit'
import Swal from 'sweetalert2'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom/dist';


const validFileExtensionsImage = { image: ['jpg', 'png', 'jpeg', 'svg', 'webp'] };
function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensionsImage[fileType].indexOf(fileName.split('.').pop()) > -1;
}
const schema = yup.object({
      titulo : yup.string()
                  .required(),
      docente: yup.string(),
      precio: yup.string()
                  .required('Se requiere precio del curso'),
      img: yup.mixed()
                  
    }).required()  
function CrearCurso() {
  const [componentes, setComponentes] = useState([]);
  const [image, setImage] = useState(null);
  
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });

    const navigate = useNavigate();



  const onSubmit = async (data) => { 
    if(!errors.titulo && !errors.imagen && !errors.precio){
      //submitVideosYTexto(); //!!!si funciona el submit de los otros datos proba este
      console.log(data);
      
      const response = await fetch('http://localhost:80/estu_prime/src/api/curso.php', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.titulo,
          descripcion: data.descripcion,
          docente: data.docente,
          precio: data.precio,
          image: data.img,
        }),
      });
      const dataResponse = await response.json();

      if(dataResponse.mensaje === 'a'){
        Swal.fire({
          icon: 'success',
          text: 'Curso Creado Exitosamente',
          background:'#F2E9E4',
          confirmButtonColor:'#15292E',
        }).then(respuesta => {
          if (respuesta) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/LoginDocente', { replace: true }) 
            window.location.reload();
          }
        }); 
      }else{
        Swal.fire({
          icon: 'error',
          text: 'Curso Creado Exitosamente',
          background:'#F2E9E4',
          confirmButtonColor:'#15292E',
        })
      }
    }
  }


  const eliminarComponente = (index) => {
    const nuevosComponentes = componentes.filter((i) => i !== index);
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




  
  const submitVideosYTexto = () => {
    componentes.forEach((comp) => {
      // Check if comp has an onSubmit function before calling it
      if (typeof comp.props.onSubmit === 'function') {
        comp.props.onSubmit();
      }
    });
  };
  const handleInputASubmit = (data) => {
    // Custom logic for handling submission within InputA
    console.log('InputA submitted with data:', data);
  };
  const agregarComponente = () => {
    const newIndex = componentes.length;
    const newComponentes = [
      ...componentes,
      <InputT
        key={newIndex}
        eliminarComponente={eliminarComponente}
        onSubmit={handleInputASubmit} 
        i={newIndex}
      />,
    ];
    setComponentes(newComponentes);
  };
  const agregarComponenteA = () => {
    const newIndex = componentes.length;
    const newComponentes = [
      ...componentes,
      <InputA
        key={newIndex}
        eliminarComponente={eliminarComponente}
        onSubmit={handleInputASubmit} 
        i={newIndex}
      />,
    ];
    setComponentes(newComponentes);
  };


 
 function cancelarTodo (){
  window.location.reload();
 }

  return (
    <CrearCursoContainer>
      <div id='divInline' onSubmit={handleSubmit(onSubmit) }>
      <form  id='formC' >
        <div id='laminaBotonesRight'>
          <button type='submit'className='buttonImg'><img src={Save} alt= '' className='imgA' /></button>
          <button  type='button' onClick={cancelarTodo} className='buttonImg'><img src={Cancelar} alt=""className='imgA' /></button>
        </div>
        <h2>Crear Curso</h2>
        <div>
          <label className='especialL' >Titulo: </label>
          <input 
            type="text" 
            className='inputText'
            {... register('titulo')}
          />
          <label >Docente: </label>
          <input 
            type="text" 
            value='Juan Carlos Luna' 
            readOnly 
            className='inputText'
            {... register('docente')}
            />
          <input 
            type="file" 
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange} 
            id='inputSubmit'
            {... register('img')}
            />     
          <div id='divPrueba'>
            <label >Descripcion: </label>
            <textarea 
              type="text" 
              maxLength={200} 
              id='descripcionText' 
              {... register('descripcion')}
            />
            {image && (
              <div className="image-container">
                <img src={image} alt="Uploaded" className="uploaded-image" />
              </div>
            )}
          </div>
          
        </div>
        <label className='especialL'>Precio: </label>
        <input 
            type="text" 
            className='inputText'
            maxLength={5}
            {... register('precio')}
            />
        
      </form>
      <div >
        {componentes.map((componente, index) => (
          <div key={index}>{componente}</div>
        ))}
        <div>
            <button type='button' onClick={agregarComponenteA} className='buttonImg'><img src={Subir} alt=""className='imgA' /></button>
            <button type='button' onClick={agregarComponente} className='buttonImg'><img src={Text} alt="" className='imgA'/></button>
        </div>
      </div>
      </div>
    </CrearCursoContainer>
  )
}

export default CrearCurso

const CrearCursoContainer = styled.nav`
  display: flex;
  min-height: calc(65vh);
  margin: 5vw;
  margin-left: 25vw;
  width: 100%;
  min-width: 1000px;
  #divInline{
    display: inline;
    min-height: calc(65vh);
    width: 100%;
    min-width: 1000px;
  }
  .image-container{
    display: inline;
  }
  #inputSubmit{
    position: relative;
  }
  #formC{
    position: relative;
    width: 60%;
  }
  .especialL{
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