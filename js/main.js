console.log("####### Exercice 1 Partie 1");
for(var i = 1; i <= 5; i++) {
    var x = "";
    for(j = 1; j<=i ; j++) {
        x += "*"
    }
    console.log(x);
}
// Autre méthode
var etoile = "";
for(var i = 1; i <= 5; i++) {
    etoile += "*"
    console.log(etoile);
}

console.log("####### Exercice 2 Partie 1");

var mess = ""
for (var i = 1; i <= 100; i++){
    mess = i; 
    if(i%3 === 0 && i%5 === 0) {
        mess += " : FIZZBUZZ";
    }
    else if (i%3 === 0) {
        mess += " : FIZZ"
    }
    else if (i%5 === 0) { 
        mess += " : BUZZ"
    }
    console.log(mess);
}
console.clear();
console.log("####### Exercice 1 Partie 2");

var x = "\n";
for(var i = 1; i <= 8; i++) {
    for(j = 1; j <= 16 ; j++) {
        if ((i+j) %2 === 0) {
            x += " "
        } else {
            x += "#"
        }
    }
    x += "\n";
}
console.log(x);

console.log("####### Exercice 2 Partie 2");

for(var i = 1; i <= 4; i++) {
    for(j = 1; j <= 4 ; j++) {
        if( i === j){
            console.log("1")
        } else {
            console.log("0")
        }
    }
    console.log("*------------")
}

console.log("####### Exercice 3 Partie 2");

function pair(nombres=false){
   if (nombres) {
        return (Number.parseInt(nombres)%2 === 0)
    }
}
// console.log(pair(6.66))

var nombre = 5.356;
console.log(pair(nombre));
if (pair(nombre)) {
   console.log(Number.parseInt(nombre));
}

console.log("####### Exercice 4 Partie 3");

function factorielle (nombre) {
    if (!Number.isInteger(nombre)) {
        return "The number is not integer"
    }
    var calcul = 1;
    for (var i = 2; i <= nombre; i++){
        calcul = calcul * i;
    }
    return calcul;
}
var nombre = 5;
console.log("Factorielle de " + nombre + " est : " + factorielle(nombre))


console.log("####### Exercice 5 Partie 3");

function tiret(chaine) {
    strReplace = "";
    for(i = 0; i<= chaine.length - 1; i++){
        if (chaine[i] === "-") {
            strReplace += "_"
        }
        else {
            strReplace += chaine[i]
        }
    }
    return strReplace
}

console.log(tiret("Samir-ben-Abdessalem"));

console.log("####### Exercice 6 Partie 3");

var course = [
    "Lait",
    "Pain",
    "Eau",
    "Patate",
    "Chocolat"
]
console.log(course[0]);
console.log(course[course.length - 1]);
console.log(course[(course.length - 1)/2]);