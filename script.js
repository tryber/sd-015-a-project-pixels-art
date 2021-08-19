// REQUISITO 4
function quadroDePixels() {
  const altura = 5;
  const largura = 5;
  const quadro = document.getElementById('pixel-board');
  for (let index = 0; index < altura * largura; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    quadro.appendChild(pixels);
  }
}
quadroDePixels();
