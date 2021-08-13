for (let i = 0; i < 4; i += 1) {
  let colorPalette = document.getElementById("color-palette");
  let color = document.createElement("div");
  let colors = ["black", "orange", "red", "green"];
  color.className = "color";
  colorPalette.appendChild(color);
  color.style.backgroundColor = colors[i];
}
for (let i = 0; i < 25; i += 1) {
  let pixelBoard = document.getElementById("pixel-board");
  let pixel = document.createElement("div");
  pixel.className = "pixel";
  pixelBoard.appendChild(pixel);
  pixel.style.backgroundColor = "white";
}

window.onload = function() {
  let selected = document.querySelectorAll(".color");
  for (let i = 0; i < selected.length; i += 1) {
    if (selected[i].style.backgroundColor === "black") {
      selected[i].classList.add("selected");
    }
  }
}