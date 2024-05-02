import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import styled from 'styled-components';
import Google from '../../assents/google.jpg'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert'

const rulerUpperCase = /(?=.*?[A-Z])/;
const rulerLowerCase = /(?=.*[a-z])/;
const rulerDigit= /(?=.*[0-9])/;
const schema = yup
  .object({
    firstName: yup.string('Solo esta permitido letras')
                .required('Se requiere Nombres'),
    lastName: yup.string('Solo esta permitido letras')
            .required('Se requiere Apellidos'),
    email: yup.string().email('Ingrese un Email valido')
            .required('Se requiere Email'),
    password: yup.string('Solo esta permitido letras')
            .required('Se requiere Contraseña') 
            .matches(rulerUpperCase,'Una letra mayuscula minimo')
            .matches(rulerLowerCase,'Una letra minuscula minimo')
            .matches(rulerDigit,'Un digito minimo')
            .min(8, 'Contraseña muy corta, minimo 8 caracteres'),
    conditions: yup.boolean()
                .oneOf([true],'Debes aceptar las condiciones')
  })
  .required()


function FormE() {

   /*  const {
        register, handleSubmit, formState: {errors}
    } = useForm()
 */
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      } ) 
      const onSubmit = (data) => {
        if (!errors.firstName && !errors.lastName && !errors.email && !errors.password && !errors.conditions) {
            Swal({
              icon: 'success',
              text: 'Se creó la cuenta estudiante correctamente',
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
    <FormContainerD>
        <form  id='formE'  onSubmit={handleSubmit(onSubmit)}>
            <div id ="divLinks">
                <Link className='buttonE' to='/CrearCuentaDoc'>Registro Docente</Link>
                <Link className='buttonEs' to='/CrearCuentaEstu'>Registro Estudiante</Link>
            </div>
            <br />
            <br />
            <div className='contenedorNombre'>
                <div className='hola'>
                <input 
                    type="text" 
                    placeholder='Nombres' 
                    className='caja1' 
                    {...register("firstName", {
                        required: {
                            value: true,
                            message: "El nombre es requerido"
                        },
                        maxLength: {
                            value: 14,
                            message: 'Has exedido el numero de caracteres'
                        },
                        minLength: {
                            value: 2,
                            message: "Debe ingresar mas caracteres"
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
                            message: "El Apellido es requerido"
                        },
                        maxLength: {
                            value: 14,
                            message: 'Has excedido el numero de caracteres'
                        },
                        minLength: {
                            value: 2,
                            message: "Debe ingresar mas caracteres"
                        }})} 
                    maxLength={20}
                />
                <span className='spanA'>{errors.lastName?.message}</span>
                
            </div>
            <div className='contenedor3'>
                <input 
                    type="email " 
                    placeholder='Email'
                    className='caja2' 
                    {...register("email", {
                        required: {
                            value: true,
                            message: "El correo es requerido"
                        },
                        maxLength: {
                            value: 14,
                            message: 'Has excedido el numero de caracteres'
                        },
                        minLength: {
                            value: 2,
                            message: "Debe ingresar mas caracteres"
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
                            message: "La contraseña es requerida"
                        },
                       
                        minLength: {
                            value: 8,
                            message: "Debe ingresar mas caracteres"
                        }})}

                />
                <p className='spanA'>{errors.password?.message}</p>
            </div>
            <br/>
            <br/>   
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
    </FormContainerD>
  )
}

export default FormE

const FormContainerD = styled.nav`
display: flex;
align-items: center;
align-content: center;
justify-content: center;
/* height: calc(80vh); */
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

#formE{
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
    width: 94%;
    background-color: #B4D2DA;
    border: none;
    padding: 3%    ;
    border-radius: 0.4em;
    margin-bottom: 1%;
    //margin-left: 3%
}
.caja2{
    width: 93%;
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
    /* height: calc(80vh); */
    width: calc(33vw);
}
.buttonEs{
    width: 41%  ;
    color: #035058;
    font-weight: bold;
    padding: 2.5%;
    border: none;
    /* background-color: #035058; */
    border-radius: 5px;
    border: #035058 solid 1px;
    border-width: 2px;
    font-size: calc(1vw + .1em);
}
.buttonE{
    width: 41%  ;
    color: white;
    margin-right: 1%;
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
    justify-content: center;
    align-items: center;
} */
.contenedor2{
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: 3%;
}
.contenedor3{
    display: inline-block;
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
.contenedorNombre {
    display: grid;
    margin-left: 3%;
}
.hola {
    display: grid;
}
`