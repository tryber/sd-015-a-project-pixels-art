//Seleciona a cor
let cor = document.querySelectorAll('.color');
let selected = document.querySelector('.selected')
for (let i = 0; i < cor.length; i++) {
    cor[i].addEventListener('click', trocaCor)
    function trocaCor () {
        selected.classList.remove('selected');
        cor[i].classList.add('selected');
        selected = cor[i];
    }
}

//Pinta o pixel com a cor selecionada
let pixel = document.querySelectorAll('.pixel')
for (let i = 0; i < pixel.length; i++){
    pixel[i].addEventListener('click', pintar)
    function pintar (){
        pixel[i].style.backgroundColor =  selected.classList[1]
    }
}



