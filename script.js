

window.onload = colorblack

function colorblack(){
let element = document.querySelector(".color")
//na lista de classes de element add selected
// source https://www.w3schools.com/howto/howto_js_add_class.asp  -------  https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
element.classList.add("selected");
return colorblack
}


function createTable() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    //adiciona linhas
    const pixelLine = document.createElement('div');
    pixelLine.id ="line";
    pixelBoard.appendChild(pixelLine);
    // adiciona 5 colunas para cada linha
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixelColumn = document.createElement('div');
      pixelLine.appendChild(pixelColumn);
      pixelColumn.className = 'pixel';
    }
  }
}
createTable();
