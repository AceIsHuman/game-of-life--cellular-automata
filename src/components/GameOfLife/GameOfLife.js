import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';

import Simulation from './Simulation';
import Presets from './Presets/Presets';
import Rules from './Rules';

function GameOfLife() {
  const [currentGen, setCurrentGen] = useState([]);

  return (
    <Container>
      <Simulation currentGen={currentGen} setCurrentGen={setCurrentGen} />
      <Presets setCurrentGen={setCurrentGen} />
      <Rules />
    </Container>
  );
}

const Container = styled('section')({
  display: 'flex',
});

export default GameOfLife;
