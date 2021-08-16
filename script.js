function paletaDeCores(event){
    
    document.getElementsByClassName("color")[1].style.backgroundColor = "blue";

    document.getElementsByClassName("color")[2].style.backgroundColor = "red";

    document.getElementsByClassName("color")[3].style.backgroundColor = "brown";

}
paletaDeCores();

    function classSelected (){
        
    const elementSelected = document.querySelector(".color");
    elementSelected.classList.add("selected");
    }
    classSelected();


function pixelBoard(selected, event){
    
}
pixelBoard();


