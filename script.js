// Inícia a página com um quadro de pixels
function createPixel(number) { 

    const div = document.createElement("div");
    div.className = 'pixel';

    let fatherDiv = document.getElementById("pixel-board");

    for (let i = 0; i < number; i += 1){
        for (let index = 0; index < number; index += 1){  
            let div = document.createElement('div');
            div.className = 'pixel';
            fatherDiv.appendChild(div);
        }
        let quebra = document.createElement('br');
        fatherDiv.appendChild(quebra);
    }
}

createPixel(5)

//Muda a classe para a paleta de cor que eu clicar
function paleta(){

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

}

paleta()

//Função para conseguir pintar o quadro de pixels com a cor que eu quero e também para pinta-las de branco quando eu clicar no button "limpar"
function paintAndClean () {

const pixelsNumber = document.getElementsByClassName("pixel")
const button = document.getElementById("clear-board")

for (let i = 0; i < pixelsNumber.length; i += 1) {
    pixelsNumber[i].addEventListener("click", function(event) {
        let selectedColor = document.getElementsByClassName("selected")[0]
        event.target.style.backgroundColor = selectedColor.id
    })
}

button.addEventListener("click", function() {
    for (let i = 0; i < pixelsNumber.length; i += 1) {
        let clean = document.querySelectorAll(".pixel")[i]
        clean.style.backgroundColor = "white"
        }
})
}

paintAndClean()     

function cleanPixels () {
    let fatherPixels = document.getElementById("pixel-board")
    while (fatherPixels.hasChildNodes()) {  
        fatherPixels.removeChild(fatherPixels.firstChild)
    }
}

const button = document.getElementById("generate-board")
button.addEventListener("click", function() {
    cleanPixels()
    const input = document.getElementById("board-size")
    if (input.value === "") {
        alert('Board inválido!')
    } else if (input.value >= 5 && input.value <= 50){
        createPixel(input.value)
    } else if (input.value < 5) {
        createPixel(5)
    } else if (input.value > 50) {
        createPixel(50)
    } 
    paintAndClean()
})
