// Define as cores iniciais da página de forma aleatória, com exceção da cor preta.
const coresDaPaleta = document.getElementsByClassName('color');
document.getElementById('black').style.backgroundColor = 'black';
for (let i = 1; i < coresDaPaleta.length; i += 1) {
  const newColor = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
  const corAleatoria = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
  console.log(newColor);
  coresDaPaleta[i].style.backgroundColor = corAleatoria;
}

// Função para os pixels se tornarem pintáveis
function pintaPixel(pixel) {
  const pixelPintado = pixel.target;
  pixelPintado.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

// O lint não parava de reclamar sobre o quanto eu buscava essa string, agora ele não reclama mais
const calaBocaLint = 'pixel-board';

// Função que cria o quadro de pixels
function criaQuadro(valor) {
  let filtro = valor;
  filtro > 49 && (filtro = 50);
  filtro < 6 && (filtro = 5);
  const pixelBoard = document.createElement('div');
  pixelBoard.id = calaBocaLint;
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

// Essa chamada de função garante o estado inicial da página
criaQuadro(5);

// Função chamada pelo evento de seleção de cores
function selectColor(cor) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada && corSelecionada.classList.remove('selected');
  (document.querySelector('.zoom')) && document.querySelector('.zoom').classList.remove('zoom');
  cor.target.classList.add('selected');
  cor.target.classList.add('zoom');
}

// Funções para o efeito de zoom in e out para a seleção da pessoa usuária
function zoomIn(evento) {
  evento.target.classList.add('over');
}
function zoomOut(evento) {
  evento.target.classList.remove('over');
}
// Criação do evento que muda as classes da cor selecionada de acordo com o click da pessoa usuária e para o feito de zoom na cor sob o mouse
for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
  document.querySelectorAll('.color')[i].addEventListener('click', selectColor);
  document.querySelectorAll('.color')[i].addEventListener('mouseover', zoomIn);
  document.querySelectorAll('.color')[i].addEventListener('mouseout', zoomOut);
}

// Cria o botão de limpeza do quadro
const botao = document.createElement('button');
botao.innerText = 'Limpar';
botao.id = 'clear-board';
botao.style.marginBottom = '10px';
document.querySelector('body').insertBefore(botao, document.getElementById(calaBocaLint));
botao.onclick = function limpaQuadro() {
  for (let i = 0; i < document.getElementsByClassName('pixel').length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
  }
};

// Cria as opções de tamanho de quadro para a pessoa usuária
const tamanho = document.createElement('input');
tamanho.id = 'board-size';
tamanho.type = 'number';
tamanho.min = 1;
const resizeBoard = document.createElement('button');
resizeBoard.id = 'generate-board';
resizeBoard.innerText = 'VQV!';
resizeBoard.onclick = function limpaQuadro() {
  if (tamanho.value < 1) {
    alert('Board inválido!');
  } else {
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.parentNode.removeChild(pixelBoard);
    criaQuadro(tamanho.value);
  }
};
document.querySelector('body').insertBefore(tamanho, document.getElementById(calaBocaLint));
document.querySelector('body').insertBefore(resizeBoard, document.getElementById(calaBocaLint));

// Novo botão para criar mais cores para os usuários mais exigentes
const liberaCores = document.createElement('button');
liberaCores.innerText = 'MAIS CORES POR FAVOR!';
liberaCores.onclick = function criaCores() {
  for (let i = 0; i < 10; i += 1) {
    const novaCor = document.createElement('div');
    novaCor.className = 'color';
    novaCor.addEventListener('click', selectColor);
    novaCor.addEventListener('mouseover', zoomIn);
    novaCor.addEventListener('mouseout', zoomOut);
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    const corAleatoria = `rgb(${r}, ${g}, ${b})`;
    novaCor.style.backgroundColor = corAleatoria;
    document.getElementById('color-palette').appendChild(novaCor);
  }
};

document.querySelector('body').insertBefore(liberaCores, document.getElementById(calaBocaLint));
