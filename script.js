// Capiturando as paletas de cor, da classe  "color"
let colorSelected = document.querySelectorAll(".color");

let tagSelected = "";
// Percorrendo o array "colorSelecteded" 
colorSelected.forEach(element => {


  if (element.classList.contains("selected")) {

    tagSelected = element;
    changeTagSelected(tagSelected);
  }
});

function changeTagSelected(tagSelected) {

  let oldTagSelected = "";

  //Percorrendo novamente o array "colorSelecteded"
  colorSelected.forEach(paletColor => {

    // Adicionando um escutador de evento em cada elemento do array "colorSelecteded"
    paletColor.addEventListener("click", event => {

      // Guardando a tag antiga
      oldTagSelected = tagSelected;

      // Guardando a nova tag a ser selecionada
      tagSelected = event.target;

      // Removendo a classe da tag antiga
      oldTagSelected.classList.remove("selected");

      // Adicionando a classe na tag nova
      tagSelected.classList.add("selected");

    });
  });
}

// Capiturando todos os pixels da section "pixel-board"
let whitePixels = document.querySelectorAll(".pixel");

// Percorrendo todos os indeces do array "whitePixels"
whitePixels.forEach(pixel => {

  // Adicionando um escutador de evento em cada "indice do array/ pixel"
  pixel.addEventListener("click", () => {

    // Capiturando a paleta selecionada
    let paletSelected = document.querySelector(".selected");

    // Verificando qual cor, terei que adicionar no pixel apos o click

    if (paletSelected.classList.contains("black")) {
      pixel.style.backgroundColor = "black";
    }
    if (paletSelected.classList.contains("red")) {
      pixel.style.backgroundColor = "red";
    }
    if (paletSelected.classList.contains("blue")) {
      pixel.style.backgroundColor = "blue";
    }
    if (paletSelected.classList.contains("green")) {
      pixel.style.backgroundColor = "green";

    }

  });
});
