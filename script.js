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
  pixelBoard.innerHTML = '';
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

// inicia cor preta como selecionada
function startSelectedColor(color) {
  const colorSelected = document.getElementById(color);
  colorSelected.classList.add('selected');
}

startSelectedColor('black');

// seleciona apenas uma das cores ao clicar
function selectColor() {
  const colors = document.querySelectorAll('.color');
  colors.forEach((color) => {
    color.addEventListener('click', (evento) => {
      const colorSelected = document.getElementsByClassName('color selected')[0];
      if (colorSelected.id !== evento.target.id) {
        colorSelected.className = 'color';
        evento.target.classList.add('selected');
      }
    });
  });
}

selectColor();

// pinta o pixel selecionado
function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('click', (evento) => {
      const elementPixel = evento.target;
      const colorSelected = document.getElementsByClassName('color selected')[0];
      elementPixel.style.backgroundColor = colorSelected.id;
    });
  });
}

paintPixel();

// limpa painel de pixels
function clearBoard() {
  const clearButton = document.getElementById('clear-board');
  const pixels = document.querySelectorAll('.pixel');
  clearButton.addEventListener('click', () => {
    pixels.forEach((pixel) => {
      const elementPixel = pixel;
      elementPixel.style.backgroundColor = 'white';
    });
  });
}

clearBoard();

// função para converter e limitar valores de entrada para o tamanho do painel de pixels
function convertToInteger(string) {
  let result = parseInt(string, 10);
  if (result > 50) {
    result = 50;
  } else if (result < 5) {
    result = 5;
  }
  return result;
}

// Modifica tamanho do quadro de pixels
function changePixelBoardSize() {
  const button = document.getElementById('generate-board');
  button.addEventListener('click', () => {
    const text = document.getElementById('board-size');
    const size = convertToInteger(text.value);
    if (size > 0) {
      createPixelBoard(size);
    } else {
      alert('Board inválido!');
    }
  });
}

changePixelBoardSize();
