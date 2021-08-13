// Create Color Palette Boxes
const colorPaletteSection = document.getElementById('color-palette');

let paletteColors = ['black', 'red', 'green', 'blue'];

function createPalette(colors) {
  for (color of colors) {
    let colorBox = document.createElement('div');
    colorBox.className = 'color';
    colorBox.style.backgroundColor = color;
    colorBox.style.border = '1px solid black';

    if (color === 'black') {
        colorBox.classList.add('selected')
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
    lineDiv.className = 'line'

    for (let innerIdx = 0; innerIdx < boxesPerLine; innerIdx += 1) {
      let pixelBox = document.createElement('div');

      pixelBox.className = 'pixel';
      pixelBox.backgroundColor = 'white';
      pixelBox.style.border = '1px solid black';

      lineDiv.appendChild(pixelBox)
    }
    pixelBoardSection.appendChild(lineDiv)
  }
}

fillPixelBoard(5, 5)