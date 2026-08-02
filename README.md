# Al.G.B.r. Digital Studio — Website V1.2

Site vitrine statique, responsive et multilingue (FR/DE/EN) pour présenter les services web, applications, support et automatisation d'Al.G.B.r.

## Nouveautés V1.2

- `project.html` : Architecte de projet complet pour sites, applications et écosystèmes digitaux.
- Formulaire adaptatif en sept étapes.
- Sauvegarde locale du brouillon.
- Résumé en direct et recommandation d’architecture.
- Export texte et JSON, copie et e-mail.
- Preset inspiré de l’architecture Lune Beauty.
- Lune Beauty présenté comme projet de référence : site, services, Skin Check, booking, CRM, avis et cloud.
- Aucun envoi automatique ni secret côté client.

## Configuration

Les données principales sont déjà configurées dans `config.js` :

- contact : `algbr@gmail.com` ;
- Σ : `https://project-sum-b961a.web.app/app.html#dashboard` ;
- Lune Beauty : `https://www.lunebeauty.de/` ;
- URL GitHub Pages : `https://guy2b.github.io/algbr/`.

Le champ `contact.projectSubmissionEndpoint` reste vide. Laissez-le vide pour utiliser la copie, le téléchargement et l’e-mail. Configurez-le seulement après avoir déployé un endpoint HTTPS sécurisé.

## Tester localement

```bash
python -m http.server 8080
```

Ouvrez :

- `http://localhost:8080/`
- `http://localhost:8080/project.html`
- `http://localhost:8080/project.html?preset=lune`

## Structure principale

- `index.html` : page commerciale et références.
- `project.html` : configurateur de projet.
- `project.js` : logique du wizard, sauvegarde et exports.
- `v12.js` : traductions des nouveaux blocs de la page d’accueil.
- `styles.css` : identité visuelle et responsive.
- `app.js` : langues et animations du site historique.
- `config.js` : coordonnées, références, prix et endpoint facultatif.
- `PROJECT-ARCHITECT.md` : documentation détaillée.
- `legal.html` / `privacy.html` : modèles à compléter.
- `.github/workflows/pages.yml` : déploiement GitHub Pages.
- `firebase.json` : déploiement Firebase Hosting.
