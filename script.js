// função que cria a paleta de Cores
function criaPaleta() {
  const colorArray = ['black', 'purple', 'orange', 'cyan'];
  for (let i = 0; i < colorArray.length; i += 1) {
    const colorDiv = document.createElement('div');
    const colorLi = document.createElement('li');
    const parentElement = document.getElementById('color-palette');

    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = colorArray[i];
    parentElement.appendChild(colorDiv);
    colorDiv.appendChild(colorLi);
  }
}

criaPaleta();

// função que cria a tabela
function criaTabela() {
  for (let i = 0; i < 25; i += 1) {
    const tablePixel = document.createElement('div');
    const tableItem = document.createElement('li');
    const parentElement = document.getElementById('pixel-board');

    tablePixel.className = 'pixel';
    tablePixel.style.backgroundColor = 'white';
    parentElement.appendChild(tablePixel);
    tablePixel.appendChild(tableItem);
  }
}

criaTabela();

// função que define a cor padrão e a cor que ficará selecionada
function defineCor() {
  const defaultBg = document.querySelector('.color');
  defaultBg.classList.add('selected');
}

defineCor();

function selecionaCor() {
  const paleta = document.getElementById('color-palette');
  paleta.addEventListener('click', (event) => {
    const corSelecionada = document.querySelector('.selected');
    const novaCor = event.target;

    corSelecionada.classList.remove('selected');
    novaCor.classList.add('selected');
  });
}

selecionaCor();

// função que preenche o pixel com a cor selecionada
function preenchePixel() {
  const pixel = document.getElementById('pixel-board');

  pixel.addEventListener('click', (event) => {
    const corSelecionada = document.querySelector('.selected').style.backgroundColor;
    const pixelClicado = event.target;

    pixelClicado.style.backgroundColor = corSelecionada;
  });
}

preenchePixel();
