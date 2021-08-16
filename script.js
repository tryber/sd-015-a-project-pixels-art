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
  for (let index = 0; index < colorDiv.length; index += 1) {
    if (!colorDiv[index].className.includes('black')) {
      colorDiv[0].style.backgroundColor = 'black';
    }
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

//  colorDiv.addEventListener('click', function (evt) {
//   if(evt.target.className.includes('color')){
//     document.querySelector('.selected').classList.remove('selected');
//     evt.target.classList.add('selected');
//   }
// }); outra forma de fazer o requisto 7 .

pixelBord.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    let corSelecionada =
      document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = corSelecionada;
  }
});

// for (let index = 0; index < pixelBordChildren.length; index += 1) {
//   pixelBordChildren[index]

// }
