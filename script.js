let r = 0;
let g = 0;
let b = 0;
let armazenaCor = `rgb(${r},${g},${b})`;
let colorir = '';

const colorPalette = document.querySelector('#color-palette');

function criarPaleta() {
  for (let i = 1; i < 5; i += 1) {
    colorir = `rgb(${r},${g},${b})`;
    const color = document.createElement('div');
    color.className = 'color';
    color.id = `cor${i}`;
    color.style.backgroundColor = colorir;
    colorPalette.appendChild(color);
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
  }
}

const pixelBoard = document.querySelector('#pixel-board');

function criarPixel(n) {
  for (let l = 1; l <= n; l += 1) {
    const linha = document.createElement('div');
    linha.className = 'line';
    for (let c = 1; c <= n; c += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
    pixelBoard.appendChild(linha);
    const tamanhoPixelBoard = n * 40 * 1.05;
    pixelBoard.style.width = `${tamanhoPixelBoard}px`;
  }
}

window.onload = function abrir() {
  criarPaleta();
  criarPixel(5);
  const cor1 = document.getElementById('cor1');
  cor1.className = 'selected color';
};

function selectedColor(event) {
  const aux = event;
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.className = 'color';
  aux.target.className = 'selected color';
  armazenaCor = aux.target.style.backgroundColor;
}

colorPalette.addEventListener('click', selectedColor);

function colorirPixeis(event) {
  const aux = event;
  aux.target.style.backgroundColor = armazenaCor;
}

pixelBoard.addEventListener('click', colorirPixeis);

const botao = document.querySelector('#clear-board');

function clear() {
  const apagarPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < apagarPixel.length; i += 1) {
    const aux = apagarPixel[i];
    aux.style.backgroundColor = 'white';
  }
}

botao.addEventListener('click', clear);

const inputPizelSize = document.querySelector('#board-size');
const generateBoardButton = document.querySelector('#generate-board');
let tamanhoBoard = inputPizelSize.value;

function apagarBoard() {
  const apagarLine = document.querySelectorAll('.line');
  for (let i = 0; i < apagarLine.length; i += 1) {
    const aux = apagarLine[i];
    aux.remove();
  }
}

function alterarTamanho() {
  tamanhoBoard = inputPizelSize.value;
  if (tamanhoBoard < 5) {
    tamanhoBoard = 5;
  }
  if (tamanhoBoard > 50) {
    tamanhoBoard = 50;
  }
}

function alterarTamanhoBoard() {
  tamanhoBoard = inputPizelSize.value;
  if (tamanhoBoard === '') {
    alert('Board inválido!');
  } else {
    alterarTamanho();
    apagarBoard();
    criarPixel(`${tamanhoBoard}`);
  }
}

generateBoardButton.addEventListener('click', alterarTamanhoBoard);
