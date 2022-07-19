
//Sélectionner les images, ajouter ou enlever les filtres qui permettront d'afficher les images
function filterSelection(c) {
  var filtre = document.getElementsByClassName("image");
  if (c == "all") c = "";
 
  for (var i = 0; i < filtre.length; i++) {
    filtre_sup(filtre[i], "filtre-actif");
    if (filtre[i].className.indexOf(c) > -1) ajout_filtre(filtre[i], "filtre-actif");
  }
}
//Ajouter le filtre à une image
function ajout_filtre(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
//enlever le filtre à une image
function filtre_sup(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
//appel de la méthode en précisant qu tout les filtres sont activés, donc toutes les images sont visible
filterSelection("all");

var filtre_conteneur = document.getElementById("filtre-gallerie-main");
var filtre__gallerie = filtre_conteneur.getElementsByClassName("filtre-gallerie");

for (var i = 0; i < filtre__gallerie.length; i++) {
  filtre__gallerie[i].addEventListener("click", function() {
    var actif = document.getElementsByClassName("tag-actif");
    actif[0].className = actif[0].className.replace(" tag-actif", "");
    this.className += " tag-actif";
  });
}
//Sélection des différents filtres
document.getElementById('filtre-actif-tout').addEventListener("click", function() {
  filterSelection("all");
}, false);
document.getElementById('filtre-nature').addEventListener("click", function() {
  filterSelection("tag-nature");
}, false);
document.getElementById('filtre-sport').addEventListener("click", function() {
  filterSelection("tag-sport");
}, false);
document.getElementById('filtre-voyage').addEventListener("click", function() {
  filterSelection("tag-voyage");
}, false);
document.getElementById('filtre-escalade').addEventListener("click", function() {
  filterSelection("tag-escalade");
}, false);
document.getElementById('filtre-autres').addEventListener("click", function() {
  filterSelection("tag-autres");
}, false);
filterSelection("all");
