# ALGBr Vision – intégration au site

## Structure à copier dans le dépôt GitHub

Copier le dossier `vision` à la racine du dépôt :

```text
algbr/
├── index.html
├── style.css
├── app.js
├── vision/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── firebase.json
└── .github/
```

L’outil sera accessible à :

```text
https://algbr-3b4ee.web.app/vision/
```

## Ajouter un lien dans la page ALGBr

```html
<a href="/vision/" class="vision-link">ALGBr Vision</a>
```

## Déployer

```powershell
cd "C:\Users\Guy\Documents\GitHub\algbr"
git add vision
git commit -m "Add ALGBr Vision Generator"
git push origin main
```

Si GitHub Actions est correctement configuré, Firebase publiera automatiquement la nouvelle page.

## Fonctions incluses

- personnalisation du prospect ;
- import local d’une capture ;
- sélection des modules ;
- vues Vision, Aujourd’hui, Dashboard et Cover ;
- modules cliquables ;
- simulateur de potentiel ;
- e-mail de prospection automatique ;
- sauvegarde locale ;
- export d’une démo HTML autonome.

Les chiffres sont illustratifs et ne constituent pas une garantie de résultat.
