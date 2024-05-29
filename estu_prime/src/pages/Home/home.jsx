import React from 'react';
import styled from 'styled-components';

function PaginaInicio() {




  const redireccionarAIniciarSesion = () => {
    window.location.href = '/IniciarSe';
  };
  const redireccionarACrearCuenta = () => {
    window.location.href = '/CrearCuentaEstu';
  };
  return (
    <div>
 
      <HeroSection>
        <Titulo>Bienvenido a EstuPrime</Titulo>
        <Descripcion>
          Encuentra una amplia gama de cursos para mejorar tus habilidades y conocimientos.
          Aprende a tu propio ritmo con la ayuda de expertos en diversos campos.
        </Descripcion>
        <Boton onClick={redireccionarAIniciarSesion}>Iniciar Sesión</Boton>
  
        <Boton onClick={redireccionarACrearCuenta}>Crear Cuenta</Boton>
      </HeroSection>
      <Contenido>
        <Seccion>
          <Subtitulo>Nuevos Lanzamientos</Subtitulo>
          <Texto>
            Mantente al día con los últimos cursos añadidos a nuestra plataforma. Nuevas
            oportunidades de aprendizaje cada semana.
          </Texto>
        </Seccion>
        <Seccion>
          <Subtitulo>Aprende a tu Ritmo</Subtitulo>
          <Texto>
            Con nuestros cursos en línea, puedes aprender a tu propio ritmo, sin
            restricciones de tiempo. Avanza y repasa cuando lo necesites.
          </Texto>
        </Seccion>
      </Contenido>

    </div>
  );
}

export default PaginaInicio;



const HeroSection = styled.section`
  text-align: center;
  padding: 1rem;
  width: 100%;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #035058;
`;

const Descripcion = styled.p`
  font-size: 1.2rem;
  color: #666;
`;


const Boton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #035058;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  margin: 1rem;
  &:hover {
    transform: scale(1.1);
    background-color: #02444a;
  }
`;

const Contenido = styled.div`
  padding: 0rem 2rem;
  width: 100%;
  max-width: 1200px;
`;

const Seccion = styled.div`
  margin-bottom: 2rem;
`;

const Subtitulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #035058;
`;

const Texto = styled.p`
  font-size: 1rem;
  color: #666;
`;

