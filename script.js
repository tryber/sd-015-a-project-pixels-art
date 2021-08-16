let rowcol = 5;
let board = document.getElementById("pixel-board");
let seleColor = document.getElementById("black");


function pxlgrid() {
    for (let i = 0; i < rowcol; i += 1) {
        let test = document.createElement("div");
        test.className = "pixels";
        board.appendChild(test);
        for (let ind = 0; ind < rowcol; ind += 1) {
            let test2 = document.createElement("div");
            test2.className = "pixel";
            test.appendChild(test2);
        }
    }
}
pxlgrid()

window.onload = function select() {
    seleColor.classList.add("selected");
}