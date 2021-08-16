let color;
function getColor(event) {
  color = event.target.id;
}

function reciveColor(event) {
  document.getElementById(event.target.id).style.backgroundColor = color;
}

function Apagarcor() {
  document.getElementById("white").style.backgroundColor = "white";
}
