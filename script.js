let colorPalette = document.getElementById('color-palette');
let colors = colorPalette.children;
let arrayColors = ['black', 'blue', 'yellow', 'red'];

function backgroundOfColors() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = arrayColors[i];
  }
}

backgroundOfColors();

let pixelBoard = document.getElementById('pixel-board');
let heightPixelBoard = 5; //5 elementos de altura
let widthPixelBoard = 5; //5 elementos de largura

function createPixels (height, width) {
  for (let index = 1; index <= height; index += 1) {
    let line = document.createElement('section');
    line.className = 'line';
    pixelBoard.appendChild(line);

    for (let index = 1; index <= width; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
    }
  }
}

createPixels(heightPixelBoard, widthPixelBoard);
