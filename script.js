//Cria 1 cor aleatória a partir dos números de rgb
function randomColors () {
    let randomOne = (Math.round(Math.random()*255));
    let randomTwo = (Math.round(Math.random()*255));
    let randomThree = (Math.round(Math.random()*255));
    let randomRGB = 'rgb('+randomOne+', '+randomTwo+', '+randomThree+')';
    return randomRGB;
}
//Cria itens de lista que compõem a paleta com 4 cores diferentes, sendo sempre a primeira preta e as restantes randômicas
function createItemsPalette(n) {
    const palette = document.querySelectorAll('#color-palette');
    for (let i = 0; i < n; i +=1) {
        let itemPalette = document.createElement('li');
        itemPalette.className = 'color';
        palette[0].appendChild(itemPalette);
        if (i === 0) {
            itemPalette.style.backgroundColor = 'rgb(0, 0, 0)';
        } else {
            itemPalette.style.backgroundColor = randomColors();
        }
    }
}
window.onload = createItemsPalette(4);
//Remove o input anterior de linhas e consequentemente de pixels do quadro
//Procura o pixel-board, pai das divs, linhas do quadro. Procura as linhas e itera a remoção delas a partir do pai.
function removeLines () {
    let parent = document.getElementById('pixel-board');
    let line = document.querySelectorAll('.lines');
    for (let i = 0; i < line.length; i += 1) {
        parent.removeChild(line[i]);
    }
}
//Resgata e adiciona um escutador ao botão VQV com evento de clique e referente a função resizeBoard
//A função acha o valor do input e testa se foi enviado vazio, retornando um alerta. Caso não esteja vazio, o quadro anterior é apagado com a função removeLines o valor do input é convertido em number e a partir dele é criado um novo quadro. Atendendo ao padrão de no mínimo 5 e máximo 50.
const buttonVqv = document.getElementById('generate-board');
buttonVqv.addEventListener('click', resizeBoard);
function resizeBoard () {
    let inputValue = document.getElementById('board-size').value;
    if (inputValue === "") {
        alert("Board Inválido!")
    } else {
        removeLines();
        let numberValue = parseInt(inputValue, 10);
        if (numberValue < 5) {
            numberValue = 5;
            createDiv(numberValue);
            alert("5 é o valor mínimo!");
        } else if (numberValue > 50) {
            numberValue = 50;
            createDiv(numberValue);
            alert("50 é o valor máximo!");
        } else {
            createDiv(numberValue);
        }
        
    }
}
//Cria as divs na quantidade inicial 5 ou na quantidade inputada, coloca classes em cada uma e posiciona no html. Em seguida executa a função createPixels.
const board = document.getElementById('pixel-board');
function createDiv(n) {
    for (let i = 1; i <= n; i += 1) {
    let line = document.createElement('div');
    line.className = 'lines';
    board.appendChild(line);
    }
    createPixels();
}
//Faz o quadro aparecer com lado 5 assim que a página é carregada e o input está vazio.
function conditionToCreate () {
    let inputValue = document.getElementById('board-size').value
    if (inputValue === "") {
        createDiv(5)
    }
}
conditionToCreate();
//Cria os quadradinhos que compoem cada linha. Resgata a classe lines e se baseia na quantidade desse conjunto para criar os pixels. Na div lines[0] cria como filho outra div com classe pixel e cor de fundo branca, ainda na lines[0] repete o procedimento na quantidade de vezes igual à quantidade de lines, preenchendo 1 linha do quadro. Então, passa para line[1] e repete o procedimento.
function createPixels() {
    let lines = document.querySelectorAll(".lines");
    for (let index = 0; index < lines.length; index += 1) {
        for (let index2 = 1; index2 <= lines.length; index2 += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            lines[index].appendChild(pixel);
        }
    }
    pixelsListener();
}
//Faz a cor preta ser selcionada assim que a página é carregada. A página carrega e então a função colorOnload é executada. Nessa função a class color[0] é resgatada e a classe selected é adicionada à ela.
window.onload = colorOnload;
function colorOnload () {
    let colorBlack = document.getElementsByClassName('color')[0];
    colorBlack.classList.add('selected');
}
//Coloca um escutador na paleta de cores com evento clique, que executa a função selecionaCor. Na função a classe selected é resgatada, removida do elemento atual e adicionada no elemento que foi clicado.
const palette = document.querySelector('#color-palette');
palette.addEventListener('click', selecionaCor);
function selecionaCor (event) {
    let colorCurrent = document.querySelector('.selected');
    colorCurrent.classList.remove('selected');
    event.target.classList.add('selected');
    
}
//Resgata todos os elementos com a classe pixel e adiciona um escutador em cada um deles através de iterações com evento clique e que executa a função paintPixels.
function pixelsListener () {
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', paintPixels);
    }
}
//Pinta os pixels. Procura o elemento que está com a classe selected, em seguida vê qual é a cor que esse elemento está no background e então pinta o pixel selecionad com essa mesma cor.
function paintPixels (event) {
    let colorCurrent = document.querySelector('.selected');
    let rgbColorCurrent = colorCurrent.style.backgroundColor;
    event.target.style.backgroundColor = rgbColorCurrent;
}
//Limpa o quadro que foi pintado. Resgata o botão de limpar e adiciona um escutador nele com evento clique e que executa a função clearPixels. Nessa função todos os elementos de classe pixel são resgatados e as iterações são feitas baseadas no tamanho do conjunto dos elementos pixel. Se certo elemento de classe pixel estiver com uma cor de fundo diferente de branco, então pinte de branco.
const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearPixels);
function clearPixels () {
    let divPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < divPixel.length; index += 1) {
        if (divPixel[index].style.backgroundColor !== 'white') {
            divPixel[index].style.backgroundColor = 'white';
        }                                                 
    }
}
//Resgata o elemento title e coloca um escutador de eventos nele do tipo mouseover que executa a função changeColorTitle. Nessa função a cor do título muda de forma randômica sempre que o pomteiro do mouve passar por cima.
const title = document.getElementById('title');
title.addEventListener('mouseover', changeColorTitle);
function changeColorTitle () {
    title.style.color = randomColors();
}