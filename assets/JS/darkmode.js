// Créer le bouton pour basculer le mode sombre
const modeBouton = document.createElement("button");
const icon = document.createElement("i");

// Ajouter la classe Font Awesome pour l'icône "lune" pour le mode sombre et "soleil" pour le mode clair
icon.classList.add("fas");
icon.classList.add("fa-sun"); // Par défaut, utilise l'icône de soleil pour le mode clair
modeBouton.appendChild(icon);

// Ajouter un gestionnaire d'événement pour basculer le mode sombre
modeBouton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon"); // Change l'icône en lune pour le mode sombre
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun"); // Change l'icône en soleil pour le mode clair
  }
});

// Ajouter un identifiant pour le bouton
modeBouton.setAttribute("id", "toggle-dark-mode");
document.body.appendChild(modeBouton);
