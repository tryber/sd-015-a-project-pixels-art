
window.onload = function(){
  let colorClass = document.querySelectorAll('.color')
  let arrayColorsPalletes = ['black', 'red', 'green', 'blue'];
  colorClass[0].classList.add('selected')

  function createPaletteColors() {
    for (let i = 0; i <  arrayColorsPalletes.length; i += 1) {
    colorClass[i].style.backgroundColor = arrayColorsPalletes[i];
   }
  }
createPaletteColors();



function createBoard() {
  let pixelBoardSection = document.createElement('section');
  pixelBoardSection.id = 'pixel-board';
  document.body.appendChild(pixelBoardSection);

  let lines = 5;
  let column = 5;

  for (i = 0 ; i < lines; i += 1) {
    let line = document.createElement('div');
    pixelBoardSection.appendChild(line);
    for (x = 0 ; x < column; x += 1){
      let pixelBlockDiv = document.createElement('div');
      pixelBlockDiv.className = 'pixel';
      pixelBlockDiv.style.backgroundColor = 'white';
      line.appendChild(pixelBlockDiv);
      }
    }
  }createBoard();

function selectColorClick(){
      for (let x = 0; x < colorClass.length; x += 1){
      colorClass[x].addEventListener('click', selectedColorClass);
      }
    }
function selectedColorClass(event) {
  let clicked = event.target
  let selectedClass = document.querySelector('.selected');
    selectedClass.classList.remove('selected');
    clicked.classList.add('selected');
    
}selectColorClick();


function selectedColorPixelClick(){
  let pixel = document.querySelectorAll('.pixel')
  for(let x = 0; x < pixel.length; x += 1){
    pixel[x].addEventListener('click', changeBackgroundPixel)
  }}

function changeBackgroundPixel(event){
  let selectedClass2 = document.querySelector('.selected').style.backgroundColor;
  let clicked2 = event.target
  clicked2.style.backgroundColor = selectedClass2
 
}
selectedColorPixelClick()
}

