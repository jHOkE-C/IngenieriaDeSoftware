import React from 'react';
import styled from 'styled-components';
import ImgEdit from '../../assents/img/edit.png'
import { Navigate, useNavigate, Link } from "react-router-dom";


function CardsCursoDocente({ title, ide, nombre_docente, precio,img }) {
    const navigate = useNavigate();
  
    const nav = () => {
      navigate('/LoginDocente/EditCurso', { replace: true });
      window.location.reload();
    };
  
    return (
      <ContainerCard>
        <div className='card'>
          <img src={img} alt='imgCurso' className='card__img'></img>
          <p className='card__title'><strong>{title}</strong></p>
          <div className='cardFondo'>
            <button type='button' className='cardFondo__edit' onClick={nav}>
              <img src={ImgEdit} alt='' className='cardFondo__img' />
            </button>
          </div>
          <p className='card__details'>Docente: {nombre_docente}</p>
          <p className='card__details'>Precio: {precio}</p>
        </div>
      </ContainerCard>
    );
  }

export default CardsCursoDocente;


const ContainerCard = styled.div`
  display: inline;

    .card{
      position: relative;
      padding: 1vh;
      text-align: center;
      display: inline-block; 
      margin-top: 3%;
      margin-left: 2.5%;
      margin-right: 2.5%;
      width: 15vw;
      height: 15vw;
      background-color: #F2E9E4;
      border-radius: 1vw;
      box-shadow: 5px 5px 1px;
      border: #15292E 1px solid;
      overflow: hidden;
    }
    .card__img{
      height: 40%;
      border-radius: 1vw;
    }
    .cardFondo{
        border-radius: 1vw;
        display: flex;
        position: absolute;    
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
    }
    .cardFondo__edit{
        border: none;
        display: flex;
        position: relative;
        align-items: center;
        left: 36%;
        top: 40%;
        height: 28%;
        opacity: 0;
        border-radius: 1vw;
    }
    .cardFondo__img{
        opacity: 0;
    }
    .cardFondo:hover{
        transition: 500ms;
        background-color: rgba(21,41,46,0.5);
        .cardFondo__edit{
            transition: 1000ms;
            background-color: #15292E;
            opacity: 1;
        }
        .cardFondo__img{
            transition: 2000ms;
            opacity: 1;
        }
        .cardFondo__edit:hover{
            transition: 100ms;
            background-color: #D6CDC8;
        }
        .cardFondo__edit:active{
            background-color: #15292E;
        }
    }
  .card__title {
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.2em;
    margin: 10px;
    display: block;
  }
  .card__details {
    font-size: 0.9em;
    margin: 5px;
  }
`;