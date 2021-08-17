window.onload = selectBlackColor

function selectBlackColor() {
  document.getElementsByClassName('color')[0].className += ' selected';
}

const colorOne = document.getElementsByClassName('color')[0];
const colorTwo = document.getElementsByClassName('color')[1];
const colorTheree = document.getElementsByClassName('color')[2];
const colorFour = document.getElementsByClassName('color')[3];

function clickColorOne() {
  colorOne.className = 'color selected';
  colorTwo.className = 'color';
  colorTheree.className = 'color';
  colorFour.className = 'color';
}

function clickColorTwo() {
  colorOne.className = 'color';
  colorTwo.className = 'color selected';
  colorTheree.className = 'color';
  colorFour.className = 'color';
}

function clickColorTheree() {
  colorOne.className = 'color';
  colorTwo.className = 'color';
  colorTheree.className = 'color selected';
  colorFour.className = 'color';
}

function clickColorFour() {
  colorOne.className = 'color';
  colorTwo.className = 'color';
  colorTheree.className = 'color';
  colorFour.className = 'color selected';
}

colorOne.addEventListener('click', clickColorOne);
colorTwo.addEventListener('click', clickColorTwo);
colorTheree.addEventListener('click', clickColorTheree);
colorFour.addEventListener('click', clickColorFour);
