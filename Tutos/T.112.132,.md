# Découvrir une entité à partir d’un identifiant ou d’une répétition

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance |
| :--- | :--- | :--- | :--- | :--- |
| **nom_auteur** | Madani, Sara, Youssef | Auteur (ou Personne) | `id_auteur` | `id_auteur -> nom_auteur, prenom_auteur, email_auteur` |
| **nom_ville** | Tanger, Rabat | Ville | `id_ville` | `id_ville -> nom_ville` |
| **nom_categorie** | Développement, Actualité | Catégorie | `id_categorie` | `id_categorie -> nom_categorie` |