console.log("####### Exercice 7 #######");

var items = [
    "First Item",
    "Second Item",
    "Third Item",
    "Forth Item"
];
for(var item of items){
    console.log(item);
};

console.log("####### Exercice 8 #######");

var citizen = {
    firstname : "John",
    lastname : "Doe",
    age : 45,
    inconnue : 60000,
    sexe : 0
}

for(var index in citizen){
    if(index === 'sexe'){
        if (!citizen[index]){
            console.log(index + " : Homme");
        }
        else
            console.log(index + " : Femme");
    }
    else
    console.log(index + " : " + citizen[index]);
};

console.log("####### Exercice 9 #######");

var citizens = [
    {
      "firstname" : "John",
      "lastname" : "Doe"
    },
    {
      "firstname" : "Anna",
      "lastname" : "Molner"
    },
    {
      "firstname" : "Harry",
      "lastname" : "Trueman"
    },
    {
      "firstname" : "Cecile",
      "lastname" : "Mercier"
    }
  ];

  for(var citizen of citizens){
    console.log("citizen :");
    for(var index in citizen){
        console.log(index + " : " + citizen[index]);
    }
  }