const selectedColor = document.getElementById('color-palette');
const pixelColor = document.getElementById('pixel-board');
const clearAll = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');

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
