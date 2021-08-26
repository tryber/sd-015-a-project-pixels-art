const pixelLines = document.getElementsByClassName('pixel-lines');

function addPixelsLines() {
    for (let index = 0; index < pixelLines.length; index += 1) {
        for (let index2 = 0; index2 < 5; index2 += 1){
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixelLines[index].appendChild(pixel);
        } 
    }    
}
addPixelsLines();




//Requisito 8

const boardPixel = document.getElementById('pixel-board')
boardPixel.addEventListener('click', (event) => {
    if(event.target.className === 'pixel') {
        const colorCurrent = document.querySelector('.selected').id;
        const colorSelected = event.target;
        colorSelected.style.backgroundColor = colorCurrent; 
    }
})