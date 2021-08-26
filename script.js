const colorPallete = document.querySelector('#color-palette');
// const Pixel = document.querySelector('.pixel');
const BOard = document.getElementById('pixel-board');

const line = 5;
const collum = 5;

for (let index = 0; index < line; index += 1) {
  for (let i = 0; i < collum; i += 1) {
    const li = document.createElement('li');
    li.classList.add('pixel');
    BOard.appendChild(li);
  }
}

function selectColor(event) {
  const removeselected = document.querySelector('.selected');
  removeselected.classList.remove('selected');
  event.target.classList.add('selected');
}

colorPallete.addEventListener('click', selectColor);
