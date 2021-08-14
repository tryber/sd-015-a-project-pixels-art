let size = 5;
const board = document.querySelector('#pixel-board');
const pixelPalett = document.querySelector('#color-palette');
const colors = document.querySelectorAll('.color');
const body = document.querySelector('#body');
const generateBoard = document.querySelector('#generate-board');

function createLines(size) {
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
createLines(size);

const boardPixels = document.getElementsByClassName('board-pixels');

window.onload = function() {
  document.querySelector('.color').classList.add('selected');
}

pixelPalett.addEventListener('click', function(event) {
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
})

const pixels = document.querySelectorAll('.pixel');
pixels.forEach(function(element) {
  element.addEventListener('click', function(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  })
})

const buttonID = document.querySelector('#clear-board');
function clearButton() {
  let createButton = document.createElement('button');
  createButton.innerText = 'Limpar';
  buttonID.appendChild(createButton);  
}
clearButton();

function clearBoard() {
  
}

function createInput() {
  let input = document.createElement('input');
  input.id = 'board-size';
  generateBoard.appendChild(input);
}