function createPalette (color) {
  let palette = document.createElement('div');
  palette.className = 'color';
  palette.id = color;
  palette.style.backgroundColor = color;
  let divPalette = document.getElementById('color-palette');
  divPalette.appendChild(palette);
}

createPalette('black');
createPalette('red');
createPalette('blue');
createPalette('green');

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
