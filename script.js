const paletaCores = document.querySelector('#color-palette');

function cores() {
  for (let index = 0; index < 4; index += 1) {
    const cores = document.createElement('div');
    cores.className = 'color';

    if (index === 0) {
      cores.id = 'black';
      cores.className = 'color selected';
      cores.style.backgroundColor = 'black';
    }
    if (index === 1) {
      cores.id = 'green';
      cores.style.backgroundColor = 'green';
    }
    if (index === 2) {
      cores.id = 'red';
      cores.style.backgroundColor = 'red';
    }
    if (index === 3) {
      cores.id = 'blue';
      cores.style.backgroundColor = 'blue';
    }
    paletaCores.appendChild(cores);
  }
}
cores();

const quadroPixels = document.querySelector('#pixel-board');

function criarpixels() {
  // cria os 25 quadrados, aqui o numero de quadrados em cada linha é controlado pelo css
  for (let i = 1; i <= 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    // pixel.id = `pixel${[i]}`;
    quadroPixels.appendChild(pixel);
  }
}
criarpixels();

// function pixels() {
//   for (let index = 0; index < 5; index += 1) {
//     const colunaPixels = document.createElement('div');
//     colunaPixels.className = 'pixel';
//     colunaPixels.id = [index];
//     quadroPixels.appendChild(colunaPixels);
//     for (let i = 0; i < 4; i += 1) {
//       const linhaPixels = document.createElement('div');
//       linhaPixels.className = 'pixel';
//       linhaPixels.id = [i];
//       quadroPixels.appendChild(linhaPixels);
//     }
//   }
// }
// pixels();

/*
  function criarlinhaPixel() {
    // crio a linha que vai ter os pixels
    const linhaPixel = document.createElement('div');
    document.body.appendChild(linhaPixel);

    for (let i = 0; i < 5; i += 1) {
      // crio cada pixel que vai dentro de 1 linha
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = [i];
      linhaPixel.appendChild(pixel);
      quadroPixels.appendChild(linhaPixel);
    }
  }

  function repetelinhaPixel() {
    for (let i = 0; i < 5; i += 1) {
      // crio a linha várias vezes
      criarlinhaPixel();
    }
  }
  repetelinhaPixel();
*/

function selecionado(event) {
  const selected = document.querySelector('.selected'); // pego a classe selected
  selected.classList.remove('selected'); // removo de onde ela está
  event.target.classList.add('selected'); // coloco em quem chamou o evento
}

const colorBlack = document.querySelector('#black');
const colorGreen = document.querySelector('#green');
const colorRed = document.querySelector('#red');
const colorBlue = document.querySelector('#blue');

colorBlack.addEventListener('click', selecionado);
colorGreen.addEventListener('click', selecionado);
colorRed.addEventListener('click', selecionado);
colorBlue.addEventListener('click', selecionado);

function pintaPixel(event) {
  const pixelS = event.target; // const pixelS pega quem está chamando o evento
  pixelS.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  // o bgColor de quem chama o evento é igual ao bgColor do elemento que tem a classe selected
}
const pixel = document.querySelectorAll('.pixel'); // pega os pixel
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', pintaPixel); // add em cada um o addEventListener com a função pintaPixel
}
