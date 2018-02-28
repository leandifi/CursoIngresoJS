function Mostrar()
{
  var precio;
  var precioFinal;
  var descuento;

  precio=prompt("Ingrese el precio: ");
  precio=parseInt(precio);
  descuento=(precio*25)/100;
  precioFinal=precio-descuento;

  document.getElementById('importeFinal').value=precioFinal;
}
