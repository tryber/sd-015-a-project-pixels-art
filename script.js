// requisito 4
const lines = document.getElementsByClassName('line');

function addPixelsToLines() {
  for (let i = 0; i < lines.length; i += 1) {
    for (let i2 = 0; i2 < lines.length; i2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lines[i].appendChild(pixel);
    }
  }
}
addPixelsToLines();

// requisito 6
window.onload = function initPage() {
  const paletteBlack = document.getElementById('black');
  paletteBlack.className += ' selected';
};

// requisito 7
const paletteColors = document.getElementsByClassName('color');

function selectColor(event) {
  document.querySelector('.selected').className = 'color';
  const clickedColor = event.target;
  clickedColor.className += ' selected';
}
function addClickPalette() {
  for (let i = 0; i < paletteColors.length; i += 1) {
    paletteColors[i].addEventListener('click', selectColor);
  }
}
addClickPalette();

// requisito 8
const pixels = document.getElementsByClassName('pixel');

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected');
  const color = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');

  const clickedPixel = event.target;

  clickedPixel.style.backgroundColor = color;
}
function addClickPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixel);
  }
}
addClickPixels();

// requisito 9
const clearButton = document.getElementById('clear-board');

function clearTheBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
function addClickClearBtn() {
  clearButton.addEventListener('click', clearTheBoard);
}
addClickClearBtn();
