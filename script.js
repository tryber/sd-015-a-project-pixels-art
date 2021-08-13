function createPalette () {  
  let divPalette = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    let palette = document.createElement('div');
    if (index == 0) {
      palette.className = 'color selected';
      palette.id = 'black';
      palette.style.backgroundColor = 'black';
    } else if (index == 1) {
      palette.className = 'color';
      palette.id = 'red';
      palette.style.backgroundColor = 'red';
    } else if (index == 2) {
      palette.className = 'color';
      palette.id = 'blue';
      palette.style.backgroundColor = 'blue';
    } else if (index == 3) {
      palette.className = 'color';
      palette.id = 'yellow';
      palette.style.backgroundColor = 'yellow';
    } 
    divPalette.appendChild(palette);   
  }
}

createPalette();


function createPixels (width, height) {  
  let board = document.getElementById('pixel-board');
  for (let index = 0; index < width*height; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.id = (width*height) - index;
    pixel.style.backgroundColor = 'white';
    board.appendChild(pixel);
  }
  console.log(board);
}

createPixels(5,5);

function chooseColor () {
  let cor = document.querySelectorAll('.color');  

  for(let index = 0; index < cor.length; index += 1) {
    cor[index].addEventListener('click', selectedColor);
  } 

  function selectedColor() {
    let cores = document.querySelectorAll('.color');
    if (event.target.className == 'color selected') {
      alert('ja esta selecionada');
    } else {
      for (let index = 0; index < cores.length; index += 1) {
        if (cores[index].className == 'color selected') {
          cores[index].className = 'color';
        }
      }
      event.target.className += ' selected';
      alert('cor escolhida');
    } 
  }
}

chooseColor();
