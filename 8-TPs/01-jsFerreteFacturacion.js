/*Samantha Amoruso
TP N°1
Para el departamento de facturación:
Ingresar tres precios de productos y mostrar la suma de los mismos.
Ingresar tres precios de productos y mostrar el promedio de los mismos.
ingresar tres precios de productos  y mostrar precio final (más IVA 21%).*/

function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultado = precioUno + precioDos + precioTres;

    alert("La suma es: " + resultado);

}

function Promedio () 
{
    var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    promedio = (precioUno + precioDos + precioTres)/3

    alert("El promedio de los tres precios es: " + promedio); 

}

function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	var Suma;
	var iva;

   precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    Suma = precioUno + precioDos + precioTres;
    iva = Suma * 21/100;
    precioFinal = Suma + iva ;

    alert("El precio final con los impuestos : " + precioFinal);
}
