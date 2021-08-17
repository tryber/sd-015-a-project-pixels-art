function corDinamPaleta() {
    let arrCoresPaleta = ['black', 'blue', 'yellow', 'red'];

    for (let i = 0; i < arrCoresPaleta.length; i += 1) {
        let div = document.getElementsByTagName('div')[i];
        div.style.backgroundColor = arrCoresPaleta[i];
        div.innerHTML;

    }

}
corDinamPaleta();

function criaBtnLimp() {
    let getCores = document.getElementsByClassName('color');
    let getDivsPixels = document.getElementsByClassName('pixel');

    let getBody = document.querySelector('body');
    let btnLimpa = document.createElement('button');
    btnLimpa.id = 'clear-board';
    btnLimpa.innerText = 'Limpar';
    btnLimpa.className = ('estlLimpa');
    btnLimpa.innerHTML;
    getBody.appendChild(btnLimpa);

    btnLimpa.addEventListener('click', function(event) {

        for (let i = 0; i < getDivsPixels.length; i += 1) {

            getDivsPixels[i].style = '.pixel';
            getDivsPixels.innerHTML;

        }


    });

}
criaBtnLimp();

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

window.onload = function() {
    let corSelecionada = document.querySelector('#divBlack');
    corSelecionada.className = 'selected color';
}

function selectedCor() {
    let getCores = document.getElementsByClassName('color');
    let getDivsPixels = document.getElementsByClassName('pixel');
    getCores[0].addEventListener('click', function(event) {

        getCores[0].className = 'color selected';
        getCores[1].className = 'color';
        getCores[2].className = 'color';
        getCores[3].className = 'color';
    });

    getCores[1].addEventListener('click', function(event) {
        getCores[1].className = 'color selected';
        getCores[0].className = 'color';
        getCores[2].className = 'color';
        getCores[3].className = 'color';


    });

    getCores[2].addEventListener('click', function(event) {
        getCores[2].className = 'color selected';
        getCores[0].className = 'color';
        getCores[1].className = 'color';
        getCores[3].className = 'color';

    });

    getCores[3].addEventListener('click', function(event) {
        getCores[3].className = 'color selected';
        getCores[0].className = 'color';
        getCores[1].className = 'color';
        getCores[2].className = 'color';

    });


}
selectedCor();

function colorePixel() {
    let getDivsPixels = document.getElementsByClassName('pixel');

    for (let i = 0; i < getDivsPixels.length; i += 1) {

        getDivsPixels[i].addEventListener('click', function(event) {
            let getCorClicada = document.querySelector('.selected');
            let cor = getCorClicada.style.backgroundColor;
            getDivsPixels[i].style.backgroundColor = (cor);

        });
    }
}
colorePixel();