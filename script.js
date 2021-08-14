const linesPixel = document.querySelectorAll('.line');

for (let i = 0; i < 5; i += 1) {
  let divLinha = linesPixel[i];
  for (let k = 1; k <= 5; k += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divLinha.appendChild(divPixel);
  }
}

function pinta(event) {
  event.target.style.backgroundColor = 'black';
}

const pixels = document.querySelectorAll('.pixel');

for (let k in pixels) {
  let cadaPixel = k;
  cadaPixel.addEventListener('click', pinta);
}
