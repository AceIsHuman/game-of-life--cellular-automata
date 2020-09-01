import React from 'react';

import { VerticalContainer, SubTitle } from '../Reusables/';
import Grid from './Grid';
import Controls from './Controls';
import { Typography } from '@material-ui/core';

function Simulation(props) {
  return (
    <VerticalContainer>
      <SubTitle>Generation: {props.grid.genCount}</SubTitle>
      {props.staleMessage && <Typography color='error' variant='p'>{props.staleMessage}</Typography>}
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
        setStaleMessag={props.setStaleMessage}
      />
    </VerticalContainer>
  );
}

export default Simulation;
