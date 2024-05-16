import React, { useState } from 'react';
import styled from 'styled-components';

function PaginaExplorar() {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para manejar la búsqueda
    console.log('Búsqueda realizada:', busqueda);
  };

  return (
    
    <ExplorarContainer>
      <Titulo>Explorar Cursos</Titulo>
      <Formulario onSubmit={handleSubmit}>
        <InputBusqueda
          type="text"
          placeholder="Buscar cursos..."
          value={busqueda}
          onChange={handleChange}
        />
        <BotonBuscar type="submit">Buscar</BotonBuscar>
      </Formulario>
    </ExplorarContainer>
  );
}

export default PaginaExplorar;

const ExplorarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Titulo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Formulario = styled.form`
  display: flex;
  align-items: center;
`;

const InputBusqueda = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 1rem;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const BotonBuscar = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
