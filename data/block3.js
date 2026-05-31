// Block 3 — Doing Research (Class 5–6)
// Source decks: MRA-Day5-M.pdf, MRA-Day6-M.pdf (slide numbers verified against the PDFs)

window.MRA_BLOCKS = window.MRA_BLOCKS || [];
window.MRA_BLOCKS.push({
  id: 3,
  title: "Doing Research",
  classes: "Class 5–6",

  concepts: [
    // --- Qualitative vs Quantitative ---
    { term: "Qualitative Research", definition: "Research focused on understanding opinions, emotions, motivations, and behaviors. Purpose: explore new ideas and uncover WHY something happens. Methods: interviews, focus groups (FGD), open-ended surveys, observation.", example: "Interviewing 10 students to understand their health & lifestyle data management.", source: "Day 5 · slide 5" },
    { term: "Quantitative Research", definition: "Research that collects numerical data and performs statistical analysis. Purpose: measure quantities — how many, what percentage, what averages. Methods: structured surveys, experiments, secondary-data analysis.", example: "Surveying 500 students to understand their health & lifestyle data management.", source: "Day 5 · slide 7" },
    { term: "Qualitative vs. Quantitative (key differences)", definition: "Purpose: understand vs measure · Data: words vs numbers · Sample: small vs large · Questions: open-ended vs structured · Output: insights vs statistics.", lead: "Qualitative → Quantitative", list: ["Purpose: Understand → Measure", "Data: Words → Numbers", "Sample: Small → Large", "Questions: Open-ended → Structured", "Output: Insights → Statistics"], source: "Day 5 · slide 9" },

    // --- Data sources ---
    { term: "Primary Data", definition: "New data collected directly by the researcher for a specific research problem or objective.", example: "Surveys, interviews, focus groups, observations, experiments.", source: "Day 5 · slide 10" },
    { term: "Primary Data — pros & cons", definition: "Pros: highly relevant, up-to-date, quality control. Cons: time-consuming, expensive, needs careful design.", lead: "Primary Data", list: ["Pro — highly relevant & specific to the problem", "Pro — up-to-date and specific", "Pro — greater control over data quality", "Con — time-consuming", "Con — expensive to collect", "Con — requires careful design & planning"], source: "Day 5 · slide 11" },
    { term: "Secondary Data", definition: "Data already collected, analyzed, and published by others for a different purpose, but reusable for your research.", example: "Industry reports, government statistics, academic studies, company records, online databases.", source: "Day 5 · slide 12" },
    { term: "Secondary Data — pros & cons", definition: "Pros: low cost, quick access, good context. Cons: may not match your problem, can be outdated, reliability varies.", lead: "Secondary Data", list: ["Pro — low cost or free", "Pro — quick & easy to access", "Pro — provides background & context", "Con — may not match your exact problem", "Con — can be outdated or incomplete", "Con — reliability depends on the source"], source: "Day 5 · slide 13" },

    // --- Questionnaire design ---
    { term: "Questionnaire Design — 10 rules", definition: "Unbiased · simple · specific · no jargon · simple words · no ambiguous words · no negatives · no hypotheticals · no misheard words · response bands for sensitive topics.", lead: "Good question design reduces response errors", list: ["Keep questions unbiased (don't lead)", "Keep them simple (avoid double-barreled)", "Make them specific", "Avoid jargon / shorthand", "Avoid sophisticated / uncommon words", "Avoid ambiguous words (often, usually)", "Avoid negative wording", "Avoid hypothetical questions", "Avoid words that can be misheard", "Desensitize sensitive questions with response bands"], source: "Day 5 · slides 14–18" },

    // --- Ethics: foundations ---
    { term: "Research Ethics", definition: "The moral principles and guidelines that govern how research involving human subjects is designed, conducted, and reported.", lead: "Moral principles governing how research with human subjects is designed, conducted & reported. It ensures:", list: ["Respondents are treated with respect & fairness", "Data is collected responsibly", "Results are truthfully reported"], source: "Day 6 · slide 5" },
    { term: "Why Research Ethics matters", definition: "Protects rights · builds trust · improves data quality · maintains integrity · protects reputation · ensures legal compliance · promotes social responsibility · supports long-term success.", list: ["Protects participants' rights (privacy, safety, dignity)", "Builds trust with respondents", "Improves data quality (less bias)", "Maintains research integrity (no falsification)", "Protects company reputation", "Ensures legal compliance", "Promotes social responsibility", "Supports long-term business success"], source: "Day 6 · slides 6–7" },

    // --- Ethics: the 10 core ethical issues ---
    { term: "Privacy & Confidentiality", definition: "Personal data (name, health, behavior) must be protected and not shared or used without permission.", example: "A fitness app collects health data → sells it to advertisers.", source: "Day 6 · slide 8" },
    { term: "Informed Consent", definition: "Participants must know the purpose of the research; participation must be voluntary and based on clear information.", example: "A website tracks user behavior without informing users or getting consent.", source: "Day 6 · slide 9" },
    { term: "Deception", definition: "Researchers should not mislead participants about the study's purpose — transparency is essential.", example: "A researcher pretends to be a customer but is actually collecting data.", source: "Day 6 · slide 10" },
    { term: "Manipulation (ethics)", definition: "Research should not unfairly influence or control participants; they should make independent decisions.", example: "Using brain-response data to design ads that people cannot resist.", source: "Day 6 · slide 11" },
    { term: "Vulnerable Groups", definition: "Extra care is needed with children, the elderly, or patients who may not fully understand risks or give informed consent.", example: "Conducting research on children without proper parental consent.", source: "Day 6 · slide 12" },
    { term: "Data Ownership & Misuse", definition: "Users should control their personal data, and it should be used only for its intended purpose.", example: "A company sells user data to third parties without informing users.", source: "Day 6 · slide 13" },
    { term: "AI & Big Data Ethics", definition: "AI should be transparent and fair; data analysis should avoid bias and discrimination.", example: "AI targets ads only to certain groups, ignoring others unfairly.", source: "Day 6 · slide 14" },
    { term: "Data Fraud & Dishonesty", definition: "Data should be collected and reported honestly — no manipulation or falsification of results.", example: "A researcher changes results to match company expectations.", source: "Day 6 · slide 15" },
    { term: "Client Pressure", definition: "Researchers should remain independent and objective; results should not be influenced by company demands.", example: "A company asks to hide negative feedback from customers.", source: "Day 6 · slide 16" },
    { term: "Ethics vs. Profit", definition: "Ethical research may limit profit opportunities; businesses must balance profit with responsibility.", example: "Using intrusive tracking for better data but violating privacy.", source: "Day 6 · slide 17" },

    // --- Data privacy laws ---
    { term: "Data Privacy Laws (by region)", definition: "EU: GDPR · Japan: APPI · USA: CCPA/CPRA · UK: UK GDPR · Canada: PIPEDA · Brazil: LGPD · South Korea: PIPA.", lead: "Major data-privacy laws", list: ["EU — GDPR (strongest; consent, right to be forgotten)", "Japan — APPI (consent, cross-border transfer rules)", "USA — CCPA / CPRA (know, delete, opt-out of selling)", "UK — UK GDPR + Data Protection Act", "Brazil — LGPD (GDPR-inspired) · S. Korea — PIPA (very strict)"], source: "Day 6 · slide 18" },
    { term: "GDPR", definition: "EU's General Data Protection Regulation — the strongest global privacy law. Key features: user consent, the right to be forgotten, and strict penalties.", source: "Day 6 · slide 18" },
    { term: "APPI", definition: "Japan's Act on Protection of Personal Information — requires consent and regulates cross-border data transfer.", source: "Day 6 · slide 18" }
  ],

  mcqs: [
    {
      q: "Which is a key difference between qualitative and quantitative research?",
      options: [
        "Qualitative uses large samples; quantitative uses small samples",
        "Qualitative produces statistics; quantitative produces insights",
        "Qualitative uses words and open-ended questions; quantitative uses numbers and structured questions",
        "They are identical in purpose"
      ],
      correct: 2,
      explain: "Qualitative = words, small samples, open-ended, insights (understand). Quantitative = numbers, large samples, structured, statistics (measure).",
      source: "Day 5 · slide 9"
    },
    {
      q: "Government statistics and published industry reports are examples of:",
      options: ["Primary data", "Secondary data", "Experimental data", "Behavioral data"],
      correct: 1,
      explain: "Secondary data was collected by others for a different purpose but reused for your research.",
      source: "Day 5 · slide 12"
    },
    {
      q: "Which is an ADVANTAGE of primary data?",
      options: ["Low cost or free", "Quick and easy to access", "Highly relevant and up-to-date for your problem", "Already published"],
      correct: 2,
      explain: "Primary data is collected for your specific problem, so it's highly relevant and up-to-date — but it's costly and time-consuming.",
      source: "Day 5 · slide 11"
    },
    {
      q: "'Don't you think this health app is very useful?' violates which questionnaire rule?",
      options: ["Avoid jargon", "Keep questions unbiased (don't lead)", "Use response bands", "Avoid hypotheticals"],
      correct: 1,
      explain: "This is a leading question — it pushes the respondent toward a positive answer. Questions must be unbiased.",
      source: "Day 5 · slide 14"
    },
    {
      q: "A website collects user data without telling users or asking permission. Which ethical issue is this?",
      options: ["Informed consent", "Client pressure", "Data fraud", "Ethics vs profit"],
      correct: 0,
      explain: "Participants must know the purpose and agree voluntarily — collecting data without informing them violates informed consent.",
      source: "Day 6 · slide 9"
    },
    {
      q: "A researcher pretends to be a customer while secretly collecting data. This is:",
      options: ["Manipulation", "Deception", "Vulnerable groups", "Data ownership"],
      correct: 1,
      explain: "Misleading participants about the study's purpose is deception; transparency is essential.",
      source: "Day 6 · slide 10"
    },
    {
      q: "The world's strongest data-privacy law, requiring consent and a 'right to be forgotten,' is:",
      options: ["APPI (Japan)", "CCPA (USA)", "GDPR (EU)", "PIPEDA (Canada)"],
      correct: 2,
      explain: "The EU's GDPR is described as the strongest global privacy law.",
      source: "Day 6 · slide 18"
    },
    {
      q: "Japan's main data-privacy law is:",
      options: ["GDPR", "APPI", "LGPD", "PIPA"],
      correct: 1,
      explain: "APPI = Act on Protection of Personal Information (Japan); requires consent and regulates cross-border transfers.",
      source: "Day 6 · slide 18"
    },
    {
      q: "Extra care with children, the elderly, or patients in research relates to which ethical issue?",
      options: ["Vulnerable groups", "Client pressure", "Manipulation", "AI & Big Data ethics"],
      correct: 0,
      explain: "Vulnerable groups may not fully understand risks or give informed consent, so they need extra protection.",
      source: "Day 6 · slide 12"
    }
  ],

  scenarios: [
    {
      question: "You interview 10 students in depth to understand WHY they feel anxious about sharing health data. Which research type is this?",
      answer: "Qualitative research",
      options: ["Quantitative research", "Secondary research", "Experimental research"],
      explain: "Small sample + understanding the 'why' through words → qualitative research.",
      source: "Day 5 · slide 5"
    },
    {
      question: "You survey 500 people to find what PERCENTAGE would pay ¥500/month for an app. Which research type is this?",
      answer: "Quantitative research",
      options: ["Qualitative research", "Ethnographic research", "Focus group research"],
      explain: "Large sample + measuring numbers/percentages → quantitative research.",
      source: "Day 5 · slide 7"
    },
    {
      question: "A startup reuses a government health-statistics report for its market study. This data is:",
      answer: "Secondary data",
      options: ["Primary data", "Experimental data", "Qualitative data"],
      explain: "Already collected by others for another purpose, reused here → secondary data.",
      source: "Day 5 · slide 12"
    },
    {
      question: "'How satisfied are you with the price and features of the app?' breaks which questionnaire rule?",
      answer: "Keep questions simple (avoid double-barreled)",
      options: ["Avoid negatives", "Use response bands", "Avoid jargon"],
      explain: "It asks about two things (price AND features) at once — a double-barreled question.",
      source: "Day 5 · slide 14"
    },
    {
      question: "A fitness app collects users' health data and sells it to advertisers. Which ethical issue is this?",
      answer: "Privacy & Confidentiality",
      options: ["Client pressure", "Deception", "Ethics vs profit"],
      explain: "Personal data shared/used without permission → privacy & confidentiality violation.",
      source: "Day 6 · slide 8"
    },
    {
      question: "A company pressures the research team to hide negative customer feedback. This is:",
      answer: "Client pressure",
      options: ["Informed consent", "Vulnerable groups", "AI & Big Data ethics"],
      explain: "Researchers must stay independent and objective; bending results to company demands is client pressure.",
      source: "Day 6 · slide 16"
    },
    {
      question: "A researcher edits the results so they match what the company wanted. Which ethical issue is this?",
      answer: "Data Fraud & Dishonesty",
      options: ["Manipulation", "Deception", "Ethics vs profit"],
      explain: "Falsifying or manipulating results is data fraud & dishonesty.",
      source: "Day 6 · slide 15"
    },
    {
      question: "An AI ad system shows offers only to certain demographic groups, unfairly ignoring others. This is:",
      answer: "AI & Big Data Ethics",
      options: ["Informed consent", "Client pressure", "Privacy & confidentiality"],
      explain: "AI should be transparent and fair and avoid bias/discrimination → AI & Big Data ethics.",
      source: "Day 6 · slide 14"
    }
  ]
});
