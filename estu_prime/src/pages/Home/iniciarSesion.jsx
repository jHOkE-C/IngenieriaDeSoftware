import { Fragment } from "react"
import { Navigate, useNavigate } from "react-router-dom";

function IniciarSesion() {
  let navigate = useNavigate();
  function iniciarSesion (){
    // Cuando el usuario inicia sesión exitosamente
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/LoginDocente',{replace:true});
  }
  return (
    <Fragment>
      <button type="button" onClick={iniciarSesion}>Iniciar</button>
    </Fragment>
  )
}

export default IniciarSesion
