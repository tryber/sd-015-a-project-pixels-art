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

function adicionaSelected(cor) {
  mudaSelected();
  cor.target.classList.add('selected');
}

for (let i = 0; i < paletaDeCores.length; i++) {
  paletaDeCores[i].addEventListener('click', adicionaSelected)
}