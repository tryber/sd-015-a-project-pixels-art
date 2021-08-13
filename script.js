// função para criar div com id e nome da cor
function createElementColor(color) {
  const pallete = document.getElementById('color-palette');
  const colorCreated = document.createElement('div');
  colorCreated.className = 'color';
  colorCreated.id = color;
  colorCreated.style.backgroundColor = color;
  pallete.appendChild(colorCreated);
}

// cores escolhidas para a paleta de cores
const myColors = ['black', 'red', 'blue', 'green'];
// aplicando fução de criar cores
myColors.forEach(createElementColor);

// criando grade de pixels
function createPixelBoard(size) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < size; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    pixelBoard.appendChild(pixelLine);
    for (let column = 0; column < size; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}

createPixelBoard(5);
