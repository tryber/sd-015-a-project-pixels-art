let pixel = document.getElementById('pixel-board');
let altura = 5;
let largura = 5;

for (let index = 1; index <= altura; index += 1) {
  let linhaPixel = document.createElement('div');
  for (let index = 1; index <= largura; index += 1) {
    let colunaPixel = document.createElement('div');
    colunaPixel.className = 'pixel';
    linhaPixel.appendChild(colunaPixel);
  }
  pixel.appendChild(linhaPixel);
}
