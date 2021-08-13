const pixelBoard = document.querySelector('#pixel-board');
const pixelPallet = document.querySelector('#color-palette');
const colorsPallet = document.querySelectorAll('.color');
const colorSelect = document.querySelector('.selected');

for (let i = 0; i < colorsPallet.length; i += 1) {
  colorsPallet[i].style.backgroundColor = colorsPallet[i].id;
}

for (let i = 1; i < 6; i += 1) {
  const line = document.createElement('div');
  pixelBoard.appendChild(line);
  for (let ind = 1; ind < 6; ind += 1) {
    const pixel = document.createElement('div');
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    pixel.className = 'pixel';
    line.appendChild(pixel);
  }
}

function initialColor() {
  const pixelBlack = document.querySelector('#black');
  pixelBlack.classList.add('selected');
}

window.onload = initialColor;

function addOnlySelect(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}

pixelPallet.addEventListener('click', addOnlySelect);

function changeColorBoard(event) {
  const colorSelected = document.querySelector('.selected');
  const color = colorSelected.id;
  const newColor = event.target;
  newColor.style.backgroundColor = color;
}

pixelBoard.addEventListener('click', changeColorBoard);
