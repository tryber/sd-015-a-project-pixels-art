let elementMain = document.createElement('main');
let pallete = document.createElement('section');


function createColorsPalleteTitle() {
    let ch1 = document.createElement('h1');
    ch1.id = 'title';
    ch1.innerText = 'Paleta de Cores';
    document.body.appendChild(ch1);
}

function createPallete() {
    pallete.id = 'color-palette';
    document.body.appendChild(elementMain);
    elementMain.appendChild(pallete);
}

function createColors() {
    for (let i = 1; i <= 4; i += 1) {
    let color = document.createElement('div');
    color.className = 'color';
    color.id = 'c' + i;
    pallete.appendChild(color);
    }
}

function boardOfP() {
    let sec = document.createElement('section');
    sec.id = 'pixel-board';
    elementMain.appendChild(sec);
}

function pixels() {
    for (let i = 0; i <= 4; i += 1) {
        let palB = document.getElementById('pixel-board');
        let line = document.createElement('div');
        line.className = 'line';
        palB.appendChild(line);
        lineP(i);

    }
}

function lineP(ln) {
    for (let i2 = 1; i2 <= 5; i2 += 1) {
        let getPB = document.getElementsByClassName('line')[ln];
        let pix = document.createElement('div');
        pix.className = 'pixel clicked';
        pix.id = 'a' + i2;
        getPB.appendChild(pix);
        
    }
}

function brush() {
    document.addEventListener('click', selecting())
}

function selecting() {
    
}

let selected = 'black'
let selectable1 = document.querySelector('#c1');
let selectable2 = document.querySelector('#c2');
let selectable3 = document.querySelector('#c3');
let selectable4 = document.querySelector('#c4');

// function settingBorder() {
//     for (let i = 0; i <= 3; i += 1) {
//     let colors = document.getElementsByClassName('color')[i];
//     colors.style.borderWidth = '1px';
//     }    
// }

createColorsPalleteTitle()
createPallete()
createColors()
// settingBorder()
boardOfP()
pixels()