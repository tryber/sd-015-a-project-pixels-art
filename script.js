function numeroAleatorio() {
  return Math.round(Math.random() * 255);
}

function corAleatoria() {
  let cor = 'rgb(';
  cor += numeroAleatorio();
  cor += ',';
  cor += numeroAleatorio();
  cor += ',';
  cor += numeroAleatorio();
  cor += ')';
  return cor;
}

const paletaDeCores = ['black', corAleatoria(), corAleatoria(), corAleatoria()];
const colorSlot = document.getElementById('color-palette').children;
const botaoLimpar = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');
const linhas = document.getElementsByClassName('lines');
const botaoVQV = document.getElementById('generate-board');

let tamanhoDoLado = 5;

function preencherLinhas(cadaLinha) {
  for (let index = 0; index < tamanhoDoLado; index += 1) {
    const pixelElement = document.createElement('div');
    pixelElement.classList.add('pixel');

    cadaLinha.appendChild(pixelElement);
  }
}

function criarLinhas(numeroDeLinhas) {
  for (let index = 0; index < numeroDeLinhas; index += 1) {
    const linha = document.createElement('div');
    linha.classList.add('lines');
    preencherLinhas(linha);

    document.getElementById('pixel-board').appendChild(linha);
  }
}

function adicionarEventos(elemento, evento, funcao) {
  if (elemento.length > 0) {
    for (let index = 0; index < elemento.length; index += 1) {
      elemento[index].addEventListener(evento, funcao);
    }
  } else {
    elemento.addEventListener(evento, funcao);
  }
}

function mudarCorPaleta(evento) {
  document.querySelector('.selected').classList.remove('selected');
  evento.target.classList.add('selected');
}

function pintarPixels(evento) {
  const alvo = evento.target;
  const cor = document.querySelector('.selected').style.backgroundColor;
  alvo.style.backgroundColor = cor;
}

function pintarDeBranco() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function removerCriancas(elemento) {
  if (elemento.length > 0) {
    const vezes = elemento.length;
    for (let index = 0; index < vezes; index += 1) {
      elemento[0].parentNode.removeChild(elemento[0]);
    }
  } else {
    elemento.parentNode.removeChild(elemento);
  }
}

function checkTamanhoDoLado(tamanho) {
  let retorno = tamanho;
  if (tamanho < 5) {
    alert('Tamanho mínimo é 5');
    retorno = 5;
  }
  if (tamanho > 50) {
    alert('Tamanho máximo é 50');
    retorno = 50;
  }
  return retorno;
}

function construcaoQuadrado(tamanho) {
  if (tamanho >= 5 && tamanho <= 50) {
    removerCriancas(linhas);
    criarLinhas(tamanho);
    adicionarEventos(pixels, 'click', pintarPixels);
  } else {
    alert('Tamanho minimo é 5 e o máximo é 50');
  }
}

function refazerQuadrado() {
  tamanhoDoLado = document.getElementById('board-size').value;
  if (tamanhoDoLado !== '') {
    tamanhoDoLado = checkTamanhoDoLado(tamanhoDoLado);
    construcaoQuadrado(tamanhoDoLado);
  } else {
    alert('Board inválido!');
  }
}

function definirPaletaDeCores() {
  for (let index = 0; index < colorSlot.length; index += 1) {
    colorSlot[index].style.backgroundColor = paletaDeCores[index];
  }
}

adicionarEventos(colorSlot, 'click', mudarCorPaleta);
adicionarEventos(botaoLimpar, 'click', pintarDeBranco);
adicionarEventos(botaoVQV, 'click', refazerQuadrado);

window.onload = function iniciar() {
  definirPaletaDeCores();
  adicionarEventos(pixels, 'click', pintarPixels);

  document.querySelector('.color').classList.add('selected');
};
