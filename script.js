const boardPixel = document.querySelector('#pixel-board');

function trocaCor(event) {
  const elementoCor = document.querySelector('.selected');
  const corSelecionada = window
    .getComputedStyle(elementoCor, null)
    .getPropertyValue('background-color');
  event.target.style.backgroundColor = corSelecionada;
}

const botaoVQV = document.getElementById('generate-board');
botaoVQV.addEventListener('click', validaCriaBoard);
const inputVQV = document.getElementById('board-size');

function validaCriaBoard() {
  if (inputVQV.value === '') {
    return alert('Board inválido!');
  } else {
    criaBoard();
  }
}
function criaBoard() {
  inputVQV.type = 'number';
  inputVQV.min = '1';
  if (document.querySelector('.line') !== null) {
    const linhas = document.querySelectorAll('.line');
    for (let k of linhas) {
      let linhaRemovida = k;
      boardPixel.removeChild(linhaRemovida);
    }
  }
  inputVQV.min;

  let tamanhoVQV = inputVQV.value;
  if (tamanhoVQV === '' || (tamanhoVQV < 5 && tamanhoVQV > 0)) {
    tamanhoVQV = 5;
  }
  if (tamanhoVQV > 50) {
    tamanhoVQV = 50;
  }

  for (let i = 0; i < tamanhoVQV; i += 1) {
    const linesPixel = document.createElement('div');
    linesPixel.className = 'line';
    boardPixel.appendChild(linesPixel);
    for (let k = 1; k <= tamanhoVQV; k += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      linesPixel.appendChild(divPixel);
      divPixel.addEventListener('click', trocaCor);
    }
  }
}
criaBoard();

function selecionaCor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

const colors = document.getElementsByClassName('color');
for (let k of colors) {
  let cadaCor = k;
  cadaCor.addEventListener('click', selecionaCor);
}
const botaoClear = document.getElementById('clear-board');
botaoClear.addEventListener('click', function () {
  location.reload();
});

// const geraCor = document.querySelector('#black');
// geraCor.style.backgroundColor = gerar_cor();

function gerar_cor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

for (let k = 1; k <= 3; k += 1) {
  colors[k].style.backgroundColor = gerar_cor();
}
