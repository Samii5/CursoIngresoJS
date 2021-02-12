function mostrar()
{
	let estacionIngresada =txtIdEstacion.value;
    let destinoIngresado =txtIdDestino.value;


switch (estacionIngresada)
{
  case "Invierno":
  switch (destinoIngresado)
  {
    case "Bariloche":
    alert("se viaja");
    break;

    default:
    alert("no se viaja");
    break;

  }
break;

   case "Verano":
   switch (destinoIngresado)
   {
     case "Mar del plata":
     case  "Cataratas":
     alert("se viaja");
     break;

     default:
     alert("No se viaja");
     break;

   }
break;

   case "Otoño":
   switch (destinoIngresado)
   {
     case "Mar del plata":
     case "Cataratas":
     case "Bariloche":
     case "Cordoba":
     alert("Se viaja");
     break;
   }
break;

    case "Primavera":
    switch (destinoIngresado)
    {
       case "Mar del plata":
       case "Cataratas":
       case "Cordoba":
       alert("Se viaja");
       break;

       default:
       alert("No se viaja");
       break;


    }



  



}



}//FIN DE LA FUNCIÓN