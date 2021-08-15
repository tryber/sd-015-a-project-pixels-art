let colorDiv = document.querySelectorAll('.color');
let pixelBord = document.getElementById('pixel-board');
let colorSelected = document.getElementsByTagName('div')[0];
let columnDiv = 5;
let lineDiv = 5;


function randomColor() {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   
   return `rgb(${r}, ${g}, ${b})`; //https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
}


function changeColorDiv() {
  for (let index = 1; index < colorDiv.length; index += 1) {
    colorDiv[index].style.backgroundColor = randomColor();
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

function selectColor() {
  for (let index = 0; index < colorDiv.length; index += 1) {
    colorDiv[index].addEventListener('click', function (evt) {
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
