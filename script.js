window.onload = function() {
    let getSelected = document.getElementsByClassName('color selected');
    let getPallet = document.querySelector('#color-palette');
    let getColor = document.querySelectorAll('.color');

    getPallet.addEventListener('click', function(event) {
        let selected = event.target.className;
        if(selected !== "color selected") {
            getSelected[0].className = 'color';
            event.target.className = 'color selected';
        }
    })

    let getPixelBoard = document.querySelector('#pixel-board');

    getPixelBoard.addEventListener('click', function(event) {
        let pixel = event.target.style.backgroundColor;
        let cssBackground = window.getComputedStyle(getSelected[0]).backgroundColor;
        if (pixel !== cssBackground) {
            event.target.style.backgroundColor = cssBackground;
        }
    })
}
// ### 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

// **O que será verificado:**

// - Verifica se ao carregar a página deve ser possível pintar os pixels de preto

// - Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

// - Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.