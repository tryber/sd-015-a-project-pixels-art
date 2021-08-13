const quadroPixel = document.getElementById('pixel-board');
const corSelected = document.querySelector('.selected');
const numberOfLines = 5;
const numberOfColums = 5;

const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const black = document.getElementById('black');

numberLines(numberOfLines);

const lines = document.querySelectorAll('.line');

createBox(lines, numberOfColums);
//corSelected.addEventListener('click', trocaClass);

function numberLines(number) {
  for (let index = 0; index < number; index += 1) {
    const div = document.createElement('div');
    div.className = 'line';
    quadroPixel.appendChild(div);
  }
}

function createBox(lines, colunas) {
  for (let index = 0; index < lines.length; index += 1) {
    for (let j = 0; j < colunas; j += 1) {
      const positionLine = lines[index];
      const divGrid = document.createElement('div');
      divGrid.className = 'pixel';
      positionLine.appendChild(divGrid);
    }
  }
}

function trocaClass() {
  if (corSelected.className === 'color') {
    corSelected.className = 'color selected';
  } else {
    corSelected.className = 'color';
  }
}

function trocaSelecionaDay(event) {
  const techElement = document.querySelector('.selected');
  techElement.classList.remove('selected');
  event.target.classList.add('selected');  
}

red.addEventListener('click', trocaSelecionaDay);
green.addEventListener('click', trocaSelecionaDay);
blue.addEventListener('click', trocaSelecionaDay);
black.addEventListener('click', trocaSelecionaDay);