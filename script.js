// CRIAÇÃO DA PALETA DE CORES

// crio a variavel que pega a div color-palette (paleta de cores) no html
const paletaCores = document.querySelector('#color-palette');

// função que cria as cores da paleta de cores
function cores() {
  for (let index = 0; index < 4; index += 1) {
    const cores = document.createElement('div');
    cores.className = 'color'; // atribui a classe color a todas as cores

    if (index === 0) {
      cores.id = 'black';
      cores.className = 'color selected'; // atribui a classe selected
      cores.style.backgroundColor = 'black';
    }
    if (index === 1) {
      cores.id = 'green';
      cores.style.backgroundColor = corAleatoria();
    }
    if (index === 2) {
      cores.id = 'red';
      cores.style.backgroundColor = corAleatoria();
    }
    if (index === 3) {
      cores.id = 'blue';
      cores.style.backgroundColor = corAleatoria();
    }
    paletaCores.appendChild(cores);
  }
}
cores();

// CRIAÇÃO DO QUADRO DE PIXELS

// crio a variavel que pega a div pixel-board (quadro de pixels) no html
const quadroPixels = document.querySelector('#pixel-board');

let tamanho = 5; // variavel que é usada para criar linhas e colunas do quadro de pixels

function criarlinhaPixel() {
  // crio a 1 linha que vai ter os pixels (essa linha pode ser entendido como sendo a coluna)
  const linhaPixel = document.createElement('div');
  document.body.appendChild(linhaPixel);

  for (let i = 0; i < tamanho; i += 1) {
    // crio cada pixel que vai dentro de 1 linha (o primeiro quadrado em cada coluna)
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    linhaPixel.appendChild(pixel);
    quadroPixels.appendChild(linhaPixel);
  }
}

function repetelinhaPixel() {
  for (let i = 0; i < tamanho; i += 1) {
    // crio a linha várias vezes
    criarlinhaPixel();
  }
}
repetelinhaPixel();

// CRIAÇÃO DA LOGICA DA CLASSE SELECTED
function selecionado(event) {
  const selected = document.querySelector('.selected'); // pego a classe selected
  selected.classList.remove('selected'); // removo de onde ela está (foi criada na cor preta)
  event.target.classList.add('selected'); // coloco em quem chamou o evento
}

const colorBlack = document.querySelector('#black');
const colorGreen = document.querySelector('#green');
const colorRed = document.querySelector('#red');
const colorBlue = document.querySelector('#blue');

colorBlack.addEventListener('click', selecionado);
colorGreen.addEventListener('click', selecionado);
colorRed.addEventListener('click', selecionado);
colorBlue.addEventListener('click', selecionado);

// CRIAÇÃO DA LOGICA DE PINTAR OS PIXELS
function pintaPixel(event) {
  const pxl = event.target; // const pxl pega quem está chamando o evento
  pxl.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  // o bgColor de quem chama o evento (cada pixel clicado), é igual ao bgColor do elemento que tem a classe selected
}
const pixel = document.querySelectorAll('.pixel'); // pega os pixel (a variavel precisa ser let pois ela será modificada mais em baixo)
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', pintaPixel); // add em cada pixels o addEventListener com a função pintaPixel
}

// CRIAÇÃO LOGICA DE LIMPAR O QUADRO DE PIXELS
function limpaQuadro() {
  // console.log(pixel); // 25
  const pixel = document.querySelectorAll('.pixel'); // pixel é declarada aqui pra atualizar o numero de pixels na pagina, e atribuir a cor branca nos pixels antigos, e novos, criados com a função novoQuadroPixel
  // console.log(pixel); // 125
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white'; // pinta cada pixel com a cor branca
  }
}
const btnLimpar = document.querySelector('#clear-board'); // pega o botão limpar no html
btnLimpar.addEventListener('click', limpaQuadro);

// CRIAÇÃO LÓGICA DE ADD NOVAS LINHAS E COLUNAS DE ACORDO COM O INPUT

// aqui como pode existir somente um quadro na tela, vou ter q deletar o quadro antigo, e criar um novo com as linhas e colunas adicionadas

function novoQuadroPixel() {
  const inputVQV = document.querySelector('#board-size'); // pego o input no html
  const deletaPixel = document.querySelector('#pixel-board'); // pego o quadro de pixel no html
  tamanho = inputVQV.value; // a variavel tamanho vai receber o valor do input

  if(tamanho <= 0){
    alert ('Board inválido!');
  } 
  if (tamanho < 5){
    tamanho = 5;
  } else if (tamanho > 50){
    tamanho = 50;
  }
  while (deletaPixel.firstChild) { // enquanto existir o primeiro filho no quadro, deleta ele
    deletaPixel.removeChild(deletaPixel.firstChild);
    // quando eu deleto o primeiro filho do quadro, o segundo se torna o primeiro, esse segundo é deletado, o terceiro se torna o primeiro, o terceiro é deletado... assim sucessivamente até não haver mais nenhum filho no quadro
  }

  // quadro antigo deletado, aqui começa o processo de criação do novo quadro, onde a variavel tamanho recebe o valor do input, e cria as funções de coluna e linha

  repetelinhaPixel(); // aqui só preciso do repete pq ele já chama o criarLinhaPixel, q cria as colunas

  // logica de pintar os pixels: aqui como a função ja foi criada, só preciso colocar o click em cada pixel novamente
  const pixel = document.querySelectorAll('.pixel'); // pega todos os pixel
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', pintaPixel); // add em cada um o addEventListener com a função pintaPixel
  }
  
}
const btnVQV = document.querySelector('#generate-board');
btnVQV.addEventListener('click', novoQuadroPixel);

function corAleatoria() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);

  return `rgba(${r}, ${g}, ${b})`;
}