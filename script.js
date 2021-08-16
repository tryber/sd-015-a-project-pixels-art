// Requisito 2 -Adicione à página uma paleta de quatro cores distintas. E Requisito 3 - Adicione a cor preta como a primeira cor da paleta de cores.
// Cria elemento Paleta de Cores com id color-palette
function createColorPalette() {
  const colorPalette = document.createElement('div');
  const getSection = document.querySelector('#section-colors');
  colorPalette.id = 'color-palette';
  getSection.appendChild(colorPalette);
}
createColorPalette();

// Cria classe color para cada cor individual da paleta de cores
function createClassColor() {
  for (let index = 1; index <= 4; index += 1) {
    const getColor = document.getElementById('color-palette');
    const newColorDiv = document.createElement('div');
    getColor.appendChild(newColorDiv);
    newColorDiv.className = 'color';
  }
}
createClassColor();

// Adicionando cor de fundo à cada elemento da paleta. RESOLVE TAMBÈM REQUISITO 3 (Que pede que a primeira cor da paleta de cores seja PRETA).
function addBackgroundColor() {
  const getClassColor = document.getElementsByClassName('color');
  for (let index = 0; index < getClassColor.length; index += 1) {
    if (index === 0) {
      getClassColor[index].style.backgroundColor = 'black';
    } else {
      const randomColor = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`;
      getClassColor[index].style.backgroundColor = randomColor;
    }
  }
}
addBackgroundColor();

// Requisito 4 - Adicione à página um quadro de pixels, com 25 pixels. Requisito 5 - Resolve também a primeira especificação do requisito 5(Verifica se o quadro de pixels tem altura e comprimento de 5 elementos).
const newSection = document.createElement('section');
newSection.id = 'pixel-board';
const getMain = document.querySelector('#principal');
getMain.appendChild(newSection);

// Requisito 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
function changeColor(event) {
  const pixel = event.target;
  const getColor = document.querySelector('.selected');
  const background1 = window.getComputedStyle(getColor).getPropertyValue('background-color');
  pixel.style.backgroundColor = background1;
}

function newColor() {
  const getPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].addEventListener('click', changeColor);
  }
}

function createFramePixels(param1) {
  let boardSize = param1;
  if (boardSize < 5) {
    boardSize = 5;
  } else if (boardSize > 50) {
    boardSize = 50;
  }
  for (let index = 1; index <= boardSize; index += 1) {
    const newColumn = document.createElement('div');
    newColumn.className = 'columns';
    newSection.appendChild(newColumn);
    for (let index2 = 1; index2 <= boardSize; index2 += 1) {
      const createPixels = document.createElement('div');
      createPixels.className = 'pixel';
      newColumn.appendChild(createPixels);
    }
  }
  newColor();
}
createFramePixels(5);

// Requisito 6 e 7 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
// Define a cor preta como padrão ao carregar a página e adiciona classe selected à ela, além de mudar a classe selected para a cor que sofrer o evento 'click'. Resolve também requisito 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
const getBlackColor = document.querySelector('.color');
getBlackColor.classList.add('selected');

const getClassColor = document.querySelectorAll('.color');

function setColor(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < getClassColor.length; index += 1) {
  getClassColor[index].addEventListener('click', setColor);
}

// Requisito 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// Criando botão
const newButton = document.createElement('button');
const getPixelBoard = document.getElementById('pixel-board');
const divPai = getPixelBoard.parentNode;

function createButton() {
  divPai.insertBefore(newButton, getPixelBoard);
  newButton.id = 'clear-board';
  newButton.innerHTML = 'Limpar';
}
createButton();

// Adiciona função de limpar o quadro ao botão

const getButton = document.querySelector('#clear-board');

function dinamicPixel() {
  const getPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].style.backgroundColor = 'white';
  }
}

getButton.addEventListener('click', dinamicPixel);

// Requisito 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// Função para criar input e botão
const newInput = document.createElement('input');
newInput.min = '1';
newInput.max = '50';
newInput.type = 'number';

const addButton = document.createElement('button');
const callButton = document.getElementById('clear-board');
const callParent = callButton.parentNode;

newInput.id = 'board-size';
addButton.id = 'generate-board';
addButton.innerHTML = 'VQV';

function createInputAndButton() {
  callParent.insertBefore(newInput, callButton);
  callParent.insertBefore(addButton, callButton);
}
createInputAndButton();

// Função para pegar o valor do input e criar o quadro
const getAddButton = document.getElementById('generate-board');
const getInput = document.getElementById('board-size');

function setGrid() {
  if (getInput.value <= 0 || getInput.value === '') {
    alert('Board inválido!');
  } else {
    const callPixelBoard = document.querySelector('#pixel-board');
    const size = callPixelBoard.childNodes.length;
    for (let index = 0; index < size; index += 1) {
      callPixelBoard.childNodes[0].remove();
    }
    const inputValue = getInput.value;
    createFramePixels(inputValue);
  }
}
getAddButton.addEventListener('click', setGrid);
