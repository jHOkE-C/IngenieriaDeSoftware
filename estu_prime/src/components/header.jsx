import React from 'react';
import styled from 'styled-components';
import Logo from './logo'
function header() {
  return (
    <HeaderContainer>
        <header id='navC'>
            <Logo/>
            <div>
                <a href="">Acerca de Nosotros</a>
                <a href="">Precios</a>
                <a href="">Como Enseñar</a>
            </div>
            <div>
                <a className='buttonE' href='/iniciarSesion'>Iniciar Sesion</a>
                <a className='buttonE' href='/CrearCuentaEstu'>Crear Cuenta</a>
            </div>
        </header>
    </HeaderContainer>
  )
}

export default header

const HeaderContainer = styled.nav`

    #navC{
        display: flex;
        align-items: center;
        justify-content: space-between;
        block: inline;
        height: calc(10vh);
        width: calc(97.8vw);
        padding: 15px;
        background-color: #035058;
    }
    h2{
        color: white;
    }
    a{
        margin: 10px;
       text-decoration : none;
       color: #B4D2DA;
    }
    a:hover{
        color: #F2E9E4;
    }
    .buttonE{
        color: white;
        margin: 10px;
        padding: 10px;
        border: none;
        background-color: #15292E;
        border-radius: 5px
    }
    .buttonE:hover{
        background-color: #F2E9E4;
        color: #15292E;
    }
`