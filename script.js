// cor random
const colorSelector = document.getElementsByClassName('color');
const colorMenu = document.getElementById('color-palette');
const canvas = document.getElementById('pixel-board');
const linha = document.querySelectorAll('.line');
// const pixelColorido = document.getElementsByClassName('pixel');
let tamanho = 5;

function setColor() {
  const tag = '#';
  for (let i = 0; i < colorSelector.length; i += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // codigo para cor random achado em https://css-tricks.com/snippets/javascript/random-hex-color/
    if (i === 0) {
      colorSelector[i].style.backgroundColor = 'black';
      colorSelector[i].classList.add('selected');
    } else {
      colorSelector[i].style.backgroundColor = tag + randomColor;
    }
  }
}
setColor();

// cria o box, ideia retirada do exercicio do final do bloco 5
function createPixel(classe) {
  const pixel = document.createElement('div');
  pixel.className = classe;
  pixel.style.backgroundColor = 'white';
  return pixel;
}

function preencheLinha(divLinha) {
  for (let i = 1; i <= tamanho; i += 1) {
    divLinha.appendChild(createPixel('pixel'));
  }
}

function preencheBox(qualLinha) {
  for (let i = 0; i < qualLinha.length; i += 1) {
    preencheLinha(qualLinha[i]);
  }
}

preencheBox(linha);
// final da criação do box

// clique na cor
function removeSelected() {
  for (let i = 0; i < colorSelector.length; i += 1) {
    colorSelector[i].classList.remove('selected');
  }
}

function selecionaCor(clicado) {
  removeSelected();
  clicado.target.classList.add('selected');
}
colorMenu.addEventListener('click', selecionaCor);
// final do eventListener de seleção de cor

function pintaCor(colorir) {
  const selecionada = document.getElementsByClassName('selected');
  const cor = selecionada[0].style.backgroundColor;
  if (colorir.target.className === 'pixel') {
    colorir.target.style.backgroundColor = cor;
  }
}

canvas.addEventListener('click', pintaCor);
