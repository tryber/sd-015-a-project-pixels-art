function paletaDeCores(event) {

    document.getElementsByClassName("color")[1].style.backgroundColor = "blue";

    document.getElementsByClassName("color")[2].style.backgroundColor = "red";

    document.getElementsByClassName("color")[3].style.backgroundColor = "brown";

}
paletaDeCores();

function classSelected() {

    const elementSelected = document.querySelector(".color");
    elementSelected.classList.add("selected");
}
classSelected();

function checkSelected() {
    let selectedCheck = document.getElementsByTagName("div")[1];
    for (let index = 0; index < selectedCheck.length; index += 1) {



    }
}
checkSelected();


function pixelBoard(selected, event) {

}
pixelBoard();


