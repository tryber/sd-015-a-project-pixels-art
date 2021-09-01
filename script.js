const paleta = document.getElementById('color-palette');
const cores = document.querySelectorAll('.color');
const input = document.getElementById('board-size');
const button = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
const pixel = document.querySelector('.pixel')
const buttonLimpar = document.getElementById('clear-board');

// Alerta botão VQV
button.addEventListener('click', function(){
    if(input.value === ''){
        alert('Board inválido!');
    }
})

// Requisito 07
function selecionarCor(event){
    let selecionada = document.querySelector('.selected');
    let selecionar = event.target;
    selecionada.classList.remove('selected');
    selecionar.classList.add('selected')
    console.log(selecionar)
}

paleta.addEventListener('click', selecionarCor)

// Requisito 08 
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// getComputedStyle(elemento)

function pintar(event){
    let select = document.querySelector('.selected');
    let corSelecionada = getComputedStyle(select);
    let backgorund = corSelecionada.backgroundColor;
    event.target.style.backgroundColor = backgorund;
}

const pix = document.querySelectorAll('.pixel');

for (let index = 0; index < pix.length; index += 1){
pix[index].addEventListener('click', pintar)
}

// Requisito 09

buttonLimpar.addEventListener('click', function(){
    for (let index = 0; index < pix.length; index += 1){
        pix[index].style.backgroundColor = 'white'
    }
})

// Requisito 10 
// Verifica se o input só aceita número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento `input`
// https://pt.stackoverflow.com/questions/104018/limite-m%C3%ADnimo-e-m%C3%A1ximo-de-um-n%C3%BAmero-em-um-input-do-tipo-number //

