

  const listOfColors = document.querySelectorAll('.color');
for(let index=0;index<listOfColors.length;index+=1){
  listOfColors[index].addEventListener('click', function(event){
  
    if(!event.target.classList.contains('selected')){
      let colorSelected = document.querySelector('.selected')
      event.target.classList.add('selected')
      colorSelected.classList.remove('selected')
   }
}
  )}
    
  window.onload = function(){ 
    const pixels = document.querySelectorAll('.pixel');
    for(let index=0;index<pixels.length;index+=1){
    pixels[index].addEventListener('click', setColor);

    function setColor (event){
    const getColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
    event.target.style.backgroundColor = getColor
    }
    } 
  }


 