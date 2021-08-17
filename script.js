window.onload = function() {
  colorSelect();
  colorPaint();
  btnClear()
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
}