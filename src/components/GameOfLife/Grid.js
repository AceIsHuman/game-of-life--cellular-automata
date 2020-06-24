import React, { useEffect } from 'react';
import { generateGrid, fillGrid } from './helpers'

function Grid(props) {
  useEffect(() => {
    const canvas = document.getElementById("grid");
    generateGrid(canvas)
    fillGrid(canvas, props.currentGen);
  }, [props.currentGen]);

  return <canvas id="grid"></canvas>;
}


export default Grid;