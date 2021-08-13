window.onload = function(){
    document.querySelector('.color').classList.add('selected')
}

let black = document.querySelector('#black');
let green = document.querySelector('#green');
let red = document.querySelector('#red');
let blue = document.querySelector('#blue');

black.addEventListener('click', clickBlack);
green.addEventListener('click', clickGreen);
red.addEventListener('click', clickRed);
blue.addEventListener('click', clickBlue);

function clickBlack(){
    black.classList.add('selected')
    green.classList.remove('selected')
    red.classList.remove('selected')
    blue.classList.remove('selected')
}

function clickGreen(){
    green.classList.add('selected')
    black.classList.remove('selected')
    red.classList.remove('selected')
    blue.classList.remove('selected')
}

function clickRed(){
    red.classList.add('selected')
    black.classList.remove('selected')
    green.classList.remove('selected')
    blue.classList.remove('selected')
}

function clickBlue(){
    blue.classList.add('selected')
    black.classList.remove('selected')
    green.classList.remove('selected')
    red.classList.remove('selected')
}