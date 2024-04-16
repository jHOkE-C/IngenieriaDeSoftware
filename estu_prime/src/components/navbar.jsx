import React from 'react';

import {Routes, Route} from 'react-router-dom';
import CrearEstu from '../pages/Home/crearCuentaEstudiante.jsx';
import CrearDoc from '../pages/Home/crearCuentaDocente.jsx';
import IniciarS from '../pages/Home/iniciarSesion.jsx' ;
import CrearCurso from '../pages/LoginDoc/crearCurso.jsx';
import TusCursos from '../pages/LoginDoc/tusCursos.jsx';
import HomeDocente from '../pages/LoginDoc/inicioDoc.jsx'
function Navbar() {
  return ( 
      <Routes>
        <Route path="/IniciarSe" element={<IniciarS/>}/>  
        <Route path="/CrearCuentaDoc" element={<CrearDoc/>}/>
        <Route path="/CrearCuentaEstu" element={<CrearEstu/>}/>
        <Route path="/LoginDocente/CrearCurso" element={<CrearCurso/>}/>  
        <Route path="/LoginDocente" element={<HomeDocente/>}/>  
        <Route path='/LoginDocente/TusCursos'element={<TusCursos/>}/>
      </Routes>
  );
}

export default Navbar;

