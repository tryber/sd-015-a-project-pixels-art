const pixelBoard = document.querySelector('#pixel-board');
const pixelPallet = document.querySelector('#color-palette');
const colorsPallet = document.querySelectorAll('.color');
const buttonClear = document.querySelector('#clear-board');
const buttonSizeBoard = document.querySelector('#generate-board');
let valueBoard = 5;

for (let i = 0; i < colorsPallet.length; i += 1) {
  colorsPallet[i].style.backgroundColor = colorsPallet[i].id;
}

function createBoard(size) {
  for (let i = 1; i <= size; i += 1) {
    const line = document.createElement('div');
    line.style.height = '40px';
    pixelBoard.appendChild(line);
    for (let ind = 1; ind <= size; ind += 1) {
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
}

function initialColor() {
  const pixelBlack = document.querySelector('#black');
  pixelBlack.classList.add('selected');
  createBoard(valueBoard);
}

window.onload = initialColor;

function addOnlySelect(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}

pixelPallet.addEventListener('click', addOnlySelect);

function changeColorBoard(event) {
  const newColor = event.target;

  if (newColor.classList.length >= 1) {
    const colorSelected = document.querySelector('.selected');
    const color = colorSelected.id;
    newColor.style.backgroundColor = color;
  }
}

pixelBoard.addEventListener('click', changeColorBoard);

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

buttonClear.addEventListener('click', clearBoard);

function removeBoard() {
  const pixelDiv = document.getElementsByClassName('pixel');

  while (pixelDiv.length > 0) {
    for (let i = 0; i < pixelDiv.length; i += 1) {
      const element = pixelDiv[i];
      const pai = element.parentElement;
      pai.parentElement.removeChild(pai);
    }
  }
}

function changeBoard() {
  const inputSize = document.querySelector('#board-size').value;
  console.log(inputSize);
  console.log(inputSize);
  if (inputSize > 0) {
    removeBoard();
    createBoard(inputSize);
  } else {
    alert('Board inválido!');
    //window.location.reload();
  }
}

buttonSizeBoard.addEventListener('click', changeBoard);
