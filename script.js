function createTag(tag) {
  const create = document.createElement(`${tag}`);

  return document.body.appendChild(create);
}

// FUNÇÃO USADA PARA GERAR CORES ALEATÓRIAS
// USADO COMO REFERÂNCIA:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://stackoverflow.com/questions/14323082/why-doesnt-backgroundcolor-rgba-b-c-work
function generateRandomColor() {
  // ARRENDONDA PARA BAIXO E ATRIBUI O VALOR ALEATORIO GERADO ENTRE 0 E 255 PARA CADA VARIÁVEL
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  // RETORNA UMA STRING NO FORMATO COMPATIVEL PARA SER USADO COM .style.backgroundColor
  return `rgb(${red}, ${green}, ${blue})`;
}

const palette = document.getElementById('color-palette');

// LOOP USADO PARA CRIAR UMA QUANTIDADE DE CORES VARIADA PARA A PALETA
const numberOfColors = 4;
for (let number = 0; number < numberOfColors; number += 1) {
  palette.appendChild(createTag('div'));
}
const selector = document.querySelectorAll('#color-palette div');

// LOOP USADO PARA ATRIBUIR CLASSE COLOR A TODAS AS CORES QUE A PALETA TIVE, ALÉM DE ATRIBUIR UM ID ESPECÍFICO A CADA UMA
for (let index = 0; index < selector.length; index += 1) {
  selector[index].id = `color${index + 1}`;
  selector[index].classList.add('color');
}

const paletteColor = document.querySelectorAll('.color'); // ATRIBUI À VARIAVEL A NODELIST ESTÁTICA

// FUNÇÃO PARA SELECIONAR A COR
function colorSelected(color) {
  // ESTA FUNÇÃO PERCORRE TODO O DOCUMENTO EM BUSCA DE UM ELEMENTO QUE POSSUA A CLASS SELECTED, PARA REMOVER (SE HOUVER) E ENTÃO ATRIBUIR ESSA CLASSE PARA O ELEMENTO ALVO
  document.querySelector('.selected').classList.remove('selected');
  color.target.classList.add('selected');
}

// PERCORRE CADA ELEMENTO DA NODELIST E ACIONA O EVENTO DE CLICK QUANDO UM DOS ELEMENTOS É SELECIONADO
for (let index = 0; index < paletteColor.length; index += 1) {
  paletteColor[index].addEventListener('click', colorSelected);
}

// FUNÇÃO USADA PINTAR O PIXEL DO BLOCO DE PINTURA COM A COR SELECIONADA
function paintPixels(pixel) {
  const pixelPainted = pixel.target; // ATRIBUI A REFERENCIA DO ELEMENTO SELECIONADO A VARIAVEL
  pixelPainted.style.backgroundColor = document.querySelector('.selected').style.backgroundColor; // ATRIBUI A COR DO ELEMENTO COM A CLASSE SELECIONADA PARA O ELEMENTO SELECIONADO
}

const board = document.getElementById('pixel-board');

// FUNÇÃO PARA CRIAR O QUADRO DE PIXELS PARA SEREM PINTADOS
function sizeOfBoard(size) {
  // ESTE PRIMEIRO FOR É USADO PARA CRIAR AS LINHAS DO QUADRO DE PINTURA
  for (let indexLine = 0; indexLine < size; indexLine += 1) {
    const createLine = createTag('div');
    createLine.classList.add('line');
    board.appendChild(createLine);

    // ESTE SEGUNDO FOR É USADO PARA CRIAR OS QUADRADOS DE PIXEL EM CADA LINHA
    for (let indexCol = 0; indexCol < size; indexCol += 1) {
      const createColumn = createTag('div');
      createLine.appendChild(createColumn);
      createColumn.classList.add('pixel');
    }
  }
}

// ESTA CHAMADA É USADA PARA PINTAR O PIXEL COM A COR ESCOLHIDA
board.addEventListener('click', paintPixels);
const generateBoardBtn = document.getElementById('generate-board');

// ESTA FUNÇÃO É USADA PARA REALIZAR A CHECAGEM DO TAMANHO DO QUADRO PIXELS
function boardCheck(size) {
  if (size < 5) {
    const sizeMin = 5;
    sizeOfBoard(sizeMin);
  } else if (size > 50) {
    const sizeMax = 50;
    sizeOfBoard(sizeMax);
  } else {
    sizeOfBoard(size);
  }
}

const sizeValue = document.getElementById('board-size');

// ESTA FUNÇÃO É USADA PARA GERAR O QUADRO DE PIXELS COM UM TAMANHO ESPECÍFICO E ZERAR O CAMPO DE INPUT DE TAMANHO PARA NÃO PRECISAR FICAR APAGANDO
function generateBoard() {
  if (sizeValue.value !== '') {
    board.innerHTML = '';
    boardCheck(sizeValue.value);
  } else {
    // CASO O CAMPO DE INPUT DE TAMANHO ESTA VAZIO, CRIA UM ALERTA INFORMANDO QUE NÃO É VÁLIDO
    alert('Board inválido!');
  }
}

generateBoardBtn.addEventListener('click', generateBoard);

// CRIAÇÃO DE VARIÁVEL PARA ATRIBUIR A REFERÊNCIA DO BOTÃO DE LIMPAR
const clearBoardBtn = document.getElementById('clear-board');

// FUNÇÃO USADA PARA LIMPAR TODAS AS CORES DO QUADRO, ATRIBUINDO O VALOR DE BACKGROUND COLOR DE CADA PIXEL PARA BRANCO
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

clearBoardBtn.addEventListener('click', clearBoard);

// LOOP USADO PARA GERAR CORES ALEATÓRIAS DE FORMA DINÂMICA A QUANTO DE CORES DESEJADAS NA PALETA
for (let color = 1; color < paletteColor.length; color += 1) {
  paletteColor[color].style.backgroundColor = generateRandomColor();
}

const color1 = document.getElementById('color1');

// FUNÇÃO USADA PARA ATRIBUIR A COR 1 PADRÃO E COLOCA-LA COMO SELEÇÃO INICIAL, ASSIM QUE A PÁGINA É CARREGADA, ALÉM DE COLOCAR UM QUADRO DE 5X5 PARA COMEÇAR A USAR
window.onload = function carregamento() {
  color1.style.backgroundColor = 'black';
  color1.classList.add('selected');
  sizeOfBoard(5);
};
