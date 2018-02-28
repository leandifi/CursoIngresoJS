//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*Se ingresa hasta que el usuario quiera: El nombre de un animal. El peso del mismo(validar que sea mayor a 0) y la temperatura
del habitat de este animal (validad entre -40 y 40). Informar la cantidad de temperaturas pares, la cantidad de temperaturas
impares, el nombre del animal mas pesasdo, el nombre del animal menos pesado, la cantidad de animales que viven en habitat moneres
a 0 inclusive. El promedio del peso de todos los animales. La temperatura maxima y la minima*/
function Mostrar()
{
	//alert("Funciona 8-iteraciones");
	var nombre;
	var peso;
	var temperatura;
	var continuar="no";
	var temperaturaPar=0;
	var temperaturaImpar=0;
	var pesoMaximo=-999;
	var pesoMinimo=999;
	var nombreMaximo;
	var nombreMinimo;

	while(continuar!="no")
	{
		nombre=prompt("Ingrese el nombre de un animal:");
		peso=prompt("Ingrese el peso del mismo:");
		peso=parseInt(peso);
		while(peso<0)
		{
			peso=prompt("Ingrese un peso valido (mayor a 0):");
			peso=parseInt(peso);
		}
		temperatura=prompt("Ingrese la temperatura de su habitat:");
		temperatura=parseInt(temperatura);
		while(temperatura<-40 || temperatura>40)
		{
			temperatura=prompt("Ingrese una temperatura valida:");
			temperatura=parseInt(temperatura);
		}
		if(temperatura%2==0 && temperatura!=0)
		{
			temperaturaPar++;
		}else
		{
			if(!=0)
			{
				temperaturaImpar++;
			}
		}
		if(contador==1)
		{
			pesoMaximo=peso;
			pesiMinimo=peso
			nombreMaximo=nombre;
			nombreMinimo=nombre;
		}else
		{
			if(peso>pesoMaximo)
			{
				pesoMaximo=peso;
				nombreMaximo=nombre;
			}else
			{
				if(peso<pesoMinimo)
				{
					pesoMinimo=peso;
					nombreMinimo=nombre;
				}
			}
		}

	}
	alert("El que mas pesa es: "+nombreMaximo)
}

