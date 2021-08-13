const paletaCores = document.querySelector("#color-palette");

function cores() {
  for (let index = 0; index < 4; index += 1) {
    const cores = document.createElement('div');
    cores.className = 'color';
    if (index === 0) {
      cores.style.backgroundColor = 'black';
      cores.className = 'color selected';
    }
    if (index === 1) {
      cores.style.backgroundColor = 'green';
    }
    if (index === 2) {
      cores.style.backgroundColor = 'red';
    }
    if (index === 3) {
      cores.style.backgroundColor = 'blue';
    }
    paletaCores.appendChild(cores);
  }
}
cores();

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


