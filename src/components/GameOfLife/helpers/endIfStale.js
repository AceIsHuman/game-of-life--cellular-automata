export function encodeMatrix(matrix) {
  let matrixString = '';
  for (let row of matrix) {
    for (let cell of row) {
      matrixString += cell.isAlive ? '1' : '0';
    }
  }

  return matrixString;
}

// Recieves an array of integers representing matrix state.
// Returns boolean with case message
export function checkIfStale(history) {
  const lastIndex = history.length - 1;
  const [previous, current] = [history[lastIndex - 1], history[lastIndex]];
  if (current === 0) {
    return [true, 'All cells have died off!'];
  } else if (current === previous) {
    return [true, 'You have reached a still life.'];
  } else if (current === history[lastIndex - 2]) {
    return [false, "This could go on a while, you've reached an oscillator!"];
  }
  return [false, null];
}
