window.onload = colorblack

function colorblack() {
    let element = document.querySelector(".color")
        element.classList.add("selected");
        let selectiontest = document.querySelector(".selected")
        selectiontest.style.backgroundColor = "black";
        return colorblack
}

let buttonBlack = document.getElementsByClassName ('color')[0];
let buttonRed = document.getElementsByClassName ('color')[1];
let buttonGreen = document.getElementsByClassName ('color')[2];
let buttonBrown = document.getElementsByClassName ('color')[3];

buttonBlack.addEventListener('click', clickBlack);
buttonRed.addEventListener('click', clickRed);
buttonGreen.addEventListener('click', clickGreen);
buttonBrown.addEventListener('click', clickBrown);


function clickBlack() {
    buttonBlack.className = 'color selected';
    buttonRed.className = 'color';
    buttonGreen.className = 'color';
    buttonBrown.className = 'color';
    let selectiontest = document.querySelector(".selected")
    selectiontest.style.backgroundColor = "black";

}
function clickRed() {
    buttonBlack.className = 'color';
    buttonRed.className = 'color selected';
    buttonGreen.className = 'color';
    buttonBrown.className = 'color';
    let selectiontest = document.querySelector(".selected")
    selectiontest.style.backgroundColor = "red";
}
function clickGreen() {
    buttonBlack.className = 'color';
    buttonRed.className = 'color';
    buttonGreen.className = 'color selected';
    buttonBrown.className = 'color';
    let selectiontest = document.querySelector(".selected")
    selectiontest.style.backgroundColor = "green";


}
function clickBrown() {
    buttonBlack.className = 'color';
    buttonRed.className = 'color';
    buttonGreen.className = 'color';
    buttonBrown.className = 'color selected';
    let selectiontest = document.querySelector(".selected")
    selectiontest.style.backgroundColor = "brown";
}



function createTable() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.id ="line";
    pixelBoard.appendChild(pixelLine);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixelColumn = document.createElement('div');
      pixelLine.appendChild(pixelColumn);
      pixelColumn.className = 'pixel';
      pixelColumn.addEventListener('click', fillPixel);
      function fillPixel(event) {
        const selected = document.querySelector('.selected');
        const color = selected.style.backgroundColor;
        event.target.style.backgroundColor = color;
      }
    }
  }
}

createTable();
let buttonClear = document.getElementById("clear-board");
buttonClear.addEventListener("click", cleanPixel);
function cleanPixel(){
  for(i=0; i<25;i++){
    let colorwhite = document.querySelectorAll(".pixel")[i]
    colorwhite.style.backgroundColor = "white";
  }