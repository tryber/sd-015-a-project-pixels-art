window.onload = function(){
    document.querySelector('.color').classList.add('selected')
}

let colorOne = document.getElementById("first");
let colorTwo = document.getElementById("second");
let colorThree = document.getElementById("third");
let colorFour = document.getElementById("fourth");
let pixelBoard = document.getElementById("pixel-board");
let eraseButton = document.getElementById("clear-board")
let getSquares = document.querySelectorAll(".pixel");
let setNewColor = 'white';


colorOne.style.backgroundColor = "black";
colorTwo.style.backgroundColor = "green";
colorThree.style.backgroundColor = "red";
colorFour.style.backgroundColor = "blue";

colorOne.addEventListener('click', addSelectedClass);
colorTwo.addEventListener('click', addSelectedClass);
colorThree.addEventListener('click', addSelectedClass);
colorFour.addEventListener('click', addSelectedClass);
pixelBoard.addEventListener('click', changeColor);


function addSelectedClass(event) {
    let checkSelected = document.querySelector('.selected');
    checkSelected.classList.remove('selected');
    event.target.classList.add('selected');
   }

function changeColor(event) {
    let colorSelected = document.querySelector(".selected").style.backgroundColor;
    event.target.style.backgroundColor = colorSelected;
}

eraseButton.addEventListener('click', function(){
   for (let i = 0; i < getSquares.length; i += 1){
       getSquares[i].style.backgroundColor = setNewColor;
   }
});