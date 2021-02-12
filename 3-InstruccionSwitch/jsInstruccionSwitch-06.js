function mostrar()
{
	var horaDelDia =txtIdHora.value;
switch (horaDelDia)
{
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
	alert("es de mañana");
	break;

	case "12":
	case "13":
	case "14":
	case "15":
	case "16":
	case "17":
	case "18":
	case "19":
	alert("Es de tardecita");
	break;

	case "20":
	case "21":
	case "22":
	case "23":
	case "24":
	alert("Es de nochesita");
	break;

	default:
	alert("la hora no existe");
	break;


}


}
//FIN DE LA FUNCIÓN