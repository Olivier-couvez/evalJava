var TempCel = document.querySelector('#tempCel');
var nBouton = document.querySelector('#BoutonCacl');
var nBalise1 = document.querySelector('p.c1');
  
var message;

nBouton.addEventListener ('click',CalcTemp);

function CalcTemp() 
{
    if (TempCel != "") {

        var tempFar = 1.8 * parseFloat(TempCel.value) + 32 ;
    

        // construction et affichage des messages 

        message = "Cela fait " + tempFar +  " degrés Fahrenheit";
        nBalise1.innerHTML = message;

    }
}
