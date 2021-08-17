function corDinamPaleta() {
    let arrCoresPaleta = ['black', 'blue', 'yellow', 'red'];

    for (let i = 0; i < arrCoresPaleta.length; i += 1) {
        let div = document.getElementsByTagName('div')[i];
        div.style.backgroundColor = arrCoresPaleta[i];
        div.innerHTML;

    }

}
corDinamPaleta();

function criaPixels() {
    let getBody = document.querySelector('body');
    let divPaiPixels = document.createElement('div');
    divPaiPixels.className = 'estiloPixelPai';
    divPaiPixels.id = 'pixel-board';
    divPaiPixels.innerHTML;
    getBody.appendChild(divPaiPixels);

    for (let i = 0; i < 5; i += 1) {
        let getDivPai = document.querySelector('#pixel-board');
        let linha = document.createElement('div');
        linha.innerHTML;
        getDivPai.appendChild(linha);

        for (let j = 0; j < 5; j += 1) {
            let getLinha = document.getElementsByClassName('pixel');
            let blocoDe5 = document.createElement('div');
            blocoDe5.className = 'pixel';
            blocoDe5.innerHTML;
            linha.appendChild(blocoDe5);
        }

    }

}
criaPixels();



/*window.onload = function() {
    let corSelecionada = document.querySelector('#divBlack');
    corSelecionada.className = 'selected';
}*/

function selected() {

}

function selecionaCor() {

}