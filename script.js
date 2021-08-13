 window.onload=function(){
     let boardSize=5
     let pBoard= document.getElementById("pixel-board");

     montaBoard(boardSize);


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