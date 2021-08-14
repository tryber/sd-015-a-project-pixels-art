const h1 = document.createElement('h1');
const sectionCollorPalette = document.createElement('section');
sectionCollorPalette.id = 'color-palette';
const quadroPixel = document.createElement('div');
const pixelsBox = document.querySelectorAll('.pixel'); 
const altura = 5;
const largura = 5;

quadroPixel.id = 'pixel-board';
h1.innerText = 'Paleta de Cores';
h1.id = 'title';

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
