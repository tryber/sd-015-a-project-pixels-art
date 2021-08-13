console.log('hello world');

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
color2.style.backgroundColor = 'red';
const color3 = document.querySelectorAll('.color')[2];
color3.style.backgroundColor = 'blue';
const color4 = document.querySelectorAll('.color')[3];
color4.style.backgroundColor = 'green';

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

  for (let index = 0; index < 5; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const quadroPixel = document.createElement('div');
      quadroPixel.classList = 'pixel';
      divDoQuadro.appendChild(quadroPixel);
    }
  }
}
criarOQuadroDeArt();

function pegarEstilo(event) {
  const pegarOEstiloSelecionado = document.querySelector('.selected');
  const estilo = window.getComputedStyle(pegarOEstiloSelecionado, null)
  .getPropertyValue("background-color");
  event.target.style.backgroundColor = estilo;
}

function pintarPixel() {
  const pegarPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pegarPixel.length; index +=1) {
    let odia = pegarPixel[index]
    odia.addEventListener('click', pegarEstilo);
  }
}
pintarPixel();