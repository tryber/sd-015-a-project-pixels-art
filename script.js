const paletaCores = document.getElementById('color-palette');
const cores = ['green', 'yellow', 'blue'];

for (let i = 0; i < 3; i += 1) {
  const corItem = cores[i];
  const item = document.createElement('div');
  item.className = 'color';
  item.style.backgroundColor = corItem;
  paletaCores.appendChild(item);
}

const quadro = document.getElementById('pixel-board');
const generateBoard = document.getElementById('generate-board');
let tamanho = document.getElementById('board-size');

function addPixels(n) {
  for (let i = 0; i < n; i += 1) {
    const itemQuadro = document.createElement('div');
    itemQuadro.className = 'pixel';
    quadro.appendChild(itemQuadro);
  }
}

addPixels(25);

const pixel = document.querySelectorAll('.pixel');
const color = document.querySelectorAll('.color');

function addClasse(event) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].className = 'color';
  }
  event.target.className += ' selected';
  const qualCor = event.target.style.backgroundColor;

  function addCor(event) {
    event.target.style.backgroundColor = qualCor;
  }

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', addCor);
  }
}

for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', addClasse);
}

function addPreto(event) {
  event.target.style.backgroundColor = 'black';
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', addPreto);
}

function limparQuadro() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

let limpar = document.getElementById('clear-board');
limpar.addEventListener('click', limparQuadro);
