const colors = ['black', 'red', 'green', 'blue'];
const gridHeight = 5;
const gridWidth = 5;
const gridSize = gridHeight * gridWidth;


function palette(howMany) {
  for (let i = 0; i < howMany.length; i += 1) {
    const divP = document.createElement('div');
    const parent = document.querySelector('#color-palette');
    divP.className = 'color';
    divP.classList.add(howMany[i]);
    divP.style.backgroundColor = howMany[i];

    if (howMany[i] === 'black'){
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
}

createGrid();

let selectedColor = document.querySelector('.selected');
for (i = 0; i < colors.length; i += 1) {
  const blockColors = document.querySelectorAll('.color')[i];
  blockColors.addEventListener('click', setSelected);
}

function setSelected() {
  const selectedBlock = document.querySelector('.selected');
  const clickedBlock = event.currentTarget;
  
  if (clickedBlock.classList.contains('selected')) {

  } else {
    clickedBlock.classList.add('selected');
    selectedBlock.classList.remove('selected');
  }
}