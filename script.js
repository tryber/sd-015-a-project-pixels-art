const colorPalet = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

function criaCoresDaPaleta(cor, classe) {
  const corDiv = document.createElement('div');
  corDiv.style.backgroundColor = cor;
  console.log(classe);
  corDiv.classList.add('color');
  if (typeof classe !== 'undefined')corDiv.classList.add(classe);
  corDiv.style.width = '40px';
  corDiv.style.height = '40px';
  corDiv.style.border = '1px solid rgb(0, 0, 0)';
  colorPalet.appendChild(corDiv);
}

criaCoresDaPaleta('black', 'selected');
criaCoresDaPaleta(randomColorGenerator());
criaCoresDaPaleta(randomColorGenerator());
criaCoresDaPaleta(randomColorGenerator());
let color = document.querySelector('.selected').style.backgroundColor;

function criaLinhaQuadro(tamanho, largAlt) {
  for (let i = 0; i < tamanho * tamanho; i += 1) {
    const elementoQuadro = document.createElement('div');
    elementoQuadro.classList.add('pixel');
    elementoQuadro.style.backgroundColor = 'white';
    elementoQuadro.style.width = `${largAlt}px`;
    elementoQuadro.style.height = `${largAlt}px`;
    elementoQuadro.style.border = '1px solid black';
    elementoQuadro.style.display = 'inline-block';
    document.querySelector('#pixel-board').appendChild(elementoQuadro);
  }
}

function criaQuadro(tamanho, largAlt) {
  criaLinhaQuadro(tamanho, largAlt);
  pixelBoard.style.width = '0px';
  pixelBoard.style.width = `${((largAlt + 2) * tamanho)}px`;
}

criaQuadro(5, 40);

function trocaSeletor(event) {
  if (!event.target.classList.contains('selected')) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    color = event.target.style.backgroundColor;
  }
}

colorPalet.addEventListener('click', trocaSeletor);

function pintaQuadro(event) {
  const bloco = event.target;
  bloco.style.backgroundColor = color;
}

pixelBoard.addEventListener('click', pintaQuadro);

function criaBotaoClear() {
  const button = document.createElement('BUTTON');
  button.innerHTML = 'Limpar';
  button.id = 'clear-board';
  colorPalet.after(button);
}

criaBotaoClear();
const clearBoard = document.querySelector('#clear-board');

function limpaQuadro() {
  const quadros = pixelBoard.children;
  for (let i = 0; i < quadros.length; i += 1) {
    const quadro = quadros[i];
    quadro.style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', limpaQuadro);

function criaBotaoSize() {
  const button = document.createElement('BUTTON');
  button.innerHTML = 'VQV';
  button.id = 'generate-board';
  colorPalet.after(button);
}

criaBotaoSize();
const GenerateBoard = document.querySelector('#generate-board');

function criaInputSize() {
  const input = document.createElement('input');
  input.placeholder = 'Numero entre 5 e 50';
  input.type = 'number';
  input.min = '1';
  input.id = 'board-size';
  colorPalet.after(input);
}

criaInputSize();
const inputSize = document.querySelector('#board-size');

function mataQuadro() {
  while (pixelBoard.lastElementChild) {
    pixelBoard.removeChild(pixelBoard.lastElementChild);
  }
}
function gerarBoard() {
  if (!parseInt(inputSize.value, 10)) {
    inputSize.value = '';
    alert('Board inválido!');
    return;
  }
  let tamanho = parseInt(inputSize.value, 10);
  if (tamanho > 50) {
    tamanho = 50;
  }
  if (tamanho < 5) {
    tamanho = 5;
  }
  mataQuadro();
  criaQuadro(tamanho, tamanho);
}

GenerateBoard.addEventListener('click', gerarBoard);
