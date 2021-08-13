// Function to fill pixel with selected color
function fillWithColor(evt) {
  evt.target.style.backgroundColor = sessionStorage.getItem('selectedColor');
}

// Function to change selected color
function changeSelectedColor(evt) {
  sessionStorage.setItem('selectedColor', evt.target.style.backgroundColor);

  let paletteColors = document.getElementsByClassName('color');

  for (color of paletteColors) {
    if (color.classList.contains('selected')) {
      color.classList.remove('selected');
    }
    if (color.style.backgroundColor === evt.target.style.backgroundColor) {
      color.classList.add('selected');
    }
  }
}

// Create Color Palette Boxes
const colorPaletteSection = document.getElementById('color-palette');

let paletteColors = ['black', 'red', 'green', 'blue'];

function createPalette(colors) {
  for (color of colors) {
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
    let lineDiv = document.createElement('div');
    lineDiv.className = 'line';

    for (let innerIdx = 0; innerIdx < boxesPerLine; innerIdx += 1) {
      let pixelBox = document.createElement('div');

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
  let paletteColors = document.getElementsByClassName('color');

  for (color of paletteColors) {
    if (color.classList.contains('selected')) {
      sessionStorage.selectedColor = color.style.backgroundColor;
    }
  }
};
