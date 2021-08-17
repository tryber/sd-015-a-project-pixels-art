window.onload = function(){
  setupPalette();
  createBox();
};

function setupPalette() {
  const paletteColors = document.getElementsByClassName("color");
  const nameColors = ["black", "blue", "purple", "yellow"];
  for (let index = 0; index < paletteColors.length; index +=1){
      paletteColors[index].style.backgroundColor = nameColors[index];
    }
  paletteColors[0].classList.add("selected");
  
}

//criar uma função para criar caixas de forma dinamica; 

function createBox() {

  let getIdSection = document.getElementById("pixel-board")

  for (let indexLines = 1; indexLines <= 5; indexLines++) {
    let createLine = document.createElement("div");
    createLine.className = "line";
    
    for (let index = 1; index <= 5; index++) {
      let emptyBox = document.createElement("div");
      emptyBox.className = "pixel";
      createLine.appendChild(emptyBox);
       emptyBox.addEventListener("click", paintPixel);
    }
    getIdSection.appendChild(createLine);
  }

}

// selecionar a cor da paleta, colocar no quadro de pixel selecionado, e ao mesmo tempo remover a classe "selected" da cor anterior.

function addClassSelectedAndRemove(evento) {
     
   document.getElementsByClassName("selected")[0].classList.remove("selected");
   evento.target.classList.add("selected");
}

let idColorPalette = document.getElementById("color-palette");
idColorPalette.addEventListener("click", addClassSelectedAndRemove);

// ao clicar na paleta de cores, a cor selecionada deve ser adionada no quadro de pixel em branco selecionado. 

function paintPixel(evento) {
  let reciveColorSelected = document.getElementsByClassName("selected")[0];
  console.log(reciveColorSelected);
 console.log(evento.target.style.backgroundColor);
 console.log(reciveColorSelected.style.backgroundColor);
  evento.target.style.backgroundColor = reciveColorSelected.style.backgroundColor;
}






// function createBox() {

//   let section = document.getElementById("pixel-board")
//   let blockdiv =  null;

//   for (let index = 1; index <= 25; index++) {
  
//   let emptyBox = document.createElement("div");
//     emptyBox.id = "box-" + index;
//     emptyBox.className = "pixel";
  
//     if(5 % index === 0 ){
//      blockdiv =  document.createElement("div");
//       section.appendChild(blockdiv);
//     }
//   else{
//    blockdiv.appendChild(emptyBox);
//   }
//   }
// }


//  //const color = 0;
// function reciveColor(event) {
//   let styleColor = document.getElementsByClassName("selected")
//   const cor = window.getComputedStyle(styleColor).getPropertyValue("background-color");
//   event.target.style.backgroundColor = cor;
// }

// function clearColorButton() {
  // document.getElementById("button").style.backgroundColor = "white";
// }

// const clickColor = document.getElementById("color-palette");

// const blackColor = document.getElementById("black")

// function removeClassSelected(event){
 
//   const colorSelected = document.getElementsByClassName("color")
//    colorSelected.classList.remove('selected')
//     event.target.classList.add("selected")


// }
// let arrayColor = document.getElementsByClassName("color");
//  for(let index = 0; index <= arrayColor; index =+1) {
//   arrayColor[index].addEventListener('click', removeClassSelected)

// }
