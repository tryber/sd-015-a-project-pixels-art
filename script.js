function createColorPalette(number) {
  const colorPalette = document.querySelector('#color-palette');
  let colorDiv;

  for (let index = 0; index < number; index += 1) {
    colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorPalette.appendChild(colorDiv);
  }
}
function randomNumber() {
  return Math.round(Math.random() * 255);
}

function randomColor() {
  let color = 'rgb(';
  color += randomNumber();
  color += ', ';
  color += randomNumber();
  color += ', ';
  color += randomNumber();
  color += ')';
  return color;
}

const paletteOfColors = ['black', randomColor(), randomColor(), randomColor()];
const paletteDiv = document.getElementById('color-palette').children;
const clearButton = document.querySelector('#clear-board');
const pixelBoardContent = document.getElementById('pixel-board');

function makePaletteColor() {
  for (let index = 0; index < paletteOfColors.length; index += 1) {
    paletteDiv[index].style.backgroundColor = paletteOfColors[index];
  }
}

function addEvent(element, event, func) {
  if (element.length > 0) {
    for (let index = 0; index < element.length; index += 1) {
      element[index].addEventListener(event, func);
    }
  } else {
    element.addEventListener(event, func);
  }
}

// Requisito 10 foi feito utilizando a lógica do Kelvin Pichinini como inspiração, me ajudou muito a entender melhor o requisito.

function createLines(linesSize) {
  for (let index = 0; index < linesSize; index += 1) {
    const lines = document.createElement('div');
    lines.className = 'lines';
    pixelBoardContent.appendChild(lines);
  }
}

function createPixels(line) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  pixel.style.width = '40px';
  pixel.style.height = '40px';
  pixel.style.border = 'solid 1px';
  pixel.addEventListener('click', (event) => {
    const getSelectedColor = document.querySelector('.selected').style.backgroundColor;
    const getEvent = event.target;
    getEvent.style.backgroundColor = getSelectedColor;
  });
  line.appendChild(pixel);
}

function fillLines(lines, columnsSize) {
  for (let index = 0; index < columnsSize; index += 1) {
    createPixels(lines);
  }
}

function fillBoard(lines, columnsSize) {
  createLines(lines);
  const line = document.getElementsByClassName('lines');
  for (let index = 0; index < line.length; index += 1) {
    fillLines(line[index], columnsSize);
  }
}
fillBoard(5, 5);

function changeSelectedColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function makeSelected() {
  const blackElement = document.querySelector('.color');
  if (blackElement.style.backgroundColor === 'black') {
    blackElement.classList.add('selected');
  }
}

function changeColor(event) {
  const color = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = color;
}
const pixels = document.getElementsByClassName('pixel');

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);

document.getElementById('generate-board').addEventListener('click', () => {
  let linesSize = document.getElementById('board-size').value;

  if (linesSize === '') {
    alert('Board inválido!');
  } else if (linesSize < 5) {
    linesSize = 5;
  } else if (linesSize > 50) {
    linesSize = 50;
  }
  document.getElementById('pixel-board').innerHTML = '';
  fillBoard(linesSize, linesSize);
});

createColorPalette(4);
makePaletteColor();
makeSelected();
addEvent(paletteDiv, 'click', changeSelectedColor);
addEvent(pixels, 'click', changeColor);
