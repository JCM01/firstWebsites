let contador = 0;

function ejemplo1() {
	// getElementById
	contador++;
	document.getElementById("prueba").innerText =
	"Has pulsado " + contador + " veces";
}

function ejemplo2 () {
	// getElementsByTagName recupera un array
	let elementos = document.getElementsByTagName("div");
	for (let i=0; i<elementos.length; i++) {
		elementos[i].innerText = "Escribiendo en div nº " + i;
	}
}

function ejemplo3() {
	// getElementByName
let elementos = document.getElementsByName("conjunto");
	for (let i=0; i<elementos.length; i++) {
		elementos[i].innerText = "Escribiendo en elemento nº " + i;
	}
}

function ejemplo4 () {
	// getElementsByClassName 
	// getElementsByName
	let elementos = document.getElementsByClassName("comico");
	for (let i=0; i<elementos.length; i++) {
		elementos[i].innerText = "Escribiendo en elemento nº " + i;
	} 
}

