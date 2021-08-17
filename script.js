const h1 = document.createElement('h1');
const sectionCollorPalette = document.createElement('section');
const quadroPixel = document.createElement('div');
const pixelsBoard = document.querySelectorAll('.pixel');
const tamanhoPaleta = 4;
const altura = 5;
const largura = 5;

function corQuadrados () {
  quadroPixel.addEventListener('click', )
}

function pintaQuadrado () {

}

sectionCollorPalette.id = 'color-palette';
quadroPixel.id = 'pixel-board';
h1.innerText = 'Paleta de Cores';
h1.id = 'title';

window.onload = function selectedElement() {
  const elementSelected = document.querySelectorAll('.color')[0];
  elementSelected.classList.add('selected');
};

// function elementClick() {
//   let paletaCores = document.querySelectorAll('.color');
//   var elementoClicado = document.querySelector('.selected');
//   const paletaDeCores = document.querySelector('#color-palette');
//   let estilo;

//   paletaDeCores.addEventListener('click', function(event) { //
//     removeSelected(elementoClicado);
//     for (let i = 0; i < paletaCores.length; i += 1) {
//       elementoClicado = event.target.classList.add('selected');
//       elementoClicado = event.target.window.getComputedStyle();
//     }
//   });
//   return elementoClicado;
// }

function pasteStyle (element) {
  const pixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', function(event) {
        event.target.style.backgroundColor = element?element: 'black';
        console.log(element);
    });
  }
}

function elementClick() {
  let paletaCores = document.querySelectorAll('.color');
  let elementoClicado = document.querySelector('.selected');
  const paletaDeCores = document.querySelector('#color-palette');
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < paletaCores.length; i += 1) {
    paletaCores[i].addEventListener('click', function (event) {
      removeSelected(elementoClicado);
      elementoClicado = event.target.classList.add('selected');
      elementoClicado = getComputedStyle(event.target).getPropertyValue('background-color');
      pasteStyle(elementoClicado);
    });
  } return elementoClicado;
}

function removeSelected(elemento) {
  const remocaoLista = document.querySelectorAll('.selected');

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

function criaCaixa(j) {
  const caixa = document.createElement('div');
  caixa.className = 'pixel';
  caixa.style.border = '1px solid black';
  caixa.style.marginBottom = '0px';
  return caixa;
}

// for (let i = 0; i < 4; i += 1) {
//   const element = document.createElement('div');
//   sectionCollorPalette.appendChild(element);
//   element.className = 'color';
// }

function criaPaletaCores() {
  for (let i = 0; i < tamanhoPaleta; i += 1) {
    const element = document.createElement('div');
    sectionCollorPalette.appendChild(element);
    element.className = 'color';
  }
}

function fillBoard() {
  for (let i = 0; i < largura; i += 1) {
    pixelBoardChildren(criaCaixa());
    for (let j = 0; j < altura - 1; j += 1) {
      pixelBoardChildren(criaCaixa());
    }
  }
}

bodyChildren(h1);
bodyChildren(sectionCollorPalette);
bodyChildren(quadroPixel);
criaPaletaCores();
fillBoard();
elementClick();
pasteStyle(elementClick());
