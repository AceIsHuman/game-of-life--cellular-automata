import React from 'react';
import { styled } from '@material-ui/core/styles';

import Simulation from './Simulation';
import Presets from './Presets';
import Rules from './Rules';

function GameOfLife() {
  return (
    <Container>
      <Simulation />
      <Presets />
      <Rules />
    </Container>
  );
}

const Container = styled('section')({
  display: 'flex',
});

export default GameOfLife;
