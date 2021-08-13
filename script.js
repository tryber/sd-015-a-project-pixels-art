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
