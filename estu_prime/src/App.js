import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import NavB from './components/navbar';
import Footer from './components/footer';
import HeaderMain from './components/header/header'
import HeaderDoc from './components/header/headerDocente'
import Hom from './pages/Home/home'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si hay información de autenticación en el almacenamiento local al cargar la aplicación
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false); // Cambiar a false al hacer logout
    localStorage.removeItem('isLoggedIn'); // Limpiar el valor en localStorage
  };
  return (
    <MainFrame className='main'>
      {isLoggedIn ? <HeaderDoc onLogout= {handleLogout} />  : <div> <HeaderMain /><Hom /></div>}
      {/* Resto de tu aplicación */}
      <NavB/>
      <Footer/>
    </MainFrame>
  );
}

export default App;

const MainFrame = styled.nav`
  .main{
    min-height: 768px;
    background-color: black
  }
`