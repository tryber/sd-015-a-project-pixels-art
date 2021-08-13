let colorPalette = document.getElementById("color-palette");
let pixelBoard = document.getElementById("pixel-board");
let color = document.getElementsByClassName("color");
let pixel = document.getElementsByClassName("pixel");
let selectedColor = "black";

window.onload = function() {
  let selected = document.querySelectorAll(".color");
  for (let i = 0; i < selected.length; i += 1) {
    if (selected[i].style.backgroundColor === "black") {
      selected[i].classList.add("selected");
    }
  }
}

console.log(selectedColor);

for (let i = 0; i < 4; i += 1) {
  let createColor = document.createElement("div");
  let colors = ["black", "orange", "red", "green"];
  createColor.className = "color";
  colorPalette.appendChild(createColor);
  createColor.style.backgroundColor = colors[i];
}
for (let i = 0; i < 25; i += 1) {
  let pixelBoard = document.getElementById("pixel-board");
  let createPixel = document.createElement("div");
  createPixel.className = "pixel";
  pixelBoard.appendChild(createPixel);
  createPixel.style.backgroundColor = "white";
}


for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener("click", function() {
    for (let i = 0; i < color.length; i += 1) {
      color[i].classList.remove("selected");
    }
    color[i].classList.add("selected");
    selectedColor = color[i].style.backgroundColor;
  })
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener("click", function() {
    let selectedPixel = pixel[i];
    selectedPixel.style.backgroundColor = selectedColor;
    console.log(selectedColor);
  })
}