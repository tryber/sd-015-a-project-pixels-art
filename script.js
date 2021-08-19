const blackFirst = document.getElementById('black');
blackFirst.classList.add('selected');

// Usei como referencia código visualizado no repositório do Davio Lopes.
// Requisito 7
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
// Requisito 8
// Github Adadezer: https://github.com/tryber/sd-015-a-project-pixels-art/pull/58/files
function pintaPixel(event) {
  const pxl = event.target; // const pxl pega quem está chamando o evento
  pxl.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  // o bgColor de quem chama o evento (cada pixel clicado), é igual ao bgColor do elemento que tem a classe selected
}
const pixel = document.querySelectorAll('.pixel'); // pega os pixel (a variavel precisa ser let pois ela será modificada mais em baixo)
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', pintaPixel); // add em cada pixels o addEventListener com a função pintaPixel
}

