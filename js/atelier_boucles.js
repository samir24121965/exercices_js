console.log("Boucles");

var i = 0 ;
var products = [
    "Télé",
    "Switch",
    "Veste en Lin",
    "Aspirateur"
];
while (i < 20) {
    console.log("** Ceci est une boucle While " + i);
    i++;
}
i = 0;
while (i < products.length) {
    console.log(products[i]);
    i++;
}
console.log("** Boucle for **");

for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
}
console.log("\n Exemple de boucle for sans tableau") ;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("\n Exemple de boucle for sans tableau nombre pair") ;
for (var i = 0; i <= 10; i+=2) {
    console.log(i);
}
console.log("\n Exemple de boucle Inverse for sans tableau") ;
for (var i = 10; i >= 0; i--) {
    console.log(i);
}

