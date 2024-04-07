import React from 'react';
import styled from 'styled-components';
import NavB from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

const isLogged = true;
function App() {
  return (
    <>
      <Header/>
      <NavB/>
      <Footer/>
    </>
  );
}

export default App;