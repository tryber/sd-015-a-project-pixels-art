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

