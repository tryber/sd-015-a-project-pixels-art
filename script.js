// Create a certain number of divs according to the number chosen in numberOfElements

function createPixelsBoard() {
  const numberOfElements = 25;
  for (let i = 1; i <= numberOfElements; i += 1) {
    const boardDiv = document.getElementById('pixel-board');
    const elementsDiv = document.createElement('div');
    elementsDiv.className = 'pixel';
    boardDiv.appendChild(elementsDiv);
  }
}

createPixelsBoard();

// Redefine the size of each pixel inside the pixel board and change their borders

function sizePixel() {
  let eachPixel = document.querySelectorAll('.pixel');
  let newPixelSize = 40;
  let pixelBoard = document.getElementById('pixel-board');
  let pixelBoardSize = 5 * newPixelSize + 10;
  
  pixelBoard.style.width = pixelBoardSize + 'px';
  pixelBoard.style.height = pixelBoardSize + 'px';

  for (let i = 0; i < eachPixel.length; i += 1) {
    eachPixel[i].style.width = newPixelSize + 'px';
    eachPixel[i].style.height = newPixelSize + 'px';
    eachPixel[i].style.border = 'solid black 1px';
  }
}

sizePixel();