window.onload = function(){
}

function criadorCaixa(){
 let criador = document.querySelector( "#pixel-board");
 for (let cont = 1; cont < 6; cont +=1 ){
    let coluna = document.createElement("div");
    criador.appendChild(coluna);
 for (let i = 1; i < 6;i +=1 ){
    let linha = document.createElement("div");
    coluna.appendChild(linha);
    linha.className = 'pixel';

  }
 }
}