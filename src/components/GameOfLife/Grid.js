import React, { useEffect } from 'react';
import { fillGrid, cellSize, generateGrid } from './helpers';

function Grid(props) {
  const { grid } = props;
  const { ref, currentGen } = grid;

  useEffect(() => {
    generateGrid(ref.current);
  }, [ref]);
  
  useEffect(() => {
    fillGrid(ref.current, currentGen);
  }, [ref, currentGen]);

  return (
    <canvas
      id='grid'
      ref={props.grid.ref}
      onClick={e => {
        if (props.playing) return;
        switchCellState(e, props.setCellState, props.grid.ref.current);
        fillGrid(props.grid.ref.current, props.grid.currentGen);
      }}
      style={{ cursor: props.playing ? null : 'pointer' }}
    ></canvas>
  );
}

function switchCellState(e, setCellState, canvas) {
  // Get x and y from click event
  const x = Math.floor((e.pageX - canvas.offsetLeft) / cellSize);
  const y = Math.floor((e.pageY - canvas.offsetTop) / cellSize);
  setCellState(x, y);
}

export default Grid;
