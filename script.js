const cores = document.getElementsByClassName('color');
const rgb = 'rgb(255,255,255)';
cores[0].style.background = 'black';
cores[1].style.background = 'red';
cores[2].style.background = 'blue';
cores[3].style.background = 'green';

const quadroPixel = document.getElementById('pixel-board');
const btn = document.querySelector('button');
const numberOfLines = 5;
const numberOfColums = 5;
const pixelTotal = numberOfLines * numberOfColums;

function numberLines(number) {
  for (let index = 0; index < number; index += 1) {
    const div = document.createElement('div');
    div.className = 'line';
    quadroPixel.appendChild(div);
  }
}
numberLines(numberOfLines);

const lines = document.querySelectorAll('.line');

function createBox(linhas, colunas) {
  for (let index = 0; index < linhas.length; index += 1) {
    for (let j = 0; j < colunas; j += 1) {
      const positionLine = linhas[index];
      const divGrid = document.createElement('div');
      divGrid.className = 'pixel';
      positionLine.appendChild(divGrid);
    }
  }
}

function trocaCor(event) {
  const techElement = document.querySelector('.selected');
  techElement.classList.remove('selected');
  event.target.classList.add('selected');
}

function pintaGrid() {
  const colorDiv = document.querySelectorAll('.color');
  for (let index = 0; index < colorDiv.length; index += 1) {
    if (colorDiv[index].className === 'color selected') {
      const selectCor = colorDiv[index].style.background;
      event.target.style.background = selectCor;
    }
  }
}

function boxClear() {
  for (let index = 0; index < lines.length; index += 1) {
    const clearDiv = document.querySelectorAll('.line');
    clearDiv[index].style.background = rgb;
  }
  for (let j = 0; j < pixelTotal; j += 1) {
    const box = document.querySelectorAll('.pixel');
    box[j].style.background = rgb;
  }
}

function clearQuadro() {
  quadroPixel.style.background = rgb;
  boxClear();
}

createBox(lines, numberOfColums);

cores[0].addEventListener('click', trocaCor);
cores[1].addEventListener('click', trocaCor);
cores[2].addEventListener('click', trocaCor);
cores[3].addEventListener('click', trocaCor);

quadroPixel.addEventListener('click', pintaGrid);

btn.addEventListener('click', clearQuadro);
