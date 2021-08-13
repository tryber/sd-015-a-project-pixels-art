let r = 0;
let g = 0;
let b = 0;
let armazenaCor = `rgb(${r},${g},${b})`;


window.onload = function () {
  
  criarPaleta();
  criarPixel();

  const cor1 = document.getElementById('cor1')
  const cor2 = document.getElementById('cor2')
  const cor3 = document.getElementById('cor3')

  cor1.className = 'selected color';
}

const colorPalette = document.querySelector('#color-palette');

function criarPaleta() {
  for (let i = 1; i < 5; i += 1) {
    let colorir = `rgb(${r},${g},${b})`;
    const color = document.createElement('div');
    color.className = 'color'
    color.id = `cor${i}`;
    color.style.backgroundColor = colorir;
    colorPalette.appendChild(color);
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
  }
}

const pixelBoard = document.querySelector('#pixel-board');


function criarPixel() {
  for (let l = 1; l < 6; l += 1) {
    const linha = document.createElement('div');
    linha.className = 'line';
    for (let c = 1; c < 6; c += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
    pixelBoard.appendChild(linha);
  }
}

function selectedColor(evento) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.className = 'color'
  evento.target.className = 'selected color';
  armazenaCor = evento.target.style.backgroundColor;
}

colorPalette.addEventListener('click', selectedColor);

function colorir(evento){
  evento.target.style.backgroundColor = armazenaCor;
}

pixelBoard.addEventListener('click', colorir);

const botao = document.querySelector('#clear-board');

function clear(evento){
  const apagarPixel = document.querySelectorAll('.pixel')
  for (let i = 0; i < apagarPixel.length; i += 1){
    let aux = apagarPixel[i]
    aux.style.backgroundColor = 'white';
  }
}

botao.addEventListener('click', clear)