function firstSelection(){
  let initialColor = document.querySelector('#c1');
  initialColor.classList.add('selected');
};

firstSelection();

function changeColorClass(event){
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
  confirm('cor selecionada')
};

let c1 = document.querySelector('#c1');
c1.addEventListener('click', changeColorClass);
let c2 = document.querySelector('#c2');
c2.addEventListener('click', changeColorClass);
let c3 = document.querySelector('#c3');
c3.addEventListener('click', changeColorClass);
let c4 = document.querySelector('#c4');
c4.addEventListener('click', changeColorClass);

//Requisito 8 (aplicar cor selecionada para um pixel em branco). usei variável.style.backgroundColor e não ia... achei na internet sobre o getComputedStyle. 
//site 1 https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle 
//site 2 https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp //

function applyingColor(event){
  let c = document.querySelector('.selected');
  let p = window.getComputedStyle(c).getPropertyValue('background-color');
  event.target.style.backgroundColor = p;
};

let whitePixel = document.querySelectorAll('.pixel');
for (let i = 0; i < whitePixel.length; i += 1){
  whitePixel[i].addEventListener('click', applyingColor);
}


