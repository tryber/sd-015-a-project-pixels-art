// Create a certain number of divs according to the number chosen in numberOfElements

function createPixelsBoard() {
  const numberOfElements = 25;
  for (let i = 1; i <= numberOfElements; i += 1) {
    const boardDiv = document.getElementById('pixel-board');
    const elementsDiv = document.createElement('button');
    elementsDiv.className = 'pixel';
    boardDiv.appendChild(elementsDiv);
  }
}

createPixelsBoard();

// Redefine the size of each pixel inside the pixel board and change their borders

function sizePixel() {
  const eachPixel = document.querySelectorAll('.pixel');
  const newPixelSize = 40;
  const pixelBoard = document.getElementById('pixel-board');
  const pixelBoardSize = 5 * newPixelSize;
  pixelBoard.style.width = pixelBoardSize + 'px';
  pixelBoard.style.height = pixelBoardSize + 'px';

  for (let i = 0; i < eachPixel.length; i += 1) {
    eachPixel[i].style.width = newPixelSize + 'px';
    eachPixel[i].style.height = newPixelSize + 'px';
    eachPixel[i].style.border = 'solid black 1px';
  }
}

sizePixel();

// Delete the class selected from the previous element and add it in the one clicked

function resetSelected() {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}

function newSelected(colorClicked) {
  resetSelected();
  colorClicked.target.classList.add('selected');
}

document.getElementById('color-palette').addEventListener('click', newSelected);
