const colorsOptions = ['red', 'green', 'blue', 'pink', 'darkBlue', 'orange', 'yellow', 'purple', 'darkGrey', 'darkRed'];

function randomColors(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  const ramdomColor = colorsOptions[randomNumber];
  return ramdomColor;
}

console.log(randomColors(0, 9));

const colors = ['black', randomColors(0, 9), randomColors(0, 9), randomColors(0, 9)];
let gridHeight = 5;
let gridWidth = 5;
let gridSize = gridHeight * gridWidth;

function changeGridSize() {
  const newGridValue = parseInt(document.querySelector('#board-size').value);
  let newGridSize = newGridValue * newGridValue;
  if (document.querySelector('#board-size').value === '') {
    alert('Board inválido!');
  } else if (newGridValue < 5) {
    alert('Valor menor que 5, considerar 5 como padrão');
  }else if (newGridValue > 50) {
    alert('Valor maior que 50, considerar 50 como padrão');
    newGridSize = 2500;
    const parent = document.querySelector('#pixel-board');
    for (let i = 1; i <= gridSize; i += 1) {
      parent.lastChild.remove();
    }
    gridSize = newGridSize;
    createGrid();
    for (let i = 0; i < gridSize; i += 1) {
      const blockColors = document.querySelectorAll('.pixel')[i];
      blockColors.addEventListener('click', setSelectedColor);
      }
  } else {
  const parent = document.querySelector('#pixel-board');
  for (let i = 1; i <= gridSize; i += 1) {
    parent.lastChild.remove();
  }
  gridSize = newGridSize;
  createGrid();
  for (let i = 0; i < gridSize; i += 1) {
    const blockColors = document.querySelectorAll('.pixel')[i];
    blockColors.addEventListener('click', setSelectedColor);
    }
  }
}

document.querySelector('#generate-board').addEventListener('click', changeGridSize);

function palette(colorArray) {
  for (let i = 0; i < colorArray.length; i += 1) {
    const divP = document.createElement('div');
    const parent = document.querySelector('#color-palette');
    divP.className = 'color';
    divP.classList.add(colorArray[i]);
    divP.style.backgroundColor = colorArray[i];
    if (colorArray[i] === 'black') {
      divP.classList.add('selected');
    }
    parent.appendChild(divP);
  }
}

palette(colors);

function createGrid() {
  for (let i = 0; i < gridSize; i += 1) {
    const divG = document.createElement('div');
    const parent = document.querySelector('#pixel-board');
    divG.className = 'pixel';

    parent.appendChild(divG);
    divG.addEventListener('click', setSelectedColor);
  }
  document.querySelector('.pixel').classList.add('selectedColor');
}

createGrid();

let paintColor = document.querySelector('.selected').classList[1];

function setSelected(event) {
  const selectedBlock = document.querySelector('.selected');
  const clickedBlock = event.currentTarget;

  if (clickedBlock.classList.contains('selected') === false) {
    clickedBlock.classList.add('selected');
    selectedBlock.classList.remove('selected');
    paintColor = clickedBlock.classList[1];
  }
}

function setSelectedColor(event) {
  const selectedBlock = document.querySelector('.selectedColor');
  const clickedBlock = event.currentTarget;

  if (clickedBlock.classList.contains('selectedColor') === false) {
    clickedBlock.classList.add('selectedColor');
    selectedBlock.classList.remove('selectedColor');
  }
  clickedBlock.style.backgroundColor = paintColor;
}

function createButton() {
  const buttonClear = document.querySelector('#clear-board');
  buttonClear.innerText = 'Limpar';
  buttonClear.addEventListener('click', clearColors);
}

function clearColors() {
  for (let i = 0; i < gridSize; i += 1) {
    const grid = document.querySelectorAll('.pixel')[i];
    grid.style.backgroundColor = 'white';
  }
}

createButton();

for (let i = 0; i < colors.length; i += 1) {
  const blockColors = document.querySelectorAll('.color')[i];
  blockColors.addEventListener('click', setSelected);
}
