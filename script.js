function criarCoresAleatorias() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return (`rgb(${red}, ${green}, ${blue})`);
}
window.onload = function coresPaleta() {
  document.getElementById('cor1').style.backgroundColor = 'black';
  document.getElementById('cor2').style.backgroundColor = criarCoresAleatorias();
  document.getElementById('cor3').style.backgroundColor = criarCoresAleatorias();
  document.getElementById('cor4').style.backgroundColor = criarCoresAleatorias();
};

for (let i = 0; i < 25; i += 1) {
  const wh = document.createElement('cor');
  wh.className = 'pixel';
  document.getElementById('pixel-board').appendChild(wh);
}
// Ao carregar a pagina a cor preta é a primeira cor selecionada automatamente.
const blackFirst = document.getElementById('cor1');
blackFirst.classList.add('selected');

// Adiciona e muda a classe selected entre as 4 cores presente na palheta de cor.
const paleta = document.querySelectorAll('.color');
function changeSelected() {
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].classList.remove('selected');
  }
}

function newSelected(cor) {
  changeSelected();
  cor.target.classList.add('selected');
}

for (let i = 0; i < paleta.length; i += 1) {
  paleta[i].addEventListener('click', newSelected);
}

const allQuads = document.querySelectorAll('.pixel');

function pintaPixel(quad) {
  const quadTarget = quad.target;
  quadTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

for (let i = 0; i < allQuads.length; i += 1) {
  allQuads[i].addEventListener('click', pintaPixel);
}

const clearPixelBoard = document.getElementById('clear-board');

function buttonClear() {
  for (let i = 0; i < allQuads.length; i += 1) {
    allQuads[i].style.backgroundColor = 'white';
  }
}
clearPixelBoard.addEventListener('click', buttonClear);
