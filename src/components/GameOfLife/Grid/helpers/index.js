export function generateGrid(canvas) {
  canvas.width = 500;
  canvas.height = 500;

  const grid = canvas.getContext('2d');

  grid.strokeStyle = 'gray';
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
