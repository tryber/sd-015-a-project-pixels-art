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

function createPixels(height, width) {
  for (let l = 1; l <= height; l += 1) {
    let line = document.createElement('section');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let px = 1; px <= width; px += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

createPixels(heightPixelBoard, widthPixelBoard);

let selectedColor;

window.onload = function () {
  selectedColor = document.querySelector('.color');
  selectedColor.classList.add('selected');
};

function EvListenerInArrayOfElem(arrayOfElements, eventString, functionToCall) {
  for (let i = 0; i < arrayOfElements.length; i += 1) {
    arrayOfElements[i].addEventListener(eventString, functionToCall);
  }
}

function selectColor(event) {
  selectedColor.classList.remove('selected');
  selectedColor = event.target;
  selectedColor.classList.add('selected');
}

EvListenerInArrayOfElem(colors, 'click', selectColor);
// for (let i = 0; i < colors.length; i += 1) {
//   colors[i].addEventListener('click', selectColor);
// }

let pixels = document.querySelectorAll('.pixel');

function changePixelColor(event) {
  let color = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = color;
}

EvListenerInArrayOfElem(pixels, 'click', changePixelColor);
