import React, { useEffect } from 'react';
import { generateGrid } from './helpers/'

function Grid() {
  useEffect(() => {
    const canvas = document.getElementById("grid");
    generateGrid(canvas)
  }, []);

  return <canvas id="grid"></canvas>;
}


export default Grid;