
function myPalette(){
  const colors = ['black','blue', 'blueviolet', 'hotpink']
  const divPalette = document.querySelector('#color-palette');
  for (let i= 0; i < colors.length; i += 1){
    console.log(colors[i])
   const colorsPalette= colors[i];
   const  pixelPalette = document.createElement('div');
    pixelPalette.classList.add('color');  
    pixelPalette.style.backgroundColor = colorsPalette;
    divPalette.appendChild(pixelPalette);

  }
}
myPalette ();

