window.onload = function (){
let colorPalette = document.querySelectorAll('.color');
let colorsArray = ['black', 'red', 'green', 'blue'];
//color pallete
function createPalette() {
    for (let i = 0; i <  4; i += 1) {    
    colorPalette[i].style.backgroundColor = colorsArray[i];
   }
}
createPalette();

// Create Pixel-Board

function createBoard() {
    let pixelBoard = document.createElement('section');
    pixelBoard.id = 'pixel-board';
    document.body.appendChild(pixelBoard);
 
    
    for (i = 0 ; i < 5; i += 1) {
        let line = document.createElement('div');  
        line.className = 'line'      
        pixelBoard.appendChild(line);        
            for (x = 0 ; x < 5; x += 1){
            let pixelBlock = document.createElement('div');
            pixelBlock.className = 'pixel';
            pixelBlock.style.backgroundColor = 'white';
            line.appendChild(pixelBlock);
        }
    }
}
createBoard();

//add class 'selected' in element color black
colorPalette[0].classList.add('selected');

//select color
function selectedColor(event) {
    let selected = document.querySelector('.selected');
    let clicked = event.target
        selected.classList.remove('selected');
        clicked.classList.add('selected');
}

function clickSelect (){
    for (let x = 0; x < colorPalette.length; x += 1){
    colorPalette[x].addEventListener('click', selectedColor);
    }
}
clickSelect();

// function clickSelect (){
//     for(let x in colorPalette){
//     colorPalette[x].addEventListener('click', selectedColor);
//     }
// }
// clickSelect();
function useColor (event) {
    let selectedColor = document.querySelector('.selected').style.backgroundColor
    let click = event.target
    click.style.backgroundColor = selectedColor;
}

function pixelColor () {
    let pixel = document.querySelectorAll('.pixel')
    for (x = 0 ; x < pixel.length; x += 1)
    pixel[x].addEventListener('click', useColor);
}
pixelColor();






}




