function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroAleatorio;

	numeroAleatorio=Math.floor(Math.random()*10+1);
	//alert(numeroAleatorio);
	

	/*if( numeroAleatorio == 9 || numeroAleatorio == 10){

		alert(numeroAleatorio+" EXCELENTE");
	}else{


		if(numeroAleatorio>=4 && numeroAleatorio<9){

		alert(numeroAleatorio+" APROBÓ");

		}else{
			if(numeroAleatorio<4){

			alert(numeroAleatorio+" Vamos la próxima se puede");
				}
			}
		}*/


		/*if( numeroAleatorio >8){

		alert(numeroAleatorio+" EXCELENTE");
		}else
		{
			if(numeroAleatorio>=4 ){

			alert(numeroAleatorio+" APROBÓ");

			}else{
		
			alert(numeroAleatorio+" Vamos la próxima se puede");
			
			}
		}*/

	if(numeroAleatorio>8){

		alert(numeroAleatorio+" EXCELENTE");
		}
	if(numeroAleatorio>4 && numeroAleatorio<=8){

		alert(numeroAleatorio+" APROBÓ");
		}
	if(numeroAleatorio<4){

		alert(numeroAleatorio+" Vamos, la próxima se puede");
		}

	

}//FIN DE LA FUNCIÓN