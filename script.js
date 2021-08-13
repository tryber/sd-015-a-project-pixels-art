// cor random
function setColor() {
  const tag = '#';
  const colorSelector = document.getElementsByClassName('color');
  for (let i = 0; i < colorSelector.length; i += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // code to random color found on https://css-tricks.com/snippets/javascript/random-hex-color/
    if (i === 0) {
      colorSelector[i].style.backgroundColor = 'black';
      colorSelector[i].classList.add('selected');
    } else {
      colorSelector[i].style.backgroundColor = tag + randomColor;
    }
  }
}
setColor();

// cria o box, ideia retirada do exercicio do final do bloco 5
let tamanho = 5;
const linha = document.querySelectorAll('.line');

function createPixel(classe) {
  let pixel = document.createElement('div');
  pixel.className = classe;
  pixel.style.backgroundColor = 'white';
  return pixel;
}

function preencheBox(qualLinha) {
  for (let i = 0; i < qualLinha.length; i += 1) {
    preencheLinha(qualLinha[i]);
  }
}

function preencheLinha(divLinha) {
  for (let i = 1; i <= tamanho; i += 1) {
    divLinha.appendChild(createPixel('pixel'));
  }
}

preencheBox(linha);
// final da criação do box
