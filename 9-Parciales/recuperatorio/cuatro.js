function Mostrar()
{
	var primerNumero;
	var segundoNumero;
	var suma;
	
	primerNumero=prompt("Ingrese el primer numero:");
	primerNumero=parseInt(primerNumero);
	segundoNumero=prompt("Ingrese el segundo numero:");
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	if(suma==0){
		document.write("La suma de los numeros es cero.");
	}

	if(suma>0){
		document.write("La suma de los numeros es positiva.");
	}//else(suma<0){
		//document.write("La suma de los numeros es negativa.");
	//}

	if(suma<0){
		document.write("La suma de los numeros es negativa.");
	}

	

}
