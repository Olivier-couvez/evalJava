
var tabElevNot = document.querySelector("#tabElevesNotes");
var tabElevMoy = document.querySelector("#tabElevesMoyennes");
var tabComp = document.querySelector("#tab1");
var tabComp2 = document.querySelector("#tab2");
var lesNotes = document.querySelector(".lesNotes");

var itemTabLig, itemTabCel;
var Moyennes = 0;
var i = 0, j = 0;
var plusPetite = 0;
var plusGrande = 0;

var NomEleves = ["Dupont", "Durand", "Petit", "Martin", "Legrand", "Lacroix", "Legros", "Lenaim"];

var Notes = new Array([10, 12, 18, 5, 9, 13, 16, 19], [13, 11, 14, 7, 14, 16, 12, 10], [9, 14, 14, 12, 8, 20, 13, 13]);
var moyEleves = new Array();

tabElevNot.style.border = "thick solid #0000FF";
console.log("essai", NomEleves.length);

for (i = 0; i < NomEleves.length; i++)
{
    
    itemTabLig = document.createElement("tr");

    itemTabCel = document.createElement("td");
        itemTabCel.appendChild(document.createTextNode(NomEleves[i]));
    itemTabLig.appendChild(itemTabCel);
    console.log(itemTabCel, " ", i);

    Moyennes = 0;
    for (j = 0; j < 3; j++)
    {
        itemTabCel = document.createElement("td");
        itemTabCel.appendChild(document.createTextNode(Notes[j][i]));
        itemTabLig.appendChild(itemTabCel);
        Moyennes = Moyennes + Notes[j][i];
        if (plusPetite == 0)
        {
            plusPetite = Notes[j][i];
            }
        if (plusPetite > Notes[j][i])
            {
            plusPetite = Notes[j][i];
        }
        if (plusGrande < Notes[j][i])
        {
            plusGrande = Notes[j][i];
            }

        console.log(itemTabCel, " ", i, j);
    }
    moyEleves[i] = Moyennes / 3;

    console.log(itemTabCel, " ", i);
    itemTabLig.appendChild(itemTabCel);
    console.log(console.log(itemTabCel, " ", i), " ", i);
    tabElevNot.appendChild(itemTabLig);
}
tabComp.appendChild(tabElevNot);


tabElevMoy.style.border = "thick solid #0000FF";

for (i = 0; i < NomEleves.length; i++)
{
    itemTabLig = document.createElement("tr");

    itemTabCel = document.createElement("td");
        itemTabCel.appendChild(document.createTextNode(NomEleves[i]));
    itemTabLig.appendChild(itemTabCel);
    console.log(itemTabCel, " ", i);

        itemTabCel = document.createElement("td");
        itemTabCel.appendChild(document.createTextNode(moyEleves[i].toFixed(2)));
        itemTabLig.appendChild(itemTabCel);

    console.log(itemTabCel, " ", i);
    itemTabLig.appendChild(itemTabCel);
    console.log(console.log(itemTabCel, " ", i), " ", i);
    tabElevMoy.appendChild(itemTabLig);
}
tabComp2.appendChild(tabElevMoy);

console.log(plusPetite, " ", plusGrande);
lesNotes.innerHTML = "la plus petite note est : " + plusPetite + " et la note la plus grande est : " + plusGrande;
