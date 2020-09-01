export function matrixToInt(matrix) {
  let matrixString = '';
  for (let row of matrix) {
    for (let cell of row) {
      matrixString += cell.isAlive ? '1' : '0';
    }
  }

  return parseInt(matrixString, 2);
}

// Recieves an array of integers representing matrix state.
// Returns boolean with case message
export function checkIfStale(history) {
  const lastIndex = history.length - 1;
  const [previous, current] = [history[lastIndex - 1], history[lastIndex]];
  if (current === previous) {
    return [true, 'You have reached a still life.'];
  }
  return [false, null];
}
