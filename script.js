const paletaPixel = document.querySelector('section');
let qtePixelPaleta = 4;
for (let index = 0; index < qtePixelPaleta; index += 1) {
  let paletadiv = document.createElement('div');
  paletadiv.className = "color";
  if (index === 0) {
      paletadiv.id = "Black";   
      paletadiv.style.backgroundColor = 'black'
   } 
  if (index === 1) {
     paletadiv.id = "Blue";  
     paletadiv.style.backgroundColor = 'blue'  
   } 
  if (index === 2) {
     paletadiv.id = "Yellow";  
     paletadiv.style.backgroundColor = 'yellow'     
   }   
  if (index === 3) {
     paletadiv.id = "red";        
     paletadiv.style.backgroundColor = 'red'
   }    
  /*if (index === 4) {
     paletadiv.id = "red";       
     paletadiv.style.backgroundColor = 'red'
   } */
  paletadiv.style.border = '1px solid black';
  paletadiv.style.width = '50px';
  paletadiv.style.height = '50px';
  paletaPixel.appendChild(paletadiv);     
};    
