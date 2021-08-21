window.onload
//aqui as divs nascem, e se fortalecem para formar a tabela 5*5
for (let i = 0; i < 25; i += 1) {
  const caixa = document.createElement('cor');
  caixa.className = 'pixel';
  document.getElementById('pixel-board').appendChild(caixa);
}

//a const paleta aponta a class color aqui para na funçao abaixo usar a magia da programaçao para  o select e remover o antigo select
const paleta = document.querySelectorAll('.color');
function removeCor() {
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].classList.remove('selected',);

  }
}
//nessas linhas radicais aqui, temos um apontamento maravilindo para a cor preto, assim mudando a class dela :)
//alem disso tbm cria const para manipular as cores individualmente se necessario mais pra frente, vai que ne :P
 const corPreta = document.getElementById('color1');
 const corVermelha = document.getElementById('color2');
 const corVerde = document.getElementById('color3');
 const corAzul = document.getElementById('color4');
 corPreta.classList.add('selected');

// acho que ta claro que troca a classe né
function trocaClasse(cor) {
  removeCor();
  cor.target.classList.add('selected');
}
//* esse contador aqui é o que vai dar o evento de click para a classe e desencadirar a funçao q puxa uma funçao que puxa uma funçao q faz funcionar tudo muahaha
for (let i = 0; i < paleta.length; i += 1) {
  paleta[i].addEventListener('click',trocaClasse);
}
// aqui vou setar o uma const pra class pixel-board e manipular ela ali em baixo
//no for um contador seleciona o numero do pixel e aciona a funçao
const pixelColoridinho = document.querySelector('.pixel');
for (let i = 0; i < pixelColoridinho.length; i += 1) {
pixelColoridinho[i].addEventListener('click', pintador);
}
// aqui o pintador pega a cor da paleta selected e joga no clicado, ao menos deveria :/ 
function pintador(event){
  const pintado = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = pintado

}

const botao = document.getElementById('clear-board');

