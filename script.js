let penColor = "black"




function setPenColor(color,div){
 penColor = color;


     let todosElementos = document.getElementsByClassName('color')
     for(let cont = 0; cont < todosElementos.length; cont ++){
        todosElementos[cont].className = 'color'
    
 }
     div.className = 'color selected'
 
 //this é a div, div é o elemento html
 

 console.log(div)
 
}



function setPixelColor(div){
 div.style.backgroundColor = penColor
}//this representa a div
 

