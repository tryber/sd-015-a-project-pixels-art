/* eslint-disable no-unused-vars */
const BOARDPIXEL = 'pixel-board';
let NUMOFPIXELS = 25;

function createBoxHelper(parent, color) {
  const newDiv = document.createElement('div');
  const newLi = document.createElement('li');
  const parentElement = document.getElementById(parent);

  newDiv.className = 'color';
  newDiv.style.backgroundColor = color;
  parentElement.appendChild(newDiv);
  newDiv.appendChild(newLi);
}
function createBox(parent) {
  createBoxHelper(parent, 'black');
  for (let i = 0; i < 3; i += 1) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    createBoxHelper(parent, `rgb(${red}, ${green}, ${blue})`);
  }
}

function createPixel(parent, value) {
  for (let i = 0; i < value; i += 1) {
    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
    const parentElement = document.getElementById(parent);

    newDiv.className = 'pixel';
    newDiv.style.backgroundColor = 'white';
    parentElement.appendChild(newDiv);
    newDiv.appendChild(newLi);
  }
}

function removePixel(value) {
  for (let i = 0; i < value; i += 1) {
    const selectAllPixel = document.getElementsByClassName('pixel');

    selectAllPixel[0].remove();
  }
}

function defineColor() {
  const blackBg = document.querySelector('.color');
  blackBg.classList.add('selected');
}

function selectColor() {
  const palette = document.getElementById('color-palette');
  palette.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    const newColor = event.target;

    selectedColor.classList.remove('selected');
    newColor.classList.add('selected');
  });
}

function fillPixel() {
  const pixel = document.getElementById(BOARDPIXEL);

  pixel.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    const selectedPixel = event.target;

    selectedPixel.style.backgroundColor = selectedColor;
  });
}

function clearBoard() {
  const clearBtn = document.querySelector('button');

  clearBtn.id = 'clear-board';
  clearBtn.innerHTML = 'Limpar';
  clearBtn.addEventListener('click', () => {
    const getAllPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < getAllPixels.length; i += 1) {
      getAllPixels[i].style.backgroundColor = 'white';
    }
  });
}
function checkInput(element) {
  if (element > 0) {
    return true;
  }
  return false;
}

function adjustingNumOfPixels(value) {
  const numOfPixels = value * value;
  if (numOfPixels > NUMOFPIXELS) {
    createPixel(BOARDPIXEL, (numOfPixels - NUMOFPIXELS));
    NUMOFPIXELS = numOfPixels;
  } else if (numOfPixels < NUMOFPIXELS) {
    removePixel((NUMOFPIXELS - numOfPixels));
    NUMOFPIXELS = numOfPixels;
  }
}

function changePixelBoard(input) {
  const pixelBoard = document.getElementById(BOARDPIXEL);
  const valueInput = Number(input);

  pixelBoard.style.width = `${(valueInput * 42)}px`;
}

function minAndMaxLength(value) {
  let newValue = Number(value);
  // actual value >= 5
  newValue = Math.max(newValue, 5);
  // actual value <= 50
  newValue = Math.min(newValue, 50);
  return newValue;
}
function definePixelSize() {
  const input = document.querySelector('input');
  const vqvBtn = document.getElementById('generate-board');

  vqvBtn.addEventListener('click', () => {
    let valueInput = input.value;
    const inputCheck = checkInput(valueInput);
    if (inputCheck) {
      valueInput = minAndMaxLength(valueInput);
      adjustingNumOfPixels(valueInput);
      changePixelBoard(valueInput);
    } else {
      window.alert('Board inválido!');
    }
  });
}

createBox('color-palette');
createPixel(BOARDPIXEL, 25);
defineColor();
selectColor();
fillPixel();
clearBoard();
definePixelSize();
