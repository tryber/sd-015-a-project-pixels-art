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
  event.target.className = "color selected"
}