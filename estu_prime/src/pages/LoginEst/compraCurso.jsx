import React from 'react';
import styled from 'styled-components'
const CompraCursos = () => {
  return (
    <div className="fondo container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 curso-detalles">

        <div>
          <div>
            <h2 className="tituloDir">Dirección de facturación</h2>
            <div>
              <label htmlFor="pais" className="bloque">País</label>
              <select id="pais" name="pais" className="">
                <option>Bolivia</option>
                <option>(OPCIONES)</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="tituloMet">Método de pago</h2>
            <div>
              <input id="tarjetacredito" name="tipoPago" type="radio" />
              <label>Tarjeta de crédito/débito</label>
              <div className="ml-4 flex curso-imagen">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Old_Visa_Logo.svg" alt="tarjeta" />
              </div>
            </div>

            <div>
              <h2 className="DetallePed">Detalles del pedido</h2>
              <div className="textoMen">
                <label className="datosCurso">(Nombre Curso)</label>
                <label className="precioCurso">(PrecioCurso)</label>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="Resumen">Resumen</h2>
              <div className="textoMen1">
                <div className="resumen">
                  <span>Precios:</span>
                  <span>(PrecioCurso)</span>
                </div>
                <div className="total">
                  <span>Total:</span>
                  <span>(Precio Total)</span>
                </div>
              </div>
            </div>

            <button className="completarPago">Completar pago</button>
            <p>Garantía de reembolso de 30 días</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompraCursos;

const compraCursos= styled.nav`
/* compraCursos.css */

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.curso-detalles {
    padding: 20px;
}

.curso-imagen {
    padding: 20px;
}

.curso-imagen img {
    max-width: 100%;
    height: auto;
}

.curso-detalles p {
    margin-bottom: 10px;
}

.curso-detalles button,
.curso-imagen button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.curso-detalles button:hover,
.curso-imagen button:hover {
    background-color: #0056b3;
}

.row {
    display: flex;
}

.col-md-6 {
    flex: 0 0 50%;
}

@media (max-width: 768px) {
    .row {
        flex-direction: column;
    }
}
`;  