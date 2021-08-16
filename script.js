const accessBlack = document.getElementById('black-color');
const accessRed = document.getElementById('red-color');
const acessBlue = document.getElementById('blue-color');
const accessGreen = document.getElementById('green-color');
const accessDivBlock = document.querySelectorAll('section.block');
const accessButton = document.querySelector('#button');

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

function createBlock() {
  for (let i = 0; i < accessDivBlock.length; i += 1) {
    const list = accessDivBlock[i];
    for (let i2 = 0; i2 < accessDivBlock.length; i2 += 1) {
      const createDiv = document.createElement('div');
      createDiv.classList.add('pixel');
      list.appendChild(createDiv);
    }
  }
}
createBlock();

function changeColor(evento) {
  const newBackGroundColor = document.querySelector('.selected');
  const way = evento.target;
  const change = newBackGroundColor.style.backgroundColor
  way.style.backgroundColor = change;
}

function selectedBlock() {
  const accessAllBlocks = document.querySelectorAll('.pixel');
  for (let i = 0; i < accessAllBlocks.length; i += 1) {
    const listBlock = accessAllBlocks[i];
    listBlock.addEventListener('click', changeColor);
  }
}

selectedBlock();

function clearBox() {
  const accessAllBlocks = document.querySelectorAll('.pixel');
  for (let i = 0; i < accessAllBlocks.length; i += 1) {
    accessAllBlocks[i].style.backgroundColor = 'white'
  }
}

accessButton.addEventListener('click', clearBox)
