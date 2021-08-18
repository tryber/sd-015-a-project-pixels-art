

window.onload = colorblack

function colorblack(){
let element = document.querySelector(".color")
//na lista de classes de element add selected
// source https://www.w3schools.com/howto/howto_js_add_class.asp  -------  https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
element.classList.add("selected");
return colorblack
}

//Source: https://www.mundojs.com.br/2018/01/11/diferenca-de-classname-classlist-e-setattribute/

let buttonBlack = document.getElementsByClassName ('color')[0];
let buttonRed = document.getElementsByClassName ('color')[1];
let buttonGreen = document.getElementsByClassName ('color')[2];
let buttonBrown = document.getElementsByClassName ('color')[3];

buttonBlack.addEventListener('click', clickBlack);
buttonRed.addEventListener('click', clickRed);
buttonGreen.addEventListener('click', clickGreen);
buttonBrown.addEventListener('click', clickBrown);


function clickBlack() {
    buttonBlack.className = 'color selected';
    buttonRed.className = 'color';
    buttonGreen.className = 'color';
    buttonBrown.className = 'color';

}
function clickRed() {
    buttonBlack.className = 'color';
    buttonRed.className = 'color selected';
    buttonGreen.className = 'color';
    buttonBrown.className = 'color';

}
function clickGreen() {
    buttonBlack.className = 'color';
    buttonRed.className = 'color';
    buttonGreen.className = 'color selected';
    buttonBrown.className = 'color';

}
function clickBrown() {
    buttonBlack.className = 'color';
    buttonRed.className = 'color';
    buttonGreen.className = 'color';
    buttonBrown.className = 'color selected';
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
