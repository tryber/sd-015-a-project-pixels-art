function createPalette() {
  let arrayColors = ['black', 'red', 'blue', 'purple'];
  let sectionPalette = document.getElementById('color-palette');

  for (color of arrayColors) {
    let box = document.createElement('div');
    box.className = 'color';
    box.style.backgroundColor = color;
    
    if (color === 'black') {
      box.classList.add('selected');
    }
    sectionPalette.appendChild(box);
  }
}
createPalette();

const boardSection = document.getElementById('pixel-board');
const n = 5;

function createLines() {
  for (let index = 0; index < n; index += 1) {
    const pixelBox = document.createElement('div');
    boardSection.appendChild(pixelBox);
    pixelBox.className = 'pixel';
    pixelBox.style.backgroundColor = 'white';
  }
}
function createColumns() {
  for (let index = 0; index < n; index += 1) {
    createLines();
  }
}
createColumns();

function clickColor() {
  const palette = document.querySelectorAll('.color');

  for (let index2 = 0; index2 < palette.length; index2 += 1) {
    palette[index2].addEventListener('click', function (event){
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    });
  }
}
clickColor();

function colorPixels() {
  let pixels = document.querySelectorAll('.pixel');

  for (let index3 = 0; index3 < pixels.length; index3 +=1) {
    pixels[index3].addEventListener('click', function (event){
      event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
}
colorPixels();