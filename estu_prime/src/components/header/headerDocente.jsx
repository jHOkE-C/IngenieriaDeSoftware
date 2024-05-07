import React from 'react';
import styled from 'styled-components';
import Logo from '../logo'
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Header() {
    let navigate = useNavigate();
    async function cerrarSesion() {
        // Eliminar la cookie de sesión del lado del cliente

        try {
            // Enviar una solicitud al servidor para cerrar la sesión
            const response = await fetch('http://localhost//IngenieriaDeSoftware/estu_prime/src/api/cerrarSesion.php', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                // Si la solicitud fue exitosa, redirigir a la página de inicio de sesión
                navigate('/IniciarSe', { replace: true });
                window.location.reload();
            } else {
                // Manejar errores de solicitud
                console.error('Error al cerrar sesión:', response.statusText);
            }
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    }

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
                <Link className='buttonE' onClick={cerrarSesion}>Cerrar Sesion</Link>
            </div>
        </header>
    </HeaderContainerDoc>
  )
}

export default Header

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