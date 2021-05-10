var propal = document.querySelector('#propal');
var BoutonVal = document.querySelector('#BoutonVal');
var BoutonRejoue = document.querySelector('#BoutonRejoue');
var Balise1 = document.querySelector('p.listeProposition');
var Balise2 = document.querySelector('p.Resultat');
var Balise3 = document.querySelector('p.Reste');

var nbMystere = 0;
var nbEssais = 10;
var message = "Propositions précédentes : ";
var nbEssaisReste = 10;

nbAlea();

BoutonVal.addEventListener('click', AfficheJeu);

BoutonRejoue.addEventListener ('click',Rejouer);

function AfficheJeu() 
{
    if (nbEssaisReste != 0)
    {
        // A mettre au premier essais !

        if (propal.value > nbMystere)
        {
            message = message + propal.value + " / ";
            Balise1.innerHTML = message;
            Balise2.innerHTML = "Le nombre à trouver est plus petit"
        }
        else
        {
            if (propal.value < nbMystere)
            {
                message = message + propal.value + " / ";
                Balise1.innerHTML = message;
                Balise2.innerHTML ="le nombre à trouver est plus grand";
            }
            else
            {
                Balise2.style.background = "green";
                Balise2.innerHTML = "BRAVO, vous avez trouvé le nombre mystère !";
                nbEssaisReste = 0;

            }
        }

        nbEssaisReste = nbEssaisReste - 1;
        Balise3.innerHTML = "Il vous reste : " + nbEssaisReste + " essai(s)";
    }
    if (nbEssaisReste == 0)
    {
        Balise2.style.background = "red";
        Balise2.innerHTML =  "Désolé, vous n'avez trouvé le nombre mystère ! c'était le nombre " + nbMystere;
    }
    }

function Rejouer()
{
    nbAlea()
    message = "Propositions précédentes : ";
    Balise1.innerHTML = message;
    nbEssaisReste = 10;
    Balise2.style.background = "white";
    Balise2.innerHTML = "";
    Balise3.innerHTML = "Il vous reste : " + nbEssaisReste + " essai(s)";
}

function nbAlea()
{
    nbMystere = 1 + Math.floor(Math.random() * 100);
    console.log(nbMystere)
}