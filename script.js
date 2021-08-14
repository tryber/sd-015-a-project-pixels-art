let size = 5;
let board = document.querySelector('#pixel-board');
let pixelPalett = document.querySelector('#color-palette');
let colors = document.querySelectorAll('.color');
let boardPixels = document.querySelectorAll('.board-pixels');

function createLine(size) {
  for (let line = 1; line <= size; line += 1) {
    let createBoardLines = document.createElement('div');
    createBoardLines.className = 'board-pixels';
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
  document.querySelector('.color').classList.add('selected');
}

pixelPalett.addEventListener('click', function(event) {
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
})


board.addEventListener('click', function(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;

})