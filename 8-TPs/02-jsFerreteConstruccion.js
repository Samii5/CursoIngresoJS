/* Samantha Amoruso*/

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let perimetro;
    const CANT_ALAMBRE = 3;
    let alambre;
 
    largo= parseFloat(document.getElementById('txtIdLargo').value);
    ancho= parseFloat(document.getElementById('txtIdAncho').value);
    perimetro= (ancho + largo) * 2; 

    alambre= perimetro * CANT_ALAMBRE;

    alert("se deben comprar " + alambre + " metros de alambre");

}   

function Circulo () 
{
    let radio;
    let perimetro;
    const PI = 3.14;
    let alambre;

    radio= document.getElementById("txtIdRadio").value;
    radio= parseFloat(radio);
    console.log(radio);

    perimetro= 2 * radio * PI; 
    perimetro= parseFloat(perimetro);
    console.log(perimetro);

    alambre= perimetro * 3;

    alert (" se deben comprar " + alambre + " metros de alambre");


}
function Materiales () 
{
    const CEMENTO= 3; 
    const CAL=2;
    let ancho;
    let largo;
    let superficie;
    let bolsasCemento;
    let bolsasCal;

    largo=document.getElementById('txtIdLargo').value;
    ancho=document.getElementById('txtIdAncho').value;
    largo= parseFloat(largo);
    ancho= parseFloat(ancho);

    superficie= largo * ancho;
    superficie= parseFloat(superficie);

    bolsasCemento= superficie * CEMENTO;
    bolsasCal= superficie * CAL;


    alert(" se deben comprar " + bolsasCemento + " bolsas de cemento");
    alert(" se deben comprar " + bolsasCal + " bolsas de cal");
}

