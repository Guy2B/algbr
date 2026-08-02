# Al.G.B.r. Project Architect V1.2

Le configurateur `project.html` recueille les informations nécessaires avant une étude de site, d'application ou d'écosystème digital.

## Parcours

1. Type de projet : site, application, écosystème ou refonte.
2. Activité : offre, cible, objectif et indicateur de réussite.
3. Expérience : pages, écrans, rôles et parcours utilisateur.
4. Fonctions : CRM, booking, questionnaire, espace client, paiement, cloud, IA et intégrations.
5. Design : identité, contenus, références et priorités de qualité.
6. Livraison : budget, délai, hébergement, maintenance et contraintes.
7. Résumé : recommandation initiale, brief texte et export JSON.

## Architecture Lune Beauty

Le bouton « Utiliser l’architecture Lune Beauty comme base » préselectionne :

- site public et catalogue de services ;
- prix et pages métier ;
- Lune Skin Check / questionnaire guidé ;
- générateur de réservation ;
- CRM et console d’administration ;
- avis clients avec consentement ;
- collecte et synchronisation cloud ;
- confirmations, rappels et automatisations ;
- statistiques et suivi.

Le preset sert de point de départ et n’impose pas toutes ces fonctions au nouveau client.

## Données et envoi

- Le brouillon est stocké dans `localStorage` sous la clé `algbr-project-architect-v12`.
- Rien n'est envoyé automatiquement par défaut.
- Le client peut copier, télécharger `.txt`, exporter `.json` ou ouvrir son e-mail.
- Pour une collecte cloud, configurez `contact.projectSubmissionEndpoint` dans `config.js` avec un endpoint HTTPS acceptant du JSON.
- Ne placez jamais une clé secrète dans les fichiers publics du site.

## Déploiement

Le configurateur est statique et fonctionne sur GitHub Pages ou Firebase Hosting. Une API ou une Firebase Function est seulement nécessaire pour recevoir automatiquement les demandes.
