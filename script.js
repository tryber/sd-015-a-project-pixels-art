let paletaCores = document.getElementById('color-palette');
 
let cores = ['green', 'yellow', 'blue'];

for (let i = 0; i < 3; i += 1){
    let corItem = cores[i];
    let item = document.createElement('div');
    item.className = 'color';
    item.style.backgroundColor = corItem;
    paletaCores.appendChild(item);
}

let quadro = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1){
    let itemQuadro = document.createElement('div');
    itemQuadro.className = 'pixel';
    quadro.appendChild(itemQuadro);

}

let pixel = document.querySelectorAll('.pixel');

let color = document.querySelectorAll('.color');
let preto = document.getElementById('preto');

for (let i = 0; i < color.length; i += 1){
    color[i].addEventListener('click', addClasse);
}

function addClasse(event) {
    for (let i = 0; i < color.length; i += 1){
        color[i].className = 'color';
    }
    event.target.className += ' selected'; 
    let qualCor = event.target.style.backgroundColor;

for (let i = 0; i < pixel.length; i += 1){
    pixel[i].addEventListener('click', addCor);
}

function addCor(event) {
    event.target.style.backgroundColor = qualCor;
}
    
}

for (let i = 0; i < pixel.length; i += 1){
    pixel[i].addEventListener('click', addPreto);
}

function addPreto(event) {
    event.target.style.backgroundColor = 'black';
}

 