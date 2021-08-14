function initialSelect() {
  const firstColor = document.querySelector('.color');
  firstColor.className = 'color selected';
}
initialSelect();

const blackButton = document.getElementsByClassName('color')[0];
const greenButton = document.getElementsByClassName('color')[1];
const redButton = document.getElementsByClassName('color')[2];
const yellowButton = document.getElementsByClassName('color')[3];

function clickBlackSelect() {
  blackButton.className = 'color selected';
  greenButton.className = 'color';
  redButton.className = 'color';
  yellowButton.className = 'color';
  // console.log(document.querySelectorAll('.selected')); // teste
}
function clickGreenSelect() {
  blackButton.className = 'color';
  greenButton.className = 'color selected';
  redButton.className = 'color';
  yellowButton.className = 'color';
  // console.log(document.querySelectorAll('.selected')); // teste
}
function clickRedSelect() {
  blackButton.className = 'color';
  greenButton.className = 'color';
  redButton.className = 'color selected';
  yellowButton.className = 'color';
  // console.log(document.querySelectorAll('.selected')); // teste
}
function clickYellowSelect() {
  blackButton.className = 'color';
  greenButton.className = 'color';
  redButton.className = 'color';
  yellowButton.className = 'color selected';
  // console.log(document.querySelector('.selected')); // teste
}

blackButton.addEventListener('click', clickBlackSelect);
greenButton.addEventListener('click', clickGreenSelect);
redButton.addEventListener('click', clickRedSelect);
yellowButton.addEventListener('click', clickYellowSelect);

// function paintPixel() {
//   document.querySelectorAll('.pixel')[0].style.backgroundColor =
// }

// let pixelBoard = document.querySelectorAll('.pixel');
// for (let index in pixelBoard) {
//   document.querySelectorAll('.pixel')[index].addEventListener('click', paintPixel)
// }

// Pintar uma unidade de cada
document.getElementById('black').style.backgroundColor = 'black';     // por algum motivo precisei definir background color atraves do DOM pois o class .selected nao esta interpretando que a cor do back é definita pelo id com nome da cor em cada elemento
document.getElementById('green').style.backgroundColor = 'green';     // por algum motivo precisei definir background color atraves do DOM pois o class .selected nao esta interpretando que a cor do back é definita pelo id com nome da cor em cada elemento
document.getElementById('red').style.backgroundColor = 'red';         // por algum motivo precisei definir background color atraves do DOM pois o class .selected nao esta interpretando que a cor do back é definita pelo id com nome da cor em cada elemento
document.getElementById('yellow').style.backgroundColor = 'yellow';   // por algum motivo precisei definir background color atraves do DOM pois o class .selected nao esta interpretando que a cor do back é definita pelo id com nome da cor em cada elemento

function paintPixel01(){
  document.querySelectorAll('.pixel')[0].style.backgroundColor = document.querySelector('.selected').style.backgroundColor

}
document.querySelectorAll('.pixel')[0].addEventListener('click', paintPixel01);

function paintPixel02(){
  document.querySelectorAll('.pixel')[1].style.backgroundColor = document.querySelector('.selected').style.backgroundColor
}
document.querySelectorAll('.pixel')[1].addEventListener('click', paintPixel02);

function paintPixel03(){
  document.querySelectorAll('.pixel')[2].style.backgroundColor = document.querySelector('.selected').style.backgroundColor
}
document.querySelectorAll('.pixel')[2].addEventListener('click', paintPixel03);

function paintPixel04(){
  document.querySelectorAll('.pixel')[3].style.backgroundColor = document.querySelector('.selected').style.backgroundColor
}
document.querySelectorAll('.pixel')[3].addEventListener('click', paintPixel04);

function paintPixel05(){
  document.querySelectorAll('.pixel')[4].style.backgroundColor = document.querySelector('.selected').style.backgroundColor
}
document.querySelectorAll('.pixel')[4].addEventListener('click', paintPixel05);

function paintPixel06(){
  document.querySelectorAll('.pixel')[5].style.backgroundColor = document.querySelector('.selected').style.backgroundColor
}
document.querySelectorAll('.pixel')[5].addEventListener('click', paintPixel06);




