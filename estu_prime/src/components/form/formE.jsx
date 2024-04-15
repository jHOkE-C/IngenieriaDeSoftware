import React, { useState } from 'react';
import styled from 'styled-components';
import Google from '../../assents/google.jpg'
import { Link } from 'react-router-dom';
function FormE() {
    const [showSugerencia, setShowSugerencia] = useState(false);

  const handleFocus = () => {
    setShowSugerencia(true);
  };

  const handleBlur = () => {
    setShowSugerencia(false);
  };
  return (
    <FormContainerD>
                    <form action="" id='formD'>
                    <div id ="divLinks">
                        <Link className='buttonE' to='/CrearCuentaDoc'>Registro Docente</Link>
                        <Link className='buttonEs' to='/CrearCuentaEstu'>Registro Estudiante</Link>
                    </div>
                    <div className='contenedor'>
                        <button className='buttonG'>Iniciar Sesion con :  <img src={Google} alt="" className='img'/></button>                      
                    </div>
                    <div className='contenedor'>
                        <p>O continuar con:</p>           
                    </div>
                    <div className='contenedor'>
                        <input 
                            type="text" 
                            placeholder='Nombres' 
                            className='caja1' 
                            required 
                            minLength={4} 
                            maxLength={15} 
                            pattern="[A-Za-z ]+" 
                            onFocus={handleFocus} 
                            onBlur={handleBlur}
                        />
                        <input 
                            type="text" 
                            placeholder='Apellidos' 
                            className='caja1' 
                            required 
                            minLength={5} 
                            maxLength={20} 
                            pattern="[A-Za-z ]+" 
                            onFocus={handleFocus} 
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className='contenedor3'>
                        <input 
                            type="email " 
                            placeholder='Email'
                            className='caja2' 
                            required 
                            minLength={11}/>
                        <input 
                            type="password" 
                            placeholder='Contraseña'
                            className='caja2' 
                            required 
                            minLength={8} 
                            maxLength={12}/>
                    </div>
                    <br />
                    <br />
                    <div className='contenedor2'>
                        <input id='checkterms' type="checkbox" required/>
                        <p id='pE'>Creando una cuenta significa que estas deacuerdo con nuestros Terminos de servicio, Politicas de Privacidad y nuestra Configuracion Predeterminada de Notificaciones</p>
                    </div>
                    <div className='contenedor'>
                        <button className='buttonG' type='submit' >Crear Cuenta</button>
                    </div>
                </form>
                {showSugerencia && (
                    <span id='span'>
                        Solo caracteres alfabéticos
                    </span>
                )}
    </FormContainerD>
  )
}

export default FormE

const FormContainerD = styled.nav`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: calc(80vh);
    width: calc(98vw);
    font-size: calc(1em+1vw);
    min-height: 500px;
    min-width: 1000px;
    margin: 1%;
    #span{
        position: absolute;
        left: 65%;
        top: 50%;
        color: #15292E;
    }
    #formD{
        width: 30%;
    }
    .img{
        width: 5%;
        height: 5%;
    }
    #pE{
        font-size: calc(0.7vw + .1em);
    }
    #radius{
        width: 10px;
    }
    .caja1{
        width: 40%;
        background-color: #B4D2DA;
        border: none;
        padding: 3.2%;
        margin: 1%;
        border-radius: 0.4em;
    }
    .caja2{
        width: 90%;
        background-color: #B4D2DA;
        border: none;
        padding: 3%    ;
        border-radius: 0.4em;
        margin-bottom: 1%;
    }
    #divLinks{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    a{
        text-align: center;
        font-size: 1rem;
       text-decoration : none;
       color: #B4D2DA;
    }
    form{
        display: block;
        align-items: center;
        justify-content: center;
        align-content: center;
        height: calc(80vh);
        width: calc(33vw);
    }
    .buttonEs{
        width: 41%  ;
        color: white;
        padding: 2.5%;
        border: none;
        background-color: #035058;
        border-radius: 5px;
        border: #035058 solid 1px;
        font-size: calc(1vw + .1em);
    }
    .buttonE{
        width: 41%  ;
        color: white;
        padding: 2.5%;
        margin-right: 1%;
        border: none;
        background-color: #15292E;
        border-radius: 5px;
        border: #035058 solid 1px;
        font-size: calc(1vw + .1em);
    }
    .buttonE:hover{
        background-color: #F2E9E4;
        color: #15292E;
        border: #035058 solid 1px;
    }
    .buttonE:active{
        background-color: #035058;
        color: white;
        border: #035058 solid 1px;
    }
    .contenedor{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contenedor2{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15%;
    }
    .contenedor3{
        margin-left: 3%;
        width: 98%;
        height: 10%;
    }
    .buttonG{
        width: 100%;
        border: none;
        background-color: #15292E;
        color: white;
        margin: 3%;
        display: flex;
        align-content: center;
        justify-content: center;
        border-radius: 5px;
        padding-top: 3.5%;
        padding-bottom: 3.5%;
        border: #035058 solid 1px;
        font-size: calc(1vw + .1em);
    }
    .buttonG:hover{     
        background-color: #F2E9E4;
        color: #15292E;
        border: #035058 solid 1px;
    }
    .buttonG:active{
        background-color: #035058;
        color: white;
        border: #035058 solid 1px;
    }
`