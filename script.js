/* eslint-disable sonarjs/no-duplicate-string */
const quadroPixels = document.getElementById('pixel-board');
const quadroBlack = document.getElementsByClassName('color')[0];
const quadroRed = document.getElementsByClassName('color')[1];
const quadroBlue = document.getElementsByClassName('color')[2];
const quadroGreen = document.getElementsByClassName('color')[3];

function pintarPixel(event) {
  const selected = document.querySelector('.selected');
  const color = selected.style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function clickBlack() {
  quadroBlack.className = 'color selected';
  quadroRed.className = 'color';
  quadroBlue.className = 'color';
  quadroGreen.className = 'color';
  const itemSelected = document.querySelector('.selected')
  itemSelected.style.backgroundColor = 'black';
}

function clickRed() {
  quadroBlack.className = 'color';
  quadroRed.className = 'color selected';
  quadroBlue.className = 'color';
  quadroGreen.className = 'color';
  const itemSelected = document.querySelector('.selected')
  itemSelected.style.backgroundColor = 'red';
}

function clickBlue() {
  quadroBlack.className = 'color';
  quadroRed.className = 'color';
  quadroBlue.className = 'color selected';
  quadroGreen.className = 'color';
  const itemSelected = document.querySelector('.selected')
  itemSelected.style.backgroundColor = 'blue';
}

function clickGreen() {
  quadroBlack.className = 'color';
  quadroRed.className = 'color';
  quadroBlue.className = 'color';
  quadroGreen.className = 'color selected';
  const itemSelected = document.querySelector('.selected')
  itemSelected.style.backgroundColor = 'green';
}

function criaLinha(qtdPixels) {
  for (let index = 0; index < qtdPixels; index += 1) {
    const pixels = document.createElement('div');
    quadroPixels.appendChild(pixels);
    pixels.className = 'pixel';
    pixels.style.backgroundColor = 'white';
    pixels.addEventListener('click', pintarPixel);
} 
}

quadroBlack.addEventListener('click', clickBlack);
quadroRed.addEventListener('click', clickRed);
quadroBlue.addEventListener('click', clickBlue);
quadroGreen.addEventListener('click', clickGreen);
window.onload = clickBlack;
criaLinha(5);
criaLinha(5);
criaLinha(5);
criaLinha(5);
criaLinha(5);