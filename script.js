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
let heightPixelBoard = 5; // 5 elementos de altura
let widthPixelBoard = 5; // 5 elementos de largura

function createPixels(height, width) {
  for (let index = 1; index <= height; index += 1) {
    let line = document.createElement('section');
    line.className = 'line';
    pixelBoard.appendChild(line);

    for (let index2 = 1; index2 <= width; index2 += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
    }
  }
}

createPixels(heightPixelBoard, widthPixelBoard);

window.onload = function() {
  selectedColor = document.querySelector('.color');
  selectedColor.classList.add('selected');
}

function selectColor(event) {
  selectedColor.classList.remove('selected');
  selectedColor = event.target;
  selectedColor.classList.add('selected');
  // console.log('Teste botão paleta');

}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}


function paintingPixel(event) {
  // console.log('Teste botão que recebe cor');
  let corbackground = document.querySelector('.selected');
  // console.log(corbackground.style.backgroundColor);
  event.target.style.backgroundColor = corbackground.style.backgroundColor;

}

let allPixels = document.querySelectorAll('.pixel');

for (let index3 =0; index3 < allPixels.length; index3 += 1) {
  allPixels[index3].addEventListener('click', paintingPixel);
}