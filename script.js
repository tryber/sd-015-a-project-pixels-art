let colorDiv = document.querySelectorAll('.color');
let styleColor = ['black', 'red', 'pink', 'purple'];
let pixelBord = document.getElementById('pixel-board');
let columnDiv = 5;
let lineDiv = 5;


function changeColorDiv() {
  for (let index = 0; index < colorDiv.length; index += 1) {
    colorDiv[index].style.backgroundColor =
      styleColor[index];
    console.log(colorDiv[index]);
  }
}
changeColorDiv();

function creatPixelBord() {
    for (let index = 0; index < columnDiv; index += 1) {
        let creatBordColumn = document.createElement('div');
        pixelBord.appendChild(creatBordColumn);
        creatBordColumn.className = 'pixel';        
        for (let index = 1; index < lineDiv; index +=1) {
            let creatBordLine = document.createElement('div');
            pixelBord.appendChild(creatBordLine);
            creatBordLine.className = 'pixel';
        }
    }    
}
creatPixelBord();
