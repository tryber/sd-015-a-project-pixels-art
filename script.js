
// Requisito 06 - Define a cor preta como padrão de seleção (selected)
let selected = document.getElementById('color-palette');
let qtdColors = selected.children.length;

function clearSelected() {
    for (let i = 0; i < qtdColors; i += 1) {
        selected[i].classList.remove('selected');
    }
}

function standardSelected() {
    let standard = document.getElementById('color1');
    standard.classList.add('selected');
}

standardSelected();

// Requisito 07
// selected.addEventListener('click', selectColor);

// function selectColor(color) {
//     let selectColor = color.target.id;
//     return selectColor;
// }

// // Limpeza da classe selected
// let listColors = selected.children;

// for (i = 0;i < qtdColors; i += 1) {
//     let comparedColor = listColors[i];
//     let comparedColorId = comparedColor.id;
//     if (selectColor !== comparedColorId) {
//         if (comparedColor.classList.contains('selected')) {
//             comparedColor.remove('selected');
//         // } else {
//         //     comparedColor.classList = 'selected';
//         }
//     }
// // }



// Requisito 10
let numberOfBlocks = 5;
let pixelBoard = document.querySelector('#pixel-board');

for (i = 0; i < numberOfBlocks; i += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'line';
    
    for (let j = 0; j < numberOfBlocks; j += 1) {
        let block = document.createElement('div');
        block.className = 'pixel';
        pixelLine.appendChild(block);
    }
    
    pixelBoard.appendChild(pixelLine);

}
