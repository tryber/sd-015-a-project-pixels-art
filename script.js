window.onload = firsFunction;

function firsFunction() {
  createTable(5);
  randomColorOnLoad();
  // gambiarra pq declarei fora da função
  allPixels = document.querySelectorAll('.pixel');
  // gambiarra também pq declarei fora da função
  for (let index = 0; index < allPixels.length; index += 1) {
    const selectedPixel = document.querySelectorAll('.pixel')[index];
    selectedPixel.addEventListener('click', paintPixel);
  }
}

// Define o bloco 1 como selected
const mainBlock = document.getElementById('block-one');
mainBlock.classList.add('selected');

// Cria tabela de pixels
function createTable(boardSize) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 1; index <= boardSize; index += 1) {
    const pixelLine = document.createElement('div');
    pixelBoard.appendChild(pixelLine);
    for (let index2 = 1; index2 <= boardSize; index2 += 1) {
      const pixelColumn = document.createElement('div');
      pixelLine.appendChild(pixelColumn);
      pixelColumn.className = 'pixel';
    }
  }
}

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
let allPixels = document.querySelectorAll('.pixel');

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
    allPixels[index].style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearBoard);

// Define tamanho do quadro
const generateBoardButton = document.querySelector('#generate-board');

function changeBoardSize() {
  const inputValue = document.querySelector('#board-size').value;
  let boardSize = 0;

  if (inputValue === '') {
    alert('Board inválido!');

  } else if (inputValue > 50) {
    // Limpa o board
    for (let index = 0; index < allPixels.length; index += 1) {
      const pixelBoard = document.querySelector('.pixel');
      pixelBoard.parentNode.removeChild(pixelBoard);
    }

    boardSize = 50;
    createTable(boardSize);
    // gambiarra pq declarei fora da função
    allPixels = document.querySelectorAll('.pixel');
    // gambiarra também pq declarei fora da função
    for (let index = 0; index < allPixels.length; index += 1) {
      const selectedPixel = document.querySelectorAll('.pixel')[index];
      selectedPixel.addEventListener('click', paintPixel);
    }

  } else if (inputValue < 5) {
    // Limpa o board
    for (let index = 0; index < allPixels.length; index += 1) {
      const pixelBoard = document.querySelector('.pixel');
      pixelBoard.parentNode.removeChild(pixelBoard);
    }

    boardSize = 5;
    createTable(boardSize);

    // gambiarra pq declarei fora da função
    allPixels = document.querySelectorAll('.pixel');
    // gambiarra também pq declarei fora da função
    for (let index = 0; index < allPixels.length; index += 1) {
      const selectedPixel = document.querySelectorAll('.pixel')[index];
      selectedPixel.addEventListener('click', paintPixel);
    }

  } else {
    // Limpa o board
    for (let index = 0; index < allPixels.length; index += 1) {
      const pixelBoard = document.querySelector('.pixel');
      pixelBoard.parentNode.removeChild(pixelBoard);
    }

    boardSize = inputValue;
    createTable(boardSize);

    // gambiarra pq declarei fora da função
    allPixels = document.querySelectorAll('.pixel');
    // gambiarra também pq declarei fora da função
    for (let index = 0; index < allPixels.length; index += 1) {
      const selectedPixel = document.querySelectorAll('.pixel')[index];
      selectedPixel.addEventListener('click', paintPixel);
    }
  }
}

generateBoardButton.addEventListener('click', changeBoardSize);

// cores aleatórias
function randomColorOnLoad() {
  for (let index = 2; index <= 4; index += 1) {
    const getBlock = document.querySelector('#block'+index);
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    getBlock.style.backgroundColor = randomColor;
  }
}