function divColor() {
  const color = ['black', 'red', 'blue', 'yellow'];

  for (let index in color) {
    let newColor = color[index];
    let newDivColor = document.createElement('div');
    newDivColor.className = 'color';

    newDivColor.style.backgroundColor = newColor;
    document.querySelector('#color-palette').appendChild(newDivColor);
  }
}

function creatBoard() {
  for (let index = 0; index < 25; index += 1) {
    let newDivEmpty = document.createElement('div');
    newDivEmpty.className = 'pixel';
    document.querySelector('#pixel-board').appendChild(newDivEmpty);
  }
}

function addClassToBlack() {
  document
    .querySelector('.color').classList.add('selected');
}

function turnToSelect() {
  let whichColor = document.getElementsByClassName('color');
  let paletteAll = document.querySelector('#color-palette');

  paletteAll.addEventListener('click', function (event) {
    for (let index = 0; index < whichColor.length; index += 1) {
      console.log(whichColor[index]);
      whichColor[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function fillPixel() {
  let boardFill = document.querySelector('#pixel-board');

  boardFill.addEventListener('click', function (event) {
    let whoWillFill = document.querySelector('.selected');
    event.target.style.backgroundColor = whoWillFill.style.backgroundColor;
  });
}

function clearAll() {
  let motherBoard = document.getElementsByClassName('pixel');
  
  let buttonClearAll = document.querySelector('#clear-board');

  buttonClearAll.addEventListener('click', function () {
    for (let index = 0; index < motherBoard.length; index += 1) {
      
      motherBoard[index].style.backgroundColor = 'white';
    }
  });
}




divColor();
creatBoard();
addClassToBlack();
turnToSelect();
fillPixel();
clearAll();
