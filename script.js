
//aqui as divs nascem, e se fortalecem 
for (let i = 0; i < 25; i += 1) {
  const caixa = document.createElement('cor');
  caixa.className = 'pixel';
  document.getElementById('pixel-board').appendChild(caixa);
}

// muda classe da cor para selecionado
function mudaClasse() {
  const mudaClasse = document.querySelector('.selected');
  mudaClasse.classList.remove('selected');
  change.target.classList.add('selected');
}

// aqui declaro as variaveis a passo para transitar na funçao mudaclasse

const paleta = document.querySelectorAll('.color');
function mudacor() {
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].classList.remove('selected');
  }
}

function novacor(cor) {
  mudacor();
  cor.target.classList.add('selected');
}

for (let i = 0; i < paleta.length; i += 1) {
  paleta[i].addEventListener('click', novacor);
}