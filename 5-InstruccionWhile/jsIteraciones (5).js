function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
	
	while(sexo!="f" && sexo!="m")
	{
		sexo = prompt("ingrese f ó m .");

	}

	if(sexo=="f")
		{
			
			document.getElementById('Sexo').value="Femenino";


		}else
		{
			
			document.getElementById('Sexo').value="Masculino";
		}

}//FIN DE LA FUNCIÓN