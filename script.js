
let listOfColors = document.querySelectorAll('.color');
for(let index=0;index<listOfColors.length;index+=1){
  listOfColors[index].addEventListener('click', function(event){
  
    if(!event.target.classList.contains('selected')){
      let colorSelected = document.querySelector('.selected')
      colorSelected.classList.remove('selected')
      event.target.classList.add('selected')
   }
}
  )}



 