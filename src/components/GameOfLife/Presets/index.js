import { presetToCells } from '../helpers';

function createPreset(cords) {
  const columns = new Array(25).fill(0);
  const matrix = columns.map((_, yIndex) => {
    return new Array(25).fill(0);
  });
  for (let cord of cords) {
    console.log(cord);
    const [x, y] = cord;
    matrix[y][x] = 1;
  }
  return matrix;
}

export default {
  preset1: presetToCells(
    createPreset([
      [12, 11],
      [11, 12],
      [12, 12],
      [12, 13],
      [13, 12],
    ])
  ),
  preset2: presetToCells(
    createPreset([
      [9, 9],
      [10, 9],
      [11, 9],
      [12, 9],
      [13, 9],
      [14, 9],
      [15, 9],
      [9, 10],
      [15, 10],
      [9, 11],
      [15, 11],
      [9, 12],
      [11, 12],
      [13, 12],
      [15, 12],
      [9, 13],
      [12, 13],
      [15, 13],
      [9, 14],
      [15, 14],
      [9, 15],
      [10, 15],
      [11, 15],
      [12, 15],
      [13, 15],
      [14, 15],
      [15, 15],
    ])
  ),
  preset3: presetToCells(
    createPreset([
      [12, 8],
      [8, 10],
      [10, 10],
      [11, 10],
      [12, 10],
      [13, 10],
      [14, 10],
      [16, 10],
      [8, 11],
      [9, 11],
      [15, 11],
      [16, 11],
      [8, 12],
      [12, 12],
      [16, 12],
      [11, 13],
      [13, 13],
      [11, 14],
      [13, 14],
      [11, 16],
      [13, 16],
      [10, 17],
      [12, 17],
      [14, 17],
      [11, 18],
      [13, 18],
    ])
  ),
};
