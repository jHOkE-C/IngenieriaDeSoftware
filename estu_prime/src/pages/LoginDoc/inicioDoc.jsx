import React, { Fragment } from 'react';

import styled from 'styled-components';
import Img1 from '../../assents/img/1.jpg'
import Img2 from '../../assents/img/2.jpg'
import Img3 from '../../assents/img/3.jpg'



const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10%;
  position: relative;
  h1{
    z-index: 1;
    position: absolute;
    color: #035058;
    font-size: calc(8vw + .1rem); 
    font-family: 'Roboto', sans-serif;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #15292E;
  }
  p{
    position: absolute;
    top: 70%;
    color: #035058;
    font-family: 'Roboto', sans-serif;
    font-size: calc(1vw + .1rem); 
    -webkit-text-stroke-width: 0.03rem;
    -webkit-text-stroke-color: #15292E;
  }
  .img1{
    width: 30%;
    background-size: cover;
    background-position: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: skewX(-5deg);
  }
  .img2{
    width: 30%;
    background-size: cover;
    background-position: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: skewX(-5deg);
    transform: skewX(-5deg) translateY(-5%);
  }
  .img3{
    width: 30%;
    background-size: cover;
    background-position: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: skewX(-5deg); 
    transform: skewX(-5deg) translateY(-5%); 
  }
`

function InicioDoc() {
  return (
    <Fragment>
      <ContainerImg>
        <h1>BIENVENIDO</h1>
        <img src={Img1} alt="" className='img1'/>
        <img src={Img2} alt="" className='img2'/>
        <img src={Img3} alt="" className='img3'/>
        <p>A la nueva Era de la Educacion.</p>
      </ContainerImg>
    </Fragment>
  );
}

export default InicioDoc;
