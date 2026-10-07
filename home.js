/* Al.G.B.r. home: language switch (DE authored in the HTML, FR/EN below) and reveal on scroll. */
(function () {
  document.documentElement.classList.add('js');

  var T = {
    fr: {
      skip: 'Aller au contenu',
      'nav.services': 'Services',
      'nav.products': 'Produits',
      'nav.industries': 'Secteurs',
      'nav.process': 'Méthode',
      'nav.pricing': 'Tarifs',
      'cta.start': 'Démarrer un projet',
      'hero.pill': 'Studio digital · Sites · Applications · Systèmes',
      'hero.title': 'Des produits numériques qui travaillent pour vous.',
      'hero.lead': 'Du premier site au système connecté — boutique, réservation, CRM et application : nous planifions clairement, concevons avec exigence et restons à vos côtés après le lancement.',
      'hero.cta1': 'Analyse de projet gratuite',
      'hero.cta2': 'Voir nos réalisations',
      'trust.1': 'Un interlocuteur personnel',
      'trust.2': 'Mobile-first et rapide',
      'trust.3': 'Conforme RGPD',
      'viz.web': 'Site web',
      'viz.webD': 'Être trouvé',
      'viz.shop': 'Boutique & réservation',
      'viz.shopD': 'Faire agir',
      'viz.crm': 'CRM & cloud',
      'viz.crmD': 'Gérer',
      'viz.app': 'App & IA',
      'viz.appD': 'Grandir',
      'viz.core': 'Un seul système',
      'strip.1': 'domaines de service, un seul interlocuteur',
      'strip.2': 'solutions sectorielles avec leur propre architecture',
      'strip.3': 'produits en production',
      'strip.4': 'langues : allemand, français, anglais',
      'svc.eyebrow': 'Services',
      'svc.title': 'Tout ce dont votre activité a besoin en ligne — au même endroit.',
      'svc.lead': 'Pas de case d’agence figée : nous assemblons les briques qui guident vos clients et simplifient votre organisation.',
      'svc.1t': 'Sites web & landing pages',
      'svc.1d': 'Des pages claires et rapides qui expliquent votre offre et génèrent des demandes.',
      'svc.1x': 'Storyline · Mobile-first · SEO',
      'svc.2t': 'Boutiques en ligne',
      'svc.2d': 'Produits, panier, paiement, livraison et bons d’achat — simples à gérer.',
      'svc.3t': 'Applications & espaces clients',
      'svc.3d': 'Applications web, PWA, Android et iOS, espaces clients et outils internes.',
      'svc.3x': 'UX · Prototype · API',
      'svc.4t': 'CRM, réservation & cloud',
      'svc.4d': 'Clients, rendez-vous, prestations et données dans un système compréhensible.',
      'svc.4x': 'Réservation en ligne · CRM · Automatisation',
      'svc.5t': 'SEO, GEO & contenus',
      'svc.5d': 'Base technique, recherche locale et contenus pour Google et la recherche IA.',
      'svc.5x': 'Structure · Local · Données',
      'svc.6t': 'Support & évolution',
      'svc.6d': 'Maintenance, sécurité, modifications et évolutions planifiées après la mise en ligne.',
      'svc.6x': 'Mises à jour · Sauvegardes · Humain',
      'prod.eyebrow': 'Produits & références',
      'prod.title': 'La complexité, rendue simple.',
      'prod.lead': 'Ce que nous construisons pour nos clients, nous le construisons aussi pour nous — et l’exploitons en production.',
      'prod.sigmaLabel': 'Produit maison · Web, Android & iOS',
      'prod.sigmaD': 'Know what matters. Do what’s next. Un moteur de décision personnel, powered by Σ : tâches, agenda, mails et énergie deviennent trois décisions expliquées par jour. Local d’abord, multilingue, avec IA locale en option.',
      'prod.sigma1': 'Moteur de décision',
      'prod.sigma2': 'IA locale',
      'prod.sigmaCta': 'Découvrir NEXT ↗',
      'prod.brandsLabel': 'Marques maison · 6 boutiques · En ligne',
      'prod.brandsTitle': 'Six marques, un seul système.',
      'prod.brandsD': 'Chaque marque règle un problème concret du quotidien — produits choisis avec soin, paiement sécurisé par Stripe, livraison suivie et 14 jours pour changer d’avis. Les six tournent sur notre propre plateforme.',
      'prod.go': 'Sac à dos sous vide, cubes de rangement et kit sommeil : plus de place en cabine, moins de stress à l’embarquement.',
      'prod.space': 'Évier, salle de bain, bureau, placard : des kits qui remettent de l’ordre dans les petits appartements — sans percer.',
      'prod.ease': 'Rouleau pour les pieds, rouleau nuque, bande élastique : 10 minutes après le bureau pour clore la journée.',
      'prod.brandsCta': 'Planifier ma boutique →',
      'foot.contact': 'Contact',
      'prod.shopCta': 'Voir la boutique ↗',
      'prod.offFrom': 'dès 79 € · jusqu’à −47 % du prix conseillé',
      'prod.kinFrom': 'dès 14,90 € · livraison offerte',
      'prod.glowFrom': 'dès 12,90 € · livraison offerte',
      'prod.easeFrom': 'dès 9,90 € · livraison offerte',
      'prod.spaceFrom': 'dès 12,90 € · livraison offerte',
      'prod.goFrom': 'dès 14,90 € · livraison offerte',
      'prod.off': 'Paires Timberland authentiques, neuves avec boîte, de notre stock en Allemagne. Pièces uniques — une fois parties, c’est fini.',
      'prod.kin': 'Poils hors du canapé, toilettage tout en douceur, pattes propres : des kits pour une maison avec chien ou chat.',
      'prod.glow': 'Taie en satin, bonnet de nuit et trousses beauté : une routine du soir qu’on a envie de garder.',
      'mock.today': 'Aujourd’hui',
      'mock.now': 'Faire maintenant',
      'mock.c1': 'Envoyer le devis à Müller',
      'mock.watch': 'À surveiller',
      'mock.c2': 'Réponse de Léa attendue depuis 3 jours',
      'mock.protect': 'Protéger ce créneau',
      'mock.c3': 'Préparer la réunion de jeudi',
      'prod.luneLabel': 'Projet client · Beauty tech · En ligne',
      'prod.luneD': 'D’une marque premium à un système connecté : catalogue de soins, Skin Check, réservation, CRM, avis et données cloud.',
      'prod.lune3': 'Réservation',
      'prod.luneCta': 'Voir Lune Beauty ↗',
      'prod.luneSimilar': 'Planifier une solution similaire →',
      'ind.eyebrow': 'Secteurs',
      'ind.title': 'Pensé pour votre quotidien, pas pour un modèle.',
      'ind.lead': 'Chaque secteur a ses propres parcours, fonctions et signaux de confiance.',
      'ind.handwerk': 'Artisanat',
      'ind.gastro': 'Restauration',
      'ind.friseur': 'Coiffure',
      'ind.arzt': 'Médecin & cabinet',
      'ind.immo': 'Immobilier',
      'proc.eyebrow': 'Méthode',
      'proc.title': 'Un chemin clair, de l’idée au lancement.',
      'proc.lead': 'Pas besoin d’écrire un cahier des charges technique. Vous voyez très tôt une maquette cliquable.',
      'proc.1t': 'Comprendre',
      'proc.1d': 'Objectif, clients, processus, contenus et réussite — dans un brief guidé.',
      'proc.2t': 'Concevoir',
      'proc.2d': 'Un prototype cliquable pour valider rythme, contenus et actions dès le départ.',
      'proc.3t': 'Construire',
      'proc.3d': 'Développement, cloud, administration, tests, accessibilité et performance.',
      'proc.4t': 'Accompagner',
      'proc.4d': 'Mise en ligne, prise en main, support et évolution continue.',
      'price.eyebrow': 'Tarifs',
      'price.title': 'Transparents dès le premier échange.',
      'price.lead': 'Repères indicatifs. Le prix définitif suit le brief — avec un périmètre clairement défini.',
      'price.from': 'dès',
      'price.1': 'Landing page avec storyline, design mobile-first et formulaire de demande.',
      'price.1c': 'Planifier une landing page',
      'price.2': 'Site professionnel jusqu’à 5 pages clés, structure SEO et administration.',
      'price.2c': 'Planifier un site',
      'price.3': 'Boutique en ligne avec produits, paiement, livraison et prise en main.',
      'price.3c': 'Planifier une boutique',
      'price.4t': 'Produit',
      'price.4a': 'Sur analyse',
      'price.4': 'Application, plateforme ou système connecté : prototype, données, plan de développement.',
      'price.4c': 'Décrire mon application',
      'faq.title': 'Les questions à se poser avant de commencer.',
      'faq.1q': 'Comment se déroule un projet ?',
      'faq.1a': 'Vous remplissez un brief guidé. Nous clarifions ensuite l’objectif, le périmètre, les contenus et le calendrier. Vous voyez tôt une maquette cliquable et donnez un retour précis.',
      'faq.2q': 'Le site est-il optimisé pour smartphone ?',
      'faq.2a': 'Oui. Chaque interface est pensée mobile-first et testée sur les tailles d’écran courantes.',
      'faq.3q': 'Mon site peut-il inclure réservation ou CRM ?',
      'faq.3a': 'Oui. Réservation, catalogue de prestations, gestion clients, données cloud et automatisations peuvent former un seul système — comme pour Lune Beauty.',
      'faq.4q': 'Le référencement est-il inclus ?',
      'faq.4a': 'Chaque site reçoit une base SEO technique. Pour une visibilité durable, nous recommandons des pages services et secteurs, des contenus locaux et des données structurées.',
      'faq.5q': 'Assurez-vous le suivi après le lancement ?',
      'faq.5a': 'Oui. Mises à jour, sauvegardes, petites modifications et évolutions — planifiées et humaines.',
      'cta.eyebrow': 'Estimation gratuite',
      'cta.title': 'Que doit accomplir votre système numérique ?',
      'cta.lead': 'Répondez à quelques questions. Vous recevez une synthèse de projet structurée, que nous précisons ensemble.',
      'cta.architect': 'Ouvrir l’architecte de projet',
      'foot.tag': 'Sites, boutiques, applications et systèmes numériques pour les entreprises qui veulent grandir.',
      'foot.request': 'Demande de projet',
      'foot.privacy': 'Confidentialité',
      'foot.rights': 'Tous droits réservés.'
    },
    en: {
      skip: 'Skip to content',
      'nav.services': 'Services',
      'nav.products': 'Products',
      'nav.industries': 'Industries',
      'nav.process': 'Process',
      'nav.pricing': 'Pricing',
      'cta.start': 'Start a project',
      'hero.pill': 'Digital studio · Websites · Apps · Systems',
      'hero.title': 'Digital products that work for you.',
      'hero.lead': 'From a first website to a connected system of shop, booking, CRM and app: we plan clearly, design with care and stay by your side after launch.',
      'hero.cta1': 'Free project analysis',
      'hero.cta2': 'See our work',
      'trust.1': 'One personal contact',
      'trust.2': 'Mobile-first and fast',
      'trust.3': 'GDPR-aware',
      'viz.web': 'Website',
      'viz.webD': 'Get found',
      'viz.shop': 'Shop & booking',
      'viz.shopD': 'Make it happen',
      'viz.crm': 'CRM & cloud',
      'viz.crmD': 'Manage',
      'viz.app': 'App & AI',
      'viz.appD': 'Grow',
      'viz.core': 'One system',
      'strip.1': 'service areas, one contact',
      'strip.2': 'industry solutions with their own architecture',
      'strip.3': 'products running live',
      'strip.4': 'languages: German, French, English',
      'svc.eyebrow': 'Services',
      'svc.title': 'Everything your business needs online — in one place.',
      'svc.lead': 'No rigid agency boxes: we combine the building blocks that guide your customers and simplify your work.',
      'svc.1t': 'Websites & landing pages',
      'svc.1d': 'Clear, fast pages that explain your offer and generate enquiries.',
      'svc.2t': 'Online shops',
      'svc.2d': 'Products, cart, payment, shipping and vouchers — easy to run.',
      'svc.3t': 'Apps & customer portals',
      'svc.3d': 'Web apps, PWA, Android and iOS, customer areas and internal tools.',
      'svc.3x': 'UX · Prototype · APIs',
      'svc.4t': 'CRM, booking & cloud',
      'svc.4d': 'Customers, appointments, services and data in one understandable system.',
      'svc.4x': 'Online booking · CRM · Automation',
      'svc.5t': 'SEO, GEO & content',
      'svc.5d': 'Technical foundation, local search and content for Google and AI search.',
      'svc.5x': 'Structure · Local · Data',
      'svc.6t': 'Support & growth',
      'svc.6d': 'Maintenance, security, changes and planned development after launch.',
      'svc.6x': 'Updates · Backups · Personal',
      'prod.eyebrow': 'Products & work',
      'prod.title': 'Complexity that feels simple.',
      'prod.lead': 'What we build for clients, we also build for ourselves — and run it live.',
      'prod.sigmaLabel': 'Own product · Web, Android & iOS',
      'prod.sigmaD': 'Know what matters. Do what’s next. A personal decision engine, powered by Σ: tasks, calendar, mail and energy become three explained decisions a day. Local-first, multilingual, with optional local AI.',
      'prod.sigma1': 'Decision engine',
      'prod.sigma2': 'Local AI',
      'prod.sigmaCta': 'Discover NEXT ↗',
      'prod.brandsLabel': 'Own brands · 6 shops · Live',
      'prod.brandsTitle': 'Six brands, one system.',
      'prod.brandsD': 'Each brand solves a real everyday problem — carefully chosen products, secure Stripe payment, tracked shipping and 14 days to change your mind. All six run on our own platform.',
      'prod.go': 'Vacuum backpack, packing cubes and sleep kit: more room in your carry-on, less stress at the gate.',
      'prod.space': 'Sink, bathroom, desk, closet: sets that bring order to small apartments — no drilling.',
      'prod.ease': 'Foot roller, neck roller, stretch band: 10 minutes after the desk to close the day.',
      'prod.brandsCta': 'Plan my shop →',
      'foot.contact': 'Contact',
      'prod.shopCta': 'Visit the shop ↗',
      'prod.offFrom': 'from €79 · up to 47 % below RRP',
      'prod.kinFrom': 'from €14.90 · free shipping',
      'prod.glowFrom': 'from €12.90 · free shipping',
      'prod.easeFrom': 'from €9.90 · free shipping',
      'prod.spaceFrom': 'from €12.90 · free shipping',
      'prod.goFrom': 'from €14.90 · free shipping',
      'prod.off': 'Authentic Timberland pairs, new in box, from our own stock in Germany. One-offs — once gone, they’re gone.',
      'prod.kin': 'Hair off the sofa, gentle grooming, clean paws: sets for a home with a dog or cat.',
      'prod.glow': 'Satin pillowcase, sleep bonnet and beauty bags: an evening routine you’ll want to keep.',
      'mock.today': 'Today',
      'mock.now': 'Do now',
      'mock.c1': 'Send the quote to Müller',
      'mock.watch': 'Keep an eye on',
      'mock.c2': 'Reply from Léa expected for 3 days',
      'mock.protect': 'Protect this slot',
      'mock.c3': 'Prepare Thursday’s meeting',
      'prod.luneLabel': 'Client project · Beauty tech · Live',
      'prod.luneD': 'From a premium brand to a connected system: treatment catalogue, Skin Check, booking, CRM, reviews and cloud data.',
      'prod.lune3': 'Booking',
      'prod.luneCta': 'Visit Lune Beauty ↗',
      'prod.luneSimilar': 'Plan a similar solution →',
      'ind.eyebrow': 'Industries',
      'ind.title': 'Built for your day-to-day, not for a template.',
      'ind.lead': 'Every industry needs its own entry points, features and trust signals.',
      'ind.handwerk': 'Trades',
      'ind.gastro': 'Restaurants',
      'ind.friseur': 'Hairdressers',
      'ind.arzt': 'Doctors & clinics',
      'ind.immo': 'Real estate',
      'proc.eyebrow': 'Process',
      'proc.title': 'A clear path from idea to launch.',
      'proc.lead': 'No technical specification to write. You see a clickable draft early on.',
      'proc.1t': 'Understand',
      'proc.1d': 'Goal, customers, processes, content and success — in a guided brief.',
      'proc.2t': 'Design',
      'proc.2d': 'A clickable prototype to check rhythm, content and actions early.',
      'proc.3t': 'Build',
      'proc.3d': 'Development, cloud, admin, testing, accessibility and performance.',
      'proc.4t': 'Support',
      'proc.4d': 'Launch, onboarding, support and continuous improvement.',
      'price.eyebrow': 'Pricing',
      'price.title': 'Transparent from the first conversation.',
      'price.lead': 'Guide prices. The binding price follows the brief — with a clearly defined scope.',
      'price.from': 'from',
      'price.1': 'Landing page with storyline, mobile-first design and enquiry form.',
      'price.1c': 'Plan a landing page',
      'price.2': 'Professional website with up to 5 core pages, SEO structure and your own admin.',
      'price.2c': 'Plan a website',
      'price.3': 'Online shop with products, payment, shipping and onboarding.',
      'price.3c': 'Plan a shop',
      'price.4t': 'Product',
      'price.4a': 'After analysis',
      'price.4': 'App, platform or connected system: prototype, data, development plan.',
      'price.4c': 'Describe your app',
      'faq.title': 'Key questions before you start.',
      'faq.1q': 'How does a project work?',
      'faq.1a': 'You fill in a guided brief. We then clarify goal, scope, content and timeline. You see a clickable draft early and give focused feedback.',
      'faq.2q': 'Is the website optimised for smartphones?',
      'faq.2a': 'Yes. Every interface is designed mobile-first and tested on common screen sizes.',
      'faq.3q': 'Can my website include booking or a CRM?',
      'faq.3a': 'Yes. Booking, service catalogue, customer management, cloud data and automation can become one system — like Lune Beauty.',
      'faq.4q': 'Is SEO included?',
      'faq.4a': 'Every website gets a technical SEO foundation. For lasting visibility we recommend service and industry pages, local content and structured data.',
      'faq.5q': 'Do you look after the website after launch?',
      'faq.5a': 'Yes. Updates, backups, small changes and further development — planned and personal.',
      'cta.eyebrow': 'Free first assessment',
      'cta.title': 'What should your digital system do for you?',
      'cta.lead': 'Answer a few questions. You get a structured project summary we refine together.',
      'cta.architect': 'Open the project architect',
      'foot.tag': 'Websites, shops, apps and digital systems for businesses that want to grow.',
      'foot.request': 'Project request',
      'foot.privacy': 'Privacy',
      'foot.rights': 'All rights reserved.'
    }
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var original = nodes.map(function (el) {
    return el.textContent;
  });

  function apply(lang) {
    var dict = T[lang];
    document.documentElement.lang = lang;
    nodes.forEach(function (el, i) {
      var key = el.getAttribute('data-i18n');
      el.textContent = (dict && dict[key]) || original[i];
    });
    try {
      localStorage.setItem('algbr-lang', lang);
    } catch (e) {
      /* storage unavailable */
    }
  }

  var select = document.getElementById('lang');
  var params = new URLSearchParams(location.search);
  var initial = params.get('lang');
  if (!initial) {
    try {
      initial = localStorage.getItem('algbr-lang');
    } catch (e) {
      initial = null;
    }
  }
  if (!initial) initial = (navigator.language || 'de').slice(0, 2);
  if (['de', 'fr', 'en'].indexOf(initial) < 0) initial = 'de';
  select.value = initial;
  if (initial !== 'de') apply(initial);
  select.addEventListener('change', function () {
    apply(select.value);
  });

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  var reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    reveal.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveal.forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();
