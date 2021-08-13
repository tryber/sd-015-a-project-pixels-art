let coresDaPaleta = document.getElementsByClassName("color");
for (let i=0; i < coresDaPaleta.length; i += 1) {
  coresDaPaleta[i].style.backgroundColor = coresDaPaleta[i].id;
}

function criaQuadro() {
  let pixelBoard = document.createElement("div");
  pixelBoard.id = 'pixel-board';
  document.querySelector('body').appendChild(pixelBoard);
  let numeroDeLinhas = 5;
  let numeroDePixels = 5;
  for (let linha = 0; linha < numeroDeLinhas; linha += 1) {
    for (let i = 0; i < numeroDePixels; i += 1) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      pixelBoard.appendChild(pixel);
    }
    pixelBoard.appendChild(document.createElement("br"));
  }
 }

criaQuadro();

for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
  document.querySelectorAll('.color')[i].addEventListener('click', selectColor);
}

function selectColor(cor) {
  document.querySelector('.selected').classList.remove("selected");
  cor.target.classList.add('selected');
}

for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
  document.querySelectorAll('.pixel')[i].addEventListener('click', pintaPixel);
}

function pintaPixel(pixel) {
  pixel.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}