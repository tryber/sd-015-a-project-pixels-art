// Aqui estão guardados os principais valores da tabela
let numeroPixels = 25;

// função que cria a paleta de Cores
// Transforma a paleta em cores aleatórias
function criaPaleta(color) {
  const colorDiv = document.createElement('div');
  const colorLi = document.createElement('li');
  const parentElement = document.getElementById('color-palette');

  colorDiv.className = 'color';
  colorDiv.style.backgroundColor = color;
  parentElement.appendChild(colorDiv);
  colorDiv.appendChild(colorLi);
}

criaPaleta();

function criaCoresPaleta() {
  criaPaleta('black');
  for (let i = 0; i < 3; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    criaPaleta(`rgb(${r}, ${g}, ${b})`);
  }
}

criaCoresPaleta();

// função que cria a tabela de acordo com tamanho predefinido
function criaTabela(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const tablePixel = document.createElement('div');
    const tableItem = document.createElement('li');
    const parentElement = document.getElementById('pixel-board');

    tablePixel.className = 'pixel';
    tablePixel.style.backgroundColor = 'white';
    parentElement.appendChild(tablePixel);
    tablePixel.appendChild(tableItem);
  }
}

criaTabela();

// função que diminui tamanho da tabela
function removePixel(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const todosPixels = document.getElementsByClassName('pixel');

    todosPixels[0].remove();
  }
}

removePixel();

// função para ajustar o número dos pixels da tabela
function ajustaTabela(tamanho) {
  const tamanhoGrade = tamanho * tamanho;
  if (tamanhoGrade > numeroPixels) {
    criaTabela((tamanhoGrade - numeroPixels));
    numeroPixels = tamanhoGrade;
  } else if (tamanhoGrade < numeroPixels) {
    removePixel((numeroPixels - tamanhoGrade));
    numeroPixels = tamanhoGrade;
  }
}

ajustaTabela();

// função que define a cor padrão e a cor que ficará selecionada
function defineCor() {
  const defaultBg = document.querySelector('.color');
  defaultBg.classList.add('selected');
}

defineCor();

function selecionaCor() {
  const paleta = document.getElementById('color-palette');
  paleta.addEventListener('click', (event) => {
    const corSelecionada = document.querySelector('.selected');
    const novaCor = event.target;

    corSelecionada.classList.remove('selected');
    novaCor.classList.add('selected');
  });
}

selecionaCor();

// função que preenche o pixel com a cor selecionada
function preenchePixel() {
  const pixel = document.getElementById('pixel-board');

  pixel.addEventListener('click', (event) => {
    const corSelecionada = document.querySelector('.selected').style.backgroundColor;
    const pixelClicado = event.target;

    pixelClicado.style.backgroundColor = corSelecionada;
  });
}

preenchePixel();

// função que faz a tabela ficar limpa após clicar no botão 'Limpar'
function limparTabela() {
  const clearButton = document.querySelector('button');

  clearButton.innerHTML = 'Limpar';
  clearButton.id = 'clear-board';
  clearButton.addEventListener('click', () => {
    const todosPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < todosPixels.length; i += 1) {
      todosPixels[i].style.backgroundColor = 'white';
    }
  });
}

limparTabela();
