const pixelBoard = document.querySelector('#pixel-board');
// Adiciona 50 divs ao pixel board.
for (let i = 1; i <= 25; i += 1) {
  const pixels = document.createElement('div');
  pixels.classList = 'pixel';
  pixels.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixels);
}
// Seleciona uma cor.
const colorPalete = document.getElementsByClassName('color');
function selectColor() {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  this.classList.add('selected');
}
// Adiciona evento aos elementos da color-palette.
for (let color of colorPalete) {
  color.addEventListener('click', selectColor);
}
// Muda o background color de um pixel com a cor do elemento selected.
function paintPixel() {
  const selectedColor = document.querySelector('.selected');
  this.style.backgroundColor = selectedColor.style.backgroundColor;
}
// Adiciona o evento paintPixel 
const pixels = document.querySelectorAll('.pixel');
for (let pixel of pixels) {
  pixel.addEventListener('click', paintPixel);
}
