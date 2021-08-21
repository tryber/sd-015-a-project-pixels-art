window.onload = function(){
function paletaDeCores(event) {

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

function checkSelected() {
    let selectedCheck = document.querySelector(".selected");
    
    let addSelect = document.getElementsByTagName("section");
    
    addSelect.addEventListener("click", function(event){
        if(document.querySelector(".selected")){
            document.querySelector(".selected").classList.remove("selected");
           
           
        }
    })
}
}
