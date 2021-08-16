const linhaLousa = 5;
const colunaLousa = 5;

let getBlack = document.getElementById('preto');
let getBlue = document.getElementById('azul');
let getRed = document.getElementById('vermelho');
let getGreen = document.getElementById('verde');
const getColor = document.querySelectorAll('.color');
window.onload = getBlack.classList.add('selected');
let getPixels = document.getElementsByClassName('pixel');
let corSelecionada = window.getComputedStyle(getBlack).backgroundColor;

function createLousa(element, desiredClass, father) { 
  let box = document.createElement(element);
  document.getElementById(father).appendChild(box);
  box.className = desiredClass;
  box.addEventListener('click', function(event) {
  event.target.style.backgroundColor = corSelecionada;  
   });
}

for (let preencheColuna = 0; preencheColuna < colunaLousa; preencheColuna += 1) {
  for (let preencheLinha = 1; preencheLinha <= linhaLousa; preencheLinha += 1) {
    createLousa('div', 'pixel', 'pixel-board');
  }
  createLousa('br', 'quebraLinha', 'pixel-board');
}

for (let changeColor = 0; changeColor < getColor.length; changeColor += 1) {
  getColor[changeColor].addEventListener('click', function setColor(element) {
    let target = element.target
    corSelecionada = window.getComputedStyle(target).backgroundColor;    
    let selected = document.querySelector('.selected');
  if (selected.classList.contains("selected")) {
    selected.classList.remove("selected");
  } 
    element.target.classList.add('selected')
  });
}
