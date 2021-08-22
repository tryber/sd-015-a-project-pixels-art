function pixelBoard(){  
    
    //Cria PixelColums
    for(let index = 0; index <=4; index +=1 ){ 
    let pixelColun = document.createElement("div");
    let BoardPixels = document.querySelector("#pixel-board");
            pixelColun.className = "colum"
        BoardPixels.appendChild(pixelColun);
        //Cria PixelsLine
        for(let index = 0; index <=4; index +=1 ){
            let pixelsLine = document.createElement("div")
        pixelsLine.className="pixel";
        pixelColun.appendChild(pixelsLine); 
        }
    }
}
pixelBoard();


function pixelSelect(){ 
    let colorPalette = document.querySelector(".colors-contain");
    
    colorPalette.addEventListener("click", function(evento){
        let selected = document.querySelector(".selected");
      selected.classList.remove("selected");
      evento.target.classList.add("selected")
    })
}    
pixelSelect()