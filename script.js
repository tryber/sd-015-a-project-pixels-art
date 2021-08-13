window.onload = function() { // https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onload

    document.getElementById('black').classList.add('selected'); // https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element
}


function selectColor(color) {
    resetSelectedColor();
    document.getElementById(color).classList.add('selected');
    document.getElementById('selected-color-box').style.background = document.getElementsByClassName('selected')[0].id;
    console.log(document.getElementById(color).classList);
}

function resetSelectedColor() {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
}