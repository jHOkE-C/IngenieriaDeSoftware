import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styled from 'styled-components';
import Google from '../../assents/google.jpg'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert'
/*
At least one upper case English letter, (?=.*?[A-Z])
At least one lower case English letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
At least one special character, (?=.*?[#?!@$%^&*-])
Minimum eight in length .{8,} (with the anchors)
*/
const rulerUpperCase = /(?=.*?[A-Z])/;
const rulerLowerCase = /(?=.*[a-z])/;
const rulerDigit= /(?=.*[0-9])/;
/* const schema = yup
  .object({
    firstName: yup.string('Nombres: Solo esta permitido letras')
                .required('Nombres: Se requiere Nombres'),
    lastName: yup.string('Apellidos: Solo esta permitido letras')
            .required('Apellidos: Se requiere Apellidos'),
    email: yup.string().email('Email: Ingrese un Email valido')
            .required('Email: Se requiere Email'),
    password: yup.string('Password: Solo esta permitido letras')
            .required('Password: Se requiere Contraseña') 
            .matches(rulerUpperCase,'Password: Una letra mayuscula minimo')
            .matches(rulerLowerCase,'Password: Una letra minuscula minimo')
            .matches(rulerDigit,'Password: Un digito minimo')
            .min(8, 'Password: Contraseña muy corta, minimo 8 caracteres'),
    conditions: yup.boolean()
                .oneOf([true],'Debes aceptar las condiciones')
  })
  .required() */



function FormD() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm(/* {
        resolver: yupResolver(schema),
      } */)
      const onSubmit = (data) => {
        if (!errors.firstName && !errors.lastName && !errors.email && !errors.password && !errors.conditions) {
            Swal({
              icon: 'success',
              text: 'Se creó la cuenta Docente correctamente',
              buttons: ["ok", "ok uwu"]
            }).then(respuesta => {
              if (respuesta) {
                window.location.reload();
              } else {
                window.location.reload();
              }
            });
        }  
        console.log(data)
        
    }
      
  return (
    <FormContainer >
        <form  id='formD'  onSubmit={handleSubmit(onSubmit)}>
            <div id ="divLinks">
                <Link className='buttonEs' to='/CrearCuentaDoc'>Registro Docente</Link>
                <Link className='buttonE' to='/CrearCuentaEstu'>Registro Estudiante</Link>
            </div>
            <br />
            <br />
           {/*  <div className='contenedor'>
                <button className='buttonG'>Iniciar Sesion con :  <img src={Google} alt="" className='img'/></button>                      
            </div>
            <div className='contenedor'>
                <p>O continuar con:</p>           
            </div> */}
            <div className='contenedorNombre'>
                <div className='hola'>
                <input 
                    type="text" 
                    placeholder='Nombres' 
                    className='caja1' 
                    {...register("firstName", {
                        required: {
                            value: true,
                            message: "Se requiere Nombre"
                        },
                        maxLength: {
                            value: 14,
                            message: 'Has excedido el número de caracteres'
                        },
                        minLength: {
                            value: 2,
                            message: "Debe ingresar más caracteres"
                        }
                    })}
                    maxLength={15}
                />
                <span className='spanA'>{errors.firstName?.message}</span>
                </div>
                <input 
                    type="text" 
                    placeholder='Apellidos' 
                    className='caja1'
                    {...register("lastName", {
                        required: {
                            value: true,
                            message: "Se requiere Apellidos"
                        },
                        maxLength: {
                            value: 14,
                            message: 'Has excedido el número de caracteres'
                        },
                        minLength: {
                            value: 2,
                            message: "Debe ingresar más caracteres"
                        }})} 
                    maxLength={20}
                />
                <span className='spanA'>{errors.lastName?.message}</span>
                
            </div>
            <div className='contenedor3'>
                <input 
                    type="email" 
                    placeholder='Email'
                    className='caja2' 
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Ingrese un Email valido"
                        },
                        minLength: {
                            value: 6,
                            message: "Debe ingresar más caracteres"
                        }})}
                />
                <span className='spanA'>{errors.email?.message}</span>
                
                <input 
                    type="password" 
                    placeholder='Contraseña'
                    className='caja2'
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Se requiere contraseña"
                        },
                       
                        minLength: {
                            value: 8,
                            message: "Debe ingresar mas caracteres"
                        }})}

                />
                <span className='spanA'>{errors.password?.message}</span>
            </div>
            <br />
            <br />
            <div className='contenedor2'>
                <input 
                    id='checkterms' 
                    type="checkbox"
                    {...register("conditions", {
                        required: {
                            value: true,
                            message: 'Acepta las condiciones'
                        }
                    })} 
                /> 
                <span id='pE'>Creando una cuenta significa que estas deacuerdo con nuestros Terminos de servicio, Politicas de Privacidad y nuestra Configuracion Predeterminada de Notificaciones</span>
            </div>
            <div className='contenedor2'>
                <br />
                <span className='spanA'>{errors.conditions?.message}</span>
            </div>
            
            <div className='contenedor'>
                <button className='buttonG' type='submit' >Crear Cuenta</button>
            </div>
        </form>
       {/*  {errors && (errors.firstName || errors.lastName || errors.email || errors.password || errors.conditions) && (
            <div id='divSpan'>
                <span className='spanA'>{errors.firstName?.message}</span>
                <span className='spanA'>{errors.lastName?.message}</span>
                <span className='spanA'>{errors.email?.message}</span>
                <span className='spanA'>{errors.password?.message}</span>
                <span className='spanA'>{errors.conditions?.message}</span>
            </div>
        )}    */}
    </FormContainer>
  )
}

export default FormD


const FormContainer = styled.nav`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  /*   height: calc(80vh); */
    width: calc(98vw);
    min-height: 400px;
    font-size: calc(1em+1vw);
    margin: 1%;
    #divSpan{
        width: 20%;
        height: 20%;
        background-color: #15292E;
        border-radius: 4%;
        padding: 1%;
        position: absolute;
        left: 70%;
        display:grid
    }
    .spanA{
        color: red;
        display: absolute;
        font-size:calc(1vw + .1em);
    }
    #formD{
        position: relative;
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
        width: 91%;
        background-color: #B4D2DA;
        border: none;
        padding: 3%    ;
        border-radius: 0.4em;
        margin-bottom: 1%;
    }
    .caja2{
        width: 91%;
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
       /*  height: calc(80vh); */
        width: calc(33vw);
    }
    .buttonEs{
        width: 41%  ;
        color:#035058;
        margin-right: 1%;
        padding: 2.5%;
        border: none;
       /*  background-color: #035058; */
        border-radius: 5px;
        border: #035058 solid 1px;
        border-width: 2px;
        font-size: calc(1vw + .1em);
        font-weight: bold;
    }
    .buttonE{
        width: 41%  ;
        color: white;
        padding: 2.5%;
        border: none;
        background-color: #035058;
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
    /* .contenedor{
        width: 100%;
        display: grid;
        justify-content: center;
        align-items: center;
    } */

    .contenedor2{
        width: 100%;
        display: flex;
      /*   justify-content: center; */
        align-items: center;
        margin-left: 3%;
        flex-wrap: nowrap;
    }
    .contenedorNombre{
        margin-left: 3%;
        width: 98%;
        height: 10%;
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

    .hola {
        display: grid;
    }
`