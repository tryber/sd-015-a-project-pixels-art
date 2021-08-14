  const clickButton = document.getElementById('color-palette');
    clickButton.addEventListener('click', color);

  function color(event) {
    const colorsAdd = document.querySelectorAll('.color');
  for (const colors of colorsAdd) {
    colors.classList.remove('selected');
  };
    event.target.classList.add('selected');
  };

  
  const changeColor = document.getElementsByClassName('pixel')

  for (let index = 0; index < changeColor.length; index += 1){
    changeColor[index].addEventListener('click', selectColor)
  }

  function selectColor(event) {
    const inColors = document.querySelector('.selected');
    const change = getComputedStyle(inColors)
    event.target.style.backgroundColor = change.backgroundColor;
  }