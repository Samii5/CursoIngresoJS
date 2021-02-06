/* 5 : 
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar()
{	
	var nombre;
	var edad;
	nombre= txtIdNombre.value;
	edad= txtIdEdad.value;
	alert("Usted se llama " + nombre + " y tiene " + edad + " años."); 
}*/

/* 5 bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años" */

function mostrar()
{	
	var nombre;
	var edad;
	var apellido;
	nombre= txtIdNombre.value;
	edad= txtIdEdad.value;
	apellido= prompt ("ingrese su apellido");
	alert( apellido + " Usted se llama " + nombre + " y tiene " + edad + " años.");
}