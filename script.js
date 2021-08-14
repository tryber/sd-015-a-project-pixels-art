// const cores = ['black', 'blue', 'green', 'purple'];
let cores = [];

cores.push('black');
for (let idx6 = 0; idx6 < 3; idx6 += 1) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  cores.push('#' + randomColor);
}
console.log(cores);

const pixelBoard = document.querySelector('#pixel-board');

for (index = 0; index < cores.length; index += 1) {
  let motherPalette = document.createElement('div');
  let divPalette = document
    .querySelector('#color-palette')
    .appendChild(motherPalette);

  divPalette.className = 'color';
  divPalette.style.backgroundColor = cores[index];
  // divPalette.innerHTML = cores[index];

  if (cores[index] === 'black') {
    divPalette.classList.add('selected');
  }
}

const colorSelection = document.querySelector('#color-palette');
colorSelection.addEventListener('click', changeSelected);

function changeSelected(div) {
  let listaDeDivs = document.getElementsByClassName('color');
  // console.log(listaDeDivs)

  for (let idx2 = 0; idx2 < listaDeDivs.length; idx2 += 1) {
    listaDeDivs[idx2].classList.remove('selected');
  }

  div.target.classList.add('selected');
}

for (idx = 0; idx < 5; idx += 1) {
  for (idx2 = 0; idx2 < 5; idx2 += 1) {
    let motherPixel2 = document.createElement('div');
    let eachPixel2 = document
      .querySelector('#pixel-board')
      .appendChild(motherPixel2);
    // eachPixel2.innerHTML = '';
    eachPixel2.className = 'pixel';
    eachPixel2.style.backgroundColor = 'white';
  }
  pixelBoard.style.width = 5 * 42 + 'px';
}

let generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', gerarBoard);
generateBoard.addEventListener('onchange', gerarBoard);

function gerarBoard() {
  const inputValue = document.querySelector('#board-size').value;
  const resetBoard = document.querySelector('#pixel-board').children;

  if (inputValue === '') {
    alert('Board inválido!');
  } 
  else if (inputValue < 5) {
    inputValue = '5';
  }
  if (inputValue > 50) {
    inputValue = '50';
  }

  if (resetBoard.length > 0) {
    for (let idx5 = 0; idx5 < resetBoard.length; idx5 += 1) {
      resetBoard[idx5].classList.remove('pixel');
    }
  }
  for (idx = 0; idx < inputValue; idx += 1) {
    for (idx2 = 0; idx2 < inputValue; idx2 += 1) {
      let motherPixel2 = document.createElement('div');
      let eachPixel2 = document
        .querySelector('#pixel-board')
        .appendChild(motherPixel2);

      eachPixel2.className = 'pixel';
      eachPixel2.style.backgroundColor = 'white';
    }
    pixelBoard.style.width = inputValue * 42 + 'px';
  }
}

let quadro = document.querySelector('#pixel-board');

quadro.addEventListener('click', colorir);

function colorir(quadrado) {
  quadrado.target.style.backgroundColor =
    document.querySelector('.selected').style.backgroundColor;
}

let botao = document.querySelector('#clear-board');
let motherBoard = document.querySelector('#pixel-board').children;
botao.addEventListener('click', limpador);

function limpador() {
  for (let idx3 = 0; idx3 < motherBoard.length; idx3 += 1) {
    motherBoard[idx3].style.backgroundColor = 'white';
  }
}
