//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio;
	var iva;
	var precioFinal;

	precio=prompt("Ingrese importe:");
	precio=parseInt(precio);

	iva=(precio*21)/100
	precioFinal=iva+precio;

	document.getElementById('importe').value=precioFinal;
	
}

