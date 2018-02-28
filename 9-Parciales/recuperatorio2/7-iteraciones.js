//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 7-iteraciones");

	var nota;
	var contador=0;
	var iteraciones=6;
	var sexo;
	var masAlta;
	var masBaja;
	var promedio;
	var contadorM=0;
	var acumulador=0;

	while(contador<iteraciones){
		contador++;
		nota=prompt("Ingrese una nota entre 0 y 10:");
		nota=parseInt(nota);
		acumulador=acumulador+nota;
		while(nota<0 || nota>10){
			nota=prompt("Ingrese una nota valida:");
			nota=parseInt(nota);
		}
		sexo=prompt("Ingresa f para femenino o m para masculino:")
		while(sexo!="f" && sexo!="m"){
			sexo=prompt("Ingrese un sexo valido:");
		}
		if(nota>6 && sexo=="m"){
			contadorM++;
		}if(contador==1){
			masBaja=nota;
			masAlta=nota;
		}else{
			if(nota>masAlta){
				masAlta=nota
			}else{
				if(nota<masBaja){
					masBaja=nota;
				}
			}
		}
	}
	promedio=acumulador/contador;
	document.write("<br>"+"El promedio de las notas totales es de: "+promedio);
	document.write("<br>"+"La nota mas baja es: "+masBaja);
	document.write("<br>"+"La cantidad de varones que aprobaron es: "+contadorM);
	
}

