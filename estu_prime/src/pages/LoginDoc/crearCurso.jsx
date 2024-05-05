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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'


const validFileExtensionsImage = { image: ['jpg', 'png', 'jpeg', 'svg', 'webp'] };
const validFileExtensionsVideo = { image: ['mp4', 'mkv', 'AVI', 'H.264' ]};
function isValidFileType(fileName, fileType, valid) {
  return fileName && valid[fileType].indexOf(fileName.split('.').pop()) > -1;
}
function CrearCurso() {
  const [videos,setVideos] = useState([]);
  const [titulos, setTitulos] = useState([]);
  const [componentes, setComponentes] = useState([]);
  const [image, setImage] = useState(null);
  let navigate = useNavigate();
  const schema = yup
    .object({
      docente: yup.string(),
      precio: yup.string()
                  .required('Se requiere precio del curso'),
      img: yup.mixed()
                  .test('','No es un tipo archivo de imagen valida',
                          value => isValidFileType(value && value.name.toLowerCase(),'image',validFileExtensionsImage)
                  ),
      /*videos: yup.array()
                  .of(
                    yup.object().shape({
                      ordenVideo: yup.number,
                      video: yup.mixed()
                      .test('','No es un tipo archivo de imagen valida',
                              value => isValidFileType(value && value.name.toLowerCase(),'image',validFileExtensionsVideo)
                      ),
                    })
                  ).required("Requerido por lo menos un video"),
      titulos: yup.array()
                  .of(
                    yup.object().shape({
                      ordenTitulo: yup.number,
                      titulo: yup.string
                    })
                  ).required("Requerido por lo menos un titulo"),
      */
      titulo : yup.string()
    }).required()  
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm({resolver: yupResolver(schema),})
  const onSubmit = async (data) => { 
    if(!errors.titulo && !errors.imagen && !errors.precio){
      const response = await fetch('direccion de agregado de curso', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.titulo,
          docente: data.docente,
          precio: data.precio,
          image: data.img,
          titles: titulos,
          videos: videos
        }),
      });
      
      const dataResponse = await response.json();

      if(dataResponse.mensaje === 'Curso Creado Exitosamente'){
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
      console.log(data)
    }
  }

  const agregarComponente = () => {
    setComponentes(
      [...componentes, 
      <InputT key={componentes.length} eliminarComponente={eliminarComponente} />]
    );
  };

  const agregarComponenteA = () => {
    setComponentes(
      [...componentes, 
      <InputA key={componentes.length} eliminarComponente={eliminarComponente} />]
    );
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
 
 function cancelarTodo (){
  window.location.reload();
 }

  return (
    <CrearCursoContainer>
      <form  id='formC' onSubmit={handleSubmit(onSubmit)}>
        <div id='laminaBotonesRight'>
          <button type='submit' className='buttonImg'><img src={Save} alt=""className='imgA' /></button>
          <button onClick={cancelarTodo} type='button' className='buttonImg'><img src={Cancelar} alt=""className='imgA' /></button>
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
