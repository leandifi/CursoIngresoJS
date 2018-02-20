function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var promedio;
	
	while(contador<5)
	{
		contador++;
		numeroIngresado=prompt("Ingrese el siguiente numero.");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;

	}

	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN