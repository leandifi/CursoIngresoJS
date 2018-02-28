//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");

	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=prompt("Ingrese el primer numero:");
	primerNumero=parseInt(primerNumero);
	segundoNumero=prompt("Ingrese el segundo numero:");
	segundoNumero=parseInt(segundoNumero);

	if(primerNumero==segundoNumero){
		resultado=primerNumero*segundoNumero;
	}else{
		if(primerNumero>segundoNumero){
			resultado=primerNumero-segundoNumero;
		}else{
			resultado=primerNumero+segundoNumero;
		}
	}	document.write("El resultado es: "+resultado);

	
}

