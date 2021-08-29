const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

function clickColor(clickEvent) {
  const selection = document.querySelector('.selected');
  selection.classList.remove('selected');
  clickEvent.target.classList.add('selected');
}

const clickC = document.getElementById('color-palette');
clickC.addEventListener('click', clickColor);
