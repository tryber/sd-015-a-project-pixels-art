const colorPalette = document.getElementById('color-palette');
const colors = colorPalette.children;
const arrayColors = ['black', 'red', 'yellow', 'orange'];

function backgroundOfColors() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = arrayColors[i];  
  }
}
backgroundOfColors();

const pixelBoard = document.getElementById('pixel-board');
let heightPixelBoard = 5;
let widthPixelBoard = 5;

function createPixels (height,width) {
  for (let line = 1; line <= height; line += 1) {
    let line = document.createElement('section');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let pixel = 1; pixel <= width; pixel += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
    }
  }
}

createPixels(heightPixelBoard, widthPixelBoard);