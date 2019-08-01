var name = prompt("What's your name?");

window.onload = function () {
    var element = document.createElement('p');
    element.textContent = "Hello "+name;
    document.body.appendChild(element);
};

var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

var ctx = canvas.getContext('2d');
ctx.font = '30px Coursive'
ctx.fillText("Hello Word",50,50)

document.body.appendChild(canvas);

var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
svg.width = 500;
svg.height = 50;
document.body.appendChild(svg);

var img = new Image();
img.src = 'imgs/hist.svg';
document.body.appendChild(img);


