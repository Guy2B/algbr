(() => {
  const cfg = window.ALGBR_CONFIG || {};
  const translations = {
    fr: {
      "nav.services":"Services","nav.work":"Références","nav.offers":"Offres","nav.process":"Méthode","nav.contact":"Parler de votre projet",
      "hero.eyebrow":"Studio web & produit numérique","hero.title":"Votre idée mérite mieux qu’un <span>site invisible.</span>","hero.lead":"Nous transformons vos besoins en sites, applications et outils simples à utiliser — avec un accompagnement clair, avant et après la mise en ligne.","hero.ctaPrimary":"Décrire mon projet","hero.ctaSecondary":"Voir nos références","hero.trust1":"✓ Design responsive","hero.trust2":"✓ Déploiement accompagné","hero.trust3":"✓ Support humain",
      "proof.1":"Sites vitrines","proof.2":"Applications web","proof.3":"Applications mobiles","proof.4":"Maintenance & support","proof.5":"Automatisation",
      "services.eyebrow":"Ce que nous construisons","services.title":"Un partenaire numérique, pas seulement un prestataire.","services.intro":"Nous adaptons la solution à votre activité, à votre budget et à votre niveau technique. Vous savez toujours ce qui est fait, pourquoi et comment l’utiliser.",
      "services.web.title":"Sites web","services.web.text":"Landing pages, sites vitrines, portfolios et sites professionnels conçus pour convaincre et convertir.","services.web.a":"Responsive mobile","services.web.b":"SEO technique","services.web.c":"Mise en ligne incluse",
      "services.app.title":"Applications & outils","services.app.text":"Applications web, tableaux de bord, outils internes et prototypes prêts à tester avec vos utilisateurs.","services.app.a":"UX claire","services.app.b":"Développement évolutif","services.app.c":"Mode admin et tests",
      "services.mobile.title":"Applications mobiles","services.mobile.text":"Applications iOS et Android, PWA, intégrations natives et préparation à la publication sur les stores.","services.mobile.a":"iOS & Android","services.mobile.b":"PWA installable","services.mobile.c":"Connexions API",
      "services.support.title":"Web support","services.support.text":"Corrections, mises à jour, sauvegardes, performance et accompagnement pour garder votre site fiable.","services.support.a":"Interventions ponctuelles","services.support.b":"Forfaits mensuels","services.support.c":"Conseils compréhensibles",
      "services.automation.title":"Automatisation & IA","services.automation.text":"Automatisations utiles, assistants internes et IA intégrée lorsque cela simplifie vraiment le travail.","services.automation.a":"Flux de travail","services.automation.b":"Analyse locale ou cloud","services.automation.c":"Respect des données",
      "services.audit.title":"Audit & amélioration","services.audit.text":"Analyse de votre site ou application existante avec priorités concrètes : UX, vitesse, sécurité et conversion.","services.audit.a":"Rapport priorisé","services.audit.b":"Corrections possibles","services.audit.c":"Plan d’évolution",
      "work.eyebrow":"Références","work.title":"Des produits pensés pour être utilisés, pas seulement regardés.","work.sigma.type":"Produit maison","work.sigma.text":"Un système d’accompagnement qui rassemble tâches, projets, finances, énergie, e-mails et signaux sociaux pour proposer les prochaines actions utiles.","work.beauty.type":"Site vitrine","work.beauty.text":"Une présence digitale élégante pensée pour présenter une activité beauté, rassurer les clientes et faciliter la prise de contact.","work.view":"Voir le projet →","work.details":"Découvrir le projet →",
      "offers.eyebrow":"Des offres lisibles","offers.title":"Commencer petit, construire juste, évoluer ensuite.","offers.intro":"Les montants ci-dessous sont indicatifs. Chaque devis précise le périmètre, les délais et ce qui est inclus.","offers.from":"à partir de","offers.study":"après étude","offers.popular":"Le plus demandé","offers.choose":"Choisir cette base","offers.describe":"Décrire mon application","offers.supportCta":"Demander du support","offers.launch.label":"Lancement","offers.launch.title":"Landing page","offers.launch.a":"1 page persuasive","offers.launch.b":"Design responsive","offers.launch.c":"Formulaire de contact","offers.launch.d":"Mise en ligne","offers.growth.label":"Présence","offers.growth.title":"Site professionnel","offers.growth.a":"Jusqu’à 5 pages","offers.growth.b":"Structure SEO","offers.growth.c":"Portfolio ou services","offers.growth.d":"Formation rapide","offers.product.label":"Produit","offers.product.title":"Application sur mesure","offers.product.a":"Prototype fonctionnel","offers.product.b":"Espace utilisateur","offers.product.c":"API & automatisations","offers.product.d":"Plan d’évolution","offers.care.label":"Continuité","offers.care.title":"Support web","offers.care.a":"Mises à jour","offers.care.b":"Corrections mineures","offers.care.c":"Contrôle disponibilité","offers.care.d":"Conseils d’évolution",
      "process.eyebrow":"Une méthode simple","process.title":"Vous gardez la vision. Nous rendons la technique compréhensible.","process.intro":"Chaque étape donne un résultat visible. Pas de tunnel technique ni de jargon inutile.","process.step1.title":"Comprendre","process.step1.text":"Objectif, cible, contenu, contraintes et critères de réussite.","process.step2.title":"Prototyper","process.step2.text":"Une première version concrète pour valider l’expérience avant d’aller plus loin.","process.step3.title":"Construire","process.step3.text":"Développement, contenus, tests, performance et adaptation mobile.","process.step4.title":"Lancer & accompagner","process.step4.text":"Mise en ligne, prise en main et support pour ne pas rester seul après le lancement.",
      "why.eyebrow":"Pourquoi Al.G.B.r.","why.title":"La technologie doit servir votre activité, pas l’inverse.","why.text":"Nous privilégions les solutions lisibles, maintenables et adaptées à votre réalité. Le bon outil n’est pas celui qui contient le plus de fonctions : c’est celui que vos clients et votre équipe utilisent réellement.","why.one.title":"Une communication directe","why.one.text":"Vous échangez avec la personne qui conçoit et développe votre solution.","why.two.title":"Des choix expliqués","why.two.text":"Chaque recommandation est reliée à un besoin concret, un risque ou un bénéfice.","why.three.title":"Une base évolutive","why.three.text":"Votre projet peut commencer simplement sans être bloqué lorsqu’il grandit.",
      "brief.eyebrow":"Votre projet en 2 minutes","brief.title":"Dites-nous ce que vous voulez améliorer.","brief.text":"Ce mini-brief prépare un message clair. Aucun compte n’est nécessaire et aucune donnée n’est envoyée sans votre action.","brief.promiseTitle":"Réponse orientée solution","brief.promiseText":"Vous recevez une recommandation de format, de priorité et de prochaine étape.",
      "form.name":"Votre nom","form.email":"Votre e-mail","form.service":"Type de projet","form.choose":"Choisir","form.budget":"Budget indicatif","form.unsure":"À définir","form.timeline":"Délai souhaité","form.flexible":"Flexible","form.message":"Que souhaitez-vous obtenir ?","form.consent":"J’accepte que ces informations soient utilisées pour répondre à ma demande. Voir la <a href=\"privacy.html\">confidentialité</a>.","form.submit":"Préparer ma demande",
      "contact.eyebrow":"Parlons concret","contact.title":"Une idée, un site à améliorer ou une application à construire ?","contact.text":"Présentez-nous votre besoin. Nous vous indiquerons la voie la plus simple et la plus réaliste pour avancer.","contact.email":"Envoyer une demande",
      "faq.title":"Les questions avant de commencer.","faq.q1":"Puis-je commencer avec un petit budget ?","faq.a1":"Oui. Nous pouvons isoler le besoin prioritaire, lancer une première version utile puis ajouter les fonctions lorsque le projet le justifie.","faq.q2":"Qui héberge le site ?","faq.a2":"Le site peut être publié sur GitHub Pages, Firebase Hosting ou un hébergeur adapté à vos besoins. Le choix dépend des fonctions, du trafic et des données utilisées.","faq.q3":"Puis-je modifier les contenus moi-même ?","faq.a3":"Oui. Selon le projet, nous fournissons un fichier de configuration simple, une interface d’administration ou une formation rapide.","faq.q4":"Le support continue-t-il après la livraison ?","faq.a4":"Oui. Vous pouvez choisir une intervention ponctuelle ou un forfait de suivi avec mises à jour, corrections et conseils.",
      "footer.tagline":"Concevoir. Développer. Accompagner.","footer.services":"Services","footer.company":"Al.G.B.r.","footer.legal":"Informations","footer.legalNotice":"Mentions légales","footer.privacy":"Confidentialité","footer.rights":"Tous droits réservés.","footer.note":"Site conçu pour être rapide, accessible et évolutif.",
      "dialog.eyebrow":"Votre demande est prête","dialog.title":"Copiez le message ou ouvrez votre messagerie.","dialog.copy":"Copier","dialog.send":"Ouvrir ma messagerie","dialog.warning":"Ajoutez votre adresse de contact dans config.js avant la publication.",
      "status.required":"Merci de compléter les champs obligatoires.","status.copied":"Message copié.","brief.subject":"Demande de projet — Al.G.B.r."
    },
    de: {
      "nav.services":"Leistungen","nav.work":"Referenzen","nav.offers":"Angebote","nav.process":"Ablauf","nav.contact":"Projekt besprechen",
      "hero.eyebrow":"Web- & Digitalprodukt-Studio","hero.title":"Ihre Idee verdient mehr als eine <span>unsichtbare Website.</span>","hero.lead":"Wir verwandeln Anforderungen in verständliche Websites, Apps und digitale Werkzeuge — mit klarer Begleitung vor und nach dem Launch.","hero.ctaPrimary":"Projekt beschreiben","hero.ctaSecondary":"Referenzen ansehen","hero.trust1":"✓ Responsives Design","hero.trust2":"✓ Begleiteter Launch","hero.trust3":"✓ Persönlicher Support",
      "proof.1":"Websites","proof.2":"Web-Anwendungen","proof.3":"Mobile Apps","proof.4":"Wartung & Support","proof.5":"Automatisierung",
      "services.eyebrow":"Was wir entwickeln","services.title":"Ein digitaler Partner, nicht nur ein Dienstleister.","services.intro":"Wir passen die Lösung an Ihr Unternehmen, Ihr Budget und Ihre technischen Kenntnisse an. Sie wissen immer, was getan wird und warum.",
      "services.web.title":"Websites","services.web.text":"Landingpages, Unternehmensseiten, Portfolios und professionelle Webauftritte, die überzeugen.","services.web.a":"Mobil optimiert","services.web.b":"Technisches SEO","services.web.c":"Veröffentlichung inklusive",
      "services.app.title":"Apps & Tools","services.app.text":"Web-Apps, Dashboards, interne Tools und Prototypen für echte Nutzertests.","services.app.a":"Klare UX","services.app.b":"Erweiterbare Entwicklung","services.app.c":"Admin- und Testmodus",
      "services.mobile.title":"Mobile Apps","services.mobile.text":"iOS- und Android-Apps, PWAs, native Integrationen und Vorbereitung für App Stores.","services.mobile.a":"iOS & Android","services.mobile.b":"Installierbare PWA","services.mobile.c":"API-Anbindungen",
      "services.support.title":"Web-Support","services.support.text":"Fehlerbehebung, Updates, Backups, Performance und verständliche Begleitung.","services.support.a":"Einzelne Einsätze","services.support.b":"Monatliche Pakete","services.support.c":"Klare Beratung",
      "services.automation.title":"Automatisierung & KI","services.automation.text":"Sinnvolle Automatisierungen, interne Assistenten und KI, wenn sie Arbeit wirklich vereinfacht.","services.automation.a":"Arbeitsabläufe","services.automation.b":"Lokale oder Cloud-Analyse","services.automation.c":"Datenschutzorientiert",
      "services.audit.title":"Audit & Optimierung","services.audit.text":"Analyse bestehender Websites und Apps mit konkreten Prioritäten für UX, Tempo, Sicherheit und Conversion.","services.audit.a":"Priorisierter Bericht","services.audit.b":"Umsetzung möglich","services.audit.c":"Entwicklungsplan",
      "work.eyebrow":"Referenzen","work.title":"Digitale Produkte, die benutzt werden — nicht nur gut aussehen.","work.sigma.type":"Eigenes Produkt","work.sigma.text":"Ein Begleitsystem, das Aufgaben, Projekte, Finanzen, Energie, E-Mails und soziale Signale zu sinnvollen nächsten Schritten verbindet.","work.beauty.type":"Unternehmensseite","work.beauty.text":"Ein eleganter digitaler Auftritt für ein Beauty-Angebot, der Vertrauen schafft und Kontaktaufnahme erleichtert.","work.view":"Projekt ansehen →","work.details":"Projekt entdecken →",
      "offers.eyebrow":"Klare Angebote","offers.title":"Klein starten, richtig bauen, später wachsen.","offers.intro":"Die Preise sind Richtwerte. Jedes Angebot beschreibt Umfang, Zeitplan und enthaltene Leistungen.","offers.from":"ab","offers.study":"nach Analyse","offers.popular":"Am häufigsten gewählt","offers.choose":"Diese Basis wählen","offers.describe":"App beschreiben","offers.supportCta":"Support anfragen","offers.launch.label":"Start","offers.launch.title":"Landingpage","offers.launch.a":"1 überzeugende Seite","offers.launch.b":"Responsives Design","offers.launch.c":"Kontaktformular","offers.launch.d":"Veröffentlichung","offers.growth.label":"Präsenz","offers.growth.title":"Professionelle Website","offers.growth.a":"Bis zu 5 Seiten","offers.growth.b":"SEO-Struktur","offers.growth.c":"Portfolio oder Leistungen","offers.growth.d":"Kurze Einweisung","offers.product.label":"Produkt","offers.product.title":"Individuelle Anwendung","offers.product.a":"Funktionaler Prototyp","offers.product.b":"Benutzerbereich","offers.product.c":"APIs & Automatisierung","offers.product.d":"Entwicklungsplan","offers.care.label":"Kontinuität","offers.care.title":"Web-Support","offers.care.a":"Updates","offers.care.b":"Kleine Korrekturen","offers.care.c":"Verfügbarkeitskontrolle","offers.care.d":"Weiterentwicklungsberatung",
      "process.eyebrow":"Ein einfacher Ablauf","process.title":"Sie behalten die Vision. Wir machen Technik verständlich.","process.intro":"Jeder Schritt liefert ein sichtbares Ergebnis — ohne unnötigen Fachjargon.","process.step1.title":"Verstehen","process.step1.text":"Ziel, Zielgruppe, Inhalte, Rahmen und Erfolgskriterien.","process.step2.title":"Prototyp entwickeln","process.step2.text":"Eine konkrete erste Version, um die Nutzererfahrung früh zu prüfen.","process.step3.title":"Umsetzen","process.step3.text":"Entwicklung, Inhalte, Tests, Performance und mobile Anpassung.","process.step4.title":"Starten & begleiten","process.step4.text":"Veröffentlichung, Übergabe und Support nach dem Launch.",
      "why.eyebrow":"Warum Al.G.B.r.","why.title":"Technologie soll Ihrem Unternehmen dienen — nicht umgekehrt.","why.text":"Wir setzen auf verständliche, wartbare und realistische Lösungen. Das beste Werkzeug ist nicht das mit den meisten Funktionen, sondern das, das wirklich genutzt wird.","why.one.title":"Direkter Austausch","why.one.text":"Sie sprechen mit der Person, die Ihre Lösung gestaltet und entwickelt.","why.two.title":"Erklärte Entscheidungen","why.two.text":"Jede Empfehlung ist mit einem konkreten Bedarf, Risiko oder Nutzen verbunden.","why.three.title":"Erweiterbare Basis","why.three.text":"Ihr Projekt kann einfach beginnen und später sinnvoll wachsen.",
      "brief.eyebrow":"Ihr Projekt in 2 Minuten","brief.title":"Was möchten Sie verbessern?","brief.text":"Dieser kurze Brief erstellt eine klare Anfrage. Ohne Konto und ohne automatische Übertragung.","brief.promiseTitle":"Lösungsorientierte Antwort","brief.promiseText":"Sie erhalten eine Empfehlung zu Format, Priorität und nächstem Schritt.",
      "form.name":"Ihr Name","form.email":"Ihre E-Mail","form.service":"Projektart","form.choose":"Auswählen","form.budget":"Budgetrahmen","form.unsure":"Noch offen","form.timeline":"Gewünschter Zeitraum","form.flexible":"Flexibel","form.message":"Was möchten Sie erreichen?","form.consent":"Ich stimme zu, dass diese Angaben zur Beantwortung meiner Anfrage verwendet werden. Siehe <a href=\"privacy.html\">Datenschutz</a>.","form.submit":"Anfrage vorbereiten",
      "contact.eyebrow":"Lassen Sie uns konkret werden","contact.title":"Eine Idee, eine Website zum Verbessern oder eine App zum Entwickeln?","contact.text":"Beschreiben Sie Ihren Bedarf. Wir zeigen Ihnen den einfachsten realistischen Weg nach vorn.","contact.email":"Anfrage senden",
      "faq.title":"Fragen vor dem Start.","faq.q1":"Kann ich mit kleinem Budget anfangen?","faq.a1":"Ja. Wir priorisieren den wichtigsten Bedarf, starten mit einer nützlichen ersten Version und erweitern später.","faq.q2":"Wo wird die Website gehostet?","faq.a2":"Auf GitHub Pages, Firebase Hosting oder einem passenden Anbieter — abhängig von Funktionen, Traffic und Daten.","faq.q3":"Kann ich Inhalte selbst ändern?","faq.a3":"Ja. Je nach Projekt erhalten Sie eine einfache Konfiguration, einen Admin-Bereich oder eine kurze Einweisung.","faq.q4":"Gibt es Support nach der Übergabe?","faq.a4":"Ja. Als Einzelauftrag oder monatliches Paket mit Updates, Korrekturen und Beratung.",
      "footer.tagline":"Konzipieren. Entwickeln. Begleiten.","footer.services":"Leistungen","footer.company":"Al.G.B.r.","footer.legal":"Informationen","footer.legalNotice":"Impressum","footer.privacy":"Datenschutz","footer.rights":"Alle Rechte vorbehalten.","footer.note":"Schnell, zugänglich und erweiterbar entwickelt.",
      "dialog.eyebrow":"Ihre Anfrage ist bereit","dialog.title":"Text kopieren oder E-Mail-Programm öffnen.","dialog.copy":"Kopieren","dialog.send":"E-Mail öffnen","dialog.warning":"Tragen Sie vor der Veröffentlichung Ihre Kontaktadresse in config.js ein.","status.required":"Bitte füllen Sie alle Pflichtfelder aus.","status.copied":"Text kopiert.","brief.subject":"Projektanfrage — Al.G.B.r."
    },
    en: {
      "nav.services":"Services","nav.work":"Work","nav.offers":"Offers","nav.process":"Process","nav.contact":"Discuss your project",
      "hero.eyebrow":"Web & digital product studio","hero.title":"Your idea deserves more than an <span>invisible website.</span>","hero.lead":"We turn requirements into clear websites, apps and digital tools — with straightforward support before and after launch.","hero.ctaPrimary":"Describe my project","hero.ctaSecondary":"See our work","hero.trust1":"✓ Responsive design","hero.trust2":"✓ Guided deployment","hero.trust3":"✓ Human support",
      "proof.1":"Business websites","proof.2":"Web applications","proof.3":"Mobile apps","proof.4":"Maintenance & support","proof.5":"Automation",
      "services.eyebrow":"What we build","services.title":"A digital partner, not just a contractor.","services.intro":"We adapt the solution to your business, budget and technical comfort. You always understand what is being done and why.",
      "services.web.title":"Websites","services.web.text":"Landing pages, business websites, portfolios and professional sites designed to convince and convert.","services.web.a":"Mobile responsive","services.web.b":"Technical SEO","services.web.c":"Deployment included",
      "services.app.title":"Apps & tools","services.app.text":"Web apps, dashboards, internal tools and prototypes ready for real user testing.","services.app.a":"Clear UX","services.app.b":"Scalable development","services.app.c":"Admin and test mode",
      "services.mobile.title":"Mobile apps","services.mobile.text":"iOS and Android apps, PWAs, native integrations and store preparation.","services.mobile.a":"iOS & Android","services.mobile.b":"Installable PWA","services.mobile.c":"API integrations",
      "services.support.title":"Web support","services.support.text":"Fixes, updates, backups, performance and understandable guidance to keep your site reliable.","services.support.a":"One-off interventions","services.support.b":"Monthly plans","services.support.c":"Clear advice",
      "services.automation.title":"Automation & AI","services.automation.text":"Useful automation, internal assistants and AI when it genuinely reduces work.","services.automation.a":"Workflows","services.automation.b":"Local or cloud analysis","services.automation.c":"Data-conscious design",
      "services.audit.title":"Audit & improvement","services.audit.text":"Review of an existing site or app with practical priorities for UX, speed, security and conversion.","services.audit.a":"Prioritised report","services.audit.b":"Implementation available","services.audit.c":"Evolution roadmap",
      "work.eyebrow":"Selected work","work.title":"Digital products designed to be used, not merely admired.","work.sigma.type":"In-house product","work.sigma.text":"A guidance system connecting tasks, projects, finance, energy, email and social signals to recommend useful next actions.","work.beauty.type":"Business website","work.beauty.text":"An elegant digital presence for a beauty business, designed to build trust and make contact easier.","work.view":"View project →","work.details":"Discover project →",
      "offers.eyebrow":"Clear offers","offers.title":"Start small, build right, grow later.","offers.intro":"Prices are indicative. Each quote states the scope, schedule and included work.","offers.from":"from","offers.study":"after review","offers.popular":"Most requested","offers.choose":"Choose this base","offers.describe":"Describe my app","offers.supportCta":"Request support","offers.launch.label":"Launch","offers.launch.title":"Landing page","offers.launch.a":"1 persuasive page","offers.launch.b":"Responsive design","offers.launch.c":"Contact form","offers.launch.d":"Deployment","offers.growth.label":"Presence","offers.growth.title":"Professional website","offers.growth.a":"Up to 5 pages","offers.growth.b":"SEO structure","offers.growth.c":"Portfolio or services","offers.growth.d":"Quick handover","offers.product.label":"Product","offers.product.title":"Custom application","offers.product.a":"Functional prototype","offers.product.b":"User area","offers.product.c":"APIs & automation","offers.product.d":"Evolution plan","offers.care.label":"Continuity","offers.care.title":"Web support","offers.care.a":"Updates","offers.care.b":"Minor fixes","offers.care.c":"Availability checks","offers.care.d":"Growth advice",
      "process.eyebrow":"A simple process","process.title":"You keep the vision. We make the technology understandable.","process.intro":"Every step creates a visible result, without unnecessary jargon.","process.step1.title":"Understand","process.step1.text":"Goal, audience, content, constraints and success criteria.","process.step2.title":"Prototype","process.step2.text":"A tangible first version to validate the experience early.","process.step3.title":"Build","process.step3.text":"Development, content, testing, performance and mobile adaptation.","process.step4.title":"Launch & support","process.step4.text":"Deployment, handover and support after launch.",
      "why.eyebrow":"Why Al.G.B.r.","why.title":"Technology should serve your business, not the other way around.","why.text":"We favour clear, maintainable solutions that fit real conditions. The best tool is not the one with the most features, but the one people actually use.","why.one.title":"Direct communication","why.one.text":"You work with the person designing and developing your solution.","why.two.title":"Explained choices","why.two.text":"Every recommendation is tied to a concrete need, risk or benefit.","why.three.title":"A scalable base","why.three.text":"Your project can start simply without becoming trapped as it grows.",
      "brief.eyebrow":"Your project in 2 minutes","brief.title":"Tell us what you want to improve.","brief.text":"This mini-brief creates a clear request. No account and no automatic submission.","brief.promiseTitle":"Solution-focused response","brief.promiseText":"You receive a recommendation on format, priority and the next step.",
      "form.name":"Your name","form.email":"Your email","form.service":"Project type","form.choose":"Choose","form.budget":"Indicative budget","form.unsure":"To be defined","form.timeline":"Preferred timeline","form.flexible":"Flexible","form.message":"What do you want to achieve?","form.consent":"I agree that this information may be used to answer my request. See <a href=\"privacy.html\">privacy</a>.","form.submit":"Prepare my request",
      "contact.eyebrow":"Let’s get practical","contact.title":"An idea, a website to improve or an application to build?","contact.text":"Describe your need. We will suggest the simplest realistic route forward.","contact.email":"Send a request",
      "faq.title":"Questions before getting started.","faq.q1":"Can I start with a small budget?","faq.a1":"Yes. We can isolate the highest-priority need, launch a useful first version and add features when justified.","faq.q2":"Where is the site hosted?","faq.a2":"The site can use GitHub Pages, Firebase Hosting or another suitable host depending on features, traffic and data.","faq.q3":"Can I edit content myself?","faq.a3":"Yes. Depending on the project, we provide simple configuration, an admin interface or a short handover.","faq.q4":"Is support available after delivery?","faq.a4":"Yes. Choose one-off help or a monthly plan for updates, fixes and advice.",
      "footer.tagline":"Design. Develop. Support.","footer.services":"Services","footer.company":"Al.G.B.r.","footer.legal":"Information","footer.legalNotice":"Legal notice","footer.privacy":"Privacy","footer.rights":"All rights reserved.","footer.note":"Built to be fast, accessible and scalable.",
      "dialog.eyebrow":"Your request is ready","dialog.title":"Copy the text or open your email app.","dialog.copy":"Copy","dialog.send":"Open email","dialog.warning":"Add your contact email to config.js before publishing.","status.required":"Please complete all required fields.","status.copied":"Message copied.","brief.subject":"Project request — Al.G.B.r."
    }
  };

  let lang = localStorage.getItem('algbr-lang') || (navigator.language || 'fr').slice(0,2);
  if (!translations[lang]) lang = 'fr';
  const t = key => translations[lang][key] || translations.fr[key] || key;

  function applyTranslations() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
    document.querySelectorAll('[data-i18n-html]').forEach(el => el.innerHTML = t(el.dataset.i18nHtml));
    document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  }

  document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => {
    lang = btn.dataset.lang; localStorage.setItem('algbr-lang', lang); applyTranslations();
  }));

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); toggle?.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open');
  }));

  document.querySelectorAll('[data-price]').forEach(el => {
    const value = cfg.pricing?.[el.dataset.price]; if (value) el.textContent = value;
  });
  document.querySelectorAll('.project-link').forEach(link => {
    const url = cfg.projects?.[link.dataset.project];
    if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener'; }
  });
  ['contact-github','footer-github'].forEach(id => {
    const el = document.getElementById(id); if (el && cfg.contact?.github) el.href = cfg.contact.github;
  });

  document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
    const select = document.querySelector('[name="service"]'); if (select) select.value = button.dataset.service;
  }));

  const form = document.getElementById('project-form');
  const dialog = document.getElementById('brief-dialog');
  const output = document.getElementById('brief-output');
  const send = document.getElementById('send-brief');
  const warning = document.getElementById('contact-config-warning');
  const status = document.getElementById('form-status');

  function makeBrief(data) {
    return [
      `${t('brief.subject')}`,
      '',
      `Nom / Name: ${data.get('name')}`,
      `E-mail: ${data.get('email')}`,
      `Service: ${data.get('service')}`,
      `Budget: ${data.get('budget')}`,
      `Délai / Timeline: ${data.get('timeline')}`,
      '',
      `${data.get('message')}`
    ].join('\n');
  }

  form?.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); status.textContent = t('status.required'); return; }
    status.textContent = '';
    const data = new FormData(form);
    const brief = makeBrief(data);
    output.value = brief;
    const email = (cfg.contact?.email || '').trim();
    if (email && !email.includes('CHANGE-ME')) {
      send.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(t('brief.subject'))}&body=${encodeURIComponent(brief)}`;
      warning.hidden = true;
    } else {
      send.href = '#'; warning.hidden = false;
      send.onclick = e => e.preventDefault();
    }
    if (cfg.contact?.formEndpoint) {
      try {
        await fetch(cfg.contact.formEndpoint, { method:'POST', headers:{'Accept':'application/json'}, body:data });
      } catch (_) { /* mail fallback remains available */ }
    }
    dialog.showModal();
  });

  document.getElementById('copy-brief')?.addEventListener('click', async () => {
    await navigator.clipboard.writeText(output.value);
    document.getElementById('copy-brief').textContent = t('status.copied');
  });
  dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

  const contactEmail = document.getElementById('contact-email');
  if (cfg.contact?.email) contactEmail.href = `mailto:${cfg.contact.email}`;
  document.getElementById('year').textContent = new Date().getFullYear();

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold:.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  applyTranslations();
})();
