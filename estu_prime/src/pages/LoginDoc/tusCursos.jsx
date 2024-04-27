import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Trash from '../../assents/basurero.png'
import CardsCursos from '../../components/courseCard/cardCursoDocente'

function TusCursos() {
  const [componentes, setComponentes] = useState([]);

  useEffect(() => {
    peticionDocenteCursosCreados();
  }, []);

  const peticionDocenteCursosCreados = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newData = data.map(user => ({
          title: user.title,
          id: user.id
        }));
        console.log(newData);
        newData.forEach(item => agregarComponente(item.title, item.id));
      });
  };

  const agregarComponente = (title, id) => {
    setComponentes(prevComponentes => [
      ...prevComponentes,
      <CardsCursos key={id} title={title} ide={id}/>
    ]);
  };
  return (
    <ListaCrearCursoContainer>
      {componentes}
    </ListaCrearCursoContainer>
  )
}

export default TusCursos

const ListaCrearCursoContainer = styled.nav`
  width: 80vw;
  position: relative;
  left: 10%;
`
