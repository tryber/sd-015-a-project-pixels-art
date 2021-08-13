const pixelBoard = document.getElementById('pixel-board');
const pixelSize = '40px';
const boardSize = 5;

function createPixels() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.width = pixelSize;
  pixel.style.height = pixelSize;
  return pixel;
}
function addPixelsToLine(numberOfPixels, line) {
  for (let i = 0; i < numberOfPixels; i += 1) {
    line.appendChild(createPixels());
  }
}
function createBoard(numberOfLines) {
  for (let i = 0; i < numberOfLines; i += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    line.style.height = pixelSize;
    addPixelsToLine(numberOfLines, line);
    pixelBoard.appendChild(line);
  }
}

function windowInit() {
  createBoard(boardSize);
}
window.onload = windowInit;
