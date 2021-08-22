// Paleta de cores


////para cada cor, executar selecionarCor()
let colors = document.querySelectorAll(".color");
let selectedColor = document.getElementsByClassName("selected");


colors.forEach(item => {
  item.addEventListener('click', selecionarCor)
})


//selecionarCor
function selecionarCor(e) {
  
  colors.forEach(color => {
    color.classList.remove("selected");
  } )

  e.target.classList.add("selected")
  let cor = e.target.style.background;
  console.log(cor)
}




// Pixels


//para cada pixel, executar pintarPixel()
let pixels = document.querySelectorAll('.pixel');

pixels.forEach(item => {
  item.addEventListener('click', pintarPixel)
})


//pintarPixel()
function pintarPixel(event) {
  event.target.innerHTML.backgroundColor = "black";
 
  
}
