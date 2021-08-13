window.onload = function() {
  const base = 5;
  const height = 5;
 
  fillPixelboard();
  
  function fillPixelboard() {
    
    let pixelboard = document.querySelector("#pixel-board")
    
    for (let i = 0; i < base ; i += 1 ) {
      for (let j = 0; j < height ; j += 1 ) {
        let pixel = createPixel("pixel");
        pixelboard.appendChild(pixel);
    }
  }

}

function createPixel(className) {
  
  let pixel = document.createElement("div");
  pixel.className = className;
  return pixel;
}

let pClick = document.getElementsByClassName("color");

pClick[0].classList.add("selected");

for(let index = 0 ; index < pClick.length ; index +=1 ) {
   pClick[index].addEventListener("click", mudaCor);
  
  
}

function mudaCor(evento){
 
  for(let index = 0 ; index < pClick.length; index += 1){
    pClick[index].classList.remove("selected");
  }
  evento.target.classList.add("selected");
 
}

}
