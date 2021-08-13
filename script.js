window.onload = function() {
  function criaLinha(dimensao, numeroDalinha) {
    for (let index = 0; index < dimensao; index += 1) {
      let pixel = document.createElement("div");
      pixel.className = "color pixel"
      let linha = document.getElementById("linha" + numeroDalinha);
      linha.appendChild(pixel);
    }
  
  }


  function criaQuadro(dimensao) {
    for (let index = 0; index < dimensao; index += 1) {
      let linha = document.createElement("section");
      linha.id = "linha" + (index + 1);
      linha.className = "linhas";

      let quadro = document.getElementById("pixel-board");
      quadro.appendChild(linha);

      criaLinha(dimensao, (index + 1));

    }
  }

  criaQuadro(5);
  
  

  
}