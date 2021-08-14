const cores = document.getElementsByClassName('color');
const input = document.getElementById('board-size');
const minumum = 5;
const maximum = 50;
const rgb = 'rgb(255,255,255)';

const quadroPixel = document.getElementById('pixel-board');
const btn = document.querySelector('#clear-board');
const btnGerar = document.querySelector('#generate-board');

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

function verificaInput() {
  if (input.value === '') {
    return minumum;
  }
  return input.value;
}

numberLines(minumum);

btnGerar.addEventListener('click', () => {
  let numberOfLines = input.value;
  if (numberOfLines === '') {
    alert('Board inválido!');
  }
  if (numberOfLines < minumum) {
    numberOfLines = minumum;
    input.value = minumum;
  }
  if (numberOfLines > maximum) {
    numberOfLines = maximum;
    input.value = maximum;
  }
  numberLines(numberOfLines);
  console.log(numberOfLines);
});

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
  const pixelTotal = verificaInput() * verificaInput();
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

function gerarCor(opacidade = 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

cores[0].style.background = 'black';
cores[1].style.background = gerarCor();
cores[2].style.background = gerarCor();
cores[3].style.background = gerarCor();
