let selected = document.querySelector(".color");
selected.classList.add("selected");

let pegacor = document.querySelectorAll(".color");
for (let i = 0; i < pegacor.length; i += 1){
    pegacor[i].addEventListener("click", takecor);
};
function takecor(event){
    let corselecionada = document.querySelector(".selected");
    corselecionada.classList.remove("selected");
    event.target.classList.add("selected");
};



const colors = document.getElementsByClassName('pixel');

for (let index = 0; index < colors.length; index += 1) {
colors[index].addEventListener('click', changeColor)
}

function changeColor (event) {
let getColor = document.querySelector('.selected');
let background1 = window.getComputedStyle(getColor).getPropertyValue('background-color');
event.target.style.backgroundColor = background1;
} 

let botao = document.getElementById("clear-board");
botao.addEventListener("click", colorwhite);
function colorwhite (event1){
    location.reload();
}
