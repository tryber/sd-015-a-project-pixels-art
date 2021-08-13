const palette = document.getElementById('color-palette');
const colors = ['rgb(0, 0, 0)', 'rgb(142, 35, 107)', 'rgb(255, 127, 0)', 'rgb(33, 94, 33)'];

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

