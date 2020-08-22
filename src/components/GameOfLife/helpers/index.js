import { Cell } from './Cell';
const gridSize = Number(window.innerWidth) > 600
  ? 500
  : window.innerWidth - 20;
export const cellSize = gridSize / 25;

export function generateGrid(canvas) {
  canvas.width = gridSize;
  canvas.height = gridSize;
  
  const grid = canvas.getContext('2d');

  grid.strokeStyle = '#3d3d3d';
  for (let x = 0; x <= gridSize; x += cellSize) {
    grid.moveTo(x, 0);
    grid.lineTo(x, gridSize);
    grid.stroke();
  }
  for (let y = 0; y <= 500; y += cellSize) {
    grid.moveTo(0, y);
    grid.lineTo(gridSize, y);
    grid.stroke();
  }
}

export function fillGrid(canvas, generation) {
  const ctx = canvas.getContext('2d');
  for (let y = 0; y < generation.length; y++) {
    for (let x = 0; x < generation.length; x++) {
      fillCell(generation[y][x], x, y, ctx);
    }
  }
}

function fillCell(cell, x, y, ctx) {
  if (cell.isAlive) {
    ctx.fillStyle = '#1faf34';
    ctx.fillRect(x * cellSize + 1, y * cellSize + 1, cellSize -2, cellSize -2);
  } else {
    ctx.fillStyle = '#e0e0e0';
    ctx.fillRect(x * cellSize + 1, y * cellSize + 1, cellSize -2, cellSize -2);
  }
}

export function createCell(x, y, matrix) {
  const isAlive = !!matrix[y][x];
  matrix[y][x] = new Cell(x, y, isAlive);
}

export function presetToCells(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      createCell(x, y, matrix);
    }
  }

  return matrix;
}
