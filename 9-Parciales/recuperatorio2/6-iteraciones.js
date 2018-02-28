//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");
	var importe;
	var contador=0;
	var iteraciones=7;
	var mayorImporte=-999;
	var menorImporte=999;

	while(contador<iteraciones){
		contador++;
		importe=prompt("Importe del dia:");
		importe=parseInt(importe);
		if(importe<0){
			importe=prompt("Ingrese un importe valido (mayor a 0):");
			importe=parseInt(importe);
		}
		if(contador==1){
			menorImporte=importe;
			mayorImporte=importe;
		}else{
			if(importe>mayorImporte){
				mayorImporte=importe;
			}else{
				if(importe<menorImporte){
					menorImporte=importe;
				}
			}
		}
	}
	document.write("<br>"+"El mayor importe es: "+mayorImporte);
	document.write("<br>"+"El menor importe es: "+menorImporte)

	
}

