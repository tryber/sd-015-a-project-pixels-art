// CREATE N LINES WITH N BLOCKS EACH

function blockMaker(sideSize) {
  let board = document.getElementById('pixel-board');
  for (index = 1; index <= sideSize; index += 1) {
    let line = document.createElement('div');
    for (index_2 = 1; index_2 <= sideSize; index_2 += 1) {
      let block = document.createElement('div');
      block.className = 'pixel';
      block.style.width = '40px';
      block.style.height = '40px';
      block.style.border = '1px solid black';
      block.style.backgroundColor = 'rgb(255, 255, 255)';
      line.appendChild(block);
    }
    board.appendChild(line);

  }
}

let sideSize = 5;
blockMaker(sideSize);

//GRAB THE COLOR FROM PALETTE

function getColor() {
  let pallet = document.getElementById('color-palette').children;
  for (index = 0; index < pallet.length -1; index += 1) {
    let color = pallet[index];
    color.addEventListener('click', function(event) {
      if (event.target.className !== 'color selected') {
        currentColor = document.getElementsByClassName('color selected')[0];
        currentColor.className = 'color';
        event.target.className = 'color selected';
      }
    })
  }
}

getColor();

//PAINT THE BOARD

function painter() {
  let pixelBoard = document.getElementsByClassName('pixel');
  for (pixel of pixelBoard) {
    pixel.addEventListener('click', function(event) {
      let selectedColor = document.getElementsByClassName('color selected')[0];
      let color = selectedColor.style.backgroundColor;
      event.target.style.backgroundColor = selectedColor.innerHTML;
    })
  }
}

painter();

//RESET BUTTON

function clear() {
  resetButton = document.getElementById('clear-board');
  resetButton.addEventListener('click', function() {
    pixels = document.querySelectorAll('.pixel');
    for (pixel of pixels) {
      pixel.style.backgroundColor = 'white';
    }
  })
}

clear();
