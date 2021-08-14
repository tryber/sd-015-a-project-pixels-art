  let boardSection = document.getElementById('pixel-board'); 
  let n = 5; 

  
  
  function createLines () {
    for (index = 0; index < n; index += 1) {
      let pixelBox = document.createElement('div'); 
      boardSection.appendChild (pixelBox);
      pixelBox.className = 'pixel';
      pixelBox.style.backgroundColor = 'white';
    }
  }
   function createColumns () {
     for (let index = 0; index < n; index += 1) {
       createLines(); 
     }
   }
  createColumns(); 

  


