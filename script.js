const colorPalette = document.getElementById('color-palette');
const colors = colorPalette.children;

// Source: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
// Utilizei o site para entender como gerar cores aleatórias
function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const arrayColors = ['black', generateColor(), generateColor(), generateColor()];

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

function checkSizeValue(number) {
  if (number === '' || number < 1) {
    return false;
  }
  if (number < 5) {
    return 5;
  }
  if (number > 50) {
    return 50;
  }
  return number;
}

function changeBoard() {
  sizeValue = document.getElementById('board-size').value;
  sizeValue = checkSizeValue(sizeValue);
  if (sizeValue === false) {
    window.alert('Board inválido!');
    sizeValue = 5;
  }
  pixelBoard.innerHTML = '';
  createPixels(sizeValue);
  pixels = document.querySelectorAll('.pixel');
  EvListenerInArrayOfElem(pixels, 'click', changePixelColor);
}

const btnBoardSize = document.querySelector('#generate-board');
btnBoardSize.addEventListener('click', changeBoard);
