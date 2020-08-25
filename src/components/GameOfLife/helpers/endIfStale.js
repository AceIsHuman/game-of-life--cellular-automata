export function matrixToInt(matrix) {
  let matrixString = '';
  for (let row of matrix) {
    for (let cell of row) {
      matrixString += cell.isAlive ? '1' : '0';
    }
  }

  return parseInt(matrixString, 2);
}

// Recieves an array of matrix integers representing their state.
// If last two are same, this is a still life.
// End the simulation
export function endIfStale(history, setPlaying) {
  const lastIndex = history.length - 1;
  if (history.length >= 2) {
    const [previous, current] = [history[lastIndex - 1], history[lastIndex]];
    if (!(current ^ previous)) {
      setPlaying(false);
    }
  }
}
