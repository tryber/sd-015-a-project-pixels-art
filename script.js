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

function selecionaCorPreencher() {
  const selecionadaInicial = document.getElementsByClassName('selected color');
  const coresSeleção = document.querySelector('color');

  function selecionaCores(event) {
    if (selecionadaInicial.length === 0) {
      event.target.className = 'selected color';
    } else {
      event.target.className = 'color';
    }
  }
  coresSeleção.addEventListener('click', selecionaCores);
}
selecionaCorPreencher();

window.onload = function colorClassSelected() {
  const selecionaColor = document.querySelector('.color');
  selecionaColor.className = 'selected color';
};
