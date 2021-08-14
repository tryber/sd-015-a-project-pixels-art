// eslint-disable-next-line func-names
window.onload = function () {
  const blackColor = document.getElementById('color1');
  blackColor.classList.add('selected');
};

function addColorToBox() {
  document.querySelector('#color1').style.backgroundColor = 'black';
  document.querySelector('#color2').style.backgroundColor = 'rgb(2, 62, 138)';
  document.querySelector('#color3').style.backgroundColor = 'rgb(199, 31, 55)';
  document.querySelector('#color4').style.backgroundColor = 'rgb(255, 255, 63)';
}
addColorToBox();

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

const colorBox = document.getElementsByClassName('color');

function colorSelected(event) {
  const colorSelectedBefore = document.querySelector('.selected');
  if (event.target.className !== 'selected') {
    colorSelectedBefore.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function colorSelectedB() {
  for (let i = 0; i < colorBox.length; i += 1) {
    colorBox[i].addEventListener('click', colorSelected);
  }
}
colorSelectedB();

const pixelBoxEmpty = document.getElementsByClassName('pixel');

function colorPaint(event) {
  const colorSelectedNow = document.querySelector('.selected');
  const colorSpecs = colorSelectedNow.style.backgroundColor;
  event.target.style.backgroundColor = colorSpecs;
}

function colorPaintB() {
  for (let i = 0; i < pixelBoxEmpty.length; i += 1) {
    pixelBoxEmpty[i].addEventListener('click', colorPaint);
  }
}
colorPaintB();

function createButton() {
  const sectionColorPalette = document.querySelector('.color-palette');
  const buttonClearTag = document.createElement('button');
  sectionColorPalette.appendChild(buttonClearTag);
  buttonClearTag.id = 'clear-board';
  buttonClearTag.innerText = 'Limpar';
}
createButton();
