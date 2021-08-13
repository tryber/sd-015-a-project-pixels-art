let colorDiv = document.querySelectorAll('.color');

let styleColor = ['red', 'black', 'pink', 'purple'];

console.log(styleColor);
function ximira() {
  for (let index = 0; index < colorDiv.length; index += 1) {
    colorDiv[index].style.backgroundColor =
      styleColor[index];
    console.log(colorDiv[index]);
  }
}
ximira();
