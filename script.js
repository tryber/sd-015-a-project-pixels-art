window.onload
//aqui as divs nascem, e se fortalecem para formar a tabela 5*5
for (let i = 0; i < 25; i += 1) {
  const caixa = document.createElement('cor');
  caixa.className = 'pixel';
  document.getElementById('pixel-board').appendChild(caixa);
}

//a const paleta aponta a class color aqui para na funçao abaixo usar a magia da programaçao para adicionar o select e remover o antigo select
const paleta = document.querySelectorAll('.color');
function mudacor() {
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].classList.add('selected');
  }
}
//nessas linhas radicais aqui, temos um apontamento maravilindo para a cor preto, assim mudando a class dela :)
 const corPreta = document.getElementById('color1');
corPreta.classList.add('selected');