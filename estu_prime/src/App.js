import React from 'react';
import styled from 'styled-components';
import NavB from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

const isLogged = true;
function App() {
  return (
    <MainFrame className='main'>
      <Header/>
      <NavB/>
      <Footer/>
    </MainFrame>
  );
}

export default App;

const MainFrame = styled.nav`
  .main{
    width: 100vw;
    height: 100vh;
    background-color: black
  }
`