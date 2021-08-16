// Gera cor aleatória
function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return (`rgb(${r}, ${g}, ${b})`);
}

// Gera cores aleatórias ao recarregar a página
window.onload = function makeRandom() {
  document.getElementById('black').style.backgroundColor = 'black';
  document.getElementById('secondColor').style.backgroundColor = randomColor();
  document.getElementById('thirdColor').style.backgroundColor = randomColor();
  document.getElementById('fourthColor').style.backgroundColor = randomColor();
};

// Cria painel de pixel
const pixelBoard = document.getElementById('pixel-board');
function pixelBoardLine() {
  for (let i = 0; i < 5; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel';
    pixelBoard.appendChild(pixelLine);
  }
}
pixelBoardLine();

function fillBoard() {
  for (let i = 1; i < 5; i += 1) {
    const fill = document.createElement('br');
    pixelBoard.appendChild(fill);
    pixelBoardLine();
  }
}
fillBoard();

// Adiciona a classe selected ao elemento principal
const firstColor = document.getElementById('black');
firstColor.classList.add('selected');

// https://trybecourse.slack.com/archives/C0273HYKPGT/p1628910728162200?thread_ts=1628910663.162100&cid=C0273HYKPGT
// Código refatorado após consultar a thread do Daniel Tavares no Slack > Adiciona evento de click para todos elementos com a classe color > Adiciona uma função para remover a classe selected do elemento principal e outra para reatribuir a classe selected ao elemento selecionado.
const palette = document.querySelectorAll('.color');
function changeSelected() {
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].classList.remove('selected');
  }
}

function newSelected(color) {
  changeSelected();
  color.target.classList.add('selected');
}

for (let i = 0; i < palette.length; i += 1) {
  palette[i].addEventListener('click', newSelected);
}

// Pinta o pixel selecionado
const selectPixel = document.querySelectorAll('.pixel');

function paintPixel(pixel) {
  const pixelTarget = pixel.target;
  pixelTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

// Adiciona evento de click para todos elementos com classe pixel
for (let i = 0; i < selectPixel.length; i += 1) {
  selectPixel[i].addEventListener('click', paintPixel);
}
