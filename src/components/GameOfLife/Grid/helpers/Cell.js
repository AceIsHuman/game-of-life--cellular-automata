export class Cell {
  constructor(x, y, isAlive) {
    this.x = x;
    this.y = y;
    this.isAlive = isAlive;
  }

  nextGenState(matrix) {
    for (let a = -1; a < 2; a++) {
      for (let b = -1; b < 2; b++) {
        if (a === 0 && b === 0) {
          continue;
        }
        const cell = matrix[this.x + a][this.y + b];
        console.log(cell);
      }
    }
  }
}
