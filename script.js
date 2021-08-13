 window.onload=function(){
     let boardSize=5
     let pBoard= document.getElementById("pixel-board");
     paletaCores()
     montaBoard(boardSize);



    let elementosPaleta = document.getElementsByClassName("color");
    for(let i=0; i<elementosPaleta.length; i+=1){
        elementosPaleta[i].addEventListener("click",selecionaCor);
    }

    let elementosQuadro = document.getElementsByClassName("pixel");
    for(let i=0; i<elementosQuadro.length; i+=1){
        elementosQuadro[i].addEventListener("click",trocaCor);
    }

    let botaoLimpar= document.getElementById("clear-board");
    botaoLimpar.addEventListener("click", limpaQuadro);

    // document.addEventListener("click", function(evento){
    //     if (evento.target.classList.contains("pixel")){
    //         trocaCor();
    //     }
    // }, false);

    function limpaQuadro(evento){
        let elementosQuadro = document.getElementsByClassName("pixel");
    for(let i=0; i<elementosQuadro.length; i+=1){
        elementosQuadro[i].style.backgroundColor="white"
    }
    }

    function trocaCor(evento){
        let corFinal= document.getElementsByClassName("selected")[0].style.backgroundColor;
        console.log(corFinal);
        evento.target.style.backgroundColor= corFinal;
    }
    function selecionaCor(evento){
        let selecionada= document.getElementsByClassName("selected")[0];
        selecionada.className="color";
        evento.target.className="color selected";
    }
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