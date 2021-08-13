let coresDaPaleta = document.getElementsByClassName('color');
document.getElementById('black').style.backgroundColor = 'black';
for (let i=1; i < coresDaPaleta.length; i += 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  coresDaPaleta[i].style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b +')'
}

function criaQuadro(valor) {
  if (valor > 50) {
    valor = 50;
  } else if (valor < 5) {
    valor = 5;
  }
  let pixelBoard = document.createElement("div");
  pixelBoard.id = 'pixel-board';
  document.querySelector('body').appendChild(pixelBoard);
  let numeroDeLinhas = valor;
  for (let linha = 0; linha < numeroDeLinhas; linha += 1) {
    for (let i = 0; i < numeroDeLinhas; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', pintaPixel);
      pixelBoard.appendChild(pixel);
    }
    pixelBoard.appendChild(document.createElement('br'));
  }
}

criaQuadro(5);

function selectColor(cor) {
  document.querySelector('.selected').classList.remove('selected');
  cor.target.classList.add('selected');
}

for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
  document.querySelectorAll('.color')[i].addEventListener('click', selectColor);
}

function pintaPixel(pixel) {
  pixel.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

let botao = document.createElement('button');
botao.innerText = 'Limpar';
botao.id = 'clear-board';
botao.style.marginBottom = '10px';
document.querySelector('body').insertBefore(botao, document.getElementById('pixel-board'))
botao.onclick = function() {
  for (let i = 0; i < document.getElementsByClassName("pixel").length; i += 1) {
    document.getElementsByClassName("pixel")[i].style.backgroundColor = 'white';
  }
}

let tamanho = document.createElement('input');
tamanho.id = 'board-size';
tamanho.type = 'number';
tamanho.min = '1';
tamanho.max = '50';
let resizeBoard = document.createElement('button');
resizeBoard.id = 'generate-board';
resizeBoard.innerText = 'VQV!'
resizeBoard.onclick = function limpaQuadro() {
  if (tamanho.value < 1) {
    alert('Board inválido!')
  } else{
    let pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.parentNode.removeChild(pixelBoard);
    criaQuadro(tamanho.value);
  }
}
document.querySelector('body').insertBefore(tamanho, document.getElementById('pixel-board'))
document.querySelector('body').insertBefore(resizeBoard, document.getElementById('pixel-board'))