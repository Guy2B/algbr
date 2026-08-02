# Déployer sur Firebase Hosting

Prérequis : Node.js et Firebase CLI.

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

Lors de l'initialisation :

- choisissez votre projet Firebase ;
- utilisez `.` comme dossier public ;
- ne remplacez pas `index.html` ;
- ne configurez pas ce site statique comme une SPA avec réécriture globale.

Puis :

```bash
firebase deploy --only hosting
```

Le fichier `firebase.json` est déjà fourni. Copiez `.firebaserc.example` vers `.firebaserc` et remplacez l'identifiant du projet si nécessaire.
