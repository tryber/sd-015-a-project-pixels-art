const cores = document.getElementsByClassName('color');
cores[0].style.background = 'black';
cores[1].style.background = 'red';
cores[2].style.background = 'blue';
cores[3].style.background = 'green';

const quadroPixel = document.getElementById('pixel-board');
const corSelected = document.querySelector('.selected');
const numberOfLines = 5;
const numberOfColums = 5;

numberLines(numberOfLines);

const lines = document.querySelectorAll('.line');

createBox(lines, numberOfColums);

cores[0].addEventListener('click', trocaCor);
cores[1].addEventListener('click', trocaCor);
cores[2].addEventListener('click', trocaCor);
cores[3].addEventListener('click', trocaCor);

function numberLines(number) {
  for (let index = 0; index < number; index += 1) {
    const div = document.createElement('div');
    div.className = 'line';
    quadroPixel.appendChild(div);
  }
}

function createBox(lines, colunas) {
  for (let index = 0; index < lines.length; index += 1) {
    for (let j = 0; j < colunas; j += 1) {
      const positionLine = lines[index];
      const divGrid = document.createElement('div');
      divGrid.className = 'pixel';
      positionLine.appendChild(divGrid);
    }
  }
}

function trocaCor(event) {
  const techElement = document.querySelector('.selected');
  techElement.classList.remove('selected');
  event.target.classList.add('selected');
}

quadroPixel.addEventListener('click',pintaGrid);

function pintaGrid(){
  let taskDiv = document.querySelectorAll('.color');  
  for (let index = 0; index < taskDiv.length; index += 1) {
    if (taskDiv[index].className == 'color selected') {
      let taskColor = taskDiv[index].style.background;
      event.target.style.background = taskColor;
    }
  }
  
}
