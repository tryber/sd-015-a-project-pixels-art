// Define o bloco 1 como selected
const mainBlock = document.getElementById('block-one');
mainBlock.classList.add('selected');

// Cria tabela de pixels
function createTable() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < 6; index += 1) {
    const pixelColumn = document.createElement('div');
    pixelBoard.appendChild(pixelColumn);
    for (let index2 = 1; index2 < 6; index2 += 1) {
      const pixelLine = document.createElement('div');
      pixelColumn.appendChild(pixelLine);
      pixelLine.className = 'pixel';
    }
  }
}
createTable();

// Seleciona cor
const allColors = document.querySelectorAll('.color');

function selectColor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < allColors.length; index += 1) {
  const selectedColor = document.querySelectorAll('.color')[index];
  selectedColor.addEventListener('click', selectColor);
}

// Define cor
let definedColor = 'black';

function defineColor() {
  const selectedColor = document.querySelector('.selected');
  definedColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
}

const palette = document.querySelector('#color-palette');
palette.addEventListener('click', defineColor);

// Pinta os pixels
const allPixels = document.querySelectorAll('.pixel');

function paintPixel(event) {
  event.target.style.backgroundColor = definedColor;
}

for (let index = 0; index < allPixels.length; index += 1) {
  const selectedPixel = document.querySelectorAll('.pixel')[index];
  selectedPixel.addEventListener('click', paintPixel);
}

// Limpa o quadro
const buttonClear = document.querySelector('#clear-board');

function clearBoard() {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white'
  }
}

buttonClear.addEventListener('click', clearBoard)
