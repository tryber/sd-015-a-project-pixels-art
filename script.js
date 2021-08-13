const div = document.createElement("div");
div.className = 'pixel';

let divs = 5;

let fatherDiv = document.getElementById("pixel-board");

for (let i = 0; i < divs; i += 1){
    for (let index = 0; index < divs; index += 1){  
        let div = document.createElement('div');
        div.className = 'pixel';
        fatherDiv.appendChild(div);
    }
    let quebra = document.createElement('br');
    fatherDiv.appendChild(quebra);
}

const black = document.getElementById("black")
const blue = document.getElementById("blue")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")

function changeClass(event) {
    let elementClass = document.querySelector(".selected")
    elementClass.classList.remove("selected")
    event.target.classList.add("selected")
    
}

black.addEventListener("click", changeClass)
blue.addEventListener("click", changeClass)
red.addEventListener("click", changeClass)
yellow.addEventListener("click", changeClass)

let pixel = document.getElementById("pixel-board")

pixel.addEventListener("click", changeColor)

function changeColor(event) {
    let selectedColor = document.getElementsByClassName("selected")[0]
    event.target.style.backgroundColor = selectedColor.id
}




        
    
