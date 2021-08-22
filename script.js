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
        pixelsLine.style.background = "white";
        pixelColun.appendChild(pixelsLine); 
        }
    }
}
pixelBoard();


function colorPalette(){    
    let colors = document.querySelectorAll(".color");
    
    colors[0].style.backgroundColor = "black"
    colors[1].style.backgroundColor = "blue"
    colors[2].style.backgroundColor = "magenta"
    colors[3].style.backgroundColor = "green"
    
    
}
colorPalette()

function pixelSelect(){ 
    let colorPalette = document.getElementsByClassName("color");
    for (let index=0; index<colorPalette.length;index+=1){
    colorPalette[index].addEventListener("click", function(evento){
        let selected = document.querySelector(".selected");
      selected.classList.remove("selected");
      evento.target.classList.add("selected")
    })}
}    
pixelSelect()


function selectedColor(){   
    let pixels = document.getElementsByClassName("pixel");
    for (let i=0; i<pixels.length; i+=1 ){  
        pixels[i].addEventListener("click",function(event){  
         let selectedColor = document.querySelector(".selected").style.backgroundColor
        if(event.target.style.backgroundColor == "white" ){
            event.target.style.backgroundColor = selectedColor;
        }  else if (event.target.style.backgroundColor !=selectedColor){event.target.style.backgroundColor =selectedColor;
        } else if (event.target.style.backgroundColor == selectedColor){   
            event.target.style.backgroundColor ="white";
        }
        })
    }
}
selectedColor()

function cleanButton(){ 
    let button = document.querySelector(".cleanButton");

    button.addEventListener("click",function(){
        let pixels = document.getElementsByClassName("pixel");
        for (let i=0; i<pixels.length; i+=1 ){
        pixels[i].style.backgroundColor = "white"}
    })

}
cleanButton()

