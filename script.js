 window.onload=function(){
     let boardSize=5
     let pBoard= document.getElementById("pixel-board");
     paletaCores()
     montaBoard(boardSize);

    function paletaCores(){
        let first= document.getElementById("first").style.backgroundColor="black";
        firstPreta();
        let second= document.getElementById("second").style.backgroundColor="aqua";
        let third= document.getElementById("third").style.backgroundColor="red";
        let fourth= document.getElementById("fourth").style.backgroundColor="green";
    }
    function firstPreta(){
        let corInicial= document.getElementById("first");
        let cor= corInicial.className;
        cor= cor + " selected";
        corInicial.className=cor;
    }
     function montaBoard(numero){

         for(let i=0; i<numero; i+=1){
             let linha= document.createElement("div")
            for(let j=0; j<numero; j+=1){
                let unidade = montaPixels("pixel");
                linha.appendChild(unidade);
            }
             linha.className="linha";
             pBoard.appendChild(linha);
        }

     }
     function montaPixels (classe){
         let pixel= document.createElement('div');
         pixel.className = classe
         return pixel
     }
 }