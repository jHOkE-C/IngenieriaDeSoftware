import React from 'react';

import {Routes, Route} from 'react-router-dom';
import CrearEstu from '../pages/Home/crearCuentaEstudiante.jsx';
import CrearDoc from '../pages/Home/crearCuentaDocente.jsx';
import IniciarS from '../pages/Home/iniciarSesion.jsx' ;
function Navbar() {
  return ( 
      <Routes>     
        <Route path="/CrearCuentaDoc" element={<CrearDoc/>}/>
        <Route path="/CrearCuentaEstu" element={<CrearEstu/>}/>
        <Route path="/IniciarSesion" elemen={<IniciarS/>}/>
      </Routes>
  );
}

export default Navbar;

