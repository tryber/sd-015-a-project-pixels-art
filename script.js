// REQUISITO 7
window.onload = function iniciar() {
  const corPreta = document.getElementById('black');
  corPreta.classList.add('selected');
};

// REQUISITO 4
function quadroDePixels() {
  const altura = 5;
  const largura = 5;
  const quadro = document.getElementById('pixel-board');
  for (let index = 0; index < altura * largura; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    quadro.appendChild(pixels);
  }
}
quadroDePixels();

// REQUISITO 7
function selecionar() {
  const black = document.getElementById('black');
  const red = document.getElementById('red');
  const green = document.getElementById('green');
  const blue = document.getElementById('blue');
  black.addEventListener('click', function() {
    black.classList.add('selected')
    red.classList.remove('selected')
    green.classList.remove('selected')
    blue.classList.remove('selected')
  })

  red.addEventListener('click', function() {
    black.classList.remove('selected')
    red.classList.add('selected')
    green.classList.remove('selected')
    blue.classList.remove('selected')
  })

  green.addEventListener('click', function() {
    black.classList.remove('selected')
    red.classList.remove('selected')
    green.classList.add('selected')
    blue.classList.remove('selected')
  })

  blue.addEventListener('click', function() {
    black.classList.remove('selected')
    red.classList.remove('selected')
    green.classList.remove('selected')
    blue.classList.add('selected')
  })
}
selecionar();
