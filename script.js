let r = 0;
let g = 0;
let b = 0;


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
  for (i = 1; i < 5; i += 1) {
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


function criarPixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (l = 1; l < 6; l += 1) {
    for (c = 1; c < 6; c += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
    }
  }
}

function selectedColor(evento) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.className = 'color'
  evento.target.className = 'selected color';
}

colorPalette.addEventListener('click', selectedColor);
