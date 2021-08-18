/* Define a cor preta como selecionada após o carregamento da página */
window.onload = function selectBlackColor() {
  document.getElementsByClassName('color')[0].className += ' selected';
};

/* Guarda os elementos da paleta de cores para açôes futuras */
const colorOne = document.getElementsByClassName('color')[0];
const colorTwo = document.getElementsByClassName('color')[1];
const colorThree = document.getElementsByClassName('color')[2];
const colorFour = document.getElementsByClassName('color')[3];

/* Define o backgroundColor dos elementos da paleta de cores */
colorOne.style.backgroundColor = 'black';
colorTwo.style.backgroundColor = '#023047';
colorThree.style.backgroundColor = '#cb997e';
colorFour.style.backgroundColor = '#d00000';

/* Funções para seleção de cor na paleta de cores */
function clickColorOne() {
  colorOne.className += ' selected';
  colorTwo.className = 'color';
  colorThree.className = 'color';
  colorFour.className = 'color';
}

function clickColorTwo() {
  colorOne.className = 'color';
  colorTwo.className += ' selected';
  colorThree.className = 'color';
  colorFour.className = 'color';
}

function clickColorTheree() {
  colorOne.className = 'color';
  colorTwo.className = 'color';
  colorThree.className = 'color selected';
  colorFour.className = 'color';
}

function clickColorFour() {
  colorOne.className = 'color';
  colorTwo.className = 'color';
  colorThree.className = 'color';
  colorFour.className = 'color selected';
}

/* Add eventos para chamar as funções anteriores */
colorOne.addEventListener('click', clickColorOne);
colorTwo.addEventListener('click', clickColorTwo);
colorThree.addEventListener('click', clickColorTheree);
colorFour.addEventListener('click', clickColorFour);

/* Guarda os elementos constituentes do board de pixels */
const pixelFrame = document.getElementById('pixel-board');

/* Define como backgroudColor do pixel o backgroundColor do elemento selecionado na paleta */
function paintPixels(event) {
  const selectedPixel = event.target;
  const selectorColor = document.querySelector('.selected').style.backgroundColor;
  selectedPixel.style.backgroundColor = selectorColor;
}

/* Add evento para chamar a função */
pixelFrame.addEventListener('click', paintPixels);
