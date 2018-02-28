function Mostrar()
{
	var peso;
	var contador=0;
	var masPesado=0;
	var menosPesado=0;

	while(contador<5){
		contador++;
		peso=prompt("Ingrese el peso en Kg:");
		peso=parseInt(peso);
	if(peso<0){
		peso=prompt("Ingrese un peso mayor a 0:");
	}
	/*while(peso<0 || isNaN(peso)){
		peso=prompt("Ingerese peso mayor a 0:");
	}*/
	if(contador==1){
			masPesado=peso;
			menosPesado=peso;
		}else{

			if(peso>masPesado){
				masPesado=peso;
			}else{
				menosPesado=peso;
			}
		}
	}
	document.write("<br>"+"El mas pesado es: "+masPesado+"."+" El menos pesado es: "+menosPesado);

}
