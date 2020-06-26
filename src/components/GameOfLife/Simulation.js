import React from 'react';

import { VerticalContainer, SubTitle } from '../Reusables/';
import Grid from './Grid';
import Controls from './Controls';

function Simulation(props) {
  return (
    <VerticalContainer>
      <SubTitle size='h3'>Generation: {props.genCount}</SubTitle>
      <Grid
        currentGen={props.currentGen}
        setCurrentGen={props.setCurrentGen}
        playing={props.playing}
      />
      <Controls
        setPlaying={props.setPlaying}
        currentGen={props.currentGen}
        setCurrentGen={props.setCurrentGen}
        setGenCount={props.setGenCount}
      />
    </VerticalContainer>
  );
}

export default Simulation;
