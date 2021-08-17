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
  
    }
    getIdSection.appendChild(createLine);
  }

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


// function getColor(event) {
//   for (let index = 0; index < array.length; index +=1){
//     console.log(array[index]);
      
//       array[index].classList.remove('selected')
    
//   }
//   event.target.classList.add("selected")
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
