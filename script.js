// const base = 5 
// const linhas = base
// const board = document.querySelector('#pixel-board')

// function criarPixels () {
//     for (let i = 0; i < base; i += 1);
//     let pixel = base[i];
//     let quadrados = document.createElement('div')
//     quadrados.className = 'color';
//     quadrados.innerHTML = pixel;
//     board.appendChild(quadrados)
// }
//criarPixels();
const divs = []
function colorForChange () {
 const color1 = document.getElementsByClassName('color-palette')

 for (let index = 0; index < color1.length; index += 1) {
     let inColor = color1[index]
     const divColor = document.createElement('div')
     if (inColor = color1[0])
     divColor.className = 'color'
     divColor.innerHTML = inColor
     color1.appendChild(divColor)
 }
}
colorForChange(color1)