console.log("####### Exercice 1 #######");

var i = 0 ;
while (i <= 9 ) {
    console.log("one run of the loop");
    i++;
}

console.log("####### Exercice 2 #######");

for (var i = 0; i <= 9 ; i++){
    console.log("One run of the loop");
}

console.log("####### Exercice 3 #######");

for (var i = 1; i <= 99 ; i++){
    console.log(i);
}

console.clear();
console.log("####### Exercice 4 #######");

for(var i = 0; i <= 100 ; i++){
    if(i%2 === 0){
        console.log(i + " even");
    } 
    else {
        console.log(i + " odd");
    }
}

console.clear();
console.log("####### Exercice 5 #######");

var items = ["First Item", "Second Item", "Third Item", "Fourth Item"];

for(var i = 0; i < 5 ; i++) {
    console.log(i + " " + items[i]);
}

console.clear();
console.log("####### Exercice 6 #######");

customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst"
  ];
  console.log("List of all customers : ");
  for (i=0; i < 6; i++) {
    console.log(customers[i]);
  }

  console.clear();
  console.log("Boucle For of");

  var cats = [
      "Minouche",
      "Blanco",
      "Le chat",
      "Nabuchodonosore",
      "Felix"
  ];

for (var cat of cats) {
    console.log(cat);
}

console.log("Boucle For IN");

for (var index in cats) {
      console.log(index);
}

console.log("Tableau associatif");

var dog = {
    name : "Medor",
    age : 4,
    color : "Black"
};
for(var index in dog){
    console.log(index + " : " + dog[index]);
}

console.clear();
console.log("####### Exercice 7 #######");

var items = [
    "First Item",
    "Second Item",
    "Third Item",
    "Forth Item"
];
for(var item of items){
    console.log(item);
}