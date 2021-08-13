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
const heightPixelBoard = 5;
const widthPixelBoard = 5;

function createPixels(height, width) {
  for (let l = 1; l <= height; l += 1) {
    const line = document.createElement('ul');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let px = 1; px <= width; px += 1) {
      const pixel = document.createElement('li');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

createPixels(heightPixelBoard, widthPixelBoard);

let selectedColor;

window.onload = function defaultColor() {
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

const pixels = document.querySelectorAll('.pixel');

function changePixelColor(event) {
  const color = selectedColor.style.backgroundColor;
  let pixelToChange = event.target;
  pixelToChange.style.backgroundColor = color;
}

EvListenerInArrayOfElem(pixels, 'click', changePixelColor);

const clearBoard = document.getElementById('clear-board');

function clearAllPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', clearAllPixels);
