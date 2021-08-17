function criaDiv(tamanho) {
  const chamaSection = document.querySelector('.tabela');
  for (let i = 0; i < tamanho; i += 1) {
    for (let linha = 0; linha < tamanho; linha += 1) {
      const criaDiv = document.createElement('div');
      criaDiv.classList.add('pixel');
      criaDiv.id = 'pixel-board';
      chamaSection.appendChild(criaDiv);
    }
  }
}
criaDiv(5);

function selecionaCor(event) {//função remove a classe quando outro elemento é selecionado
  const colors = document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function pintaPixels(event) {
  const element = document.querySelector('#color-palette .selected');
  const compStyle = getComputedStyle(element);//obtem todas propriedades e valores css
  const pixelsCor = compStyle.backgroundColor;//atribui o estilo background capturado na const compStyle

  event.target.style.backgroundColor = pixelsCor;
}


function click() {
  const colorBlocks = document.getElementsByClassName('color');
  for (let i = 0; i < colorBlocks.length; i += 1)
    colorBlocks[i].addEventListener('click', selecionaCor);
}
click()



const pixelClean = document.getElementsByClassName('pixel');
function clickTabela() {//função busca os pixels do board
  //const pixelClean = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelClean.length; i += 1)
    pixelClean[i].addEventListener('click', pintaPixels);
}
clickTabela()

function criaBotaoClear() { //não ta funcionando
  let board = document.querySelector('.body');
  let botaoClear = document.createElement('button');
  botaoClear.innerText = 'clear-board';
  botaoClear.id = 'clear-board';
  board.appendChild(botaoClear);
}
criaBotaoClear()