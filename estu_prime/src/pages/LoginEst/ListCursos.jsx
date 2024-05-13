import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

import React from 'react';
import './ListadoCursos.css'; // Asegúrate de tener el archivo CSS en la misma carpeta


function ListadoCursos() {
    return (
        <div>
            <h2 className="ListadoCursos">LISTADO DE CURSOS</h2>
            <div>
                <h3 className="ListadoCursos">Recomendados</h3>
            </div>
            <div className="carta-horizontal">
                <div className="carta">caja1</div>
                <div className="carta">caja2</div>
                <div className="carta">caja3</div>
                <div className="carta">caja4</div>
                <div className="carta">caja5</div>
                <div className="carta">caja6</div>
            </div>
            <h3 className="ListadoCursos">Nuevos</h3>
            <div className="carta-horizontal">
                <div className="carta">caja1</div>
                <div className="carta">caja2</div>
                <div className="carta">caja3</div>
                <div className="carta">caja4</div>
                <div className="carta">caja5</div>
                <div className="carta">caja6</div>
            </div>
            <h3 className="ListadoCursos">Recientes</h3>
            <div className="carta-horizontal">
                <div className="carta">caja1</div>
                <div className="carta">caja2</div>
                <div className="carta">caja3</div>
                <div className="carta">caja4</div>
                <div className="carta">caja5</div>
                <div className="carta">caja6</div>
            </div>
        </div>
    );
}

export default ListadoCursos;
