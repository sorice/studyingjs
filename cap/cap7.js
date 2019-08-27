var element = document.createElement('header');
element.style.fontWeight = "bold";
element.style.textAlign = "center";
element.textContent = "Capítulo 7: Strings"; //nombre del capitulo
document.body.appendChild(element);
//formato para cada capitulo


var hello = "Todos los tipos";
var world = ' de llamadas';
var helloW = ` a elementos string`;
var carsInParkingLot = ["Toyota","Ferrari","Lexus"];
var booleanString = String(true); // "true"
var intString = (5232).toString(); // "5232"
var objString = ({}).toString(); // "[object Object]"
var otro = String.fromCharCode(104,101,108,108,111); //"hello"
var charCode = "μ".charCodeAt();

function reverse(string) {
    var strRev = "";
    for (var i = string.length - 1; i >= 0; i--) {
        strRev += string[i];
        }
    return strRev;
    }

var elemento = document.createElement('p');
elemento.textContent = otro+" Esto es "+hello+world+`${helloW} `+otro+reverse(" zebra ")+booleanString[2]; //nombre del capitulo
document.body.appendChild(elemento);

