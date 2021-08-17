const colorPalette = document.querySelectorAll('.color');
let selectedColor = document.querySelector('.selected').style.backgroundColor;
const allPixels = document.querySelectorAll('.pixel');

console.log(selectedColor);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    let allDivs = [0, 1, 2, 3];
    for (let i = 0; i < allDivs.length; i += 1) {
        document.querySelectorAll('.color')[i].style.backgroundColor = getRandomColor();
    }
}

function firstDivColor() {
    let allDivs = [0, 1, 2, 3];
    for (let i = 1; i < allDivs.length; i += 1) {
        document.querySelectorAll('.color')[i].style.backgroundColor = getRandomColor();
    }
    document.querySelector('.color').style.backgroundColor = 'black';
}



function changeSelectedColor() {
    for (let i = 0; i < colorPalette.length; i += 1) {
        colorPalette[i].addEventListener('click', (event) => {
            for (let i = 0; i < colorPalette.length; i += 1) {
                colorPalette[i].classList.remove('selected');
            }
            event.target.classList.add('selected');
            selectedColor = event.target.style.backgroundColor;
        })
    }
}

function addColorToPixel() {
    for (let i = 0; i < allPixels.length; i += 1) {
        allPixels[i].addEventListener('click', (event) => {
            event.target.style.backgroundColor = selectedColor;
        })
    }
}

function initialColor() {
    selectedColor = 'black';
}

function clearPixelColor() {
    for (let i = 0; i < allPixels.length; i += 1){
        allPixels[i].style.backgroundColor = 'white';
    }
}


window.onload = function () {
    initialColor();
    firstDivColor();
    changeSelectedColor();
    addColorToPixel();
};




// // Req. 1

// const myTitle = document.createElement('h1');
// myTitle.id = ('title');
// myTitle.innerHTML = 'Paleta de Cores';
// document.body.appendChild(myTitle);

// // Req. 2

// const colors = document.createElement('div');
// document.body.appendChild(colors);
// colors.id = 'color-palette';

// const color1 = document.createElement('div');
// const color2 = document.createElement('div');
// const color3 = document.createElement('div');
// const color4 = document.createElement('div');

// const colorArr = [color1, color2, color3, color4];

// function appendMultipleChilds(childs = [], elementoPai) {
//     for (let i = 0; i < childs.length; i += 1) {
//         elementoPai.appendChild(childs[i]);
//     }
// };

// function addClassName(childs = [], name) {
//     for (let i = 0; i < childs.length; i += 1) {
//         childs[i].className = name
//     }
// }

// appendMultipleChilds(colorArr, colors);
// addClassName(colorArr, 'color');