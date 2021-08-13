function createTag(tag) {
  const create = document.createElement(`${tag}`);

  return document.body.appendChild(create);
}

const palette = document.getElementById('color-palette');

const color1 = 1;
const color2 = 1;
const color3 = 1;
const color4 = 1;



for (let number = 0; number < 4; number += 1) {
  palette.appendChild(createTag('div'));
}
const selector = document.querySelectorAll('#color-palette div');

console.log(selector);
selector.forEach((elemen) => elemen.classList.add('color'));
