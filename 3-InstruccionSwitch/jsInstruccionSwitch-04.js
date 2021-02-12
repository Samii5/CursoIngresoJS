/* Samantha Amoruso*/
unction mostrar()
{
	var mesDelAño =txtIdMes.value;

switch (mesDelAño)
{
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
  alert("tienen 31 dias");
  break;

  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
  alert("tienen 30 dias");
  break;

  case "Febrero":
  alert("tiene 28 dias");
  break;

}	
	

}//FIN DE LA FUNCIÓN