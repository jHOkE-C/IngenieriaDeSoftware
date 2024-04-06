import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function form() {
  return (
    <FormContainer>
        <Router>
            <div id='formD'>
                <form action="">
                    <div id ="divLinks">
                        <Link className='buttonE' to={'/iniciarSesion'}>Crear Cuenta Docente</Link>
                        <Link className='buttonE' to={'/CrearCuentaEstu'}>Crear Cuenta Estudiante</Link>
                    </div>
                    <div className='contenedor'>
                        <button className='buttonG'>Iniciar Sesion con:</button> 
            
                    </div>
                    <div className='contenedor'>
                        <p>O continuar con:</p>           
                    </div>
                    <div className='contenedor'>
                        <input type="text" placeholder='Nombres' className='caja1' required minLength={4}/>
                        <input type="text" placeholder='Apellidos' className='caja1' required minLength={5}/>
                    </div>
                    <div className='contenedor3'>
                        <input type="email " placeholder='Email'className='caja2' required/>
                        <input type="password" placeholder='Contraseña'className='caja2' required minLength={8}/>
                    </div>
                    <br />
                    <br />
                    <div className='contenedor2'>
                        <input id='checkterms' type="checkbox" required/>
                        <p class p>Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings</p>
                    </div>
                    <div className='contenedor'>
                        <button className='buttonG' type='submit' >Crear Cuenta</button>
                    </div>
                </form>
            </div>
        </Router>
    </FormContainer>
  )
}

export default form


const FormContainer = styled.nav`
    #checkterms{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        font-size: 10px;
    }
    #radius{
        width: 10px;
    }
    .caja1{
        background-color: #B4D2DA;
        border: none;
        padding: 12px;
        margin: 5px;
        border-radius: 5px;
    }
    .caja2{
        width: 80%;
        background-color: #B4D2DA;
        border: none;
        padding: 12px;
        margin: 5px;
        border-radius: 5px;
    }
    #divLinks{
        display: flex;
        margin: 20px;
        justify-content: center;
    }
    a{
       text-decoration : none;
       color: #B4D2DA;
    }

    #formD{
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: calc(80vh);
        width: calc(98vw);
    }
    form{
        display: block;
        align-items: center;
        justify-content: center;
        align-content: center;
        height: calc(80vh);
        width: calc(33vw);
        background-color: beige;
    }
    .buttonE{
        color: white;
        margin: 5px;
        padding: 10px;
        border: none;
        background-color: #15292E;
        border-radius: 5px
    }
    .buttonE:hover{
        background-color: #F2E9E4;
        color: #15292E;
    }
    .contenedor{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contenedor2{
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contenedor3{
        width: 100%;
        height: 10%;
    }
    .buttonG{
        border: none;
        background-color: #15292E;
        color: white;
        margin: 10px;
        border-radius: 5px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 30%;
        padding-right: 30%;
    }
    .buttonG:hover{
        background-color: #F2E9E4;
        color: #15292E;
    }
`