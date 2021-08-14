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
// const divs = []
// function colorForChange () {
//  const color1 = document.getElementsById('color-palette')

//  for (let index = 0; index < 26; index += 1) {
//      let inColor = color1[index]
//      const divColor = document.createElement('div')
//      if (inColor = inColor[0])
//      divColor.className = 'color'
//      divColor.innerHTML = inColor
//      color1.appendChild(divColor)
//  }

const cont = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']; 
function criarQ () {
const divs = document.getElementById('pixel-board')
for (let i = 0; i < cont.length; i += 1) {
    let linha = cont[i];
    const div25 = document.createElement('div')
    div25.className = 'color'
    div25.innerHTML = linha
    divs.appendChild(div25)
}
}
criarQ()
