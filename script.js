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

function clear() {
  const clearButton = document.querySelector('#clear-board');
  const pixels = document.querySelectorAll('.pixel');

  function btClear() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  }
  clearButton.addEventListener('click', btClear);
}
clear();

function boardSize() {
  const vqvButton = document.querySelector('#generate-board');
  const sizeInput = document.querySelector('#board-size');
  const boardPx = document.querySelector('#pixel-board');
  function onClick() {
    if (sizeInput.value === '') {
      alert('Board inválido!');
    } else if (sizeInput.value > 50) {
      boardPx.innerHTML = '';
      makePixels(50);
    } else if (sizeInput.value < 5) {
      boardPx.innerHTML = '';
      makePixels(5);
    } else {
      boardPx.innerHTML = '';
      makePixels(sizeInput.value);
    }
  }
  vqvButton.addEventListener('click', onClick);
}
boardSize();

function alerts() {
  const vqvButton = document.querySelector('#generate-board');
  function onClickTwo() {
    const sizeInput = document.querySelector('#board-size');
    if (sizeInput.value > 50) {
      alert('Valor Máximo de 50px');
    } else if (sizeInput.value < 5) {
      alert('Valor Mínimo de 5px');
    }
  }
  vqvButton.addEventListener('click', onClickTwo);
}
alerts();

function randomColors() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const rgbArray = [r, g, b];
  const virgula = ', ';
  let rgbcolor = '';
  for (let i = 0; i < rgbArray.length; i += 1) {
    const inteiro = Math.round((rgbArray[i]));
    if (i < 2) {
      rgbcolor = rgbcolor + inteiro + virgula;
    } else {
      rgbcolor += inteiro;
    }
  }
  const fraseRgb = 'rgb (';
  const fechaParentesis = ')';
  let rgb = fraseRgb + rgbcolor + fechaParentesis;
  return rgb
}

function aplyColors() {
  const vermelho = document.querySelector('#vermelho');
  const laranja = document.querySelector('#laranja');
  const amarelo = document.querySelector('#amarelo');
  vermelho.style.backgroundColor = randomColors();
  laranja.style.backgroundColor = randomColors();
  amarelo.style.backgroundColor = randomColors();
}
window.onload = aplyColors();
