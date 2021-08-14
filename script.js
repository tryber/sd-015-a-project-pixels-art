console.log('hello world');

function CriarCoresAleatorias() { // função de cores aleatorias
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // rgb(red, green, blue);
  const corCompleta = `rgb(${red}, ${green}, ${blue})`;
  return corCompleta;
}

// para gerar as cores aleatorias pesquisei no google e achei o site abaixo:
// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
// o Math.random é um metodo que pega numeros aleatorios e o floor arredonda eles para baixo
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

// criar quatro div's e elas devem conter a classe color
function criarDivsDasCores() {
  const divDasPaletas = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const divCor = document.createElement('div');
    divCor.classList = 'color';
    divDasPaletas.appendChild(divCor);
  }
}
criarDivsDasCores();
// cores atribuidas resgatando cada elemento nó e atribuindo cor de fundo. caracteristicas gerais no css
const color1 = document.querySelectorAll('.color')[0];
color1.style.backgroundColor = 'black';
color1.classList.add('selected');
const color2 = document.querySelectorAll('.color')[1];
color2.style.backgroundColor = CriarCoresAleatorias();
const color3 = document.querySelectorAll('.color')[2];
color3.style.backgroundColor = CriarCoresAleatorias();
const color4 = document.querySelectorAll('.color')[3];
color4.style.backgroundColor = CriarCoresAleatorias();

// remove e adiciona classe nas cores da paleta.
function trocarClasseSelected(event) {
  const selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  event.target.classList.add('selected');
}

color1.addEventListener('click', trocarClasseSelected);
color2.addEventListener('click', trocarClasseSelected);
color3.addEventListener('click', trocarClasseSelected);
color4.addEventListener('click', trocarClasseSelected);

// criar os quadros de pixels

function criarOQuadroDeArt() {
  const divDoQuadro = document.querySelector('#pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const quadroPixel = document.createElement('div');
    quadroPixel.classList = 'pixel';
    divDoQuadro.appendChild(quadroPixel);
  }
}
criarOQuadroDeArt();

// funções que serão responsaveis para pintar cada pixel do quadro
// função que recupera a classe e pega a cor que está com ela e atribui a cor de fundo nos pixels com o event
// target, que é responsavel por pintar cada quadradinho
function pegarEstilo(event) {
  const evento = event.target;
  const pegarOEstiloSelecionado = document.querySelector('.selected');
  const estilo = window.getComputedStyle(pegarOEstiloSelecionado, null)
    .getPropertyValue('background-color');
  evento.style.backgroundColor = estilo;
}
// função getComputedStyle pega o estilo que tem dentro de uma classe, id ou elemento e guarda dentro de si
// para fazer a manipulação. A fonte está abaixo.
// fonte: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

// adiciona o evento nos quadradinhos
function pintarPixel() {
  const pegarPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pegarPixel.length; index += 1) {
    const odia = pegarPixel[index];
    odia.addEventListener('click', pegarEstilo);
  }
}
pintarPixel();

// aqui vamos criar um botão para colocar branco em todas as divs do quadro de pixels

function criarBotaoClareador(limpar) { // criar botão de limpeza dinamicamente
  const divDoBotao = document.querySelector('#div-button');
  const botaoLimpar = document.createElement('button');
  botaoLimpar.innerHTML = limpar;
  botaoLimpar.id = 'clear-board';
  divDoBotao.appendChild(botaoLimpar);
}
criarBotaoClareador('Limpar');
// agora vamos adicionar um evento que quando ouver um click o quadro de pixels será limpo

function limpezaPixels() { // coloca estilo branco nos pixels e será acinado pelo botão
  const pixelsBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsBoard.length; index += 1) {
    const osPixels = pixelsBoard[index];
    osPixels.style.backgroundColor = 'white';
  }
}

const botaoLimpeza = document.querySelector('#clear-board');
botaoLimpeza.addEventListener('click', limpezaPixels); // botão que faz que adicione a cor branca nos quadrados
