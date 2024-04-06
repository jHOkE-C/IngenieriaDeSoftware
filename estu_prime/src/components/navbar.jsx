import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CrearEstu from '../screens/crearCuentaEstudiante.jsx';


function Navbar() {
  return (
    <NavContainer>
      <Router>
        <header id='navC'>
          <div id='logo'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2klEQVR4nO2aQWsTQRTHlyLYglpNZqqGQKDGZt7GN6kURFDopVdv5ib9CgU/QfDmsV+heOrVYy8iHnsSCl4q2h3CbtNDdlqLUuvIRBNSi7DpbtJO8/4wp+yE936zb+bN2+d5JBKJRCKNTMaYiXaruRBHQSOOgi0dKdM/4jA41mGwaX/Xzaafdp7neRNM4AIHbHCBW+fj9M7O1H6olnSoVuNQNU8ZH6nDOAo24jBYOdj9cjftvGLx8dQM4BIXuMoBmxyk6Y6ROR0rlY+jYDkO1boOA/2v8ToK9nSo1vZ3Vb3Val1PO68gRJ4LucyFXOcgdb/TIwPQDr/O2tX4uypHp41X23Y17aoaY66knTdzH2cZ4AoTcoMLPPqf00MDYM45npM4nDkAc4HieWQA4gsaz0MF0HYgnocKQJ82/MTIet6wHO4OBvIjB3w1TgCOOchNu2Hm5x6IxI67DICB/G5DyIZSvvKw4KWRdgQAE/iNA761m2au/OhGKqddAcAAW0zgWr4in5XL5ateApVKpUn7vLMAGODnTi7gy6c2IUriw3StdpP7WLewOGDs3ikgbLaHDZv9JbX7Tnmed3KIP2Hxw7FjEH8ywA92E8uVsZjY2JP/88vJPGAGai+mEW95KeVsIpSVLhUA7vvXuI/PuZBvxgZAoe8ixAQeDGq4swCYkC+5kO/tRpjGcGcB8IwMJwBAb4ChEADaAwxtgkCngKFjECgPMJQIAWWChlJhoLuAocsQ0G3Q0HUYqB5gqCCSVJoqQsqZkhivVu91aoog341NReg21KqdZqlOD0DyD6vOAiiVSpN9zVJqEKcvBQDW940gzXAWAM9oEIAxfAOOu81SOX/eHwsADPCw2yzFxEKv63QgaccAMJB7nVYYH+v5SqXXdXpmaQcAMJDb9li0x6O3uNjrOs1E+mICOFs8uwyAZRHPrgFgWcezIwA+MSFf87nak6R9gCQSieSl1G+/Uw6SzYcM1gAAAABJRU5ErkJggg==" />
            <h2>EstuPrime</h2>
          </div>
          <div>
            <a href="">Acerca de Nosotros</a>
            <a href="">Precios</a>
            <a href="">Como Enseñar</a>
          </div>
          <div>
            <Link className='buttonE' to={'/iniciarSesion'}>Iniciar Sesion</Link>
            <Link className='buttonE' to={'/CrearCuentaEstu'}>Crear Cuenta</Link>
          </div>
        </header>
      </Router>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
    #logo{
        display: flex;
        block:inline;
    }
    #navC{
        display: flex;
        align-items: center;
        justify-content: space-between;
        block: inline;
        height: calc(10vh);
        width: calc(97.8vw);
        padding: 15px;
        background-color: #035058;
    }
    h2{
        color: white;
    }
    a{
        margin: 10px;
       text-decoration : none;
       color: #B4D2DA;
    }
    a:hover{
        color: #F2E9E4;
    }
    .buttonE{
        color: white;
        margin: 10px;
        padding: 10px;
        border: none;
        background-color: #15292E;
        border-radius: 5px
    }
    .buttonE:hover{
        background-color: #F2E9E4;
        color: #15292E;
    }
`