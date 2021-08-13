const colors = ['black', 'red', 'green', 'blue'];

function palette(howMany){
    for (let i = 0; i < howMany.length; i += 1) {
        const divP = document.createElement('div');
        const parent = document.querySelector('#color-palette');
        divP.className = 'color';
        divP.classList.add(howMany[i]);
        divP.style.backgroundColor = howMany[i];

        parent.appendChild(divP);
    }
}

palette(colors);