const colorPalet = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

function criaCoresDaPaleta(cor, classe) {
  const corDiv = document.createElement('div');
  corDiv.style.backgroundColor = cor;
  console.log(classe);
  corDiv.classList.add(cor);
  if (typeof classe !== 'undefined')corDiv.classList.add(classe);
  corDiv.style.width = '40px';
  corDiv.style.height = '40px';
  corDiv.style.border = '1px solid black';
  colorPalet.appendChild(corDiv);
}

criaCoresDaPaleta('black', 'selected');
criaCoresDaPaleta('blue');
criaCoresDaPaleta('red');

function criaLinhaQuadro(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const elementoQuadro = document.createElement('div');
    elementoQuadro.classList.add('pixel');
    elementoQuadro.style.backgroundColor = 'white';
    elementoQuadro.style.width = '40px';
    elementoQuadro.style.height = '40px';
    elementoQuadro.style.border = '1px solid black';
    document.querySelector('#pixel-board').appendChild(elementoQuadro);
  }
}

function criaQuadro(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    criaLinhaQuadro(tamanho);
  }
}

criaQuadro(5);


