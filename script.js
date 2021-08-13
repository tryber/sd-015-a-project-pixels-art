function divColor() {
  let color = ['black', 'red', 'blue', 'yellow'];

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
    .querySelector('#color-palette')
    .firstElementChild.classList.add('selected');
}
divColor();
creatBoard();
addClassToBlack();
