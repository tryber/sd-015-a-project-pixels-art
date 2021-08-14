const cores = document.getElementsByClassName('color');
const input = document.getElementById('board-size');
const minumum = 5;
const maximum = 50;
const rgb = 'rgb(255,255,255)';
cores[0].style.background = 'black';
cores[1].style.background = 'red';
cores[2].style.background = 'blue';
cores[3].style.background = 'green';

const quadroPixel = document.getElementById('pixel-board');
const btn = document.querySelector('#clear-board');
const btnGerar = document.querySelector('#generate-board');

function inpuValue() {
  let numberOfLines = input.value;
  if (numberOfLines < minumum) {
    numberOfLines = minumum;
  } else if (numberOfLines > maximum) {
    numberOfLines = maximum;
  }
  return numberOfLines;
}

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

function removeAll() {
  const div = document.getElementById('pixel-board');
  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
}

function numberLines(number) {
  removeAll();
  for (let index = 0; index < number; index += 1) {
    const div = document.createElement('div');
    div.className = 'line';
    quadroPixel.appendChild(div);
  }
  const lines = document.querySelectorAll('.line');
  createBox(lines, number);
}

function capturaInput() {
  const numberOfLines = inpuValue();
  if (!parseInt(input.value, 10)) {
    input.value = '';
    alert('Board inválido!');
    return;
  }
  numberLines(numberOfLines);
}

if (input.value === '') {
  input.value = minumum;
  capturaInput();
}

btnGerar.addEventListener('click', capturaInput);

function trocaCor(event) {
  const techElement = document.querySelector('.selected');
  techElement.classList.remove('selected');
  event.target.classList.add('selected');
}

function pintaGrid(event) {
  const colorDiv = document.querySelectorAll('.color');
  for (let index = 0; index < colorDiv.length; index += 1) {
    if (colorDiv[index].className === 'color selected') {
      const selectCor = colorDiv[index].style.background;
      const color = event.target;
      color.style.background = selectCor;
    }
  }
}

function boxClear() {
  const lines = document.querySelectorAll('.line');
  const pixelTotal = inpuValue() * inpuValue();
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

cores[0].addEventListener('click', trocaCor);
cores[1].addEventListener('click', trocaCor);
cores[2].addEventListener('click', trocaCor);
cores[3].addEventListener('click', trocaCor);

quadroPixel.addEventListener('click', pintaGrid);

btn.addEventListener('click', clearQuadro);
