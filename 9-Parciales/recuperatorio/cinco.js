function Mostrar()
{
	var mes;

	mes=prompt("Ingrese un mes");

	switch(mes){
		case "Diciembre":
			alert("Se vienen las fiestas.");
		break;
		case "Enero":
			alert("Comienza el año.");
		break;
		default:
		alert("No es Enero ni Diciembre.");
	}

}
