import React from 'react';
import styled from 'styled-components';

function CardsCursoDocente({ title, ide}) {
  return (
    <ContainerCard>
        <div id='card'>
            <h3>{ide}</h3>
            <h4>{title}</h4>
        </div>
    </ContainerCard>
  );
}

export default CardsCursoDocente;

const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    margin: 5vw;
    #card{
        display: inline;
        width: 15%;
        background-color: #AAC7CE;
    }
    h4{
        display: inline;
    }
`;