function createLineDiv() {
  const lineDiv = document.createElement('div');
  lineDiv.className = 'boardLine';
  return lineDiv;
}

function createPixels(columns) {
  const linesCreated = document.getElementsByClassName('boardLine');

  for (let i = 0; i < linesCreated.length; i += 1) {
    const line = linesCreated[i];
    for (let j = 1; j <= columns; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

function createLines(lines) {
  for (let i = 1; i <= lines; i += 1) {
    const lineDiv = createLineDiv();
    const board = document.getElementById('pixel-board');
    board.appendChild(lineDiv);
  }
}

function pixelBoard(size) {
  let lines = size;
  let columns = size;
  if (size < 5) {
    lines = 5;
    columns = 5;
  }
  if (size > 50) {
    lines = 50;
    columns = 50;
  }
  createLines(lines);
  createPixels(columns);
}

function removeBoard() {
  const boardChildren = document.getElementById('pixel-board').children;
  for (let i = boardChildren.length - 1; i >= 0; i -= 1) {
    const child = boardChildren[i];
    child.parentNode.removeChild(child);
  }
}

function randomColors() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

function randomColorPicker() {
  const colorPickers = document.getElementsByClassName('color');
  for (let i = 0; i < colorPickers.length; i += 1) {
    const color = colorPickers[i];
    if (!(color.classList.contains('selected'))) {
      color.style.backgroundColor = randomColors();
    }
  }
}

function colorPicker(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function changePixelColor(event) {
  const elementSelected = document.querySelector('.selected');
  const colorElement = window.getComputedStyle(elementSelected).backgroundColor;
  const elementoEvento = event.target;
  elementoEvento.style.backgroundColor = colorElement;
}

function clearBoard() {
  const pixelClass = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelClass.length; i += 1) {
    const pixelElement = pixelClass[i];
    pixelElement.style.backgroundColor = 'white';
  }
}

function addEvent() {
  const colorClass = document.getElementsByClassName('color');
  for (let i = 0; i < colorClass.length; i += 1) {
    const colorElement = colorClass[i];
    colorElement.addEventListener('click', colorPicker);
  }

  const pixelClass = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelClass.length; i += 1) {
    const pixelElement = pixelClass[i];
    pixelElement.addEventListener('click', changePixelColor);
  }

  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
}

function boardSize() {
  const size = document.getElementById('board-size').value;
  if (size !== '') {
    removeBoard();
    pixelBoard(size);
    addEvent();
  } else {
    alert('Board inválido!');
  }
}

const sizeButton = document.getElementById('generate-board');
sizeButton.addEventListener('click', boardSize);

randomColorPicker();
pixelBoard(5);
addEvent();
