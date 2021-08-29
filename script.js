function drawPixels() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

drawPixels();

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
