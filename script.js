window.onload = function selectBlackColor() {
  document.getElementsByClassName('color')[0].className += ' selected';
};

const colorOne = document.getElementsByClassName('color')[0];
const colorTwo = document.getElementsByClassName('color')[1];
const colorTheree = document.getElementsByClassName('color')[2];
const colorFour = document.getElementsByClassName('color')[3];

document.getElementById('color-1').style.backgroundColor = 'black'; 
document.getElementById('color-2').style.backgroundColor = '#023047'; 
document.getElementById('color-3').style.backgroundColor = '#cb997e'; 
document.getElementById('color-4').style.backgroundColor = '#d00000'; 

function clickColorOne() {
  colorOne.className += ' selected';
  colorTwo.className = 'color';
  colorTheree.className = 'color';
  colorFour.className = 'color';
}

function clickColorTwo() {
  colorOne.className = 'color';
  colorTwo.className += ' selected';
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

const pixelFrame = document.getElementById('pixel-board');

function paintPixels(event) { 
  const selectedPixel = event.target;
  const selectorColor = document.querySelector('.selected').style.backgroundColor;
  selectedPixel.style.backgroundColor = selectorColor;
}

pixelFrame.addEventListener('click', paintPixels);
