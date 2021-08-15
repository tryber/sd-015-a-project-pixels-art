const colors = ['black', 'red', 'green', 'blue'];
const gridHeight = 5;
const gridWidth = 5;
const gridSize = gridHeight * gridWidth;

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
  }
  document.querySelector('.pixel').classList.add('selectedColor');
}

createGrid();

let toPaint = document.querySelector('.selected').classList[1];

function setSelected() {
  const selectedBlock = document.querySelector('.selected');
  const clickedBlock = event.currentTarget;

  if (clickedBlock.classList.contains('selected') === false) {
    clickedBlock.classList.add('selected');
    selectedBlock.classList.remove('selected');
    toPaint = clickedBlock.classList[1];
  }
}

function setSelectedColor() {
  const selectedBlock = document.querySelector('.selectedColor');
  const clickedBlock = event.currentTarget;

  if (clickedBlock.classList.contains('selectedColor') === false) {
    clickedBlock.classList.add('selectedColor');
    selectedBlock.classList.remove('selectedColor');
  }
  clickedBlock.style.backgroundColor = toPaint;
}

for (let i = 0; i < colors.length; i += 1) {
  const blockColors = document.querySelectorAll('.color')[i];
  blockColors.addEventListener('click', setSelected);
}

for (let i = 0; i < gridSize; i += 1) {
  const blockColors = document.querySelectorAll('.pixel')[i];
  blockColors.addEventListener('click', setSelectedColor);
}
