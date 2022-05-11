let persona = {
		"dni": "13745678A",
		"nombre": "pepe",
		"apellidos": "Sanchez",
		"trabaja": true,
		"sueldo": 3000,
		"domicilio": {
			"calle": "Oca",
			"numero": 23,
			"piso": 1,
			"puerta": "A"
		},
		"aficiones": ["Nadar", "cantar", "Escucha musica"]
	};

//cargarDatos();

function cargarDatos() {
	document.getElementById('dni').innerText = persona.dni;
	document.getElementById('nombre').innerText =
	persona.nombre +" "+ persona.apellidos;
	document.getElementById('trabaja').innerText =
	persona.trabaja;
	document.getElementById('domicilio').innerText =
	persona.domicilio.calle + " " +
	persona.domicilio.numero + " " +
	persona.domicilio.piso + " " +
	persona.domicilio.puerta;

let listaAficiones = " ";
for (let i in persona.aficiones) {
	listaAficiones=listaAficiones+persona.aficiones[i]+ " ";
}

	document.getElementById('aficiones').innerText
	persona.aficiones;
}
