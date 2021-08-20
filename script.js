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

// Requesito 9
let creatButton = document.createElement('button');
creatButton.id = 'clear-board';
creatButton.innerHTML = "Limpar";
let selectDiv = document.querySelector('#creatButton');
selectDiv.appendChild(creatButton);

creatButton.addEventListener('click', (event) => {
  let selectPixel = document.querySelectorAll('#pixel-board .pixel');
  for (let i = 0; i < selectPixel.length; i++) {
    let clearButton = selectPixel[i];
    clearButton.style.backgroundColor = "white";
  }

})


