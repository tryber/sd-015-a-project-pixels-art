const pixelBoard = document.querySelector('#pixel-board');
const pixelPallet = document.querySelector('#color-palette');

for (let i = 1; i < 6; i += 1) {
  const line = document.createElement('div');
  pixelBoard.appendChild(line);
  for (let ind = 1; ind < 6; ind += 1) {
    const pixel = document.createElement('div');
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    pixel.className = 'pixel';
    line.appendChild(pixel);
  }
}

function initialColor() {
  const pixelBlack = document.querySelector('#first-color');
  pixelBlack.classList.add('selected');
}

window.onload = initialColor;

function addOnlySelect(event) {
  const select = document.querySelector('.selected');
  console.log(select);
  select.classList.remove('selected');
  event.target.classList.add('selected');
}

pixelPallet.addEventListener('click', addOnlySelect);
