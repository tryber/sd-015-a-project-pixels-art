let colorBlack = document.querySelector(".black");
let colorRed = document.querySelector(".red");
let colorBlue = document.querySelector(".blue");
let colorGreen = document.querySelector(".green");
let selectSection = document.querySelector('#color-palette');

selectSection.addEventListener('click', (event) => {
  console.log(document.querySelector('.selected').classList.remove("selected"));
  console.log(event.target.classList.add("selected"));  
})

