function matrixToInt(matrix) {
  const matrixString = '';
  for (let row of matrix) {
    for (let cell of row) {
      matrixString += cell.isAlive ? '1' : '0';
    }
  }

  return parseInt(matrixString, 2);
}
