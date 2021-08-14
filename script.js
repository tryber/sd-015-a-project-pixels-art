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

// Desafio 8
document.getElementById('black').style.backgroundColor = 'black';     // por algum motivo precisei definir background color atraves do DOM pois o class .selected nao esta interpretando que a cor do back é definita pelo id com nome da cor em cada elemento
document.getElementById('green').style.backgroundColor = 'green';     // por algum motivo precisei definir background color atraves do DOM pois o class .selected nao esta interpretando que a cor do back é definita pelo id com nome da cor em cada elemento
document.getElementById('red').style.backgroundColor = 'red';         // por algum motivo precisei definir background color atraves do DOM pois o class .selected nao esta interpretando que a cor do back é definita pelo id com nome da cor em cada elemento
document.getElementById('yellow').style.backgroundColor = 'yellow';   // por algum motivo precisei definir background color atraves do DOM pois o class .selected nao esta interpretando que a cor do back é definita pelo id com nome da cor em cada elemento

  let pixelBoard = document.querySelector('#pixel-board');

  pixelBoard.addEventListener('click', function(event) {
      let pixelAdress = event.target
      let selectorColor = document.querySelector('.selected').style.backgroundColor
      pixelAdress.style.backgroundColor = selectorColor;
  });

// Desafio 9 

let resetButton = document.getElementById('clear-board');
resetButton.addEventListener('click', function() {
  window.location.reload()
})
  


