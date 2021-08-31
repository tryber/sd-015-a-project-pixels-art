const paleta = document.getElementById('color-palette');
const cores = document.querySelectorAll('.color');
const input = document.getElementById('board-size');
const button = document.getElementById('generate-board');

// Alerta botão VQV
button.addEventListener('click', function(){
    if(input.value === ''){
        alert('Board inválido!');
    }
})

// Requisito 07
paleta.addEventListener('click', function(event){
    let selecionada = document.querySelector('.selected');
    let selecionar = event.target;
    selecionada.classList.remove('selected');
    selecionar.classList.add('selected')
    console.log(selecionar)
})