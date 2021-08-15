let coluna = 5;
let linha = 5;
let caixa = coluna * linha;

function criadorCaixa (){
for (let cont = 0; i < caixa; cont += 1){
 let CaixaP = document.createElement('div');
 let anexado = document.querySelector('#pixel-board');
   CaixaP.className= 'pixel';
    anexado.appendChild(CaixaP); 
 }
}