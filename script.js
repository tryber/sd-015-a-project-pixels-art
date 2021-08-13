// função para criar div com id e nome da cor
function createElementColor(rgbColor) {
  const pallete = document.getElementById('color-palette');
  const size = pallete.children.length;
  const colorCreated = document.createElement('div');
  colorCreated.className = 'color';
  colorCreated.id = 'box-color'.concat(size);
  colorCreated.style.backgroundColor = rgbColor;
  pallete.appendChild(colorCreated);
}

// criando cores aleatorias
function createColors(lenOfColors) {
  for (let index = 0; index < lenOfColors; index += 1) {
    let color = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
    if (index === 0) {
      color = [0, 0, 0];
    }
    const rgbColor = `rgb(${Math.round(color[0])},${Math.round(color[1])},${Math.round(color[2])})`;
    createElementColor(rgbColor);
  }
}

createColors(4);

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
function startSelectedColor() {
  const colorSelected = document.querySelector('.color');
  colorSelected.classList.add('selected');
}

startSelectedColor();

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
      const color = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
      elementPixel.style.backgroundColor = color;
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
