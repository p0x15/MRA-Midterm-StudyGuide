// Block 5 — Analysis & Analytics (Class 9–12)
// Source decks: MRA-Day9 (Class 9), MRA-Day10 (Class 10), MRA-Day12 (Class 11), MRA-Day13 (Class 12)
// Note: Class 11 was taught on Day 12 and Class 12 on Day 13 (Day 11 had no class).

window.MRA_BLOCKS = window.MRA_BLOCKS || [];
window.MRA_BLOCKS.push({
  id: 5,
  title: "Analysis & Analytics",
  classes: "Class 9–12",

  concepts: [
    // ===== Class 9 — Basic data analysis techniques =====
    { term: "Categories of Data Analysis", definition: "Descriptive · Comparative · Relationship · Time-based · Predictive/Advanced.", lead: "5 categories", list: ["Descriptive — summarize data (mean, median, mode, frequency)", "Comparative — compare groups (cross-tabulation)", "Relationship — examine links (correlation)", "Time-based — changes over time (trend analysis)", "Predictive / Advanced — predict & deeper insight (regression, cluster, sentiment)"], source: "Day 9 · slide 5" },
    { term: "Descriptive statistics (Mean / Median / Mode / Frequency)", definition: "Summarize and describe data.", lead: "Summarize & describe data", list: ["Mean — the average (4,5,3,4,4 → 20/5 = 4.0)", "Median — the middle value in ordered data (2,3,4,4,5 → 4); useful with outliers", "Mode — the most common value (1,2,2,3,4 → 2)", "Frequency — how many times a value appears (30 chose 'Satisfied')"], source: "Day 9 · slide 6" },
    { term: "Cross-Tabulation", definition: "Comparative analysis that compares two variables to identify relationships between groups; supports targeting and segmentation.", example: "Age 18–25 show greater interest in SHGC than the 26–35 group.", source: "Day 9 · slide 7" },
    { term: "Correlation Analysis", definition: "Relationship analysis that measures the strength and direction of the link between two variables. +1 = strong positive, 0 = no relationship, −1 = strong negative.", example: "Higher app-usage time may be associated with higher customer satisfaction.", source: "Day 9 · slide 8" },
    { term: "Trend Analysis", definition: "Time-based analysis that examines changes in data over time to identify growth, decline, or patterns and forecast demand.", example: "SHGC downloads: Jan 500 → Feb 700 → Mar 950 (clear upward trend).", source: "Day 9 · slide 9" },
    { term: "Regression Analysis", definition: "Predictive analysis that examines how one variable influences another and predicts future outcomes.", example: "Estimating how much sales rise as advertising spend increases.", source: "Day 9 · slide 10" },
    { term: "Cluster Analysis", definition: "Groups customers with similar characteristics or behaviors into segments (customer segmentation).", example: "An app groups users into health-conscious young professionals, frequent travelers, and older health-monitoring users.", source: "Day 9 · slide 11" },
    { term: "Sentiment Analysis", definition: "Uses text data to identify emotions, opinions, or attitudes toward a product/brand; classifies opinions as positive, negative, or neutral.", example: "'Very useful and easy to use' → positive; 'privacy concerns make me uncomfortable' → negative.", source: "Day 9 · slide 12" },

    // ===== Class 9 — Data visualization =====
    { term: "Data Visualization", definition: "Presenting data using charts, graphs, and visual elements to make information easier to understand. It simplifies complex data, reveals trends quickly, supports decisions, and improves communication of findings.", source: "Day 9 · slide 13" },
    { term: "What makes a good visualization", definition: "Keep it simple · choose the right graph · clear labels & titles · accurate scale · highlight key insights.", lead: "5 principles of a good visualization", list: ["Keep it simple — avoid clutter & unnecessary design", "Choose the right graph for the data", "Use clear labels and titles", "Maintain accurate scale (no misleading axes)", "Highlight the key insights"], source: "Day 9 · slide 14" },
    { term: "Box & Whisker Plot", definition: "Shows data distribution and outliers; focuses on median and variability. Components: minimum, Q1, median, Q3, maximum, whiskers (spread), and dots for outliers.", example: "Price range, customer satisfaction level.", source: "Day 9 · slide 16" },
    { term: "Correlation Matrix", definition: "Shows the correlation between multiple variables at once; coefficients range −1 to +1, with color shading indicating strength.", example: "Identifying which factors most influence willingness to pay.", source: "Day 9 · slide 17" },
    { term: "Recommended analysis & viz tools", definition: "Excel · Google Sheets · SPSS · R · Python · Tableau · Power BI · Looker Studio · NVivo.", lead: "Tools by main use", list: ["Excel — basic analysis, charts, pivot tables (beginners)", "Google Sheets — online collaboration / group projects", "SPSS — statistical analysis (academic & survey research)", "R / Python — advanced statistics & analytics, big data", "Tableau / Power BI / Looker Studio — dashboards & BI", "NVivo — qualitative / text analysis"], source: "Day 9 · slide 18" },

    // ===== Class 10 — Data types & chart matching =====
    { term: "Data Types", definition: "Categorical · Numerical · Ordinal · Text.", lead: "4 data types", list: ["Categorical — group names/types (Gender, Country)", "Numerical — quantities/values (Age, Rating, Hours)", "Ordinal — ranked values (Satisfaction scale 1–5)", "Text (Labels) — open responses (comments)"], source: "Day 10 · slide 5" },
    { term: "Chart Type Matching", definition: "Different charts suit different data types.", lead: "Match the chart to the data", list: ["Bar chart — compare categories (1 categorical + 1 numerical)", "Histogram — frequency distribution of continuous data (1 numerical, binned)", "Pie chart — parts of a whole", "Line chart — trends over time (1 time-based + 1 numerical)", "Scatter plot — relationship between two numerical variables", "Box & whisker — spread & outliers", "Heatmap — color-based comparison (2 categorical + 1 numerical)"], source: "Day 10 · slides 6–8" },

    // ===== Class 11 (Day 12) — Data analytics & the 4 types =====
    { term: "Data Analytics", definition: "The process of collecting, organizing, cleaning, analyzing, and interpreting data to discover useful patterns, generate insights, and support decision-making — turning raw data into meaningful information.", source: "Day 12 · slide 6" },
    { term: "Data Analysis vs. Data Analytics", definition: "Analysis examines raw data to find patterns ('what does the data say?'); Analytics is broader — analysis + modeling + action ('what does the data mean?').", lead: "Data Analysis → Data Analytics", list: ["Finds patterns in raw data → answers business questions", "Descriptive summaries → analysis + modeling + action", "Output: charts, averages → actionable insights & forecasts", "Asks 'what does the data say?' → asks 'what does it mean?'"], source: "Day 12 · slide 7" },
    { term: "Descriptive Analytics", definition: "'What happened?' Summarizes past data and reveals historical trends — the starting point of any analysis.", example: "A clothing brand reports that sales increased 15% last quarter.", source: "Day 12 · slide 11" },
    { term: "Diagnostic Analytics", definition: "'Why did it happen?' Analyzes the causes behind past outcomes, exploring relationships using correlation and root-cause analysis.", example: "Sales dropped in March because the website had a checkout error for two weeks and foot traffic fell after a nearby station renovation.", source: "Day 12 · slide 12" },
    { term: "Predictive Analytics", definition: "'What will happen next?' Uses historical data, trends, and statistical models (regression, time series) to forecast future outcomes with probability.", example: "A fitness app predicts 60% of new users become inactive after 10 days.", source: "Day 12 · slide 13" },
    { term: "Prescriptive Analytics", definition: "'What should we do?' Goes beyond forecasting to recommend actions using optimization models, AI, and simulation. The most advanced and most impactful type.", example: "A restaurant chain uses AI to recommend the best time to launch a loyalty program.", source: "Day 12 · slide 14" },

    // ===== Class 12 (Day 13) — Strategic uses, applications, advanced tech =====
    { term: "Strategic Uses of Market Analytics", definition: "Customer segmentation · market forecasting · pricing strategy · marketing optimization · product development · location analysis.", lead: "6 strategic areas (+ example brand)", list: ["Customer segmentation — group by behavior (Amazon)", "Market forecasting — predict demand (retail sales)", "Pricing strategy — optimize prices (airline dynamic pricing)", "Marketing optimization — measure ROI (Google Ads)", "Product development — identify needs (Apple)", "Location analysis — pick store sites (Starbucks)"], source: "Day 13 · slide 5" },
    { term: "7 Marketing Analytics Applications", definition: "Customer · Campaign · Social Media · Web · Pricing · Product · Sentiment.", lead: "Each answers a different business question", list: ["Customer — who are my customers? (Amazon · LTV)", "Campaign — which activities work? (Google Ads · ROI/CTR)", "Social Media — how do we engage online? (Nike · engagement rate)", "Web — how do users navigate our site? (Booking.com · bounce rate)", "Pricing — what price maximizes revenue? (Uber · price elasticity)", "Product — how is the product used? (Netflix · NPS)", "Sentiment — what do customers feel? (Starbucks · sentiment score)"], source: "Day 13 · slides 8–16" },
    { term: "Big Data — the 5 V's", definition: "Volume · Velocity · Variety · Veracity · Value.", lead: "The 5 V's of Big Data", list: ["Volume — massive amounts of data generated continuously", "Velocity — high speed of data generation & processing", "Variety — multiple formats (text, images, video, sensor)", "Veracity — accuracy & reliability of the data", "Value — usefulness of the data for decision-making"], source: "Day 13 · slide 18" },
    { term: "Real-Time Analytics", definition: "Analyzing data immediately as it is generated, responding within milliseconds/seconds rather than hours/days — live streaming data, immediate automated decisions.", example: "Banks flag suspicious transactions in real time, before they complete (fraud detection).", source: "Day 13 · slide 19" },
    { term: "AI & Machine Learning in Marketing", definition: "Applications: personalized advertising, chatbots, predictive targeting, sentiment analysis. Ethical concerns: algorithm bias, privacy risks (GDPR/APPI), lack of transparency, and over-automation.", source: "Day 13 · slide 20" }
  ],

  mcqs: [
    {
      q: "Which measure of central tendency is most useful when the data has outliers?",
      options: ["Mean", "Median", "Mode", "Frequency"],
      correct: 1,
      explain: "The median (middle value) is less affected by extreme values than the mean.",
      source: "Day 9 · slide 6"
    },
    {
      q: "A correlation coefficient of −1 indicates:",
      options: ["No relationship", "A strong positive relationship", "A strong negative relationship", "A causal relationship"],
      correct: 2,
      explain: "+1 = strong positive, 0 = none, −1 = strong negative. (Correlation ≠ causation.)",
      source: "Day 9 · slide 8"
    },
    {
      q: "Which analysis technique groups customers with similar characteristics into segments?",
      options: ["Regression analysis", "Cluster analysis", "Trend analysis", "Cross-tabulation"],
      correct: 1,
      explain: "Cluster analysis = customer segmentation.",
      source: "Day 9 · slide 11"
    },
    {
      q: "To show how a value changes over time, the best chart is a:",
      options: ["Pie chart", "Scatter plot", "Line chart", "Heatmap"],
      correct: 2,
      explain: "Line charts track changes/trends over time (1 time-based + 1 numerical variable).",
      source: "Day 10 · slides 6–8"
    },
    {
      q: "Data analytics differs from data analysis because analytics primarily asks:",
      options: [
        "'What does the data say?'",
        "'What does the data mean?' (and adds modeling + action)",
        "'How big is the dataset?'",
        "'Who collected the data?'"
      ],
      correct: 1,
      explain: "Analysis finds patterns ('what does the data say?'); analytics is broader (analysis + modeling + action), asking 'what does it mean?'.",
      source: "Day 12 · slide 7"
    },
    {
      q: "Analytics that answers 'Why did it happen?' using root-cause analysis is:",
      options: ["Descriptive", "Diagnostic", "Predictive", "Prescriptive"],
      correct: 1,
      explain: "Diagnostic analytics explains the causes behind past outcomes.",
      source: "Day 12 · slide 12"
    },
    {
      q: "Which analytics type is the most advanced, recommending actions via optimization/AI?",
      options: ["Descriptive", "Diagnostic", "Predictive", "Prescriptive"],
      correct: 3,
      explain: "Prescriptive analytics ('what should we do?') goes beyond forecasting to recommend actions.",
      source: "Day 12 · slide 14"
    },
    {
      q: "In the 5 V's of Big Data, 'Velocity' refers to:",
      options: [
        "The accuracy of the data",
        "The high speed of data generation and processing",
        "The variety of data formats",
        "The usefulness of the data"
      ],
      correct: 1,
      explain: "Velocity = the speed at which data is generated and processed. (Volume = amount, Variety = formats, Veracity = accuracy, Value = usefulness.)",
      source: "Day 13 · slide 18"
    },
    {
      q: "A bank flagging suspicious transactions before they complete is an example of:",
      options: ["Traditional batch analytics", "Real-time analytics", "Descriptive analytics", "Cross-tabulation"],
      correct: 1,
      explain: "Acting within milliseconds on live data = real-time analytics (fraud detection).",
      source: "Day 13 · slide 19"
    },
    {
      q: "Which marketing analytics application answers 'what price maximizes revenue?'",
      options: ["Web analytics", "Pricing analytics", "Social media analytics", "Campaign analytics"],
      correct: 1,
      explain: "Pricing analytics uses demand, competitor prices, and seasonality to set the right price (e.g. Uber).",
      source: "Day 13 · slides 8–16"
    }
  ],

  scenarios: [
    {
      question: "A clothing brand reports that sales increased 15% last quarter. Which type of analytics is this?",
      answer: "Descriptive (what happened?)",
      options: ["Diagnostic (why?)", "Predictive (what will happen?)", "Prescriptive (what should we do?)"],
      explain: "Summarizing past performance = descriptive analytics.",
      source: "Day 12 · slide 11"
    },
    {
      question: "A team finds that March sales dropped because of a two-week checkout bug and a nearby station renovation. This is:",
      answer: "Diagnostic (why did it happen?)",
      options: ["Descriptive (what happened?)", "Predictive (what will happen?)", "Prescriptive (what should we do?)"],
      explain: "Investigating the root cause behind a past outcome = diagnostic analytics.",
      source: "Day 12 · slide 12"
    },
    {
      question: "A fitness app estimates that 60% of new users will become inactive after 10 days. This is:",
      answer: "Predictive (what will happen next?)",
      options: ["Descriptive (what happened?)", "Diagnostic (why?)", "Prescriptive (what should we do?)"],
      explain: "Forecasting a future outcome with probability = predictive analytics.",
      source: "Day 12 · slide 13"
    },
    {
      question: "Management uses an AI model to recommend the single best time to launch a loyalty program. This is:",
      answer: "Prescriptive (what should we do?)",
      options: ["Descriptive (what happened?)", "Diagnostic (why?)", "Predictive (what will happen?)"],
      explain: "Recommending a specific action via AI/optimization = prescriptive analytics.",
      source: "Day 12 · slide 14"
    },
    {
      question: "Monthly income data is heavily skewed by a few very high earners. Which average best represents the typical value?",
      answer: "Median",
      options: ["Mean", "Mode", "Frequency"],
      explain: "Median is robust to outliers; the mean would be pulled up by the high earners.",
      source: "Day 9 · slide 6"
    },
    {
      question: "You want to visualize the relationship between two numerical variables (ad spend vs. sales). Best chart?",
      answer: "Scatter plot",
      options: ["Pie chart", "Bar chart", "Line chart"],
      explain: "A scatter plot shows the relationship between two numerical variables.",
      source: "Day 10 · slides 6–8"
    },
    {
      question: "A company analyzes thousands of online reviews to classify customer emotions as positive or negative. Which technique?",
      answer: "Sentiment analysis",
      options: ["Cluster analysis", "Trend analysis", "Cross-tabulation"],
      explain: "Turning text into positive/negative/neutral emotion = sentiment analysis.",
      source: "Day 9 · slide 12"
    },
    {
      question: "Uber adjusts ride prices instantly during high-demand periods using live data. This is BOTH pricing analytics and an example of:",
      answer: "Real-time analytics",
      options: ["Descriptive analytics", "Batch analytics", "Cross-tabulation"],
      explain: "Acting on live streaming data within seconds = real-time analytics.",
      source: "Day 13 · slide 19"
    }
  ]
});
