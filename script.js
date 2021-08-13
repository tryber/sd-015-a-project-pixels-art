/*
   7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

      A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

      Somente uma das cores da paleta deve ter a classe selected de cada vez;

      Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.

   O que será verificado:

      Verifica se somente uma cor da paleta de cores tem a classe selected de cada vez

   Verifica se os pixels dentro do quadro não têm a classe selected quando são clicados
*/


// Capiturando os "pixels" de classe "color"
let pixelSelect = document.querySelectorAll(".color");

let tagSelected = "não possui a classe selected";

// Percorrendo o array "pixelSelected" 
pixelSelect.forEach(element => {

	
	if (element.classList.contains("selected")) {
	
		tagSelected = element;
		changeTagSelected(tagSelected);
	}
	
});

function changeTagSelected(tagSelected){

	
	let oldTagSelected = "";
	
	//Percorrendo novamente o array "pixelSelected"
	pixelSelect.forEach(element =>{	

		// Adicionando um escutador de evento em cada elemento do array "pixelSelected"
		element.addEventListener("click", event =>{
			
			// Guardando a tag antiga
			oldTagSelected = tagSelected;

			// Guardando a nova tag a ser selecionada
			tagSelected = event.target;

			// Removendo a classe da tag antiga
			oldTagSelected.classList.remove("selected");
			
			// Adicionando a classe na tag nova
			tagSelected.classList.add("selected");
		});
		console.log(element);
	});
}