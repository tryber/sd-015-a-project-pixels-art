const clickButton = document.getElementById('color-palette');

function color(event) {
  const colorsAdd = document.querySelectorAll('.color');
  for (let index = 0; index < colorsAdd.length; index += 1) {
    colorsAdd[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
clickButton.addEventListener('click', color);

const changeColor = document.getElementsByClassName('pixel');

function selectColor(event) {
  const evento = event;
  const inColors = document.querySelector('.selected');
  const change = getComputedStyle(inColors);
  evento.target.style.backgroundColor = change.backgroundColor;
}

for (let index = 0; index < changeColor.length; index += 1) {
  changeColor[index].addEventListener('click', selectColor);
}

const resetButton = document.getElementById('clear-board');

function makePixelsWhite(pixel) {
  const white = pixel;
  white.style.backgroundColor = 'white';
}

function selectPaintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    makePixelsWhite(pixels[index]);
  }
}

resetButton.addEventListener('click', selectPaintPixel);
