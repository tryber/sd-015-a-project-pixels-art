function createPixelBoard(n) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < n; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    pixelBoard.appendChild(pixelLine);
    for (let fillLine = 0; fillLine < n; fillLine += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}
createPixelBoard(5);

function addClassSelected(color) {
  const newClass = document.getElementById(color);
  newClass.classList.add('selected');
}
addClassSelected('black');

const colorList = document.getElementsByClassName('color');
const allColors = document.getElementById('color-palette');

function clearSelected() {
  for (let i = 0; i < colorList.length; i += 1) {
    colorList[i].classList.remove('selected');
  }
}

allColors.addEventListener('click', (color) => {
  clearSelected();
  color.target.classList.add('selected');
});

function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('click', (evento) => {
      const elementPixel = evento.target;
      const colorSelected = document.getElementsByClassName('color selected')[0];
      elementPixel.style.backgroundColor = colorSelected.id;
    });
  });
}
paintPixel();
