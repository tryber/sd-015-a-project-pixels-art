let colorBlack = document.querySelector(".black");
let colorRed = document.querySelector(".red");
let colorBlue = document.querySelector(".blue");
let colorGreen = document.querySelector(".green");
let selectSection = document.querySelector('#color-palette');

selectSection.addEventListener('click', (event) => {
  console.log(event.target.classList.add("selected"));
  console.log(document.querySelector('.selected').classList.remove("selected"));


  if ( event.target.className.includes('color')) {
      console.log('teste');
  }

})

// colorRed.addEventListener('click',() => {
// colorRed.classList.add("selected");
// console.log(colorRed);
// })
