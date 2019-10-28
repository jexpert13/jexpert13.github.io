function testJE(){
	var prenom = prompt("Comment t'appelle tu?");
	console.log("L'utilisateur a entré son prenom: " + prenom);

	var nom = prompt("Quel est ton nom");
	console.log("L'utilisateur a entré son nom: " + nom);

	var isje1 = prenom == je_un.prenom && nom == je_un.name;
	var isje3 = prenom == je_trois.prenom && nom == je_trois.name;

	var isje = isje3 || isje1;

	if (isje) {
		if (isje1) {
			var jename = "J-E du 1";
		}
		else if (isje3) {
			var jename = "J-E du 3";
		}
		alert("Bienvenue à toi " + jename);
}


function languageJE(){
	var language;
	for (var i = 0; i <= je.length; i++) {
		language += i.languages;
	}

	alert("Les J-E utilisent plusieurs language.");
	var language = prompt("Tape le nom d'un language\n pour voir si nous l'utilisont.");
	if (languageje.indexOf(language) != -1){
		alert("Bien sûr, ils utilisent " + language);
	}else{
		alert("Non les J-E ne l'utilisent pas.")
	}
}

// Une class J-E.
function JE(prenom, nom, age, languages_connues, école, nom_de_code){
	this.prenom = prenom;
	this.name = nom;
	this.age = age;
	this.languages = languages_connues;
	this.school = école;
	this.code_name = nom_de_code;
}

var je_un = JE("Arthus", "Jullien", 15, ["Python", "C++", "CSS", "HTML", "Javascript"], "St Bonnet de Galaure", "TheBdouilleur2");
var je_trois = JE("Jean", "Huet", 13, ["Python"], "Massillon", "TheBdouilleur"); //A compléter

var je = [je_un, je_trois];

languageJE();