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
for (color of colorPalete) {
  color.addEventListener('click', selectColor)
}
function selectColor() {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  this.classList.add('selected');
}
