
window.onload = function(){
  let color = document.querySelectorAll('.color')
  let initialColor = color[0].classList.add('selected')
  let paletteColors = ['black', 'red', 'green', 'blue'];

  function createPaletteColors() {
    for (let i = 0; i <  4; i += 1) {
    color[i].style.backgroundColor = paletteColors[i];
   }
}
createPaletteColors();
const section = document.querySelector('section')

function createBoard() {
  let boardPixel = document.createElement('section');
  boardPixel.id = 'pixel-board';
  document.body.appendChild(boardPixel);


  for (i = 0 ; i < 5; i += 1) {
      let line = document.createElement('div');
      boardPixel.appendChild(line);
      for (x = 0 ; x < 5; x += 1){
        let pixelBlock = document.createElement('div');
        pixelBlock.className = 'pixel';
        pixelBlock.style.backgroundColor = 'white';
        line.appendChild(pixelBlock);
      }
  }
}
createBoard();


// let colorBlack = paletteColor[0]
// colorBlack.className = 'selected'
}