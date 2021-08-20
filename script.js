// Requisito 4
for (let index = 0; index < 5; index += 1) {
  const table = document.getElementById('pixel-board');
  const createTr = document.createElement('tr');
  createTr.className = 'tr';
  table.appendChild(createTr);
}

const tr = document.getElementsByClassName('tr');

for (let index = 0; index < 5; index += 1) {
  // eslint-disable-next-line no-shadow
  for (let index = 0; index < 5; index += 1) {
    const createTd = document.createElement('td');
    createTd.className = 'pixel';
    tr[index].appendChild(createTd);
  }
}

// Requisito 7
function selectedColor() {
  const colorPalette = document.querySelector('#color-palette'); // seleciona toda a paleta de cores
  colorPalette.addEventListener('click', (event) => { // adiciono um evento em toda paleta, que quando clico:
    const selected = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') { // diz que se o evento de origem não for toda a paleta e sim uma das cores
      selected.classList.remove('selected'); // removeremos o selected de onde ele estiver
      event.target.classList.add('selected'); // e o adicionaremos somente no evento de origem
    }
  });
}
selectedColor();

// Requisito 8
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', (event) => {
  if (event.target.className === 'pixel') {
    const corAtual = document.querySelector('.selected').id;
    const corSelecionada = event.target;
    corSelecionada.style.backgroundColor = corAtual;
  }
});

// Requisito 9
const button = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');

button.addEventListener('click', () => {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});
