let quadro = document.getElementById('pixel-board');

function criarquadro(){
    for (let index = 0; index < 25; index +=1){
       let quadroTamanho = document.createElement('div');
       quadroTamanho.className = 'pixel';
       quadro.appendChild(quadroTamanho);
    }; 
};
criarquadro();