let elementMain = document.createElement('main');
let pallete = document.createElement('section');
const pal = document.getElementById('color-palette');


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

function createColorClass() {
    for (let i = 1; i <= 4; i += 1) {
    let color = document.createElement('div');
    color.className = 'color';
    pallete.appendChild(color);
    }
}

function setColors() {
    const unlockedColors = document.getElementById('color-palette').children;
    for (let ind = 0; ind < possColors.length; ind += 1) {
        unlockedColors[ind].style.backgroundColor = possColors[ind];
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
        pix.className = 'pixel';
        getPB.appendChild(pix);
    }
}

function selec(action) {
    const abcd = document.getElementsByClassName('color');
    for (let index = 0; index < abcd.length; index += 1) {
        abcd[index].addEventListener(action, function (action) {
            document.querySelector('.selected').classList.remove('selected');
            action.target.classList.add('selected');               
        })
        
    }

}

function changeColor(clickP) {
    const abcd = document.getElementsByClassName('pixel');
    for (let index = 0; index < abcd.length; index += 1) {
        abcd[index].addEventListener(clickP, function (clickP) {
            const colP = document.getElementsByClassName('selected')[0].style.backgroundColor;
            console.log(colP);
            clickP.target.style.backgroundColor = colP;  
        })
    }
}


window.onload = function start() {
    
    document.querySelector('.color').classList.add('selected');
}



createColorsPalleteTitle();
createPallete();
createColorClass();
setColors();

boardOfP();
pixels();
selec('click')
changeColor('click')

