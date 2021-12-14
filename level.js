var rj = document.getElementById("rejilla");
var fondito = rj.getContext("2d");
var map = "malla.png";

var fondo = new Image();
fondo.src = map;
fondo.addEventListener("load", dibujar);

function dibujar()
{
    fondito.drawImage(fondo, 0, 0);
}


