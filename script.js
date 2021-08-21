const quadroPixels = document.getElementById('pixel-board');
function criaLinha() {
  for (let index = 0; index < 5; index += 1) {
    const pixels = document.createElement('div');
    quadroPixels.appendChild(pixels);
    pixels.className = 'pixel';
    pixels.style.backgroundColor = 'white';
  }
}

criaLinha();
criaLinha();
criaLinha();
criaLinha();
criaLinha();
