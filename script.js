// Função criação do quadro de pixel

let pixel = document.getElementById('pixel-board');
let altura = 5;
let largura = 5;

for (let index = 1; index <= altura; index += 1) {
  let linhaPixel = document.createElement('div');
  linhaPixel.className = 'linha';
  for (let index = 1; index <= largura; index += 1) {
    let colunaPixel = document.createElement('div');
    colunaPixel.className = 'pixel';
    linhaPixel.appendChild(colunaPixel);
  }
  pixel.appendChild(linhaPixel);
}

// Seleciona a cor

let cores = document.querySelectorAll('.color');

for(let index = 0; index < cores.length; index += 1) {
  const corSelecionada = document.querySelectorAll('.color')[index];
  corSelecionada.addEventListener('click', trocaCor);
}

function trocaCor (event) {
  const corAntiga = document.querySelector('.selected');
  corAntiga.classList.remove('selected');
  event.target.classList.add('selected');
}
