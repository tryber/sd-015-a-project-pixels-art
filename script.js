
let pixelBoard = document.getElementById("pixel-board"); 
let navPalette = document.getElementById('color-palette');
let colorList = document.querySelectorAll('.color');
let clearBoard = document.getElementById("clear-board");
let selected =document.querySelector(".selected");

let firstColor = document.querySelector("#firstColor")
  firstColor.style.backgroundColor = "black"

  let secondColor = document.querySelector("#secondColor");
  secondColor.style.backgroundColor = "deepskyblue"

  let thirdColor = document.querySelector("#thirdColor");
  thirdColor.style.backgroundColor = "darkred"

  let fourthColor = document.querySelector("#fourthColor");
  fourthColor.style.backgroundColor = "chocolate"
  

/* Requisito 04 */
/* 1-Selecionei elemento pixel-board/ 2-Denominei ao elemento uma classe/3-inclui ele de fato na div  *  */
/* Requisito 05 1- Depois fiz um for para criar 25 caixas de pixels (comecei do 1)*/


navPalette.addEventListener('click', selectChange);
/* selected.addEventListener("click",selectedColor);  */

for(i =1; i <= 25 ; i += 1){
let div = document.createElement("div"); 
div.className = "pixel"; 
pixelBoard.appendChild(div); 
div.addEventListener("click",selectedColor)
}

/* Requisito 07 */
    
      function removeSelected() {
  for (let i = 0; i < colorList.length; i += 1) {
    colorList[i].classList.remove('selected');
  }
}

function selectChange(event) {
  removeSelected();
  event.target.classList.add('selected');
}

 function selectedColor(event) {
  event.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor
  
}
 