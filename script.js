// requisito 6 adicionando selected ao primeiro elemento
let colocaClasse = document.getElementsByClassName('color')[0];
colocaClasse.classList.add('selected')


// Requisito 07 clicando na cor
const clickColor = document.querySelectorAll('.color');
for (let index = 0; index < clickColor.length; index += 1) {
  clickColor[index].addEventListener('click', targetColor);
}

const selectedColor = document.getElementsByClassName('color');

function removeSelect () {
  for (let index = 0; index < selectedColor.length; index+= 1) {
    selectedColor[index].classList.remove('selected')
  }
}

function targetColor (event) {
  removeSelect();
  event.target.classList.add('selected');
}

// Requisito 8 colorindo as caixas
const setBox = document.getElementsByClassName('pixel');

for (let index = 0; index < setBox.length; index += 1) {
  setBox[index].addEventListener('click', fillBoxPixel);
}

function fillBoxPixel (event) {
  const boxPixel = event.target;
  const selectedColor = document.querySelector('.selected')
  const style = getComputedStyle(selectedColor)
  boxPixel.style.backgroundColor = style.backgroundColor;
}

// Requisito 9 Criar botao 
const colorPalette = document.getElementById('clear-board');

colorPalette.addEventListener('click', paintBoxPixels)

function paintBoxPixels () {
 for (let index = 0; index < setBox.length; index+=1) {
   setBox[index].style.backgroundColor = "white"
 }
}

// Requisito 10 - tive ajuda dos meus colegas caio e leonardo.

const setButtonGenerate = document.getElementById('generate-board');


function transFormPixels (){
  
  const valueInput = document.getElementById('board-size');
  if(valueInput.value == 0) {
    alert("Board inválido!");
  } else  if (valueInput.value < 5 ) {
    let fixedPixels = 25;
    removeDivs();
    for (let index = 0; index < fixedPixels; index+= 1) { 
      const creatDivs = document.createElement('div');
      creatDivs.className = 'pixel';
      divs.appendChild(creatDivs);
      creatDivs.addEventListener('click', fillBoxPixel);
    }

  } else if (valueInput.value > 50 ) {
    let fixedPixels2 = 2500;
    removeDivs();
    for (let index = 0; index < fixedPixels2; index+= 1) { 
      const creatDivs = document.createElement('div');
      creatDivs.className = 'pixel';
      divs.appendChild(creatDivs);
      creatDivs.addEventListener('click', fillBoxPixel);
    }
    const sizePixel = 50 * 45;
    divs.style.width = sizePixel + 'px';
    divs.style.height = sizePixel + 'px';  

  }  else {
    removeDivs();  
    const qtdDivs = valueInput.value * valueInput.value;
    for (let index = 0; index < qtdDivs; index += 1) {      
      const creatDivs = document.createElement('div');
      creatDivs.className = 'pixel';
      divs.appendChild(creatDivs);
      creatDivs.addEventListener('click', fillBoxPixel);
     }
    const sizePixel = valueInput.value * 45;
    divs.style.width = sizePixel + 'px';
    divs.style.height = sizePixel + 'px';    
  }
}
setButtonGenerate.addEventListener('click', transFormPixels);

const divs = document.getElementById('pixel-board');
function removeDivs () {
  divs.innerHTML = "";
}

//Requisito 12 cores aleatorias

const color01 = document.querySelector('.purple');
const color02 = document.querySelector('.darkgreen');
const color03 = document.querySelector('.red');

function randomNumberColor (){
 const colorRed = parseInt( Math.random() * 255);
 const colorGreen = parseInt( Math.random() * 255);
 const colorBlue = parseInt( Math.random() * 255);
const randomColor = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
return randomColor;
}

function colorRandom (){
  color01.style.backgroundColor = randomNumberColor();
  color02.style.backgroundColor = randomNumberColor();
  color03.style.backgroundColor = randomNumberColor();
}
colorRandom();
