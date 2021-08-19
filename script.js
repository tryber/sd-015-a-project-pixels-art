function firstSelection(){
  let initialColor = document.querySelector('#c1');
  initialColor.classList.add('selected');
};

window.onload = firstSelection();