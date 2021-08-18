// CREATE N LINES WITH N BLOCKS EACH

function blockMaker(sideSize) {
  let board = document.getElementById('pixel-board');
  for (index = 1; index <= sideSize; index += 1) {
    let line = document.createElement('div');
    line.style.height = '42px';
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
  let pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function(event) {
      if (event.target.className === 'pixel') {
        let selectedColor = document.getElementsByClassName('color selected')[0];
        event.target.style.backgroundColor = selectedColor.style.backgroundColor;
      }
    // }
  })
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

// INPUT TO CHOOSE A BOARD SIZE

function chooseTheSize() {
  const pixelsBoard = document.getElementById('pixel-board');
  if (pixelsBoard.children.length > 0) {
    for (let index = pixelsBoard.children.length - 1; index >= 0; index -= 1){
      pixelsBoard.removeChild(pixelsBoard.lastChild);
    }
  }
  const chosenSize = document.getElementById('board-size').value;
  if (chosenSize === '') {
    window.alert('Board inválido!');
  } else if (chosenSize < 5) {
    blockMaker(5);
  } else if (chosenSize > 50) {
  blockMaker(50);
  } else {
    blockMaker(chosenSize);
  }
}

function chooseTheSizeButton() {
  const sizeButton = document.getElementById('generate-board');
  sizeButton.addEventListener('click', chooseTheSize);
}

chooseTheSizeButton();

// RANDOM COLORS

function ramdomColors() {
  const color1 = document.getElementById('c1');
  color1.style.backgroundColor = 'black';
  const color2 = document.getElementById('c2');
  color2.style.backgroundColor = 'rgb(' + (Math.random() * 255) + ', ' + (Math.random() * 255) +', ' + (Math.random() * 255) + ')';
  const color3 = document.getElementById('c3');
  color3.style.backgroundColor = 'rgb(' + (Math.random() * 255) + ', ' + (Math.random() * 255) +', ' + (Math.random() * 255) + ')';
  const color4 = document.getElementById('c4');
  color4.style.backgroundColor = 'rgb(' + (Math.random() * 255) + ', ' + (Math.random() * 255) +', ' + (Math.random() * 255) + ')';
}

ramdomColors();