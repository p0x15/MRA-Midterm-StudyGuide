// MRA Midterm Master — app logic
// Blocks self-register on window.MRA_BLOCKS (see data/blockN.js)

(function () {
  "use strict";

  const blocks = (window.MRA_BLOCKS || []).sort((a, b) => a.id - b.id);

  // ---- State ----
  let blockIndex = 0;
  let mode = "";
  let items = [];      // current working deck
  let idx = 0;
  let score = 0;
  let matched = new Set();
  let totalConcepts = 0;
  let selTerm = null, selDef = null;

  // ---- Elements ----
  const blockSelect = document.getElementById("block-select");
  const menuView = document.getElementById("menu-view");
  const gameView = document.getElementById("game-view");
  const gameTitle = document.getElementById("game-title");
  const scoreDisplay = document.getElementById("score-display");
  const gameContainer = document.getElementById("game-container");
  const progressContainer = document.getElementById("progress-container");
  const progressBar = document.getElementById("progress-bar");

  const MODE_TITLES = { flashcards: "🗂️ Flashcards", match: "🔗 Connect", quiz: "❓ Quiz", reto: "🔥 Application" };

  // ---- Helpers ----
  const block = () => blocks[blockIndex];
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const setProgress = (p) => { progressBar.style.width = `${p}%`; };
  const setScore = (delta) => { score += delta; scoreDisplay.innerText = `Score: ${score}`; };

  function showMenu() {
    menuView.classList.add("active"); menuView.classList.remove("hidden");
    gameView.classList.add("hidden"); gameView.classList.remove("active");
  }
  function showGame(m) {
    mode = m; score = 0; idx = 0; setScore(0);
    gameTitle.innerText = MODE_TITLES[m];
    menuView.classList.add("hidden"); menuView.classList.remove("active");
    gameView.classList.add("active"); gameView.classList.remove("hidden");
    gameContainer.innerHTML = "";
    setProgress(0);
    progressContainer.classList.toggle("hidden", m === "flashcards");

    if (m === "flashcards") startFlashcards();
    else if (m === "match") startMatch();
    else if (m === "quiz") startQuiz();
    else if (m === "reto") startReto();
  }

  function emptyMsg(what) {
    gameContainer.innerHTML = `<div class="result"><h2>Nothing here yet</h2><p style="color:var(--text-muted)">This block has no ${what} yet.</p><div class="next-wrap"><button class="btn btn-ghost" id="m-back">← Menu</button></div></div>`;
    document.getElementById("m-back").addEventListener("click", showMenu);
  }

  // ---- Flashcards ----
  function startFlashcards() {
    const c = block().concepts || [];
    if (!c.length) return emptyMsg("flashcards");
    items = shuffle(c); idx = 0; renderFlashcard();
  }
  function renderFlashcard() {
    const it = items[idx];
    const srcTag = it.source ? `<div class="card-source">${esc(it.source)}</div>` : "";
    gameContainer.innerHTML = `
      <div class="flashcard-container" id="fc">
        <div class="flashcard">
          <div class="card-face card-front">
            <h2>${esc(it.term)}</h2>
            <div class="card-hint">click to reveal</div>
            ${srcTag}
          </div>
          <div class="card-face card-back">
            <p>${esc(it.definition)}</p>
            ${it.details ? `<p style="font-size:0.85rem;margin-top:1rem;color:var(--text-muted)">${esc(it.details)}</p>` : ""}
            ${srcTag}
          </div>
        </div>
      </div>
      <div class="controls">
        <button class="btn btn-ghost" id="fc-prev">‹ Prev</button>
        <span class="counter">${idx + 1} / ${items.length}</span>
        <button class="btn btn-primary" id="fc-next">Next ›</button>
      </div>`;
    document.getElementById("fc").addEventListener("click", () => {
      document.querySelector(".flashcard").classList.toggle("flipped");
    });
    document.getElementById("fc-prev").addEventListener("click", () => { if (idx > 0) { idx--; renderFlashcard(); } });
    document.getElementById("fc-next").addEventListener("click", () => { if (idx < items.length - 1) { idx++; renderFlashcard(); } });
  }

  // ---- Match / Connect ----
  function startMatch() {
    const all = block().concepts || [];
    if (all.length < 2) return emptyMsg("concepts to match");
    matched = new Set(); totalConcepts = all.length;
    renderMatchRound();
  }
  function renderMatchRound() {
    const all = block().concepts;
    let remaining = all.filter((x) => !matched.has(x.term));
    let selection = shuffle(remaining).slice(0, 5);
    if (selection.length < 5) {
      const need = 5 - selection.length;
      const review = shuffle(all.filter((x) => matched.has(x.term))).slice(0, need);
      selection = selection.concat(review);
    }
    items = selection;
    setProgress((matched.size / totalConcepts) * 100);

    const terms = shuffle(items), defs = shuffle(items);
    gameContainer.innerHTML = `
      <div class="match-grid">
        <div class="match-column" id="terms-col">
          ${terms.map((it) => `<div class="match-item" data-type="term" data-id="${esc(it.term)}">${esc(it.term)}</div>`).join("")}
        </div>
        <div class="match-column" id="defs-col">
          ${defs.map((it) => `<div class="match-item" data-type="def" data-id="${esc(it.term)}">${esc(it.definition)}</div>`).join("")}
        </div>
      </div>
      <div class="next-wrap"><button class="btn btn-primary" id="new-round">New round ⤨</button></div>`;
    gameContainer.querySelectorAll(".match-item").forEach((el) => el.addEventListener("click", onMatchClick));
    document.getElementById("new-round").addEventListener("click", renderMatchRound);
    selTerm = null; selDef = null;
  }
  function onMatchClick(e) {
    const el = e.currentTarget;
    if (el.classList.contains("correct")) return;
    const col = el.dataset.type === "term" ? document.getElementById("terms-col") : document.getElementById("defs-col");
    col.querySelectorAll(".match-item").forEach((x) => x.classList.remove("selected"));
    el.classList.add("selected");
    if (el.dataset.type === "term") selTerm = el; else selDef = el;

    if (selTerm && selDef) {
      if (selTerm.dataset.id === selDef.dataset.id) {
        selTerm.classList.remove("selected"); selDef.classList.remove("selected");
        selTerm.classList.add("correct"); selDef.classList.add("correct");
        setScore(10);
        matched.add(selTerm.dataset.id);
        setProgress((matched.size / totalConcepts) * 100);
        selTerm = null; selDef = null;
        if (gameContainer.querySelectorAll(".match-item.correct").length === items.length * 2) {
          if (matched.size >= totalConcepts) setTimeout(matchComplete, 450);
        }
      } else {
        const a = selTerm, b = selDef;
        a.classList.add("wrong"); b.classList.add("wrong");
        setScore(-2);
        selTerm = null; selDef = null;
        setTimeout(() => { a.classList.remove("wrong", "selected"); b.classList.remove("wrong", "selected"); }, 450);
      }
    }
  }
  function matchComplete() {
    gameContainer.innerHTML = `
      <div class="result">
        <h2>All concepts matched! 🎉</h2>
        <div class="big-score">Score: ${score}</div>
        <div class="next-wrap"><button class="btn btn-primary" id="r-menu">← Menu</button></div>
      </div>`;
    document.getElementById("r-menu").addEventListener("click", showMenu);
  }

  // ---- Quiz (hand-written MCQs) ----
  function startQuiz() {
    const m = block().mcqs || [];
    if (!m.length) return emptyMsg("quiz questions");
    items = shuffle(m); idx = 0; renderQuiz();
  }
  function renderQuiz() {
    if (idx >= items.length) return finishScreen("Quiz complete!");
    const q = items[idx];
    setProgress((idx / items.length) * 100);
    gameContainer.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-kicker">Question ${idx + 1} of ${items.length}</div>
        <h3>${esc(q.q)}</h3>
      </div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${esc(opt)}</button>`).join("")}
      </div>
      <div id="explain-slot"></div>`;
    gameContainer.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => answerChoice(btn, parseInt(btn.dataset.i, 10), q.correct, q.explain, q.source));
    });
  }

  // ---- Reto / Application (scenarios) ----
  function startReto() {
    const s = block().scenarios || [];
    if (!s.length) return emptyMsg("application questions");
    // normalize scenarios to {q, options[], correct, explain, source}
    items = shuffle(s).map((sc) => {
      const opts = shuffle(sc.options.concat([sc.answer]));
      return { q: sc.question, options: opts, correct: opts.indexOf(sc.answer), explain: sc.explain || "", source: sc.source || "" };
    });
    idx = 0; renderReto();
  }
  function renderReto() {
    if (idx >= items.length) return finishScreen("Application set complete!");
    const q = items[idx];
    setProgress((idx / items.length) * 100);
    gameContainer.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-kicker hot">🔥 Application ${idx + 1} of ${items.length}</div>
        <h3>${esc(q.q)}</h3>
      </div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${esc(opt)}</button>`).join("")}
      </div>
      <div id="explain-slot"></div>`;
    gameContainer.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => answerChoice(btn, parseInt(btn.dataset.i, 10), q.correct, q.explain, q.source));
    });
  }

  // shared answer handler for quiz + reto
  function answerChoice(btn, chosen, correct, explain, source) {
    const opts = gameContainer.querySelectorAll(".quiz-option");
    opts.forEach((el, i) => {
      el.disabled = true;
      if (i === correct) el.classList.add("correct");
      if (i === chosen && chosen !== correct) el.classList.add("wrong");
    });
    if (chosen === correct) setScore(mode === "reto" ? 20 : 10);
    const slot = document.getElementById("explain-slot");
    const verdict = chosen === correct ? "Correct. " : "Not quite. ";
    const srcLine = source ? `<span class="explain-source">📄 ${esc(source)}</span>` : "";
    slot.innerHTML = `
      ${explain ? `<div class="explain"><strong>${verdict}</strong>${esc(explain)}${srcLine}</div>` : ""}
      <div class="next-wrap"><button class="btn btn-primary" id="next-q">${idx + 1 >= items.length ? "See results" : "Next →"}</button></div>`;
    document.getElementById("next-q").addEventListener("click", () => {
      idx++;
      if (mode === "quiz") renderQuiz(); else renderReto();
    });
  }

  function finishScreen(title) {
    setProgress(100);
    gameContainer.innerHTML = `
      <div class="result">
        <h2>${title}</h2>
        <div class="big-score">Score: ${score}</div>
        <div class="next-wrap"><button class="btn btn-primary" id="r-menu">← Menu</button></div>
      </div>`;
    document.getElementById("r-menu").addEventListener("click", showMenu);
  }

  // ---- Init ----
  function init() {
    if (!blocks.length) {
      gameContainer.innerHTML = '<div class="result"><h2>No blocks loaded</h2></div>';
      return;
    }
    blocks.forEach((b, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `Block ${b.id} — ${b.title} (${b.classes})`;
      blockSelect.appendChild(opt);
    });
    blockSelect.addEventListener("change", (e) => { blockIndex = parseInt(e.target.value, 10); });
    document.querySelectorAll(".mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => showGame(btn.dataset.mode));
    });
    document.getElementById("back-btn").addEventListener("click", showMenu);
  }

  init();
})();
