var refranes = [
    "Por junio el mucho calor, nunca asusta al buen labrador.",
    "Ni creas en invierno claro, ni en verano nublado.",
    "Ser como el sol de invierno, que sale tarde y se pone luego.",
    "Duelos con pan son buenos de llevar.",
    "Por año de piedra, ninguno medra.",
    "Días de mayo, tan largos que sodes, morro de fame, de frío y de amores.",
    "El tiempo cura más que el sol.",
    "Cuando el viento sopla airado, no hay paz en ningún lado.",
    "Por bestia suele quedar quien en verano quiere caminar.",
    "Querer y poder, hermanos vienen a ser."
];
function mostrarRefranes(){
    let parrafos = document.getElementsByTagName('p');
    for (let i=0; i<parrafos.length; i++) {
        parrafos[i].innerText = refranes[i];
    }

}
function cambiarImagen() {
    let azar=Math.floor(Math.random()*10+1)

   document.getElementById("imagen").src="imagenes/"+azar+".jpg"
}