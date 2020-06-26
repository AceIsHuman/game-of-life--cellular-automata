export class Cell {
  constructor(x, y, isAlive) {
    this.x = x;
    this.y = y;
    this.isAlive = isAlive;
  }

  nextGenState(matrix) {
    let neighborCount = 0;
    for (let a = -1; a < 2; a++) {
      for (let b = -1; b < 2; b++) {
        if (a === 0 && b === 0) {
          continue;
        }
        const xPosition = this.x + b;
        const yPosition = this.y + a;
        if (
          xPosition >= 0 &&
          yPosition >= 0 &&
          xPosition < matrix.length &&
          yPosition < matrix.length
        ) {
          const cell = matrix[yPosition][xPosition];
          if (cell.isAlive) neighborCount += 1;
        }
      }
    }
    return this.aliveOrDead(neighborCount);
  }

  aliveOrDead(neighborCount) {
    if (!this.isAlive && neighborCount === 3) {
      return true;
    } else if (this.isAlive && (neighborCount === 2 || neighborCount === 3)) {
      return true;
    } else {
      return false;
    }
  }
}
