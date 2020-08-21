import React, { useState, useEffect, useCallback } from 'react';
import { styled } from '@material-ui/core/styles';

import Simulation from './Simulation';
import Presets from './Presets/Presets';
import Rules from './Rules';
import { fillGrid } from './helpers';
import { Cell } from './helpers/Cell';

function GameOfLife() {
  const [currentGen, setCurrentGen] = useState([]);
  const [genCount, setGenCount] = useState(1);
  const [playing, setPlaying] = useState(false);
  const canvas = document.getElementById('grid');
  const [speed, setSpeed] = useState(1);

  const getNextGen = async (currentGen) => {
    // create empyt array to populate next gen data
    const rows = new Array(currentGen.length).fill([]);
    const next = rows.map((i) => new Array(currentGen.length).fill(0));

    // determine cell state and create new Cells on next
    for (let y = 0; y < currentGen.length; y++) {
      for (let x = 0; x < currentGen.length; x++) {
        const cell = currentGen[y][x];
        next[y][x] = new Cell(x, y, cell.nextGenState(currentGen));
      }
    }

    return next;
  };

  const playSimulation = useCallback(() => {
    return setTimeout(async () => {
      if (playing) {
        const next = await getNextGen(currentGen);
        setGenCount(genCount + 1);
        setCurrentGen(next);
        fillGrid(canvas, next);
      }
    }, speed * 500);
  }, [genCount, currentGen, playing, canvas, speed]);

  useEffect(() => {
    if (playing) {
      let simulation = playSimulation();

      return function () {
        clearInterval(simulation);
      };
    }
  }, [playing, currentGen, playSimulation, canvas]);

  return (
    <Container>
      <Simulation
        currentGen={currentGen}
        setCurrentGen={setCurrentGen}
        playing={playing}
        setPlaying={setPlaying}
        genCount={genCount}
        setGenCount={setGenCount}
        setSpeed={setSpeed}
      />
      <Presets
        setCurrentGen={setCurrentGen}
        playing={playing}
        setGenCount={setGenCount}
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
