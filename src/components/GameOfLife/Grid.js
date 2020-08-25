import React, { useEffect } from 'react';
import { generateGrid, fillGrid, cellSize } from './helpers';

function Grid(props) {
  const canvas = document.getElementById('grid');

  useEffect(() => {
    const canvas = document.getElementById('grid');
    generateGrid(canvas);
    fillGrid(canvas, props.grid.currentGen);
  }, [props.grid.currentGen]);

  return (
    <canvas
      id='grid'
      onClick={(e) => {
        if (props.playing) return;
        switchCellState(e, props.setCellState, canvas);
      }}
      style={{ cursor: props.playing ? null : 'pointer' }}
    ></canvas>
  );
}

function switchCellState(e, setCellState, canvas) {
  // Get x and y from click event
  const x = Math.floor((e.pageX - canvas.offsetLeft) / cellSize);
  const y = Math.floor((e.pageY - canvas.offsetTop) / cellSize);
  setCellState(x,y);
}

export default Grid;
