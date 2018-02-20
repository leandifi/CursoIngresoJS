/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var cantidadAlambre;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	cantidadAlambre=(2*largo+2*ancho)*3;

	alert("Se debe comprar "+ cantidadAlambre+ " metros de alambre.");



}
function Circulo () 
{
	var radio;
	var cantidadAlambre;

	radio=document.getElementById('Radio').value;

	cantidadAlambre=radio*3;

	alert("Debe comrar "+ cantidadAlambre+" de alambre.");

	
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var bolsasCemento;
	var bolsasCal;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	area=ancho*largo;

	bolsasCemento=area*2;
	bolsasCal=area*3;

	alert("Se necesitan "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal.");
	

}