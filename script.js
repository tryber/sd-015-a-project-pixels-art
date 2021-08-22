window.onload = function(){
function paletaDeCores(event) {

    document.getElementsByClassName("color")[0].style.backgroundColor = "black";

    document.getElementsByClassName("color")[1].style.backgroundColor = "blue";

    document.getElementsByClassName("color")[2].style.backgroundColor = "red";

    document.getElementsByClassName("color")[3].style.backgroundColor = "brown";

}
paletaDeCores();

function classSelected() {

    let elementSelected = document.querySelector(".color");
    elementSelected.classList.add("selected");
    
   
}
classSelected();

function checkSelected(event) {
    let selectedCheck = document.querySelector(".selected");
    
    selectedCheck && selectedCheck.classList.remove("selected")
    document.querySelector(".zoom") && document.querySelector(".zoom").classList.remove("zoom")
    event.target.classList.add("selected")
    event.target.classList.add("zoom")
}




function zoom(event){
    event.target.classList.add("over")
}
function over(event){
    event.target.classList.remove("over")
}

for(let index = 0; index < document.querySelectorAll(".color").length; index +=1){
    document.querySelectorAll(".color")[index].addEventListener("click", checkSelected);
    document.querySelectorAll(".color")[index].addEventListener("mouseover", zoom);
    document.querySelectorAll(".color")[index].addEventListener("mouseout", over);
}
function pintarQuadrado (event){
    let pintaQuadro = event.target;
    pintaQuadro.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;

}

    
    for(let index = 0; index < document.querySelectorAll(".pixel").length; index += 1){
        document.querySelectorAll(".pixel")[index].addEventListener("click", pintarQuadrado);

    }
        

     let clear = document.getElementById("clear-board");
     clear.addEventListener("click", function(event){
         if(clear){
             for(let index = 0; index < document.querySelectorAll(".pixel").length; index += 1){
                let whiteColor = document.querySelectorAll(".pixel")[index];
                whiteColor.style.backgroundColor = "white"
             }
         }
     })

}


