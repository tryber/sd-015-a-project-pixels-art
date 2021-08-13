window.onload = function() {
  function criaLinha(dimensao, numeroDalinha) {
    for (let index = 0; index < dimensao; index += 1) {
      let pixel = document.createElement("div");
      pixel.className = "pixel"
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

  criaQuadro(8);

  let cores = document.querySelectorAll(".color");
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener("click", function(event) {
      console.log(event.target);

      for (let i = 0; i < cores.length; i += 1) {
        if (cores[i].classList.remove("selected")) {
          console.log(cores[i]);
        }
      }

      event.target.className += " selected";
    })
  }

  let pixels = document.querySelectorAll(".pixel");
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener("click", function(event) {
      let corSelecionada = "red";
      
      paletaSelecionada = document.querySelector(".selected");

      if (paletaSelecionada.classList.contains("black")) {
        corSelecionada = "black";
      }
      else if (paletaSelecionada.classList.contains("red")) {
        corSelecionada = "red";
      }
      else if (paletaSelecionada.classList.contains("green")) {
        corSelecionada = "green";
      }
      else {
        corSelecionada = "blue";
      }

      event.target.style.backgroundColor = corSelecionada;
    })
  }

  let botaoLimpar = document.createElement("button");
  botaoLimpar.innerHTML = "Limpar";
  botaoLimpar.style.margin = "50px";
  botaoLimpar.addEventListener("click", function() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = "white";
    }
  })
  document.body.appendChild(botaoLimpar);


}