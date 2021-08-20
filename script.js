let boardPlace = document.getElementById('boardList');
let altura = 5;
let comprimento = 5;

for (let index = 0; index < altura; index += 1) {
    
    for (let index = 0; index < comprimento; index += 1) {

        let pixel = document.createElement('li');
        pixel.className = 'pixel';
        boardPlace.appendChild(pixel);

    }
}