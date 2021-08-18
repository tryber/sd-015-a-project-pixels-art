/* eslint-disable func-names */
/* eslint-disable no-loop-func */
/* eslint-disable prefer-template */
/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-const */
/* eslint-disable prefer-arrow-callback */
const colorPalette = document.getElementById('color-palette');
const color = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');
const clearBtn = document.getElementById('clear-board');
const initialSelection = document.getElementsByClassName('color');
const btnBSize = document.querySelector('#generate-board');
const boardSize = document.querySelector('#board-size');
let pixelBoard = document.querySelector('#pixel-board');
let selectedColor;
let colorList = ['black'];

window.onload = function () {
  initialSelection[0].classList.add('selected');
  selectedColor = initialSelection[0].style.backgroundColor;
};

function randomColor() {
  let colorCode = '0123456789ABCDEF';
  let rndColor = '#';
  for (let i = 0; i < 6; i += 1) {
    rndColor += colorCode[Math.floor(Math.random() * 16)];
  }
  return rndColor;
}

for (let i = 0; i < 4; i += 1) {
  colorList.push(randomColor());
}

for (let i = 0; i < 4; i += 1) {
  const createColor = document.createElement('div');
  createColor.className = 'color';
  colorPalette.appendChild(createColor);
  createColor.style.backgroundColor = colorList[i];
}

function fillPixelBoard(numberOfPixels) {
  for (let i = 0; i < numberOfPixels; i += 1) {
    let pixelBoard = document.getElementById('pixel-board');
    let createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelBoard.appendChild(createPixel);
    pixel[i].addEventListener('click', function () {
      pixel[i].style.backgroundColor = selectedColor;
    });
  }
}
fillPixelBoard(25);

function deletePixelBoard() {
  for (let i = pixel.length - 1; i >= 0; i -= 1) {
    pixelBoard.removeChild(pixel[i]);
  }
}

for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', function () {
    for (let i = 0; i < color.length; i += 1) {
      color[i].classList.remove('selected');
    }
    color[i].classList.add('selected');
    selectedColor = color[i].style.backgroundColor;
    console.log(`${selectedColor} selecionado`);
  });
}

clearBtn.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

function minMaxBSize(size) {
  if (size.value < 5) {
    deletePixelBoard();
    fillPixelBoard(Math.pow(5, 2));
    pixelBoard.style.setProperty('grid-template-columns', 'repeat(5, 0fr)');
  } else if (size.value > 50) {
    deletePixelBoard();
    fillPixelBoard(Math.pow(50, 2));
    pixelBoard.style.setProperty('grid-template-columns', 'repeat(50, 0fr)');
  }
  alert('número de pixels deve estar entre 5 e 50');
}

btnBSize.addEventListener('click', function () {
  let sqBoardSize = Math.pow(boardSize.value, 2);
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value < 5 || boardSize.value > 50) {
    minMaxBSize(boardSize);
  } else {
    deletePixelBoard();
    fillPixelBoard(sqBoardSize);
    pixelBoard.style.setProperty('grid-template-columns', 'repeat(' + boardSize.value + ', 0fr)');
  }
});
