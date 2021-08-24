/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-use-before-define */
function addPixelsToLines() {
  const lines = document.getElementsByClassName('line');
  for (let i = 0; i < lines.length; i += 1) {
    for (let ii = 0; ii < lines.length; ii += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lines[i].appendChild(pixel);
    }
  }
}
addPixelsToLines();
function colorSelect() {
  const paletteColors = document.getElementsByClassName('color');
  function selectColor(event) {
    document.querySelector('.selected').className = 'color';
    const clickedColor = event.target;
    clickedColor.className += ' selected';
  }
  for (let i = 0; i < paletteColors.length; i += 1) {
    paletteColors[i].addEventListener('click', selectColor);
  }
}
function colorPaint() {
  const pixels = document.getElementsByClassName('pixel');

  function paintPixel(event) {
    const selectedColor = document.querySelector('.selected');
    const color = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');

    const clickedPixel = event.target;

    clickedPixel.style.backgroundColor = color;
  }
  addClickPixels();
  function addClickPixels() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', paintPixel);
    }
  }
}
function btnClear() {
  const btnClear = document.querySelector('#clear-board');
  btnClear.addEventListener('click', addClear);
  function addClear() {
    const pixelsBoard = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixelsBoard.length; i += 1) {
      const color = pixelsBoard[i];
      color.style.backgroundColor = 'white';
    }
  }
}

function frameSize() {
  const btnVQV = document.querySelector('#generate-board');
  btnVQV.addEventListener('click', addPixels);
  function addPixels() {
    const pixelsBoard = document.querySelector('#pixel-board');
    const input = document.querySelector('#board-size');
    function calcBoardSize() {
      let pixels = input.value;
      if (pixels < 5) {
        pixels = 5;
      }
      if (pixels > 50) {
        pixels = 50;
      }
      return pixels;
    }
    function deletePixel() {
      const board = document.querySelectorAll('.line');
      for (let i = 0; i < board.length; i += 1) {
        const px = board[i];
        px.remove();
      }
    }
    function creatingPixels() {
      if (input.value === '') {
        window.alert('Board inválido!');
        return;
      }
      deletePixel();
      const boardSize = calcBoardSize();
      for (let i = 0; i < boardSize; i += 1) {
        const line = document.createElement('div');
        line.className = 'line';
        pixelsBoard.appendChild(line);
      }
      addPixelsToLines();
    }
    creatingPixels();
  }
}
frameSize();

function genColor() {
  const palette = document.querySelector('#color-palette');
  function genRGB() {
    const randomNumber255 = Math.floor(Math.random() * 256);
    return randomNumber255;
  }
  generatePaletteColors();
  function generatePaletteColors() {
    for (let i = 0; i < 3; i += 1) {
      const color = document.createElement('div');
      color.className = 'color';
      color.style.backgroundColor = `rgb(${genRGB()}, ${genRGB()}, ${genRGB()})`;
      palette.appendChild(color);
    }
    colorSelect();
  }
}
genColor();

window.onload = function () {
  const btnBlack = document.querySelector('#black');
  btnBlack.classList.add('selected');
  colorPaint();
  btnClear();
};
