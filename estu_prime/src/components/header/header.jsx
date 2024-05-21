import React from 'react';
import styled from 'styled-components';
import Logo from '../logo'
import { Link } from 'react-router-dom';
function header() {
  return (
    <HeaderContainer>
        <header id='navC'>
            <Logo/>
            <div>
                <Link href="">Acerca de Nosotros</Link>
                <Link href="">Precios</Link>
                <Link href="">Como Enseñar</Link>
            </div>
            <div>
                <Link className='buttonE' to='/IniciarSe'>Iniciar Sesion</Link>
                <Link className='buttonE' to='/CrearCuentaEstu'>Crear Cuenta</Link>
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
        min-width: 800px;
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