const accessBlack = document.getElementById('black-color');
const accessRed = document.getElementById('red-color');
const acessBlue = document.getElementById('blue-color');
const accessGreen = document.getElementById('green-color');
const accessButton = document.querySelector('#clear-board');
const clearPixels = document.querySelector('#removePixel')
const buttonGenerete = document.querySelector('#generate-board');

document.getElementById('black-color').style.backgroundColor = 'black';
document.getElementById('red-color').style.backgroundColor = 'red';
document.getElementById('blue-color').style.backgroundColor = 'blue';
document.getElementById('green-color').style.backgroundColor = 'green';

function changeClass(change) {
  const accessClassSelected = document.querySelector('.selected');
  accessClassSelected.classList.remove('selected');
  change.target.classList.add('selected');
}

accessBlack.addEventListener('click', changeClass);
accessRed.addEventListener('click', changeClass);
acessBlue.addEventListener('click', changeClass);
accessGreen.addEventListener('click', changeClass);

function fixedBlock() {
  const main = document.querySelector('#pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const createWidth = document.createElement('section');
    createWidth.classList.add('block');
    main.appendChild(createWidth);
    for (let i = 0; i < 5; i += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      createWidth.appendChild(createPixel);
      createPixel.addEventListener('click', changeColor);
    }
  }
}

fixedBlock();

function createBlock() {
  const main = document.querySelector('#pixel-board');
  const number = document.getElementById('board-size').value;
  let result = parseInt(number);
  if (number == '') {
    alert('Board inválido!');
  } if (result < 5) {
    result = 5;
  } if (result > 50) {
    result = 50;
  }
  clearBoard();
  for (let i = 0; i < result; i += 1) {
    const createWidth = document.createElement('section');
    createWidth.classList.add('block');
    main.appendChild(createWidth);
    for (let i = 0; i < result; i += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      createWidth.appendChild(createPixel);
      createPixel.addEventListener('click', changeColor);
    }
  }
}

buttonGenerete.addEventListener('click', createBlock);

function changeColor(event) {
  const newBackGroundColor = document.querySelector('.selected');
  const way = event.target;
  const change = newBackGroundColor.style.backgroundColor;
  way.style.backgroundColor = change;
}

function clearBox() {
  const accessAllBlocks = document.querySelectorAll('.pixel');
  for (let i = 0; i < accessAllBlocks.length; i += 1) {
    accessAllBlocks[i].style.backgroundColor = 'white';
  }
}

accessButton.addEventListener('click', clearBox);

function clearBoard() {
  const main = document.querySelector('#pixel-board');
  main.innerHTML = ''
}
