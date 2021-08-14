// código das cores em HEX
const colorPalette = {
  color0: '#000000', // black
  color1: '#FF0000', // red
  color2: '#00FF00', // green
  color3: '#0000FF', // blue
};
const boardSize = 5; // Board size n x n
const currentColorText = document.querySelector('#currentColor');

// Populate palette with colors defined above
const paletteSize = Object.keys(colorPalette).length;
// Object.getOwnPropertyNames(colorPalette[i])
const paletteUl = document.querySelector('#color-palette ul');
for (let i = 0; i < paletteSize; i += 1) {
  const colors = document.createElement('li');
  const currentKey = Object.keys(colorPalette)[i];
  colors.className = 'color';
  colors.id = currentKey;
  colors.style.backgroundColor = colorPalette[currentKey];
  paletteUl.appendChild(colors);
}

// Create array with all colors in palette to be used later
const fullPaletteLi = document.querySelectorAll('#color-palette ul li');

// Create the pixel board
const pixelBoard = document.querySelector('#pixel-board');
for (let y = 1; y <= boardSize; y += 1) {
  const line = document.createElement('div');
  const lineName = `line ${y}`;
  line.id = lineName;
  line.className = 'line';

  for (let x = 1; x <= boardSize; x += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    const pixelId = `pixel${y}${x}`;
    pixel.id = pixelId;
    line.appendChild(pixel);
  }
  pixelBoard.appendChild(line);
}

// Create a function to reset the selected color to the first (black) one.
function clearColorSelection() {
  for (let li = 0; li < paletteSize; li += 1) {
    fullPaletteLi[li].classList.remove('selected');
  }
}

window.onload = function resetBlackSelection() {
  clearColorSelection();
  const blackColor = document.querySelector('#color0');
  blackColor.classList.add('selected');
  currentColorText.innerHTML = `selected: ${blackColor.id}`;
};

// verificar se uma cor foi clicada usado a referência de event bubbling de https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
document.querySelectorAll('.color').forEach((colorOnPalette) => {
  colorOnPalette.addEventListener('click', (color) => {
    const thisColorClasses = color.target.classList;
    if (!thisColorClasses.contains('selected')) {
      clearColorSelection();
      thisColorClasses.add('selected');
      currentColorText.innerHTML = `selected: ${color.target.id}`;
      alert(`${color.target.id} selected`);
    }
  });
});
