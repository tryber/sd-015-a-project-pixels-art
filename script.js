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

