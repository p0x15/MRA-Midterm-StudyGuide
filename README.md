# MRA Midterm Study Guide

A simple static site to practice for the **Market Research & Analytics** midterm (June 2, 2026).
Two modes — **Flashcards** and **Multiple Choice** — built progressively, one block at a time.

## Use it
- **Live:** enable GitHub Pages (Settings → Pages → Branch: `main`, folder `/root`), then open the published URL.
- **Local:** just open `index.html` in a browser. No build step.

## Modes
Pick a **block** on the menu, then choose a study mode:
- 🗂️ **Flashcards** — 3D-flip cards, term ↔ definition
- 🔗 **Connect** — match terms to definitions (5 pairs/round, scored)
- ❓ **Quiz** — hand-written multiple choice with explanations
- 🔥 **Application** — scenario questions in the open-ended exam style

Score and a progress bar track each session; wrong answers shake.

## Structure
```
index.html      menu + game views, block <script> includes
style.css       styles (Outfit font, glassmorphism, blue/green theme)
app.js          all 4 modes, scoring, progress, completion
data/blockN.js  content per block (self-registering)
PLAN.md         build plan, block order, gap tracker
```

Each block exposes three content arrays:
```js
concepts:  [ { term, definition, details? } ]      // flashcards + connect
mcqs:      [ { q, options[], correct, explain } ]  // quiz
scenarios: [ { question, answer, options[], explain } ] // application
```
Adding a block = create `data/blockN.js`, then add one `<script>` line in `index.html`.

See [PLAN.md](PLAN.md) for the block roadmap and outstanding content gaps.

## Progress
- ✅ Block 1 — Foundations (Class 1–2)
- ▢ Block 2 — Planning Research (Class 3–4)
- ▢ Block 3 — Doing Research (Class 5–6)
- ▢ Block 4 — Data Preparation (Class 7–8)
- ▢ Block 5 — Analysis & Analytics (Class 9–12)
