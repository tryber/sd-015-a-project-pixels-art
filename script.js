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

function settingBorder() {
    for (let i = 0; i <= 3; i += 1) {
    let colors = document.getElementsByClassName('color')[i];
    colors.style.borderWidth = '1px';
    }    
}

createColorsPalleteTitle()
createPallete()
createColors()
settingBorder()

