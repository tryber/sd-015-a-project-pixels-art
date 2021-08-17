const selectedColor = document.getElementById('color-palette');
const pixelColor = document.getElementById('pixel-board');
const clearAll = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');
const generateBoard = document.getElementById('generate-board');
const inputSize = document.getElementById('board-size');

// Cria cor aleatória
// Consulta: https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
function randomColor() {
  const r = Math.floor(Math.random() * 254);
  const g = Math.floor(Math.random() * 254);
  const b = Math.floor(Math.random() * 254);

  return `rgb(${r}, ${g}, ${b})`;
}

// Primeira cor em preto, outras aleatórias
window.onload = function putColor() {
  document.getElementById('first').style.backgroundColor = 'black';
  document.getElementById('second').style.backgroundColor = randomColor();
  document.getElementById('third').style.backgroundColor = randomColor();
  document.getElementById('fourth').style.backgroundColor = randomColor();
};

// Mudar cor selecionada
// Consulta: https://www.w3schools.com/jsref/prop_element_classlist.asp
function selColor(event) {
  const seleColor = document.querySelector('.selected');
  seleColor.classList.remove('selected');
  event.target.classList.add('selected');
}

selectedColor.addEventListener('click', selColor);

// Mudar a cor do pixel
function colorPixel(event) {
  const eventColor = event.target;
  eventColor.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

pixelColor.addEventListener('click', colorPixel);

// Limpar o quadro
function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clearAll.addEventListener('click', clearBoard);

// Criar o quadro de acordo com o input
function createPixel() {
  const newPixel = document.createElement('td');
  newPixel.className = 'pixel';
  return newPixel;
}

function createBoardLoop(selectedNumber) {
  for (let i = 0; i < selectedNumber; i += 1) {
    const newLine = document.createElement('tr');
    for (let x = 0; x < selectedNumber; x += 1) {
      newLine.appendChild(createPixel());
    }
    pixelColor.appendChild(newLine);
  }
}

function createBoard() {
  let selectedNumber = inputSize.value;
  pixelColor.innerHTML = '';

  if (selectedNumber === '') {
    alert('Board inválido!');
  } else if (selectedNumber < 5) {
    selectedNumber = 5;
  } else if (selectedNumber > 50) {
    selectedNumber = 50;
  }

  createBoardLoop(selectedNumber);
}

generateBoard.addEventListener('click', createBoard);
