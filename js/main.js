console.log("####### EXERCICE 1 #######");
var items =  new Array();
console.log(items);
items = [];
console.log(items);
items = ["a","b"];
console.log(items);
console.log("####### EXERCICE 2 #######");
var items = ["premier élément", "deuxième élément","troisième élément","quatrième élément"];
console.log(items);
console.log(items[1]);
console.log(items[3]);
console.log(items[0]);
console.log("####### EXERCICE 3 #######");
var player = ["John", "Doe", 34, true];
console.log(player);
console.log(player[0]);
console.log(player[1]);
console.log(player[0] + " " + player[1]);
console.log("Age du joueur avant modification : " + player[2]);
player[2] = 40;
console.log("Age du joueur après modification : " + player[2]);
console.log(player[3]);
console.log("####### EXERCICE 4 #######");
var player = {
    firstname : "John",
    lastname : "Doe",
    age : 34,
    isadult : true
}
console.log(player);
console.log(player["firstname"]);
console.log(player["lastname"]);
console.log(player["firstname"] + " " + player["lastname"]);
console.log("Age avant modification : " + player["age"]);
player["age"] = 40
console.log("Age Après modification : " + player["age"]);
console.log("Adulte : " + player["isadult"]);
console.log("####### EXERCICE 5 #######");
var car = {
    type : "Clio",
    brand : "Renault",
    date : 2006,
    color : "Orange",
    passengers : ["Mike","Claire","Anna","Louis"]
}
console.log(car);
console.log("Une " + car["brand"] + " de couleur " + car["color"] + ", modèle " + car["date"] + " a été aperçue à son bord 4 passagers");
console.log(car["passengers"][0]);
console.log("4 individus ont été aperçus à son bord : " + car["passengers"][0] + "," + car["passengers"][1] + "," + car["passengers"][2] + "," + car["passengers"][3]);
console.log("####### EXERCICE 6 #######");
var a = 14, b = 38;
var product = [] ;
console.log("A : " + a + " B : " + b + " Tableau : " + product);
product[0] = a;
product[1] = b;
product[7] = 50;
console.log(product);
