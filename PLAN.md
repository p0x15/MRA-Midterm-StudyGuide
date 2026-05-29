# MRA Midterm Study Guide — Build Plan

A simple static website to practice for the **MRA Midterm** (June 2, 2026).
Two practice modes: **Flashcards** and **Multiple Choice**. Built **progressively, one block at a time**, so each class/slide set is covered thoroughly before moving on.

---

## Exam context (what we're studying for)

- **Date:** June 2, 2026 · **Duration:** 60 min · **Total:** 20 marks · Closed book
- **Format:** 5 MCQ × 1 mark (5) + 5 Open-ended × 3 marks (15)
- **Coverage:** Class 1 → Class 12 (lecture slides + discussed concepts)
- **Focus:** Understanding, application, critical thinking (not just recall)

> Implication: MCQ mode trains the 5 recall marks; flashcards lock in vocabulary; the 15 open-ended marks are application — we'll add short scenario prompts per block too.

---

## Tech stack (intentionally minimal)

- **Static site** — plain HTML + CSS + vanilla JS. No build step, no frameworks.
- **Data-driven** — all content lives in `data/blockN.js` (or one `data.js`) as arrays of cards + questions. Adding a block = adding a data file, no UI changes.
- **Hosting** — GitHub Pages from the `main` branch root (or `/docs`). Just open `index.html` locally to test.

```
/
├── index.html          # shell: mode toggle (Flashcards | MCQ), block selector
├── style.css           # one stylesheet
├── app.js              # render logic for both modes
├── data/
│   ├── block1.js       # foundations
│   ├── block2.js       # ...added as we go
│   └── ...
└── PLAN.md             # this file
```

Each data entry shape:
```js
// flashcard
{ q: "Term or question", a: "Definition / answer" }
// mcq
{ q: "Question?", options: ["A","B","C","D"], correct: 2, explain: "Why" }
```

---

## Block order & coverage

Build in this sequence. A block is **done** when notes + slides are reconciled, gaps filled, and both flashcards + MCQs exist for it.

### ▢ Block 1 — Foundations (Class 1–2)
- Market / Marketing / Market Research / Market Analytics definitions
- 4 major steps of market research (define → develop → implement → interpret)
- Research vs. Analytics (the "why" vs "what/how")
- Analysis vs. Analytics distinction
- Uses of MR&A; long-term vs short-term marketing decisions
- 3.1–3.5 importance themes
- **Notes status:** ✅ Strong (Class 1, 2)
- **Gaps:** Class 2 sections 3.2–3.5 are headers only — confirm details from `MRA-Day2-M.pdf`

### ▢ Block 2 — Planning Research (Class 3–4)
- 6-step research process
- Research problem (4 characteristics) vs. research objective
- Exploratory / Descriptive / Causal objectives (when to use each)
- 10 steps to define objectives; Decision problem vs Research problem; SMART
- Research plan: purpose, characteristics, 10 core components
- Research approaches (observational, ethnographic, focus group, survey, behavioral, experimental)
- **Notes status:** ✅ Strong (Class 3, 4)
- **Gaps:** Class 4 "research approaches" list is thin (ethnographic "3-layer", experimental empty) — confirm from `MRA-Day4-M.pdf`

### ▢ Block 3 — Doing Research (Class 5–6)
- Qualitative vs Quantitative (purpose, methods, pros/cons, compare table)
- Primary vs Secondary data (examples, pros/cons)
- Questionnaire design — 10 rules (bad vs good examples)
- Research ethics — principles & importance
- **Notes status:** ✅ Strong (Class 5) · ⚠️ Thin (Class 6 ethics — "me dio flojera")
- **Gaps:** **Class 6 ethics needs filling** from `MRA-Day6-M.pdf` (consent, anonymity, honesty, etc.)

### ▢ Block 4 — Data Preparation (Class 7–8)
- Data collection; Population vs Sample
- Yamane sample-size formula (+ worked example)
- 7 sampling techniques (probability vs non-probability) + memory cues
- Data cleaning — 5 problems (missing, duplicate, inconsistent, outlier, invalid)
- Missing data — MCAR / MAR / MNAR
- Imputation (mean/median/mode rules); outlier handling (remove/cap/transform/keep)
- Data organization — harmonization, formats, types, rescaling, raw-data rule, cleaning log
- **Notes status:** ✅ Excellent (Class 7-8 — most thorough notes)
- **Gaps:** None major. IQR rule & Z-score were marked "come back to this" — confirm in `MRA-Day7-8-M.pdf`

### ▢ Block 5 — Data Analysis & Analytics (Class 9–12)
- Categories of data analysis (descriptive/comparative/relationship/time/predictive)
- Descriptive stats: mean, median, mode, frequency (+ calc)
- Data visualization tools (Class 10 workshop)
- Data analysis vs data analytics
- 4 types of analytics: Descriptive / Diagnostic / Predictive / Prescriptive (+ UrbanPulse application)
- **Notes status:** ⚠️ Incomplete (Class 9 cuts off) · ❌ Empty (Class 10) · ✅ Strong (Class 11/Day12)
- **Gaps:** **Class 9 needs completing** (`MRA-Day9-M.pdf`) · **Class 10 viz content missing** (`MRA-Day10-M.pdf`) — confirm exam relevance of the tools workshop

---

## Outstanding gaps to resolve (master list)

| # | Block | Gap | Source to extract from |
|---|-------|-----|------------------------|
| 1 | 1 | Class 2 importance themes 3.2–3.5 detail | MRA-Day2-M.pdf |
| 2 | 2 | Research approaches detail (ethnographic, experimental) | MRA-Day4-M.pdf |
| 3 | 3 | **Ethics content (whole topic)** | MRA-Day6-M.pdf |
| 4 | 4 | IQR rule & Z-score method | MRA-Day7-8-M.pdf |
| 5 | 5 | **Class 9 descriptive analysis (unfinished)** | MRA-Day9-M.pdf |
| 6 | 5 | **Class 10 data visualization (empty)** | MRA-Day10-M.pdf |

---

## Per-block workflow

For each block, in order:
1. **Reconcile** — read my notes + the matching lecture PDF; fill the gaps above.
2. **Author content** — write `data/blockN.js`: flashcards + MCQs (+ optional open-ended scenario prompts).
3. **Wire up** — register the block in `index.html` selector.
4. **Test** — open locally, click through both modes.
5. **Commit & push** — one commit per block; verify it renders on GitHub Pages.
6. **Review together** — you confirm coverage feels complete before next block.

---

## Status tracker

| Block | Content reconciled | Site built | Reviewed |
|-------|:---:|:---:|:---:|
| 0 — Site shell | — | ✅ | ▢ |
| 1 — Foundations | ✅ | ✅ | ▢ |
| 2 — Planning | ▢ | ▢ | ▢ |
| 3 — Doing research | ▢ | ▢ | ▢ |
| 4 — Data prep | ▢ | ▢ | ▢ |
| 5 — Analysis & analytics | ▢ | ▢ | ▢ |
