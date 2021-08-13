// Function to fill pixel with selected color
function fillWithColor(event) {
  const evt = event;
  evt.target.style.backgroundColor = sessionStorage.getItem('selectedColor');
}

// Function to change selected color
function changeSelectedColor(event) {
  sessionStorage.setItem('selectedColor', event.target.style.backgroundColor);

  const paletteColorsDiv = document.querySelectorAll('.color');

  paletteColorsDiv.forEach((color) => {
    if (color.classList.contains('selected')) {
      color.classList.remove('selected');
    }
    if (color.style.backgroundColor === event.target.style.backgroundColor) {
      color.classList.add('selected');
    }
  });
}

// Create Color Palette Boxes
const colorPaletteSection = document.getElementById('color-palette');

const paletteColors = ['black'];

for (let idx = 0; idx < 3; idx += 1) {
  const rgb1 = Math.floor(Math.random() * 255);
  const rgb2 = Math.floor(Math.random() * 255);
  const rgb3 = Math.floor(Math.random() * 255);

  paletteColors.push(`rgb(${rgb1}, ${rgb2}, ${rgb3})`);
}

function createPalette(colors) {
  colors.forEach((color) => {
    const colorBox = document.createElement('div');
    colorBox.className = 'color';
    colorBox.style.backgroundColor = color;
    colorBox.style.border = '1px solid black';
    colorBox.addEventListener('click', changeSelectedColor);

    if (color === 'black') {
      colorBox.classList.add('selected');
    }

    colorPaletteSection.appendChild(colorBox);
  });
}

createPalette(paletteColors);

// Fill Pixel Board
const pixelBoardSection = document.getElementById('pixel-board');

function fillPixelBoard(lines, boxesPerLine) {
  for (let idx = 0; idx < lines; idx += 1) {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'line';

    for (let innerIdx = 0; innerIdx < boxesPerLine; innerIdx += 1) {
      const pixelBox = document.createElement('div');

      pixelBox.className = 'pixel';
      pixelBox.style.border = '1px solid black';
      pixelBox.addEventListener('click', fillWithColor);

      lineDiv.appendChild(pixelBox);
    }
    pixelBoardSection.appendChild(lineDiv);
  }
}

fillPixelBoard(5, 5);

// Function to clear board
function clearBoard() {
  const pixelLines = document.querySelectorAll('.line');
  pixelLines.forEach((line) => {
    line.childNodes.forEach((pixel) => {
      const pxl = pixel;
      pxl.style.backgroundColor = 'white';
    });
  });
}

// Function to check  if user input is OK
function checkInput(num) {
  if (num < 5) {
    return 5;
  }
  if (num > 50) {
    return 50;
  }
  return num;
}

// Function to generate custom board
function generateBoard() {
  const boardSizeInput = document.getElementById('board-size');

  if (boardSizeInput.value === '') {
    alert('Board inválido!');
  } else {
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
    while (pixelBoardSection.firstChild) {
      pixelBoardSection.removeChild(pixelBoardSection.firstChild);
    }

    const boardSize = checkInput(boardSizeInput.value);
    fillPixelBoard(boardSize, boardSize);
  }
}

// Set initial selected color to black (default)
window.onload = () => {
  const paletteColorsDiv = document.querySelectorAll('.color');

  paletteColorsDiv.forEach((color) => {
    if (color.classList.contains('selected')) {
      sessionStorage.selectedColor = color.style.backgroundColor;
    }
  });
};

// Add listener for clear button
const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', clearBoard);

// Add listener for generate board button
const generateBoardButton = document.getElementById('generate-board');

generateBoardButton.addEventListener('click', generateBoard);
