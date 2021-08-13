const arrayOfColors = document.querySelectorAll('.color');
arrayOfColors[0].style.backgroundColor = 'black';
arrayOfColors[0].className += ' selected'
arrayOfColors[1].style.backgroundColor = 'red';
arrayOfColors[2].style.backgroundColor = 'brown';
arrayOfColors[3].style.backgroundColor = 'green';

for(let index=0;index<25;index+=1) {
  let box = document.createElement('div');
  box.className = 'pixel';
  box.style.width = '40px';
  box.style.height = '40px';
  box.style.display = 'inline-block';
  box.style.border = 'solid 1px black';
  box.style.backgroundColor = 'white';
  document.querySelector('#pixel-board').appendChild(box);
}