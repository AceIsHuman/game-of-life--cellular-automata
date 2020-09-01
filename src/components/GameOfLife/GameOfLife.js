import React, { useState, useEffect, useCallback } from 'react';
import { styled } from '@material-ui/core/styles';

import Simulation from './Simulation';
import Presets from './Presets/Presets';
import Rules from './Rules';
import useGridState from './helpers/useGridState';
import { checkIfStale } from './helpers/endIfStale';

function GameOfLife() {
  const [grid, setInitialGen, setNextToCurr, setCellState] = useGridState();
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [staleMessage, setStaleMessage] = useState(null);

  const playSimulation = useCallback(() => {
    return setTimeout(() => {
      if (playing) {
        const [isStale, message] = checkIfStale(grid.history);
        if (isStale) {
          setPlaying(false);
          setStaleMessage(message);
        } else {
          setNextToCurr();
        }
      }
    }, speed * 500);
  }, [setNextToCurr, playing, speed, grid.history]);

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
        staleMessage={staleMessage}
      />
      <Presets grid={grid} setInitialGen={setInitialGen} playing={playing} />
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
