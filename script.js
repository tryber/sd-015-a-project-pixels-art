window.onload = function(){
    document.querySelector('.color').classList.add('selected')
}

const colorOne = document.getElementById("black");
const colorTwo = document.getElementById("green");
const colorThree = document.getElementById("red");
const colorFour = document.getElementById("blue");
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