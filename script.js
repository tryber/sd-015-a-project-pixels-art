function createPixelBoard() {
  const body = document.getElementsByTagName('body');
  const pixelBoard = document.createElement('section');
  body[0].appendChild(pixelBoard);
  pixelBoard.id = 'pixel-board';
}
createPixelBoard();

const pixelBoard = document.querySelector('#pixel-board');
function createPixelsLine() {
  for (let i = 1; i <= 5; i += 1) {
    const pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.className = 'pixel';
  }
}
createPixelsLine();

function fillPixelBoard() {
  for (let j = 1; j < 5; j += 1) {
    const lineBreak = document.createElement('br');
    pixelBoard.appendChild(lineBreak);
    createPixelsLine();
  }
}
fillPixelBoard();