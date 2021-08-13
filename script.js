function paletaCores() {
  for (let index = 0; index < 4; index += 1) {
    const paletaCores = document.createElement('div');
    paletaCores.id = 'color-palette';
    paletaCores.className = 'color';
    if (index === 0) {
      paletaCores.style.backgroundColor = 'black';
    }
    if (index === 1) {
      paletaCores.style.backgroundColor = 'green';
    }
    if (index === 2) {
      paletaCores.style.backgroundColor = 'red';
    }
    if (index === 3) {
      paletaCores.style.backgroundColor = 'blue';
    }
    document.body.appendChild(paletaCores);
  }
}
paletaCores();

function linhaPixel() {
  const quadroPixels = document.createElement('div');
  quadroPixels.id = 'pixel-board';
  document.body.appendChild(quadroPixels);

  for (let i = 0; i < 5; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    quadroPixels.appendChild(pixel);
  }
}

function repetelinhaPixel() {
  for (let i = 0; i < 5; i += 1) {
    linhaPixel();
  }
}
repetelinhaPixel();
