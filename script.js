const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const color = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');
const clearBtn = document.getElementById('clear-board');
const initialSelection = document.querySelectorAll('.color');
let selectedColor = 'black';

window.onload = function() {
  for (let i = 0; i < initialSelection.length; i += 1) {
    if (initialSelection[i].style.backgroundColor === 'black') {
      initialSelection[i].classList.add('selected');
    } else {
      initialSelection[0].classList.add('selected');
    }
  }
}

for (let i = 0; i < 4; i += 1) {
  let createColor = document.createElement('div');
  let colors = ['black', 'orange', 'red', 'green'];
  createColor.className = 'color';
  colorPalette.appendChild(createColor);
  createColor.style.backgroundColor = colors[i];
}

for (let i = 0; i < 25; i += 1) {
  let pixelBoard = document.getElementById('pixel-board');
  let createPixel = document.createElement('div');
  createPixel.className = 'pixel';
  pixelBoard.appendChild(createPixel);
  createPixel.style.backgroundColor = 'white';
}

for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', function() {
    for (let i = 0; i < color.length; i += 1) {
      color[i].classList.remove('selected');
    }
    color[i].classList.add('selected');
    selectedColor = color[i].style.backgroundColor;
  })
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', function() {
    let selectedPixel = pixel[i];
    selectedPixel.style.backgroundColor = selectedColor;
    console.log(selectedColor);
  })
}

clearBtn.addEventListener('click', function() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
})