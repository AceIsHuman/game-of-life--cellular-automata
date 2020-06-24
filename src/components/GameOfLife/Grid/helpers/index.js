import { Cell } from './Cell';

export function generateGrid(canvas) {
  canvas.width = 500;
  canvas.height = 500;

  const grid = canvas.getContext('2d');

  grid.strokeStyle = '#3d3d3d';
  for (let x = 0; x <= 500; x += 20) {
    grid.moveTo(x, 0);
    grid.lineTo(x, 500);
    grid.stroke();
  }
  for (let y = 0; y <= 500; y += 20) {
    grid.moveTo(0, y);
    grid.lineTo(500, y);
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
    ctx.fillRect(x * 20 + 1, y * 20 + 1, 18, 18);
  } else {
    ctx.fillStyle = '#e0e0e0';
    ctx.fillRect(x * 20 + 1, y * 20 + 1, 18, 18);
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
  console.log(matrix);
  return matrix;
}
