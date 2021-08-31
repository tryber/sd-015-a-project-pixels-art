const paleta = document.getElementById('color-palette');
const cores = document.querySelectorAll('.color');
const seleciona = document.getElementsByClassName('selected');
const input = document.getElementById('board-size');
const button = document.getElementById('generate-board')

button.addEventListener('click', function(){
    if(input.value === ''){
        alert('Board inválido!');
    }
})

