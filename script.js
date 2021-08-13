// Capiturando as paletas de cor, da classe  "color"
let colorSelected = document.querySelectorAll(".color");

let tagSelected = "não possui a classe selected";

//Capiturando os "pixels"

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
  colorSelected.forEach(element => {
		
		// Adicionando um escutador de evento em cada elemento do array "colorSelecteded"
    element.addEventListener("click", event => {

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


let whitePixels = document.querySelectorAll(".pixel");


whitePixels.forEach(pixel =>{

	pixel.addEventListener("click", () =>{

		let paletSelected = document.querySelector(".selected");
		
		if(paletSelected.classList.contains("black")){
			pixel.style.backgroundColor = "black";
		}
		if(paletSelected.classList.contains("red")){
			pixel.style.backgroundColor = "red";
			
		}
		if(paletSelected.classList.contains("blue")){
			pixel.style.backgroundColor = "blue";
		}

		if(paletSelected.classList.contains("green")){
			pixel.style.backgroundColor = "green";
			
		}

	});
});