for (let i = 0; i < 4; i += 1) {
  let colorPalette = document.getElementById("color-palette");
  let color = document.createElement("div");
  let colors = ["black", "orange", "red", "green"]
  color.className = "color";
  colorPalette.appendChild(color);
  color.style.backgroundColor = colors[i];
}