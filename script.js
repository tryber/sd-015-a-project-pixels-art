console.log('hello world');

// criar quatro div's e elas devem conter a classe color

function criarDivsDasCores() {
  let divDasPaletas = document.querySelector('#color-palette');
  for(let index = 0; index < 4; index +=1) {
    let divCor = document.createElement('div');
    divCor.classList = 'color';
    divDasPaletas.appendChild(divCor);
  }
}
criarDivsDasCores();
// cores atribuidas resgatando cada elemento nó e atribuindo cor de fundo. caracteristicas gerais no css
let color1 = document.querySelectorAll('.color')[0];
color1.style.backgroundColor = 'black'
let color2 = document.querySelectorAll('.color')[1];
color2.style.backgroundColor = 'red'
let color3 = document.querySelectorAll('.color')[2];
color3.style.backgroundColor = 'blue'
let color4 = document.querySelectorAll('.color')[3];
color4.style.backgroundColor = 'green';