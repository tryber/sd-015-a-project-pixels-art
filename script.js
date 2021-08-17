//  requisito 6   //

const clear = document.getElementById('clear-board');
const tdColor = document.querySelectorAll('.color');
const corInicial = document.querySelector('.color');
corInicial.classList += ' selected';
const box = document.getElementById('board-size');
const botao = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');

//  requisito 7   //

function changeSelected(e) {
  const event = e;
  const removeClass = document.querySelector('.selected');
  removeClass.classList.remove('selected');
  event.target.className = 'color selected';
}

for (let i = 0; i < tdColor.length; i += 1) {
  tdColor[i].addEventListener('click', changeSelected);
}

//  requisito 8  //

function changeColor(e) {
  const event = e;
  const colorSelected = document.getElementsByClassName('selected')[0];
  const colorPaint = getComputedStyle(colorSelected);
  event.target.style.backgroundColor = colorPaint.backgroundColor;
}

function changeColor2() {
  const paint = document.querySelectorAll('.pixel');
  for (let i = 0; i < paint.length; i += 1) {
    paint[i].addEventListener('click', changeColor);
  }
}
changeColor2();

//  requisito 9  //

function limparQuadro() {
  const paint = document.querySelectorAll('.pixel');
  for (let i = 0; i < paint.length; i += 1) {
    paint[i].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', limparQuadro);

//   requisito10 e 11 //

function funcaoLessFive() {
  pixelBoard.innerHTML = '';
  for (let linha = 1; linha <= 5; linha += 1) {
    const tr = document.createElement('tr');
    pixelBoard.appendChild(tr);
    for (let coluna = 0; coluna < 5; coluna += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
      td.addEventListener('click', changeColor2);
    }
  }
}

function valorValido() {
  pixelBoard.innerHTML = '';
  for (let linha = 1; linha <= parseInt(box.value, 10); linha += 1) {
    const tr = document.createElement('tr');
    console.log(tr);
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
      td.addEventListener('click', changeColor2);
    }
  }
}

function callFunction() {
  if (box.value === '') {
    alert('Board inválido!');
  } else if (box.value < 5) {
    funcaoLessFive();
  } else if (box.value > 50) {
    funcaoMoreFifity();
  } else {
    valorValido();
  }
}

botao.addEventListener('click', callFunction);

//   requisito 13   //

function randomColors() {
  const blue = Math.floor(Math.random() * 255);
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const random = `rgb(${blue}, ${red}, ${green})`;
  return (random);
}

window.onload = function changeRandomColor() {
  for (let i = 1; i < tdColor.length; i += 1) {
    tdColor[i].style.backgroundColor = randomColors();
  }
};
