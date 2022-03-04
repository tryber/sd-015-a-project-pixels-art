// construir o quadro de pixels
const pixelBoard = document.querySelector('#pixel-board');

function buildBoard(lines) {
  for (let i = 0; i < lines; i += 1) {
    const lineBoard = document.createElement('div');
    lineBoard.classList.add('line-board');

    for (let iPx = 0; iPx < lines; iPx += 1) {
      const onePixel = document.createElement('div');
      onePixel.classList.add('pixel');

      lineBoard.appendChild(onePixel);
    }

    pixelBoard.appendChild(lineBoard);
  }
}

buildBoard(5);
// seleciona cor
const selectedColor = document.querySelectorAll('.color');

function selectColor() {
  for (const color of selectedColor) {
    color.addEventListener('click', () => {
      for (const color of selectedColor) {
        color.classList.remove('selected');
      }
      color.classList.add('selected');
    });
  }
}
selectColor();
// add cor selecionada ao pixel
const pixels = document.querySelectorAll('.pixel');

function paintPixel() {
  for (const pixel of pixels) {
    pixel.addEventListener('click', () => {
      const actualSelected = document.querySelector('.selected');
      pixel.classList.remove('pink', 'blue', 'green', 'black');

      if (actualSelected === selectedColor[0]) {
        pixel.classList.add('black');
      } else if (actualSelected === selectedColor[1]) {
        pixel.classList.add('pink');
      } else if (actualSelected === selectedColor[2]) {
        pixel.classList.add('blue');
      } else if (actualSelected === selectedColor[3]) {
        pixel.classList.add('green');
      }
    });
  }
}
paintPixel();

// botão limpar
const clearButton = document.getElementById('clear-board');

function clearBoard() {
  for (const pixel of pixels) {
    pixel.classList.remove('black', 'pink', 'blue', 'green');
  }
}

clearButton.addEventListener('click', clearBoard);
// escolher tamanho do quadrado
const btnGenerator = document.querySelector('#generate-board');
const boardSize = document.querySelector('#board-size');

function generateBoard() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value > 50) {
    pixelBoard.innerHTML = '';
    buildBoard(50);
  } else if (boardSize.value < 5) {
    pixelBoard.innerHTML = '';
    buildBoard(5);
  } else {
    pixelBoard.innerHTML = '';
    buildBoard(boardSize.value);
  }
}

btnGenerator.addEventListener('click', generateBoard);
