import React from 'react';

import { VerticalContainer, SubTitle } from '../Reusables/';
import Grid from './Grid';
import Controls from './Controls';

function Simulation(props) {
  return (
    <VerticalContainer>
      <SubTitle size='h3'>Generation: #</SubTitle>
      <Grid currentGen={props.currentGen} />
      <Controls />
    </VerticalContainer>
  );
}

export default Simulation;
