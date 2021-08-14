window.addEventListener('load', function(){
  fillColorPalette();
  generatePixels();
});

/* 
  funcao usada para preenchimento da paleta de cores
  de acordo com o array de objetos allColors.
*/
function randomColorNumber() {
  return Math.floor(Math.random() * 148 + 1);
}

function fillColorPalette() {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    const colorNum = randomColorNumber();
      
    if (i === 0 ) {
      colors[i].style.backgroundColor = 'black';
      colors[i].className += ' selected';
    } else {
      colors[i].style.backgroundColor = allColors[colorNum].name;
      }

    }
  }

function generatePixels() {
  const pixels = 5;
  const board = document.getElementById('pixel-board');
  
  for (let i = 0; i < pixels ** 2; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    board.appendChild(div);
  }
}
/*
  É possível pegar todas as cores de forma manual para gerar
  esse objeto, mas nesse caso puxei de um repositório no github e coloquei dentro da const e modifiquei todo o conteudo.

  Referência: https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json

  Total: 148 cores. 
  Modifiquei cada elemento para se encaixar as minhas necessidades ,por conta disso, esta totalmente 
  diferente do repositorio que usei como referencia.
*/
const allColors = [
  { name: 'aliceblue' },
  { name: 'antiquewhite' },
  { name: 'aqua' }, 
  { name: 'aquamarine' },
  { name: 'azure' },
  { name: 'beige' },
  { name: 'bisque' },
  { name: 'black' },
  { name: 'blanchedalmond' },
  { name: 'blue' },
  { name: 'blueviolet' },
  { name: 'brown' },
  { name: 'burlywood' },
  { name: 'cadetblue' },
  { name: 'chartreuse' },
  { name: 'chocolate' },
  { name: 'coral' },
  { name: 'cornflowerblue' },
  { name: 'cornsilk' },
  { name: 'crimson' },
  { name: 'cyan' },
  { name: 'darkblue' },
  { name: 'darkcyan' },
  { name: 'darkgoldenrod' },
  { name: 'darkgray' },
  { name: 'darkgreen' },
  { name: 'darkgrey' },
  { name: 'darkkhaki' },
  { name: 'darkmagenta' },
  { name: 'darkolivegreen' },
  { name: 'darkorange' },
  { name: 'darkorchid' },
  { name: 'darkred' },
  { name: 'darksalmon' },
  { name: 'darkseagreen' },
  { name: 'darkslateblue' },
  { name: 'darkslategray' },
  { name: 'darkslategrey' },
  { name: 'darkturquoise' },
  { name: 'darkviolet' },
  { name: 'deeppink' },
  { name: 'deepskyblue' },
  { name: 'dimgray' },
  { name: 'dimgrey' },
  { name: 'dodgerblue' },
  { name: 'firebrick' },
  { name: 'floralwhite' },
  { name: 'forestgreen' },
  { name: 'fuchsia' },
  { name: 'gainsboro' },
  { name: 'ghostwhite' },
  { name: 'goldenrod' },
  { name: 'gold' },
  { name: 'gray' },
  { name: 'green' },
  { name: 'greenyellow' },
  { name: 'grey' },
  { name: 'honeydew' },
  { name: 'hotpink' },
  { name: 'indianred' },
  { name: 'indigo' },
  { name: 'ivory' },
  { name: 'khaki' },
  { name: 'lavenderblush' },
  { name: 'lavender' },
  { name: 'lawngreen' },
  { name: 'lemonchiffon' },
  { name: 'lightblue' },
  { name: 'lightcoral' },
  { name: 'lightcyan' },
  { name: 'lightgoldenrodyellow' },
  { name: 'lightgray' },
  { name: 'lightgreen' },
  { name: 'lightgrey' },
  { name: 'lightpink' },
  { name: 'lightsalmon' },
  { name: 'lightseagreen' },
  { name: 'lightskyblue' },
  { name: 'lightslategray' },
  { name: 'lightslategrey' },
  { name: 'lightsteelblue' },
  { name: 'lightyellow' },
  { name: 'lime' },
  { name: 'limegreen' },
  { name: 'linen' },
  { name: 'magenta' },
  { name: 'maroon' },
  { name: 'mediumaquamarine' },
  { name: 'mediumblue' },
  { name: 'mediumorchid' },
  { name: 'mediumpurple' },
  { name: 'mediumseagreen' },
  { name: 'mediumslateblue' },
  { name: 'mediumspringgreen' },
  { name: 'mediumturquoise' },
  { name: 'mediumvioletred' },
  { name: 'midnightblue' },
  { name: 'mintcream' },
  { name: 'mistyrose' },
  { name: 'moccasin' },
  { name: 'navajowhite' },
  { name: 'navy' },
  { name: 'oldlace' },
  { name: 'olive' },
  { name: 'olivedrab' },
  { name: 'orange' },
  { name: 'orangered' },
  { name: 'orchid' },
  { name: 'palegoldenrod' },
  { name: 'palegreen' },
  { name: 'paleturquoise' },
  { name: 'palevioletred' },
  { name: 'papayawhip' },
  { name: 'peachpuff' },
  { name: 'peru' },
  { name: 'pink' },
  { name: 'plum' },
  { name: 'powderblue' },
  { name: 'purple' },
  { name: 'rebeccapurple' },
  { name: 'red' },
  { name: 'rosybrown' },
  { name: 'royalblue' },
  { name: 'saddlebrown' },
  { name: 'salmon' },
  { name: 'sandybrown' },
  { name: 'seagreen' },
  { name: 'seashell' },
  { name: 'sienna' },
  { name: 'silver' },
  { name: 'skyblue' },
  { name: 'slateblue' },
  { name: 'slategray' },
  { name: 'slategrey' },
  { name: 'snow' },
  { name: 'springgreen' },
  { name: 'steelblue' },
  { name: 'tan' },
  { name: 'teal' },
  { name: 'thistle' },
  { name: 'tomato' },
  { name: 'turquoise' },
  { name: 'violet' },
  { name: 'wheat' },
  { name: 'white' },
  { name: 'whitesmoke' },
  { name: 'yellow' },
  { name: 'yellowgreen' },
];
