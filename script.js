const colorSelector = document.getElementsByClassName('color');
const colorMenu = document.getElementById('color-palette');
const canvas = document.getElementById('pixel-board');
const linha = document.getElementsByClassName('line');
const botao1 = document.getElementById('clear-board');
const botao2 = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');
let tamanho = 5;

// cor random
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
// cria div da linha do canvas
function createLineElement(classe) {
  const line = document.createElement('div');
  line.className = classe;
  return line;
}

function createLine(pai) {
  for (let i = 0; i < tamanho; i += 1) {
    pai.appendChild(createLineElement('line'));
  }
}

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
//
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

// pinta o canvas
function pintaCor(colorir) {
  const selecionada = document.getElementsByClassName('selected');
  const cor = selecionada[0].style.backgroundColor;
  const colorido = colorir.target;
  if (colorir.target.className === 'pixel') {
    colorido.style.backgroundColor = cor;
  }
}
//
// botão para limpar o canvas
function clear() {
  const cor = document.getElementsByClassName('pixel');
  for (let i = 0; i < cor.length; i += 1) {
    cor[i].style.backgroundColor = 'white';
  }
}

function defineTamanho() {
  const tamanhoDefinido = boardSize.value;
  if (tamanhoDefinido < 5) {
    tamanho = 5;
  } else if (tamanhoDefinido > 50) {
    tamanho = 50;
  } else {
    tamanho = boardSize.value;
  }
  console.log(tamanho);
}

function defineCanvas() {
  if (!boardSize.value) {
    alert('Board inválido!');
  } else {
    defineTamanho();
    resetaCanvas();
  }
}
function resetaCanvas() {
  for (let i = 0; i < linha.length; i += 0) {
    linha[i].remove();
  }
  createLine(canvas);
  preencheBox(linha);
}

function montaPagina() {
  // defineCanvas();
  // iniciaCanvas();
  createLine(canvas);
  preencheBox(linha);
  setColor();
  colorMenu.addEventListener('click', selecionaCor);
  canvas.addEventListener('click', pintaCor);
  botao1.addEventListener('click', clear);
  botao2.addEventListener('click', defineCanvas);
}
montaPagina();
