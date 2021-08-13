window.onload = function(){
  let base = 5;
  let height = 5;
 
  fillPixelboard();
  
  function fillPixelboard() {
    
    let pixelboard = document.querySelector("#pixel-board")
    
    for (let i = 0; i < base ; i += 1 ){
      for (let j = 0; j < height ; j += 1 ){
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
}