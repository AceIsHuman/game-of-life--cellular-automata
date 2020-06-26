import React from 'react';

import { VerticalContainer, SubTitle } from '../Reusables/';
import Grid from './Grid';
import Controls from './Controls';

function Simulation(props) {
  return (
    <VerticalContainer>
      <SubTitle size='h3'>Generation: {props.genCount}</SubTitle>
      <Grid currentGen={props.currentGen} setCurrentGen={props.setCurrentGen} />
      <Controls
        setPlaying={props.setPlaying}
        playSimulation={props.playSimulation}
      />
    </VerticalContainer>
  );
}

export default Simulation;
