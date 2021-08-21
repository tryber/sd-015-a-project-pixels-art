
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
//esse contador aqui é o que vai dar o evento de click para a classe e desencadirar a funçao q puxa uma funçao que puxa uma funçao q faz funcionar tudo muahaha
for (let i = 0; i < paleta.length; i += 1) {
  paleta[i].addEventListener('click',trocaClasse);
}
//aqui seleciono o id pixel-board
const pixelColoridinho = document.getElementById('pixel-board');

// aqui é magia bruta meu parceiro, essa funçao vai ser responsavel por criar eventos para jogar cor nos pixels 
function pintor(event) {
  const selecionado = event.target;
  const pintado = document.querySelector('.selected').style.backgroundColor;
  selecionado.style.backgroundColor = pintado;
}

//aqui eu chamo a funçao ali de cima 
pixelColoridinho.addEventListener('click', pintor);


// aqui vou referenciar o estilo do backgroundcolor, até que valeu a pena
color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'red';
color3.style.backgroundColor = 'green';
color4.style.backgroundColor = 'blue';


const botao = document.getElementById('clear-board');
// essa soluçao é legal, pq so zera a pagina :)
function zera() {
  window.location.reload();
}
botao.addEventListener('click', zera);

