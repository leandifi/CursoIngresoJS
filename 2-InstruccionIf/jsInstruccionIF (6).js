function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad>17)
	{
		alert("Es mayor de edad.");

	}else
	{
		if(edad>13 && edad<17 || edad==17){
			alert("Es adolecente.");

		}else{
			alert("Es niño.");
		}
	}






}//FIN DE LA FUNCIÓN