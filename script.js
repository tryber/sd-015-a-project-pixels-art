// Função criação do quadro de pixel

const pixel = document.getElementById('pixel-board');
const altura = 5;
const largura = 5;

for (let index = 1; index <= altura; index += 1) {
  const linhaPixel = document.createElement('div');
  linhaPixel.className = 'linha';
  for (let inIndex = 1; inIndex <= largura; inIndex += 1) {
    const colunaPixel = document.createElement('div');
    colunaPixel.className = 'pixel';
    linhaPixel.appendChild(colunaPixel);
  }
  pixel.appendChild(linhaPixel);
}

// Seleciona a cor
sessionStorage.setItem('corPintar', document.querySelector('.selected').id);
const cores = document.querySelectorAll('.color');

function trocaCor(event) {
  const corAntiga = document.querySelector('.selected');
  corAntiga.classList.remove('selected');
  event.target.classList.add('selected');
  sessionStorage.setItem('corPintar', event.target.id);
}
for (let index = 0; index < cores.length; index += 1) {
  const corSelecionada = document.querySelectorAll('.color')[index];
  corSelecionada.addEventListener('click', trocaCor);
}

// Pintar
const pintar = document.querySelectorAll('.pixel');

function pinta(event) {
  event.target.style.backgroundColor = sessionStorage.getItem('corPintar');
}
for (let index = 0; index < pintar.length; index += 1) {
  const pixelSelecionado = document.querySelectorAll('.pixel')[index];
  pixelSelecionado.addEventListener('click', pinta);
}
// Retornar pra branco

// const pixels = document.querySelectorAll('.pixel');
// const limpar = document.getElementById('clear-board');

// function limparPixel() {
//   for (let indexP = 0; indexP < pixels.length; indexP += 1) {
//     pixels[indexP].style.backgroundColor = 'white';
//   }
// }
// limpar.addEventListener('click', 'limparPixel');
