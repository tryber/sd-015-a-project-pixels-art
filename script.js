window.onload = function () {
  let boardSize = 5;

  paletaCores();
  montaBoard(boardSize);

  let botaoMontar = document.getElementById('generate-board');
  botaoMontar.addEventListener('click', mudaBoard);

  let elementosPaleta = document.getElementsByClassName('color');
  for (let i = 0; i < elementosPaleta.length; i += 1) {
    elementosPaleta[i].addEventListener('click', selecionaCor);
  }


  let botaoLimpar = document.getElementById('clear-board');
  botaoLimpar.addEventListener('click', limpaQuadro);

  // document.addEventListener("click", function(evento){
  //     if (evento.target.classList.contains("pixel")){
  //         trocaCor();
  //     }
  // }, false);


  function aplicaBotao(){
    let elementosQuadro = document.getElementsByClassName('pixel');
    for (let i = 0; i < elementosQuadro.length; i += 1) {
      elementosQuadro[i].addEventListener('click', trocaCor);
    }
  }

  function mudaBoard() {
    let valor = document.getElementById('board-size').value;
    
    if(valor===""){
        alert("Board inválido!");
    }else if (Number(valor) >= 50) {
      montaBoard(50);
    } 
    else if (Number(valor) <= 5) {
      montaBoard(5);
    } 
    else {
      montaBoard(Number(valor));
    }
  }
  function limpaQuadro(evento) {
    let elementosQuadro = document.getElementsByClassName('pixel');
    for (let i = 0; i < elementosQuadro.length; i += 1) {
      elementosQuadro[i].style.backgroundColor = 'white';
    }
  }

  function trocaCor(evento) {
    let corFinal =
      document.getElementsByClassName('selected')[0].style.backgroundColor;
    console.log(corFinal);
    evento.target.style.backgroundColor = corFinal;
  }
  function selecionaCor(evento) {
    let selecionada = document.getElementsByClassName('selected')[0];
    selecionada.className = 'color';
    evento.target.className = 'color selected';
  }
  function paletaCores() {
    let first = (document.getElementById('first').style.backgroundColor =
      'black');
    firstPreta();
    let second = (document.getElementById('second').style.backgroundColor =
      'aqua');
    let third = (document.getElementById('third').style.backgroundColor =
      'red');
    let fourth = (document.getElementById('fourth').style.backgroundColor =
      'green');
  }
  function firstPreta() {
    let corInicial = document.getElementById('first');
    let cor = corInicial.className;
    cor = cor + ' selected';
    corInicial.className = cor;
  }

  function checaBoard(){
    let board = document.getElementById('pixel-board');
    let mainn = document.getElementsByTagName('main')[0];
    if (board === null) {
      let novoBoard = document.createElement('div');
      novoBoard.id = 'pixel-board';
      mainn.appendChild(novoBoard);
    } else {
      document.getElementById('pixel-board').remove();
      let novoBoard = document.createElement('div');
      novoBoard.id = 'pixel-board';
      mainn.appendChild(novoBoard);
    }

  }
  function montaBoard(numero) {
    checaBoard();

    let pBoard = document.getElementById('pixel-board');

    for (let i = 0; i < numero; i += 1) {
      let linha = document.createElement('div');
      for (let j = 0; j < numero; j += 1) {
        let unidade = montaPixels('pixel');
        linha.appendChild(unidade);
      }
      linha.className = 'linha';
      pBoard.appendChild(linha);
      aplicaBotao();
    }
  }
  function montaPixels(classe) {
    let pixel = document.createElement('div');
    pixel.className = classe;
    return pixel;
  }
};
