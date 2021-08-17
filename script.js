function createTag(tag) {
  const create = document.createElement(`${tag}`);

  return document.body.appendChild(create);
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

const palette = document.getElementById('color-palette');

for (let number = 0; number < 4; number += 1) {
  palette.appendChild(createTag('div'));
}
const selector = document.querySelectorAll('#color-palette div');

selector.forEach((elemen) => elemen.classList.add('color'));

for (let index = 0; index < selector.length; index += 1) {
  selector[index].id = `color${index + 1}`;
}

const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');

const paletteColor = document.querySelectorAll('.color');
// const selectedColor = document.querySelector('.selected');
function colorSelected(color) {
  document.querySelector('.selected').classList.remove('selected');
  color.target.classList.add('selected');
}

for (let index = 0; index < paletteColor.length; index += 1) {
  paletteColor[index].addEventListener('click', colorSelected);
}

function paintPixels(pixel) {
  const pixelPainted = pixel.target;
  pixelPainted.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

const board = document.getElementById('pixel-board');

// console.log(sizeValue);
function sizeOfBoard(size) {
  for (let indexLine = 0; indexLine < size; indexLine += 1) {
    const createLine = createTag('div');
    createLine.classList.add('line');
    board.appendChild(createLine);

    for (let indexCol = 0; indexCol < size; indexCol += 1) {
      const createColumn = createTag('div');
      createLine.appendChild(createColumn);
      createColumn.classList.add('pixel');

      createColumn.addEventListener('click', paintPixels);
    }
  }
}

const generateBoardBtn = document.getElementById('generate-board');

function boardCheck(size) {
  if (size < 5) {
    const sizeMin = 5;
    sizeOfBoard(sizeMin);
  } else if (size > 50) {
    const sizeMax = 50;
    sizeOfBoard(sizeMax);
  } else {
    sizeOfBoard(size);
  }
}

const sizeValue = document.getElementById('board-size');

function generateBoard() {
  console.log(`${sizeValue.value}`);
  if (sizeValue.value !== '') {
    board.innerHTML = '';
    boardCheck(sizeValue.value);
  } else {
    alert('Board inválido!');
    const sizeFixed = 5;
    sizeOfBoard(sizeFixed);
  }
}

generateBoardBtn.addEventListener('click', generateBoard);

const clearBoardBtn = document.getElementById('clear-board');

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

clearBoardBtn.addEventListener('click', clearBoard);

window.onload = function carregamento() {
  color1.style.backgroundColor = 'black';
  color2.style.backgroundColor = generateRandomColor();
  color3.style.backgroundColor = generateRandomColor();
  color4.style.backgroundColor = generateRandomColor();

  color1.classList.add('selected');
  sizeOfBoard(5);
};
