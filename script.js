let coresDaPaleta = document.getElementsByClassName("color");
for (let i=0; i < coresDaPaleta.length; i += 1) {
  coresDaPaleta[i].style.backgroundColor = coresDaPaleta[i].id;
}

function criaQuadro() {
  let pixelBoard = document.createElement("div");
  pixelBoard.id = 'pixel-board';
  document.getElementsByTagName("body")[0].appendChild(pixelBoard);
  let numeroDeLinhas = 5;
   let numeroDePixels = 5;
   for (let linha = 0; linha < numeroDeLinhas; linha += 1) {
     for (let i = 0; i < numeroDePixels; i += 1) {
       let pixel = document.createElement("div");
       pixel.className = "pixel";
       pixelBoard.appendChild(pixel);
     }
   }
 }

criaQuadro();