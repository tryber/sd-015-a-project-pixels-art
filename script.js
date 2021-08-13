const colorList = document.getElementsByClassName('color');
const colorContainer = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const buttonClear = document.getElementById('clear-board');
const buttonSize = document.getElementById('generate-board');

function clearSelected() {
  for (let index = 0; index < colorList.length; index += 1) {
    colorList[index].classList.remove('selected');
  }
}

// Choose color
colorContainer.addEventListener('click', (color) => {
  clearSelected();
  color.target.classList.add('selected');
});

// Paint pixels
pixelBoard.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const pixel = event;
    const selectedColor = document.getElementsByClassName('selected')[0];
    console.log(selectedColor);
    const color = getComputedStyle(selectedColor).backgroundColor;
    console.log(color);
    pixel.target.style.backgroundColor = color;
  }
}, false);

// Clear colors
buttonClear.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

function makeBoard(sizeInput) {
  let size = sizeInput;
  pixelBoard.innerHTML = '';
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }
  pixelBoard.style.width = `${40 * size}px`;
  pixelBoard.style.height = pixelBoard.style.width;
  for (let i = 0; i < (size * size); i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

// Change size
buttonSize.addEventListener('click', () => {
  const sizeInput = document.getElementById('board-size');
  if (!sizeInput.value) {
    alert('Board inválido!');
  } else {
    makeBoard(sizeInput.value);
  }
});

function makeRandomColor() {
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const r = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function loadRandomColor() {
  for (let i = 1; i < colorList.length - 1; i += 1) {
    console.log(colorList[i]);
    colorList[i].style.backgroundColor = makeRandomColor();
  }
}

window.onload = loadRandomColor;
