let selected = document.getElementsByClassName('color');
for (let index = 0; index < selected.length; index += 1) {
  selected[index].addEventListener('click', addClass);
}
function addClass(event) {
  let removeSelected = document.querySelector('.selected');
  removeSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
