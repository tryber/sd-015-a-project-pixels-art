let size = 5;
let board = document.querySelector('#pixel-board');
let pixelPalett = document.querySelector('#color-palette');

function createLine(size) {
  for (let line = 1; line <= size; line += 1) {
    let createBoardLines = document.createElement('div');
    board.appendChild(createBoardLines);
    for (let column = 1; column <= size; column += 1) {
      let createBoard = document.createElement('div');
      createBoard.className = 'pixel';
      createBoard.style.width = '40px';
      createBoard.style.height = '40px';
      createBoard.style.border = '1px solid black';
      createBoardLines.appendChild(createBoard);
    }
  }
} 
createLine(size);


window.onload = function() {
  let black = document.querySelector('.color').classList.add('selected');
}