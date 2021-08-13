function makePixels(lines) {
  const pixelsBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < lines; i += 1) {
    const linePixels = document.createElement('div');
    linePixels.className = 'pixelLine';
    pixelsBoard.appendChild(linePixels);
  }
  const linesInBoard = pixelsBoard.children;
  for (let i = 0; i < linesInBoard.length; i += 1) {
    for (let i2 = 0; i2 < lines; i2 += 1) {
      const mkPixels = document.createElement('div');
      mkPixels.className = 'pixel';
      linesInBoard[i2].appendChild(mkPixels);
    }
  }
}
makePixels(5);

function selectedF() {
  function toSelect(event) {
    const colors = document.querySelector('#color-palette').children;
    for (let i = 0; i < colors.length; i += 1) {
      colors[i].className = 'color';
    }
    const evento = event.target;
    evento.className = 'color selected';
  }
  const paleta = document.querySelector('#color-palette');

  paleta.addEventListener('click', toSelect);
}
selectedF();

function pintPixel() {
  const pixelsBoardLines = document.querySelector('#pixel-board .pixelLine');

  function paintClick(event) {
    const colorSelected = document.querySelector('.selected');
    const inkwell = window.getComputedStyle(colorSelected).backgroundColor;
    const evento = event.target;
    evento.style.backgroundColor = inkwell;
  }

  pixelsBoardLines.addEventListener('click', paintClick);
}
pintPixel();
