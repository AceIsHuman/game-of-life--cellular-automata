import React from 'react';

import { VerticalContainer, SubTitle } from '../Reusables/';
import Grid from './Grid';
import Controls from './Controls';

function Simulation(props) {
  return (
    <VerticalContainer>
      <SubTitle size='h3'>Generation: {props.grid.genCount}</SubTitle>
      <Grid
        grid={props.grid}
        setCellState={props.setCellState}
        playing={props.playing}
      />
      <Controls
        grid={props.grid}
        setInitialGen={props.setInitialGen}
        playing={props.playing}
        setPlaying={props.setPlaying}
        setSpeed={props.setSpeed}
      />
    </VerticalContainer>
  );
}

export default Simulation;
