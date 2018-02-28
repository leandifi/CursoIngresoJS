//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*No se tiene que validar ni usar while;Se ingresan dos numeros: si son iguales
se concatenan. si el mayor es el primero se multiplican, de lo contrario se restan. Si la multiplicacion es par: mostrar "es par"*/

function Mostrar()
{
	//alert("Funciona 4-if");
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese un numero:");
	numeroDos=prompt("Ingrese el segundo numero.");
	if(numeroUno==numeroDos){
		resultado=numeroUno+numeroDos
	}else{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		if(numeroUno>numeroDos){
			resultado=numeroUno*numeroDos
		}else{
			resultado=numeroUno-numeroDos;
		}
	}
	if((numeroUno*numeroDos)%2==0 && (numeroUno*numeroDos)!=0){
		alert(resultado+" es par.");
	}else{
		alert(resultado);
	}
	
}

