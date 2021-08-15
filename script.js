//color pallete
function createPalette() {
    for (let i = 0; i <  4; i += 1) {
    let colorsArray = ['black', 'red', 'green', 'blue'];
    let color = document.querySelectorAll('.color')[i];
    color.style.backgroundColor = colorsArray[i];
   }
}
createPalette();


