// Cria as cores aleatorias
function criarCoresAleatorias() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return (`rgb(${red}, ${green}, ${blue})`);
}

// Coloca as cores criadas aleatoriamente na Paleta de cores e a cor preta como promeira cor.
window.onload = function coresPaleta() {
  document.getElementById('cor1').style.backgroundColor = 'black';
  document.getElementById('cor2').style.backgroundColor = criarCoresAleatorias();
  document.getElementById('cor3').style.backgroundColor = criarCoresAleatorias();
  document.getElementById('cor4').style.backgroundColor = criarCoresAleatorias();
};

// Cria os 25 quadrados em braco para serem pintados.
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

// Seleciona a nova cor na paleta de cores.
function newSelected(cor) {
  changeSelected();
  cor.target.classList.add('selected');
}

// Adiciona o evento de click nas 4 cores da paleta de cores.
for (let i = 0; i < paleta.length; i += 1) {
  paleta[i].addEventListener('click', newSelected);
}

// Pinta o quadrado em braco com a cor selecionada na paleta de cores.
function pintaPixel(quad) {
  const quadTarget = quad.target;
  quadTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

// Adiciona o evento de click nos quadrados em branco.
for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
  document.querySelectorAll('.pixel')[i].addEventListener('click', pintaPixel);
}

// Função que lipa todos os quadrados para a cor branca novamente.
function buttonClear() {
  const allQuad = document.querySelectorAll('.pixel');
  for (let i = 0; i < allQuad.length; i += 1) {
    allQuad[i].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click', buttonClear);
