const h1 = document.createElement('h1');
const sectionCollorPalette = document.createElement('section');
const quadroPixel = document.createElement('div');
const tamanhoPaleta = 4;
const botaoInput = document.createElement('input');
const inputTamanho = document.createElement('input');
const divBotoes = document.createElement('section');
const clearButton = document.createElement('input');
clearButton.id = 'clear-board';
clearButton.type = 'reset';
clearButton.value = 'Limpar';
clearButton.innerText = 'Limpar';
quadroPixel.id = 'pixel-board';
sectionCollorPalette.id = 'color-palette';
h1.id = 'title';
divBotoes.id = 'div-buttons';
inputTamanho.id = 'board-size';
inputTamanho.innerText = 'VQV';
inputTamanho.placeholder = 'height';
inputTamanho.type = 'number';
inputTamanho.min = 1;
inputTamanho.max = 50;
botaoInput.type = 'button';
botaoInput.id = 'generate-board';
botaoInput.innerHTML = 'VQV';
botaoInput.value = 'VQV';
botaoInput.innerText = 'VQV';

h1.innerText = 'Paleta de Cores';

window.onload = function selectedElement() {
  const elementSelected = document.querySelectorAll('.color')[0];
  elementSelected.classList.add('selected');
  paletteColors();
};

function paletteColors() {
  const paletacoresDiv = document.querySelectorAll('.color');
  for (let i = 1; i < paletacoresDiv.length; i += 1) {
    // let cores = 'rgb(' + mathRandom + ',' + mathRandom +',' + mathRandom + ')';
    let cores = `rgb(${Math.round(Math.random() * 255)}  ,  ${Math.round(Math.random() * 255)} ,  ${Math.round(Math.random() * 255)})`;
    paletacoresDiv[i].style.backgroundColor = cores;
  }
}

function pasteStyle(element) {
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', (event) => {
      event.target.style.backgroundColor = element?element: 'black';
    });
  }
}

function elementClick() {
  const paletaCores = document.querySelectorAll('.color');
  let elementoClicado = document.querySelector('.selected');
  const paletaDeCores = document.querySelector('#color-palette');
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < paletaCores.length; i += 1) {
    paletaCores[i].addEventListener('click', (event) => {
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

function criaCaixa() {
  const caixa = document.createElement('div');
  caixa.className = 'pixel';
  caixa.style.border = '1px solid black';
  return caixa;
}

function criaPaletaCores() {
  for (let i = 0; i < tamanhoPaleta; i += 1) {
    const element = document.createElement('div');
    sectionCollorPalette.appendChild(element);
    element.className = 'color';
  }
}

function fillBoard(valor) {
  quadroPixel.style.width = `${(valor * 42)}px`;
  quadroPixel.style.maxHeight = `${(valor * 42)}px`;
  for (let i = 0; i < valor; i += 1) {
    pixelBoardChildren(criaCaixa());
    for (let j = 0; j < valor - 1; j += 1) {
      pixelBoardChildren(criaCaixa());
    }
  }
}

function teste() {
  bodyChildren(divBotoes);
  divBotoes.appendChild(inputTamanho);
  divBotoes.appendChild(botaoInput);

  botaoInput.addEventListener('click', () => {
    quadroPixel.innerHTML = '';
    let tamanho = inputTamanho.value;
    if (tamanho === '') {
      alert('Board inválido!');
    } else if (tamanho < 5 && tamanho > 0) {
      tamanho = 5;
    } else if (tamanho > 50) {
      tamanho = 50;
    }
    fillBoard(tamanho);
  });
}

function clearBoard() {
  const pegandoPixel = document.getElementsByClassName('pixel');
  clearButton.addEventListener('click', () => {
    for (let i = 0; i < pegandoPixel.length; i += 1) {
      pegandoPixel[i].style.backgroundColor = '#ffffff';
    }
  });
}

bodyChildren(h1);
bodyChildren(sectionCollorPalette);
fillBoard(5);
teste();
bodyChildren(clearButton);
bodyChildren(quadroPixel);
criaPaletaCores();
elementClick();
pasteStyle(elementClick());
clearBoard();
