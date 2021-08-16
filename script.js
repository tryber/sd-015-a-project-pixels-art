// requisito 4
const lines = document.getElementsByClassName('line');

function addPixelsToLines() {
  for (let i = 0; i < lines.length; i += 1) {
    for (let i2 = 0; i2 < lines.length; i2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lines[i].appendChild(pixel);
    }
  }
}
addPixelsToLines();

// requisito 6
window.onload = function initPage() {
  const paletteBlack = document.getElementById('black');
  paletteBlack.className += ' selected';
};

// requisito 7
const paletteColors = document.getElementsByClassName('color');

function selectColor(event) {
  document.querySelector('.selected').className = 'color';
  const clickedColor = event.target;
  clickedColor.className += ' selected';
}
function addClickPalette() {
  for (let i = 0; i < paletteColors.length; i += 1) {
    paletteColors[i].addEventListener('click', selectColor);
  }
}
addClickPalette();

// requisito 8
const pixels = document.getElementsByClassName('pixel');

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected');
  const color = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');

  const clickedPixel = event.target;

  clickedPixel.style.backgroundColor = color;
}
function addClickPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixel);
  }
}
addClickPixels();

// requisito 9
const clearButton = document.getElementById('clear-board');

function clearTheBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
function addClickClearBtn() {
  clearButton.addEventListener('click', clearTheBoard);
}
addClickClearBtn();

// requisito 10 e 11
const pixelBoard = document.getElementById('pixel-board');

const inputBoardSize = document.getElementById('board-size');
const vqvButton = document.getElementById('generate-board');

function calcBoardSize() {
  let boardSize = inputBoardSize.value;
  if (boardSize < 5) {
    boardSize = 5;
  }
  if (boardSize > 50) {
    boardSize = 50;
  }
  return boardSize;
}

function removeBoard() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.querySelector('.line');
    pixelBoard.removeChild(line);
  }
}
function generateBoard() {
  if (inputBoardSize.value === '') {
    window.alert('Board inválido!');
    return;
  }
  removeBoard();
  const boardSize = calcBoardSize();
  for (let i = 0; i < boardSize; i += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
  }
  addPixelsToLines();
  addClickPixels();
}
function addClickVqvBtn() {
  vqvButton.addEventListener('click', generateBoard);
}
addClickVqvBtn();
