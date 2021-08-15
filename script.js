  const boardSection = document.getElementById('pixel-board');
  const n = 5;

  function createLines() {
    for (let index = 0; index < n; index += 1) {
      const pixelBox = document.createElement('div');
      boardSection.appendChild(pixelBox);
      pixelBox.className = 'pixel';
      pixelBox.style.backgroundColor = 'white';
    }
  }
   function createColumns() {
     for (let index = 0; index < n; index += 1) {
       createLines();
     }
   }
  createColumns();
  
  function clickColor (){
    let palette = document.querySelectorAll('.color');

    for (let index2 = 0; index2 < palette.length; index2 += 1) {
      palette[index2].addEventListener('click', function (event){
        document.querySelector('.selected').classList.remove('selected');
        event.target.classList.add('selected');
      });
    }
  }
  clickColor(); 

  
  

