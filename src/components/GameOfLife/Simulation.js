import React from 'react';

import { VerticalContainer, SubTitle } from '../Reusables/';
import Grid from './Grid';
import Controls from './Controls';

function Simulation(props) {
  return (
    <VerticalContainer>
      <SubTitle size='h3'>Generation: #</SubTitle>
      <Grid currentGen={props.currentGen} setCurrentGen={props.setCurrentGen} />
      <Controls />
    </VerticalContainer>
  );
}

export default Simulation;
