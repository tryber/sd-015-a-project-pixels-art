window.onload = function() {
  document.querySelector('.color').classList.add('selected')
}

const divBoard = document.querySelector('#pixel-board');
const divPalette = document.querySelector('#color-palette');



function myPalette(){
  
  const colors = ['black','blue', 'blueviolet', 'hotpink']
  for (let i= 0; i < colors.length; i += 1){
  const colorsPalette= colors[i];
  const  pixelPalette = document.createElement('div');
    pixelPalette.classList.add('color');  
    pixelPalette.style.backgroundColor = colorsPalette;
    divPalette.appendChild(pixelPalette);
    
  }
}

myPalette ();

function pixelBoard(){
  
  for (i=0; i < 5; i += 1){
  for (i2 =0; i2 < 5; i2 += 1){
  const pixel = document.createElement('div')
  pixel.classList.add('pixel')
  pixel.style.backgroundColor = 'white';
  divBoard.appendChild(pixel);
   }
 }
}
pixelBoard();


function changeSelected(event){
let selectColor = document.querySelector('.selected');
selectColor.classList.remove('selected');
event.target.classList.add('selected');
}

divPalette.addEventListener('click', changeSelected); 

function fillColor(event) {
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
divBoard.addEventListener('click', fillColor);