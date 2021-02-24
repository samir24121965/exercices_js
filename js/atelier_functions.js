console.log("Les fonctions");

// Déclaration de la fonction
function greetings() {
    console.log("Un texte très long");
}

// L'appel de la fonction
greetings();

// Déclaration de la fonction service avec un paramètre (argument)

var cookingTime = {
    "Hamburger" : 10,
    "Hot Dog" : 5,
    "Sushis" : 12
}
function service(order=false, name) { // si paramètre est optionel -> valeur = false
    if(order)
        console.log(name + " Vous avez commandé un " + order + ", ça sera prêt dans " + cookingTime[order] + " minutes");
    else
        console.log("Commande non compris");
}

// Appel de la fonction service
service("Hamburger", "Thomas");
service("Hot Dog", "Mathieu");
service();