// Gera cor aleatória
function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return (`rgb(${r}, ${g}, ${b})`);
}

window.onload = function makeRandom() {
  document.getElementById('secondColor').style.backgroundColor = randomColor();
  document.getElementById('thirdColor').style.backgroundColor = randomColor();
  document.getElementById('fourthColor').style.backgroundColor = randomColor();
};

// Cria painel de pixel
const pixelBoard = document.getElementById('pixel-board');
function pixelBoardLine() {
  for (let i = 0; i < 5; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel';
    pixelBoard.appendChild(pixelLine);
  }
}
pixelBoardLine();

function fillBoard() {
  for (let i = 1; i < 5; i += 1) {
    const fill = document.createElement('br');
    pixelBoard.appendChild(fill);
    pixelBoardLine();
  }
}
fillBoard();
