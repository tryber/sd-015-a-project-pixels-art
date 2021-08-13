// Function to fill pixel with selected color
function fillWithColor(evt) {
  evt.target.style.backgroundColor = sessionStorage.getItem('selectedColor');
}

// Function to change selected color
function changeSelectedColor(evt) {
  sessionStorage.setItem('selectedColor', evt.target.style.backgroundColor);

  const paletteColorsDiv = document.getElementsByClassName('color');

  for (const color of paletteColorsDiv) {
    if (color.classList.contains('selected')) {
      color.classList.remove('selected');
    }
    if (color.style.backgroundColor === evt.target.style.backgroundColor) {
      color.classList.add('selected');
    }
  }
}

// Function to clear board
function clearBoard() {
  const pixelLines = document.getElementsByClassName('line');
  for (let line of pixelLines) {
    for (const pixel of line.children) {
      pixel.style.backgroundColor = 'white';
    }
  }
}

// Function to generate custom board
function generateBoard() {
  const boardSizeInput = document.getElementById('board-size');

  if (boardSizeInput.value === '') {
    alert('Board inválido!');
  }
  else {
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
    while (pixelBoardSection.firstChild) {
      pixelBoardSection.removeChild(pixelBoardSection.firstChild);
    }

    if (boardSizeInput.value < 5) {
        boardSizeInput.value = 5
    }
    else if (boardSizeInput.value > 50) {
        boardSizeInput.value = 50
    }
    fillPixelBoard(boardSizeInput.value, boardSizeInput.value);
  }
}

// Create Color Palette Boxes
const colorPaletteSection = document.getElementById('color-palette');

const paletteColors = ['black', 'red', 'green', 'blue'];

function createPalette(colors) {
  for (const color of colors) {
    let colorBox = document.createElement('div');
    colorBox.className = 'color';
    colorBox.style.backgroundColor = color;
    colorBox.style.border = '1px solid black';
    colorBox.addEventListener('click', changeSelectedColor);

    if (color === 'black') {
      colorBox.classList.add('selected');
    }

    colorPaletteSection.appendChild(colorBox);
  }
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

// Set initial selected color to black (default)
window.onload = () => {
  const paletteColorsDiv = document.getElementsByClassName('color');

  for (const color of paletteColorsDiv) {
    if (color.classList.contains('selected')) {
      sessionStorage.selectedColor = color.style.backgroundColor;
    }
  }
};

// Add listener for clear button
const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', clearBoard);

// Add listener for generate board button
const generateBoardButton = document.getElementById('generate-board');

generateBoardButton.addEventListener('click', generateBoard);
