function Mostrar()
{
	var numeroIngresado;
	var respuesta;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorPositivos=0;
	var contadoNegativos=0;
	var promedio;
	var acumuladorPositivos=0;
	var numeroMaximo=-100;
	var numeroMinimo=100;
	var contador=0;
	var promedioPositivos;

	while(respuesta!="no"){
		contador++;
		numeroIngresado=prompt("Ingrese un numero mayor que -50 y menor que 50: ");
		numeroIngresado=parseInt(numeroIngresado);
		while(numeroIngresado<-50 || numeroIngresado>50 || isNaN(numeroIngresado)){
			numeroIngresado=prompt("Ingrese un numero valido: ");
			numeroIngresado=parseInt(numeroIngresado);
	}if(numeroIngresado==0){

	}else{
		if(numeroIngresado%2==0){
			contadorPares++;
		}else{
			contadorImpares++;
		}
	}
		if(contador==1){
			numeroMaximo=numeroIngresado;

		}else{
			if(numeroIngresado>numeroMaximo){
				numeroMaximo=numeroIngresado;
			}
		}
		if(numeroIngresado>0){
			contadorPositivos++;
			acumuladorPositivos=acumuladorPositivos+numeroIngresado;
			
		}else{
			contadoNegativos++;
		}
		if(contador==1){
			numeroIngresado=numeroMinimo;
		}else{
			if(numeroIngresado<numeroMinimo){
				numeroMinimo=numeroIngresado;
			}
		}
		respuesta=prompt("Ingrese una respuesta");
	}
	promedioPositivos=acumuladorPositivos/contadorPositivos;
	document.write("<br>"+"La cantidad de pares es: "+contadorPares);
	document.write("<br>"+"La cantidad de impares es: "+contadorImpares);
	document.write("<br>"+"El promedio de los positivos es: "+promedioPositivos);
	document.write("<br>"+"El maximo es: "+numeroMaximo);
	document.write("<br>"+"El minimo es: "+numeroMinimo);


}
