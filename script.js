function pixelBox() {
  const pixBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const pix = document.createElement('div');
    pix.className = 'pixel';
    pixBoard.appendChild(pix);
  }
}

function PixelBoardBox() {
  for (let index = 0; index < 5; index += 1) {
    pixelBox();
  }
}

function selecionado() {
  const palette = document.querySelectorAll('#color-palette div');

  function limpaSelec() {
    palette.forEach((div) => {
      div.classList.remove('selected');
    });
  }

  palette.forEach((div) => {
    div.addEventListener('click', () => {
      limpaSelec();
      div.classList.add('selected');
    });
  });
}

/*
function pegarCor(event) {
  const cor = document.querySelector('.selected');
  const bgcolor = window
    .getComputedStyle(cor, null)
    .getPropertyValue('background-color');
  event.target.style.backgroundColor = bgcolor;
}

function colocarCor() {
  const pix = document.querySelectorAll('.pixel');
  for (let index = 0; index < pix.length; index += 1) {
    const alt = pix[index];
    alt.addEventListener('click', pegarCor);
  }
}
colocarCor();
*/

function limparQuadro() {
  const limpar = document.getElementById('clear-board');
  const pixel = document.getElementsByClassName('pixel');
  limpar.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

function corRandom() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const paleta = document.querySelectorAll('.color');
  paleta[1].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  paleta[2].style.backgroundColor = 'rgb(' + g + ',' + b + ',' + r + ')';
  paleta[3].style.backgroundColor = 'rgb(' + b + ',' + r + ',' + g + ')';
}

PixelBoardBox();
limparQuadro();
selecionado();
corRandom();
