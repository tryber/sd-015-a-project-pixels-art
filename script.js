
// Requisito 07
let selected = document.getElementById('color-palette');
selected.addEventListener('click', selectColor);

function selectColor(color) {
    let selectColor = color.target.id;
    return selectColor;
}

// Limpeza da classe selected
let qtdColors = selected.children.length;
let listColors = selected.children;

for (i = 0;i < qtdColors; i += 1) {
    let comparedColor = listColors[i];
    let comparedColorId = comparedColor.id;
    if (selectColor !== comparedColorId) {
        if (comparedColor.classList.contains('selected')) {
            comparedColor.remove('selected');
        // } else {
        //     comparedColor.classList = 'selected';
        }
    }
// }


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
