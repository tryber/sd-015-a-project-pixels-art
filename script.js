window.onload = function(){
    document.querySelector('.color').classList.add('selected')
}

// 7.

let black = document.querySelector('#blackSquare');
let blue = document.querySelector('#blueSquare');
let yellow = document.querySelector('#yellowSquare');
let red = document.querySelector('#redSquare');

black.addEventListener('click', clickBlack);
blue.addEventListener('click', clickBlue);
yellow.addEventListener('click', clickYellow);
red.addEventListener('click', clickRed);

function clickBlack(){
    black.classList.add('selected')
    blue.classList.remove('selected')
    yellow.classList.remove('selected')
    red.classList.remove('selected')
}

function clickBlue(){
    blue.classList.add('selected')
    black.classList.remove('selected')
    yellow.classList.remove('selected')
    red.classList.remove('selected')
}

function clickYellow(){
    yellow.classList.add('selected')
    blue.classList.remove('selected')
    black.classList.remove('selected')
    red.classList.remove('selected')
}

function clickRed(){
    red.classList.add('selected')
    blue.classList.remove('selected')
    yellow.classList.remove('selected')
    black.classList.remove('selected')
}

// 8.
