const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
let color;
let pixel;

function selectColor(e) {
    for (color of colors){
        color.classList.remove('selected');
    }
    e.target.classList.add('selected');
}

function setColor(e) {
    e.target.style.backgroundColor = 'black';
}

for(color of colors) {
    color.addEventListener('click', selectColor);
}

for(pixel of pixels) {
    pixel.addEventListener('click', setColor);
}