let selectedColor = document.querySelectorAll('.color');

for (let color of selectedColor) {
  color.addEventListener('click', function() {
    for (let color of selectedColor){
      color.classList.remove('selected');
    } 
    color.classList.add('selected');
  });
}
//
let selectedPixel = document.querySelectorAll('.pixel');

for (let pixel of selectedPixel) {
  pixel.addEventListener('click', function(){
    let actualSelected = document.querySelector('.selected');

    if (actualSelected === selectedColor[0]){
      pixel.classList.remove('pink', 'blue', 'green');
      pixel.classList.add('black');
    } else if (actualSelected === selectedColor[1]){
      pixel.classList.remove('black', 'blue', 'green');
      pixel.classList.add('pink');
    } else if (actualSelected === selectedColor[2]){
      pixel.classList.remove('pink', 'black', 'green');
      pixel.classList.add('blue');
    } else if (actualSelected === selectedColor[3]){
      pixel.classList.remove('pink', 'blue', 'black');
      pixel.classList.add('green');
    }
  });
}

