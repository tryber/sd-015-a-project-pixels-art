const pixelBoard = document.getElementById('pixel-board');
const generateBoard = document.getElementById('generate-board');
const valueSize = document.getElementById('board-size').value;
const pixelSize = '40px';
const boardSize = 5;
const colorPalette = document.getElementById('color-palette');
const colorsOfPalette = colorPalette.children;
const clearBoard = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');

function paintPixel(event) {
  const clickPixel = event.target;
  const selecColor = document.querySelector('.selected');
  const paintColor = window.getComputedStyle(selecColor, null).getPropertyValue('background-color');
  clickPixel.style.backgroundColor = paintColor;
}
function createPixels() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.width = pixelSize;
  pixel.style.height = pixelSize;
  pixel.addEventListener('click', paintPixel);
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
function addClassSelected(event) {
  document.querySelector('.selected').className = 'color';
  const color = event.target;
  color.className += ' selected';
}
function clickPalette() {
  for (let i = 0; i < colorsOfPalette.length; i += 1) {
    colorsOfPalette[i].addEventListener('click', addClassSelected);
  }
}
function cleanBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
function changeSizeBoard() {
  createBoard(valueSize);
}

function windowInit() {
  createBoard(boardSize);
  clickPalette();
  clearBoard.addEventListener('click', cleanBoard);
  generateBoard.addEventListener('click', changeSizeBoard);
}
window.onload = windowInit;
