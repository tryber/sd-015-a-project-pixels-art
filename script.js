let quadro = document.getElementById('pixel-board');

function criarquadro(){
    for (let index = 0; index < 25; index +=1){
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



