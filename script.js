window.onload = function init() {

  const size = 5;
  fillPixelboard();
}

  function fillPixelboard() {

    let pixelboard = document.querySelector("#pixel-board");

    for (let i = 0; i < size ; i += 1 ) {
      for (let j = 0; j < size ; j += 1 ) {

        let pixel = createPixel("pixel");
        pixelboard.appendChild(pixel);
        document.getElementById("pixel-board").style.width =(42*size)+'px';
    }


  }

}

let size = 5;
function deletePixelBoard(){

  let si = size * size;
  console.log(si);
  let pixelboard = document.querySelector("#pixel-board");
  let pix = document.querySelectorAll(".pixel");
  for (let i = 0; i < si ; i += 1 ) {
    pixelboard.removeChild(pix[i]);
}
}

function createPixel(className) {

  let pixel = document.createElement("div");
  pixel.className = className;
  pixel.addEventListener("click", setColor);
  return pixel;
}
let pClick = document.getElementsByClassName("color");

pClick[0].classList.add("selected");

for(let index = 0 ; index < pClick.length ; index +=1 ) {
   pClick[index].addEventListener("click",  getColor);


}

function getColor(evento){

  for(let index = 0 ; index < pClick.length; index += 1){
    pClick[index].classList.remove("selected");
  }

  evento.target.classList.add("selected");
  return evento.id;

}
function setColor(evento){

  let set = document.querySelectorAll(".selected");

 evento.target.id = set[0].id

}
let button = document.getElementById("clear-board");

button.addEventListener("click", clear);

function clear(evento){

  let pix = document.querySelectorAll(".pixel");

  for(let index =0 ;index < pix.length; index += 1  ){
    pix[index].id = "#white" 
  }

}

let expected = document.getElementById("generate-board")

  expected.addEventListener("click",changeBoard);

function changeBoard(even){

  let input = document.getElementById("board-size");
  let conp = parseInt(input.value);

  if (conp < 5 || conp > 50 ){
    alert("Board inválido!");

    if (conp >50){

      deletePixelBoard();
      size = 50;
      fillPixelboard();
      }
  }else if(conp === 0) {

    alert("Board inválido!");

  }else {

  deletePixelBoard();
  size = parseInt(input.value);
  console.log(size)
  fillPixelboard();
  }
}