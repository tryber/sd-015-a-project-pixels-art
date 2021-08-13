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

window.onload = function colorClassSelected() {
  const selecionaColor = document.querySelector('.color');
  selecionaColor.className = 'selected color';
};
