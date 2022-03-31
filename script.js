/* eslint-disable editorconfig/editorconfig */
let linhaLousa = 5;
let colunaLousa = 5;

const apagaTudo = document.getElementById('clear-board');
const getBlack = document.getElementById('preto');
const allColor = document.querySelectorAll('.color');
window.onload = getBlack.classList.add('selected');
const getPixels = document.getElementsByClassName('pixel');
let corSelecionada = window.getComputedStyle(getBlack).backgroundColor;
const generateBoard = document.querySelector('#generate-board');
const pixelBoardId = '#pixel-board';

const selectColor = (event) => {
  const { target } = event;
  target.style.backgroundColor = corSelecionada;
};

const randomNumber = () => Number((Math.random() * 255).toFixed());

const generateRandomColor = () => `${randomNumber()}, ${randomNumber()}, ${randomNumber()}`;

document.getElementById('azul').style.backgroundColor = `rgb(${generateRandomColor()})`;
document.getElementById('vermelho').style.backgroundColor = `rgb(${generateRandomColor()})`;
document.getElementById('verde').style.backgroundColor = `rgb(${generateRandomColor()})`;

function createLousa(element, desiredClass, father) {
  const box = document.createElement(element);
  document.querySelector(father).appendChild(box);
  box.className = desiredClass;
  box.addEventListener('click', selectColor);
}

function createElement(element, desiredClass, father) {
  const box = document.createElement(element);
  document.querySelector(father).appendChild(box);
  box.id = desiredClass;
}

apagaTudo.addEventListener('click', () => {
  for (let limpaPixel = 0; limpaPixel < getPixels.length; limpaPixel += 1) {
    getPixels[limpaPixel].style.backgroundColor = 'white';
  }
});

const createPixelBoard = () => {
  for (let preencheColuna = 0; preencheColuna < colunaLousa; preencheColuna += 1) {
    for (let preencheLinha = 1; preencheLinha <= linhaLousa; preencheLinha += 1) {
      createLousa('div', 'pixel', pixelBoardId);
    }
    createLousa('br', 'quebraLinha', pixelBoardId);
  }
};

createPixelBoard();

const setSelected = (element) => {
  const { target } = element;
  corSelecionada = window.getComputedStyle(target).backgroundColor;
  const getSelected = document.querySelector('.selected');
  if (getSelected.classList.contains('selected')) {
    getSelected.classList.remove('selected');
  }
  element.target.classList.add('selected');
};

for (let changeColor = 0; changeColor < allColor.length; changeColor += 1) {
  allColor[changeColor].addEventListener('click', setSelected);
}

const generateBoardFunc = () => {
  const inputValue = document.querySelector('#board-size').value;
  let value = inputValue;
  const undefinedValueMessage = 'Board inválido!';
  if (inputValue === '') {
    return alert(undefinedValueMessage);
  }
  if (inputValue < 5) {
    value = 5;
  }
  if (inputValue > 50) {
    value = 50;
  }
  linhaLousa = value;
  colunaLousa = value;
  document.querySelector('#pixel-board').remove();
  createElement('section', 'pixel-board', 'main');
  createPixelBoard();
};

const addFunctions = () => {
  generateBoard.addEventListener('click', generateBoardFunc);
};

addFunctions();
