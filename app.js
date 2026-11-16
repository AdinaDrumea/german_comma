"use strict";
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const app=$("#app");

// A vertical bar directly after a word means: comma after this word.
// [wrong=>right] marks the single spelling/word error in Fehlerdetektiv questions.
function item(id,marked,why){return {id,marked,why};}
function errorItem(id,marked,why){return {id,marked,why,error:true};}

const GROUPS=[
  {id:"signalwort",n:1,icon:"🔔",title:"Komma vor dem Signalwort",subtitle:"Hauptsatz zuerst: Erkenne, wo der Nebensatz beginnt.",example:"Wir bleiben hier, weil der Nebel dichter wird.",coverage:"20 Signalwörter aus der Lernliste",items:[
    item("s01","Ich weiss| dass du die Karte eingepackt hast.","Vor dass beginnt der Nebensatz."),
    item("s02","Wir bleiben auf dem Weg| weil der Nebel dichter wird.","Vor weil beginnt der Nebensatz."),
    item("s03","Die Gruppe geht langsam| obwohl sie spät dran ist.","Vor obwohl beginnt der Nebensatz."),
    item("s04","Ich rufe dich an| wenn wir angekommen sind.","Vor wenn beginnt der Nebensatz."),
    item("s05","Bleib am Wegweiser| falls du die Gruppe verlierst.","Vor falls beginnt der Nebensatz."),
    item("s06","Ich weiss nicht| ob der Pfad geöffnet ist.","Vor ob beginnt die indirekte Frage."),
    item("s07","Wir pfeifen laut| damit der Förster uns hört.","Vor damit beginnt der Zwecksatz."),
    item("s08","Wir prüfen die Karte| bevor wir weitergehen.","Vor bevor beginnt der Nebensatz."),
    item("s09","Wir gehen weiter| nachdem der Nebel dünner geworden ist.","Vor nachdem beginnt der Nebensatz."),
    item("s10","Die Kinder bleiben zusammen| während der Leiter die Karte prüft.","Vor während beginnt der Nebensatz."),
    item("s11","Wir sind vorsichtiger| seitdem der Weg rutschig geworden ist.","Vor seitdem beginnt der Nebensatz."),
    item("s12","Wir warten hier| bis die Sicht besser wird.","Vor bis beginnt der Nebensatz."),
    item("s13","Ich melde mich| sobald wir wieder Empfang haben.","Vor sobald beginnt der Nebensatz."),
    item("s14","Wir bleiben am sicheren Ort| solange der Nebel dicht ist.","Vor solange beginnt der Nebensatz."),
    item("s15","Wir kehren um| da der Hang zu steil ist.","Vor da beginnt der Begründungssatz."),
    item("s16","Es wurde plötzlich kalt| als die Sonne unterging.","Vor als beginnt der Nebensatz."),
    item("s17","Du findest den Weg leichter| indem du auf die Markierungen achtest.","Vor indem beginnt der Nebensatz."),
    item("s18","Der Nebel wurde dichter| sodass wir kaum noch etwas sahen.","Vor sodass beginnt der Folgesatz."),
    item("s19","Wir gehen heute nicht weit| zumal Regen angekündigt ist.","Vor zumal beginnt der zusätzliche Grund."),
    item("s20","Du kannst mitkommen| sofern du feste Schuhe trägst.","Vor sofern beginnt der Bedingungssatz.")
  ]},

  {id:"verweiswort",n:2,icon:"👉",title:"Komma nach daran, darüber & Co.",subtitle:"Hier sollst du nicht nach einem zweiten Signalwort suchen. Meist folgt direkt eine Infinitivgruppe.",example:"Es spricht nichts dagegen, hier zu warten.",coverage:"18 ohne zweites Signalwort · 8 mit zweitem Signalwort",items:[
    item("v01","Denk daran| die Karte mitzunehmen.","Das Komma steht nach daran; danach folgt direkt die Infinitivgruppe."),
    item("v02","Achte darauf| langsam zu gehen.","Das Komma steht nach darauf; es folgt kein dass/ob/was."),
    item("v03","Wir sprechen darüber| morgen früher loszugehen.","Das Komma steht nach darüber."),
    item("v04","Sie träumt davon| den Gipfel zu erreichen.","Das Komma steht nach davon."),
    item("v05","Der Förster warnt davor| den Weg zu verlassen.","Das Komma steht nach davor."),
    item("v06","Ich bin dafür| den markierten Weg zu nehmen.","Das Komma steht nach dafür."),
    item("v07","Es spricht nichts dagegen| hier zu warten.","Das Komma steht nach dagegen - ohne zweites Signalwort."),
    item("v08","Sie entschliesst sich dazu| früher umzukehren.","Das Komma steht nach dazu."),
    item("v09","Die Aufgabe besteht darin| den sicheren Weg zu finden.","Das Komma steht nach darin."),
    item("v10","Er hilft dabei| die Karte richtig zu lesen.","Das Komma steht nach dabei."),
    item("v11","Wir rechnen damit| rechtzeitig anzukommen.","Hier ist damit ein Verweiswort; das Komma steht danach."),
    item("v12","Es geht darum| ruhig zu bleiben.","Das Komma steht nach darum."),
    item("v13","Sie sehnt sich danach| wieder Sonne zu sehen.","Das Komma steht nach danach."),
    item("v14","Er leidet darunter| so lange warten zu müssen.","Das Komma steht nach darunter."),
    item("v15","Sie liebt es| im Herbst zu wandern.","es ist hier ein Verweiswort; die Infinitivgruppe wird abgetrennt."),
    item("v16","Es kommt darauf an| ruhig zu bleiben.","Das Komma steht nach der ganzen Wendung darauf an, nicht direkt nach darauf."),
    item("v17","Der Erfolg hängt davon ab| die Karte richtig zu lesen.","Das Komma steht nach der ganzen Wendung davon ab."),
    item("v18","Wir arbeiten daran| den Plan verständlicher zu machen.","Das Komma steht nach daran; danach folgt eine Infinitivgruppe."),
    item("v19","Denk daran| dass du die Karte einpackst.","daran gehört zum ersten Satzteil; danach folgt ein dass-Satz."),
    item("v20","Wir warten darauf| dass der Nebel dünner wird.","Das Komma steht nach darauf."),
    item("v21","Wir sprechen darüber| was gestern passiert ist.","Das Komma steht nach darüber; was startet den Nebensatz."),
    item("v22","Es hängt davon ab| ob der Weg sicher ist.","Das Komma steht nach der ganzen Wendung davon ab."),
    item("v23","Es spricht nichts dagegen| dass wir früher umkehren.","Das Komma steht nach dagegen."),
    item("v24","Wir rechnen damit| dass die Sicht bald besser wird.","Hier ist damit ein Verweiswort; danach beginnt der dass-Satz."),
    item("v25","Das Problem besteht darin| dass niemand die Route kennt.","Das Komma steht nach darin."),
    item("v26","Wir vermeiden Fehler dadurch| dass wir die Karte vorher prüfen.","Das Komma steht nach dadurch; danach beginnt der dass-Satz.")
  ]},

  {id:"zuerst",n:3,icon:"🌫️",title:"Nebensatz zuerst",subtitle:"Das Signalwort steht vorne. Das Komma kommt erst am Ende des Nebensatzes.",example:"Wenn der Nebel dichter wird, kehren wir um.",coverage:"12 Satzanfänge mit unterschiedlichen Einleitern",items:[
    item("z01","Wenn der Nebel dichter wird| kehren wir um.","Der wenn-Satz endet bei wird."),
    item("z02","Weil der Weg rutschig ist| gehen wir langsam.","Der weil-Satz steht am Anfang und endet bei ist."),
    item("z03","Obwohl es regnet| bleiben wir auf dem markierten Weg.","Der obwohl-Satz endet bei regnet."),
    item("z04","Falls du die Gruppe verlierst| bleib am Wegweiser.","Der falls-Satz endet bei verlierst."),
    item("z05","Bevor wir losgehen| prüfen wir die Wetterlage.","Der bevor-Satz endet bei losgehen."),
    item("z06","Nachdem der Regen aufgehört hat| gehen wir weiter.","Der nachdem-Satz endet bei hat."),
    item("z07","Während der Leiter die Karte prüft| warten alle ruhig.","Der während-Satz endet bei prüft."),
    item("z08","Sobald die Sicht besser wird| setzen wir die Wanderung fort.","Der sobald-Satz endet bei wird."),
    item("z09","Solange der Nebel dicht bleibt| verlassen wir den Weg nicht.","Der solange-Satz endet bei bleibt."),
    item("z10","Da der Hang sehr steil ist| kehren wir zurück.","Der da-Satz endet bei ist."),
    item("z11","Als die Sonne unterging| wurde es schnell kalt.","Der als-Satz endet bei unterging."),
    item("z12","Sofern alle einverstanden sind| machen wir hier Pause.","Der sofern-Satz endet bei sind.")
  ]},

  {id:"relativ",n:4,icon:"🧩",title:"Einschub & Relativsatz",subtitle:"Ein Satz steckt mitten im Hauptsatz. Er braucht vorne und hinten ein Komma.",example:"Die Vögel, die am See rasten, sammeln Kraft.",coverage:"12 Übungen mit zwei Kommas",items:[
    item("r01","Die Vögel| die am See rasten| sammeln neue Kraft.","Der Relativsatz die ... rasten wird mit zwei Kommas eingerahmt."),
    item("r02","Der Förster| der den schmalen Pfad kennt| führt die Gruppe zurück.","Der der-Satz ist ein Einschub."),
    item("r03","Die Blätter| die noch grün sind| bleiben länger am Baum.","Der Relativsatz steht mitten im Hauptsatz."),
    item("r04","Die Klasse| die das Wetter beobachtet| schreibt alles ins Tagebuch.","Der eingeschobene die-Satz braucht zwei Kommas."),
    item("r05","Der Kompass| der in meinem Rucksack liegt| funktioniert noch gut.","Der Zusatz der ... liegt wird eingerahmt."),
    item("r06","Die Pflanzen| die spät blühen| brauchen noch milde Tage.","Der Relativsatz braucht zwei Kommas."),
    item("r07","Der Weg| der durch den Wald führt| ist im Nebel schwer zu erkennen.","Der der-Satz ist eingeschoben."),
    item("r08","Die Kinder| die leise warten| sehen mehrere Zugvögel.","Ohne den Einschub bleibt: Die Kinder sehen mehrere Zugvögel."),
    item("r09","Die Warnung| die am Wegweiser hängt| ist gut sichtbar.","Der Relativsatz wird vorne und hinten abgetrennt."),
    item("r10","Unser Ziel| das hinter dem Wald liegt| ist noch weit entfernt.","Der das-Satz steht eingeschoben."),
    item("r11","Mia| die die Karte trägt| geht vorne.","Der eingeschobene Relativsatz braucht zwei Kommas."),
    item("r12","Der Pfad| den wir gestern genommen haben| ist heute gesperrt.","Der den-Satz wird eingerahmt.")
  ]},

  {id:"weitere",n:5,icon:"🧭",title:"Andere Komma-Signale",subtitle:"aber/denn/sondern, Infinitivgruppen, Aufzählungen - und Sätze, die gar kein Komma brauchen.",example:"Wir gehen langsam, um nicht auszurutschen.",coverage:"18 Übungen · einige bewusst ohne Komma",items:[
    item("w01","Wir wollten weitergehen| aber der Weg war gesperrt.","Vor aber steht hier ein Komma."),
    item("w02","Wir bleiben hier| denn die Sicht ist schlecht.","Vor denn steht ein Komma."),
    item("w03","Wir gehen nicht weiter| sondern warten auf bessere Sicht.","Vor sondern steht ein Komma."),
    item("w04","Er wollte abkürzen| doch die Gruppe blieb auf dem Weg.","Vor doch steht hier ein Komma."),
    item("w05","Wir gehen langsam| um nicht auszurutschen.","Die um-zu-Gruppe wird mit Komma abgetrennt."),
    item("w06","Sie ging weiter| ohne auf die Karte zu schauen.","Die ohne-zu-Gruppe wird mit Komma abgetrennt."),
    item("w07","Wir warten| statt im Nebel weiterzugehen.","Die statt-zu-Gruppe wird mit Komma abgetrennt."),
    item("w08","Er blieb am Weg| anstatt allein weiterzulaufen.","Die anstatt-zu-Gruppe wird mit Komma abgetrennt."),
    item("w09","Uns blieb nichts übrig| ausser auf Hilfe zu warten.","Die ausser-zu-Gruppe wird mit Komma abgetrennt."),
    item("w10","Sie konnte nichts Besseres tun| als auf dem Weg zu bleiben.","Vor der als-Infinitivgruppe steht ein Komma."),
    item("w11","Wir brauchen Karte| Kompass| Wasser und Jacke.","In einer Aufzählung stehen Kommas zwischen gleichrangigen Teilen; vor und steht hier keines."),
    item("w12","Mia| komm bitte zurück.","Die Anrede Mia wird mit Komma abgetrennt."),
    item("w13","Frau Meier| unsere Lehrerin| kommt mit.","Die Apposition unsere Lehrerin wird mit zwei Kommas eingerahmt."),
    item("w14","Der Nebel ist dichter als gestern.","Ein einfacher Vergleich mit als braucht kein Komma."),
    item("w15","Der Nebel ist dichter| als wir erwartet hatten.","Hier folgt auf als ein ganzer Nebensatz; deshalb steht ein Komma."),
    item("w16","Wir nehmen Karte und Kompass mit.","Vor und steht in dieser einfachen Reihung kein Komma."),
    item("w17","Wir bleiben hier oder kehren gemeinsam um.","Vor oder steht in dieser einfachen Reihung kein Komma."),
    item("w18","Wir nehmen sowohl Wasser als auch eine Jacke mit.","Bei sowohl ... als auch steht hier kein Komma.")
  ]},

  {id:"fehler",n:6,icon:"🔎",title:"Fehlerdetektiv",subtitle:"Setze alle Kommas UND finde das falsche Wort. Hier steckt immer genau ein Wortfehler drin.",example:"Der Leiter glaubt, dass er den Weg kennt. · das → dass",coverage:"24 Übungen · Komma + Rechtschreibung/Grammatik",items:[
    errorItem("f01","Der Gruppenleiter glaubt| [das=>dass] er eine Abkürzung kennt.","dass leitet einen Nebensatz ein; das wäre hier falsch."),
    errorItem("f02","Wir bleiben am Weg| [den=>denn] der Nebel ist sehr dicht.","denn nennt hier einen Grund und wird mit zwei n geschrieben."),
    errorItem("f03","Ihr [seit=>seid] vorsichtig| weil der Weg nass ist.","Ihr seid wird mit d geschrieben."),
    errorItem("f04","Wir gehen erst weiter| [wen=>wenn] der Nebel dünner wird.","wenn leitet hier einen Nebensatz ein."),
    errorItem("f05","Sie geben zu| dass sie die Warnhinweise unterschätzt haben| und wollen es nie [wider=>wieder] tun.","wieder bedeutet nochmals; wider bedeutet gegen."),
    errorItem("f06","Da ihre [Handy's=>Handys] kaum Empfang haben| können sie keinen Onlineplan öffnen.","Der Plural lautet Handys - ohne Apostroph."),
    errorItem("f07","An einem frühen [herbstmorgen=>Herbstmorgen] liegt dichter Nebel über dem Gebirge| sodass die Sicht schlecht ist.","Herbstmorgen ist ein Nomen und wird grossgeschrieben."),
    errorItem("f08","Die Sicht beträgt kaum fünfzig [meter=>Meter]| deshalb bleibt die Gruppe auf dem Weg.","Meter ist ein Nomen und wird grossgeschrieben."),
    errorItem("f09","Wenn man sich verirrt| gilt eine wichtige [grundregel=>Grundregel]: Man bleibt an einem sicheren Ort.","Grundregel ist ein Nomen und wird grossgeschrieben."),
    errorItem("f10","Kurze Zeit später hört ein Förster die [signale=>Signale]| die aus dem Nebel kommen.","Signale ist ein Nomen und wird grossgeschrieben."),
    errorItem("f11","Die Gruppe entscheidet sich| den markierten Weg nicht zu [verlaßen=>verlassen].","In der Schweiz wird ss statt ß geschrieben: verlassen."),
    errorItem("f12","Der Leiter sagt| sie [müßten=>müssten] nur nach Norden gehen.","In der Schweiz wird ss statt ß geschrieben: müssten."),
    errorItem("f13","Obwohl der alte [Kompaß=>Kompass] in eine andere Richtung zeigt| geht der Leiter weiter.","In der Schweiz wird ss statt ß geschrieben: Kompass."),
    errorItem("f14","Die Forschenden erklären| [das=>dass] warme Herbsttage Folgen haben.","Nach erklären folgt hier ein dass-Satz."),
    errorItem("f15","Die Klasse bleibt drinnen| [den=>denn] draussen regnet es stark.","denn verbindet hier zwei Hauptsätze."),
    errorItem("f16","Wir kennen den Weg| [seid=>seit] wir die neue Karte haben.","seit bezeichnet Zeit; seid ist eine Form von sein."),
    errorItem("f17","Ich weiss nicht| [wen=>wann] der Förster zurückkommt.","In einer indirekten Zeitfrage heisst es wann, nicht wen."),
    errorItem("f18","Wir warten hier| weil das Wetter [nähmlich=>nämlich] schlechter wird.","nämlich wird ohne h nach dem n geschrieben."),
    errorItem("f19","Der Leiter glaubt| dass die Sicht [warscheinlich=>wahrscheinlich] besser wird.","wahrscheinlich wird mit h nach wa geschrieben."),
    errorItem("f20","Wir kehren um| weil das der [Standart=>Standard] für diese Route ist.","Standard endet auf d."),
    errorItem("f21","Wenn das Wetter besser [währe=>wäre]| könnten wir weitergehen.","wäre ist die richtige Form von sein."),
    errorItem("f22","Die Gruppe nimmt den [einzigsten=>einzigen] sicheren Weg| obwohl er länger ist.","Standardsprachlich heisst es einzigen, nicht einzigsten."),
    errorItem("f23","Wir bleiben zusammen| [obwol=>obwohl] der Weg breit genug ist.","obwohl wird mit h geschrieben."),
    errorItem("f24","Der Förster erklärt| warum die [ursprüngliche=>ursprüngliche] Route sicherer ist.","Hier ist absichtlich nur das Komma zu finden; das markierte Wort ist bereits korrekt.")
  ]}
];

// Replace f24 with a genuine error at runtime so every Fehlerdetektiv item has exactly one error.
GROUPS.find(g=>g.id==="fehler").items[23]=errorItem("f24","Der Förster erklärt| warum die [ursprungliche=>ursprüngliche] Route sicherer ist.","ursprüngliche braucht den Umlaut ü.");

const STORE_KEY="kommaDetektivePrototypeV3";
let store=loadStore();
let state={view:"home"};

function loadStore(){try{return JSON.parse(localStorage.getItem(STORE_KEY))||{results:{}};}catch{return {results:{}};}}
function saveStore(){try{localStorage.setItem(STORE_KEY,JSON.stringify(store));}catch{}}
function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}

function parseMarked(marked){
  const raw=marked.trim().split(/\s+/); const words=[]; const targets=[]; let errorIndex=null; let replacement=null;
  raw.forEach(tok=>{
    let comma=false; if(tok.endsWith("|")){comma=true;tok=tok.slice(0,-1);} else if(tok.includes("|")){const pos=tok.indexOf("|"); if(pos===tok.length-1){comma=true;tok=tok.slice(0,-1);}}
    const m=tok.match(/^\[(.+?)=>(.+?)\]([.!?;:]*)$/);
    if(m){errorIndex=words.length;replacement=m[2]+m[3];tok=m[1]+m[3];}
    words.push(tok); if(comma)targets.push(words.length-1);
  });
  return {words,targets,errorIndex,replacement};
}

function validateData(){
  const ids=new Set(); const issues=[];
  for(const g of GROUPS){for(const it of g.items){if(ids.has(it.id))issues.push(`duplicate ${it.id}`);ids.add(it.id);const p=parseMarked(it.marked);if(it.error && (p.errorIndex===null||!p.replacement))issues.push(`missing error ${it.id}`);if(!it.error&&p.errorIndex!==null)issues.push(`unexpected error ${it.id}`);if(p.targets.some(i=>i<0||i>=p.words.length))issues.push(`bad comma ${it.id}`);}}
  if(issues.length) throw new Error(issues.join("\n"));
}
validateData();

function showHome(){
  state={view:"home"};
  const total=GROUPS.reduce((n,g)=>n+g.items.length,0);
  app.innerHTML=`<section class="hero card"><div><p class="eyebrow">Klick statt Schreiben</p><h1>Wo gehört das Komma hin?</h1><p class="lead">Klicke auf das <strong>Wort, nach dem ein Komma stehen muss</strong>. Manche Sätze brauchen zwei Kommas - und manche bewusst gar keines. Im Fehlerdetektiv markierst du zusätzlich das falsche Wort.</p><div class="ruleHint">Besonders wichtig: In Training 2 folgen nach <strong>daran, darüber, dagegen ...</strong> überwiegend <strong>keine</strong> zweiten Signalwörter. So kann man die Lösung nicht einfach an <em>dass/ob/was</em> erkennen.</div></div><div class="heroIcon">🕵️‍♀️🍂</div></section><div class="heading"><div><p class="eyebrow">6 Lernwege · ${total} Sätze</p><h2>Wähle ein Training</h2></div><button class="primary" id="allBtn" type="button">Alle ${total} mischen</button></div><div class="grid" id="grid"></div>`;
  const grid=$("#grid"); GROUPS.forEach(g=>grid.appendChild(groupCard(g))); $("#allBtn").addEventListener("click",()=>startQuiz("all")); window.scrollTo({top:0,behavior:"smooth"});
}
function groupCard(g){
  const el=document.createElement("article"); el.className="group card"; const r=store.results[g.id]; const last=r?`Letzter Lauf: ${r.correct}/${r.total} richtig (${r.percent}%) · ${r.mistakes?.length||0} Fehler`:`Noch kein Ergebnis gespeichert`;
  el.innerHTML=`<div class="badge">${g.icon}</div><h3>${g.n}. ${esc(g.title)}</h3><p>${esc(g.subtitle)}</p><p class="example">${esc(g.example)}</p><p class="coverage">${esc(g.coverage)}</p><div class="groupFoot"><span class="score">${last}</span><button class="primary start" type="button">${g.items.length} Sätze starten</button>${r?.mistakes?.length?'<button class="secondary mistakes" type="button">Nur letzte Fehler</button>':''}</div>`;
  $(".start",el).addEventListener("click",()=>startQuiz(g.id)); $(".mistakes",el)?.addEventListener("click",()=>startQuiz(g.id,r.mistakes)); return el;
}
function startQuiz(groupId,onlyIds=null){
  let items,label; if(groupId==="all"){items=GROUPS.flatMap(g=>g.items.map(it=>({...it,groupId:g.id})));label=`Alle ${items.length} gemischt`;} else {const g=GROUPS.find(x=>x.id===groupId);items=g.items.map(it=>({...it,groupId:g.id}));label=g.title;}
  if(onlyIds)items=items.filter(x=>onlyIds.includes(x.id));
  state={view:"quiz",groupId,label,items:shuffle(items),index:0,correct:0,mistakes:[],selectedCommas:new Set(),selectedError:null,checked:false,tool:"comma",retry:Boolean(onlyIds)}; renderQuestion();
}
function renderQuestion(){
  const it=state.items[state.index], g=GROUPS.find(x=>x.id===it.groupId), p=parseMarked(it.marked); it._p=p;
  const zero=p.targets.length===0; const prompt=it.error?"Setze alle nötigen Kommas und markiere das falsche Wort.":zero?"Braucht dieser Satz ein Komma? Wenn nicht, wähle nichts und prüfe.":p.targets.length>1?"Klicke auf die Wörter, nach denen die Kommas kommen.":"Klicke auf das Wort, nach dem das Komma kommt.";
  app.innerHTML=`<section class="quiz"><div class="quizTop"><button class="ghost" id="backBtn" type="button">← Übersicht</button><span class="pill">${state.retry?'Nur Fehler · ':''}${esc(state.label)}</span></div><div class="progress card"><div class="progressMeta"><span>Satz ${state.index+1} von ${state.items.length}</span><span>${state.correct} richtig</span></div><div class="track"><div class="bar" id="bar" style="width:${(state.index/state.items.length)*100}%"></div></div></div><section class="question card"><p class="eyebrow">${g.n}. ${esc(g.title)}</p><h2>${prompt}</h2>${it.error?'<p class="subPrompt">Benutze zuerst «Komma setzen» und dann «Fehlerwort».</p><div class="toolSwitch" id="toolSwitch"><button class="tool active" data-tool="comma" type="button">✂️ Komma setzen</button><button class="tool" data-tool="error" type="button">🔎 Fehlerwort</button></div>':''}<div class="sentence" id="sentence"></div><div class="hint" id="hint"></div><div class="feedback" id="feedback" hidden></div><div class="qActions"><button class="ghost" id="rulesBtn" type="button">ⓘ Regeln</button><button class="secondary" id="clearBtn" type="button">Auswahl löschen</button><button class="primary" id="checkBtn" type="button">Prüfen</button><button class="primary" id="nextBtn" type="button" hidden>Weiter →</button></div></section></section>`;
  const sentence=$("#sentence"); p.words.forEach((w,i)=>{const wrap=document.createElement("span");wrap.className="wordWrap";const b=document.createElement("button");b.className="word";b.type="button";b.textContent=w;b.dataset.i=i;b.addEventListener("click",()=>selectWord(i,it));wrap.appendChild(b);sentence.appendChild(wrap);});
  $$(".tool").forEach(b=>b.addEventListener("click",()=>{if(state.checked)return;state.tool=b.dataset.tool;$$('.tool').forEach(x=>x.classList.toggle('active',x===b));updateHint(it);}));
  $("#backBtn").addEventListener("click",showHome);$("#rulesBtn").addEventListener("click",openInfo);$("#clearBtn").addEventListener("click",()=>{if(state.checked)return;state.selectedCommas.clear();state.selectedError=null;refresh(it);});$("#checkBtn").addEventListener("click",()=>check(it));$("#nextBtn").addEventListener("click",nextQuestion);refresh(it);
}
function selectWord(i,it){if(state.checked)return;if(it.error&&state.tool==="error")state.selectedError=state.selectedError===i?null:i;else{if(state.selectedCommas.has(i))state.selectedCommas.delete(i);else state.selectedCommas.add(i);}refresh(it);}
function refresh(it){
  const p=it._p; $$(".word").forEach(b=>{const i=Number(b.dataset.i);b.classList.toggle("commaSel",state.selectedCommas.has(i));b.classList.toggle("errorSel",state.selectedError===i);const wrap=b.parentElement;$(".comma",wrap)?.remove();$(".errorDot",wrap)?.remove();if(state.selectedCommas.has(i)){const c=document.createElement("span");c.className="comma";c.textContent=",";wrap.appendChild(c);}if(state.selectedError===i){const d=document.createElement("span");d.className="errorDot";wrap.appendChild(d);}}); updateHint(it);
}
function updateHint(it){const p=it._p, h=$("#hint"); if(!it.error){h.textContent=p.targets.length===0?`Dieser Satz kann korrekt ohne Komma sein. Gewählt: ${state.selectedCommas.size}.`:`Gewählt: ${state.selectedCommas.size} von ${p.targets.length} Komma-Position${p.targets.length===1?'':'en'}.`;return;}const c=state.selectedCommas.size===p.targets.length?"✓ Komma-Auswahl vollständig":`○ Kommas gewählt: ${state.selectedCommas.size}/${p.targets.length}`;const e=state.selectedError!==null?"✓ Fehlerwort gewählt":"○ Fehlerwort noch wählen";h.textContent=`${c} · ${e}`;}
function sameSet(a,b){return a.size===b.size&&[...a].every(x=>b.has(x));}
function check(it){
  if(state.checked)return; const p=it._p, target=new Set(p.targets), commaOk=sameSet(state.selectedCommas,target), errorOk=!it.error||state.selectedError===p.errorIndex, ok=commaOk&&errorOk; state.checked=true;if(ok)state.correct++;else state.mistakes.push(it.id);
  $$(".word").forEach(b=>{const i=Number(b.dataset.i),selC=state.selectedCommas.has(i),tarC=target.has(i),selE=state.selectedError===i,tarE=it.error&&p.errorIndex===i;b.disabled=true;if(tarC||tarE)b.classList.add("correct");if((selC&&!tarC)||(selE&&!tarE))b.classList.add("wrong");});$$(".tool").forEach(b=>b.disabled=true);
  const fb=$("#feedback");fb.hidden=false;fb.className=`feedback ${ok?'good':'bad'}`;fb.innerHTML=ok?`<strong>Richtig!</strong>${esc(it.why)}`:`<strong>Noch nicht ganz.</strong>${esc(it.why)}<div class="solution">Lösung: ${esc(solution(it))}</div>`;$("#checkBtn").hidden=true;$("#clearBtn").hidden=true;$("#nextBtn").hidden=false;$("#bar").style.width=`${((state.index+1)/state.items.length)*100}%`;
}
function solution(it){const p=it._p;return p.words.map((w,i)=>{let x=w;if(it.error&&i===p.errorIndex)x=p.replacement;return p.targets.includes(i)?addComma(x):x;}).join(" ");}
function addComma(w){if(/,([.!?])?$/.test(w))return w;const m=w.match(/([.!?]+)$/);return m?w.slice(0,-m[1].length)+","+m[1]:w+",";}
function nextQuestion(){state.index++;state.selectedCommas=new Set();state.selectedError=null;state.checked=false;state.tool="comma";if(state.index>=state.items.length)finish();else renderQuestion();}
function finish(){
  const total=state.items.length,correct=state.correct,percent=Math.round(correct/total*100),mistakes=[...new Set(state.mistakes)]; store.results[state.groupId]={correct,total,percent,mistakes};saveStore();app.innerHTML=`<section class="result card"><div class="bigEmoji">${percent===100?'🏆':'🍁'}</div><p class="eyebrow">Geschafft</p><h1>${percent===100?'Fehlerfrei!':percent>=80?'Sehr stark!':percent>=60?'Gut gemacht!':'Weiter üben'}</h1><p class="lead"><strong>${correct} von ${total}</strong> richtig · ${percent}% · ${mistakes.length} Fehler</p><div class="resultActions">${mistakes.length?`<button class="primary" id="retry" type="button">Nur ${mistakes.length} Fehler üben</button>`:''}<button class="secondary" id="again" type="button">Nochmal</button><button class="ghost" id="home2" type="button">Zur Übersicht</button></div></section>`;$("#retry")?.addEventListener("click",()=>startQuiz(state.groupId,mistakes));$("#again").addEventListener("click",()=>startQuiz(state.groupId));$("#home2").addEventListener("click",showHome);window.scrollTo({top:0,behavior:"smooth"});
}
function openInfo(){$("#infoOverlay").classList.add("open");document.body.style.overflow="hidden";}
function closeInfo(){$("#infoOverlay").classList.remove("open");document.body.style.overflow="";}
$("#infoBtn").addEventListener("click",openInfo);$("#closeInfo").addEventListener("click",closeInfo);$("#infoOverlay").addEventListener("click",e=>{if(e.target.id==="infoOverlay")closeInfo();});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeInfo();});$("#homeBtn").addEventListener("click",showHome);$("#resetBtn").addEventListener("click",()=>{if(confirm("Alle gespeicherten Ergebnisse und Fehlerlisten löschen?")){store={results:{}};saveStore();showHome();}});
showHome();
