const corInicial = document.querySelector('.color');
corInicial.className = 'color selected';
corInicial.style.backgroundColor = '#000000';

const divs = document.querySelectorAll('.color');
for (let i = 0; i < divs.length; i += 1) {
  if (divs[i] === divs[0]) {
    divs[i].style.backgroundColor = '#000000';
  } else if (divs[i] === divs[1]) {
    divs[i].style.backgroundColor = '#ef233c';
  } else if (divs[i] === divs[2]) {
    divs[i].style.backgroundColor = '#9ae19d';
  } else if (divs[i] === divs[3]) {
    divs[i].style.backgroundColor = '#564d80';
  }
}

const pixelsId = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  const pixels = document.createElement('li');
  pixels.classList = 'pixel';
  pixels.style.backgroundColor = 'white';
  pixelsId.appendChild(pixels);
}

// Requisito 7: clicar na cor
function alvoCor(event) {
  removeSelected();
  event.target.classList.add('selected')
}

const clicaNaCor = document.querySelectorAll('.color');
for (let i = 0; i < clicaNaCor.length; i += 1) {
  clicaNaCor[i].addEventListener('click', alvoCor);
};

const selecionarCor = document.getElementsByClassName('color');

function removeSelected() {
  for (let i = 0; i < selecionarCor.length; i += 1) {
    selecionarCor[i].classList.remove('selected')
  };
}

// Requisito 8 : colorir pixels
const corPixel = document.querySelectorAll('.pixel');

for (let i = 0; i < corPixel.length; i += 1) {
  corPixel[i].addEventListener('click', pintarCor);
}

function pintarCor(event) {
  const boxPixel = event.target;
  const pegarPixel = document.querySelector('.selected');
  const estilo = getComputedStyle(pegarPixel);
  boxPixel.style.backgroundColor = estilo.backgroundColor;
}

// Requisito 9: botao que deixa todos os pixels branco 

const botaoLimpar = document.querySelector('#clear-board');
botaoLimpar.innerText = 'Limpar';

botaoLimpar.addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

