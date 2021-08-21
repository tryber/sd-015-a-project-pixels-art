// criar board
// baseado no código do alex sousa
// https://github.com/tryber/sd-015-a-project-pixels-art/pull/46/files

function linhaPixel() { // cria uma linha de 5 pixels
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const quadrado = document.createElement('div'); // cria uma div para cada pixel
    quadrado.className = 'pixel'; // adiciona a classe pixel
    pixelBoard.appendChild(quadrado); // insere a div na pixel-board
  }
}

function criaBoard() { // repete 5x a linha
  for (let index = 0; index < 5; index += 1) {
    linhaPixel();
  }
}

criaBoard();

// selecionar cor

const colorBlack = document.querySelector('#first'); // variável para cada cor
const colorRed = document.querySelector('#second');
const colorGreen = document.querySelector('#third');
const colorBlue = document.querySelector('#fourth');  

colorBlack.addEventListener('click', selectedColor); // event listener para cada cor, cada clique chama a função 
colorGreen.addEventListener('click', selectedColor);
colorRed.addEventListener('click', selectedColor);
colorBlue.addEventListener('click', selectedColor);

function selectedColor(event) {
  const selected = document.querySelector('.selected'); // busca qual cor está com a classe selected
  selected.classList.remove('selected'); // remove a classe selected da cor em questão
  event.target.classList.add('selected'); // adiciona a classe selected à cor clicada
}

// requisito 9

const botaoApagar = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

botaoApagar.addEventListener('click', clearBoard);
