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

function selecionaCor(event) { 
  let colors = document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  }

  function pintaPixels (event) {//não esta pintando
    const pixelsCor = document.querySelector('.selected').style.backgroundColor;
    const pixelsPintar = event.target;
    pixelsPintar.style.backgroundColor = pixelsCor
    }
  

function click() {
  let colorBlocks = document.getElementsByClassName('color');
  for (let i = 0; i < colorBlocks.length; i += 1)
    colorBlocks[i].addEventListener('click', selecionaCor);
  }
click() 

function clickTabela () {
  let pixelBranco = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelBranco.length; i += 1) 
  pixelBranco[i].addEventListener('click', pintaPixels);
}
clickTabela()