const palette = document.getElementById('color-palette');
const colors = ['rgb(246, 169, 169)', 'rgb(255, 191, 134)', 'rgb(255, 244, 125)', 'rgb(194, 247, 132)'];

function createItemsPalette() {
    for (let color of colors) {
        let itemPalette = document.createElement('li');
        itemPalette.className = 'color';
        itemPalette.style.width = '100px';
        itemPalette.style.height = '100px';
        itemPalette.style.display = 'inline-block';
        itemPalette.style.borderWidth = '1px';
        itemPalette.style.borderStyle = 'solid';
        itemPalette.style.borderColor = 'black';
        itemPalette.style.backgroundColor = color;
        palette.appendChild(itemPalette);
    }
}
createItemsPalette();

