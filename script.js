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

let Ids = [];

function criarPixels() {
  let paletaDeCores = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i+= 1) {
    let filho = document.createElement('div')
    Ids.push(i);
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
  pickColor()
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

let retornoPickColor // retorno da cor clickada

//função de pegar a cor baseado na class selected que seleciona o elemento

function pickColor() {
  let corSelecionada = document.querySelector('.selected');
  return retornoPickColor = corSelecionada.style.backgroundColor
};

pickColor()

// criar Ids na grade a ser pintada, para eu conseguir usar uma ação para cada.

let pixels = document.querySelectorAll('.pixel')
for (let index = 0; index < pixels.length; index += 1) {
  let unidadePixel = pixels[index];
  unidadePixel.id = Ids[index]
}

for (let index = 0; index < pixels.length; index += 1) {
  document.getElementById(Ids[index]).addEventListener('click', pintar)
}

function pintar(event) {
  event.target.style.backgroundColor = retornoPickColor
}