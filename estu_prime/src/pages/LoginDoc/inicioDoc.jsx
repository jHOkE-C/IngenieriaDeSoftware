import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; 
`;

const WelcomeText = styled.h1`
  color: #035058;
  font-size: 8rem; 
  font-family: 'Roboto', sans-serif;
`;

function InicioDoc() {
  return (
    <Container>
      <WelcomeText>Welcome</WelcomeText>
    </Container>
  );
}

export default InicioDoc;
