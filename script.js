const blackFirst = document.getElementById('black');
blackFirst.classList.add('selected');

// Usei como referencia código visualizado no repositório do Davio Lopes.
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