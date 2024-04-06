import React from 'react';
import styled from 'styled-components'
import NavB from './components/navbar';
import FormE from './components/form';

function App() {
  return (
    <General>
      <div>
        <NavB/>
        <FormE/>
      </div>
    </General>
  );
}

export default App;

const General = styled.nav`
  
`
