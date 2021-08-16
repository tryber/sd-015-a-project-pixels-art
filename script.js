let color;
function getColor(event) {
  color = event.target.id;
}

function reciveColor(event) {
  event.target.style.backgroundColor = color;
}

function Apagarcor() {
  document.getElementById("button").style.backgroundColor = "white";
}
