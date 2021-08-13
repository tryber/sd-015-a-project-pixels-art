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

    let button = document.querySelector('button');

    button.addEventListener('click', function() {
        let getPixel = document.querySelectorAll('.pixel')
        for (let index = 0; index < getPixel.length; index += 1) {
            getPixel[index].style.backgroundColor = "rgb(255,255,255)";
        }
    })
}

// ### 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

// **O que será verificado:**

// - Verifica se o botão tem o `id` denominado `clear-board`

// - Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

// - Verifica se o texto do botão é \'Limpar\'

// - Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco