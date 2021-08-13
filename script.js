// ex 6

const corInicial = document.querySelector(".color");
corInicial.classList += " selected";

//ex 7

let tdColor = document.querySelectorAll(".color");
for (let element of tdColor){
  element.addEventListener("click", changeSelected);
}
function changeSelected(event) {
  let removeClass = document.querySelector(".selected")
  removeClass.classList.remove("selected");
  event.target.className = "color selected";
}

//ex 8 
let paint = document.querySelectorAll(".pixel");

for (let element of paint){
  element.addEventListener("click", changeColor);
}

function changeColor(event) {
  let colorSelected = document.getElementsByClassName("selected")[0];
  let colorPaint = getComputedStyle(colorSelected);
  event.target.style.backgroundColor = colorPaint.backgroundColor
}

//ex 9

let clear = document.getElementById("clear-board");
clear.addEventListener("click", limparQuadro);

function limparQuadro() {
  for (element of paint) {
    element.style.backgroundColor = "white"
  }
}
