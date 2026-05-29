// MRA Midterm Study Guide — app logic
// Data blocks register themselves on window.MRA_BLOCKS (see data/blockN.js)

(function () {
  "use strict";

  const blocks = (window.MRA_BLOCKS || []).sort((a, b) => a.id - b.id);

  // ---- State ----
  let blockIndex = 0;
  let mode = "flashcards"; // "flashcards" | "mcq"
  let order = [];          // shuffled index order for current deck
  let pos = 0;             // position within order
  let flipped = false;     // flashcard front/back
  let answered = false;    // mcq answered?

  // ---- Elements ----
  const blockSelect = document.getElementById("block-select");
  const modeFlash = document.getElementById("mode-flashcards");
  const modeMcq = document.getElementById("mode-mcq");
  const practice = document.getElementById("practice");
  const progress = document.getElementById("progress");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const shuffleBtn = document.getElementById("shuffle-btn");

  // ---- Helpers ----
  function currentBlock() { return blocks[blockIndex]; }
  function currentDeck() {
    const b = currentBlock();
    return mode === "flashcards" ? b.flashcards : b.mcqs;
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function buildOrder() {
    const deck = currentDeck() || [];
    order = deck.map((_, i) => i); // natural order by default
    pos = 0;
    flipped = false;
    answered = false;
  }

  // ---- Render ----
  function render() {
    const deck = currentDeck();
    if (!deck || deck.length === 0) {
      practice.innerHTML = '<div class="empty">No content for this block yet.</div>';
      progress.textContent = "";
      return;
    }
    const item = deck[order[pos]];
    progress.textContent = `${currentBlock().classes} · ${mode === "flashcards" ? "Flashcard" : "Question"} ${pos + 1} / ${deck.length}`;
    if (mode === "flashcards") renderFlashcard(item);
    else renderMcq(item);
  }

  function renderFlashcard(card) {
    const label = flipped ? "Answer" : "Term / Question";
    const content = flipped ? card.a : card.q;
    practice.innerHTML = `
      <div class="flashcard ${flipped ? "is-answer" : ""}" id="card">
        <div class="card-label">${label}</div>
        <div class="card-content">${content}</div>
        <div class="tap-hint">${flipped ? "tap to see term" : "tap to reveal answer"}</div>
      </div>`;
    document.getElementById("card").addEventListener("click", () => {
      flipped = !flipped;
      render();
    });
  }

  function renderMcq(q) {
    const opts = q.options.map((opt, i) =>
      `<button class="option" data-i="${i}" ${answered ? "disabled" : ""}>${opt}</button>`
    ).join("");
    practice.innerHTML = `
      <div class="mcq">
        <div class="question">${q.q}</div>
        <div class="options">${opts}</div>
        <div id="explain-slot"></div>
      </div>`;

    practice.querySelectorAll(".option").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = parseInt(btn.dataset.i, 10);
        const optionEls = practice.querySelectorAll(".option");
        optionEls.forEach((el, i) => {
          el.disabled = true;
          if (i === q.correct) el.classList.add("correct");
          if (i === chosen && chosen !== q.correct) el.classList.add("wrong");
        });
        if (q.explain) {
          document.getElementById("explain-slot").innerHTML =
            `<div class="explain"><strong>${chosen === q.correct ? "Correct. " : "Not quite. "}</strong>${q.explain}</div>`;
        }
      });
    });
  }

  // ---- Navigation ----
  function next() {
    const deck = currentDeck();
    if (!deck || deck.length === 0) return;
    pos = (pos + 1) % deck.length;
    flipped = false;
    answered = false;
    render();
  }
  function prev() {
    const deck = currentDeck();
    if (!deck || deck.length === 0) return;
    pos = (pos - 1 + deck.length) % deck.length;
    flipped = false;
    answered = false;
    render();
  }
  function shuffleDeck() {
    const deck = currentDeck();
    if (!deck || deck.length === 0) return;
    order = shuffle(order);
    pos = 0;
    flipped = false;
    answered = false;
    render();
  }

  function setMode(m) {
    mode = m;
    modeFlash.classList.toggle("active", m === "flashcards");
    modeMcq.classList.toggle("active", m === "mcq");
    buildOrder();
    render();
  }

  // ---- Init ----
  function init() {
    if (blocks.length === 0) {
      practice.innerHTML = '<div class="empty">No blocks loaded.</div>';
      return;
    }
    blocks.forEach((b, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `Block ${b.id} — ${b.title} (${b.classes})`;
      blockSelect.appendChild(opt);
    });

    blockSelect.addEventListener("change", (e) => {
      blockIndex = parseInt(e.target.value, 10);
      buildOrder();
      render();
    });
    modeFlash.addEventListener("click", () => setMode("flashcards"));
    modeMcq.addEventListener("click", () => setMode("mcq"));
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);
    shuffleBtn.addEventListener("click", shuffleDeck);

    // keyboard: ← → to navigate, space to flip/reveal
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === " " && mode === "flashcards") {
        e.preventDefault();
        flipped = !flipped;
        render();
      }
    });

    buildOrder();
    render();
  }

  init();
})();
