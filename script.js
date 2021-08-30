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
