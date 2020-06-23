import React from 'react';
import { styled } from '@material-ui/core';
import Grid from './Grid/Grid';
import Controls from './Controls';

function Simulation(props) {
  return (
    <Container>
      <Generation>Generation: #</Generation>
      <Grid currentGen={props.currentGen} />
      <Controls />
    </Container>
  );
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Generation = styled('h3')({
  color: '#EEEEEE',
});

export default Simulation;
