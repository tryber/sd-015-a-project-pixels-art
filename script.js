function selecionaCor(cor) {
 document.getElementsByClassName('selected').classlist.remove('selected');
 cor.target.classlist.add('selected'); 
}

for (let cor = 0; cor < document.getElementsByClassName('color').length; cor += 1) {
    document.getElementsByClassName('color')[cor].addEventListener('click', selecionaCor);
}