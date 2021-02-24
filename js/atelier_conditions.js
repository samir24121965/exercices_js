console.log("Hello Conditions");
// Password from the user
var psd = "test";
// Password stored on the site
var psdVerif = "test";

var pseudo = "Thomas";
var pseudoVerif = "Thomas";

var money  = 500;
var status = "Missing Data";
// if the password is correct
// && = AND
// || = OR
if(psd === psdVerif && pseudo === pseudoVerif){
    console.log("Bienvenue");
    if(money > 100) {
        console.log("Achetez quelque chose SVP");
    } else if (money > 0) {
        console.log("Ce n'est pas grave, nous proposons des solutions de crédit à prix avantageux")
    }
    else {
        console.log("Dégager SVP");
    }
    if(status !== "completed"){
        console.log("Merci de finaliser votre profil");
    }
}
else {
    console.log("Identifiants incorrects");
}