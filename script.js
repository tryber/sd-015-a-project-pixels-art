const color = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');
const clearB = document.getElementById('clear-board');
const boardSize = document.getElementById('board-size');
const genBoard = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');

function randomColor() {
  const genColor = '#' + Math.floor(Math.random()*16777216).toString(16).slice(-6);
  return genColor;
} // Copyright: function made using sugestions and ideas from the content and comments posted at this link: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj

document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('color1').style.backgroundColor = randomColor();
document.getElementById('color2').style.backgroundColor = randomColor();
document.getElementById('color3').style.backgroundColor = randomColor();

function selectColor() {
  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', (event) => {
      for (let j = 0; j < color.length; j += 1) {
        color[j].classList.remove('selected');
      }
      event.target.classList.add('selected');
      document.querySelector('.selected').style.backgroundColor = color[i].style.backgroundColor;
    });
  }
}

selectColor();

function colorPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', (event) => {
      const activeColor = document.querySelector('.selected');
      const actualPixel = event.target;
      actualPixel.style.backgroundColor = activeColor.style.backgroundColor;
    });
  }
}

colorPixel();

function clearBoard() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

clearB.addEventListener('click', clearBoard);

function entireBoard(wxh) {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  for (let i = 0; i < wxh; i += 1) {
    const row = document.createElement('div');
    pixelBoard.appendChild(row);
    for (let j = 0; j < wxh; j += 1) {
      const cell = document.createElement('div');
      cell.classList.add('pixel');
      row.appendChild(cell);
    }
  }
  clearBoard();
  colorPixel();
}

entireBoard(5);

function boardCheck() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value < 5) {
    entireBoard(5);
  } else if (boardSize.value > 50) {
    entireBoard(50);
  } else {
    entireBoard(boardSize.value);
  }
}

genBoard.addEventListener('click', boardCheck);
