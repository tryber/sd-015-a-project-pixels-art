window.onload = function () {
    document.getElementById('black').classList.add('selected');
  } // Adiciona a cor preta como default selected

  const colorPallete = document.getElementById("color-palette")

  colorPallete.addEventListener("click", function(event){
    for (let index = 0; index < colorPallete.children.length; index += 1){
      colorPallete.children[index].classList.remove('selected')
    }
    event.target.classList.add("selected")
  })