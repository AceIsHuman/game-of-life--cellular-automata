import { useState, useRef, useCallback } from 'react';
import { encodeMatrix } from './endIfStale';
import { Cell } from './Cell';

const getNextGen = currentGen => {
  // create empyt array to populate next gen data
  const rows = new Array(currentGen.length).fill([]);
  const next = rows.map(i => new Array(currentGen.length).fill(0));

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
  const [grid, setGrid] = useState({
    ref: useRef(),
    currentGen: [],
    nextGen: [],
    history: [],
    genCount: 1,
  });

  // Takes a matrix of cells and stores in currentGen
  // Determines nextGen state and assigns history value
  // Resets genCount to 1
  const setInitialGen = useCallback(async matrix => {
    const next = await getNextGen(matrix);
    setGrid(grid => {
      return {
        ...grid,
        currentGen: matrix,
        nextGen: next,
        history: [encodeMatrix(matrix)],
        genCount: 1,
      };
    });
  }, []);

  // Takes grid.nextGen and assigns it to currentGen
  // Determines new nextGen state, update history
  // Increment genCount
  const setNextToCurr = async () => {
    const next = await getNextGen(grid.nextGen);
    setGrid({
      ...grid,
      currentGen: grid.nextGen,
      nextGen: next,
      history: [...grid.history, encodeMatrix(grid.nextGen)],
      genCount: grid.genCount + 1,
    });
  };

  // Used to update a single cell state
  // Determines nextGen state
  // Updates history value
  const setCellState = async (x, y) => {
    const updatedGrid = grid.currentGen.map((row, i) => {
      if (i === y) {
        row[x].isAlive = !row[x].isAlive;
      }
      return row;
    });
    const historyKey = encodeMatrix(updatedGrid);
    const updatedHistory = [...grid.history];
    updatedHistory[grid.history.length - 1] = historyKey;
    const next = await getNextGen(updatedGrid);

    setGrid({
      ...grid,
      currentGen: updatedGrid,
      nextGen: next,
      history: updatedHistory,
    });
  };

  return [grid, setInitialGen, setNextToCurr, setCellState];
};

export default useGridState;
