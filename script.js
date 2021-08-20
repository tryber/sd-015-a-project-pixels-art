
/*Variavel para selecionar o elemento lista onde será feito o quadro*/
let boardPlace = document.getElementById('boardList');

/*variaveis que ditam o tamanho do quadro*/
let altura = 5;
let comprimento = 5;

/* Função para criar o quadro*/
for (let index = 0; index < altura; index += 1) {
    
    for (let index = 0; index < comprimento; index += 1) {

        let pixel = document.createElement('li');
        pixel.className = 'pixel';
        boardPlace.appendChild(pixel);

    }
}