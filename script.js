const paletaDeCores = ['black', 'red', 'green', 'blue'];
const colorSlot = document.getElementById('color-palette').children;
const pixels = document.getElementsByClassName('pixel');
const botaoLimpar = document.getElementById('clear-board');

window.onload = function () {
  function definirPaletaDeCores() {
    for (let index = 0; index < colorSlot.length; index += 1) {
      colorSlot[index].style.backgroundColor = paletaDeCores[index];
    }
  }

  definirPaletaDeCores();

  document.querySelector('.color').classList.add('selected');
};

function adicionarEventos(elemento, evento, funcao) {
  if (elemento.length > 0) {
    for (let index = 0; index < elemento.length; index += 1) {
      elemento[index].addEventListener(evento, funcao);
    }
  } else {
    elemento.addEventListener(evento, funcao);
  }
}

function mudarCorPaleta(evento) {
  document.querySelector('.selected').classList.remove('selected');
  evento.target.classList.add('selected');
}

function pintarPixels(evento) {
  const cor = document.querySelector('.selected').style.backgroundColor;
  evento.target.style.backgroundColor = cor;
}

function pintarDeBranco() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

adicionarEventos(colorSlot, 'click', mudarCorPaleta);
adicionarEventos(pixels, 'click', pintarPixels);
adicionarEventos(botaoLimpar, 'click', pintarDeBranco);
