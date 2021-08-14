function initialSelect() {
  const firstColor = document.querySelector('.color');
  firstColor.className = 'color selected';
}
initialSelect();

let blackButton = document.getElementsByClassName ('color')[0];
let greenButton = document.getElementsByClassName ('color')[1];
let redButton = document.getElementsByClassName ('color')[2];
let yellowButton = document.getElementsByClassName ('color')[3];

function clickBlackSelect() {
    blackButton.className = 'color selected';
    greenButton.className = 'color';
    redButton.className = 'color';
    yellowButton.className = 'color';
    console.log(document.querySelectorAll('.selected'))  //teste

}
function clickGreenSelect() {
    blackButton.className = 'color';
    greenButton.className = 'color selected';
    redButton.className = 'color';
    yellowButton.className = 'color';
    console.log(document.querySelectorAll('.selected'))  //teste

}
function clickRedSelect() {
    blackButton.className = 'color';
    greenButton.className = 'color';
    redButton.className = 'color selected';
    yellowButton.className = 'color';
    console.log(document.querySelectorAll('.selected'))  //teste

}
function clickYellowSelect() {
    blackButton.className = 'color';
    greenButton.className = 'color';
    redButton.className = 'color';
    yellowButton.className = 'color selected';
    console.log(document.querySelector('.selected'))  //teste
}

blackButton.addEventListener('click', clickBlackSelect);
greenButton.addEventListener('click', clickGreenSelect);
redButton.addEventListener('click', clickRedSelect);
yellowButton.addEventListener('click', clickYellowSelect);
