let colorDiv = document.querySelectorAll('.color');
let styleColor = ['black', 'red', 'pink', 'purple'];
let pixelBord = document.getElementById('pixel-board');
let colorSelected = document.getElementsByTagName('div')[0];
let columnDiv = 5;
let lineDiv = 5;

function changeColorDiv() {
  for (let index = 0; index < colorDiv.length; index += 1) {
    colorDiv[index].style.backgroundColor = styleColor[index];
    console.log(colorDiv[index]);
  }
}
changeColorDiv();

function creatPixelBord() {
  for (let index = 0; index < columnDiv; index += 1) {
    let creatBordColumn = document.createElement('div');
    pixelBord.appendChild(creatBordColumn);
    creatBordColumn.className = 'pixel';
    for (let index = 1; index < lineDiv; index += 1) {
      let creatBordLine = document.createElement('div');
      pixelBord.appendChild(creatBordLine);
      creatBordLine.className = 'pixel';
    }
  }
}
creatPixelBord();

let palleteColor = document.querySelectorAll('.color');

function selectColor() {
  for (let index = 0; index < palleteColor.length; index += 1) {
    palleteColor[index].addEventListener('click', function (evt) {
      document.querySelector('.selected').classList.remove('selected');
      evt.target.classList.add('selected');
    });
  }
}
selectColor(); // 7 ok

// let palleteColor = document.getElementById('color-palette');

// palleteColor.addEventListener('click', function (evt) {
//   if(evt.target.className.includes('color')){
//     document.querySelector('.selected').classList.remove('selected');
//     evt.target.classList.add('selected');
//   }
// }); outra forma de fazer o requisto 7 .
