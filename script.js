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
let sizeValue = 5;

function createPixels(size) {
  for (let l = 1; l <= size; l += 1) {
    const line = document.createElement('ul');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let px = 1; px <= size; px += 1) {
      const pixel = document.createElement('li');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

createPixels(sizeValue);

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

let pixels = document.querySelectorAll('.pixel');

function changePixelColor(event) {
  const color = selectedColor.style.backgroundColor;
  const pixelToChange = event.target;
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

function changeBoard() {
  sizeValue = document.getElementById('board-size').value;
  if (sizeValue === '' || sizeValue < 1) {
    window.alert('Board inválido!');
  } else {
    pixelBoard.innerHTML = '';
    createPixels(sizeValue);
    pixels = document.querySelectorAll('.pixel');
    EvListenerInArrayOfElem(pixels, 'click', changePixelColor);
  }
}

const btnBoardSize = document.querySelector('#generate-board');
btnBoardSize.addEventListener('click', changeBoard);
