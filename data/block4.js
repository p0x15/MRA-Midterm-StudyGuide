// Block 4 — Data Preparation (Class 7–8)
// Source deck: MRA-Day7-8-M.pdf (slide numbers verified against the PDF)

window.MRA_BLOCKS = window.MRA_BLOCKS || [];
window.MRA_BLOCKS.push({
  id: 4,
  title: "Data Preparation",
  classes: "Class 7–8",

  concepts: [
    // --- Data collection & sampling ---
    { term: "Data Collection", definition: "The process of gathering information to answer research questions. Goal: collect relevant, accurate, and reliable data for decision-making.", source: "Day 7-8 · slide 5" },
    { term: "Population vs. Sample", definition: "Population = everyone you care about. Sample = the smaller group you actually study, used to draw conclusions about the whole population.", example: "Population: all 2M Grab users in Thailand. Sample: 800 you actually survey.", source: "Day 7-8 · slide 6" },
    { term: "Yamane Formula", definition: "Corrected sample size: n = N / (1 + N·e²). n = sample size, N = population, e = margin of error (0.05 = 5%).", example: "N = 10,000, e = 0.05 → n = 10,000 / (1 + 10,000·0.0025) = 10,000 / 26 ≈ 385.", source: "Day 7-8 · slide 6" },
    { term: "Probability vs. Non-probability sampling", definition: "Probability: each person has a known chance of selection (simple random, stratified, cluster, systematic) — stronger for generalizing. Non-probability: selection not random (convenience, snowball, quota) — faster but more bias.", lead: "Probability → Non-probability", list: ["Probability: simple random · stratified · cluster · systematic", "Non-probability: convenience · snowball · quota", "Probability = known chance → better for generalizing", "Non-probability = not random → faster, cheaper, more bias"], source: "Day 7-8 · slides 7–13" },
    { term: "Simple Random Sampling", definition: "Every member has an equal chance of being picked; selection is completely random — no rules, no groupings. (Probability · cue: lottery)", example: "A mall exports all 5,000 loyalty IDs and uses Excel =RAND() to pick 200.", source: "Day 7-8 · slide 7" },
    { term: "Stratified Sampling", definition: "Divide the population into subgroups (strata) by a shared characteristic, then randomly sample within each — guarantees every subgroup is represented. (Probability · cue: fair slices)", example: "Customer base is 60% women / 30% men / 10% non-binary → sample 180 / 90 / 30.", source: "Day 7-8 · slide 8" },
    { term: "Cluster Sampling", definition: "Divide the population into natural clusters (often geographic), randomly select a few clusters, then study everyone inside them. (Probability · cue: pick areas)", example: "Instead of all 47 prefectures, randomly choose 10 and survey customers there.", source: "Day 7-8 · slide 9" },
    { term: "Systematic Sampling", definition: "Pick a random starting point, then select every Nth person from an ordered list. Interval = population ÷ sample. (Probability · cue: every 10th)", example: "1,000 shoppers, need 100 → take every 10th shopper after a random start.", source: "Day 7-8 · slide 10" },
    { term: "Convenience Sampling", definition: "Select whoever is easiest to reach and willing — no rules. Not representative. (Non-probability · cue: whoever's nearby)", example: "A student posts a Google Form in their own LINE / Facebook groups.", source: "Day 7-8 · slide 11" },
    { term: "Snowball Sampling", definition: "Start with a few participants, then ask them to refer others who fit the criteria; the sample grows through networks. (Non-probability · cue: friend-of-a-friend)", example: "Interview 3 K-pop merch collectors; each refers more collectors.", source: "Day 7-8 · slide 12" },
    { term: "Quota Sampling", definition: "Set target quotas per subgroup so the sample mirrors the population, but fill them by convenience (not randomly). (Non-probability · cue: fill the boxes)", example: "Set 170 female / 163 male quotas; recruit whoever until each quota is full.", source: "Day 7-8 · slide 13" },

    // --- Data cleaning ---
    { term: "Data Cleaning — 5 problems", definition: "Missing values · duplicates · inconsistent formats · outliers · impossible/invalid values.", lead: "Check raw data before analysis", list: ["Missing values — data is absent", "Duplicates — same record appears twice", "Inconsistent formats — same meaning, different spelling", "Outliers — unusual but possibly real", "Impossible / invalid values — logically can't be true"], source: "Day 7-8 · slides 14–18" },
    { term: "Missing Values", definition: "Fields left blank or null — the data simply isn't there (respondent skipped, or system failed to record).", example: "A 500-row survey has 80 blank cells in the 'age' column → can't compute average age until handled.", source: "Day 7-8 · slide 14" },
    { term: "Duplicates", definition: "The same record appears more than once (form submitted twice, or careless merge). Inflates counts and skews averages.", example: "Customer 'Somchai' with the same email appears in rows 42 and 387 with identical history.", source: "Day 7-8 · slide 15" },
    { term: "Inconsistent Formats", definition: "The same information recorded in different ways, so software can't group or count it correctly.", example: "Gender column: Male / male / M / MALE / ชาย — treated as 5 separate categories.", source: "Day 7-8 · slide 16" },
    { term: "Outliers", definition: "Values far outside the normal range — may be real extreme cases OR data-entry errors. Investigate before changing.", example: "Most incomes are $5,000–$10,000 but one reads $10,000,000 — billionaire or typo?", source: "Day 7-8 · slide 17" },
    { term: "Impossible / Invalid Values", definition: "Values that are logically impossible or contradict another field. NOT outliers — they are errors to remove or correct.", example: "Age = 999, or a purchase date of 32/13/2024.", source: "Day 7-8 · slide 18" },

    // --- Missing data mechanisms ---
    { term: "MCAR (Missing Completely At Random)", definition: "Missing for no particular reason, purely by chance, unrelated to any variable. Safe to delete those rows. (cue: pure accident)", example: "A survey tablet crashed and lost 15 random responses.", source: "Day 7-8 · slide 19" },
    { term: "MAR (Missing At Random)", definition: "Missingness relates to another OBSERVED variable, not the missing value itself. Impute using group-specific estimates. (cue: explainable by observed data)", example: "Men skip 'skincare spending' more than women → impute by gender-specific average.", source: "Day 7-8 · slide 19" },
    { term: "MNAR (Missing Not At Random)", definition: "Missingness depends on the missing value itself; deleting or imputing biases results. (cue: the missing answer is the reason it's missing)", example: "High-income people skip the income question → imputing the average underestimates income.", source: "Day 7-8 · slide 19" },
    { term: "Imputation methods", definition: "Fill missing values with a calculated estimate — match the method to the variable type.", lead: "Match the method to the variable type", list: ["Numeric, normal spread → MEAN imputation", "Numeric, skewed / has outliers → MEDIAN imputation", "Categorical → MODE imputation"], source: "Day 7-8 · slide 20" },

    // --- Outlier handling ---
    { term: "IQR Rule", definition: "Interquartile Range = middle 50% of data (Q3 − Q1). Flag any value more than 1.5× IQR above Q3 or below Q1 as a potential outlier.", example: "Q1 = $2,000, Q3 = $8,000, IQR = $6,000 → upper fence = 8,000 + 1.5×6,000 = $17,000.", source: "Day 7-8 · slide 21" },
    { term: "Z-score method", definition: "Measures how many standard deviations a value is from the mean. Values beyond ±3 SD are typically considered outliers.", example: "Mean = $500, SD = $100; a $1,200 purchase = z of +7 → almost certainly an error or extreme case.", source: "Day 7-8 · slide 21" },
    { term: "Dealing with outliers — 4 options", definition: "Remove · Cap (Winsorize) · Transform · Keep & note.", lead: "Depends on whether it's real or an error", list: ["Remove — clearly an error (age = 999 → delete row)", "Cap / Winsorize — real but extreme (cap values above $17,000)", "Transform — skewed distribution (log-transform income)", "Keep & note — legitimate extreme (VIP spends $500k/mo; report separately)"], source: "Day 7-8 · slide 22" },

    // --- Data organization ---
    { term: "Data Organization — 6 tasks", definition: "Harmonize labels · consistent date/number formats · data-type checks · normalize/rescale · never overwrite raw · keep a cleaning log.", lead: "Make cleaned data consistent & safe to analyze", list: ["Categorical label harmonization (same meaning → one label)", "Date / number format consistency (one format, e.g. YYYY-MM-DD)", "Data-type checks (age as number, ID as text)", "Normalizing / rescaling (variables on the same scale)", "Never overwrite raw data (work on a copy)", "Keep a cleaning log (record every change)"], source: "Day 7-8 · slides 23–28" },
    { term: "Normalizing / Rescaling", definition: "When variables use different scales, rescale so they're comparable (e.g. divide each by its max → 0–1); otherwise the bigger-number variable dominates the analysis.", example: "Satisfaction 7/10 = 0.70 and NPS 70/100 = 0.70 → now directly comparable.", source: "Day 7-8 · slide 26" },
    { term: "Never overwrite raw data", definition: "Always work on a copy — the raw file is your only safety net; a bad cleaning decision can't be undone. The raw file is read-only.", example: "Keep survey_data_RAW.xlsx untouched; do all cleaning in survey_data_CLEAN.xlsx.", source: "Day 7-8 · slide 27" },
    { term: "Cleaning log", definition: "A written record of every change — what changed, why, and how many rows were affected. Makes your work reproducible, auditable, and trustworthy.", example: "Step 1: deleted 12 duplicate rows (same respondent ID) — 12 rows affected.", source: "Day 7-8 · slide 28" }
  ],

  mcqs: [
    {
      q: "Using the Yamane formula with N = 10,000 and e = 0.05, the sample size is approximately:",
      options: ["1,000", "385", "500", "100"],
      correct: 1,
      explain: "n = 10,000 / (1 + 10,000 × 0.05²) = 10,000 / 26 ≈ 385.",
      source: "Day 7-8 · slide 6"
    },
    {
      q: "Which sampling technique selects every Nth person from an ordered list after a random start?",
      options: ["Cluster", "Stratified", "Systematic", "Quota"],
      correct: 2,
      explain: "Systematic sampling: random start, then every Nth (interval = population ÷ sample).",
      source: "Day 7-8 · slide 10"
    },
    {
      q: "Which of these is a NON-probability sampling technique?",
      options: ["Simple random", "Stratified", "Cluster", "Quota"],
      correct: 3,
      explain: "Quota (like convenience and snowball) is non-probability — selection within quotas isn't random. The others are probability methods.",
      source: "Day 7-8 · slide 13"
    },
    {
      q: "High-income respondents skip the income question because they don't want to reveal a high number. This missing data is:",
      options: ["MCAR", "MAR", "MNAR", "None — it's an outlier"],
      correct: 2,
      explain: "The missingness depends on the missing value itself (high income) → MNAR. Imputing the average would bias results downward.",
      source: "Day 7-8 · slide 19"
    },
    {
      q: "For a numeric variable that is skewed / has outliers, the best imputation method is:",
      options: ["Mean", "Median", "Mode", "Delete all rows"],
      correct: 1,
      explain: "Median is less affected by extreme values, so it's preferred for skewed numeric data.",
      source: "Day 7-8 · slide 20"
    },
    {
      q: "With Q1 = $2,000 and Q3 = $8,000, the IQR-rule upper fence for outliers is:",
      options: ["$10,000", "$14,000", "$17,000", "$8,000"],
      correct: 2,
      explain: "IQR = 8,000 − 2,000 = 6,000. Upper fence = Q3 + 1.5×IQR = 8,000 + 9,000 = $17,000.",
      source: "Day 7-8 · slide 21"
    },
    {
      q: "An age recorded as 999 is best described as:",
      options: ["An outlier (rare but possible)", "An impossible/invalid value (an error)", "A missing value", "A duplicate"],
      correct: 1,
      explain: "999 is logically impossible — an invalid value (error to remove/correct), not a mere outlier.",
      source: "Day 7-8 · slide 18"
    },
    {
      q: "A Customer ID like '00142' should be stored as which data type?",
      options: ["Number", "Text", "Date", "Boolean"],
      correct: 1,
      explain: "IDs should be text — stored as a number, the leading zeros get dropped ('00142' → '142').",
      source: "Day 7-8 · slide 25"
    },
    {
      q: "Why should you never overwrite the raw data file?",
      options: [
        "It makes the file smaller",
        "The raw file is your only safety net if a cleaning decision is wrong",
        "Software requires it",
        "It speeds up analysis"
      ],
      correct: 1,
      explain: "Raw data is read-only — once overwritten, a bad cleaning decision can't be undone. Work on a copy.",
      source: "Day 7-8 · slide 27"
    },
    {
      q: "In the Z-score method, values are typically flagged as outliers when they are beyond:",
      options: ["±1 SD", "±2 SD", "±3 SD", "±5 SD"],
      correct: 2,
      explain: "Values beyond ±3 standard deviations from the mean are typically considered outliers.",
      source: "Day 7-8 · slide 21"
    }
  ],

  scenarios: [
    {
      question: "Your customer base is 60% women, 30% men, 10% non-binary, and you must guarantee each group is represented. Which sampling technique?",
      answer: "Stratified sampling",
      options: ["Cluster sampling", "Convenience sampling", "Simple random sampling"],
      explain: "Important subgroups must each be represented → split into strata and sample within each.",
      source: "Day 7-8 · slide 8"
    },
    {
      question: "Customers are spread across all 47 prefectures and surveying everywhere is too expensive, so you randomly pick 10 prefectures and survey within them. This is:",
      answer: "Cluster sampling",
      options: ["Stratified sampling", "Systematic sampling", "Quota sampling"],
      explain: "Geographically spread population + cost → randomly choose whole clusters (prefectures) and study inside them.",
      source: "Day 7-8 · slide 9"
    },
    {
      question: "A researcher interviews a few rare K-pop collectors, then asks each to introduce more collectors. Which technique?",
      answer: "Snowball sampling",
      options: ["Convenience sampling", "Quota sampling", "Cluster sampling"],
      explain: "Hard-to-reach niche group where participants refer others → snowball sampling.",
      source: "Day 7-8 · slide 12"
    },
    {
      question: "Interviewers recruit whoever is available until they fill targets of 170 women and 163 men. This is:",
      answer: "Quota sampling",
      options: ["Stratified sampling", "Simple random sampling", "Systematic sampling"],
      explain: "Fixed subgroup targets filled by convenience (not random) → quota sampling.",
      source: "Day 7-8 · slide 13"
    },
    {
      question: "Men skip the 'skincare spending' question more often than women, but it's unrelated to the actual amount. This missing data is:",
      answer: "MAR (Missing At Random)",
      options: ["MCAR (Missing Completely At Random)", "MNAR (Missing Not At Random)", "An invalid value"],
      explain: "Missingness is explained by an observed variable (gender), not the value itself → MAR.",
      source: "Day 7-8 · slide 19"
    },
    {
      question: "A gender column contains 'Male', 'male', 'M', and 'MALE'. Which data-cleaning problem is this?",
      answer: "Inconsistent formats",
      options: ["Missing values", "Duplicates", "Outliers"],
      explain: "Same meaning written different ways → inconsistent formats; software treats them as separate categories.",
      source: "Day 7-8 · slide 16"
    },
    {
      question: "A genuine VIP customer spends $500,000/month — real data, just rare. Best way to handle this outlier?",
      answer: "Keep & note (report separately)",
      options: ["Remove the row", "Replace with the mean", "Treat it as an invalid value"],
      explain: "A legitimate extreme should be kept but reported separately, not deleted.",
      source: "Day 7-8 · slide 22"
    },
    {
      question: "You want to compare a satisfaction score (1–10) with an NPS score (0–100) in the same model. What should you do first?",
      answer: "Normalize / rescale both to the same scale",
      options: ["Delete the smaller-scale variable", "Use the raw numbers directly", "Convert both to text"],
      explain: "Without rescaling, the larger-number variable (NPS) dominates. Rescale both to 0–1 (e.g. 7/10 = 0.70, 70/100 = 0.70).",
      source: "Day 7-8 · slide 26"
    }
  ]
});
