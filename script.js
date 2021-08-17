let linesPixel = document.querySelectorAll('.line');

function trocaCor(event) {
  let elementoCor = document.querySelector('.selected');
  let corSelecionada = window
    .getComputedStyle(elementoCor, null)
    .getPropertyValue('background-color');
  event.target.style.backgroundColor = corSelecionada;
}

for (let i = 0; i < 5; i += 1) {
  let divLinha = linesPixel[i];
  for (let k = 1; k <= 5; k += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divLinha.appendChild(divPixel);
    divPixel.addEventListener('click', trocaCor);
  }
}

function selecionaCor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

const colors = document.getElementsByClassName('color');
for (let k of colors) {
  let cadaCor = k;
  cadaCor.addEventListener('click', selecionaCor);
}
