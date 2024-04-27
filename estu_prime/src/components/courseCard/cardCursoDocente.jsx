import React from 'react';
import styled from 'styled-components';

function CardsCursoDocente({ title, ide}) {
  return (
    <ContainerCard>
        <div className='card'>
            <h3 className='card__img'>{ide}</h3>
            <p className='card__title'>{title}</p>
        </div>
    </ContainerCard>
  );
}

export default CardsCursoDocente;

const ContainerCard = styled.div`
    display: inline;
    .card{
        text-align: center;
        display: inline-block; 
        margin: 3%;
        width: 15vw;
        height: 15vw;
        background-color: #AAC7CE;
        border-radius: 1vw;
    }
    .card__title{
        white-space: nowrap; /* Evita que el texto del párrafo salte a la siguiente línea */
        overflow: hidden; /* Oculta el contenido que se desborda del contenedor */
        text-overflow: ellipsis; /* Añade puntos suspensivos (...) al final del texto recortado */  
    }
`;