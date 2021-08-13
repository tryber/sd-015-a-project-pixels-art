let selectedColor = document.querySelectorAll('.color');

for (let color of selectedColor) {
  color.addEventListener('click', function() {
    for (let color of selectedColor){
      color.classList.remove('selected');
    } 
    color.classList.add('selected');
  });
}