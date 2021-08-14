function blackDiv (){
  const colorBlack = 'black';

  const blackDivColor = document.createElement('div');
  blackDivColor.className = 'color';

  blackDivColor.style.backgroundColor = colorBlack;
  document.querySelector('#color-palette').appendChild(blackDivColor);
}

function divColor() {
  const color = [, 'red', 'blue', 'yellow'];
  for (let index in color) {
    const newDivColor = document.createElement('div');
    newDivColor.className = 'color';
    const color1 = Math.floor(Math.random() * 255) + 1;
    const color2 = Math.floor(Math.random() * 255) + 1;
    const color3 = Math.floor(Math.random() * 255) + 1;
    newDivColor.style.backgroundColor =
      'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';

    document.querySelector('#color-palette').appendChild(newDivColor);
  }
}

function creatBoard(number) {
  let boardMain = document.querySelector('#pixel-board');
  boardMain.style.width = number * 42 + 'px';
  for (let index = 0; index < number ** 2; index += 1) {
    let newDivEmpty = document.createElement('div');
    newDivEmpty.className = 'pixel';
    document.querySelector('#pixel-board').appendChild(newDivEmpty);
  }
}

function addClassToBlack() {
  document.querySelector('.color').classList.add('selected');
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

function generateBoard() {
  let inputNumber = document.getElementById('board-size');
  let buttonGenerate = document.getElementById('generate-board');

  buttonGenerate.addEventListener('click', function () {
    let receiveNumber = inputNumber.value;
    console.log(receiveNumber);
    if (receiveNumber === '') {
      alert('Board inválido!');
    }
    if (receiveNumber > 50) {
      receiveNumber = 50;
    }
    if (receiveNumber < 5) {
      receiveNumber = 5;
    }
    let removeDiv = document.querySelector('#pixel-board').children;
    for (let index = 0; index < removeDiv.length; index += 1) {
      removeDiv[index].classList.remove('pixel');
    }

    let boardMain = document.querySelector('#pixel-board');
    boardMain.style.width = receiveNumber * 42 + 'px';
    for (let index = 0; index < receiveNumber ** 2; index += 1) {
      let newDivEmpty = document.createElement('div');
      newDivEmpty.className = 'pixel';

      document.querySelector('#pixel-board').appendChild(newDivEmpty);
    }
  });
}

blackDiv ()
divColor();
creatBoard(5);
addClassToBlack();
turnToSelect();
fillPixel();
clearAll();
generateBoard();
