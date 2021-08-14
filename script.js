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