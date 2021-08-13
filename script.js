//Requisito 2 e 3
//Cria elemento Paleta de Cores com id color-palette
function createColorPalette () {
  let colorPalette = document.createElement('div');
  let getSection = document.querySelector('#section-colors');
  colorPalette.id = 'color-palette';
  getSection.appendChild(colorPalette);
};
createColorPalette ();

//Cria classe color para cada cor individual da paleta de cores
function createClassColor () {
  for (let index = 1; index <= 4; index += 1) {
    let getColor = document.getElementById('color-palette');
    let newColor = document.createElement('div');
    getColor.appendChild(newColor);
    newColor.className = 'color';
  }
};
createClassColor ();

//Adicionando cor de fundo à cada elemento da paleta. RESOLVE TAMBÈM REQUISITO 3 (Que pede que a primeira cor da paleta de cores seja PRETA).
function addBackgroundColor (backgroundColors) {
  
  let getClassColor = document.getElementsByClassName('color');
  for (let index = 0; index < getClassColor.length; index += 1) {
    getClassColor[index].style.backgroundColor = background[index];
  }
};
let background = ['black', 'red', 'blue', 'green'];
addBackgroundColor (background);
