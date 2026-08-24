/**
 * ZeroErrorEnglish - Books Catalog Data & Helper Functions
 * Updated with 15 Published Amazon Kindle (KDP) Books
 */

const BOOKS_DATA = [
  {
    id: "book-01-tenses-master-grammar",
    title: "The Tense In English Grammar: A Practical Grammar Guide",
    subtitle: "Fasttrack Tenses Mastery: Zero Errors in English Tenses — Complete 12-Tense Framework, Timelines & 350+ Solved Exam Problems",
    series: "Fasttrack English Grammar Series — Book 1",
    category: "English Grammar",
    topic: "Tenses",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways", "UPSC", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 850,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/45vhuvu",
    coverImage: "img/book-01-tenses-master-grammar.webp",
    description: "A practical and exam-focused guide to mastering all 12 English tenses. Learn tense rules through timelines, clear examples, common error patterns and 350+ solved exam-level problems.",
    features: [
      "Complete 12-Tense Framework with Easy Timelines",
      "350+ Solved Exam-Level Questions",
      "Common Tense Errors & Tricky Patterns",
      "Quick Revision Rules & Memory Shortcuts"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #155e75 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-02-gerunds-infinitives-participles",
    title: "Gerunds vs Infinitives vs Participles: 500 Exam-Level Questions",
    subtitle: "Shortcut Rules, Tricky Patterns and Fully Explained Solutions for SSC CGL, Bank PO & Competitive Exams",
    series: "Fasttrack English Grammar Series — Book 2",
    category: "English Grammar",
    topic: "Gerunds, Infinitives & Participles",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways", "UPSC", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 760,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4xKzvSx",
    coverImage: "img/book-02-gerunds-infinitives-participles.webp",
    description: "Master one of the trickiest areas of English grammar with shortcut rules, confusing patterns, exam-level questions and fully explained solutions.",
    features: [
      "500 Exam-Level Practice Questions",
      "Gerund vs Infinitive vs Participle Rules",
      "Shortcut Rules for Difficult Patterns",
      "Fully Explained Answers & Error Analysis"
    ],
    coverBg: "linear-gradient(135deg, #4a0e4e 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-03-unlocking-english-modals",
    title: "Unlocking English Modals: Problem-Solving Strategies for Fluent Communication",
    subtitle: "Master Can, Could, May, Might, Must, Should, Would and Other Modals with Practical Rules",
    series: "Fasttrack English Grammar Series — Book 3",
    category: "English Grammar",
    topic: "Modals",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways", "UPSC", "IELTS"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 640,
    badge: "Popular",
    amazonUrl: "https://amzn.to/4bU9Myy",
    coverImage: "img/book-03-unlocking-english-modals.webp",
    description: "Build complete confidence with English modal auxiliaries through practical explanations, problem-solving strategies, examples and exam-focused practice.",
    features: [
      "Complete Guide to English Modal Auxiliaries",
      "Can, Could, May, Might, Must, Should & Would",
      "Problem-Solving Strategies for Tricky Questions",
      "Practical Examples for Exams & Communication"
    ],
    coverBg: "linear-gradient(135deg, #0f766e 0%, #1B3A6B 100%)",
    accentColor: "#22d3ee"
  },
  {
    id: "book-04-clauses-phrases-demystified",
    title: "Clauses & Phrases Demystified: Fix Errors and Write Confidently",
    subtitle: "A Practical Guide for Students, Writers, Professionals and Competitive Exam Aspirants",
    series: "Fasttrack English Grammar Series — Book 4",
    category: "English Grammar",
    topic: "Clauses & Phrases",
    exams: ["SSC CGL", "IBPS PO", "UPSC", "GRE", "CAT", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.8,
    reviews: 590,
    badge: "Popular",
    amazonUrl: "https://amzn.to/4bQVu1A",
    coverImage: "img/book-04-clauses-phrases-demystified.webp",
    description: "Understand clauses and phrases without confusion. Learn identification techniques, sentence structures, error correction strategies and practical usage for exams and professional writing.",
    features: [
      "Easy Methods to Identify Clauses & Phrases",
      "Independent, Dependent & Relative Clauses",
      "Common Sentence Errors & Correction Rules",
      "Exam-Focused Examples and Practice Questions"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #3730a3 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-05-question-tags-zero-errors",
    title: "Question Tags: Zero Errors",
    subtitle: "186 Rules, 60 Traps & 200+ MCQs for SSC, IBPS & Railways",
    series: "Fasttrack English Grammar Series — Book 5",
    category: "English Grammar",
    topic: "Question Tags",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 720,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4zkARot",
    coverImage: "img/book-05-question-tags-zero-errors.webp",
    description: "A complete exam-focused guide to question tags featuring 186 rules, 60 common traps and 200+ MCQs designed to eliminate errors and improve accuracy.",
    features: [
      "186 Rules for Question Tags",
      "60 Common Exam Traps Explained",
      "200+ MCQs with Answers",
      "Quick Rules for Competitive Exams"
    ],
    coverBg: "linear-gradient(135deg, #7c2d12 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-06-articles-zero-errors",
    title: "Articles for SSC CGL 2026 — Zero Errors",
    subtitle: "A/An/The Mastery with 30-Day Shortcuts, 100+ Traps & Decision Trees",
    series: "Fasttrack English Grammar Series — Book 6",
    category: "English Grammar",
    topic: "Articles",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways", "12th Standard"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 810,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4ibpEQX",
    coverImage: "img/book-06-articles-zero-errors.webp",
    description: "Master A, An and The with simple decision trees, shortcut rules, common traps and targeted practice designed especially for SSC CGL and other competitive examinations.",
    features: [
      "Complete A/An/The Mastery",
      "100+ Common Article Traps",
      "30-Day Shortcut Learning Plan",
      "Decision Trees for Fast Exam Solving"
    ],
    coverBg: "linear-gradient(135deg, #92400e 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-07-question-tags-made-easy",
    title: "Question Tags Made Easy — Never Get Them Wrong Again",
    subtitle: "Simple Rules, Clear Examples, and Quick Exercises for Perfect English",
    series: "Fasttrack English Grammar Series — Book 7",
    category: "English Grammar",
    topic: "Question Tags",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways", "Students"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.8,
    reviews: 560,
    badge: "Popular",
    amazonUrl: "https://amzn.to/4hDn2v5",
    coverImage: "img/book-07-question-tags-made-easy.webp",
    description: "Learn question tags through simple rules, clear examples and quick exercises. Ideal for students, English learners and competitive exam aspirants.",
    features: [
      "Simple Question Tag Rules",
      "Clear Examples for Every Pattern",
      "Quick Practice Exercises",
      "Common Mistakes Made Easy to Understand"
    ],
    coverBg: "linear-gradient(135deg, #155e75 0%, #1B3A6B 100%)",
    accentColor: "#22d3ee"
  },
  {
    id: "book-08-active-passive-voice",
    title: "The Ultimate Guide to Active & Passive Voice for Competitive Exams",
    subtitle: "Easy Lessons, Practice Drills, and Quick Tips to Dominate English Grammar",
    series: "Fasttrack English Grammar Series — Book 8",
    category: "English Grammar",
    topic: "Active & Passive Voice",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "UPSC", "GRE"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 780,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4xP4cpL",
    coverImage: "img/book-08-active-passive-voice.webp",
    description: "Master active and passive voice with easy transformation rules, tense-wise structures, practice drills and quick tips designed for competitive examinations.",
    features: [
      "Complete Active & Passive Voice Rules",
      "Tense-Wise Transformation Formulas",
      "Practice Drills with Exam-Level Questions",
      "Quick Tips for Fast Error-Free Solving"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #0f766e 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-09-direct-indirect-speech",
    title: "Mastering Direct & Indirect Speech",
    subtitle: "Ultimate Guide to Confident Reporting for SSC CGL, IBPS PO, CAT, CUET, UPSC & State PSCs",
    series: "Fasttrack English Grammar Series — Book 9",
    category: "English Grammar",
    topic: "Direct & Indirect Speech",
    exams: ["SSC CGL", "IBPS PO", "CAT", "CUET", "UPSC", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 730,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4xEe19H",
    coverImage: "img/book-09-direct-indirect-speech.webp",
    description: "Master reported speech with clear transformation rules, tense changes, pronoun rules, reporting verbs and exam-focused examples for major competitive examinations.",
    features: [
      "Complete Direct & Indirect Speech Rules",
      "Tense, Pronoun & Reporting Verb Changes",
      "Statement, Question, Command & Exclamation Patterns",
      "Competitive Exam Practice Questions"
    ],
    coverBg: "linear-gradient(135deg, #4a0e4e 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-10-advanced-punctuation-mastery",
    title: "Advanced Punctuation Mastery",
    subtitle: "A Complete Guide to Error-Free English for Competitive Aspirants",
    series: "Fasttrack English Grammar Series — Book 10",
    category: "English Grammar",
    topic: "Punctuation",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "UPSC", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.8,
    reviews: 510,
    badge: "Popular",
    amazonUrl: "https://amzn.to/4gzkEo3",
    coverImage: "img/book-10-advanced-punctuation-mastery.webp",
    description: "Build complete command over English punctuation with practical rules, examples, common errors and exam-focused exercises for accurate writing and error spotting.",
    features: [
      "Complete Punctuation Rules",
      "Comma, Semicolon, Colon & Apostrophe Usage",
      "Common Punctuation Errors",
      "Practice Questions for Competitive Exams"
    ],
    coverBg: "linear-gradient(135deg, #334155 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-11-100-english-grammar-shortcuts",
    title: "100 English Grammar Shortcuts",
    subtitle: "Master Key Exam Grammar Shortcuts for Faster and More Accurate Answers",
    series: "Fasttrack English Grammar Series — Book 11",
    category: "English Grammar",
    topic: "Grammar Shortcuts",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 900,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4qhqBJw",
    coverImage: "img/book-11-100-english-grammar-shortcuts.webp",
    description: "A high-speed grammar revision guide containing 100 powerful shortcuts to identify errors, solve grammar questions quickly and improve accuracy in competitive exams.",
    features: [
      "100 High-Value Grammar Shortcuts",
      "Fast Error-Spotting Techniques",
      "Rules for Frequently Tested Grammar Topics",
      "Quick Revision for Last-Minute Preparation"
    ],
    coverBg: "linear-gradient(135deg, #7c2d12 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-12-modal-auxiliaries-zero-errors",
    title: "Modal Auxiliaries Mastery: Zero Errors",
    subtitle: "The Only 150-Page Guide You Need to Crack 12th Standard & Competitive Exams with Smart Tricks, Traps & PYQs",
    series: "Fasttrack English Grammar Series — Book 12",
    category: "English Grammar",
    topic: "Modal Auxiliaries",
    exams: ["12th Standard", "SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 670,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4giW89C",
    coverImage: "img/book-12-modal-auxiliaries-zero-errors.webp",
    description: "A focused 150-page guide to modal auxiliaries featuring smart tricks, common traps, previous-year questions and exam-oriented practice for students and competitive aspirants.",
    features: [
      "Complete 150-Page Modal Auxiliaries Guide",
      "Smart Tricks & Memory Techniques",
      "Common Modal Traps Explained",
      "PYQs & Exam-Oriented Practice"
    ],
    coverBg: "linear-gradient(135deg, #0f766e 0%, #1B3A6B 100%)",
    accentColor: "#22d3ee"
  },
  {
    id: "book-13-mastering-modal-auxiliaries",
    title: "Mastering Modal Auxiliaries: From Basics to Advanced Usage",
    subtitle: "A Complete Guide for 12th Grade, CBSE, NCERT, SSC, Banking, IELTS & Competitive Exams",
    series: "Fasttrack English Grammar Series — Book 13",
    category: "English Grammar",
    topic: "Modal Auxiliaries",
    exams: ["CBSE", "NCERT", "12th Grade", "SSC", "Banking", "IELTS", "Competitive Exams"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.8,
    reviews: 580,
    badge: "Popular",
    amazonUrl: "https://amzn.to/4g9ekCs",
    coverImage: "img/book-13-mastering-modal-auxiliaries.webp",
    description: "Progress from basic to advanced modal usage with structured lessons, practical examples and practice exercises suitable for school students, IELTS learners and competitive exam aspirants.",
    features: [
      "Basics-to-Advanced Modal Usage",
      "CBSE & NCERT-Friendly Explanations",
      "IELTS and Competitive Exam Applications",
      "Practice Exercises with Practical Examples"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #3730a3 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-14-subject-verb-agreement",
    title: "Spot the Error! The Ultimate Guide to Subject-Verb Agreement",
    subtitle: "Master Every Rule, Ace Every Test and Eliminate Subject-Verb Errors",
    series: "Fasttrack English Grammar Series — Book 14",
    category: "English Grammar",
    topic: "Subject-Verb Agreement",
    exams: ["SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways", "UPSC", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 750,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4xMYMeU",
    coverImage: "img/book-14-subject-verb-agreement.webp",
    description: "Master subject-verb agreement and eliminate one of the most common sources of grammar errors. Learn every important rule through examples, traps and error-spotting practice.",
    features: [
      "Complete Subject-Verb Agreement Rules",
      "High-Frequency Error-Spotting Patterns",
      "Common Traps & Confusing Structures",
      "Exam-Level Practice for Competitive Exams"
    ],
    coverBg: "linear-gradient(135deg, #4a0e4e 0%, #1B3A6B 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-15-prepositions-in-english-grammar",
    title: "Prepositions in English Grammar",
    subtitle: "Your Confident Path to Exam Mastery for 12th Graders & Competitive Aspirants",
    series: "Fasttrack English Grammar Series — Book 15",
    category: "English Grammar",
    topic: "Prepositions",
    exams: ["12th Standard", "SSC CGL", "SSC CHSL", "IBPS PO", "Bank PO", "Railways", "State PSC"],
    price: "₹199",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 690,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4xTguND",
    coverImage: "img/book-15-prepositions-in-english-grammar.webp",
    description: "Build complete confidence in English prepositions with clear rules, usage patterns, common errors, confusing combinations and exam-focused practice.",
    features: [
      "Complete Preposition Rules & Usage",
      "Common Preposition Errors Explained",
      "Confusing Preposition Combinations",
      "Practice Questions for 12th Grade & Competitive Exams"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #155e75 100%)",
    accentColor: "#22d3ee"
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
    <article class="book-card" data-id="\( {book.id}" data-category=" \){book.category}" data-topic="${book.topic}">
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
            <p class="placeholder-subtitle" style="color: \( {book.accentColor};"> \){book.topic}</p>
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
