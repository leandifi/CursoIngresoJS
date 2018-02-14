function Mostrar()
{
//tomo la edad  
	
	var edad;
	var estadoCivil;
	
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;	


	if(edad>=18 && estadoCivil=="Soltero")
	{

		alert("Es soltero y no es menor.");

	}else
		{
			if (edad<18 && estadoCivil!="Soltero") {

			
			console.log("NO HACER NADA.");
			}
		}
	


}//FIN DE LA FUNCIÓN