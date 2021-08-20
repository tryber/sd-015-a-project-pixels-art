function firstSelection(){
  let initialColor = document.querySelector('#c1');
  initialColor.classList.add('selected');
};

firstSelection();

function changeColorClass(event){
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
};

  let c1 = document.querySelector('#c1');
  c1.addEventListener('click', changeColorClass);
  let c2 = document.querySelector('#c2');
  c2.addEventListener('click', changeColorClass);
  let c3 = document.querySelector('#c3');
  c3.addEventListener('click', changeColorClass);
  let c4 = document.querySelector('#c4');
  c4.addEventListener('click', changeColorClass);