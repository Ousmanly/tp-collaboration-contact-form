
function EnvoiDesDonnee() {
    document.getElementById("monFormulaire").addEventListener("submit", function(event) {
    // Empêcher l'envoi du formulaire
    event.preventDefault();
    // Récupération des valeurs des champs
    let valeurNomComplet = document.getElementById('nom').value;
    let valeurEmail = document.getElementById('email').value;
    let valeurObjetMessage = document.getElementById('Objet').value;
    let valeurMessage = document.getElementById('message').value;

    // Vérification si un champ est vide
    if (valeurNomComplet === "" || valeurEmail === "" || valeurObjetMessage === "" || valeurMessage === "") {
        alert("Veuillez remplir tous les champs");
         
    } else {
        // Affichage des valeurs dans la console
        console.log('Nom complet : ' + valeurNomComplet);
        console.log('Adresse email : ' + valeurEmail);
        console.log('Objet de message : ' + valeurObjetMessage);
        console.log('Message : ' + valeurMessage);
        
    }
});
}