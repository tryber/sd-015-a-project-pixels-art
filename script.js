// 6.

window.onload = function () {
  document.querySelector('.color').classList.add('selected');
};

// 7.

const black = document.querySelector('#blackSquare');
const blue = document.querySelector('#blueSquare');
const yellow = document.querySelector('#yellowSquare');
const red = document.querySelector('#redSquare');

function clickBlack() {
  black.classList.add('selected');
  blue.classList.remove('selected');
  yellow.classList.remove('selected');
  red.classList.remove('selected');
};

function clickBlue() {
  blue.classList.add('selected')
  black.classList.remove('selected');
  yellow.classList.remove('selected');
  red.classList.remove('selected');
};

function clickYellow() {
  yellow.classList.add('selected');
  blue.classList.remove('selected');
  black.classList.remove('selected');
  red.classList.remove('selected');
};

function clickRed() {
  red.classList.add('selected');
  blue.classList.remove('selected');
  yellow.classList.remove('selected');
  black.classList.remove('selected');
};

black.addEventListener('click', clickBlack);
blue.addEventListener('click', clickBlue);
yellow.addEventListener('click', clickYellow);
red.addEventListener('click', clickRed);

// 8.

let pixel1  = document.querySelector('#pixel1');
let pixel2  = document.querySelector('#pixel2');
let pixel3  = document.querySelector('#pixel3');
let pixel4  = document.querySelector('#pixel4');
let pixel5  = document.querySelector('#pixel5');
let pixel6  = document.querySelector('#pixel6');
let pixel7  = document.querySelector('#pixel7');
let pixel8  = document.querySelector('#pixel8');
let pixel9  = document.querySelector('#pixel9');
let pixel10 = document.querySelector('#pixel10');
let pixel11 = document.querySelector('#pixel11');
let pixel12 = document.querySelector('#pixel12');
let pixel13 = document.querySelector('#pixel13');
let pixel14 = document.querySelector('#pixel14');
let pixel15 = document.querySelector('#pixel15');
let pixel16 = document.querySelector('#pixel16');
let pixel17 = document.querySelector('#pixel17');
let pixel18 = document.querySelector('#pixel18');
let pixel19 = document.querySelector('#pixel19');
let pixel20 = document.querySelector('#pixel20');
let pixel21 = document.querySelector('#pixel21');
let pixel22 = document.querySelector('#pixel22');
let pixel23 = document.querySelector('#pixel23');
let pixel24 = document.querySelector('#pixel24');
let pixel25 = document.querySelector('#pixel25');

function clickPixel1() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel1.style.backgroundColor = colorToBePainted
}
function clickPixel2() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel2.style.backgroundColor = colorToBePainted
}
function clickPixel3() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel3.style.backgroundColor = colorToBePainted
}
function clickPixel4() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel4.style.backgroundColor = colorToBePainted
}
function clickPixel5() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel5.style.backgroundColor = colorToBePainted
}
function clickPixel6() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel6.style.backgroundColor = colorToBePainted
}
function clickPixel7() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel7.style.backgroundColor = colorToBePainted
}
function clickPixel8() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel8.style.backgroundColor = colorToBePainted
}
function clickPixel9() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel9.style.backgroundColor = colorToBePainted
}
function clickPixel10() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel10.style.backgroundColor = colorToBePainted
}
function clickPixel11() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel11.style.backgroundColor = colorToBePainted
}
function clickPixel12() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel12.style.backgroundColor = colorToBePainted
}
function clickPixel13() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel13.style.backgroundColor = colorToBePainted
}
function clickPixel14() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel14.style.backgroundColor = colorToBePainted
}
function clickPixel15() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel15.style.backgroundColor = colorToBePainted
}
function clickPixel16() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel16.style.backgroundColor = colorToBePainted
}
function clickPixel17() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel17.style.backgroundColor = colorToBePainted
}
function clickPixel18() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel18.style.backgroundColor = colorToBePainted
}
function clickPixel19() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel19.style.backgroundColor = colorToBePainted
}
function clickPixel20() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel20.style.backgroundColor = colorToBePainted
}
function clickPixel21() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel21.style.backgroundColor = colorToBePainted
}
function clickPixel22() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel22.style.backgroundColor = colorToBePainted
}
function clickPixel23() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel23.style.backgroundColor = colorToBePainted
}
function clickPixel24() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel24.style.backgroundColor = colorToBePainted
}
function clickPixel25() {
  let colorToBePainted = document.querySelector('.selected').style.backgroundColor
  pixel25.style.backgroundColor = colorToBePainted
}

pixel1.addEventListener('click', clickPixel1);
pixel2.addEventListener('click', clickPixel2);
pixel3.addEventListener('click', clickPixel3);
pixel4.addEventListener('click', clickPixel4);
pixel5.addEventListener('click', clickPixel5);
pixel6.addEventListener('click', clickPixel6);
pixel7.addEventListener('click', clickPixel7);
pixel8.addEventListener('click', clickPixel8);
pixel9.addEventListener('click', clickPixel9);
pixel10.addEventListener('click', clickPixel10);
pixel11.addEventListener('click', clickPixel11);
pixel12.addEventListener('click', clickPixel12);
pixel13.addEventListener('click', clickPixel13);
pixel14.addEventListener('click', clickPixel14);
pixel15.addEventListener('click', clickPixel15);
pixel16.addEventListener('click', clickPixel16);
pixel17.addEventListener('click', clickPixel17);
pixel18.addEventListener('click', clickPixel18);
pixel19.addEventListener('click', clickPixel19);
pixel20.addEventListener('click', clickPixel20);
pixel21.addEventListener('click', clickPixel21);
pixel22.addEventListener('click', clickPixel22);
pixel23.addEventListener('click', clickPixel23);
pixel24.addEventListener('click', clickPixel24);
pixel25.addEventListener('click', clickPixel25);

// 9.

function createClearButton(stringButtonName){
  let createButton = document.createElement('button');
  createButton.id = 'clear-board'
  createButton.innerHTML = stringButtonName
  document.querySelector('#clearButton').appendChild(createButton)
};

let buttonName = 'Limpar';
createClearButton(buttonName);

function clearPixel1(){
        pixel1.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel2(){
        pixel2.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel3(){
        pixel3.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel4(){
        pixel4.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel5(){
        pixel5.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel6(){
        pixel6.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel7(){
        pixel7.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel8(){
        pixel8.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel9(){
        pixel9.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel10(){
        pixel10.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel11(){
        pixel11.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel12(){
        pixel12.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel13(){
        pixel13.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel14(){
        pixel14.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel15(){
        pixel15.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel16(){
        pixel16.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel17(){
        pixel17.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel18(){
        pixel18.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel19(){
        pixel19.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel20(){
        pixel20.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel21(){
        pixel21.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel22(){
        pixel22.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel23(){
        pixel23.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel24(){
        pixel24.style.backgroundColor = 'rgb(255 255 255)'
}
function clearPixel25(){
        pixel25.style.backgroundColor = 'rgb(255 255 255)'
}


let button = document.querySelector('#clear-board');
button.addEventListener('click', clearPixel1)
button.addEventListener('click', clearPixel2)
button.addEventListener('click', clearPixel3)
button.addEventListener('click', clearPixel4)
button.addEventListener('click', clearPixel5)
button.addEventListener('click', clearPixel6)
button.addEventListener('click', clearPixel7)
button.addEventListener('click', clearPixel8)
button.addEventListener('click', clearPixel9)
button.addEventListener('click', clearPixel10)
button.addEventListener('click', clearPixel11)
button.addEventListener('click', clearPixel12)
button.addEventListener('click', clearPixel13)
button.addEventListener('click', clearPixel14)
button.addEventListener('click', clearPixel15)
button.addEventListener('click', clearPixel16)
button.addEventListener('click', clearPixel17)
button.addEventListener('click', clearPixel18)
button.addEventListener('click', clearPixel19)
button.addEventListener('click', clearPixel20)
button.addEventListener('click', clearPixel21)
button.addEventListener('click', clearPixel22)
button.addEventListener('click', clearPixel23)
button.addEventListener('click', clearPixel24)
button.addEventListener('click', clearPixel25)


