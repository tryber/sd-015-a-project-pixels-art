function zeraPizels() {
  const pixels = document.querySelectorAll('.pixel');
  if (pixels.length > 0) {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].remove();
    }
  }
}

function drawPixels(size) {
  zeraPizels();
  const pixelBoard = document.getElementById('pixel-board');
  const largura = size * 42;
  pixelBoard.style.width = `${largura}px`;
  pixelBoard.style.maxWidth = `${largura}px`;
  for (let i = 0; i < (size * size); i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

drawPixels(5);

function clickColor(clickEvent) {
  const selection = document.querySelector('.selected');
  selection.classList.remove('selected');
  clickEvent.target.classList.add('selected');
}

const clickC = document.getElementById('color-palette');
clickC.addEventListener('click', clickColor);

function selectedColor(clickEvent) {
  const selection = document.querySelector('.selected').id;
  const pixelSelection = clickEvent.target;
  pixelSelection.id = selection;
}

const clickP = document.getElementById('pixel-board');
clickP.addEventListener('click', selectedColor);

function resetPixels() {
  const selection = document.querySelectorAll('.pixel');
  for (let i = 0; i < selection.length; i += 1) {
    selection[i].removeAttribute('id');
  }
}

const clickReset = document.getElementById('clear-board');
clickReset.addEventListener('click', resetPixels);

function limitSize() {
  const size = document.getElementById('board-size');
  if (size.value < 5) {
    size.value = 5;
  }
  if (size.value > 50) {
    size.value = 50;
  }
}

function verificaSize() {
  const size = document.getElementById('board-size');
  if (size.value === '') {
    alert('Board inválido!');
  } else {
    limitSize();
    drawPixels(size.value);
  }
}

const clickSize = document.getElementById('generate-board');
clickSize.addEventListener('click', verificaSize);
