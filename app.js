// MRA Midterm Master — app logic
// Blocks self-register on window.MRA_BLOCKS (see data/blockN.js)

(function () {
  "use strict";

  const blocks = (window.MRA_BLOCKS || []).sort((a, b) => a.id - b.id);

  // ---- Persistent progress (localStorage) ----
  const STORE_KEY = "mra-progress-v1";
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || { cards: {}, quiz: {} }; }
    catch { return { cards: {}, quiz: {} }; }
  }
  function saveProgress() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch {}
  }
  let progress = loadProgress();
  const cardId = (bid, term) => "b" + bid + ":" + term;

  // ---- State ----
  let blockIndex = 0;
  let selectionAll = false;     // "All blocks" selected?
  let mode = "";
  let items = [];
  let idx = 0;
  let score = 0;
  let correctCount = 0;
  let matched = new Set();
  let totalConcepts = 0;
  let selTerm = null, selDef = null;
  let flashOrder = "course";    // "course" | "shuffle"
  let studyFilter = "all";      // "all" | "review" (cards not yet mastered)

  // ---- Elements ----
  const blockSelect = document.getElementById("block-select");
  const menuView = document.getElementById("menu-view");
  const gameView = document.getElementById("game-view");
  const gameTitle = document.getElementById("game-title");
  const scoreDisplay = document.getElementById("score-display");
  const gameContainer = document.getElementById("game-container");
  const progressContainer = document.getElementById("progress-container");
  const progressBar = document.getElementById("progress-bar");
  const menuProgress = document.getElementById("menu-progress");

  const MODE_TITLES = { flashcards: "🗂️ Flashcards", match: "🔗 Connect", quiz: "❓ Quiz", reto: "🔥 Application" };

  // ---- Helpers ----
  const block = () => blocks[blockIndex];
  const activeBlocks = () => (selectionAll ? blocks : [block()]);
  const selectionKey = () => (selectionAll ? "all" : "b" + block().id);
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const setBar = (p) => { progressBar.style.width = `${p}%`; };
  const setScore = (delta) => { score += delta; scoreDisplay.innerText = `Score: ${score}`; };

  // Gather content across the active selection, tagging concepts with their block id
  const gatherConcepts = () => activeBlocks().flatMap((b) => b.concepts.map((c) => ({ ...c, _bid: b.id })));
  const gatherMcqs = () => activeBlocks().flatMap((b) => b.mcqs);
  const gatherScenarios = () => activeBlocks().flatMap((b) => b.scenarios);

  // Parse "Day 1 · slide 12" / "Day 4 · slides 7–9" → [day, slide] for course ordering
  function sourceOrder(src) {
    if (!src) return [99, 999];
    const dayM = src.match(/Day\s+(\d+)/i);
    const slideM = src.match(/slides?\s+(\d+)/i);
    return [dayM ? parseInt(dayM[1], 10) : 99, slideM ? parseInt(slideM[1], 10) : 999];
  }

  function masteryStats(concepts) {
    let known = 0;
    concepts.forEach((c) => { if (progress.cards[cardId(c._bid, c.term)] === "known") known++; });
    return { known, total: concepts.length };
  }

  function showMenu() {
    menuView.classList.add("active"); menuView.classList.remove("hidden");
    gameView.classList.add("hidden"); gameView.classList.remove("active");
    renderMenuProgress();
  }
  function showGame(m) {
    mode = m; score = 0; idx = 0; correctCount = 0; setScore(0);
    gameTitle.innerText = MODE_TITLES[m];
    menuView.classList.add("hidden"); menuView.classList.remove("active");
    gameView.classList.add("active"); gameView.classList.remove("hidden");
    gameContainer.innerHTML = "";
    setBar(0);
    progressContainer.classList.toggle("hidden", m === "flashcards");
    if (m === "flashcards") startFlashcards();
    else if (m === "match") startMatch();
    else if (m === "quiz") startQuiz();
    else if (m === "reto") startReto();
  }

  function emptyMsg(what) {
    gameContainer.innerHTML = `<div class="result"><h2>Nothing here yet</h2><p style="color:var(--text-muted)">This selection has no ${what} yet.</p><div class="next-wrap"><button class="btn btn-ghost" id="m-back">← Menu</button></div></div>`;
    document.getElementById("m-back").addEventListener("click", showMenu);
  }

  // ---- Menu progress summary ----
  function renderMenuProgress() {
    const all = blocks.flatMap((b) => b.concepts.map((c) => ({ ...c, _bid: b.id })));
    const { known, total } = masteryStats(all);
    const pct = total ? Math.round((known / total) * 100) : 0;
    const perBlock = blocks.map((b) => {
      const s = masteryStats(b.concepts.map((c) => ({ ...c, _bid: b.id })));
      return `<span class="mp-chip">B${b.id} ${s.known}/${s.total}</span>`;
    }).join("");
    menuProgress.innerHTML = `
      <div class="mp-head">
        <span>Mastered <strong>${known} / ${total}</strong> concepts</span>
        <button class="mp-reset" id="mp-reset">Reset progress</button>
      </div>
      <div class="pbar"><div class="pbar-fill" style="width:${pct}%"></div></div>
      <div class="mp-chips">${perBlock}</div>`;
    document.getElementById("mp-reset").addEventListener("click", () => {
      if (confirm("Reset all study progress (mastered cards & best scores)?")) {
        progress = { cards: {}, quiz: {} };
        saveProgress();
        renderMenuProgress();
      }
    });
  }

  // ---- Flashcards ----
  function buildFlashItems() {
    let c = gatherConcepts();
    if (studyFilter === "review") c = c.filter((x) => progress.cards[cardId(x._bid, x.term)] !== "known");
    if (flashOrder === "shuffle") items = shuffle(c);
    else items = c.sort((a, b) => { const A = sourceOrder(a.source), B = sourceOrder(b.source); return A[0] - B[0] || A[1] - B[1]; });
  }
  function startFlashcards() {
    if (!gatherConcepts().length) return emptyMsg("flashcards");
    buildFlashItems(); idx = 0;
    if (!items.length) return renderFlashDone();
    renderFlashcard();
  }
  function renderFlashDone() {
    gameContainer.innerHTML = `
      <div class="result">
        <h2>🎉 All mastered!</h2>
        <p style="color:var(--text-muted)">Every concept in this selection is marked “Got it”.</p>
        <div class="next-wrap">
          <button class="btn btn-ghost" id="fd-all">Study all again</button>
          <button class="btn btn-primary" id="fd-menu">← Menu</button>
        </div>
      </div>`;
    document.getElementById("fd-all").addEventListener("click", () => { studyFilter = "all"; startFlashcards(); });
    document.getElementById("fd-menu").addEventListener("click", showMenu);
  }
  function renderFlashcard() {
    const it = items[idx];
    const id = cardId(it._bid, it.term);
    const status = progress.cards[id];
    const srcTag = it.source ? `<div class="card-source">${esc(it.source)}</div>` : "";
    const badge = status ? `<div class="card-badge ${status}">${status === "known" ? "✓ Got it" : "↻ Review"}</div>` : "";
    const body = it.list
      ? `${it.lead ? `<p class="card-lead">${esc(it.lead)}</p>` : ""}<ul class="card-list">${it.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`
      : `<p>${esc(it.definition)}</p>${it.details ? `<p style="font-size:0.85rem;margin-top:1rem;color:var(--text-muted)">${esc(it.details)}</p>` : ""}`;
    const example = it.example ? `<div class="card-example"><span class="ex-label">Example</span> ${esc(it.example)}</div>` : "";
    const back = body + example;

    const orderLabel = flashOrder === "course" ? "⤨ Shuffle" : "▦ Course order";
    const filterLabel = studyFilter === "all" ? "◎ Focus: needs review" : "● All cards";
    const stats = masteryStats(gatherConcepts());

    gameContainer.innerHTML = `
      <div class="fc-bar">
        <button class="order-btn" id="order-toggle">${orderLabel}</button>
        <button class="order-btn" id="filter-toggle">${filterLabel}</button>
      </div>
      <div class="fc-progress">
        Mastered ${stats.known} / ${stats.total}
        <div class="pbar"><div class="pbar-fill" style="width:${stats.total ? Math.round((stats.known / stats.total) * 100) : 0}%"></div></div>
      </div>
      <div class="flashcard-container" id="fc">
        <div class="flashcard">
          <div class="card-face card-front">
            <h2>${esc(it.term)}</h2>
            <div class="card-hint">click to reveal</div>
            ${badge}${srcTag}
          </div>
          <div class="card-face card-back">
            ${back}
            ${badge}${srcTag}
          </div>
        </div>
      </div>
      <div class="controls">
        <button class="btn btn-ghost" id="fc-prev">‹ Prev</button>
        <span class="counter">${idx + 1} / ${items.length}</span>
        <button class="btn btn-ghost" id="fc-next">Next ›</button>
      </div>
      <div class="mastery">
        <button class="m-btn m-review" id="m-review">↻ Review</button>
        <button class="m-btn m-known" id="m-known">✓ Got it</button>
      </div>`;

    document.getElementById("fc").addEventListener("click", () => {
      document.querySelector(".flashcard").classList.toggle("flipped");
    });
    document.getElementById("fc-prev").addEventListener("click", () => { if (idx > 0) { idx--; renderFlashcard(); } });
    document.getElementById("fc-next").addEventListener("click", () => { if (idx < items.length - 1) { idx++; renderFlashcard(); } });
    document.getElementById("order-toggle").addEventListener("click", () => {
      flashOrder = flashOrder === "course" ? "shuffle" : "course";
      buildFlashItems(); idx = 0; renderFlashcard();
    });
    document.getElementById("filter-toggle").addEventListener("click", () => {
      studyFilter = studyFilter === "all" ? "review" : "all";
      startFlashcards();
    });
    document.getElementById("m-known").addEventListener("click", () => setMastery("known"));
    document.getElementById("m-review").addEventListener("click", () => setMastery("review"));
  }
  function setMastery(status) {
    const it = items[idx];
    const id = cardId(it._bid, it.term);
    progress.cards[id] = status;
    saveProgress();
    if (studyFilter === "review" && status === "known") {
      // card leaves the review set — rebuild and stay at the same position
      buildFlashItems();
      if (!items.length) return renderFlashDone();
      if (idx >= items.length) idx = items.length - 1;
      renderFlashcard();
    } else {
      if (idx < items.length - 1) idx++;
      renderFlashcard();
    }
  }

  // ---- Match / Connect ----
  function startMatch() {
    const all = gatherConcepts();
    if (all.length < 2) return emptyMsg("concepts to match");
    matched = new Set(); totalConcepts = all.length;
    renderMatchRound();
  }
  function renderMatchRound() {
    const all = gatherConcepts();
    let remaining = all.filter((x) => !matched.has(x.term));
    let selection = shuffle(remaining).slice(0, 5);
    if (selection.length < 5) {
      const need = 5 - selection.length;
      const review = shuffle(all.filter((x) => matched.has(x.term))).slice(0, need);
      selection = selection.concat(review);
    }
    items = selection;
    setBar((matched.size / totalConcepts) * 100);
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
        setBar((matched.size / totalConcepts) * 100);
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
    const m = gatherMcqs();
    if (!m.length) return emptyMsg("quiz questions");
    items = shuffle(m); idx = 0; correctCount = 0; renderQuiz();
  }
  function renderQuiz() {
    if (idx >= items.length) return finishScreen("Quiz complete!");
    const q = items[idx];
    setBar((idx / items.length) * 100);
    gameContainer.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-kicker">Question ${idx + 1} of ${items.length}</div>
        <h3>${esc(q.q)}</h3>
      </div>
      <div class="quiz-options">${q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${esc(opt)}</button>`).join("")}</div>
      <div id="explain-slot"></div>`;
    gameContainer.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => answerChoice(btn, parseInt(btn.dataset.i, 10), q.correct, q.explain, q.source));
    });
  }

  // ---- Reto / Application (scenarios) ----
  function startReto() {
    const s = gatherScenarios();
    if (!s.length) return emptyMsg("application questions");
    items = shuffle(s).map((sc) => {
      const opts = shuffle(sc.options.concat([sc.answer]));
      return { q: sc.question, options: opts, correct: opts.indexOf(sc.answer), explain: sc.explain || "", source: sc.source || "" };
    });
    idx = 0; correctCount = 0; renderReto();
  }
  function renderReto() {
    if (idx >= items.length) return finishScreen("Application set complete!");
    const q = items[idx];
    setBar((idx / items.length) * 100);
    gameContainer.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-kicker hot">🔥 Application ${idx + 1} of ${items.length}</div>
        <h3>${esc(q.q)}</h3>
      </div>
      <div class="quiz-options">${q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${esc(opt)}</button>`).join("")}</div>
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
    if (chosen === correct) { setScore(mode === "reto" ? 20 : 10); correctCount++; }
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
    setBar(100);
    const total = items.length;
    // save best score for this selection + mode
    const key = selectionKey() + ":" + mode;
    const rec = progress.quiz[key] || { best: 0, attempts: 0 };
    rec.attempts += 1;
    rec.lastCorrect = correctCount;
    rec.lastTotal = total;
    rec.best = Math.max(rec.best || 0, correctCount);
    progress.quiz[key] = rec;
    saveProgress();
    const pct = total ? Math.round((correctCount / total) * 100) : 0;
    gameContainer.innerHTML = `
      <div class="result">
        <h2>${title}</h2>
        <div class="big-score">${correctCount} / ${total} correct (${pct}%)</div>
        <p style="color:var(--text-muted)">Best so far: ${rec.best} / ${total} · Attempts: ${rec.attempts}</p>
        <div class="next-wrap">
          <button class="btn btn-ghost" id="r-again">Try again</button>
          <button class="btn btn-primary" id="r-menu">← Menu</button>
        </div>
      </div>`;
    document.getElementById("r-again").addEventListener("click", () => showGame(mode));
    document.getElementById("r-menu").addEventListener("click", showMenu);
  }

  // ---- Init ----
  function init() {
    if (!blocks.length) {
      gameContainer.innerHTML = '<div class="result"><h2>No blocks loaded</h2></div>';
      return;
    }
    // "All blocks" first, then each block
    const allOpt = document.createElement("option");
    allOpt.value = "all";
    allOpt.textContent = "★ All blocks (Class 1–12)";
    blockSelect.appendChild(allOpt);
    blocks.forEach((b, i) => {
      const opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = `Block ${b.id} — ${b.title} (${b.classes})`;
      blockSelect.appendChild(opt);
    });
    blockSelect.addEventListener("change", (e) => {
      if (e.target.value === "all") { selectionAll = true; }
      else { selectionAll = false; blockIndex = parseInt(e.target.value, 10); }
    });
    document.querySelectorAll(".mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => showGame(btn.dataset.mode));
    });
    document.getElementById("back-btn").addEventListener("click", showMenu);
    document.addEventListener("keydown", (e) => {
      if (mode !== "flashcards") return;
      if (e.key === "ArrowRight") { if (idx < items.length - 1) { idx++; renderFlashcard(); } }
      else if (e.key === "ArrowLeft") { if (idx > 0) { idx--; renderFlashcard(); } }
      else if (e.key === " ") { e.preventDefault(); const fc = document.querySelector(".flashcard"); if (fc) fc.classList.toggle("flipped"); }
    });

    renderMenuProgress();
  }

  init();
})();
