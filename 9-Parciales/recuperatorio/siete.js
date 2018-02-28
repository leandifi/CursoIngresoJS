function Mostrar()
{
	var nota;
	var cantidadF=0;
	var cantidadM=0;
	var iteraciones=5;
	var contador=0;
	var acumulador=0;
	//var sumaNotas=0;
	var promedio;
	var notaMinima=1000;
	var numeroMaximo=-1000;
	var varonesAprobados=0;
	var sexo;
	var notasPares=0;
	var notasImpares=0;

	while(contador<iteraciones){

			contador++;
			nota=prompt("Ingrese nota.");
			nota=parseInt(nota);
			acumulador=acumulador+nota;
		while(nota<0 || nota>10){

			nota=prompt("Nota incorrecta, ingrese una nota.");
			nota=parseInt(nota);

		}
		sexo=prompt("Ingrese F para femenino y M para masculino");
		while(sexo!="f" && sexo!="m"){

			sexo=prompt("Ingrese un sexo valido");
		}if(sexo=="f"){

			cantidadF++;
		}else {
			cantidadM++;
		}
		if(contador==1){
			notaMinima=nota;

		}else
		{
			if(nota<notaMinima){
				notaMinima=nota;
			}
		}

		if(sexo="m" && nota>5){
			varonesAprobados++;
		}
		if(nota%2==0){
			notasPares++;
		}else{
			notasImpares++;
		}
		//document.write("<br>"+"La nota es: "+nota);
		//document.write("<br>"+"El sexo es: "+sexo);
	}
	promedio=acumulador/contador;
	/*alert("El promedio de las notas totales es "+promedio);
	alert("La nota mas baja es "+notaMinima);
	alert("Varones aprobados (6 o màs): "+varonesAprobados);
	alert("Notas pares: "+notasPares);
	alert("Notas impares: "+notasImpares);*/
	document.write("<br>"+"El promedio de las notas es: "+promedio);
	document.write("<br>"+"La nota mas baja es: "+notaMinima);
	document.write("<br>"+"Varones aprobados (6 o mas): "+varonesAprobados);
	document.write("<br>"+"Notas pares: "+notasPares);
	document.write("<br>"+"Notas impares: "+notasImpares);

}
