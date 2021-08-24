function addPixelsToLines() {
  const lines = document.getElementsByClassName('line');
  for (let i = 0; i < lines.length; i += 1) {
    for (let ii = 0; ii < lines.length; ii += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lines[i].appendChild(pixel);
    }
  }
}
addPixelsToLines();
//selecionando a cor 
function colorSelect() {
    const btnBlack = document.querySelector('#black');
    btnBlack.classList.add('selected');
    const tfBlack = btnBlack.classList.contains('selected');
    function black(){
      btnBlack.classList.add('selected');
      btnBlue.classList.remove('selected');
      btnGreen.classList.remove('selected');
      btnYellow.classList.remove('selected');
    }
    //------------------------------------
    const btnBlue = document.querySelector('#blue');
    const tfBlue = btnBlue.classList.contains('selected');
    function blue(){
      btnBlack.classList.remove('selected')
      btnBlue.classList.add('selected');
      btnGreen.classList.remove('selected')
      btnYellow.classList.remove('selected')
    }
    //----------------------------------------
    const btnGreen = document.querySelector('#green');
    const tfGreen = btnGreen.classList.contains('selected')
    function green(){
      btnBlack.classList.remove('selected')
      btnBlue.classList.remove('selected');
      btnGreen.classList.add('selected');
      btnYellow.classList.remove('selected')
    }
    //----------------------------------------------
    const btnYellow = document.querySelector('#yellow');
    const tfYellow = btnYellow.classList.contains('selected')
    function yellow() {
      btnBlack.classList.remove('selected')
      btnBlue.classList.remove('selected');
      btnGreen.classList.remove('selected');
      btnYellow.classList.add('selected');
    }
    //-----------------------------------------------------
    btnBlack.addEventListener('click', function(){
      if(tfBlack === false) {
        black();
      } else {
        btnBlack.classList.add('selected');
        btnBlue.classList.remove('selected');
        btnGreen.classList.remove('selected');
        btnYellow.classList.remove('selected');
      }
    })
    //-------------------------------------------------------
    btnBlue.addEventListener('click', function(){
      if(tfBlue === false) {
        blue();
      }
    })
    //--------------------------------------------------------------
    btnGreen.addEventListener('click', function(){
      if(tfGreen === false) {
        green();
      }
    })
    //-------------------------------------------------------------
    btnYellow.addEventListener('click', function(){
      if(tfYellow === false) {
        yellow();
      }
    })
}
//pintando o pixel com a cor lecionada 
function colorPaint() {
    const pixelsBoard = document.querySelector('#pixel-board')

    const btnBlack = document.querySelector('#black');
    const btnBlue = document.querySelector('#blue');
    const btnGreen = document.querySelector('#green');
    const btnYellow = document.querySelector('#yellow');
  
    pixelsBoard.addEventListener('click', function(event){
      if(btnBlack.classList.contains('selected')){
        event.target.style.backgroundColor = "black";
      } 
      else if(btnBlue.classList.contains('selected')) {
        event.target.style.backgroundColor = "blue";
      }
      else if(btnGreen.classList.contains('selected')) {
        event.target.style.backgroundColor = "green";
      }
      else if(btnYellow.classList.contains('selected')) {
        event.target.style.backgroundColor = "yellow";
      }
    })
}
//limpando todos os pixels
function btnClear(){
    const btnClear = document.querySelector('#clear-board')
    btnClear.addEventListener('click', addClear)
    function addClear(){
      // não da para simplesmente colocar backgroundColor em varias classes 
      // foi preciso definir uma por uma 
      let pixelsBoard = document.querySelectorAll('.pixel');
      for (let i = 0; i < pixelsBoard.length; i += 1) {
        let color = pixelsBoard[i];
        color.style.backgroundColor = 'white';
      }
    }
}

function frameSize(){
  const btnVQV = document.querySelector('#generate-board');
  btnVQV.addEventListener('click', addPixels);
  function addPixels(){
    const pixelsBoard = document.querySelector('#pixel-board')
    const input = document.querySelector('#board-size');
    function calcBoardSize() { //verifica o numero digitado no input 
      let pixels = input.value
      if (pixels < 5) {
        pixels = 5;
      }
      if (pixels > 50) {
        pixels = 50;
      }
      return pixels;
    }
    function deletePixel() {
      let board = document.querySelectorAll('.line');
      for (let i = 0; i < board.length; i += 1) {
        let px = board[i];
        px.remove();
      }
    }
    function creatingPixels() {
      if (input.value === '') {
        window.alert('Board inválido!');
        return;
      }
      deletePixel();
      const boardSize = calcBoardSize();
      for (let i = 0; i < boardSize; i += 1) {
        const line = document.createElement('div');
        line.className = 'line';
        pixelsBoard.appendChild(line);
      }
      addPixelsToLines();
    }
    creatingPixels();
  }
}
frameSize();

window.onload = function() {
  colorSelect();
  colorPaint();
  btnClear()
}