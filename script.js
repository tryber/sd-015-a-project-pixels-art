window.onload = function nomeQualquer() {
  const blackColor = document.getElementById('color1');
  blackColor.classList.add('selected');
};

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}
getRandomInt();

function generateNum() {
  let numALeatorio2 = 'rgb(';
  numALeatorio2 += getRandomInt();
  numALeatorio2 += ', ';
  numALeatorio2 += getRandomInt();
  numALeatorio2 += ', ';
  numALeatorio2 += getRandomInt();
  numALeatorio2 += ')';
  return numALeatorio2;
}

function addColorToBox() {
  document.querySelector('#color1').style.backgroundColor = 'black';
  document.querySelector('#color2').style.backgroundColor = generateNum();
  document.querySelector('#color3').style.backgroundColor = generateNum();
  document.querySelector('#color4').style.backgroundColor = generateNum();
}
addColorToBox();

function createButton() {
  const sectionColorPalette = document.querySelector('body');
  const buttonClearTag = document.createElement('button');
  sectionColorPalette.appendChild(buttonClearTag);
  buttonClearTag.id = 'clear-board';
  buttonClearTag.innerText = 'Limpar';
}
createButton();

function createInput() {
  const bodyTag = document.querySelector('body');
  const inputField = document.createElement('input');
  bodyTag.appendChild(inputField);
  inputField.id = 'board-size';
  inputField.type = 'number';
  inputField.min = '1';
  inputField.max = '50';
}
createInput();

function createButtonBoard() {
  const bodyTag = document.querySelector('body');
  const buttonBoardSize = document.createElement('button');
  bodyTag.appendChild(buttonBoardSize);
  buttonBoardSize.id = 'generate-board';
  buttonBoardSize.innerText = 'VQV';
}
createButtonBoard();

function createPixelBoard() {
  const body = document.getElementsByTagName('body');
  const pixelBoard = document.createElement('section');
  body[0].appendChild(pixelBoard);
  pixelBoard.id = 'pixel-board';
}
createPixelBoard();

const pixelBoard = document.querySelector('#pixel-board');
function createPixelsLine(num1) {
  for (let i = 1; i <= num1; i += 1) {
    const pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.className = 'pixel';
  }
}
createPixelsLine(5);

function fillPixelBoard(num) {
  for (let j = 1; j < num; j += 1) {
    const lineBreak = document.createElement('br');
    pixelBoard.appendChild(lineBreak);
    createPixelsLine(num);
  }
}
fillPixelBoard(5);

function erasePixelBoard() {
  const pixelBox = document.querySelectorAll('.pixel');
  const lineBreak = document.querySelectorAll('br');
  for (let i = 0; i < pixelBox.length; i += 1) {
    pixelBox[i].parentNode.removeChild(pixelBox[i]);
  }
  for (let j = 0; j < lineBreak.length; j += 1) {
    lineBreak[j].parentNode.removeChild(lineBreak[j]);
  }
}

function elseInput() {
  const inputField = document.querySelector('#board-size');
  if (inputField.value <= 5) {
    inputField.value = 5;
  }
  if (inputField.value >= 50) {
    inputField.value = 50;
  }
  erasePixelBoard();
  createPixelsLine(inputField.value);
  fillPixelBoard(inputField.value);
}

function numInput(event) {
  const sizeTarget = event.target;
  const inputField = document.querySelector('#board-size');
  sizeTarget.value = inputField.value;
  if (inputField.value < 1) {
    alert('Board inválido!');
  } else {
    elseInput();
  }
}

const buttonBoardSize = document.querySelector('#generate-board');
buttonBoardSize.addEventListener('click', numInput);

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
  const alvo = event.target;
  alvo.style.backgroundColor = colorSpecs;
}

function colorPaintB() {
  for (let i = 0; i < pixelBoxEmpty.length; i += 1) {
    pixelBoxEmpty[i].addEventListener('click', colorPaint);
  }
}
colorPaintB();

const clearButtonTag = document.querySelector('#clear-board');
function clearButton() {
  for (let i = 0; i < pixelBoxEmpty.length; i += 1) {
    if (pixelBoxEmpty[i].style.backgroundColor !== 'white') {
      pixelBoxEmpty[i].style.backgroundColor = 'white';
    }
  }
}
clearButton();
clearButtonTag.addEventListener('click', clearButton);
