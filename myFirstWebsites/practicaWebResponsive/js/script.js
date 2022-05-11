function verJuego() {
	let juegoSeleccionado = document.getElementById("juegos");
	let imagenJuego = document.getElementById("imagen");

	imagenJuego.src = "imagenes/" + juegoSeleccionado.value;

	//alert(juegoSeleccionado.selectedIndex);

	//alert(juegoSeleccionado.options.length);

	//alert(juegoSeleccionado.options[2].innerText);

	//alert(juegoSeleccionado.options[juegoSeleccionado.selectedIndex].innerText);
}

function sacarImagenAzar() {
	let imagenes = ["last.jpg","fallguys.jpg","fortnite.jpg","warface.jpg","mortalk.jpg"];
	let azar = Math.floor(Math.random()*5);
	let imagenJuego = document.getElementById("imagen2");
	imagenJuego.src="imagenes/" + imagenes[azar];
}

function factorial() {
var n = document.getElementById("numero").value; 
var total = 1;
for(var i = 1; i<=n; i++){
	total = total * i;
}
alert("El factorial del numero "+ n + " es: " +total); 
}

function par() {

var n2 = document.getElementById("numero2").value;
if (n2 % 2 == 0)

  {

    alert('El numero introducido es par');

  }

  else {

  	alert('El numero introducido es impar');
}

}