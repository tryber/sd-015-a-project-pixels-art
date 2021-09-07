const accessBlack = document.getElementById('black-color');
const main = document.querySelector('#pixel-board');
const selected = document.querySelector('#color-palette');
const accessRed = document.getElementById('red-color');
const acessBlue = document.getElementById('blue-color');
const accessGreen = document.getElementById('green-color');

function rgb() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  return `rgb(${red}, ${green}, ${blue})`;
}

document.getElementById('black-color').style.backgroundColor = 'black';
document.getElementById('red-color').style.backgroundColor = rgb();
document.getElementById('blue-color').style.backgroundColor = rgb();
document.getElementById('green-color').style.backgroundColor = rgb();

function changeClass(event) {
  const accessClassSelected = document.querySelector('.selected');
  accessClassSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function changeColor(event) {
  const newBackGroundColor = document.querySelector('.selected');
  const way = event.target;
  const change = newBackGroundColor.style.backgroundColor;
  way.style.backgroundColor = change;
}

function createColor() {
  const createDiv = document.createElement('div');
  createDiv.classList.add('color', 'newColor');
  createDiv.style.backgroundColor = rgb();
  selected.appendChild(createDiv);
  createDiv.addEventListener('click', changeClass);
}

const teste = document.querySelector('#teste');
teste.addEventListener('click', createColor);

accessBlack.addEventListener('click', changeClass);
accessRed.addEventListener('click', changeClass);
acessBlue.addEventListener('click', changeClass);
accessGreen.addEventListener('click', changeClass);

function fixedBlock() {
  for (let i = 0; i < 5; i += 1) {
    const createWidth = document.createElement('section');
    createWidth.classList.add('block');
    main.appendChild(createWidth);
    for (let i2 = 0; i2 < 5; i2 += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      createWidth.appendChild(createPixel);
      createPixel.addEventListener('click', changeColor);
    }
  }
}

fixedBlock();

function clearBoard() {
  main.innerHTML = '';
}

function createBlock() {
  const number = document.getElementById('board-size').value;
  let result = parseInt(number, 10);
  if (number === '') {
    alert('Board inválido!');
  } if (result < 5) {
    result = 5;
  } if (result > 50) {
    result = 50;
  }
  clearBoard();
  for (let i = 0; i < result; i += 1) {
    const createWidth = document.createElement('section');
    createWidth.classList.add('block');
    main.appendChild(createWidth);
    for (let i2 = 0; i2 < result; i2 += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      createWidth.appendChild(createPixel);
      createPixel.addEventListener('click', changeColor);
    }
  }
}

const buttonGenerete = document.querySelector('#generate-board');
buttonGenerete.addEventListener('click', createBlock);

function clearBox() {
  const accessAllBlocks = document.querySelectorAll('.pixel');
  for (let i = 0; i < accessAllBlocks.length; i += 1) {
    accessAllBlocks[i].style.backgroundColor = 'white';
  }
}

const accessButton = document.querySelector('#clear-board');
accessButton.addEventListener('click', clearBox);
