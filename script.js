window.onload = firsFunction

function firsFunction() {
  createTable(5);
  // gambiarra pq declarei fora da função
  allPixels = document.querySelectorAll('.pixel');
  // gambiarra também pq declarei fora da função
  for (let index = 0; index < allPixels.length; index += 1) {
    let selectedPixel = document.querySelectorAll('.pixel')[index];
    selectedPixel.addEventListener('click', paintPixel);
  }
}

// Define o bloco 1 como selected
let mainBlock = document.getElementById('block-one');
mainBlock.classList.add('selected');

// Cria tabela de pixels
function createTable(boardSize) {
  let pixelBoard = document.querySelector('#pixel-board');
  for (let index = 1; index <= boardSize; index += 1) {
    let pixelLine = document.createElement('div');
    pixelBoard.appendChild(pixelLine);
    for (let index2 = 1; index2 <= boardSize; index2 += 1) {
      let pixelColumn = document.createElement('div');
      pixelLine.appendChild(pixelColumn);
      pixelColumn.className = 'pixel';
    }
  }
}

// Seleciona cor
let allColors = document.querySelectorAll('.color');

function selectColor(event) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < allColors.length; index += 1) {
  let selectedColor = document.querySelectorAll('.color')[index];
  selectedColor.addEventListener('click', selectColor);
}

// Define cor
let definedColor = 'black';

function defineColor() {
  let selectedColor = document.querySelector('.selected');
  definedColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
}

let palette = document.querySelector('#color-palette');
palette.addEventListener('click', defineColor);

// Pinta os pixels
let allPixels = document.querySelectorAll('.pixel');

function paintPixel(event) {
  event.target.style.backgroundColor = definedColor;
}

for (let index = 0; index < allPixels.length; index += 1) {
  let selectedPixel = document.querySelectorAll('.pixel')[index];
  selectedPixel.addEventListener('click', paintPixel);
}

// Limpa o quadro
let buttonClear = document.querySelector('#clear-board');

function clearBoard() {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearBoard);

// Define tamanho do quadro
let generateBoardButton = document.querySelector('#generate-board')

function changeBoardSize() {
  let inputValue = document.querySelector('#board-size').value;
  let boardSize = 0

  if (inputValue === '') {
    alert('Board inválido!')

  } else if (inputValue > 50 ){
    // Limpa o board
    for (let index = 0; index < allPixels.length; index += 1) {
      let pixelBoard = document.querySelector('.pixel');
      pixelBoard.parentNode.removeChild(pixelBoard);
    }

    boardSize = 50
    createTable(boardSize)
    // gambiarra pq declarei fora da função
    allPixels = document.querySelectorAll('.pixel');
    // gambiarra também pq declarei fora da função
    for (let index = 0; index < allPixels.length; index += 1) {
      let selectedPixel = document.querySelectorAll('.pixel')[index];
      selectedPixel.addEventListener('click', paintPixel);
    }

  } else if (inputValue < 5) {
    // Limpa o board
    for (let index = 0; index < allPixels.length; index += 1) {
      let pixelBoard = document.querySelector('.pixel');
      pixelBoard.parentNode.removeChild(pixelBoard);
    }

    boardSize = 5
    createTable(boardSize)

    // gambiarra pq declarei fora da função
    allPixels = document.querySelectorAll('.pixel');
    // gambiarra também pq declarei fora da função
    for (let index = 0; index < allPixels.length; index += 1) {
      let selectedPixel = document.querySelectorAll('.pixel')[index];
      selectedPixel.addEventListener('click', paintPixel);
    }

  } else {
    // Limpa o board
    for (let index = 0; index < allPixels.length; index += 1) {
      let pixelBoard = document.querySelector('.pixel');
      pixelBoard.parentNode.removeChild(pixelBoard);
    }

    boardSize = inputValue
    createTable(boardSize)

    // gambiarra pq declarei fora da função
    allPixels = document.querySelectorAll('.pixel');
    // gambiarra também pq declarei fora da função
    for (let index = 0; index < allPixels.length; index += 1) {
      let selectedPixel = document.querySelectorAll('.pixel')[index];
      selectedPixel.addEventListener('click', paintPixel);
    }
  }
}

generateBoardButton.addEventListener('click', changeBoardSize)
