
window.onload = function(){ 
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
    const pixels = document.querySelectorAll('.pixel');
    for(let index=0;index<pixels.length;index+=1){
    pixels[index].addEventListener('click', setColor);

    function setColor (event){
    const getColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
    event.target.style.backgroundColor = getColor
    }
    } 
    const deleteAll = document.querySelector('#clear-board');
    deleteAll.addEventListener('click', clearAll); 
    function clearAll(){
      const pixels = document.querySelectorAll('.pixel');
      for(let index=0;index<pixels.length;index+=1)
      pixels[index].style.backgroundColor = 'white';
    }
}


 