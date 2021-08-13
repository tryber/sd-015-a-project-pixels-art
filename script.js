let color = document.querySelectorAll('.color');
for (let index = 0; index < color.length; index++) {
  if (color[index] === color[0]) {
    color[index].style.backgroundColor = '#8ECAE6';
  } else if (color[index] === color[1]) {
    color[index].style.backgroundColor = '#FFB703';
  } else if (color[index] === color[2]) {
    color[index].style.backgroundColor = '#023047';
  } else if (color[index] === color[3]) {
    color[index].style.backgroundColor = '#FB8500';
  }
}
