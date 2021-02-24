console.log("####### Exercice 1 #######");

if (true) {
    console.log("Condition is working !");
}
if (false) {
    console.log("Condition is working !");
}
else {
    console.log("Condition is not working !");
}
if (false === false) {
    console.log("Condition is working !");
}

console.log("####### Exercice 2 #######");

var content = 123;
if (content) {
    console.log("Condition is OK");
  }
else {
    console.log("Condition is KO");
}

console.log("####### Exercice 3 #######");

var price = "forty five";
if (price === 45) {
    console.log("The price is a number");
  }
  else if (price == 45) {
    console.log("The price is a string");
  }
else {
    console.log("The price is something else");
}

console.log("####### Exercice 4 #######");

var age = 17;

if (age >= 18){
    console.log("Entry Allowed");
}
else {
    console.log("Entry Not Allowed");
}

console.log("####### Exercice 5 #######");

var store = ["Walmart","Colorado","South-Park", 483,];
if (store[0] === "Walmart" && store[1] === "South-Park") {
    console.log("The Walmart in South-Park has " + store[3] + " employes");
  }
  else if (store[0] === "Walmart" || store[1] === "Colorado") {
    console.log("Hum this is an other Walmart from Colorado");
  }
  else if (store[0] === "Walmar") {
    console.log("Too bad this is just a Walmart");
  }
else {
    console.log("test");
}
console.log("####### Exercice 6 #######");

var student = {
    Name : "John Doe",
    Grade: 12
};

if(student["Grade"] >= 16){
    console.log("Très bien");
}
    else if(student["Grade"] >= 14){
        console.log("Bien");
    }
    else if(student["Grade"] >= 12){
        console.log("Moyen");
    }
    else if(student["Grade"] >= 10) {
        console.log("Passable");
    }
    else {
        console.log("Recalé");
}

console.log("####### Exercice 7 #######");

var meal = {
    foodtype : "meat",
    cookedat : 90,
    temperature : 80
}

if(meal["temperature"] === meal["cookedat"]){
    meal["status"] = "Cooked";
}
else if(meal["temperature"] < meal["cookedat"]){
    meal["status"] = "UnCooked";
}
else {
    meal["status"] = "OverCooked";
}

console.log(meal["status"]);

console.log("####### Exercice 8 #######");

var number = 42;
if (number > 0) {
  if(number%2 === 0) {
    console.log("number is even");
  }
  else {
    console.log("number is odd");
  }
}
else {
console.log("Please enter a number at least greater than 0");
}