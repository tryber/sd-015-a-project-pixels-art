window.onload = function() {
    let getSelected = document.getElementsByClassName('color selected');
    let getPallet = document.querySelector('#color-palette');
    let getColor = document.querySelectorAll('.color');

    getPallet.addEventListener('click', function(event) {
        let selected = event.target.className;
        if(selected !== "color selected") {
            getSelected[0].className = 'color';
            event.target.className = 'color selected';
        }
    })
}
