const colorPallete = document.querySelector('#color-palette');
const BOard = document.getElementById('pixel-board');
const clear = document.getElementById('clear-board');
const vqv = document.getElementById('generate-board');

function createBord(size) {
  for (let index = 0; index < size; index += 1) {
    const line = document.createElement('div');
    line.style.height = '40px';
    BOard.appendChild(line);
    for (let i = 0; i < size; i += 1) {
      const li = document.createElement('div');
      li.classList.add('pixel');
      line.appendChild(li);
    }
  }
}
createBord(5);

function selectColor(event) {
  const removeselected = document.querySelector('.selected');
  removeselected.classList.remove('selected');
  event.target.classList.add('selected');
}

colorPallete.addEventListener('click', selectColor);

// consultei esse repositorio para resolver o reuisito 7
// https://github.com/tryber/sd-015-a-project-pixels-art/blob/leonardo-felix-pixels-art/script.js

function changecolor(event) {
  if (event.target.classList.contains('pixel')) {
    const eve = event;
    const selectedcolor = document.getElementsByClassName('selected')[0];
    const color = getComputedStyle(selectedcolor).backgroundColor;
    eve.target.style.backgroundColor = color;
  }
}
BOard.addEventListener('click', changecolor);

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
    console.log(pixel[index]);
  }
}
clear.addEventListener('click', clearBoard);

// consultei o repositorio de debora-fatini para resolver os requisitos bonus 10 e 11
// https://github.com/tryber/sd-015-a-project-pixels-art/pull/29

function deleteBoard() {
  const pixel2 = document.getElementsByClassName('pixel');
  while (pixel2.length > 0) {
    for (let index = 0; index < pixel2.length; index += 1) {
      const pix = pixel2[index];
      const Father = pix.parentElement;
      Father.parentElement.removeChild(Father);
    }
  }
}

function bordSize() {
  const input = document.querySelector('#board-size').value;
  if (input === '') {
    alert('Board inválido!');
  } else if (input < 5) {
    deleteBoard();
    createBord(5);
  } else if (input > 50) {
    deleteBoard();
    createBord(50);
  } else {
    deleteBoard();
    createBord(input);
  }
  console.log(input);
}
vqv.addEventListener('click', bordSize);

// consultei esse repositorio
// https://github.com/tryber/sd-015-a-project-pixels-art/pull/46/files
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const pallete = document.querySelectorAll('.color');
  pallete[1].style.backgroundColor = `rgb( ${r}, ${g}, ${b} )`;
  pallete[2].style.backgroundColor = `rgb( ${g}, ${b}, ${r} )`;
  pallete[3].style.backgroundColor = `rgb( ${b}, ${r}, ${g} )`;
}randomColor();
