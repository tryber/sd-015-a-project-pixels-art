function corDinamPaleta() {
    let arrCoresPaleta = ['black', 'blue', 'yellow', 'red'];

    for (let i = 0; i < arrCoresPaleta.length; i += 1) {
        let div = document.getElementsByTagName('div')[i];
        div.style.backgroundColor = arrCoresPaleta[i];
        div.innerHTML;

    }

}
corDinamPaleta();