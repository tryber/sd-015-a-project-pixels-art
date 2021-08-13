window.onload = function(){
    document.querySelector('.color').classList.add('selected')
}

const colorOne = document.getElementById("first");
const colorTwo = document.getElementById("second");
const colorThree = document.getElementById("third");
const colorFour = document.getElementById("fourth");
const pixelBoard = document.getElementById("pixel-board");

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
    const colorSelected = document.querySelector(".selected").style.backgroundColor;
    event.target.style.backgroundColor = colorSelected;
}