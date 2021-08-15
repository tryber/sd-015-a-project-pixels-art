function createColorPalette(number) {
  const colorPalette = document.querySelector('#color-palette');
  let colorDiv;

  for (let index = 0; index < number; index += 1) {
    colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorPalette.appendChild(colorDiv);
  }
}
function randomNumber() {
  return Math.round(Math.random() * 255);
}

function randomColor() {
  let color = 'rgb(';
  color += randomNumber();
  color += ', ';
  color += randomNumber();
  color += ', ';
  color += randomNumber();
  color += ')';
  return color;
}

const paletteOfColors = ['black', randomColor(), randomColor(), randomColor()];
const paletteDiv = document.getElementById('color-palette').children;

function makePaletteColor() {
  for (let index = 0; index < paletteOfColors.length; index += 1) {
    paletteDiv[index].style.backgroundColor = paletteOfColors[index];
  }
}

function makeSelected() {
  const blackElement = document.querySelector('.color');
  if (blackElement.style.backgroundColor === 'black') {
    blackElement.classList.add('selected');
  }
}

createColorPalette(4);
makePaletteColor();
makeSelected();
