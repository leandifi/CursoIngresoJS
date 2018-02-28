//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");
	var ancho;
	var largo;
	var perimetro;
	var alambre;

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	largo=document.getElementById('largo').value;
	ancho=parseInt(largo);
	//largo=prompt("Ingrese el largo:");
	//largo=parseInt(largo);

	perimetro=largo*2+ancho*2;
	alambre=perimetro*6;

	alert("Se necesitan: "+alambre+" metros de alambre.");


	
}

