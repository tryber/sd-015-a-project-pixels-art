window.onload = function() {
  colorSelect();

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
}