const pixBoard = document.querySelector('#pixel-board');
const paletaDeCores = document.querySelectorAll('.color');

function criaTabela() {
  for (let coluna = 0; coluna < 5; coluna+=1) {
    let columnPixel = document.createElement('div')
    columnPixel.id = "coluna";
    pixBoard.appendChild(columnPixel);
    for (let linha = 0; linha < 5; linha+=1) {
      let linePixel = document.createElement('div');
      linePixel.className = "pixel";
      linePixel.id = "linha";
      columnPixel.appendChild(linePixel);
    }
  }
}

criaTabela();

function mudaSelected() {
  for (let i = 0; i < paletaDeCores.length; i++) {
    paletaPosition = paletaDeCores[i];
    paletaPosition.classList.remove('selected');
  }
}

function adicionaSelected(pixel) {
  mudaSelected();
  pixel.target.classList.add('selected');
}

// Feito com a ajuda de colegas e monitoria
for (let i = 0; i < paletaDeCores.length; i++) {
  paletaDeCores[i].addEventListener('click', adicionaSelected);
}

function coloriPixel(evento) {
  let classSelected = document.querySelector('.selected')
  selectedCor = window.getComputedStyle(classSelected, null).getPropertyValue('background-color');
  evento.target.style.background = selectedCor;
}

const pixel = document.getElementsByClassName('pixel') 
for (let index = 0; index < pixel.length; index+=1) {
  pixel[index].addEventListener('click', coloriPixel);
}