function randomizeColor() {
  const r = Math.ceil(Math.random() * 254);
  const g = Math.ceil(Math.random() * 254);
  const b = Math.ceil(Math.random() * 254);
  const randomColor = `rgb(${r}, ${g}, ${b})`;
  console.log(randomColor);
  if (randomColor === 'rgb(255, 255, 255)') {
    console.log('Cannot generate white');
    randomizeColor();
  } else {
    return randomColor;
  }
}

// código das cores em RGB
const colorPalette = {
  color0: 'rgb(0, 0, 0)', // black
  color1: randomizeColor(),
  color2: randomizeColor(),
  color3: randomizeColor(),
  // color4: 'rgb(255, 0, 0)', // red
  // color5: 'rgb(0, 255, 0)', // green
  // color6: 'rgb(0, 0, 255)', // blue
};
const boardSizeField = document.querySelector('#board-size');
const currentColorText = document.querySelector('#currentColorField');

// Populate palette with colors defined above
const paletteSize = Object.keys(colorPalette).length;
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

// Colorize clicked pixel
function colorizePixel() {
  document.querySelectorAll('.pixel').forEach((pixelOnGrid) => {
    pixelOnGrid.addEventListener('click', (eventPixel) => {
      const whichColorSelected = document.querySelector('.color.selected').id;
      const thisPixel = eventPixel;
      thisPixel.target.style.backgroundColor = colorPalette[whichColorSelected];
    });
  });
}

// Create the pixel board
const pixelBoard = document.querySelector('#pixel-board');
function createPixelBoard(boardSizeVar) {
  const totalSize = boardSizeVar;
  pixelBoard.innerHTML = '';
  for (let y = 1; y <= totalSize; y += 1) {
    const line = document.createElement('div');
    const lineName = `line ${y}`;
    line.id = lineName;
    line.className = 'line';
    for (let x = 1; x <= totalSize; x += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      const pixelId = `pixel${y}${x}`;
      pixel.id = pixelId;
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
  boardSizeField.placeholder = boardSizeVar;
  colorizePixel();
}

// Create a function to reset the selected color to the first (black) one.
function clearColorSelection() {
  for (let li = 0; li < paletteSize; li += 1) {
    fullPaletteLi[li].classList.remove('selected');
  }
}

// check clicked color with event bubbling ref: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
document.querySelectorAll('.color').forEach((colorOnPalette) => {
  colorOnPalette.addEventListener('click', (color) => {
    const thisColorClasses = color.target.classList;
    if (!thisColorClasses.contains('selected')) {
      clearColorSelection();
      thisColorClasses.add('selected');
      currentColorText.innerHTML = `selected: &#128396 ${color.target.id}`;
      currentColorText.style.color = colorPalette[color.target.id];
    }
  });
});

// Clear board
document.querySelector('#clear-board').addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach((eventClearPixel) => {
    const pixelToClear = eventClearPixel;
    pixelToClear.style.backgroundColor = 'white';
  });
});

function resetBlackSelection() {
  const blackColor = document.querySelector('#color0');
  blackColor.classList.add('selected');
  currentColorText.innerHTML = `selected: &#128396 ${blackColor.id}`;
}

let newFieldSize = '';
document.querySelector('#generate-board').addEventListener('click', () => {
  newFieldSize = document.querySelector('#board-size').value;
  if (newFieldSize === '' || newFieldSize < 0) {
    alert('Board inválido!');
    newFieldSize = 5;
  } else if (newFieldSize < 5) {
    newFieldSize = 5;
  } else if (newFieldSize > 50) {
    newFieldSize = 50;
  }
  createPixelBoard(newFieldSize);
});

window.onload = function startAllection() {
  createPixelBoard(5);
  clearColorSelection();
  resetBlackSelection();
};
