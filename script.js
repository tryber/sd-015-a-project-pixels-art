const colorPaletteSection = document.getElementById('color-palette');
const firstColor = colorPaletteSection.firstElementChild;
const secondColor = firstColor.nextElementSibling;
const thirdColor = secondColor.nextElementSibling;
const fourthColor = colorPaletteSection.lastElementChild;
const colorList = document.querySelectorAll('#color-palette div');

function changeBackgroundColor(event, color) {
  const elem = event;
  elem.style.backgroundColor = color;
}

changeBackgroundColor(firstColor, 'black');
changeBackgroundColor(secondColor, 'red');
changeBackgroundColor(thirdColor, 'blue');
changeBackgroundColor(fourthColor, 'green');

for (let i = 0; i < colorList.length; i += 1) {
  colorList[i].style.border = '1px black solid';
  colorList[i].style.display = 'inline-block';
}

function removePreviousSelected() {
  for (let idx = 0; idx < colorList.length; idx += 1) {
    colorList[idx].classList.remove('selected');
  }
}

function selectColor(event) {
  removePreviousSelected();
  event.target.classList.add('selected');
}

colorPaletteSection.addEventListener('click', selectColor);

function paintPixels(event) {
  const elem = event;
  const selectedColor = document.querySelector('.selected');
  const selectedObj = getComputedStyle(selectedColor);
  const selectedObjColor = selectedObj.backgroundColor;
  elem.target.style.backgroundColor = selectedObjColor;
}

const td = document.querySelectorAll('.pixel');

for (let x = 0; x < td.length; x += 1) {
  td[x].addEventListener('click', paintPixels);
}

function clearAll() {
  for (let ind = 0; ind < td.length; ind += 1) {
    td[ind].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearAll);

const input = document.getElementById('board-size');
const sizeButton = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');

function inputLessFive() {
  pixelBoard.innerHTML = '';
  for (let a = 1; a <= 5; a += 1) {
    const tr = document.createElement('tr');
    pixelBoard.appendChild(tr);
    for (let b = 0; b < 5; b += 1) {
      const newTd = document.createElement('td');
      newTd.className = 'pixel';
      tr.appendChild(newTd);
      newTd.addEventListener('click', paintPixels);
    }
  }
}

function inputPlusFifth() {
  pixelBoard.innerHTML = '';
  for (let a = 1; a <= 50; a += 1) {
    const tr = document.createElement('tr');
    pixelBoard.appendChild(tr);
    for (let b = 0; b < 50; b += 1) {
      const newTd = document.createElement('td');
      newTd.className = 'pixel';
      tr.appendChild(newTd);
      newTd.addEventListener('click', paintPixels);
    }
  }
}

function inputOkay() {
  pixelBoard.innerHTML = '';
  for (let a = 1; a <= parseInt(input.value, 10); a += 1) {
    const tr = document.createElement('tr');
    pixelBoard.appendChild(tr);
    for (let b = 0; b < input.value; b += 1) {
      const newTd = document.createElement('td');
      newTd.className = 'pixel';
      tr.appendChild(newTd);
      newTd.addEventListener('click', paintPixels);
    }
  }
}

function changeBoardSize() {
  if (input.value === '') {
    alert('Board inválido!');
  } else if (input.value < 5) {
    inputLessFive();
  } else if (input.value > 50) {
    inputPlusFifth();
  } else {
    inputOkay();
  }
}

sizeButton.addEventListener('click', changeBoardSize);
