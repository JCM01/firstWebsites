function cambio1() {
	document.getElementById("cabecera").innerText = "Hola Caracola";
}

function cambio2() {
	let parrafos = document.getElementsByTagName('p');
	alert("Tengo "+parrafos.length+" en mi documento");

	//parrafos[2].innerText = "Hola Caracola";

	for (let i=0; i<parrafos.length; i++){
		parrafos[i].innerText= "Hola caracola en el parrafos "+ i;
	}

}

function cambio3() {
	let textos = document.getElementsByName("texto");
	for (let i=0; i<textos.length; i++) {
		textos[i].innerText = "Hola Caracola en el texto " + i;
	}
}

function cambio4() {
	let n = prompt("Dime un numero: ");
	n =parseInt(n);
	let parrafos = document.getElementsByTagName('p');

	for (let i=0; i<parrafos.length; i++) {
		parrafos[i].innerText = n + " x " + i + " = " + (n*i);
	}
}