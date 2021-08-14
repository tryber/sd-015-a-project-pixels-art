const divColor = document.querySelectorAll('.color')
divColor[0].style.backgroundColor = 'black';
divColor[1].style.backgroundColor = 'blue';
divColor[2].style.backgroundColor = 'red';
divColor[3].style.backgroundColor = 'green';

let paiDeTodos = document.querySelector('body');
let criarDiv = document.createElement('ul');
paiDeTodos.appendChild(criarDiv);
criarDiv.id = 'pixel-board';


let numeroDeQuadrados = 25
for (index = 1; index <= numeroDeQuadrados; index +=1){
    let quadro = document.querySelector('#pixel-board');
    let criarQuadrado = document.createElement('li');
    quadro.appendChild(criarQuadrado);
    criarQuadrado.classList.add('pixel')
}


function pretoPrimeiro(){
    let estiloPreto = document.querySelector('.color');
    window.onload = function(){
        if(estiloPreto.style.backgroundColor === 'black'){
            estiloPreto.classList.add('selected')
    }
}
}

pretoPrimeiro();

function cliqueConsole(event){
    let paletaDeCores = document.querySelectorAll('.color');
    for (index = 0; index < paletaDeCores.length; index +=1){
        paletaDeCores[index].addEventListener('click', function(event){
            let classeSelected = document.querySelector('.selected')
            classeSelected.classList.remove('selected');
            event.target.classList.add('selected');
        })
    }
}

cliqueConsole();