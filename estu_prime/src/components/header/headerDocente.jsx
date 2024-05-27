import React from 'react';
import styled from 'styled-components';
import Logo from '../logo'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ImgPerfil from '../../assents/img/perfil.png'
function Header( { onLogout } ) {
    let navigate = useNavigate();
    async function cerrarSesion() {
        // Eliminar la cookie de sesión del lado del cliente

        try {
            // Enviar una solicitud al servidor para cerrar la sesión
            const response = await fetch('http://localhost/IngenieriaDeSoftware/estu_prime/src/api/cerrarSesion.php', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {  
                onLogout();
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
                <Link to={"/LoginDocente/Explorar"}>Explorar</Link>
                <div className='navC__espacio'>
                    <span>Tu Espacio↓</span>
                    <div className='navC__espacio--oculto'>
                        <Link to={'/LoginDocente/CrearCurso'} className='buttonE'>Crear Curso</Link>
                        <Link to={'/LoginDocente/TusCursos'} className='buttonE'>Tus cursos</Link>
                        <Link className='buttonE'>Estadisticas</Link>
                    </div>
                </div>
            </div>
            <div className='navC__Perfil'>
                <img src={ImgPerfil} alt="Perfil" className='navC__img'/>
                <div className='navC__oculto'>
                    <Link className='buttonE' >Perfil</Link>
                    <Link className='buttonE' >Editar Perfil</Link>
                    <Link className='buttonE' onClick={cerrarSesion}>Cerrar Sesion</Link>
                </div>
            </div>
            
        </header>
    </HeaderContainerDoc>
  )
}

export default Header

const HeaderContainerDoc = styled.nav`
    position: sticky;
    top: 0%;
    z-index: 1;
    .navC__espacio{
        padding: 0.8vw;
        position: relative;
        display: inline;
        border: #035058 1px solid;
    }
    .navC__espacio--oculto{
        min-width: 100%;
        left: 0;
        top: 78%;
        visibility: hidden;
        position: absolute;
    }
    span{
        color: #B4D2DA;
    }
    .navC__espacio:hover{
        border-radius: 0.5vw;
        background-color: #F2E9E4;
        border: #15292E 1px solid;
    }
    .navC__espacio span:hover+.navC__espacio--oculto{
        visibility: visible;
        z-index: 1;
    }
    .navC__espacio--oculto:hover{
        display: block;
        visibility: visible;
        z-index: 1;
    }

    .navC__Perfil{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 8.5vw;
        margin-right: 1vw;
        position: relative;
    }
    .navC__img{
        max-width: 70%;
    }
    .navC__oculto{
        top: 89%;
        min-width: 100%;
        display: block;
        visibility: hidden;
        z-index: 1;
        position: absolute;
    }
    .navC__Perfil:hover{
        background-color: #F2E9E4;
        border-radius: 0.5vw;
    }
    .navC__img:hover + .navC__oculto{
        visibility: visible;
    }
    .navC__oculto:hover{
        visibility: visible;
    }
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
        margin: 0.8rem;
       text-decoration : none;
       color: #B4D2DA;
    }
    a:hover{
        color: #F2E9E4;
    }
    .buttonE{
        margin: 0;
        display: block;
        color: white;
        padding: 8%;
        border: none;
        background-color: #15292E;
        border-radius: 5px;
        border: #15292E 0.1px solid;
    }
    .buttonE:hover{
        background-color: #F2E9E4;
        color: #15292E;
        border: #15292E 0.1px solid;
    }
`