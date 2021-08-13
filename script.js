let colorDiv = document.querySelectorAll('.color');
let styleColor = ['black', 'red', 'pink', 'purple'];



function changeColorDiv() {
  for (let index = 0; index < colorDiv.length; index += 1) {
    colorDiv[index].style.backgroundColor =
      styleColor[index];
    console.log(colorDiv[index]);
  }
}
changeColorDiv();


