// Block 1 — Foundations (Class 1–2)
// Source: MRA Class 1 & 2 notes (definitions, MR vs analytics, decisions, importance)

window.MRA_BLOCKS = window.MRA_BLOCKS || [];
window.MRA_BLOCKS.push({
  id: 1,
  title: "Foundations",
  classes: "Class 1–2",

  // term ↔ definition — powers Flashcards, Conectar (match), and auto Quiz
  concepts: [
    { term: "Market", definition: "A place or platform where buyers and sellers interact." },
    { term: "Marketing", definition: "The process of understanding and fulfilling customer needs — including production, distribution, promotion, and selling." },
    { term: "Market Research", definition: "The systematic design, collection, analysis, and reporting of data relevant to a specific marketing situation. (Kotler & Armstrong)" },
    { term: "Marketing Analytics", definition: "Collecting, managing, analyzing, and interpreting data using tools and technologies to generate insights that support marketing decisions and improve performance." },
    { term: "The 4 steps of Market Research", definition: "Define → Develop → Implement → Interpret.", details: "Define the problem & objectives · Develop the plan · Implement (collect & analyze data) · Interpret & report findings." },
    { term: "Technology vs. Tool", definition: "Technology = the method/approach (e.g. a market survey). Tool = what executes it (e.g. Google Sheets)." },
    { term: "Market Analysis", definition: "The broad finding — e.g. 'sales fell 30% over six months'." },
    { term: "Market Analytics (granular)", definition: "The deeper, granular insight — e.g. 'most of the loss came from mobile users aged 12–35'." },
    { term: "Focus of Market Research", definition: "Understanding the CUSTOMER — who they are (demographics, needs) and WHY they act that way." },
    { term: "Focus of Marketing Analytics", definition: "Understanding BEHAVIOR — WHAT customers do, patterns in real-time data, and predicting what's next." },
    { term: "Research vs. Analytics (integration)", definition: "Research explains the WHY; Analytics shows the WHAT and HOW. Combined → tailored experiences." },
    { term: "Long-term marketing decisions", definition: "Target market selection · brand positioning · product/service offering · market entry · growth strategy." },
    { term: "Short-term marketing decisions", definition: "Budget allocation · pricing · channel/distribution · promotion/content · team structure." },
    { term: "ROI", definition: "Return on Investment — a broad return KPI, similar in scope to net sales." },
    { term: "CAC", definition: "Customer Acquisition Cost — the cost of acquiring a new customer." },
    { term: "CLV", definition: "Customer Lifetime Value — how valuable a customer is over the long term." }
  ],

  // Hand-written multiple choice — powers Quiz mode
  mcqs: [
    {
      q: "Which best defines Market Research?",
      options: [
        "The process of selling products to as many customers as possible",
        "The systematic design, collection, analysis, and reporting of data relevant to a specific marketing situation",
        "Using software tools to automate advertising campaigns",
        "Predicting customer behavior using AI models"
      ],
      correct: 1,
      explain: "Market Research = the systematic design, collection, analysis, and reporting of data relevant to a specific marketing situation (Kotler & Armstrong)."
    },
    {
      q: "Which is NOT one of the 4 major steps of market research?",
      options: [
        "Defining the problem and research objectives",
        "Developing the research plan",
        "Implementing the plan and analyzing data",
        "Outsourcing the analysis to a third party"
      ],
      correct: 3,
      explain: "The 4 steps are Define → Develop → Implement → Interpret. Outsourcing is not one of them."
    },
    {
      q: "A team uses a customer survey, built and distributed via Google Forms. Which is the TECHNOLOGY and which is the TOOL?",
      options: [
        "Survey = tool; Google Forms = technology",
        "Survey = technology; Google Forms = tool",
        "Both are tools",
        "Both are technologies"
      ],
      correct: 1,
      explain: "Technology = the method/approach (the survey). Tool = what executes it (Google Forms)."
    },
    {
      q: "'Most of our lost users were mobile users aged 12–35.' This statement is an example of:",
      options: [
        "Market analysis (broad finding)",
        "Market analytics (granular insight)",
        "A research objective",
        "A marketing budget decision"
      ],
      correct: 1,
      explain: "Analytics is the granular, deeper insight. The broad version ('sales fell 30%') would be analysis."
    },
    {
      q: "Market Research primarily explains the ____, while Marketing Analytics primarily shows the ____.",
      options: [
        "what & how ; why",
        "why ; what & how",
        "cost ; revenue",
        "past ; future only"
      ],
      correct: 1,
      explain: "Research explains WHY customers act; Analytics shows WHAT they do and HOW (and predicts next steps)."
    },
    {
      q: "Which of the following is a LONG-TERM marketing decision?",
      options: [
        "Marketing budget allocation",
        "Pricing strategy",
        "Brand positioning & value proposition",
        "Promotional & content strategy"
      ],
      correct: 2,
      explain: "Brand positioning is long-term. Budget allocation, pricing, and promotion/content are short-term decisions."
    },
    {
      q: "A KPI that measures how valuable a customer is over the long term is:",
      options: ["ROI", "CAC", "CLV", "CPM"],
      correct: 2,
      explain: "CLV = Customer Lifetime Value. CAC is acquisition cost; ROI is a broad return measure."
    },
    {
      q: "Which task best fits MARKETING ANALYTICS (rather than market research)?",
      options: [
        "Interviewing customers to understand their motivations",
        "Tracking where users click and predicting what they'll do next",
        "Running a focus group to explore attitudes",
        "Describing customer demographics through a survey"
      ],
      correct: 1,
      explain: "Analytics = understanding behavior from real-time data and predicting next actions. The others are research (understanding the customer / the why)."
    }
  ],

  // Application / scenario questions — powers Reto mode (open-ended exam style)
  scenarios: [
    {
      question: "A company reports 'sales dropped 30% over six months.' An analyst then finds the drop is concentrated in mobile users aged 12–35. The second statement is an example of:",
      answer: "Market analytics (granular insight)",
      options: ["Market analysis (broad finding)", "A research objective", "A short-term pricing decision"],
      explain: "Going from the broad number to the granular 'who/where' is analytics."
    },
    {
      question: "A team runs interviews to understand WHY customers feel loyal to a brand. This work belongs to:",
      answer: "Market research",
      options: ["Marketing analytics", "Budget allocation", "Channel strategy"],
      explain: "Understanding the WHY behind customer attitudes is the role of market research."
    },
    {
      question: "Deciding which new country to enter over the next 3 years is a:",
      answer: "Long-term marketing decision",
      options: ["Short-term marketing decision", "Data-cleaning task", "Sampling technique"],
      explain: "Market entry strategy is one of the five long-term decisions."
    },
    {
      question: "A subscription app wants to know the long-term worth of an average user. Which KPI fits best?",
      answer: "CLV",
      options: ["CAC", "ROI", "CPM"],
      explain: "CLV (Customer Lifetime Value) measures long-term worth; CAC is acquisition cost."
    },
    {
      question: "An e-commerce dashboard shows real-time clickstream patterns and predicts next purchases. This capability is:",
      answer: "Marketing analytics",
      options: ["Market research", "A focus group", "A research brief"],
      explain: "Real-time behavioral patterns + prediction = marketing analytics."
    },
    {
      question: "Your manager says: 'Run a survey, built in Google Forms.' Which part is the TECHNOLOGY?",
      answer: "The survey (the method)",
      options: ["Google Forms (the tool)", "The laptop", "The internet connection"],
      explain: "The survey is the technology/method; Google Forms is the tool that executes it."
    }
  ]
});
