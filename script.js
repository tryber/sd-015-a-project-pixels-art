const quadro = document.getElementById('pixel-board');

function criarquadro() {
  for (let index = 0; index < 25; index += 1) {
    let quadroTamanho = document.createElement('div');
    quadroTamanho.className = 'pixel';
    quadro.appendChild(quadroTamanho);
    }; 
};
criarquadro();

let corInicial = document.querySelector('#preta');
function classPreta(){
    corInicial.classList.add('selected');
}
classPreta();

let deleteSelected = document.getElementById('color-palette');
deleteSelected.addEventListener('click', changeSelected);

function changeSelected(event){
    let classDelet = document.querySelectorAll('.color');
    for (let index = 0; index < classDelet.length; index +=1) {
        classDelet[index].classList.remove('selected');
        event.target.classList.add('selected');
    }
}

let mudaCor = document.getElementsByClassName('pixel');
for (let i = 0; i < mudaCor.length; i += 1){
    mudaCor[i].addEventListener('click', funcCor);
}

function funcCor (event) {
    let clicar = document.querySelector('.selected');
    let pixelBoard = document.querySelectorAll('.pixel');
    let cor = getComputedStyle(clicar); 
        event.target.style.backgroundColor = cor.backgroundColor;
};

