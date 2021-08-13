window.onload = function colors() {
    for(let i = 0; i < 25; i += 1) {
        document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white'
    }
}

eventListener();

function selectColor(click) {
    let selected = document.getElementsByClassName('selected')[0];
    selected.classList.remove('selected');
    click.target.classList.add('selected');
}

function eventListener() {
    let colorPalette = document.getElementsByClassName('color');
    for(let i = 0; i < colorPalette.length; i += 1) {
        colorPalette[i].addEventListener('click', selectColor);
    } 
}

