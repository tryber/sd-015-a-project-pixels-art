const colors = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const generateBoard = document.getElementById('generate-board');
const inputSize = document.getElementById('board-size');
const clear = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');
let selectedNumber = 5;

// Generates random color(rgb)
function generateRandomColor() {
  const r = Math.floor(Math.random() * 254);
  const g = Math.floor(Math.random() * 254);
  const b = Math.floor(Math.random() * 254);

  return `rgb(${r}, ${g}, ${b})`;
}

// Sets first color to black and randomizes the others
window.onload = function setsColor() {
  document.getElementById('black').style.backgroundColor = 'black';
  document.getElementById('second').style.backgroundColor = generateRandomColor();
  document.getElementById('third').style.backgroundColor = generateRandomColor();
  document.getElementById('forth').style.backgroundColor = generateRandomColor();
};

// Selects color
function selectsColor(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

colors.addEventListener('click', selectsColor);

// Creates pixel board
function createPixel() {
  const newPixel = document.createElement('td');
  newPixel.className = 'pixel';
  newPixel.classList.add('white');
  return newPixel;
}

function createBoardLoop(selectedNumber) {
  for (let i = 0; i < selectedNumber; i += 1) {
    const newLine = document.createElement('tr');
    for (let j = 0; j < selectedNumber; j += 1) {
      newLine.appendChild(createPixel());
    }
    pixelBoard.appendChild(newLine);
  }
}

function createBoard() {
  let selectedNumber = inputSize.value;
  pixelBoard.innerHTML = '';

  if (selectedNumber === '') {
    alert('Board inválido!');
  } else if (selectedNumber < 5) {
    selectedNumber = 5;
  } else if (selectedNumber > 50) {
    selectedNumber = 50;
  }

  createBoardLoop(selectedNumber);
}

generateBoard.addEventListener('click', createBoard);

// Paints pixels with selected color
function paintPixels(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

pixelBoard.addEventListener('click', paintPixels);

// Clear Board
function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', clearBoard);

// Highlight hover pixel
function highlightPixel(event) {
  /* Source do box shadow https://getcssscan.com/css-box-shadow-examples */
  event.target.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset';
}

function removeHighlight(event) {
  event.target.style.boxShadow = '';
}

pixelBoard.addEventListener('mouseout', removeHighlight);
pixelBoard.addEventListener('mouseover', highlightPixel);
