let r = 0;
let g = 0;
let b = 0;

function criarPaleta() {
  const colorPalette = document.querySelector('#color-palette');
  for (i = 1; i < 5; i += 1) {
    let colorir = `rgb(${r},${g},${b})`;
    const color = document.createElement('div');
    color.className = 'color'
    color.style.backgroundColor = colorir;
    colorPalette.appendChild(color);
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
  }
}

criarPaleta();

function criarPixel(){
  const pixelBoard = document.querySelector('#pixel-board');
  for (l = 1; l < 6; l += 1){
    for (c = 1; c < 6; c += 1){
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
    } 
  }
}

criarPixel();