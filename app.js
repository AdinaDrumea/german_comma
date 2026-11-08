const GROUPS = [
  {
    id: "nebensatz-hinten",
    number: 1,
    title: "Nebensatz hinten",
    subtitle: "Das Signalwort steht in der Mitte. Klicke das Wort direkt davor.",
    example: "Die Vögel rasten am See, weil sie neue Kraft brauchen.",
    color: "🍂",
    questions: [
      q("g1-01", "Die Zugvögel fliegen nach Süden weil es im Norden kälter wird.", [4], "Vor weil steht ein Komma."),
      q("g1-02", "Wir bleiben auf dem markierten Weg weil der Nebel dichter wird.", [5], "Der weil-Satz ist ein Nebensatz."),
      q("g1-03", "Forschende beobachten genau dass sich der Herbst verändert.", [2], "Vor dass beginnt der Nebensatz."),
      q("g1-04", "Die Klasse wartet drinnen wenn draußen starker Regen fällt.", [3], "Vor wenn wird der Hauptsatz vom Nebensatz getrennt."),
      q("g1-05", "Die Vögel ruhen am See bevor sie weiterfliegen.", [4], "Vor bevor steht ein Komma."),
      q("g1-06", "Der Förster warnt die Gruppe weil der Pfad rutschig ist.", [4], "Der weil-Satz nennt den Grund."),
      q("g1-07", "Wir nehmen eine Karte mit damit wir den Weg finden.", [4], "Vor damit beginnt ein Nebensatz."),
      q("g1-08", "Die Kinder notieren dass viele Blätter schon gelb sind.", [2], "Vor dass steht ein Komma."),
      q("g1-09", "Die Tiere suchen länger Nahrung obwohl es schon kalt ist.", [4], "Vor obwohl beginnt ein Nebensatz."),
      q("g1-10", "Die Wandernden kehren um sobald der Nebel dichter wird.", [3], "Vor sobald steht ein Komma.")
    ]
  },
  {
    id: "einschub",
    number: 2,
    title: "Einschub & Relativsatz",
    subtitle: "Der Zusatz steckt mitten im Hauptsatz. Meist brauchst du zwei Kommas.",
    example: "Die Vögel, die am See rasten, sammeln neue Kraft.",
    color: "🍁",
    questions: [
      q("g2-01", "Tiere die sich auf feste Jahreszeiten eingestellt haben finden manchmal weniger Nahrung.", [0,7], "Der Relativsatz die … haben wird auf beiden Seiten abgetrennt."),
      q("g2-02", "Die Vögel die am See rasten sammeln neue Kraft.", [1,5], "Die Vögel sammeln neue Kraft. Der Teil dazwischen ist ein Einschub."),
      q("g2-03", "Der Förster der den schmalen Pfad kennt führt die Gruppe zurück.", [1,6], "Der Relativsatz der … kennt braucht zwei Kommas."),
      q("g2-04", "Die Blätter die noch grün sind bleiben länger am Baum.", [1,5], "Die Blätter bleiben länger am Baum. Der Zusatz wird eingerahmt."),
      q("g2-05", "Die Klasse die das Wetter beobachtet schreibt alles ins Tagebuch.", [1,5], "Der Relativsatz die … beobachtet steht zwischen zwei Kommas."),
      q("g2-06", "Der Kompass der in meinem Rucksack liegt funktioniert noch gut.", [1,6], "Der Zusatz der … liegt wird abgetrennt."),
      q("g2-07", "Die Pflanzen die spät blühen brauchen noch milde Tage.", [1,4], "Die Pflanzen brauchen noch milde Tage. Der Einschub bekommt zwei Kommas."),
      q("g2-08", "Der Weg der durch den Wald führt ist im Nebel schwer zu erkennen.", [1,6], "Der Relativsatz der … führt wird eingerahmt."),
      q("g2-09", "Die Kinder die leise warten sehen mehrere Zugvögel.", [1,4], "Die Kinder sehen mehrere Zugvögel. Der Zusatz steht dazwischen."),
      q("g2-10", "Die Warnung die am Wegweiser hängt ist gut sichtbar.", [1,5], "Der Relativsatz die … hängt braucht zwei Kommas.")
    ]
  },
  {
    id: "fehlerdetektiv",
    number: 3,
    title: "Fehlerdetektiv",
    subtitle: "Setze das Komma und markiere zusätzlich das falsche Wort.",
    example: "Der Leiter glaubt, dass er den Weg kennt.  das → dass",
    color: "🔎",
    questions: [
      qe("g3-01", "Der Gruppenleiter glaubt das er eine Abkürzung kennt.", [2], 3, "dass", "Hier leitet dass einen Nebensatz ein."),
      qe("g3-02", "Wir bleiben am Weg den der Nebel ist sehr dicht.", [3], 4, "denn", "denn nennt einen Grund und wird mit zwei n geschrieben."),
      qe("g3-03", "Die Forschenden erklären das warme Herbsttage Folgen haben.", [2], 3, "dass", "Nach erklären folgt ein dass-Satz."),
      qe("g3-04", "Die Klasse bleibt drinnen den draußen regnet es stark.", [3], 4, "denn", "denn verbindet hier zwei Hauptsätze."),
      qe("g3-05", "Der Förster sagt das alle zusammenbleiben sollen.", [2], 3, "dass", "dass leitet den Nebensatz ein."),
      qe("g3-06", "Wir warten hier den der schmale Pfad ist rutschig.", [2], 3, "denn", "Gemeint ist denn = weil."),
      qe("g3-07", "Die Kinder wissen das Zugvögel lange Strecken fliegen.", [2], 3, "dass", "dass verbindet den Hauptsatz mit dem Nebensatz."),
      qe("g3-08", "Die Gruppe kehrt um den die Sicht wird immer schlechter.", [3], 4, "denn", "Gemeint ist denn, nicht den."),
      qe("g3-09", "Ihr seit vorsichtig weil der Weg nass ist.", [2], 1, "seid", "Ihr seid wird mit d geschrieben; vor weil steht ein Komma."),
      qe("g3-10", "Wir gehen erst weiter wen der Nebel dünner wird.", [3], 4, "wenn", "Gemeint ist wenn mit zwei n; davor steht ein Komma.")
    ]
  },
  {
    id: "nebensatz-zuerst",
    number: 4,
    title: "Nebensatz zuerst",
    subtitle: "Jetzt kommt der Nebensatz zuerst. Das Komma steht erst nach dem ganzen Nebensatz.",
    example: "Wenn der erste Frost spät kommt, bleiben manche Pflanzen länger aktiv.",
    color: "🌫️",
    questions: [
      q("g4-01", "Wenn der erste Frost spät kommt bleiben manche Pflanzen länger aktiv.", [5], "Der wenn-Satz steht zuerst. Das Komma kommt nach kommt."),
      q("g4-02", "Weil der Nebel dichter wird kehrt die Gruppe zum Weg zurück.", [4], "Der weil-Satz endet bei wird; danach kommt das Komma."),
      q("g4-03", "Sobald die Sonne aufgeht wird die Sicht besser.", [3], "Der Nebensatz Sobald … aufgeht steht am Anfang."),
      q("g4-04", "Obwohl es am Morgen kalt ist fliegen die Vögel weiter.", [5], "Der obwohl-Satz endet bei ist."),
      q("g4-05", "Bevor die Wanderung beginnt prüft der Leiter die Karte.", [3], "Nach dem ersten Nebensatz beginnt der Hauptsatz."),
      q("g4-06", "Wenn die Vögel genug Kraft gesammelt haben fliegen sie weiter.", [6], "Der wenn-Satz endet bei haben."),
      q("g4-07", "Weil viele Blätter nass sind wird der Weg rutschig.", [4], "Der weil-Satz steht zuerst und endet bei sind."),
      q("g4-08", "Nachdem der Regen aufgehört hat kommen die Kinder wieder nach draußen.", [4], "Der nachdem-Satz endet bei hat."),
      q("g4-09", "Während die Klasse den Himmel beobachtet notiert sie die Wolken.", [5], "Der während-Satz endet bei beobachtet."),
      q("g4-10", "Falls die Sicht schlechter wird bleiben wir am sicheren Ort.", [4], "Der falls-Satz endet bei wird.")
    ]
  }
];

function q(id, text, commaAfter, explanation) {
  return { id, text, commaAfter, explanation };
}
function qe(id, text, commaAfter, errorIndex, replacement, explanation) {
  return { id, text, commaAfter, explanation, error: { index: errorIndex, replacement } };
}

const STORAGE_KEY = "herbstKommaTrainer.v2";
const app = document.querySelector("#app");
const homeBtn = document.querySelector("#homeBtn");
const soundBtn = document.querySelector("#soundBtn");
const resetBtn = document.querySelector("#resetBtn");

let store = loadStore();
let state = { view: "home" };
let audioCtx = null;

homeBtn.addEventListener("click", showHome);
soundBtn.addEventListener("click", () => {
  store.sound = !store.sound;
  saveStore();
  updateSoundButton();
  if (store.sound) sound("tap");
});
resetBtn.addEventListener("click", () => {
  if (confirm("Alle gespeicherten Ergebnisse und Fehlerlisten löschen?")) {
    store = { sound: store.sound, results: {} };
    saveStore();
    sound("tap");
    showHome();
  }
});
updateSoundButton();
showHome();

function loadStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { sound: parsed?.sound ?? true, results: parsed?.results ?? {} };
  } catch {
    return { sound: true, results: {} };
  }
}
function saveStore() { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); }
function updateSoundButton() {
  soundBtn.textContent = store.sound ? "🔊" : "🔇";
  soundBtn.setAttribute("aria-pressed", String(store.sound));
}

function cloneTemplate(id) {
  return document.querySelector(id).content.cloneNode(true);
}

function showHome() {
  state = { view: "home" };
  app.innerHTML = "";
  app.appendChild(cloneTemplate("#homeTemplate"));
  const grid = app.querySelector("#groupGrid");
  GROUPS.forEach(group => grid.appendChild(groupCard(group)));
  app.querySelector("#allBtn").addEventListener("click", () => startQuiz("all"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function groupCard(group) {
  const el = document.createElement("article");
  el.className = "group-card card";
  const result = store.results[group.id];
  const last = result
    ? `Letzter Lauf: ${result.correct}/${result.total} richtig · ${result.percent}% · ${result.mistakeIds.length} Fehler`
    : "Noch kein Ergebnis gespeichert";
  el.innerHTML = `
    <div class="number">${group.color}</div>
    <h3>${group.number}. ${group.title}</h3>
    <p>${group.subtitle}</p>
    <p class="group-example">${group.example}</p>
    <div class="group-footer">
      <span class="last-score">${last}</span>
      <button class="primary start" type="button">10 Sätze starten</button>
      ${result?.mistakeIds?.length ? '<button class="secondary mistakes" type="button">Letzte Fehler</button>' : ""}
    </div>`;
  el.querySelector(".start").addEventListener("click", () => startQuiz(group.id));
  el.querySelector(".mistakes")?.addEventListener("click", () => startQuiz(group.id, result.mistakeIds));
  return el;
}

function startQuiz(groupId, onlyIds = null) {
  let questions;
  let label;
  if (groupId === "all") {
    questions = GROUPS.flatMap(g => g.questions.map(item => ({ ...item, groupId: g.id })));
    label = "Alle 40 gemischt";
  } else {
    const group = GROUPS.find(g => g.id === groupId);
    questions = group.questions.map(item => ({ ...item, groupId: group.id }));
    label = group.title;
  }
  if (onlyIds) questions = questions.filter(item => onlyIds.includes(item.id));
  questions = shuffle([...questions]);
  state = {
    view: "quiz",
    groupId,
    label,
    questions,
    index: 0,
    correct: 0,
    mistakes: [],
    selectedCommas: new Set(),
    selectedError: null,
    checked: false,
    activeTool: "comma",
    retryMode: Boolean(onlyIds)
  };
  renderQuestion();
}

function renderQuestion() {
  app.innerHTML = "";
  app.appendChild(cloneTemplate("#quizTemplate"));
  const question = state.questions[state.index];
  const group = GROUPS.find(g => g.id === question.groupId);
  const words = question.text.split(/\s+/);

  app.querySelector("#modePill").textContent = state.retryMode ? "Nur Fehler" : state.label;
  app.querySelector("#questionCount").textContent = `Satz ${state.index + 1} von ${state.questions.length}`;
  app.querySelector("#scoreLive").textContent = `${state.correct} richtig`;
  app.querySelector("#progressBar").style.width = `${(state.index / state.questions.length) * 100}%`;
  app.querySelector("#groupLabel").textContent = `${group.number}. ${group.title}`;
  app.querySelector("#questionPrompt").textContent = question.error
    ? "Setze das Komma und markiere das falsche Wort."
    : question.commaAfter.length > 1
      ? "Klicke auf die Wörter, nach denen die zwei Kommas kommen."
      : "Klicke auf das Wort, nach dem das Komma kommt.";

  const toolSwitch = app.querySelector("#toolSwitch");
  if (question.error) {
    toolSwitch.hidden = false;
    toolSwitch.querySelectorAll(".tool").forEach(btn => btn.addEventListener("click", () => {
      state.activeTool = btn.dataset.tool;
      toolSwitch.querySelectorAll(".tool").forEach(b => b.classList.toggle("active", b === btn));
      updateSelectionHint(question);
    }));
  }

  const sentence = app.querySelector("#sentence");
  words.forEach((word, index) => {
    const wrap = document.createElement("span");
    wrap.className = "word-wrap";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "word";
    btn.textContent = word;
    btn.dataset.index = index;
    btn.addEventListener("click", () => selectWord(index, question));
    wrap.appendChild(btn);
    sentence.appendChild(wrap);
  });

  app.querySelector("#backBtn").addEventListener("click", showHome);
  app.querySelector("#clearBtn").addEventListener("click", () => {
    if (state.checked) return;
    state.selectedCommas.clear();
    state.selectedError = null;
    refreshWordStyles(question);
    updateSelectionHint(question);
  });
  app.querySelector("#checkBtn").addEventListener("click", () => checkAnswer(question));
  app.querySelector("#nextBtn").addEventListener("click", nextQuestion);

  updateSelectionHint(question);
  refreshWordStyles(question);
}

function selectWord(index, question) {
  if (state.checked) return;
  if (question.error && state.activeTool === "error") {
    state.selectedError = state.selectedError === index ? null : index;
    sound("tap");
  } else {
    if (state.selectedCommas.has(index)) state.selectedCommas.delete(index);
    else state.selectedCommas.add(index);
    sound("tap");
  }
  refreshWordStyles(question);
  updateSelectionHint(question);
}

function refreshWordStyles(question) {
  app.querySelectorAll(".word").forEach(btn => {
    const i = Number(btn.dataset.index);
    btn.classList.toggle("comma-selected", state.selectedCommas.has(i));
    btn.classList.toggle("error-selected", state.selectedError === i);
    btn.querySelector(".comma-mark")?.remove();
    if (state.selectedCommas.has(i)) {
      const comma = document.createElement("span");
      comma.className = "comma-mark";
      comma.textContent = ",";
      btn.appendChild(comma);
    }
  });
}

function updateSelectionHint(question) {
  const hint = app.querySelector("#selectionHint");
  if (!question.error) {
    hint.textContent = `Gewählt: ${state.selectedCommas.size} von ${question.commaAfter.length} Komma-Position${question.commaAfter.length > 1 ? "en" : ""}.`;
    return;
  }
  const commaDone = state.selectedCommas.size ? "✓ Komma gewählt" : "○ Komma noch wählen";
  const errorDone = state.selectedError !== null ? "✓ Fehlerwort gewählt" : "○ Fehlerwort noch wählen";
  hint.textContent = `${commaDone}   ·   ${errorDone}`;
}

function checkAnswer(question) {
  if (state.checked) return;
  const correctComma = sameSet(state.selectedCommas, new Set(question.commaAfter));
  const correctError = question.error ? state.selectedError === question.error.index : true;
  const correct = correctComma && correctError;
  state.checked = true;

  if (correct) {
    state.correct += 1;
    sound("correct");
    leafBurst();
  } else {
    state.mistakes.push(question.id);
    sound("wrong");
  }

  showCheckedStyles(question);
  const feedback = app.querySelector("#feedback");
  feedback.hidden = false;
  feedback.className = `feedback ${correct ? "good" : "bad"}`;
  feedback.innerHTML = correct
    ? `<strong>Richtig! ${pick(["Sehr gut.", "Treffer!", "Genau so.", "Stark erkannt!"])}</strong><div>${question.explanation}</div>`
    : `<strong>Noch nicht ganz.</strong><div>${question.explanation}</div><div class="solution">Lösung: ${solutionText(question)}</div>`;

  app.querySelector("#checkBtn").hidden = true;
  app.querySelector("#clearBtn").hidden = true;
  app.querySelector("#nextBtn").hidden = false;
  app.querySelectorAll(".tool").forEach(btn => btn.disabled = true);
  app.querySelector("#progressBar").style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
}

function showCheckedStyles(question) {
  app.querySelectorAll(".word").forEach(btn => {
    const i = Number(btn.dataset.index);
    btn.disabled = true;
    const selectedComma = state.selectedCommas.has(i);
    const correctComma = question.commaAfter.includes(i);
    const selectedError = state.selectedError === i;
    const correctError = question.error?.index === i;
    if ((correctComma && selectedComma) || (correctError && selectedError)) btn.classList.add("correct-target");
    if ((selectedComma && !correctComma) || (selectedError && !correctError)) btn.classList.add("wrong-target");
    if ((correctComma && !selectedComma) || (correctError && !selectedError)) btn.classList.add("correct-target");
  });
}

function nextQuestion() {
  state.index += 1;
  state.selectedCommas = new Set();
  state.selectedError = null;
  state.checked = false;
  state.activeTool = "comma";
  if (state.index >= state.questions.length) finishQuiz();
  else renderQuestion();
}

function finishQuiz() {
  const total = state.questions.length;
  const correct = state.correct;
  const percent = Math.round((correct / total) * 100);
  const mistakeIds = [...new Set(state.mistakes)];
  const resultKey = state.groupId;
  store.results[resultKey] = {
    correct,
    total,
    percent,
    mistakeIds,
    at: new Date().toISOString()
  };
  saveStore();
  sound(percent === 100 ? "perfect" : "finish");

  app.innerHTML = "";
  app.appendChild(cloneTemplate("#resultTemplate"));
  const title = percent === 100 ? "Fehlerfrei!" : percent >= 80 ? "Richtig stark!" : percent >= 60 ? "Gut gemacht!" : "Weiter üben – du bist dran!";
  app.querySelector("#resultTitle").textContent = title;
  app.querySelector("#resultPercent").textContent = `${percent}%`;
  app.querySelector("#scoreRing").style.setProperty("--score", `${percent}%`);
  app.querySelector("#resultLine").textContent = `${correct} von ${total} richtig · ${mistakeIds.length} ${mistakeIds.length === 1 ? "Fehler" : "Fehler"}`;
  app.querySelector("#resultEmoji").textContent = percent === 100 ? "🏆🍁" : percent >= 80 ? "🌟🍂" : "🍁";

  const retryBtn = app.querySelector("#retryMistakesBtn");
  if (!mistakeIds.length) {
    retryBtn.textContent = "Keine Fehler übrig 🎉";
    retryBtn.disabled = true;
  } else {
    retryBtn.textContent = `Nur ${mistakeIds.length} Fehler üben`;
    retryBtn.addEventListener("click", () => startQuiz(state.groupId, mistakeIds));
  }
  app.querySelector("#replayBtn").textContent = state.groupId === "all" ? "Alle 40 nochmal" : "Gruppe nochmal";
  app.querySelector("#replayBtn").addEventListener("click", () => startQuiz(state.groupId));
  app.querySelector("#resultHomeBtn").addEventListener("click", showHome);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function solutionText(question) {
  const words = question.text.split(/\s+/);
  if (question.error) words[question.error.index] = preserveEnding(words[question.error.index], question.error.replacement);
  return words.map((word, i) => question.commaAfter.includes(i) ? addComma(word) : word).join(" ");
}
function preserveEnding(original, replacement) {
  const ending = original.match(/[.!?]+$/)?.[0] || "";
  return replacement + ending;
}
function addComma(word) {
  if (/,([.!?])?$/.test(word)) return word;
  const match = word.match(/([.!?]+)$/);
  return match ? word.slice(0, -match[1].length) + "," + match[1] : word + ",";
}
function sameSet(a, b) { return a.size === b.size && [...a].every(v => b.has(v)); }
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function sound(type) {
  if (!store.sound) return;
  try {
    audioCtx ??= new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    const play = (freq, start, duration, gain = .045, wave = "sine") => {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = wave;
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0, start);
      g.gain.linearRampToValueAtTime(gain, start + .015);
      g.gain.exponentialRampToValueAtTime(.0001, start + duration);
      osc.connect(g).connect(audioCtx.destination);
      osc.start(start); osc.stop(start + duration + .02);
    };
    if (type === "tap") play(520, now, .06, .018);
    if (type === "correct") { play(523, now, .16); play(659, now + .08, .18); play(784, now + .16, .22); }
    if (type === "wrong") { play(220, now, .18, .028, "triangle"); play(185, now + .1, .22, .022, "triangle"); }
    if (type === "finish") { play(392, now, .17); play(523, now + .1, .2); play(659, now + .2, .28); }
    if (type === "perfect") { play(523, now, .18); play(659, now + .08, .18); play(784, now + .16, .2); play(1047, now + .28, .35, .05); }
  } catch { /* sound is optional */ }
}

function leafBurst() {
  const leaves = ["🍁", "🍂", "✨"];
  for (let i = 0; i < 7; i++) {
    const el = document.createElement("span");
    el.className = "leaf-pop";
    el.textContent = pick(leaves);
    el.style.left = `${45 + Math.random() * 10}%`;
    el.style.top = `${40 + Math.random() * 10}%`;
    el.style.setProperty("--dx", `${(Math.random() - .5) * 220}px`);
    el.style.setProperty("--dy", `${-70 - Math.random() * 170}px`);
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}
