import React, { useState, useEffect, useCallback } from 'react';
import { styled } from '@material-ui/core/styles';

import Simulation from './Simulation';
import Presets from './Presets/Presets';
import Rules from './Rules';
import useGridState from './helpers/useGridState';

function GameOfLife() {
  const [grid, setInitialGen, setNextToCurr, setCellState] = useGridState()
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const playSimulation = useCallback(() => {
    return setTimeout(async () => {
      if (playing) {
        setNextToCurr();
      }
    }, speed * 500);
  }, [setNextToCurr, playing, speed]);

  useEffect(() => {
    if (playing) {
      let simulation = playSimulation();

      return function () {
        clearInterval(simulation);
      };
    } 
  }, [playing, grid, playSimulation]);

  return (
    <Container>
      <Simulation
        grid={grid}
        setInitialGen={setInitialGen}
        setCellState={setCellState}
        playing={playing}
        setPlaying={setPlaying}
        setSpeed={setSpeed}
      />
      <Presets
        grid={grid}
        setInitialGen={setInitialGen}
        playing={playing}
      />
      <Rules />
    </Container>
  );
}

const Container = styled('section')({
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
});

export default GameOfLife;
