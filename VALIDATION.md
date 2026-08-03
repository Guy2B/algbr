# Validation — Al.G.B.r. Studio V1.2

## Contrôles réussis

- syntaxe JavaScript : `app.js`, `config.js`, `project.js`, `v12.js` ;
- analyse HTML : `index.html`, `project.html`, `privacy.html`, `legal.html`, `404.html` ;
- aucun identifiant HTML dupliqué ;
- tous les fichiers locaux référencés existent ;
- tous les identifiants utilisés par `project.js` existent dans `project.html` ;
- sept étapes numérotées de 0 à 6 ;
- accolades CSS équilibrées ;
- références et e-mail présents dans `config.js` ;
- sitemap incluant le configurateur ;
- aucun mot de passe, secret API ou fichier `.env` inclus ;
- archives ZIP testées après création.

## Fonctionnalités contrôlées par inspection

- sélection du type de projet ;
- champs conditionnels site/application/écosystème ;
- preset Lune Beauty ;
- sauvegarde dans `localStorage` ;
- génération du brief ;
- recommandation d’architecture ;
- export TXT et JSON ;
- e-mail vers `algbr@gmail.com` ;
- endpoint cloud facultatif.

## Limite de l’environnement de test

Le navigateur Chromium disponible dans l’environnement de construction bloque les URL locales et les fichiers locaux par une politique administrateur. Le parcours interactif complet n’a donc pas pu être exécuté visuellement ici. La recette finale doit être réalisée sur GitHub Pages ou Firebase Hosting, sur ordinateur et téléphone.
