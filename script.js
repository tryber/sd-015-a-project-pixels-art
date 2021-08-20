// Requesito 7
let selectSection = document.querySelector('#color-palette');

selectSection.addEventListener('click', (event) => {
  
  if (event.target.className.includes ('color')){
    console.log(document.querySelector('.selected').classList.remove("selected"));
  console.log(event.target.classList.add("selected")); 
  }
  
})

// Requesito 8
let selectMain = document.querySelector('#pixel-board');

selectMain.addEventListener('click', (event) => {
  let selected = document.querySelector('.selected');
  let color = window.getComputedStyle(selected).getPropertyValue("background-color");

  if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = color;
  }
})
