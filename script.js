// cores que vou usar : "#B105F5", "#DC07DE", "#FA0886", "#6607DE", 
function criarDivs() {
  let paletaDeCores = document.getElementById('color-palette');
  for (let i = 0; i <= 3; i+= 1) {
    let filho = document.createElement('div')
    filho.classList.add ("color");
    paletaDeCores.appendChild(filho);
  }
};

criarDivs();

function coresPadrao() {
  const divs = document.querySelectorAll(".color");
  const cores = ["#000000", "#DC07DE", "#FA0886", "#6607DE"];

    for (let index = 0; index < divs.length; index+= 1) {
      let divAtual = divs[index];
      divAtual.style.backgroundColor = cores[index];
      divs[index].classList.add ('box');
    }
}

coresPadrao()

function criarPixels() {
  let paletaDeCores = document.getElementById('pixel-board');

  for (let i = 0; i < 25; i+= 1) {
    let filho = document.createElement('div')
    filho.classList.add('pixel')
    paletaDeCores.appendChild(filho);
  }
};

criarPixels()

let classesUnicas = ['primeiroItem', 'segundoItem', 'terceiroItem', 'quartoItem'];

function atribuirNumeroItemId() {
  let elementosDiv = document.querySelectorAll('#color-palette div');

  for (let index = 0; index < elementosDiv.length; index += 1) {
    let posicaoDiv = elementosDiv[index]
    posicaoDiv.id = classesUnicas[index]
  }
}

atribuirNumeroItemId()

const primeiraDiv = document.getElementById('primeiroItem')
const segundaDiv = document.getElementById('segundoItem')
const terceiraDiv = document.getElementById('terceiroItem')
const quartaDiv = document.getElementById('quartoItem')

function selecaoCor(event) {
  let elementosDiv = document.querySelectorAll('#color-palette div');
  for (let index = 0; index < elementosDiv.length; index += 1) {
    elementosDiv[index].classList.remove('selected')
  }
  event.target.classList.add('selected')
}

primeiraDiv.addEventListener('click', selecaoCor)
segundaDiv.addEventListener('click', selecaoCor)
terceiraDiv.addEventListener('click', selecaoCor)
quartaDiv.addEventListener('click', selecaoCor)

function selecaoPadrao() {
  let cores = document.querySelectorAll(".color");
  cores[0].classList.add('selected');
  };
  
  selecaoPadrao()