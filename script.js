const quadro = document.querySelector("#pixel-board");


createSpans();

function createSpans() {
    for (let index = 1; index <= 29; index += 1) {
        if (index === 6 | index === 12 | index === 18 | index === 24) {
            let br = document.createElement('br');
            quadro.appendChild(br);
        } else {
            let span = document.createElement('span');
            span.className = "pixel"
            quadro.appendChild(span);
        }
    }
}