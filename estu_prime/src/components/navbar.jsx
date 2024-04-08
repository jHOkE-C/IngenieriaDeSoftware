import React from 'react';

import {Routes, Route} from 'react-router-dom';
import CrearEstu from '../pages/crearCuentaEstudiante.jsx';
import CrearDoc from '../pages/crearCuentaDocente.jsx';

function Navbar() {
  return ( 
      <Routes>     
        <Route path="/CrearCuentaDoc" element={<CrearDoc/>}/>
        <Route path="/CrearCuentaEstu" element={<CrearEstu/>}/>
      </Routes>
  );
}

export default Navbar;

