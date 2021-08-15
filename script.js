const h1 = document.createElement('h1');
const sectionCollorPalette = document.createElement('section');
const quadroPixel = document.createElement('div');
const altura = 5;
const largura = 5;

sectionCollorPalette.id = 'color-palette';
quadroPixel.id = 'pixel-board';
h1.innerText = 'Paleta de Cores';
h1.id = 'title';

window.onload = function selectedElement() {
  const elementSelected = document.querySelectorAll('.color')[0];
  elementSelected.classList.add('selected');
}

 function elementClick() {
  let paletaCores = document.querySelectorAll('.color');
  let elementoClicado = document.querySelector('.selected');
  const paletaDeCores = document.querySelector('#color-palette');

  paletaDeCores.addEventListener('click', function(event) {
    removeSelected(elementoClicado);
    for (let i = 0; i < paletaCores.length; i += 1) {
      elementoClicado = event.target.classList.add('selected');
    }
  })
  return elementoClicado;
}

function removeSelected(elemento) {
  let remocaoLista = document.querySelectorAll('.selected');

  for (let i = 0; i < remocaoLista.length; i += 1) {
    if (remocaoLista[i] !== elemento) {
      remocaoLista[i].classList.remove('selected');
    } return remocaoLista[i];
  }
}

function bodyChildren(elemento) { 
  document.body.appendChild(elemento);
}

function pixelBoardChildren(elemento) { 
  quadroPixel.appendChild(elemento);
}

function criaCaixa() {
  const caixa = document.createElement('div');
  caixa.className = 'pixel';
  caixa.style.border = '1px solid black';
  caixa.style.marginBottom = '0px';
  return caixa;
}

for (let i = 0; i < 4; i += 1) {
  const element = document.createElement('div');
  sectionCollorPalette.appendChild(element);
  element.className = 'color';
}

function fillBoard() {
  for (let i = 0; i < largura; i += 1) {
    pixelBoardChildren(criaCaixa());
    for (let j = 0; j < altura - 1; j += 1) {
      pixelBoardChildren(criaCaixa());
    }
  }
}
criaCaixa();
bodyChildren(h1);
bodyChildren(sectionCollorPalette);
bodyChildren(quadroPixel);
fillBoard();
elementClick();
