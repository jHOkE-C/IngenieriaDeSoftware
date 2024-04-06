import React from 'react';

import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import CrearEstu from '../pages/crearCuentaEstudiante.jsx';
import CrearDoc from '../pages/crearCuentaDocente.jsx';

function Navbar() {
  return ( 
       <BrowserRouter>
        <Routes>     
          <Route path="/CrearCuentaDoc" element={<CrearDoc/>}/>
          <Route path="/CrearCuentaEstu" element={<CrearEstu/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default Navbar;

