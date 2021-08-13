const quadroPixel = document.getElementById('pixel-board');
const numberOfLines = 5;
const numberOfColums = 5;

numberLines(numberOfLines);

let lines = document.querySelectorAll('.line');

function numberLines(number) {       
  for (let index = 0; index < number; index += 1) {
    const div = document.createElement('div');
    div.className = 'line';
    quadroPixel.appendChild(div);
  }
}

for (let index = 0; index < lines.length; index += 1) {
  for (let j = 0; j < numberOfColums; j += 1) {
    const positionLine = lines[index];
    const divGrid = document.createElement('div');
    divGrid.className = 'pixel';
    positionLine.appendChild(divGrid);
  }
}
