import { useState } from 'react';
import { matrixToInt } from './endIfStale';

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

const useGridState = () => {
  cosnt[grid, setGrid] = useState({
    currentGen: [],
    nextGen: [],
    history: [],
    genCount: 1,
  });

  const setInitialGen = async (matrix) => {
    const next = await getNextGen(matrix);
    setGrid({
      currentGen: matrix,
      nextGen: next,
      history: [matrixToInt(matrix)],
      genCount: 1,
    });
  };
  

  const setNextToCurr = async () => {
    const next = await getNextGen(grid.nextGen);
    setGrid({
      currentGen: grid.nextGen,
      nextGen: next,
      history: [...grid.history, matrixToInt(grid.nextGen)],
      genCount: grid.genCount + 1,
    });
  }

  return [grid, setInitialGen, setNextToCurr];
};

export default useGridState;