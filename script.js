// Exercício 2 e 3- Gerador de 'divs' com background color igual ao da cor escolhida. //

// Função de criação de divs com cores.
function divGenerator(e) {
  if (e !== 'black') {
    const colorPallete = document.getElementById('color-palette');
    const newDiv = document.createElement('div');
    newDiv.className = 'color';
    newDiv.id = e;
    newDiv.style.backgroundColor = e;
    colorPallete.appendChild(newDiv);
  } else {
    const colorPallete = document.getElementById('color-palette');
    const newDiv = document.createElement('div');
    // Exercício 6 - classe inicial da paleta preta precisa iniciar como 'selected'
    newDiv.className = 'color selected';
    newDiv.id = e;
    newDiv.style.backgroundColor = e;
    colorPallete.appendChild(newDiv);
  }
}

// Exercício 12 - Cores aleatórias sendo geradas
function randomColor() {
  const x = Math.floor(Math.random() * 255);
  const y = Math.floor(Math.random() * 255);
  const z = Math.floor(Math.random() * 255);
  const colorRandom = `rgb(${x}, ${y}, ${z})`;
  return colorRandom;
}
// Aplicação da função 'divGenerator' para criar as divs com cores, sendo a primeira 'preto' e proibindo a criação de 'div's com a cor 'branco'.
const arreyPalette = ['black', randomColor(), randomColor(), randomColor()];
for (let index = 0; index < arreyPalette.length; index += 1) {
  if (arreyPalette[index] !== 'white') {
    divGenerator(arreyPalette[index]);
  }
}

// Exercício 4 - Criação do quadro de pixels para pintar. //

const pixelBoardArea = document.getElementById('pixel-board');
// Função responsavel por criar as linhas e colunas do pixel-board.
function boardGenerator(n) {
  for (let index = 1; index <= n; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoardArea.appendChild(pixelLine);
    // Criação dos pixels de cada linha.
    for (let index2 = 1; index2 <= n; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}
boardGenerator(5);

// Exercício 7 - Criação da função que muda o dono da classe 'selected'.
const seletedTarget = document.getElementById('color-palette');
function selected(e) {
  const alvo = e.target;
  const alvoInicial = document.getElementsByClassName('color selected')[0];
  if (alvo.className === 'color') {
    alvoInicial.className = 'color';
    alvo.className = 'color selected';
  }
}
seletedTarget.addEventListener('click', selected);

// Exercício 8 - Cria uma função que pinta os pixels com a cor de classe 'selected'.
function pixelColor(e) {
  const corSelecionada = document.getElementsByClassName('selected')[0];
  if (e.target.className !== 'pixelLine' && e.target.id !== 'pixel-board') {
    e.target.style.backgroundColor = corSelecionada.style.backgroundColor;
  }
}

pixelBoardArea.addEventListener('click', pixelColor);
// Exercício 9 - Função do botão 'limpar', que reseta as cores do board para branco.
const buttonLimpar = document.getElementById('clear-board');
function resetColors() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}
buttonLimpar.addEventListener('click', resetColors);
