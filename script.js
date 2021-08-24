/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-param-reassign */
/* eslint-disable no-inner-declarations */
function colorblack() {
  const element = document.querySelector('.color');
  element.classList.add('selected');
  const selectiontest = document.querySelector('.selected');
  selectiontest.style.backgroundColor = 'black';
  return colorblack;
}

window.onload = colorblack;

const buttonBlack = document.getElementsByClassName('color')[0];
const buttonRed = document.getElementsByClassName('color')[1];
const buttonGreen = document.getElementsByClassName('color')[2];
const buttonBrown = document.getElementsByClassName('color')[3];

function clickBlack() {
  buttonBlack.className = 'color selected';
  buttonRed.className = 'color';
  buttonGreen.className = 'color';
  buttonBrown.className = 'color';
  const selectiontest = document.querySelector('.selected');
  selectiontest.style.backgroundColor = 'black';
}

function clickRed() {
  buttonBlack.className = 'color';
  buttonRed.className = 'color selected';
  buttonGreen.className = 'color';
  buttonBrown.className = 'color';
  const selectiontest = document.querySelector('.selected');
  selectiontest.style.backgroundColor = 'red';
}

function clickGreen() {
  buttonBlack.className = 'color';
  buttonRed.className = 'color';
  buttonGreen.className = 'color selected';
  buttonBrown.className = 'color';
  const selectiontest = document.querySelector('.selected');
  selectiontest.style.backgroundColor = 'green';
}

function clickBrown() {
  buttonBlack.className = 'color';
  buttonRed.className = 'color';
  buttonGreen.className = 'color';
  buttonBrown.className = 'color selected';
  const selectiontest = document.querySelector('.selected');
  selectiontest.style.backgroundColor = 'brown';
}

buttonBlack.addEventListener('click', clickBlack);
buttonRed.addEventListener('click', clickRed);
buttonGreen.addEventListener('click', clickGreen);
buttonBrown.addEventListener('click', clickBrown);

function createTable() {
  function fillPixel(event) {
    const selected = document.querySelector('.selected');
    const color = selected.style.backgroundColor;
    event.target.style.backgroundColor = color;
  }

  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.id = 'line';
    pixelBoard.appendChild(pixelLine);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixelColumn = document.createElement('div');
      pixelLine.appendChild(pixelColumn);
      pixelColumn.className = 'pixel';
      pixelColumn.addEventListener('click', fillPixel);
    }
  }
}

createTable();

const buttonClear = document.getElementById('clear-board');

function cleanPixel() {
  for (let i = 0; i < 25; i += 1) {
    const colorwhite = document.querySelectorAll('.pixel')[i];
    colorwhite.style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', cleanPixel);
