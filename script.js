let selected = document.querySelector('.color');
selected.classList.add('selected');

const section1 = document.querySelectorAll('.color');
 for ( let index = 0; index < section1.length; index +=1 )
  section1[index].addEventListener('click',  function(){
    let retira = document.querySelector('.selected')
    retira.classList.remove('selected')  
    section1[index].classList.add('selected')  
  });

  let selecionada = document.querySelector('.selected');
  let pixels = document.querySelectorAll('.pixel');
  let cores = document.querySelector('#color-palette')
  for (let i = 0; i < pixels.length ; i += 1){
  pixels[i].addEventListener('click', changeColor)
  }

function changeColor(event){
 let corSelecionada = document.querySelector('.selected');
 let cores = window.getComputedStyle(corSelecionada).getPropertyValue('background-color')
 event.target.style.backgroundColor = cores
}
  