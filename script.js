const coresDaPaleta = document.getElementsByClassName('color');
document.getElementById('black').style.backgroundColor = 'black';
for (let i = 1; i < coresDaPaleta.length; i += 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const corAleatoria = `rgb(${r}, ${g}, ${b})`;
  coresDaPaleta[i].style.backgroundColor = corAleatoria;
}

function pintaPixel(pixel) {
  const pixelPintado = pixel.target;
  pixelPintado.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

const pixelBoard = document.createElement('div');
function criaQuadro(valor) {
  let filtro = valor;
  if (filtro > 49) {
    filtro = 50;
  } else if (filtro < 6) {
    filtro = 5;
  }
  pixelBoard.id = 'pixel-board';
  document.querySelector('body').appendChild(pixelBoard);
  for (let linha = 0; linha < filtro; linha += 1) {
    for (let i = 0; i < filtro; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
      pixel.addEventListener('click', pintaPixel);
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

const botao = document.createElement('button');
botao.innerText = 'Limpar';
botao.id = 'clear-board';
botao.style.marginBottom = '10px';
document.querySelector('body').insertBefore(botao, pixelBoard);
botao.onclick = function limpaQuadro() {
  for (let i = 0; i < document.getElementsByClassName('pixel').length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
  }
};

const tamanho = document.createElement('input');
tamanho.id = 'board-size';
tamanho.type = 'number';
tamanho.min = '1';
tamanho.max = '50';
const resizeBoard = document.createElement('button');
resizeBoard.id = 'generate-board';
resizeBoard.innerText = 'VQV!';
resizeBoard.onclick = function limpaQuadro() {
  if (tamanho.value < 1) {
    alert('Board inválido!');
  } else {
    pixelBoard.parentNode.removeChild(pixelBoard);
    criaQuadro(tamanho.value);
  }
};
document.querySelector('body').insertBefore(tamanho, pixelBoard);
document.querySelector('body').insertBefore(resizeBoard, pixelBoard);
