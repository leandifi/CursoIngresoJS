/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;
 	//var contador=0;
 	//var iteraciones=1;
 	//var respuesta

 	//while(contador==iteraciones){
 	//	contador++;
 		edad=prompt("Ingrese una edad:");
 		edad=parseInt(edad);
 		while(edad<18 || edad>90 || isNaN(edad)){
 			edad=prompt("Ingrese una edad valida:");
 			edad=parseInt(edad);
 		}
 		document.getElementById('Edad').value=edad;
 		sexo=prompt("Ingrese "+"M"+" para masculino o "+"F"+" para femenino:");
 		while(sexo!="m" && sexo!="f"){
 			sexo=prompt("Ingrese un sexo valido:")
 		}
 		document.getElementById('Sexo').value=sexo;
 		estadoCivil=prompt("Ingrese: 1.Soltero. 2.Casado. 3.Divorciado 4.Viudo/a.");
 		//while(estadoCivil>1 && estadoCivil<4){
 			while(estadoCivil<1 || estadoCivil>4){
 				estadoCivil=prompt("Ingrese un estado civil valido.");
 			}
 			switch(estadoCivil){
 			case "1":
 				estadoCivil="Soltero";
 			break;
 			case "2":
 				estadoCivil="Casado";
 			break;
 			case "3":
 				estadoCivil="Divorciado";
 			break;
 			case "4":
 				estadoCivil="Viudo";
 			break;
 			default :
 			
 		}
 		document.getElementById('EstadoCivil')=estadoCivil;
 		sueldoBruto=prompt("Ingrese sueldo bruto:");
 		sueldoBruto=parseInt(sueldoBruto);
 		while(sueldoBruto<8000){
 			sueldoBruto=prompt("Ingrese un sueldo valido:");
 			sueldoBruto=parseInt(sueldoBruto);
 		}
 		document.getElementById('Sueldo').value=sueldoBruto;
 		legajo=prompt("Ingrese numero de legajo:");
 		legajo=parseInt(legajo,10);
 		//legajo=Math.float(legajo);---> este no.
 		while(legajo<1000 || legajo>9999){
 			legajo=prompt("Ingrese un numero de legajo valido:");
 			legajo=parseInt(legajo);
 		}
 		document.getElementById('Legajo').value=legajo;
 		nacionalidad=prompt("Ingrese: A.Argentino. E.Extranjero. N.Nacionalizados.");
 		switch(nacionalidad){
 			case "A":
 				nacionalidad="Argentino";
 			break;			
 			case "E":
 				nacionalidad="Extranjero";
 			break;
 			case "N":
 				nacionalidad="Nacionalizado";
 			break;
 			default:
 			while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N"){
 				nacionalidad=prompt("Ingrese una nacionalidad valida:");
 			}
 		}
 		document.getElementById('Nacionalidad')=nacionalidad;


 	//}
 		

 	//}
}
