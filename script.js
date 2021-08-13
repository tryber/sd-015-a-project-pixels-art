const colors = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const generateBoard = document.getElementById('generate-board');
const inputSize = document.getElementById('board-size');
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

generateBoard.addEventListener("click", function createBoard() {
  let selectedNumber = inputSize.value;
  pixelBoard.innerHTML = '';

  if (selectedNumber === '') {
    alert('Board inválido!');
  } else if (selectedNumber < 5) {
    selectedNumber = 5;
  } else if (selectedNumber > 50) {
    selectedNumber = 50;
  }

  for (let i = 0; i < selectedNumber; i += 1) {
    let newLine = document.createElement('tr');
    for (let j = 0; j < selectedNumber; j += 1) {
      newLine.appendChild(createPixel());
    }
    pixelBoard.appendChild(newLine);
  }
});

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

// Highlight hover pixel
pixelBoard.addEventListener('mouseover', function (event) {
  /* Source do box shadow https://getcssscan.com/css-box-shadow-examples */
  event.target.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
});

pixelBoard.addEventListener("mouseout", function(event) {
  event.target.style.boxShadow = '';
})