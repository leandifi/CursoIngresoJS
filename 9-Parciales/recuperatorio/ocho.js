function Mostrar()
{
	var numeroIngresado;
	var respuesta;
	var contador=0;
	var contadorPares=0;
	var numeroMinimo=1000;
	var numeroMaximo=-1000;
	var acumulador=0;
	var promedio;
	
	while(respuesta!="no"){
		contador++;
		numeroIngresado=prompt("Ingrese un numero psotivo:");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("Ingrese no para terminar.");
		acumulador=acumulador+numeroIngresado;
		while(numeroIngresado<0){
			numeroIngresado=prompt("Ingrese un valido:");
			numeroIngresado=parseint(numeroIngresado);
		}if(numeroIngresado%2==0){
			contadorPares++;
		}
		if(contador==1){
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
		}else{
			if(numeroIngresado>numeroMaximo){
				numeroMaximo=numeroIngresado;
			}else{
				if(numeroIngresado<numeroMinimo){
					numeroMinimo=numeroIngresado;
				}
			}
		}
		
		
	}
	promedio=acumulador/contador;
	document.write("<br>"+"La cantidad de numeros pares es: "+contadorPares);
	document.write("<br>"+"El promedio de todos los numeros ingresados es: "+promedio);
	document.write("<br>"+"La suma de todos los numero es: "+acumulador);
	document.write("<br>"+"El numero minimo es: "+numeroMinimo);
	document.write("<br>"+"El numero maximo es: "+numeroMaximo);


}
