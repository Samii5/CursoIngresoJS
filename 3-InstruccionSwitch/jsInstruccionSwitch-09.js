function mostrar()
{
	let estacionIngresada =txtIdEstacion.value;
	let destinoIngresado =txtIdDestino.value;
	let tarifa = 15000;

	tarifa = parseInt(tarifa);

    precioFinal = tarifa;

switch (estacionIngresada)
{
  case "Invierno":
    switch (destinoIngresado)
    {
      case "Bariloche":
      alert("El costo es de " + tarifa * 120/100 + " pesos");
      break;

      case "Cataratas":
  	  case "Cordoba":
      alert("El costo es de " + tarifa * 90/100 + " pesos");
      break;

     case "Mar del plata":
     alert("El costo es de " + tarifa * 80/100 + " pesos");
     break;
    }
break;

     case "Verano":
     switch (destinoIngresado) 
    {
      case "Bariloche":
      alert("El costo es de " + tarifa * 80/100 + " pesos");
      break;

      case "Cataratas":
  	  case "Cordoba":
      alert("El costo es de " + tarifa * 110/100 + " pesos");
      break;

      case "Mar del plata":
      alert("El costo es de " + tarifa * 120/100 + " pesos");
      break;
    }
break;

     case "Primavera":
     case "Otoño":
     switch (destinoIngresado)
     {
        case "Bariloche":
        case "Cataratas":
        case "Mar del plata":
        alert("El costo es de " + tarifa * 110/100 + " pesos");
        break;

        case "Cordoba":
        alert(" El costo es de " + tarifa + " pesos");
        break;

     }

}


}//FIN DE LA FUNCIÓN