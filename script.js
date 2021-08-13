const colors = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const generateBoard = document.getElementById('generate-board');
const clear = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');

// Selects color
colors.addEventListener('click', function selectsColor(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
});

// Generates random color(rgb)
function generateRandomColor() {
  let r;
  let g;
  let b;

  r = Math.floor(Math.random() * 254);
  g = Math.floor(Math.random() * 254);
  b = Math.floor(Math.random() * 254);

  return `rgb(${r}, ${g}, ${b})`;
}

// Sets first color to black and randomizes the others
window.onload = function setsColor() {
  document.getElementById('black').style.backgroundColor = 'black';
  document.getElementById('second').style.backgroundColor = generateRandomColor();
  document.getElementById('third').style.backgroundColor = generateRandomColor();
  document.getElementById('forth').style.backgroundColor = generateRandomColor();
};

// Creates pixel board
function createPixel() {
  const newPixel = document.createElement('td');
  newPixel.className = 'pixel';
  newPixel.classList.add('white');
  return newPixel;
}

function createBoard() {
  for (let i = 0; i < 5; i += 1) {
    const newLine = document.createElement('tr');
    for (let j = 0; j < 5; j += 1) {
      newLine.appendChild(createPixel());
    }
    pixelBoard.appendChild(newLine);
  }
}

createBoard();

// Paints pixels with selected color
pixelBoard.addEventListener('click', function paintPixels(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});

// Clear Board
clear.addEventListener('click', function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});