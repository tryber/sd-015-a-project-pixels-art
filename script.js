window.onload = function colors() {
    for(let i = 0; i < 25; i += 1) {
        document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white'
    }
}

paletteListener();
pixelBoardListener();

function selectColor(paletteClick) {
    let selected = document.getElementsByClassName('selected')[0];
    selected.classList.remove('selected');
    paletteClick.target.classList.add('selected');
}

function printColor(pixelClick) {
    pixelClick.target.style.backgrounColor = selected.style.backgrounColor;
}

function paletteListener() {
    let colorPalette = document.getElementsByClassName('color');
    for(let i = 0; i < colorPalette.length; i += 1) {
        colorPalette[i].addEventListener('click', selectColor);
    } 
}

function pixelBoardListener() {
    let pixelBoard = document.getElementsByClassName('pixel');
    for(let i = 0; i < pixelBoard.length; i += 1) {
        pixelBoard[i].addEventListener('click', printColor);
    }
}
