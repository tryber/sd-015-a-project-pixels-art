function criaCoresPaleta() {
  const coresCor = ['black', 'red', 'blue', 'green'];
  const coreslista = document.querySelector('#color-palette');
  for (let index = 0; index < coresCor.length; index += 1) {
    const cores = coresCor[index];
    const coresItem = document.createElement('div');
    coresItem.className = 'color';
    coresItem.style.background = cores;
    coreslista.appendChild(coresItem);
  }
}
criaCoresPaleta();

function criaQuadroDePixels() {
  const quadro = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const quadroIndividuais = document.createElement('div');
    quadroIndividuais.className = 'pixel';
    quadro.appendChild(quadroIndividuais);
  }
}
criaQuadroDePixels();

function selecionaCorPreencher(event) {
  const selecionadaInicial = document.querySelector('.selected');

  selecionadaInicial.classList.remove('selected');
  event.target.classList.add('selected');
}

window.onload = function colorClassSelected() {
  const selecionaColor = document.querySelector('.color');
  selecionaColor.className = 'selected color';
  const coresSeleção = document.querySelectorAll('.color')[0];
  const coresSeleção2 = document.querySelectorAll('.color')[1];
  const coresSeleção3 = document.querySelectorAll('.color')[2];
  const coresSeleção4 = document.querySelectorAll('.color')[3];
  coresSeleção.addEventListener('click', selecionaCorPreencher);
  coresSeleção2.addEventListener('click', selecionaCorPreencher);
  coresSeleção3.addEventListener('click', selecionaCorPreencher);
  coresSeleção4.addEventListener('click', selecionaCorPreencher);
};
