
// Requisito 06 - Define a cor preta como padrão de seleção (selected)
// Ref.: branch artur-bacilla-project-pixels-art
let selected = document.getElementById('color-palette');
let qtdColors = selected.children.length;

function clearSelected() {
    for (let i = 0; i < qtdColors; i += 1) {
        if (selected.children[i].classList.contains('selected')) {
            selected.children[i].classList.remove('selected');
        };
    }
}

function standardSelected() {
    let standard = document.getElementById('color1');
    standard.classList.add('selected');
}

standardSelected();

// Requisito 07 - Seleciona a cor para preenchimento do pixel
selected.addEventListener('click', selectColor);

function selectColor(color) {
    clearSelected();
    let selectColor = color.target.id;
    let selectColor2 = color.target;
    selectColor2.classList.add('selected');
    console.log(selectColor);
    console.log(selectColor2);
    return selectColor;
    }






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
// Ref.: https://github.com/tryber/exercise-end-block5
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
