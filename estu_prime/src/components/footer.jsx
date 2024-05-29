import React from 'react'
import styled from 'styled-components'
import Facebook from '../assents/facebook.png';
import Instagram from '../assents/instagram.png';
import Whatshapp from'../assents/whatsapp.png';
import Logo from './logo'
const footer = () => {
  return (
    <FooterContainer> 
      <footer className='footerMain'>
        <div id="luDiv">
          <ul id='ulFooter'>
            <li>
              <a href="">Declaracion de Estabilidad</a>
            </li>
            <li>
              <a href="">Configuracion de Cookies</a>
            </li>
            <li>
              <a href="">Politica de Privacidad</a>
            </li>
          </ul>
          <ul id='ulFooter'>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Contáctanos</a>
            </li>
            <li>
              <a href="">Condiciones</a>
            </li>
          </ul>
        </div>
          <div id='divImagenesLogo'>
            <Logo/>
            <img src={Facebook} alt=""  className='imgR'/>
            <img src={Instagram} alt="" className='imgR'/>
            <img src={Whatshapp} alt="" className='imgR'/>
            <p>©All rights reserved 2024</p>
          </div>
      </footer>
    </FooterContainer>
  )
}

export default footer

const FooterContainer = styled.nav`
  .footerMain{
    min-height: 210px;
  }
  #luDiv{
    display: flex;
  }
  #ulFooter{
    list-style: none;
    text-decoration: none;
    margin: 20px;
    padding: 0px;
  }
  #divImagenesLogo{
    margin: 20px;
    display: flex;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  footer{
    display: block;
    background-color: #035058;
    width: 100vw;
    height: 30vh;
    position: absolute;
    bottom: 0;
  }
  .imgR{
    width: 30px;
    height: 30px;
  }
  a{
    margin: 10px;
    text-decoration : none;
    color: #B4D2DA;
    font-size: 1rem;
  }
  a:hover{

    color: #F2E9E4;
  }
  p{
    position: absolute;
    left: 84vw;
  }
`