/**
 * ZeroErrorEnglish - Books Catalog Data & Helper Functions
 * 16 Published Amazon Kindle (KDP) Books by Veteran Educator (22+ yrs exp.)
 */

const BOOKS_DATA = [
  {
    id: "book-01-subject-verb-agreement",
    title: "Subject-Verb Agreement: The Zero-Error Rulebook",
    subtitle: "Master 45+ High-Yield Rules, Inverted Syntax & Trap Exceptions for SSC, IBPS & UPSC",
    series: "Fasttrack English Grammar Series — Book 1",
    category: "Syntax & Agreement",
    topic: "Subject-Verb Agreement",
    exams: ["SSC CGL", "IBPS PO", "UPSC CDS/NDA", "State PSC", "RRB NTPC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.9,
    reviews: 482,
    badge: "Bestseller",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE01",
    coverImage: "img/books/book-01-subject-verb-agreement.jpg",
    description: "Eliminate error-spotting blunders with the revolutionary 'Bracket Elimination Method'. Covers inverted sentence traps, collective noun anomalies, proximity rule vs. real subject dilemmas, and 250+ previous year questions from 2012-2025.",
    features: [
      "45+ High-Yield Rules with PYQ References (2012-2025)",
      "Bracket Elimination Method to isolate parenthetical clutter",
      "250+ Practice MCQs with Step-by-Step Mentor Explanations",
      "Exam-Specific Frequency Charts for SSC CGL & Bank PO"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #0D1E3A 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-02-the-tenses-in-english-grammar ",
    title: "Tenses & Time Aspects: The Sequence Blueprint",
    subtitle: "Decode Conditional Sentences, Perfect Aspect Traps & Time Adverbial Triggers",
    series: "Fasttrack English Grammar Series — Book 2",
    category: "Verbs & Tenses",
    topic: "Tenses & Conditionals",
    exams: ["SSC CGL", "IBPS PO", "UPSC CDS/NDA", "CBSE Class 12", "MPSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 395,
    badge: "Must Read",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE02",
    coverImage: "img/books/book-02-the-tenses-in-english-grammar. webp",
    description: "Stop confusing Present Perfect with Simple Past. This comprehensive guide clarifies the Sequence of Tenses in subordinate clauses, Zero/1st/2nd/3rd/Mixed Conditionals, and tricky time conjunctions (since, for, until, by the time).",
    features: [
      "Timeline Diagrams for all 12 Tenses & Compound Aspects",
      "Complete Conditional Matrix (0, 1st, 2nd, 3rd & Mixed)",
      "Time Conjunction Triggers (Since vs For, By the time vs When)",
      "180+ Error Spotting & Sentence Improvement PYQs"
    ],
    coverBg: "linear-gradient(135deg, #0f4c81 0%, #1B3A6B 100%)",
    accentColor: "#48CAE4"
  },
  {
    id: "book-03-direct-and-indirect-speech",
    title: "Direct & Indirect Speech: The Transformation Blueprint",
    subtitle: "Universal Formulas for Universal Truths, Optative Sentences & Modals",
    series: "Fasttrack English Grammar Series — Book 3",
    category: "Sentence Transformation",
    topic: "Narration",
    exams: ["SSC CGL Tier 2", "SSC CHSL", "NDA/CDS", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 310,
    badge: "Top Rated",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE03",
    coverImage: "img/books/book-03-direct-and-indirect-speech.jpg",
    description: "SSC CGL Tier 2 awards up to 27 marks for Narration. Master change of pronouns, backshifting of tenses, reporting verb substitutions, and exceptions to tense changes in historical truths and proverbs.",
    features: [
      "10-Second Transformation Technique for SSC Tier 2",
      "Reporting Verb Switch Tables (exclaimed, urged, forbade, warned)",
      "Pronoun Shift Memory Grid (SON Formula: Subject-Object-No Change)",
      "300+ Solved PYQs with Common Exam Traps Highlighted"
    ],
    coverBg: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-04-active-and-passive-voice",
    title: "Active & Passive Voice: Voice Modulation & Mechanics",
    subtitle: "From Imperative Commands to Quasi-Passive & Inverted Structures",
    series: "Fasttrack English Grammar Series — Book 4",
    category: "Sentence Transformation",
    topic: "Voice Transformation",
    exams: ["SSC CGL Tier 2", "SSC CHSL", "CDS", "State Judiciary", "MPSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.9,
    reviews: 365,
    badge: "Exam Essential",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE04",
    coverImage: "img/books/book-04-active-and-passive-voice.jpg",
    description: "Another heavyweight topic for SSC Tier 2. Learn how to transform sentences with two objects, imperative orders/requests, interrogatives with 'Who/Whom', prepositional verbs, and quasi-passive constructions like 'Sugar tastes sweet'.",
    features: [
      "Tense-to-Voice Conversion Matrix in 1 Page",
      "Quasi-Passive & Modal Passive Special Rules",
      "Preposition Retaining Rules ('laughed at' -> 'was laughed at by')",
      "220+ Tier 2 Specific MCQs with detailed elimination steps"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #2a6f97 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-05-prepositions-and-phrasal-verbs",
    title: "Prepositions & Phrasal Verbs: The Visual Master Guide",
    subtitle: "500+ Fixed Prepositions & High-Frequency Phrasal Verbs with Memory Associations",
    series: "Fasttrack English Grammar Series — Book 5",
    category: "Vocabulary & Usage",
    topic: "Prepositions & Phrasals",
    exams: ["IBPS PO", "SBI PO", "SSC CGL", "UPSC CDS", "RRB NTPC"],
    price: "₹199",
    originalPrice: "₹349",
    rating: 4.9,
    reviews: 620,
    badge: "Bestseller",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE05",
    coverImage: "img/books/book-05-prepositions-and-phrasal-verbs.jpg",
    description: "Prepositions cause the highest error rate in competitive exams. This visual guide groups fixed prepositions by emotional/contextual roots and breaks down confusing phrasal verbs (e.g., look for, look into, look down upon, look after) with mnemonic anchors.",
    features: [
      "500+ Exam-Tested Fixed Preposition Pairs",
      "Phrasal Verb Family Trees (Take, Put, Look, Bring, Call)",
      "Spatial & Temporal Preposition Diagrams",
      "Fill-in-the-Blank & Cloze Test Drills (350+ Questions)"
    ],
    coverBg: "linear-gradient(135deg, #2b2d42 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-06-non-finite-verbs",
    title: "Non-Finite Verbs: Infinitives, Gerunds & Participles",
    subtitle: "Dangling Modifiers, Bare Infinitives & Verbal Noun Disambiguation",
    series: "Fasttrack English Grammar Series — Book 6",
    category: "Verbs & Tenses",
    topic: "Non-Finites",
    exams: ["SSC CGL", "IBPS PO", "UPSC NDA/CDS", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 278,
    badge: "Top Rated",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE06",
    coverImage: "img/books/book-06-non-finite-verbs.jpg",
    description: "Solve the infamous dangling participle error once and for all. Master verbs followed strictly by Gerunds vs. Infinitives (look forward to + V-ing, used to, avoid, admit, decide), and understand bare infinitive triggers (make, let, bid, see).",
    features: [
      "Gerund vs Infinitive Decisive Cheat Sheet",
      "Dangling Participle Quick-Detection Rule",
      "Bare Infinitive Exception Catalog",
      "150+ Advanced Error-Spotting Drills"
    ],
    coverBg: "linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%)",
    accentColor: "#38bdf8"
  },
  {
    id: "book-07-spotting-the-error-bracket-method",
    title: "Spotting the Error: The Bracket-Elimination System",
    subtitle: "Step-by-Step Algorithmic Approach to 100% Accuracy in Error Detection",
    series: "Fasttrack English Grammar Series — Book 7",
    category: "Exam Strategy",
    topic: "Error Spotting",
    exams: ["SSC CGL", "IBPS PO", "SBI Clerk", "RRB NTPC", "UPSC CDS", "MPSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 5.0,
    reviews: 740,
    badge: "Bestseller",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE07",
    coverImage: "img/books/book-07-spotting-the-error-bracket-method.jpg",
    description: "The crown jewel of the Zero Error method. Rather than relying on intuition or 'sounds wrong' guesswork, use our 5-step bracket elimination protocol: Subject-Verb check -> Tense consistency -> Modifier placement -> Pronoun reference -> Parallelism.",
    features: [
      "The 5-Step Bracket Elimination Algorithm",
      "Top 50 Most Frequently Repeated Exam Traps",
      "500+ Graded Practice Sentences (Basic to Advanced Tier 2)",
      "Zero-Intuition Rule-Driven Solution Framework"
    ],
    coverBg: "linear-gradient(135deg, #0b132b 0%, #1c2541 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-08-cloze-test-mastery",
    title: "Cloze Test Mastery: Context Clues & Collocations",
    subtitle: "How to Score Full Marks in Banking & SSC Cloze Tests Without Guessing",
    series: "Fasttrack English Grammar Series — Book 8",
    category: "Comprehension & Vocabulary",
    topic: "Cloze Test",
    exams: ["IBPS PO/Clerk", "SBI PO", "SSC CGL", "RBI Grade B"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 312,
    badge: "Exam Essential",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE08",
    coverImage: "img/books/book-08-cloze-test-mastery.jpg",
    description: "Cloze tests test grammar, collocations, tone, and logical progression simultaneously. Learn backward-forward context reading, tone detection (positive/critical/neutral), and collocation pairing tricks to eliminate 3 out of 4 options immediately.",
    features: [
      "Forward-Backward Reading Strategy",
      "Collocation Power Index (Words that always travel together)",
      "Tone Matching & Conjunction Clue Method",
      "60+ Real Exam Cloze Passages with Detailed Solutions"
    ],
    coverBg: "linear-gradient(135deg, #132a13 0%, #31572c 100%)",
    accentColor: "#90be6d"
  },
  {
    id: "book-09-reading-comprehension-parajumbles",
    title: "Reading Comprehension & Parajumbles: The Linker Formula",
    subtitle: "Speed-Scanning, Question-First Techniques & Mandatory Pair Detection",
    series: "Fasttrack English Grammar Series — Book 9",
    category: "Comprehension & Vocabulary",
    topic: "RC & Sentence Rearrangement",
    exams: ["IBPS PO", "SBI PO", "SSC CGL", "UPSC CSAT", "CAT"],
    price: "₹199",
    originalPrice: "₹349",
    rating: 4.9,
    reviews: 430,
    badge: "Top Rated",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE09",
    coverImage: "img/books/book-09-reading-comprehension-parajumbles.jpg",
    description: "Crack 800-word passages in under 5 minutes without losing accuracy. Master the 'Mandatory Pair Formula' (Noun-Pronoun links, Chronology triggers, Conjunction bridges) for foolproof Sentence Rearrangement / Parajumbles.",
    features: [
      "Speed Scanning & Keyword Targeting System",
      "Mandatory Pair Identification for Parajumbles",
      "Inference vs Direct Question Dissection",
      "50+ Long Passages & 100+ Parajumbles with Step-by-Step Link Explanations"
    ],
    coverBg: "linear-gradient(135deg, #3d0066 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-10-articles-and-determiners",
    title: "Articles & Determiners: Zero Article Traps & Nuances",
    subtitle: "Definite, Indefinite & Zero Article Rules That Examiners Love to Test",
    series: "Fasttrack English Grammar Series — Book 10",
    category: "Core Grammar",
    topic: "Articles & Determiners",
    exams: ["SSC CGL", "SSC CHSL", "NDA/CDS", "State PSC", "CBSE 12"],
    price: "₹129",
    originalPrice: "₹249",
    rating: 4.7,
    reviews: 215,
    badge: "Must Read",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE10",
    coverImage: "img/books/book-10-articles-and-determiners.jpg",
    description: "Articles are deceptively simple but full of traps. Master geographical names (the Himalayas vs Mount Everest), institutions (go to hospital vs go to the hospital), determiners (few vs a few vs the few, little vs a little), and omission of articles.",
    features: [
      "Zero Article Rules (When NOT to use an article)",
      "Little vs A Little / Few vs A Few Flowchart",
      "Geographical & Institutional Noun Rules",
      "150+ Exam-Style Spotting the Error Sentences"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #3a0ca3 100%)",
    accentColor: "#4cc9f0"
  },
  {
    id: "book-11-pronouns-and-antecedents",
    title: "Pronouns & Antecedent Consistency: The Case & Agreement Guide",
    subtitle: "Relative Pronouns (Who/Whom/Which/That), Reflexive Traps & Case Rules",
    series: "Fasttrack English Grammar Series — Book 11",
    category: "Core Grammar",
    topic: "Pronouns",
    exams: ["SSC CGL", "IBPS PO", "UPSC CDS", "RRB NTPC"],
    price: "₹129",
    originalPrice: "₹249",
    rating: 4.8,
    reviews: 245,
    badge: "Exam Essential",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE11",
    coverImage: "img/books/book-11-pronouns-and-antecedents.jpg",
    description: "Stop falling for 'who vs whom' and 'each other vs one another'. This book breaks down subjective vs objective cases after 'than' and 'between', emphatic vs reflexive verbs (avail, adapt, resign), and relative pronoun antecedent agreements.",
    features: [
      "Who vs Whom 3-Second Subject/Object Test",
      "Mandatory Reflexive Verbs Masterlist",
      "Order of Pronouns Rule (231 for Good / 123 for Fault)",
      "160+ High-Yield Practice Questions"
    ],
    coverBg: "linear-gradient(135deg, #240046 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-12-adjectives-and-adverbs",
    title: "Adjectives & Adverbs: Inversion Rules & Degrees of Comparison",
    subtitle: "Order of Adjectives, Negative Adverbial Inversion & Tricky Modifiers",
    series: "Fasttrack English Grammar Series — Book 12",
    category: "Core Grammar",
    topic: "Modifiers & Inversion",
    exams: ["SSC CGL", "IBPS PO", "UPSC CDS/NDA", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 289,
    badge: "Top Rated",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE12",
    coverImage: "img/books/book-12-adjectives-and-adverbs.jpg",
    description: "Understand the Royal Order of Adjectives (OSASCOMP), Latin comparative adjectives (senior, junior, prefer to - NOT than), and negative adverbial inversions (Hardly had he..., Seldom do we..., No sooner did...).",
    features: [
      "OSASCOMP Mnemonic for Adjective Sequencing",
      "Inversion Sentence Structures with Negative Adverbs",
      "Latin Adjectives & Comparative Exceptions",
      "180+ Practice Drills with Detailed Rule Annotations"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #0077b6 100%)",
    accentColor: "#caf0f8"
  },
  {
    id: "book-13-conjunctions-and-connectors",
    title: "Conjunctions & Connectors: Correlative Pairs & Parallelism",
    subtitle: "Not only... but also, Scarcely... when, Lest... should & Parallel Structures",
    series: "Fasttrack English Grammar Series — Book 13",
    category: "Core Grammar",
    topic: "Conjunctions & Parallelism",
    exams: ["SSC CGL", "IBPS PO", "RRB NTPC", "State PSC"],
    price: "₹129",
    originalPrice: "₹249",
    rating: 4.9,
    reviews: 310,
    badge: "Must Read",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE13",
    coverImage: "img/books/book-13-conjunctions-and-connectors.jpg",
    description: "Parallelism and conjunction pairs represent 15% of all error spotting questions. Master correlative conjunctions (Either...or, Neither...nor, Although...yet), 'Lest' followed only by 'Should' or bare subjunctive, and parallel clause balancing.",
    features: [
      "Correlative Conjunctions Alignment Rules",
      "Lest / Scarcely / Hardly / No Sooner Connector Formula",
      "Faulty Parallelism Repair Techniques",
      "170+ Real Exam Questions with Step-by-Step Solutions"
    ],
    coverBg: "linear-gradient(135deg, #03045e 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-14-idioms-phrases-one-word-substitutions",
    title: "Idioms, Phrases & One-Word Substitutions: 2500+ PYQ Masterlist",
    subtitle: "High-Yield Memory Mnemonics, Etymological Roots & Frequency Classification",
    series: "Fasttrack English Grammar Series — Book 14",
    category: "Vocabulary & Usage",
    topic: "Idioms & OWS",
    exams: ["SSC CGL", "SSC CHSL", "UPSC CDS", "IBPS PO", "State PSC", "RRB"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 820,
    badge: "Bestseller",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE14",
    coverImage: "img/books/book-14-idioms-phrases-one-word-substitutions.jpg",
    description: "The ultimate vocabulary companion for competitive exams. Features 1500+ One Word Substitutions categorized by themes (government types, phobias, manias, killings, personalities) and 1000+ Idioms with origins and memory hooks.",
    features: [
      "2500+ High-Frequency Exam Entries (1997-2025)",
      "Thematic Groupings (Phobias, Manias, Political systems)",
      "Historical Story & Visual Mnemonic for Every Idiom",
      "20 Comprehensive Self-Assessment Speed Tests"
    ],
    coverBg: "linear-gradient(135deg, #4a0e4e 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-15-vocabulary-root-words-synonyms-antonyms",
    title: "Vocabulary Booster: Root Words, Synonyms & Antonyms",
    subtitle: "Learn 3,000 Words Through 200 Latin & Greek Roots with Contextual Usage",
    series: "Fasttrack English Grammar Series — Book 15",
    category: "Vocabulary & Usage",
    topic: "Root Words & Vocab",
    exams: ["SSC CGL", "IBPS PO", "CAT", "UPSC CSAT", "GRE", "NDA/CDS"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 690,
    badge: "Bestseller",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE15",
    coverImage: "img/books/book-15-vocabulary-root-words-synonyms-antonyms.jpg",
    description: "Stop rote memorization! One Latin root like 'BEN/BENE' (good) instantly unlocks 25 words (benefactor, benevolent, benediction, benign). Learn 200 high-power roots and master subtle tone shades between close synonyms.",
    features: [
      "200 Latin & Greek Roots Unlocking 3,000+ Words",
      "Tone & Connotation Nuances (e.g., Slender vs Skinny vs Emaciated)",
      "Confusable Word Pairs (Affect vs Effect, Compliment vs Complement)",
      "Mnemonic Memory Hooks & Daily 15-Minute Vocab Routine"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #155e75 100%)",
    accentColor: "#22d3ee"
  },
  {
    id: "book-16-descriptive-english-writing-blueprint",
    title: "Descriptive English Writing: Essays, Letters & Précis",
    subtitle: "Proven Formats, High-Scoring Vocab & Model Answers for Tier 2/3 & Mains",
    series: "Fasttrack English Grammar Series — Book 16",
    category: "Descriptive Writing",
    topic: "Essays, Letters & Précis",
    exams: ["SSC CGL Tier 2", "SBI PO Descriptive", "IBPS PO Mains", "UPSC CAPF/CSE", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 510,
    badge: "Top Rated",
    amazonUrl: "https://www.amazon.in/dp/B0EXAMPLE16",
    coverImage: "img/books/book-16-descriptive-english-writing-blueprint.jpg",
    description: "Ace descriptive papers with structural templates for Formal/Informal letters, Government/Editor correspondence, Socio-Economic Essay frameworks, and 1/3-word précis compression formulas.",
    features: [
      "30+ Standard Essay Blueprints (Economy, Tech, Society, Environment)",
      "Letter Writing Formats with Scoring Salutations & Sign-offs",
      "Précis Writing 4-Step Condensation Technique",
      "High-Scoring Transition Words & Formal Vocabulary Bank"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #4338ca 100%)",
    accentColor: "#F5A623"
  }
];

// Helper Functions
function getAllBooks() {
  return BOOKS_DATA;
}

function getFeaturedBooks(limit = 6) {
  return BOOKS_DATA.slice(0, limit);
}

function getBookById(id) {
  return BOOKS_DATA.find(book => book.id === id) || null;
}

function getBookCategories() {
  const categories = new Set(BOOKS_DATA.map(book => book.category));
  return Array.from(categories);
}

function getBooksByCategory(category) {
  if (!category || category === "all") return BOOKS_DATA;
  return BOOKS_DATA.filter(book => book.category.toLowerCase() === category.toLowerCase());
}

function getBooksByExam(exam) {
  if (!exam || exam === "all") return BOOKS_DATA;
  return BOOKS_DATA.filter(book => book.exams.some(e => e.toLowerCase().includes(exam.toLowerCase())));
}

function searchBooks(query) {
  if (!query) return BOOKS_DATA;
  const q = query.toLowerCase().trim();
  return BOOKS_DATA.filter(book => 
    book.title.toLowerCase().includes(q) ||
    book.subtitle.toLowerCase().includes(q) ||
    book.topic.toLowerCase().includes(q) ||
    book.category.toLowerCase().includes(q) ||
    book.exams.some(e => e.toLowerCase().includes(q)) ||
    book.description.toLowerCase().includes(q)
  );
}

/**
 * Renders a single book card HTML with fallback visual cover placeholder
 */
function renderBookCardHtml(book, layout = "grid") {
  const examPills = book.exams.slice(0, 3).map(e => `<span class="exam-pill">${e}</span>`).join("");
  const featureList = book.features ? book.features.slice(0, 2).map(f => `<li><svg class="check-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>${f}</li>`).join("") : "";
  
  return `
    <article class="book-card" data-id="${book.id}" data-category="${book.category}" data-topic="${book.topic}">
      <div class="book-cover-wrapper">
        <div class="book-badge-tag">${book.badge}</div>
        <img 
          src="${book.coverImage}" 
          alt="${book.title} - Amazon Kindle KDP Book" 
          class="book-cover-img" 
          loading="lazy" 
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="book-cover-placeholder" style="background: ${book.coverBg};">
          <div class="placeholder-spine"></div>
          <div class="placeholder-content">
            <span class="placeholder-series">${book.series.split('—')[0]}</span>
            <h4 class="placeholder-title" style="color: #ffffff;">${book.title}</h4>
            <p class="placeholder-subtitle" style="color: ${book.accentColor};">${book.topic}</p>
            <div class="placeholder-author">ZeroErrorEnglish • 22 Yrs Exp.</div>
          </div>
        </div>
      </div>
      
      <div class="book-card-body">
        <div class="book-meta-top">
          <span class="book-category-label">${book.category}</span>
          <div class="book-rating" title="${book.rating} out of 5 stars">
            <span class="star-icon">★</span>
            <strong>${book.rating}</strong>
            <span class="reviews-count">(${book.reviews})</span>
          </div>
        </div>

        <h3 class="book-title">${book.title}</h3>
        <p class="book-subtitle-text">${book.subtitle}</p>
        
        <div class="book-exam-pills">
          ${examPills}
        </div>

        <ul class="book-quick-features">
          ${featureList}
        </ul>

        <div class="book-footer-cta">
          <div class="book-pricing">
            <span class="price-current">${book.price}</span>
            <span class="price-original">${book.originalPrice}</span>
            <span class="price-format">Kindle Edition</span>
          </div>
          <a href="${book.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-amazon" aria-label="Buy ${book.title} on Amazon">
            <span>Buy on Amazon</span>
            <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  `;
}
