# MRA Midterm Study Guide

A simple static site to practice for the **Market Research & Analytics** midterm (June 2, 2026).
Two modes — **Flashcards** and **Multiple Choice** — built progressively, one block at a time.

## Use it
- **Live:** enable GitHub Pages (Settings → Pages → Branch: `main`, folder `/root`), then open the published URL.
- **Local:** just open `index.html` in a browser. No build step.

## Controls
- Pick a **Block** and a **Mode** at the top.
- Flashcards: tap the card (or press **Space**) to flip.
- MCQ: click an option to see the answer + explanation.
- **← / →** keys or the buttons to move between cards; **Shuffle** to randomize.

## Structure
```
index.html      shell + block <script> includes
style.css       styles
app.js          render logic (flashcards + MCQ)
data/blockN.js  content per block (self-registering)
PLAN.md         build plan, block order, gap tracker
```

Adding a block = create `data/blockN.js`, then add one `<script>` line in `index.html`.

See [PLAN.md](PLAN.md) for the block roadmap and outstanding content gaps.

## Progress
- ✅ Block 1 — Foundations (Class 1–2)
- ▢ Block 2 — Planning Research (Class 3–4)
- ▢ Block 3 — Doing Research (Class 5–6)
- ▢ Block 4 — Data Preparation (Class 7–8)
- ▢ Block 5 — Analysis & Analytics (Class 9–12)
