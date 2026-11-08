# Komma-Detektive im Herbst

A small, dependency-free German grammar practice app for Klasse 6/7.

## What it trains

The app contains **40 questions in 4 groups**:

1. **Nebensatz hinten** — main clause first, then a subordinate clause introduced by words such as `weil`, `dass`, `wenn`, `obwohl`, `bevor`, `damit` or `sobald`.
2. **Einschub & Relativsatz** — relative clauses inserted into a main clause, usually requiring two commas.
3. **Fehlerdetektiv** — comma placement plus identifying a wrong word such as `das/dass`, `den/denn`, `seit/seid`, `wen/wenn`.
4. **Nebensatz zuerst** — the subordinate clause comes first, e.g. `Wenn der erste Frost spät kommt, bleiben manche Pflanzen länger aktiv.`

The interaction is click-only: the learner clicks the word **after which the comma belongs**. In the error group, she also clicks the incorrect word.

## Features

- 10 phrases per group / 40 total
- optional mixed 40-question test
- immediate feedback and corrected sentence
- local score history using `localStorage`
- shows the most recent number of mistakes and percentage correct
- “only mistakes” retry after a test and from the home screen
- gentle sound feedback with an on/off toggle
- responsive layout for phone, tablet and desktop
- no frameworks, accounts, analytics or external dependencies
- works offline after loading

## Run locally

Open `index.html` directly in a browser, or use any simple local web server.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, and this `README.md` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

GitHub will provide the public Pages address once deployment is complete.

## Privacy

Progress is stored only in the browser's `localStorage`. Nothing is sent anywhere.
