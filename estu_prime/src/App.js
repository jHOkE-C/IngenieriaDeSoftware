import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavB from './components/navbar';
import Footer from './components/footer';
import Header from './components/header/header';
import HeaderEst from './components/header/headerEstudiante';
import HeaderDoc from './components/header/headerDocente';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }

    const userRole = localStorage.getItem('userRole');
    if (userRole) {
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
  };

  let headerComponent = () => {
    if (isLoggedIn) {
      if (role === 'estudiante') {
        return <HeaderEst onLogout={handleLogout} />;
      } else if (role === 'docente') {
        return <HeaderDoc onLogout={handleLogout} />;
      }
    }
    return <Header onLogout={handleLogout} />;
  };

  return (
    <MainFrame className='main'>
      {headerComponent()}
      <NavB/>
      <Footer/>
    </MainFrame>
  );
}

export default App;

const MainFrame = styled.nav`
  .main {
    min-height: 768px;
    background-color: black;
  }
`;
