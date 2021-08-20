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