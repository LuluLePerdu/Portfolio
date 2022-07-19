//Permet d'actuver le menu hamburger lors du clic sur l'icone associé
const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {

 navigation.style.setProperty("--nbElem", navigation.children.length);


  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});
