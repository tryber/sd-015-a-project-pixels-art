let pixelsBoard = document.createElement("div");
pixelsBoard.id = "pixel-board";
document.body.appendChild(pixelsBoard);
function pixels25() {
for(let countPx = 1; countPx <= 25; countPx += 1) {
let board = document.createElement("div");
board.className = "pixel";
pixelsBoard.appendChild(board);
}
} pixels25();

let firstColor = document.querySelector(".black");
function changeBlackClass() {
    firstColor.className += " selected";
} changeBlackClass();