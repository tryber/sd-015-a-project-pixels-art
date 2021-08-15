function selecionaCor(cor) {
    document.querySelector('.selected').classList.remove('selected');
    cor.target.classList.add('selected'); 
}

// for (let cor = 0; cor < document.querySelectorAll('.color').length; cor += 1) {
//     document.querySelectorAll('.color')[cor].addEventListener('click', selecionaCor);
// }

document.querySelector('#color-palette').addEventListener('click', selecionaCor);
