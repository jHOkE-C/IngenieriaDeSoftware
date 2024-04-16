import React from 'react';
import styled from 'styled-components';
import Logo from '../logo'
import { Link } from 'react-router-dom';
function header() {
  return (
    <HeaderContainerDoc>
        <header id='navC'>
            <Logo/>
            <div>
                <Link to={'/LoginDocente'}>Inicio</Link>
                <Link href="">Explorar</Link>
                <Link to={'/LoginDocente/CrearCurso'}>Crear Curso</Link>
                <Link to={'/LoginDocente/TusCursos'}>Tus cursos</Link>
            </div>
            <div>
                <Link className='buttonE' >Perfil</Link>
            </div>
        </header>
    </HeaderContainerDoc>
  )
}

export default header

const HeaderContainerDoc = styled.nav`

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