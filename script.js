
function getColor(event) {
  let array = document.getElementsByClassName("color");
  for (let index = 0; index < array.length; index +=1){
    console.log(array[index]);
      
      array[index].classList.remove('selected')
    
  }
  event.target.classList.add("selected")
}
 //const color = 0;
function reciveColor(event) {
  let styleColor = document.getElementsByClassName("selected")
  const cor = window.getComputedStyle(styleColor).getPropertyValue("background-color");
  event.target.style.backgroundColor = cor;
}

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
