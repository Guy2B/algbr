(() => {
  'use strict';

  const cfg = window.ALGBR_CONFIG || {};
  const form = document.getElementById('project-architect-form');
  if (!form) return;

  const translations = {
    fr: {
      'nav.back':'← Retour au site','hero.eyebrow':'Architecte de projet Al.G.B.r.','hero.title':'Définissons la solution avant d’écrire une ligne de code.','hero.text':'Le formulaire adapte ses questions à votre site, application ou écosystème digital. Vos réponses restent sur votre appareil jusqu’à votre décision de les envoyer.','hero.trustTitle':'À la fin, vous obtenez','hero.trust1':'un résumé clair du besoin ;','hero.trust2':'une architecture recommandée ;','hero.trust3':'les fonctions prioritaires ;','hero.trust4':'un brief à copier, télécharger ou envoyer.',
      'progress.label':'Progression','steps.type':'Projet','steps.typeHint':'format et périmètre','steps.business':'Activité','steps.businessHint':'cible et objectif','steps.experience':'Expérience','steps.experienceHint':'pages et parcours','steps.features':'Fonctions','steps.featuresHint':'données et outils','steps.design':'Design','steps.designHint':'identité et contenus','steps.delivery':'Livraison','steps.deliveryHint':'budget et support','steps.summary':'Résumé','steps.summaryHint':'architecture proposée','scope.label':'Carte du projet','scope.empty':'Votre solution apparaîtra ici.','scope.note':'Les recommandations évolueront avec vos réponses.',
      'type.title':'Que souhaitez-vous construire ?','type.text':'Choisissez le point de départ le plus proche. Le périmètre pourra être ajusté ensuite.','type.website':'Site internet','type.websiteText':'Landing page, site vitrine, services, portfolio, e-commerce ou contenu.','type.app':'Application','type.appText':'Application web, PWA, iOS, Android, espace client ou outil interne.','type.ecosystem':'Écosystème digital','type.ecosystemText':'Site + CRM + réservation + application + collecte cloud et automatisations.','type.support':'Refonte ou support','type.supportText':'Audit, correction, migration, optimisation ou évolution d’une solution existante.','type.lunePreset':'Utiliser l’architecture Lune Beauty comme base','type.lunePresetText':'Site, services, Skin Check, CRM, réservation, avis et données cloud.',
      'business.title':'Votre activité et le résultat attendu','business.text':'Ces informations permettent d’adapter le parcours, le ton et les priorités commerciales.','experience.title':'Pages, écrans et parcours essentiels','experience.text':'Sélectionnez ce que les visiteurs, clients ou collaborateurs doivent pouvoir voir et accomplir.','experience.websitePages':'Pages du site','experience.appScreens':'Espaces de l’application','features.title':'Fonctions, données et intégrations','features.text':'Cette étape détermine la vraie architecture technique et les responsabilités de sécurité.','features.modules':'Modules souhaités','features.integrations':'Services à connecter','design.title':'Identité, contenu et niveau de finition','design.text':'Nous vérifions ce qui existe déjà et ce qui doit être créé avant le développement.','design.quality':'Priorités de qualité','delivery.title':'Budget, calendrier et accompagnement','delivery.text':'Ces réponses servent à proposer un périmètre réaliste et une première phase utile.','delivery.support':'Après la mise en ligne','summary.title':'Votre première architecture de projet','summary.text':'Ce résumé n’est pas un devis automatique. Il sert à démarrer l’échange avec un périmètre compréhensible.','summary.recommendation':'Recommandation initiale','summary.brief':'Brief structuré','summary.privacy':'Rien n’est envoyé automatiquement. Le bouton e-mail ouvre votre messagerie avec un résumé ; le fichier téléchargé contient le brief complet.',
      'fields.contactName':'Votre nom *','fields.email':'E-mail *','fields.company':'Entreprise ou projet *','fields.phone':'Téléphone','fields.sector':'Secteur *','fields.country':'Pays / marché principal','fields.currentUrl':'Site ou application actuelle','fields.offer':'Que vendez-vous ou proposez-vous ? *','fields.audience':'À qui s’adresse le projet ? *','fields.mainGoal':'Objectif principal *','fields.success':'Comment saurez-vous que le projet fonctionne ?','fields.primaryAction':'Action principale attendue *','fields.userRoles':'Types d’utilisateurs','fields.userJourney':'Décrivez le parcours idéal','fields.painPoints':'Qu’est-ce qui fonctionne mal aujourd’hui ?','fields.platforms':'Plateformes souhaitées','fields.login':'Connexion utilisateur','fields.dataCollected':'Quelles données seront collectées ?','fields.sensitiveData':'Données sensibles ?','fields.dataRegion':'Lieu de stockage souhaité','fields.adminNeeds':'Que doit pouvoir gérer l’administrateur ?','fields.automationNeeds':'Quelles tâches souhaitez-vous automatiser ?','fields.brandStatus':'Identité visuelle','fields.contentStatus':'Contenus','fields.style':'Style souhaité','fields.languages':'Langues','fields.colors':'Couleurs, polices ou éléments à conserver','fields.references':'Sites ou applications de référence','fields.assetLinks':'Lien vers vos documents et médias','fields.assetHint':'Pour votre sécurité, le formulaire n’envoie aucun fichier directement.','fields.budget':'Budget indicatif *','fields.timeline':'Délai souhaité *','fields.launchDate':'Date de lancement importante','fields.hosting':'Domaine et hébergement','fields.constraints':'Contraintes, obligations ou informations importantes','fields.extra':'Autre chose à nous signaler ?','fields.consent':'J’accepte que ces informations soient utilisées pour étudier ma demande. Voir la <a href="privacy.html">confidentialité</a>.',
      'actions.clear':'Effacer le brouillon local','actions.copy':'Copier le brief','actions.download':'Télécharger .txt','actions.email':'Envoyer à Al.G.B.r.','actions.previous':'Précédent','actions.next':'Continuer','actions.finish':'Voir le résumé','status.required':'Complétez les champs obligatoires de cette étape.','status.saved':'Brouillon enregistré sur cet appareil.','status.copied':'Brief copié.','status.cleared':'Brouillon effacé.','status.sent':'Demande transmise.','status.sendError':'Envoi impossible. Téléchargez le brief ou utilisez l’e-mail.','confirm.clear':'Effacer toutes les réponses enregistrées sur cet appareil ?','reference.eyebrow':'Architecture de référence','reference.text':'Un projet métier complet : le site présente l’offre et les tarifs, le Skin Check oriente la cliente, le générateur de réservation structure la demande, le CRM centralise le suivi et les données cloud relient l’ensemble.','reference.view':'Voir Lune Beauty'
    },
    de: {
      'nav.back':'← Zurück zur Website','hero.eyebrow':'Al.G.B.r. Projektarchitekt','hero.title':'Wir definieren die Lösung, bevor wir Code schreiben.','hero.text':'Das Formular passt sich an Website, App oder digitales Ökosystem an. Ihre Antworten bleiben auf Ihrem Gerät, bis Sie sie aktiv senden.','hero.trustTitle':'Am Ende erhalten Sie','hero.trust1':'eine klare Zusammenfassung ;','hero.trust2':'eine empfohlene Architektur ;','hero.trust3':'priorisierte Funktionen ;','hero.trust4':'ein Briefing zum Kopieren, Herunterladen oder Senden.',
      'progress.label':'Fortschritt','steps.type':'Projekt','steps.typeHint':'Format und Umfang','steps.business':'Geschäft','steps.businessHint':'Zielgruppe und Ziel','steps.experience':'Erlebnis','steps.experienceHint':'Seiten und Abläufe','steps.features':'Funktionen','steps.featuresHint':'Daten und Werkzeuge','steps.design':'Design','steps.designHint':'Marke und Inhalte','steps.delivery':'Lieferung','steps.deliveryHint':'Budget und Support','steps.summary':'Zusammenfassung','steps.summaryHint':'empfohlene Architektur','scope.label':'Projektkarte','scope.empty':'Ihre Lösung erscheint hier.','scope.note':'Die Empfehlung entwickelt sich mit Ihren Antworten.',
      'type.title':'Was möchten Sie entwickeln?','type.text':'Wählen Sie den passendsten Startpunkt. Der Umfang kann später angepasst werden.','type.website':'Website','type.websiteText':'Landingpage, Unternehmenswebsite, Leistungen, Portfolio, Shop oder Inhalte.','type.app':'Anwendung','type.appText':'Web-App, PWA, iOS, Android, Kundenbereich oder internes Werkzeug.','type.ecosystem':'Digitales Ökosystem','type.ecosystemText':'Website + CRM + Buchung + App + Cloud-Daten und Automatisierungen.','type.support':'Relaunch oder Support','type.supportText':'Audit, Korrektur, Migration, Optimierung oder Ausbau einer bestehenden Lösung.','type.lunePreset':'Lune-Beauty-Architektur als Basis verwenden','type.lunePresetText':'Website, Leistungen, Skin Check, CRM, Buchung, Bewertungen und Cloud-Daten.',
      'business.title':'Ihr Geschäft und das gewünschte Ergebnis','business.text':'Damit passen wir Ablauf, Ton und geschäftliche Prioritäten an.','experience.title':'Wichtige Seiten, Ansichten und Abläufe','experience.text':'Wählen Sie, was Besucher, Kunden oder Mitarbeitende sehen und erledigen sollen.','experience.websitePages':'Website-Seiten','experience.appScreens':'App-Bereiche','features.title':'Funktionen, Daten und Integrationen','features.text':'Dieser Schritt bestimmt die technische Architektur und Sicherheitsanforderungen.','features.modules':'Gewünschte Module','features.integrations':'Zu verbindende Dienste','design.title':'Marke, Inhalte und Qualitätsniveau','design.text':'Wir prüfen, was bereits vorhanden ist und was vor der Entwicklung erstellt werden muss.','design.quality':'Qualitätsprioritäten','delivery.title':'Budget, Zeitplan und Betreuung','delivery.text':'Damit schlagen wir einen realistischen Umfang und eine sinnvolle erste Phase vor.','delivery.support':'Nach dem Launch','summary.title':'Ihre erste Projektarchitektur','summary.text':'Diese Zusammenfassung ist kein automatisches Angebot. Sie schafft eine verständliche Gesprächsgrundlage.','summary.recommendation':'Erste Empfehlung','summary.brief':'Strukturiertes Briefing','summary.privacy':'Es wird nichts automatisch gesendet. Die E-Mail-Schaltfläche öffnet Ihr E-Mail-Programm; die Download-Datei enthält das vollständige Briefing.',
      'fields.contactName':'Ihr Name *','fields.email':'E-Mail *','fields.company':'Unternehmen oder Projekt *','fields.phone':'Telefon','fields.sector':'Branche *','fields.country':'Land / Hauptmarkt','fields.currentUrl':'Aktuelle Website oder App','fields.offer':'Was bieten oder verkaufen Sie? *','fields.audience':'Für wen ist das Projekt? *','fields.mainGoal':'Hauptziel *','fields.success':'Woran erkennen Sie den Erfolg?','fields.primaryAction':'Wichtigste Nutzeraktion *','fields.userRoles':'Benutzerrollen','fields.userJourney':'Idealen Ablauf beschreiben','fields.painPoints':'Was funktioniert heute schlecht?','fields.platforms':'Gewünschte Plattformen','fields.login':'Benutzeranmeldung','fields.dataCollected':'Welche Daten werden erfasst?','fields.sensitiveData':'Sensible Daten?','fields.dataRegion':'Gewünschter Speicherort','fields.adminNeeds':'Was soll die Administration verwalten?','fields.automationNeeds':'Welche Aufgaben sollen automatisiert werden?','fields.brandStatus':'Markenauftritt','fields.contentStatus':'Inhalte','fields.style':'Gewünschter Stil','fields.languages':'Sprachen','fields.colors':'Farben, Schriften oder Elemente zum Beibehalten','fields.references':'Referenz-Websites oder Apps','fields.assetLinks':'Link zu Dokumenten und Medien','fields.assetHint':'Aus Sicherheitsgründen werden keine Dateien direkt über dieses Formular gesendet.','fields.budget':'Ungefähres Budget *','fields.timeline':'Gewünschter Zeitrahmen *','fields.launchDate':'Wichtiges Startdatum','fields.hosting':'Domain und Hosting','fields.constraints':'Vorgaben, Pflichten oder wichtige Informationen','fields.extra':'Noch etwas Wichtiges?','fields.consent':'Ich stimme zu, dass diese Angaben zur Prüfung meiner Anfrage verwendet werden. Siehe <a href="privacy.html">Datenschutz</a>.',
      'actions.clear':'Lokalen Entwurf löschen','actions.copy':'Briefing kopieren','actions.download':'Als .txt laden','actions.email':'An Al.G.B.r. senden','actions.previous':'Zurück','actions.next':'Weiter','actions.finish':'Zusammenfassung ansehen','status.required':'Bitte füllen Sie die Pflichtfelder dieses Schritts aus.','status.saved':'Entwurf auf diesem Gerät gespeichert.','status.copied':'Briefing kopiert.','status.cleared':'Entwurf gelöscht.','status.sent':'Anfrage übermittelt.','status.sendError':'Senden nicht möglich. Laden Sie das Briefing herunter oder verwenden Sie E-Mail.','confirm.clear':'Alle auf diesem Gerät gespeicherten Antworten löschen?','reference.eyebrow':'Referenzarchitektur','reference.text':'Ein vollständiges Geschäftssystem: Die Website zeigt Leistungen und Preise, der Skin Check orientiert Kundinnen, der Buchungsgenerator strukturiert Anfragen, das CRM bündelt die Betreuung und Cloud-Daten verbinden alles.','reference.view':'Lune Beauty ansehen'
    },
    en: {
      'nav.back':'← Back to the website','hero.eyebrow':'Al.G.B.r. Project Architect','hero.title':'Define the solution before writing a line of code.','hero.text':'The form adapts to a website, application or digital ecosystem. Your answers stay on your device until you choose to send them.','hero.trustTitle':'At the end you receive','hero.trust1':'a clear needs summary ;','hero.trust2':'a recommended architecture ;','hero.trust3':'prioritised features ;','hero.trust4':'a brief to copy, download or email.',
      'progress.label':'Progress','steps.type':'Project','steps.typeHint':'format and scope','steps.business':'Business','steps.businessHint':'audience and goal','steps.experience':'Experience','steps.experienceHint':'pages and journeys','steps.features':'Features','steps.featuresHint':'data and tools','steps.design':'Design','steps.designHint':'brand and content','steps.delivery':'Delivery','steps.deliveryHint':'budget and support','steps.summary':'Summary','steps.summaryHint':'recommended architecture','scope.label':'Project map','scope.empty':'Your solution will appear here.','scope.note':'Recommendations will evolve with your answers.',
      'type.title':'What would you like to build?','type.text':'Choose the closest starting point. The scope can be adjusted later.','type.website':'Website','type.websiteText':'Landing page, company website, services, portfolio, e-commerce or content.','type.app':'Application','type.appText':'Web app, PWA, iOS, Android, client area or internal tool.','type.ecosystem':'Digital ecosystem','type.ecosystemText':'Website + CRM + booking + app + cloud data and automations.','type.support':'Redesign or support','type.supportText':'Audit, fixes, migration, optimisation or evolution of an existing solution.','type.lunePreset':'Use the Lune Beauty architecture as a base','type.lunePresetText':'Website, services, Skin Check, CRM, booking, reviews and cloud data.',
      'business.title':'Your business and desired result','business.text':'This helps adapt the journey, tone and commercial priorities.','experience.title':'Essential pages, screens and journeys','experience.text':'Select what visitors, customers or team members need to see and do.','experience.websitePages':'Website pages','experience.appScreens':'Application areas','features.title':'Features, data and integrations','features.text':'This step determines the real technical architecture and security responsibilities.','features.modules':'Requested modules','features.integrations':'Services to connect','design.title':'Brand, content and finish level','design.text':'We check what already exists and what must be created before development.','design.quality':'Quality priorities','delivery.title':'Budget, timeline and support','delivery.text':'These answers help define a realistic scope and a useful first phase.','delivery.support':'After launch','summary.title':'Your initial project architecture','summary.text':'This is not an automatic quote. It creates a clear starting point for discussion.','summary.recommendation':'Initial recommendation','summary.brief':'Structured brief','summary.privacy':'Nothing is sent automatically. The email button opens your mail client with a summary; the downloaded file contains the complete brief.',
      'fields.contactName':'Your name *','fields.email':'Email *','fields.company':'Company or project *','fields.phone':'Phone','fields.sector':'Industry *','fields.country':'Country / main market','fields.currentUrl':'Current website or app','fields.offer':'What do you sell or offer? *','fields.audience':'Who is this for? *','fields.mainGoal':'Main goal *','fields.success':'How will you know it works?','fields.primaryAction':'Primary user action *','fields.userRoles':'User roles','fields.userJourney':'Describe the ideal journey','fields.painPoints':'What works poorly today?','fields.platforms':'Target platforms','fields.login':'User login','fields.dataCollected':'What data will be collected?','fields.sensitiveData':'Sensitive data?','fields.dataRegion':'Preferred storage region','fields.adminNeeds':'What should administrators manage?','fields.automationNeeds':'What tasks should be automated?','fields.brandStatus':'Brand identity','fields.contentStatus':'Content','fields.style':'Desired style','fields.languages':'Languages','fields.colors':'Colours, fonts or elements to keep','fields.references':'Reference websites or apps','fields.assetLinks':'Link to documents and media','fields.assetHint':'For security, this form does not upload files directly.','fields.budget':'Indicative budget *','fields.timeline':'Preferred timeline *','fields.launchDate':'Important launch date','fields.hosting':'Domain and hosting','fields.constraints':'Constraints, obligations or important information','fields.extra':'Anything else to mention?','fields.consent':'I agree that this information may be used to review my request. See <a href="privacy.html">privacy</a>.',
      'actions.clear':'Clear local draft','actions.copy':'Copy brief','actions.download':'Download .txt','actions.email':'Send to Al.G.B.r.','actions.previous':'Previous','actions.next':'Continue','actions.finish':'View summary','status.required':'Please complete the required fields in this step.','status.saved':'Draft saved on this device.','status.copied':'Brief copied.','status.cleared':'Draft cleared.','status.sent':'Request sent.','status.sendError':'Unable to send. Download the brief or use email.','confirm.clear':'Clear all answers stored on this device?','reference.eyebrow':'Reference architecture','reference.text':'A complete business system: the website presents services and prices, the Skin Check guides clients, the booking generator structures requests, the CRM centralises follow-up and cloud data connects everything.','reference.view':'View Lune Beauty'
    }
  };

  const storageKey = 'algbr-project-architect-v12';
  const langKey = 'algbr-lang';
  let lang = localStorage.getItem(langKey) || (navigator.language || 'fr').slice(0, 2);
  if (!translations[lang]) lang = 'fr';
  let currentStep = 0;
  let maxVisited = 0;
  let saveTimer;

  const steps = [...form.querySelectorAll('.wizard-step')];
  const stepItems = [...document.querySelectorAll('#project-step-list li')];
  const previousButton = document.getElementById('previous-step');
  const nextButton = document.getElementById('next-step');
  const status = document.getElementById('wizard-status');
  const progressBar = document.getElementById('progress-bar');
  const progressPercent = document.getElementById('progress-percent');
  const scopeTitle = document.getElementById('scope-title');
  const scopeTags = document.getElementById('scope-tags');
  const scopeNote = document.getElementById('scope-note');

  const text = key => translations[lang][key] || translations.fr[key] || key;

  function applyTranslations() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-project-i18n]').forEach(el => { el.textContent = text(el.dataset.projectI18n); });
    document.querySelectorAll('[data-project-i18n-html]').forEach(el => { el.innerHTML = text(el.dataset.projectI18nHtml); });
    document.querySelectorAll('[data-project-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.projectLang === lang));
    updateNavigation();
  }

  document.querySelectorAll('[data-project-lang]').forEach(btn => btn.addEventListener('click', () => {
    lang = btn.dataset.projectLang;
    localStorage.setItem(langKey, lang);
    applyTranslations();
    renderSummary();
  }));

  const getProjectType = () => form.elements.projectType?.value || '';

  function selectedValues(name) {
    return [...form.querySelectorAll(`[name="${CSS.escape(name)}"]:checked`)].filter(input => !input.disabled).map(input => input.value);
  }

  function serializeForm() {
    const payload = {};
    [...form.elements].forEach(el => {
      if (!el.name || el.type === 'button' || el.type === 'submit') return;
      if (el.type === 'checkbox') {
        if (!Array.isArray(payload[el.name])) payload[el.name] = [];
        if (el.checked) payload[el.name].push(el.value || true);
      } else if (el.type === 'radio') {
        if (el.checked) payload[el.name] = el.value;
      } else {
        payload[el.name] = el.value;
      }
    });
    return payload;
  }

  function restoreForm(payload) {
    if (!payload || typeof payload !== 'object') return;
    [...form.elements].forEach(el => {
      if (!el.name || !(el.name in payload)) return;
      const value = payload[el.name];
      if (el.type === 'checkbox') el.checked = Array.isArray(value) && value.includes(el.value);
      else if (el.type === 'radio') el.checked = value === el.value;
      else el.value = value ?? '';
    });
  }

  function saveDraft() {
    const draft = { savedAt: new Date().toISOString(), step: currentStep, maxVisited, data: serializeForm() };
    localStorage.setItem(storageKey, JSON.stringify(draft));
    status.textContent = text('status.saved');
    window.setTimeout(() => { if (status.textContent === text('status.saved')) status.textContent = ''; }, 1800);
  }

  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveDraft, 450);
  }

  function loadDraft() {
    try {
      const draft = JSON.parse(localStorage.getItem(storageKey));
      if (!draft?.data) return;
      restoreForm(draft.data);
      currentStep = Math.min(Number(draft.step) || 0, steps.length - 1);
      maxVisited = Math.max(currentStep, Number(draft.maxVisited) || 0);
    } catch (_) { /* malformed local data is ignored */ }
  }

  function updateScopes() {
    const type = getProjectType();
    document.querySelectorAll('[data-project-scope]').forEach(group => {
      const allowed = (group.dataset.projectScope || '').split(/\s+/).includes(type);
      group.hidden = !allowed;
      group.querySelectorAll('input,select,textarea').forEach(control => { control.disabled = !allowed; });
    });
  }

  function validateCurrentStep() {
    const active = steps[currentStep];
    const required = [...active.querySelectorAll('[required]')].filter(el => !el.disabled && !el.closest('[hidden]'));
    let valid = true;
    for (const field of required) {
      if (!field.checkValidity()) {
        valid = false;
        field.setAttribute('aria-invalid', 'true');
      } else field.removeAttribute('aria-invalid');
    }
    if (!valid) {
      status.textContent = text('status.required');
      const first = required.find(field => !field.checkValidity());
      first?.focus();
      first?.reportValidity();
    }
    return valid;
  }

  function showStep(index, { force = false } = {}) {
    if (index < 0 || index >= steps.length) return;
    if (!force && index > currentStep && !validateCurrentStep()) return;
    currentStep = index;
    maxVisited = Math.max(maxVisited, currentStep);
    steps.forEach((step, i) => {
      const active = i === currentStep;
      step.hidden = !active;
      step.classList.toggle('active', active);
    });
    stepItems.forEach((item, i) => {
      item.classList.toggle('active', i === currentStep);
      item.classList.toggle('complete', i < currentStep || i < maxVisited);
      item.querySelector('button').disabled = i > maxVisited;
    });
    status.textContent = '';
    updateNavigation();
    updateProgress();
    if (currentStep === steps.length - 1) renderSummary();
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    scheduleSave();
  }

  function updateNavigation() {
    previousButton.hidden = currentStep === 0;
    nextButton.hidden = currentStep === steps.length - 1;
    if (!nextButton.hidden) nextButton.textContent = currentStep === steps.length - 2 ? text('actions.finish') : text('actions.next');
  }

  function completionScore() {
    const activeControls = [...form.querySelectorAll('input,select,textarea')].filter(el => !el.disabled && el.name && el.type !== 'hidden');
    const required = activeControls.filter(el => el.required);
    const requiredDone = required.filter(el => {
      if (el.type === 'checkbox') return el.checked;
      if (el.type === 'radio') return Boolean(form.querySelector(`[name="${CSS.escape(el.name)}"]:checked`));
      return Boolean(el.value.trim());
    }).length;
    const optionalGroups = ['websitePages','appScreens','modules','integrations','quality','support'];
    const optionalFilled = activeControls.filter(el => !el.required && ((el.type === 'checkbox' && el.checked) || (!['checkbox','radio'].includes(el.type) && el.value.trim()))).length;
    const groupBonus = optionalGroups.filter(name => selectedValues(name).length).length;
    const base = required.length ? requiredDone / required.length : 0;
    const enrichment = Math.min(1, (optionalFilled + groupBonus * 2) / 25);
    return Math.min(100, Math.round(base * 72 + enrichment * 28));
  }

  function updateProgress() {
    const score = completionScore();
    progressBar.style.width = `${score}%`;
    progressPercent.textContent = `${score} %`;
    document.getElementById('summary-completeness').textContent = `${score} %`;
  }

  function typeLabel(type) {
    return ({ website:'Site internet', app:'Application', ecosystem:'Écosystème digital', support:'Refonte / support' })[type] || '';
  }

  function updateLiveScope() {
    const type = getProjectType();
    const modules = selectedValues('modules');
    const pages = selectedValues('websitePages');
    const screens = selectedValues('appScreens');
    const platform = form.elements.platforms?.value;
    scopeTitle.textContent = type ? typeLabel(type) : text('scope.empty');
    const tags = [platform, ...modules.slice(0, 5), ...pages.slice(0, 2), ...screens.slice(0, 2)].filter(Boolean);
    scopeTags.replaceChildren(...tags.slice(0, 8).map(value => {
      const span = document.createElement('span');
      span.textContent = value;
      return span;
    }));
    if (!type) scopeNote.textContent = text('scope.note');
    else if (modules.includes('CRM') || modules.includes('Booking') || modules.includes('Cloud')) scopeNote.textContent = 'Architecture dynamique avec backend sécurisé et administration.';
    else if (type === 'app') scopeNote.textContent = 'Prototype applicatif, parcours utilisateurs et base évolutive.';
    else scopeNote.textContent = 'Solution légère possible, à enrichir selon les fonctions sélectionnées.';
    updateProgress();
  }

  function setChecked(name, values) {
    form.querySelectorAll(`[name="${CSS.escape(name)}"]`).forEach(input => { input.checked = values.includes(input.value); });
  }

  function applyLunePreset() {
    const ecosystem = form.querySelector('[name="projectType"][value="ecosystem"]');
    ecosystem.checked = true;
    setChecked('websitePages', ['Accueil','À propos','Services','Tarifs','Portfolio','FAQ','Contact','Légal','Multilingue']);
    setChecked('appScreens', ['Onboarding','Connexion','Dashboard','Profil','Catalogue','Réservation','Admin','Rapports']);
    setChecked('modules', ['Formulaires','Booking','CRM','Service Generator','Questionnaire','Avis','Espace client','Cloud','Automatisation','Analytics','Notifications']);
    setChecked('integrations', ['Google Calendar','WhatsApp','Instagram','Maps']);
    form.elements.platforms.value = 'PWA installable';
    form.elements.login.value = 'E-mail et mot de passe';
    form.elements.sensitiveData.value = 'Oui, données personnelles';
    form.elements.dataRegion.value = 'Union européenne';
    form.elements.visualStyle.value = 'Élégant et premium';
    setChecked('quality', ['Mobile','SEO','Performance','Sécurité']);
    setChecked('support', ['Formation','Maintenance','Monitoring','Evolution','Analytics review']);
    if (!form.elements.primaryAction.value) form.elements.primaryAction.value = 'Découvrir un service, effectuer un questionnaire puis demander un rendez-vous';
    if (!form.elements.userRoles.value) form.elements.userRoles.value = 'Visiteur, cliente, administrateur';
    if (!form.elements.userJourney.value) form.elements.userJourney.value = 'Découvrir les prestations → consulter les prix → faire un diagnostic guidé → choisir un service → demander un rendez-vous → recevoir une confirmation.';
    if (!form.elements.dataCollected.value) form.elements.dataCollected.value = 'Coordonnées, préférences de rendez-vous, réponses au questionnaire, consentements, avis et historique client.';
    if (!form.elements.adminNeeds.value) form.elements.adminNeeds.value = 'Services, prix, disponibilités, demandes de rendez-vous, clientes, réponses au questionnaire, avis et statistiques.';
    if (!form.elements.automationNeeds.value) form.elements.automationNeeds.value = 'Confirmation des demandes, rappels, classement CRM, demandes d’avis et suivi des demandes non traitées.';
    updateScopes();
    updateLiveScope();
    maxVisited = Math.max(maxVisited, 1);
    scheduleSave();
    showStep(1, { force: true });
  }

  function answer(name) {
    const element = form.elements[name];
    if (!element) return '';
    if (element instanceof RadioNodeList) return element.value;
    return element.value || '';
  }

  function recommendation() {
    const type = getProjectType();
    const modules = selectedValues('modules');
    const platforms = answer('platforms');
    const sensitive = answer('sensitiveData');
    const dynamic = ['Booking','CRM','Questionnaire','Espace client','Cloud','Paiement','E-commerce','Documents'].some(item => modules.includes(item));
    const mobile = /iOS|Android|PWA/.test(platforms) || type === 'app';
    let title = 'Site professionnel orienté conversion';
    let description = 'Une base responsive, rapide et structurée pour présenter l’offre, guider les visiteurs et générer des demandes.';
    const stack = ['Design responsive', 'SEO & performance'];

    if (type === 'support') {
      title = 'Refonte progressive avec audit priorisé';
      description = 'Nous recommandons d’abord un audit UX, technique et contenu, puis une migration par étapes afin de limiter les risques.';
      stack.push('Audit', 'Plan de migration', 'Tests de non-régression');
    } else if (type === 'app' && mobile) {
      title = 'Application multiplateforme avec socle cloud';
      description = 'Un prototype web/PWA permet de tester rapidement les parcours avant une préparation iOS et Android selon les fonctions natives nécessaires.';
      stack.push('PWA / Capacitor', 'API sécurisée', 'Espace utilisateur', 'Console admin');
    } else if (type === 'ecosystem' || dynamic) {
      title = 'Écosystème digital métier connecté';
      description = 'Le projet nécessite un front public, une application ou PWA, une administration centralisée et une couche cloud sécurisée pour relier les données et automatisations.';
      stack.push('Site / PWA', 'Authentification', 'Base cloud UE', 'CRM / Admin', 'Automatisations');
    } else {
      stack.push('GitHub Pages ou Firebase Hosting');
    }

    if (modules.includes('Booking')) stack.push('Moteur de réservation');
    if (modules.includes('Questionnaire')) stack.push('Diagnostic guidé');
    if (modules.includes('IA')) stack.push('Analyse IA contrôlée');
    if (/photos|santé|biométrie/i.test(answer('dataCollected')) || /photos|santé|biométrie/i.test(sensitive)) stack.push('Protection renforcée des données');
    return { title, description, stack: [...new Set(stack)] };
  }

  function section(title, entries) {
    const filtered = entries.filter(([, value]) => Array.isArray(value) ? value.length : String(value || '').trim());
    if (!filtered.length) return '';
    return `${title}\n${filtered.map(([label, value]) => `- ${label}: ${Array.isArray(value) ? value.join(', ') : value}`).join('\n')}`;
  }

  function buildBrief() {
    const rec = recommendation();
    return [
      'DEMANDE DE PROJET — AL.G.B.R.',
      `Générée le ${new Date().toLocaleString(lang)}`,
      '',
      section('1. CONTACT ET ACTIVITÉ', [
        ['Nom', answer('contactName')], ['E-mail', answer('email')], ['Téléphone', answer('phone')], ['Entreprise / projet', answer('company')], ['Secteur', answer('sector')], ['Marché', answer('market')], ['URL actuelle', answer('currentUrl')], ['Offre', answer('offer')], ['Audience', answer('audience')]
      ]),
      '',
      section('2. OBJECTIF', [
        ['Type de projet', typeLabel(getProjectType())], ['Objectif principal', answer('mainGoal')], ['Action principale', answer('primaryAction')], ['Indicateur de réussite', answer('successMetric')], ['Problèmes actuels', answer('painPoints')], ['Parcours idéal', answer('userJourney')], ['Rôles utilisateurs', answer('userRoles')]
      ]),
      '',
      section('3. PÉRIMÈTRE', [
        ['Pages du site', selectedValues('websitePages')], ['Écrans de l’application', selectedValues('appScreens')], ['Plateformes', answer('platforms')], ['Modules', selectedValues('modules')], ['Intégrations', selectedValues('integrations')], ['Connexion', answer('login')]
      ]),
      '',
      section('4. DONNÉES ET ADMINISTRATION', [
        ['Données collectées', answer('dataCollected')], ['Sensibilité', answer('sensitiveData')], ['Région de stockage', answer('dataRegion')], ['Administration', answer('adminNeeds')], ['Automatisations', answer('automationNeeds')]
      ]),
      '',
      section('5. DESIGN ET CONTENU', [
        ['Identité', answer('brandStatus')], ['Contenus', answer('contentStatus')], ['Style', answer('visualStyle')], ['Langues', answer('languages')], ['Notes de marque', answer('brandNotes')], ['Références', answer('references')], ['Ressources', answer('assetLinks')], ['Qualité', selectedValues('quality')]
      ]),
      '',
      section('6. LIVRAISON', [
        ['Budget', answer('budget')], ['Délai', answer('timeline')], ['Date de lancement', answer('launchDate')], ['Hébergement', answer('hosting')], ['Accompagnement', selectedValues('support')], ['Contraintes', answer('constraints')], ['Informations complémentaires', answer('extra')]
      ]),
      '',
      '7. RECOMMANDATION INITIALE',
      `- ${rec.title}`,
      `- ${rec.description}`,
      `- Architecture: ${rec.stack.join(' → ')}`,
      '',
      'Ce document prépare l’étude du projet. Le périmètre, les coûts et les délais seront confirmés après échange.'
    ].filter(Boolean).join('\n');
  }

  function summaryRow(label, value) {
    const wrapper = document.createElement('div');
    wrapper.className = 'summary-row';
    const dt = document.createElement('strong');
    dt.textContent = label;
    const dd = document.createElement('span');
    dd.textContent = Array.isArray(value) ? (value.join(', ') || '—') : (value || '—');
    wrapper.append(dt, dd);
    return wrapper;
  }

  function renderSummary() {
    const rec = recommendation();
    document.getElementById('recommendation-title').textContent = rec.title;
    document.getElementById('recommendation-text').textContent = rec.description;
    const stack = document.getElementById('recommendation-stack');
    stack.replaceChildren(...rec.stack.map((item, index) => {
      const span = document.createElement('span');
      span.textContent = item;
      span.dataset.order = String(index + 1);
      return span;
    }));
    const summary = document.getElementById('structured-summary');
    summary.replaceChildren(
      summaryRow('Projet', typeLabel(getProjectType())),
      summaryRow('Activité', answer('company') || answer('sector')),
      summaryRow('Objectif', answer('mainGoal')),
      summaryRow('Action principale', answer('primaryAction')),
      summaryRow('Pages', selectedValues('websitePages')),
      summaryRow('Écrans', selectedValues('appScreens')),
      summaryRow('Modules', selectedValues('modules')),
      summaryRow('Données', answer('dataCollected')),
      summaryRow('Budget / délai', [answer('budget'), answer('timeline')].filter(Boolean).join(' · ')),
      summaryRow('Support', selectedValues('support'))
    );
    updateProgress();
    const brief = buildBrief();
    const email = cfg.contact?.email || 'algbr@gmail.com';
    const mailBody = `${brief.slice(0, 5200)}\n\nLe brief complet est disponible en fichier texte.`;
    document.getElementById('email-project-brief').href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Demande de projet — ' + (answer('company') || 'Al.G.B.r.'))}&body=${encodeURIComponent(mailBody)}`;
  }

  function download(filename, content, type = 'text/plain;charset=utf-8') {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  previousButton.addEventListener('click', () => showStep(currentStep - 1, { force: true }));
  nextButton.addEventListener('click', () => showStep(currentStep + 1));
  stepItems.forEach((item, index) => item.querySelector('button').addEventListener('click', () => {
    if (index <= maxVisited) showStep(index, { force: true });
  }));

  document.getElementById('apply-lune-preset').addEventListener('click', applyLunePreset);
  document.getElementById('copy-project-brief').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(buildBrief());
      status.textContent = text('status.copied');
    } catch (_) {
      const area = document.createElement('textarea');
      area.value = buildBrief();
      document.body.append(area); area.select(); document.execCommand('copy'); area.remove();
      status.textContent = text('status.copied');
    }
  });
  document.getElementById('download-project-brief').addEventListener('click', () => download(`brief-${(answer('company') || 'projet').replace(/[^a-z0-9]+/gi,'-').toLowerCase()}.txt`, buildBrief()));
  document.getElementById('download-project-json').addEventListener('click', () => {
    const payload = { exportedAt: new Date().toISOString(), answers: serializeForm(), recommendation: recommendation() };
    download(`brief-${(answer('company') || 'projet').replace(/[^a-z0-9]+/gi,'-').toLowerCase()}.json`, JSON.stringify(payload, null, 2), 'application/json;charset=utf-8');
  });

  document.getElementById('email-project-brief').addEventListener('click', async event => {
    const endpoint = cfg.contact?.projectSubmissionEndpoint;
    if (!endpoint) return;
    event.preventDefault();
    const payload = { submittedAt: new Date().toISOString(), answers: serializeForm(), recommendation: recommendation(), brief: buildBrief() };
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      status.textContent = text('status.sent');
      document.getElementById('submission-note').textContent = text('status.sent');
    } catch (_) {
      status.textContent = text('status.sendError');
      window.location.href = event.currentTarget.href;
    }
  });

  document.getElementById('clear-draft').addEventListener('click', () => {
    if (!window.confirm(text('confirm.clear'))) return;
    localStorage.removeItem(storageKey);
    form.reset();
    currentStep = 0; maxVisited = 0;
    updateScopes(); updateLiveScope(); showStep(0, { force: true });
    status.textContent = text('status.cleared');
  });

  form.addEventListener('input', event => {
    event.target.removeAttribute('aria-invalid');
    updateScopes();
    updateLiveScope();
    scheduleSave();
  });
  form.addEventListener('change', () => { updateScopes(); updateLiveScope(); scheduleSave(); });
  form.addEventListener('submit', event => event.preventDefault());

  document.querySelectorAll('.project-link').forEach(link => {
    const url = cfg.projects?.[link.dataset.project];
    if (url) link.href = url;
  });

  const params = new URLSearchParams(location.search);
  loadDraft();
  const requestedType = params.get('type');
  if (requestedType && ['website','app','ecosystem','support'].includes(requestedType)) {
    const radio = form.querySelector(`[name="projectType"][value="${requestedType}"]`);
    if (radio) radio.checked = true;
  }
  if (params.get('preset') === 'lune') {
    requestAnimationFrame(applyLunePreset);
  } else {
    updateScopes();
    updateLiveScope();
    showStep(currentStep, { force: true });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  applyTranslations();
})();
