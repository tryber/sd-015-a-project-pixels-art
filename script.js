let linesPixel = document.querySelectorAll('.line');

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
let pixels = document.querySelectorAll('.pixel');

for (let k in pixels) {
  pixels[k].addEventListener('click', pinta);
}
