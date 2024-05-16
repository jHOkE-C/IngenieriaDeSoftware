import React from 'react';
import styled from 'styled-components';

function PaginaInicio() {
  const redireccionarAListadoCursos = () => {
    window.location.href = '/LoginEstudiante/ListCursos';
  };

  const redireccionarAExplorar = () => {
    window.location.href = '/LoginEstudiante/Explorar';
  };

  return (
    <InicioContainer>
      <Titulo>Bienvenido a la Plataforma Educativa</Titulo>
      <Descripcion>
        Encuentra una amplia gama de cursos para mejorar tus habilidades y conocimientos.
      </Descripcion>
      <BotonExplorar onClick={redireccionarAListadoCursos}>Cursos Disponibles</BotonExplorar>
      <BotonExplorar onClick={redireccionarAExplorar}>Explorar</BotonExplorar>
    </InicioContainer>
  );
}

export default PaginaInicio;

const InicioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Titulo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Descripcion = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const BotonExplorar = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #035058;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: scale(1.1);
    background-color: #035058;
  }
`;
