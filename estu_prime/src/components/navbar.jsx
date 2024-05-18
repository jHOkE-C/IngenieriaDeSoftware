import React from 'react';

import {Routes, Route} from 'react-router-dom';
import CrearEstu from '../pages/Home/crearCuentaEstudiante.jsx';
import CrearDoc from '../pages/Home/crearCuentaDocente.jsx';
import IniciarS from '../pages/Home/iniciarSesion.jsx' ;
import CrearCurso from '../pages/LoginDoc/crearCurso.jsx';
import TusCursos from '../pages/LoginDoc/tusCursos.jsx';
import HomeDocente from '../pages/LoginDoc/inicioDoc.jsx'
import ListadoCursos from '../pages/LoginEst/ListCursos.jsx'
import Explorar from '../pages/LoginEst/Explorar.jsx'
import HomeEstudiante from '../pages/LoginEst/inicioEst.jsx'
import DetalleCurso from '../pages/LoginEst/DetalleCurso.jsx'
import ComprarCurso from '../pages/LoginEst/compraCurso.jsx'
import EditCurso from '../pages/LoginDoc/editCurso.jsx'
import ExplorarD from '../pages/LoginDoc/explorar.jsx'
function Navbar() {
  return ( 
      <Routes>
        <Route path="/IniciarSe" element={<IniciarS/>}/>  
        <Route path="/CrearCuentaDoc" element={<CrearDoc/>}/>
        <Route path="/CrearCuentaEstu" element={<CrearEstu/>}/>
        <Route path="/LoginDocente/CrearCurso" element={<CrearCurso/>}/>  
        <Route path="/LoginDocente" element={<HomeDocente/>}/>  
        <Route path='/LoginDocente/TusCursos'element={<TusCursos/>}/>
        <Route path="/LoginEstudiante" element={<HomeEstudiante/>}/>  
        <Route path="/LoginEstudiante/ListCursos" element={<ListadoCursos/>}/> 
         <Route path="/LoginEstudiante/ComprarCurso" element={<ComprarCurso/>}/>
         
        <Route path="/LoginDocente/TusCursos/editCurso/:id" element={<EditCurso/>}/>  
        <Route path="/detalleCurso/:idCurso" element={<EditCurso/>}/>  
        
        <Route path="/LoginEstudiante/Explorar" element={<Explorar/>}/>
        <Route path="/LoginDocente/Explorar" element={<ExplorarD/>}/>
        <Route path="/LoginEstudiante/ListCursos/DetalleCurso" element={<DetalleCurso/>}/>
        <Route path="/LoginEstudiante/ListCursos/DetalleCurso/:idCurso" element={<DetalleCurso />} />
      </Routes>
  );
}

export default Navbar;

