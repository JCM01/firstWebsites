function comprobar() {
	var estados = document.getElementsByName("estadoCivil");
	if (estados[0].checked == true)
			alert("Es soltero");
		else if (estados[1].checked == true)
			alert("Es casado");
		else if (estados[2].checked == true)
			alert("Es viudo");
		else
			alert("Es divorciado");

		if (document.getElementsById("nadar").checked)
			alert("Le gusta nadar");
		else
			alert("No le gusta nadar");

}

function despedir(elemento) {
	elemento.innerText = "Adios mundo";
}

onload = cargarEventos;

function cargarEventos() {
document.getElementById('cabeceraSaludo').onclick = saludar;
}
function saludar() {
	document.getElementById('cabeceraSaludo').innerText =
		"Hola Amigos de JavaScript";
}

function decirAlgo() {
	// event es una propiedad del objeto window
	event.target.innerText = "Hola Caracola";
}

function comprobarTecla() {
	alert(event.keyCode  + " - " + event.key);
	if (event.keyCode!=49 && event.keyCode!=50 && event.keyCode!=51) {
		event.preventDefault();
	}
}


