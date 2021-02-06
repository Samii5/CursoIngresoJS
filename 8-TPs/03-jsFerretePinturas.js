/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

/* formula para pasar farenheit a centigrados : 98.6 - 32 = 66.6  * 5 = 333/9 = 37 C. */
function FahrenheitCentigrados () 
{

	const FORMULA1= 5;
	const FORMULA2= 9;

	let temperatura;
    let farenheit;
    let centigrados;
    let resultado;
    let resultado2;

    temperatura= document.getElementById('txtIdTemperatura').value;
    temperatura= parsefloat(temperatura);    
    centigrados=parsefloat(centigrados);

    resultado = temperatura * FORMULA1 / FORMULA2;
    resultado2= resultado / FORMULA2 * FORMULA1;

    alert(resultado " farenheit son: " + resultado2 + "centigrados");

}

/*function CentigradosFahrenheit () 
{
	let temperatura;
    let Fahrenheit;
    let centígrados;
    let resultado;

}
*/