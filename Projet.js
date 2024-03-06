// Sélection des liens de la barre de navigation
const links = document.querySelectorAll('nav a');

// Ajout d'un gestionnaire d'événement à chaque lien
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();
        
        // Récupérer l'ID de la section cible à partir de l'attribut href du lien
        const targetId = this.getAttribute('href').substring(1);
        
        // Sélectionner la section cible
        const targetSection = document.getElementById(targetId);
        
        // Faire défiler la page jusqu'à la section cible
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
