// Requisito 2 -Adicione à página uma paleta de quatro cores distintas. E Requisito 3 - Adicione a cor preta como a primeira cor da paleta de cores.
// Cria elemento Paleta de Cores com id color-palette
function createColorPalette() {
  let colorPalette = document.createElement('div');
  let getSection = document.querySelector('#section-colors');
  colorPalette.id = 'color-palette';
  getSection.appendChild(colorPalette);
};

createColorPalette();

// Cria classe color para cada cor individual da paleta de cores
function createClassColor() {
  for (let index = 1; index <= 4; index += 1) {
    let getColor = document.getElementById('color-palette');
    let newColor = document.createElement('div');
    getColor.appendChild(newColor);
    newColor.className = 'color';
  }
};

createClassColor();

// Adicionando cor de fundo à cada elemento da paleta. RESOLVE TAMBÈM REQUISITO 3 (Que pede que a primeira cor da paleta de cores seja PRETA).
let background = ['black', 'red', 'blue', 'green'];

function addBackgroundColor(backgroundColors) {
  
  let getClassColor = document.getElementsByClassName('color');

  for (let index = 0; index < getClassColor.length; index += 1) {
    getClassColor[index].style.backgroundColor = background[index];
  }
  
};

addBackgroundColor(background);

// Requisito 4 - Adicione à página um quadro de pixels, com 25 pixels. Requisito 5 - Resolve também a primeira especificação do requisito 5(Verifica se o quadro de pixels tem altura e comprimento de 5 elementos).
function createFramePixels() {
  let newSection = document.createElement('section');
  newSection.id = 'pixel-board';
  principal.appendChild(newSection);
  for (let index = 1; index <= 5; index += 1) {
    let array = index;
    let newColumn = document.createElement('div');
    newColumn.className = 'columns'
    newSection.appendChild(newColumn);
    for (let index2 = 1; index2 <= 5; index2 += 1) {
      let createPixels = document.createElement('div');
      createPixels.className = 'pixel';
      newColumn.appendChild(createPixels);
    }
  }
}
createFramePixels();

// Requisito 6 e 7 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
// Define a cor preta como padrão ao carregar a página e adiciona classe selected à ela, além de mudar a classe selected para a cor que sofrer o evento 'click'. Resolve também requisito 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
let getBlackColor = document.querySelector('.color');
getBlackColor.classList.add('selected');

let getClassColor = document.querySelectorAll('.color');
for (let index = 0; index < getClassColor.length; index += 1) {
  getClassColor[index].addEventListener('click', setColor);
};

function setColor(event) {
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
};

// Requisito 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
const getPixel = document.getElementsByClassName('pixel');

for (let index = 0; index < getPixel.length; index += 1) {
  getPixel[index].addEventListener('click', changeColor)
}

function changeColor (event) {
  let getColor = document.querySelector('.selected');
  let background1 = window.getComputedStyle(getColor).getPropertyValue('background-color');
  event.target.style.backgroundColor = background1;
}

// Requisito 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
