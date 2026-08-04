const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const f={company:$('#company'),website:$('#website'),location:$('#location'),industry:$('#industry'),headline:$('#headline'),primary:$('#primary'),accent:$('#accent'),traffic:$('#traffic'),conversion:$('#conversion'),uplift:$('#uplift')};
let screenshot='';
const labels={assistant:'KI-Assistent',emergency:'24/7 Notdienst',booking:'Online-Termine',quote:'Angebotsassistent',whatsapp:'WhatsApp',dashboard:'Dashboard'};
function calc(){const t=+f.traffic.value,c=+f.conversion.value,u=+f.uplift.value,today=Math.round(t*c/100),future=Math.round(today*(1+u/100));return{t,c,u,today,future,gain:future-today,qualified:Math.round(future*.67)}}
function email(){return `Betreff: Eine digitale Idee für ${f.company.value}

Guten Tag,

bei der Betrachtung Ihrer Website ist mir aufgefallen, dass Ihr Unternehmen einen professionellen und vertrauenswürdigen Eindruck vermittelt.

Deshalb habe ich eine kurze, personalisierte Konzeptstudie vorbereitet. Dabei geht es ausdrücklich nicht um einen kompletten Website-Relaunch.

Ihre bestehende Website bleibt erhalten und wird lediglich um ausgewählte digitale Module ergänzt, zum Beispiel:

• KI-gestützte Erstberatung
• strukturierte 24/7-Anfragen
• Online-Terminbuchung
• intelligente Angebotsanfragen
• ein übersichtliches Performance-Dashboard

Die Präsentation zeigt, wie Ihre eigene Website bereits in 4–6 Wochen aussehen könnte und welchen konkreten Vorteil die Erweiterungen für Ihre Kunden und Ihr Team bieten können.

Gerne zeige ich Ihnen die interaktive Version in einem unverbindlichen Termin von etwa 15 Minuten.

Mit freundlichen Grüßen

Guy B.
ALGBr`}
function update(){
 document.documentElement.style.setProperty('--primary',f.primary.value);document.documentElement.style.setProperty('--accent',f.accent.value);
 const c=f.company.value||'Unternehmen',h=f.headline.value||'Ihre Website. Intelligenter.',r=calc();
 ['#pCompany','#todayCompany','#dashCompany','#coverCompany'].forEach(s=>$(s).textContent=c);
 ['#pHeadline','#todayHeadline'].forEach(s=>$(s).textContent=h);
 $('#pWebsite').textContent=f.website.value;$('#pLocation').textContent=f.location.value;$('#coverLocation').textContent=f.location.value;$('#pIndustry').textContent=f.industry.value;
 $('#trafficOut').textContent=r.t.toLocaleString('de-DE');$('#conversionOut').textContent=r.c+'%';$('#upliftOut').textContent=r.u+'%';
 $('#extraLeads').textContent='+'+r.gain;$('#futureLeads').textContent=r.future;$('#gainLeads').textContent='+'+r.gain;$('#qualifiedLeads').textContent=r.qualified;$('#emailText').value=email();
 [$('#heroImage'),$('#todayImage')].forEach(el=>{el.style.backgroundImage=screenshot?`url("${screenshot}")`:'';el.querySelector('.fallback').style.display=screenshot?'none':'block'});
 $$('[data-demo]').forEach(b=>{const c=$(`[data-module="${b.dataset.demo}"]`);b.style.display=c&&c.checked?'grid':'none'});
}
Object.values(f).forEach(x=>x.addEventListener('input',update));$$('[data-module]').forEach(x=>x.addEventListener('change',update));
$('#screenshot').addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;const r=new FileReader();r.onload=()=>{screenshot=r.result;update()};r.readAsDataURL(file)});
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>{$$('[data-view]').forEach(x=>x.classList.remove('active'));b.classList.add('active');$$('.page').forEach(x=>x.classList.remove('active'));$('#'+b.dataset.view+'View').classList.add('active')}));
function openDemo(type){
 const descriptions={
 assistant:['KI-ASSISTENT','Wie können wir helfen?',['🔥 Heizung ausgefallen','🌡️ Neue Heizung / Wärmepumpe','📅 Termin vereinbaren']],
 emergency:['NOTDIENST 24/7','Störung strukturiert erfassen',['Heizung ausgefallen','Kein Warmwasser','Fehlercode angezeigt']],
 booking:['ONLINE-TERMIN','Passenden Termin auswählen',['Di 09:00','Di 11:00','Mi 14:00','Do 10:00','Do 15:00','Fr 09:00']],
 quote:['ANGEBOTSASSISTENT','Projekt vorqualifizieren',['Wärmepumpe','Neue Heizung','Badmodernisierung']],
 whatsapp:['WHATSAPP','Schneller Kontakt',['Nachricht vorbereiten']],
 dashboard:['DASHBOARD','Ergebnisse sichtbar machen',['Anfragen','Termine','Reaktionszeit']]
 };
 const d=descriptions[type];
 $('.modal-content').innerHTML=`<span class="demo-kicker">${d[0]}</span><h2>${d[1]}</h2><div class="${type==='booking'?'calendar':'demo-buttons'}">${d[2].map(x=>`<button>${x}</button>`).join('')}</div><div class="demo-result" hidden></div>`;
 $('.modal').hidden=false;
 $$('.modal-content button').forEach(b=>b.onclick=()=>{if(type==='booking'){$$('.calendar button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')}const result=$('.demo-result');result.hidden=false;result.textContent=type==='booking'?`Termin bestätigt: ${b.textContent}. Der Kunde erhält eine Bestätigung.`:`Ergebnis: ${b.textContent} wurde strukturiert erfasst und an das Unternehmen übergeben.`});
}
$$('[data-demo]').forEach(b=>b.addEventListener('click',()=>openDemo(b.dataset.demo)));$('.modal-close').onclick=()=>$('.modal').hidden=true;$('.modal').onclick=e=>{if(e.target===$('.modal'))$('.modal').hidden=true};
$('#copyEmail').onclick=async()=>{await navigator.clipboard.writeText($('#emailText').value);$('#copyEmail').textContent='Kopiert ✓';setTimeout(()=>$('#copyEmail').textContent='E-Mail kopieren',1200)};
$('#saveProject').onclick=()=>{const data={...Object.fromEntries(Object.entries(f).map(([k,v])=>[k,v.value])),modules:Object.fromEntries([...$$('[data-module]')].map(x=>[x.dataset.module,x.checked])),screenshot};localStorage.setItem('algbrVisionProject',JSON.stringify(data));alert('Projekt lokal gespeichert.')};
function standalone(){
 const r=calc(),mods=[...$$('[data-module]:checked')].map(x=>labels[x.dataset.module]);
 return `<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${f.company.value} — ALGBr Vision</title><style>body{margin:0;font-family:Arial;background:#eef2f7}.page{max-width:1100px;margin:30px auto;background:white;box-shadow:0 20px 60px #18345333}.top{padding:18px 30px;background:${f.primary.value};color:white;display:flex;justify-content:space-between}.hero{min-height:520px;padding:65px 380px 60px 45px;color:white;position:relative;background:linear-gradient(90deg,#06182ddd,#06182d55),${screenshot?`url("${screenshot}") center/cover`:'linear-gradient(135deg,#75685c,#c4b4a3)'}.hero h1{font-size:46px}.dock{position:absolute;right:22px;top:22px;width:280px;background:#fffffff2;padding:14px;color:#172033}.dock button{display:block;width:100%;padding:12px;margin:7px 0;background:#fff;border:1px solid #d5e0eb;text-align:left}.stats{display:grid;grid-template-columns:repeat(4,1fr)}.stats div{padding:25px;text-align:center;border-right:1px solid #ddd}.stats strong,.stats span{display:block}.stats strong{font-size:28px;color:${f.primary.value}}@media(max-width:700px){.hero{padding:40px 20px 360px}.dock{left:20px;right:20px;bottom:20px;top:auto;width:auto}.stats{grid-template-columns:1fr 1fr}}</style><div class="page"><div class="top"><strong>${f.company.value}</strong><span>${f.website.value}</span></div><section class="hero"><h1>${f.headline.value}</h1><p>So könnte Ihre Website bereits in 4–6 Wochen aussehen.</p><aside class="dock"><h3>ALGBr MODULE</h3>${mods.map(m=>`<button>${m}</button>`).join('')}</aside></section><div class="stats"><div><strong>24/7</strong><span>Erreichbarkeit</span></div><div><strong>+${r.gain}</strong><span>zusätzliche Anfragen*</span></div><div><strong>-40%</strong><span>Routineaufwand*</span></div><div><strong>messbar</strong><span>Dashboard</span></div></div></div></html>`;
}
$('#exportDemo').onclick=()=>{const blob=new Blob([standalone()],{type:'text/html'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ALGBr-Vision-'+(f.company.value||'Unternehmen').replace(/[^a-z0-9]+/gi,'-')+'.html';a.click();URL.revokeObjectURL(a.href)};
const saved=localStorage.getItem('algbrVisionProject');if(saved){try{const d=JSON.parse(saved);Object.entries(f).forEach(([k,v])=>{if(d[k]!=null)v.value=d[k]});Object.entries(d.modules||{}).forEach(([k,v])=>{const el=$(`[data-module="${k}"]`);if(el)el.checked=v});screenshot=d.screenshot||''}catch{}}
update();