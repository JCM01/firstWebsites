function verJuego() {
	let juegoSeleccionado = document.getElementById("juegos");
	let miImagen = document.getElementById("imagen");
	// valor del elemento seleccionado (value)
	//alert(juegoSellecionado.value);

	miImagen.src = "imagenes/"+juegoSeleccionado.value;

	//Indice del elemento seleccionado.
	//alert(juegoSeleccionado.selecedIndex);

	//Numero de elementos (options)
	//alert(juegoSeleccionado.options.length);

	// Contenido del option que ocupa la posicion 2
	//alert(juegoSeleccionado.options[2].innerText);

	//alert(juegoSeleccionado.options[juegoSeleccionado.selecedIndex].innerText);
	
	function sacarImagenAzar(){
		let imagenes =["fortnite.jpg","last.jpg","minecraft.jpg","reddead.jpg","spiderman.jpg"];
		let azar = Math.floor(Math.random()*5);
		let miImagen = document.getElementById("imagen2");
		miImagen.src="imagenes/"+imagenes[azar];
	}
}
