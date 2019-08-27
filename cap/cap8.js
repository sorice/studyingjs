var element = document.createElement('header');
element.style.fontWeight = "bold";
element.style.textAlign = "center";
element.textContent = "Capítulo 8: Date"; //nombre del capitulo
document.body.appendChild(element);
//formato para cada capitulo

var date = new Date();

var elemento = document.createElement('p');
elemento.textContent = date.toString() + date.toTimeString()+date.toDateString();
document.body.appendChild(elemento);

