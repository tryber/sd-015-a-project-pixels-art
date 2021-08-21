// construir o quadro de pixels
const pixelBoard = document.querySelector('#pixel-board');

function buildBoard (lines) {
  for (let i = 0; i < lines; i += 1) {
    let lineBoard = document.createElement('div');
    lineBoard.classList.add('line-board');

    for (let iPx = 0; iPx < lines; iPx += 1) {
      let onePixel = document.createElement('div');
      onePixel.classList.add('pixel');

      lineBoard.appendChild(onePixel);
    }

    pixelBoard.appendChild(lineBoard);
  }
}

buildBoard(5);
//seleciona cor
let selectedColor = document.querySelectorAll('.color');

function selectColor() {
  for (let color of selectedColor) {
    color.addEventListener('click', function() {
      for (let color of selectedColor){
        color.classList.remove('selected');
      } 
      color.classList.add('selected');
    });
  }
}
selectColor();
// add cor selecionada ao pixel
let pixels = document.querySelectorAll('.pixel');

function paintPixel() {
  for (let pixel of pixels) {
    pixel.addEventListener('click', function(){
      let actualSelected = document.querySelector('.selected');
      pixel.classList.remove('pink', 'blue', 'green', 'black');
  
      if (actualSelected === selectedColor[0]){
        pixel.classList.add('black');
      } else if (actualSelected === selectedColor[1]){
        pixel.classList.add('pink');
      } else if (actualSelected === selectedColor[2]){
        pixel.classList.add('blue');
      } else if (actualSelected === selectedColor[3]){
        pixel.classList.add('green');
      }
    });
  }
}
paintPixel();

// botão limpar
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

function clearBoard() {
  for (let pixel of pixels) {
    pixel.classList.remove('black', 'pink', 'blue', 'green');
  }
}
// escolher tamanho do quadrado
const btnGenerator = document.querySelector('#generate-board');
const boardSize = document.querySelector('#board-size');
btnGenerator.addEventListener('click', generateBoard);

function generateBoard() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value > 50) {
    pixelBoard.innerHTML = "";
    buildBoard(50);  
  } else if (boardSize.value < 5) {
    pixelBoard.innerHTML = "";
    buildBoard(5);  
  } else {
    pixelBoard.innerHTML = "";
    buildBoard(boardSize.value);  
  }  
}