const tabelaPixelArt = 'pixel-board';

function criaPaleta(parent, color) {
  const colorDiv = document.createElement('div');
  const colorItem = document.createElement('li');
  const parentElement = document.getElementById(parent);

  colorDiv.className = 'color';
  colorDiv.style.backgroundColor = color;
  parentElement.appendChild(colorDiv);
  colorDiv.appendChild(colorItem);
}
function criaCorPaleta(parent) {
  criaPaleta(parent, 'black');
  for (let i = 0; i < 3; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    criaPaleta(parent, `rgb(${r}, ${g}, ${b})`);
  }
}

criaCorPaleta('color-palette');

function criaPixel(parent, value) {
  for (let i = 0; i < value; i += 1) {
    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
    const parentElement = document.getElementById(parent);

    newDiv.className = 'pixel';
    newDiv.style.backgroundColor = 'white';
    parentElement.appendChild(newDiv);
    newDiv.appendChild(newLi);
  }
}

criaPixel(tabelaPixelArt, 25);

function removePixel(value) {
  for (let i = 0; i < value; i += 1) {
    const selectAllPixel = document.getElementsByClassName('pixel');

    selectAllPixel[0].remove();
  }
}

function defineCor() {
  const bgPadrao = document.querySelector('.color');
  bgPadrao.classList.add('selected');
}

function selecionaCor() {
  const palette = document.getElementById('color-palette');
  palette.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    const newColor = event.target;

    selectedColor.classList.remove('selected');
    newColor.classList.add('selected');
  });
}

defineCor();
selecionaCor();

function colorePixel() {
  const pixel = document.getElementById(tabelaPixelArt);

  pixel.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    const selectedPixel = event.target;

    selectedPixel.style.backgroundColor = selectedColor;
  });
}

function limpaTabela() {
  const clearBtn = document.querySelector('button');

  clearBtn.id = 'clear-board';
  clearBtn.innerHTML = 'Limpar';
  clearBtn.addEventListener('click', () => {
    const getAllPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < getAllPixels.length; i += 1) {
      getAllPixels[i].style.backgroundColor = 'white';
    }
  });
}

colorePixel();
limpaTabela();

function checaEntrada(element) {
  if (element > 0) {
    return true;
  }
  return false;
}

function ajustaNumPixels(value) {
  let numeroPixels = 25;
  const tamanhoTabela = value * value;
  if (tamanhoTabela > numeroPixels) {
    criaPixel(tabelaPixelArt, (tamanhoTabela - numeroPixels));
    numeroPixels = tamanhoTabela;
  } else if (tamanhoTabela < numeroPixels) {
    removePixel((numeroPixels - tamanhoTabela));
    numeroPixels = tamanhoTabela;
  }
}

function mudaTabelaPixelArt(input) {
  const pixelBoard = document.getElementById(tabelaPixelArt);
  const valueInput = Number(input);

  pixelBoard.style.width = `${(valueInput * 42)}px`;
}

function minAndMaxLength(value) {
  let newValue = Number(value);
  // actual value >= 5
  newValue = Math.max(newValue, 5);
  // actual value <= 50
  newValue = Math.min(newValue, 50);
  return newValue;
}
function defineTamanhoPixel() {
  const input = document.querySelector('input');
  const vqvButton = document.getElementById('generate-board');

  vqvButton.addEventListener('click', () => {
    let valueInput = input.value;
    const inputCheck = checaEntrada(valueInput);
    if (inputCheck) {
      valueInput = minAndMaxLength(valueInput);
      ajustaNumPixels(valueInput);
      mudaTabelaPixelArt(valueInput);
    } else {
      window.alert('Board inválido!');
    }
  });
}

defineTamanhoPixel();
