// requisito 6 // 

const corInicial = document.querySelector('.color');
corInicial.classList += ' selected';

//requisito 7 //

const tdColor = document.querySelectorAll('.color');
for (const element of tdColor) {
  element.addEventListener('click', changeSelected);
}
function changeSelected(event) {
  const removeClass = document.querySelector('.selected')
  removeClass.classList.remove('selected');
  event.target.className = 'color selected';
}

//requisito 8 //

function changeColor2() {
  let paint = document.querySelectorAll('.pixel');
  for (const element of paint) {
    element.addEventListener('click', changeColor);
  }
}
changeColor2()

function changeColor(event) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  const colorPaint = getComputedStyle(colorSelected);
  event.target.style.backgroundColor = colorPaint.backgroundColor;
}

//requisito 9 //

const clear = document.getElementById('clear-board');
clear.addEventListener('click', limparQuadro);

function limparQuadro() {
  let paint = document.querySelectorAll('.pixel');
  for (element of paint) {
    element.style.backgroundColor = 'white';
  }
}

// requisito10 e 11//

let box = document.getElementById('board-size');
let botao = document.getElementById('generate-board');
let pixelBoard = document.getElementById('pixel-board');
botao.addEventListener('click', callFunction);

function callFunction() {
  if (box.value === '') {
    alert('Board inválido!')
  } else if (box.value < 5) {
    funcaoLessFive();
  } else if (box.value > 50) {
    funcaoMoreFifity();
  } else {
    valorValido();
  }
}

function funcaoLessFive() {
  pixelBoard.innerTrequisitot = '';
  for (let linha = 1; linha <= 5; linha += 1) {
    let tr = document.createElement('tr');
    pixelBoard.appendChild(tr);
    for (let coluna = 0; coluna < 5; coluna += 1) {
      let td = document.createElement('td');
      td.className = 'pixel'
      tr.appendChild(td);
      td.addEventListener('click', changeColor2);
    }
  }
}

function valorValido() {
  pixelBoard.innerHTML = '';
  for (let linha = 1; linha <= parseInt(box.value); linha += 1) {
    const tr = document.createElement('tr');
    console.log(tr)
    pixelBoard.appendChild(tr);
    for (let coluna = 0; coluna < box.value; coluna += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
      td.addEventListener('click', changeColor2);
    }
  }
}

function funcaoMoreFifity() {
  pixelBoard.innerHTML = '';
  for (let linha = 1; linha <= 50; linha += 1) {
    const tr = document.createElement('tr');
    pixelBoard.appendChild(tr);
    for (let coluna = 0; coluna < 50; coluna += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
      td.addEventListener('click', changeColor);
    }
  }
}

// requisito 13 //

function changeRandomColor() {
  for (let i = 1; i < tdColor.length; i += 1) {
    tdColor[i].style.backgroundColor = randomColors();
  }
}

function randomColors() {
  let blue = Math.floor(Math.random() * 255);
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let random = `rgb(${blue}, ${red}, ${green})`;
  return (random);
}
window.onload = changeRandomColor();
