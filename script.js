window.onload = function() {
    let getSelected = document.getElementsByClassName('color selected');
    let getPallet = document.querySelector('#color-palette');
    let getColor = document.querySelectorAll('.color');
    let getRandom = document.getElementsByClassName('color random');

    for(index = 0; index < getRandom.length; index += 1) {
        let arrayOfRandom = ['rgb(' + Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255) + ')'];
        let stringRandom = arrayOfRandom.toString();
        getRandom[index].style.backgroundColor = stringRandom;
        console.log(stringRandom);
    }

    getPallet.addEventListener('click', function(event) {
        let selected = event.target.className;
        if(selected !== "color selected") {
            getSelected[0].className = 'color';
            event.target.className = 'color selected';
        }
    })



    let getPixelBoard = document.querySelector('#pixel-board');
    let getButton = document.querySelector('#generate-board');
    let getInput = document.querySelector('#board-size');

    getButton.addEventListener('click', function() {
        //confere se o valor é 0; dois iguais são utilizados pois getInput.value retorna uma string;
        if (getInput.value == 0) {
            return alert('Board Inválido!');
        }

        //Limita os valores do lado do board entre 5 e 50
        if (getInput.value < 5) {
            getInput.value = 5;
        } else if (getInput.value > 50){
            getInput.value = 50
        }
        const boardSize = getInput.value**2;

        //ajusta a largura do grid de pixels
        getPixelBoard.style.width = getInput.value * 42 + 'px';

        //limpa o conteúdo do board
        const boardChildren = getPixelBoard.children.length;
        for(let index = 0; index < boardChildren; index += 1) {
            getPixelBoard.removeChild(getPixelBoard.children[0]);
        }

        //cria o grid de pixels
        for(let index = 0; index < boardSize; index += 1) {
            const createDiv = document.createElement('div');
            createDiv;
            createDiv.className = 'pixel';
            getPixelBoard.appendChild(createDiv);
        }
        
        //cria div clear
        const createClearDiv = document.createElement('div');
        createClearDiv.className = 'clear';
        getPixelBoard.appendChild(createClearDiv);

    })

    getPixelBoard.addEventListener('click', function(event) {
        let pixel = event.target.style.backgroundColor;
        let cssBackground = window.getComputedStyle(getSelected[0]).backgroundColor;
        if (pixel !== cssBackground) {
            event.target.style.backgroundColor = cssBackground;
        }
    })

    let button = document.querySelector('button');

    button.addEventListener('click', function() {
        let getPixel = document.querySelectorAll('.pixel');
        for (let index = 0; index < getPixel.length; index += 1) {
            getPixel[index].style.backgroundColor = "white";
        }
    })
}
