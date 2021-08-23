

    // Paleta de cores (Alterável)

      const colorList = ["black", "blue", "yellow", "red"] 
      
    //para cada cor, criar uma div

            
//Seção Paleta de Cores
let paletaDeCores = document.querySelector("#color-palette");

  //Criando Paleta de Cores
  for (let i=0; i<colorList.length; i += 1){

    let novaCor = document.createElement("div");
      novaCor.classList.add("color");
      novaCor.classList.add(colorList[i]);
      novaCor.style.backgroundColor = colorList[i];

      if (novaCor.style.backgroundColor == "black"){
        novaCor.classList.add("selected")
      }

    novaCor.addEventListener('click', selecionarCor);

    paletaDeCores.appendChild(novaCor)

    console.log(colorList[i]);
  }

//  FUNÇÕES


    //Paleta de Cores 
    //selecionarCor


    function selecionarCor(e) {
      let selectedColor = document.getElementsByClassName("selected");
      for (let i=0; i<colors.length; i += 1){
        colors[i].classList.remove("selected");
      } 
      e.target.classList.add("selected")
      console.log(selectedColor)
    }








//Seção PixelBoard
;

  let colors = document.querySelectorAll(".color");
  let pixelSide = 5; //ALTERÁVEL

  
  for (let i = 0; i < pixelSide; i += 1){ 
    for (let i = 0; i < pixelSide; i += 1){ 
        
      let pixelBoard = document.querySelector("#pixel-board");

        let novoPixel = document.createElement("div");
        novoPixel.classList.add("pixel");
        novoPixel.style.backgroundColor = "white";
        novoPixel.addEventListener('click', pintarPixel);
        pixelBoard.appendChild(novoPixel);

    }
  }
  
  





  

  //para cada pixel, executar pintarPixel()
  let pixels = document.querySelectorAll('.pixel');

      for (let i=0; i<pixels.length; i += 1){
      let pixelAtual = pixels[i];
      pixelAtual.addEventListener('click', pintarPixel);
    }



  function pintarPixel(event) {
    let selectedColor = document.querySelector(".selected").style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;


    
  }


  // limpar PixelBoard
  function limparPixelboard(){
    for( let i=0; i<pixels.length; i += 1){
      let pixelAtual = pixels[i];
      pixelAtual.style.backgroundColor = "white";
    }
  }