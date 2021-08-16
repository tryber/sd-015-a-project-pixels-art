let elementMain = document.createElement('main');
let pallete = document.createElement('section');

const possColors = ['black', 'chartreuse', 'crimson', 'deepskyblue'];

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

function setColors() {
    const unlockedColors = document.getElementById('color-palette').children;
    for (let ind = 0; ind < possColors.length; ind += 1) {
        unlockedColors[ind].style.backgroundColor = possColors[ind];
    }
}

// function settingBorder() {
    //     for (let i = 0; i <= 3; i += 1) {
        //     let colors = document.getElementsByClassName('color')[i];
        //     colors.style.borderWidth = '1px';
        //     }    
        // }
        
window.onload = function start() {
    document.querySelector('.color').classList.add('selected');
}
        
createColorsPalleteTitle()
createPallete()
createColors()
setColors()
        // settingBorder()
boardOfP()
pixels()