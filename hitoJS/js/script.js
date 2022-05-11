function calcularPrecio(){
    let barrio = document.getElementById('opciones').value;
    let precio =0;
    let dormitorio = document.getElementsByName('piso');
    let mejora = document.getElementsByName('mejoras')
    let acumulador=0;
    
    if(dormitorio[0].checked==true){
    	metros=50;
    }

    else if(dormitorio[1].checked==true){
    	metros=70;
    }

    else{
    	metros=100;
    }

    if (barrio=="sanblas"){
        precio=20;
    }
    
    else if(barrio=="hortaleza"){
        precio=25;
    }

    else if(barrio=="retiro"){
        precio=30;
    }

    else{
        precio=23;
    }

    for(let i = 0; i<mejora.length; i++){
    	if(mejora[i].checked==true){
    		acumulador+=0.03;
    	}
    }

    let total=precio*metros
    let totalAcumulador=total*acumulador;
    let totalFinal=total+totalAcumulador;
     let datos = "<p>El precio total de la zona " + barrio + " es de : "+precio+"€</p>"+
    "<p>El precio de alquiler sin mejora es : "+total+"€</p>"+
    "<p>El aumento por mejoras es del : "+acumulador+"</p>"+
    "<p>El precio total con las mejoras es : "+totalFinal.toFixed(2)+"€</p>";
  	document.getElementById('salida').innerHTML = datos;
  
}
