import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Trash from '../../assents/basurero.png';
import Subir from '../../assents/subir.png';
import Text from '../../assents/text.png';
import Save from '../../assents/save.png';
import Cancelar from '../../assents/cancelar.png';
import InputT from '../../components/inputs/inputText';
import InputA from '../../components/inputs/inputSubmit';
import Swal from 'sweetalert2';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const validFileExtensionsImage = { image: ['jpg', 'png', 'jpeg', 'svg', 'webp'] };

function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensionsImage[fileType].indexOf(fileName.split('.').pop()) > -1;
}

const schema = yup.object({
  titulo: yup.string().required(),
  docente: yup.string(),
  precio: yup.number().typeError('El precio debe ser un número').required('Se requiere precio del curso'),
  img: yup.mixed()
}).required();

function CrearCurso() {
  const [componentes, setComponentes] = useState([]);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [inputTexts, setInputTexts] = useState([]);
  const [inputVideos, setInputVideos] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (!errors.titulo && !errors.precio) {
      console.log(inputTexts);
      const response = await fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/curso.php', {
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
          img: image,
          textos: inputTexts,
          videos: inputVideos
        }),
      });
      const dataResponse = await response.json();
      console.log(dataResponse.mensaje);
      if (dataResponse.mensaje === 'a') {
        Swal.fire({
          icon: 'success',
          text: 'Curso Creado Exitosamente',
          background: '#F2E9E4',
          confirmButtonColor: '#15292E',
        }).then(respuesta => {
          if (respuesta) {
            navigate('/LoginDocente', { replace: true });
            window.location.reload();
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Error al Guardar, pruebe mas tarde',
          background: '#F2E9E4',
          confirmButtonColor: '#15292E',
        });
      }
    }
  };

  const eliminarComponente = (id) => {
    console.log("ID:", id);
    setComponentes(
      (prevComponentes) => prevComponentes.filter((componente) => componente.id !== id)
    );
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file); // Leer el archivo como una URL base64
    }
    reader.onloadend = () => {
      const imageUrl = reader.result; // Obtener la URL de la imagen cargada
      setImage(imageUrl); // Establecer la imagen en el estado
    };
  };

  useEffect(() => {
    const getNombre = async () => {
      try {
        const response = await fetch('http://localhost:80/IngenieriaDeSoftware/estu_prime/src/api/obtenerNombre.php', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const responseData = await response.json();
        setName(responseData.nombre_docente);
        console.log(responseData.nombre_docente);
      } catch (error) {
        console.error('Error al obtener o analizar datos JSON:', error);
      }
      return "a";
    };
    const a = getNombre();
  }, []);

  const onChangeTexto = (texto, pos) => {
    setInputTexts((previus) =>
      [...previus,
        {
          posicion: pos,
          text: texto
        }
      ]
    );
  };

  const onChangeVideo = (video, pos) => {
    setInputVideos((previus) =>
      [...previus,
        {
          posicion: pos,
          video: video
        }
      ]
    );
  };

  const agregarComponente = () => {
    const newId = componentes.length;
    const newComponentes = [
      ...componentes,
      {
        id: newId,
        component: <InputT
          eliminarComponente={() => eliminarComponente(newId)}
          onChangeTexto={(text) => onChangeTexto(text, newId)}
        />
      }
    ];

    setComponentes(newComponentes);
  };

  const agregarComponenteA = () => {
    const newId = componentes.length;
    const newComponentes = [
      ...componentes,
      {
        id: newId,
        component: <InputA
          eliminarComponente={() => eliminarComponente(newId)}
          onChangeVideo={(video) => onChangeVideo(video, newId)}
        />
      }
    ];
    setComponentes(newComponentes);
  };

  const cancelarTodo = () => {
    window.location.reload();
  };

  const handleKeyPress = (e) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  return (
    <CrearCursoContainer>
      <div id='divInline'>
        <form className='formC' onSubmit={handleSubmit(onSubmit)}>
          <div id='laminaBotonesRight'>
            <button type='submit' className='buttonImg'><img src={Save} alt='' className='imgA' /></button>
            <button type='button' onClick={cancelarTodo} className='buttonImg'><img src={Cancelar} alt="" className='imgA' /></button>
          </div>
          <h2>Crear Curso</h2>
          <div>
            <label className='especialL'>Titulo: </label>
            <input
              type="text"
              className='inputText'
              {...register('titulo')}
            />
            <label>Docente: </label>
            <input
              type="text"
              value={name}
              readOnly
              className='inputText'
              {...register('docente')}
            />
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              id='inputSubmit'
              {...register('img', {
                onChange: (e) => { handleImageChange(e) }
              })}
            />
            <div id='divPrueba'>
              <label>Descripcion: </label>
              <textarea
                type="text"
                maxLength={200}
                id='descripcionText'
                {...register('descripcion')}
              />
              {image && (
                <img src={image} alt="Uploaded" className="uploaded-image" />
              )}
            </div>
          </div>
          <label className='especialL'>Precio: </label>
          <input
            type="text"
            className='inputText'
            maxLength={5}
            {...register('precio')}
            onKeyPress={handleKeyPress}
          />
        </form>
        <div>
          <div id='componentesFlex'>
            {componentes.map(({ id, component }) => (
              <div key={id}>{component}</div>
            ))}
            <button type='button' onClick={agregarComponenteA} className='buttonImg'><img src={Subir} alt="" className='imgA' /></button>
            <button type='button' onClick={agregarComponente} className='buttonImg'><img src={Text} alt="" className='imgA' /></button>
          </div>
        </div>
      </div>
    </CrearCursoContainer>
  );
}

export default CrearCurso;

const CrearCursoContainer = styled.nav`
  display: flex;
  min-height: calc(65vh);
  margin: 5vw;
  margin-left: 20vw;
  #componentesFlex{
    width: 100%;
    border: #15292E 1px solid;
    padding: 5%;
    border-radius: 1vh;
  }
  #divInline{
    display: inline;
    min-height: calc(65vh);
    width: 77%;
  }
  #inputSubmit{
    position: relative; 
  }
  .uploaded-image{
    margin-left: 1.4vw;
    height: 16vh;
    border-radius: 1vw;
  }
  .formC{
    border: #15292E 1px solid;
    padding: 5%;
    border-radius: 1vh;
    position: relative;
    width: 100%;
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
    border: #15292E 1px solid;
    border-radius: 8px;
    margin-right: 10px;
  }
  .buttonImg:hover{
    border: none;
    background-color: #D6CDC8;
    border: #15292E 1px solid;
    border-radius: 8px;
  }
`;
