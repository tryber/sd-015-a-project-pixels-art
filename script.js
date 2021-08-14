function createTag(tag) {
  const create = document.createElement(`${tag}`);

  return document.body.appendChild(create);
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

const palette = document.getElementById('color-palette');

for (let number = 0; number < 4; number += 1) {
  palette.appendChild(createTag('div'));
}
const selector = document.querySelectorAll('#color-palette div');

selector.forEach((elemen) => elemen.classList.add('color'));

for (let index = 1; index < selector.length; index += 1) {
  selector[index].id = `color${index}`;
}

const color2 = document.getElementById('color1');
const color3 = document.getElementById('color2');
const color4 = document.getElementById('color3');

window.onload = function carregamento() {
  color2.style.backgroundColor = generateRandomColor();
  color3.style.backgroundColor = generateRandomColor();
  color4.style.backgroundColor = generateRandomColor();
};

const board = document.getElementById('pixel-board');

function sizeOfBoard(size) {
  for (let indexLine = 0; indexLine < size; indexLine += 1) {
    const createLine = createTag('div');
    createLine.classList.add('line');
    board.appendChild(createLine);

    for (let indexCol = 0; indexCol < size; indexCol += 1) {
      const createColumn = createTag('div');
      createLine.appendChild(createColumn);
      createColumn.classList.add('pixel');
    }
  }
}

function generateBoard(size) {
  if (size < 5) {
    const sizeMin = 5;
    sizeOfBoard(sizeMin);
  } else if (size > 50) {
    const sizeMax = 50;
    sizeOfBoard(sizeMax);
  } else {
    sizeOfBoard(size);
  }
}

generateBoard(5);

// const pixels = document.querySelectorAll('#pixel-board div');

// pixels.forEach((elemen) => elemen.classList.add('pixels'));
