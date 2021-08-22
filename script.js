
/*Variavel para selecionar o elemento lista onde será feito o quadro*/
let boardPlace = document.getElementById('boardList');

/*variaveis para selecionar uma das cores disponiveis*/
let escutaPreto = document.getElementById('black');
let escutaBlue = document.getElementById('blue');
let escutaPink = document.getElementById('pink');
let escutaRed = document.getElementById('red');


/*Inicializando a escuta de eventos no quadro*/
boardPlace.addEventListener('click',pintarQuadro);

/*Inicializando a escuta de eventos no quadro de cores*/
escutaPreto.addEventListener('click',selecionaCor);
escutaBlue.addEventListener('click',selecionaCor);
escutaPink.addEventListener('click',selecionaCor);
escutaRed.addEventListener('click',selecionaCor);



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

/*Função para pintar o quadro com a cor selecionada*/
function selecionaCor(event){

    let corSelecionada = event.target;
    let corAnterior = document.querySelector('.selected');
    corAnterior.classList.remove('selected'); 
    corSelecionada.classList.toggle('selected');
}


function pintarQuadro(event){
    colorSelected = document.getElementsByTagName('li');
    let idSelected;
    for (index = 0; index < colorSelected.length; index +=1){
        
        if (colorSelected[index].classList.contains ('selected')){
            idSelected = colorSelected[index].id;
            event.target.id = idSelected;
        }
    }
    
    console.log (event.target,idSelected);

}