# Al.G.B.r. Digital Studio — Website V1

Site vitrine statique, responsive et multilingue (FR/DE/EN) pour présenter les services web, application, support et automatisation d'Al.G.B.r.

## Avant publication

Éditez `config.js` :

- `contact.email`
- `contact.phone` ou `contact.whatsapp` si souhaité
- `projects.luneBeauty` avec l'URL réelle
- `pricing` si les prix changent
- `seo.publicUrl`

Remplacez aussi `https://votre-domaine.example` dans `robots.txt` et `sitemap.xml`.

Complétez `legal.html` et adaptez `privacy.html` à votre situation juridique réelle.

## Tester localement

```bash
python -m http.server 8080
```

Ouvrez `http://localhost:8080`.

## Structure

- `index.html` : page commerciale
- `styles.css` : identité visuelle et responsive
- `app.js` : langues, animations et mini-brief
- `config.js` : coordonnées, liens et prix
- `legal.html` / `privacy.html` : modèles à compléter
- `.github/workflows/pages.yml` : déploiement GitHub Pages
- `firebase.json` : déploiement Firebase Hosting
