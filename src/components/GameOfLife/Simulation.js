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
        playing={props.playing}
        setPlaying={props.setPlaying}
        currentGen={props.currentGen}
        setCurrentGen={props.setCurrentGen}
        setGenCount={props.setGenCount}
        setSpeed={props.setSpeed}
      />
    </VerticalContainer>
  );
}

export default Simulation;
