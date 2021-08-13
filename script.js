/* eslint-disable no-unused-vars */
function createBox(parent) {
  const colors = ['black', 'blue', 'green', 'yellow'];
  for (let i = 0; i < colors.length; i += 1) {
    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
    const parentElement = document.getElementById(parent);

    newDiv.className = 'color';
    newDiv.style.backgroundColor = colors[i];
    parentElement.appendChild(newDiv);
    newDiv.appendChild(newLi);
  }
}

function createPixel(parent) {
  for (let i = 0; i < 25; i += 1) {
    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
    const parentElement = document.getElementById(parent);

    newDiv.className = 'pixel';
    newDiv.style.backgroundColor = 'white';
    parentElement.appendChild(newDiv);
    newDiv.appendChild(newLi);
  }
}

function defineColor() {
  const blackBg = document.querySelector('.color');
  blackBg.classList.add('selected');
}

function selectColor() {
  const palette = document.getElementById('color-palette');
  palette.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    const newColor = event.target;

    selectedColor.classList.remove('selected');
    newColor.classList.add('selected');
  });
}

function fillPixel() {
  const pixel = document.getElementById('pixel-board');

  pixel.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    const selectedPixel = event.target;

    selectedPixel.style.backgroundColor = selectedColor;
  });
}

function clearBoard() {
  const clearBtn = document.querySelector('button');

  clearBtn.id = 'clear-board';
  clearBtn.innerHTML = 'Limpar';
  clearBtn.addEventListener('click', () => {
    const getAllPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < getAllPixels.length; i += 1) {
      getAllPixels[i].style.backgroundColor = 'white';
    }
  });
}
