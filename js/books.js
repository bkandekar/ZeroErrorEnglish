/**
 * ZeroErrorEnglish - Books Catalog Data & Helper Functions
 * 16 Published Amazon Kindle (KDP) Books by Veteran Educator (22+ yrs exp.)
 */

const BOOKS_DATA = [
  {
    id: "book-1-the-tense-in-english-grammar",
    title: "The Tense In English Grammar : A Practical Grammar Guide",
    subtitle: "Complete Practical Guide to Master All English Tenses",
    series: "Fasttrack English Grammar Series — Book 1",
    category: "Verbs & Tenses",
    topic: "Tenses",
    exams: ["SSC CGL", "IBPS PO", "UPSC CDS/NDA", "CBSE Class 12", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 320,
    badge: "Must Read",
    amazonUrl: "https://amzn.to/45vhuvu",
    coverImage: "img/book-1-the-tense-in-english-grammar. webp",
    description: "A practical and comprehensive guide to mastering English tenses with clear explanations, examples and exam-oriented practice for competitive aspirants.",
    features: [
      "Clear explanation of all 12 tenses",
      "Timeline-based understanding",
      "Common exam traps highlighted",
      "Practice exercises with solutions"
    ],
    coverBg: "linear-gradient(135deg, #0f4c81 0%, #1B3A6B 100%)",
    accentColor: "#48CAE4"
  },
  {
    id: "book-02-gerunds-vs-infinitives-vs-participles",
    title: "Gerunds vs Infinitives vs Participles: 500 Exam‑Level Questions: Shortcut Rules, Tricky Patterns and Fully Explained Solutions for SSC CGL, Bank PO ... English (Fast Track English Grammar Series)",
    subtitle: "500 Exam-Level Questions with Shortcut Rules & Fully Explained Solutions",
    series: "Fasttrack English Grammar Series — Book 2",
    category: "Verbs & Tenses",
    topic: "Non-Finite Verbs",
    exams: ["SSC CGL", "IBPS PO", "Bank PO", "RRB NTPC", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.9,
    reviews: 410,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4xKzvSx",
    coverImage: "img/books/book-02-gerunds-vs-infinitives-vs-participles.jpg",
    description: "Master the difference between Gerunds, Infinitives and Participles with 500 exam-level questions, shortcut rules and fully explained solutions designed for SSC CGL and Bank PO exams.",
    features: [
      "500 Exam-Level Practice Questions",
      "Shortcut Rules for quick solving",
      "Tricky Patterns explained",
      "Fully detailed solutions"
    ],
    coverBg: "linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%)",
    accentColor: "#38bdf8"
  },
  {
    id: "book-03-unlocking-english-modals",
    title: "Unlocking English Modals: Problem-Solving Strategies for Fluent Communication",
    subtitle: "Problem-Solving Strategies for Fluent & Accurate Communication",
    series: "Fasttrack English Grammar Series — Book 3",
    category: "Verbs & Tenses",
    topic: "Modals",
    exams: ["SSC CGL", "IBPS PO", "UPSC CDS", "CBSE 12", "IELTS"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 285,
    badge: "Top Rated",
    amazonUrl: "https://amzn.to/4bU9Myy",
    coverImage: "img/books/book-03-unlocking-english-modals.jpg",
    description: "Learn practical problem-solving strategies to use English modals correctly and confidently in both spoken and written communication.",
    features: [
      "Clear difference between modals",
      "Problem-solving strategies",
      "Real-life usage examples",
      "Exam-oriented practice"
    ],
    coverBg: "linear-gradient(135deg, #312E81 0%, #1E1B4B 100%)",
    accentColor: "#A78BFA"
  },
  {
    id: "book-04-clauses-phrases-demystified",
    title: "Clauses & Phrases Demystified: Fix Errors and Write Confidently: For students, writers, and professionals aiming to excel in UPSC, GRE, and other competitive exams.",
    subtitle: "Fix Errors and Write Confidently for UPSC, GRE & Competitive Exams",
    series: "Fasttrack English Grammar Series — Book 4",
    category: "Sentence Construction",
    topic: "Clauses & Phrases",
    exams: ["UPSC", "GRE", "SSC CGL", "Bank PO", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 260,
    badge: "Must Read",
    amazonUrl: "https://amzn.to/4bQVu1A",
    coverImage: "img/books/book-04-clauses-phrases-demystified.jpg",
    description: "Demystify clauses and phrases to fix common errors and write with confidence. Ideal for students, writers and competitive exam aspirants.",
    features: [
      "Clear distinction between clauses & phrases",
      "Error-fix techniques",
      "Writing confidence building",
      "UPSC & GRE focused examples"
    ],
    coverBg: "linear-gradient(135deg, #134E4A 0%, #042F2E 100%)",
    accentColor: "#2DD4BF"
  },
  {
    id: "book-05-question-tags-zero-errors",
    title: "Question Tags : Zero Errors : 186 Rules, 60 Traps & 200+ MCQs for SSC, IBPS & Railways (Fast Track English Grammar Series)",
    subtitle: "186 Rules, 60 Traps & 200+ MCQs for SSC, IBPS & Railways",
    series: "Fasttrack English Grammar Series — Book 5",
    category: "Core Grammar",
    topic: "Question Tags",
    exams: ["SSC CGL", "IBPS", "Railways", "RRB NTPC", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.9,
    reviews: 380,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4zkARot",
    coverImage: "img/books/book-05-question-tags-zero-errors.jpg",
    description: "Complete coverage of Question Tags with 186 rules, 60 common traps and 200+ MCQs specially designed for SSC, IBPS and Railways exams.",
    features: [
      "186 Detailed Rules",
      "60 Most Common Traps",
      "200+ Practice MCQs",
      "Exam-oriented approach"
    ],
    coverBg: "linear-gradient(135deg, #701A75 0%, #4A044E 100%)",
    accentColor: "#F472B6"
  },
  {
    id: "book-06-articles-for-ssc-cgl-2026",
    title: "ARTICLES FOR SSC CGL 2026 -ZERO ERRORS: A/An/The Mastery with 30-Day Shortcuts, 100+ Traps & Decision Trees for 12th Std., Banking, Railway Exams (Fast Track English Grammar Series)",
    subtitle: "A/An/The Mastery with 30-Day Shortcuts, 100+ Traps & Decision Trees",
    series: "Fasttrack English Grammar Series — Book 6",
    category: "Core Grammar",
    topic: "Articles",
    exams: ["SSC CGL 2026", "Banking", "Railway", "12th Std", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.9,
    reviews: 450,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4ibpEQX",
    coverImage: "img/books/book-06-articles-for-ssc-cgl-2026.jpg",
    description: "Zero-error mastery of Articles (A/An/The) with 30-day shortcuts, 100+ traps and decision trees for SSC CGL 2026, Banking and Railway exams.",
    features: [
      "30-Day Shortcut Plan",
      "100+ Common Traps",
      "Decision Tree Method",
      "SSC CGL 2026 focused"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #0F2342 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-07-question-tags-made-easy",
    title: "Question Tags Made Easy – Never Get Them Wrong Again: Simple Rules, Clear Examples, and Quick Exercises for Perfect English",
    subtitle: "Simple Rules, Clear Examples & Quick Exercises for Perfect English",
    series: "Fasttrack English Grammar Series — Book 7",
    category: "Core Grammar",
    topic: "Question Tags",
    exams: ["SSC", "IBPS", "Banking", "Railways", "School Level"],
    price: "₹129",
    originalPrice: "₹249",
    rating: 4.7,
    reviews: 210,
    badge: "Must Read",
    amazonUrl: "https://amzn.to/4hDn2v5",
    coverImage: "img/books/book-07-question-tags-made-easy.jpg",
    description: "Simple and clear explanation of Question Tags with easy rules, examples and quick exercises so you never get them wrong again.",
    features: [
      "Simple & Clear Rules",
      "Plenty of Examples",
      "Quick Practice Exercises",
      "Beginner-friendly approach"
    ],
    coverBg: "linear-gradient(135deg, #701A75 0%, #4A044E 100%)",
    accentColor: "#F472B6"
  },
  {
    id: "book-08-active-passive-voice",
    title: "The Ultimate Guide to Active & Passive Voice for Competitive Exams: Easy Lessons, Practice Drills, and Quick Tips to Dominate English Grammar in UPSC, GRE, and More",
    subtitle: "Easy Lessons, Practice Drills & Quick Tips for UPSC, GRE & More",
    series: "Fasttrack English Grammar Series — Book 8",
    category: "Sentence Transformation",
    topic: "Active & Passive Voice",
    exams: ["UPSC", "GRE", "SSC CGL", "Bank PO", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.9,
    reviews: 390,
    badge: "Exam Essential",
    amazonUrl: "https://amzn.to/4xP4cpL",
    coverImage: "img/books/book-08-active-passive-voice.jpg",
    description: "Ultimate guide to Active and Passive Voice with easy lessons, practice drills and quick tips to dominate English grammar in competitive exams.",
    features: [
      "Easy step-by-step lessons",
      "Extensive practice drills",
      "Quick exam tips",
      "UPSC & GRE focused"
    ],
    coverBg: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
    accentColor: "#38BDF8"
  },
  {
    id: "book-09-direct-indirect-speech",
    title: "Mastering Direct & Indirect Speech : Ultimate Guide to Confident Reporting: For SSC CGL, IBPS PO, CAT, CUET ,UPSC and State PSCs",
    subtitle: "Ultimate Guide to Confident Reporting for SSC, IBPS, CAT, CUET & UPSC",
    series: "Fasttrack English Grammar Series — Book 9",
    category: "Sentence Transformation",
    topic: "Narration",
    exams: ["SSC CGL", "IBPS PO", "CAT", "CUET", "UPSC", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.9,
    reviews: 355,
    badge: "Top Rated",
    amazonUrl: "https://amzn.to/4xEe19H",
    coverImage: "img/books/book-09-direct-indirect-speech.jpg",
    description: "Master Direct and Indirect Speech with this ultimate guide designed for SSC CGL, IBPS PO, CAT, CUET, UPSC and State PSC aspirants.",
    features: [
      "Complete transformation rules",
      "Confident reporting techniques",
      "Multiple exam coverage",
      "Practice with explanations"
    ],
    coverBg: "linear-gradient(135deg, #3B0764 0%, #1E0533 100%)",
    accentColor: "#C084FC"
  },
  {
    id: "book-10-advanced-punctuation-mastery",
    title: "Advanced Punctuation Mastery: A Complete Guide to Error-Free English for Competitive Aspirants",
    subtitle: "Complete Guide to Error-Free English for Competitive Aspirants",
    series: "Fasttrack English Grammar Series — Book 10",
    category: "Core Grammar",
    topic: "Punctuation",
    exams: ["SSC CGL", "IBPS", "UPSC", "Bank PO", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 240,
    badge: "Must Read",
    amazonUrl: "https://amzn.to/4gzkEo3",
    coverImage: "img/books/book-10-advanced-punctuation-mastery.jpg",
    description: "Advanced guide to punctuation that helps competitive aspirants write error-free English with complete clarity and confidence.",
    features: [
      "Complete punctuation rules",
      "Error-free writing focus",
      "Competitive exam oriented",
      "Clear examples & practice"
    ],
    coverBg: "linear-gradient(135deg, #1C1917 0%, #0C0A09 100%)",
    accentColor: "#FBBF24"
  },
  {
    id: "book-11-100-english-grammar-shortcuts",
    title: "100 English Grammar Shortcuts: Master Key Exam Grammar Shortcuts",
    subtitle: "Master Key Exam Grammar Shortcuts for Faster Solving",
    series: "Fasttrack English Grammar Series — Book 11",
    category: "Exam Strategy",
    topic: "Grammar Shortcuts",
    exams: ["SSC CGL", "IBPS PO", "Banking", "Railways", "State PSC"],
    price: "₹129",
    originalPrice: "₹249",
    rating: 4.9,
    reviews: 520,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4qhqBJw",
    coverImage: "img/books/book-11-100-english-grammar-shortcuts.jpg",
    description: "100 powerful English grammar shortcuts that help you solve exam questions faster and with higher accuracy.",
    features: [
      "100 High-Utility Shortcuts",
      "Faster problem solving",
      "Exam-focused tricks",
      "Easy to remember"
    ],
    coverBg: "linear-gradient(135deg, #0b132b 0%, #1c2541 100%)",
    accentColor: "#F5A623"
  },
  {
    id: "book-12-modal-auxiliaries-mastery-zero-errors",
    title: "Modal Auxiliaries Mastery : Zero Errors: The Only 150-Page Guide You Need to Crack 12th Standard & Competitive Exams with Smart Tricks, Traps & PYQs (Fast Track English Grammar Series)",
    subtitle: "The Only 150-Page Guide with Smart Tricks, Traps & PYQs",
    series: "Fasttrack English Grammar Series — Book 12",
    category: "Verbs & Tenses",
    topic: "Modals",
    exams: ["12th Standard", "SSC", "Banking", "Competitive Exams"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.9,
    reviews: 310,
    badge: "Top Rated",
    amazonUrl: "https://amzn.to/4giW89C",
    coverImage: "img/books/book-12-modal-auxiliaries-mastery-zero-errors.jpg",
    description: "Zero-error mastery of Modal Auxiliaries in just 150 pages with smart tricks, common traps and previous year questions for 12th standard and competitive exams.",
    features: [
      "Only 150-page focused guide",
      "Smart Tricks & Traps",
      "Previous Year Questions",
      "12th + Competitive coverage"
    ],
    coverBg: "linear-gradient(135deg, #312E81 0%, #1E1B4B 100%)",
    accentColor: "#A78BFA"
  },
  {
    id: "book-13-mastering-modal-auxiliaries",
    title: "Mastering Modal Auxiliaries: From Basics to Advanced Usage: A Complete Guide for 12th Grade, CBSE, NCERT, SSC, Banking, IELTS, and Competitive Exams – With Practice Exercises & Examples",
    subtitle: "From Basics to Advanced Usage with Practice Exercises & Examples",
    series: "Fasttrack English Grammar Series — Book 13",
    category: "Verbs & Tenses",
    topic: "Modals",
    exams: ["12th Grade", "CBSE", "NCERT", "SSC", "Banking", "IELTS"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 275,
    badge: "Must Read",
    amazonUrl: "https://amzn.to/4g9ekCs",
    coverImage: "img/books/book-13-mastering-modal-auxiliaries.jpg",
    description: "Complete guide to Modal Auxiliaries from basics to advanced level with practice exercises and examples for school and competitive exams.",
    features: [
      "Basics to Advanced coverage",
      "Practice Exercises included",
      "CBSE, NCERT & Competitive",
      "Clear examples throughout"
    ],
    coverBg: "linear-gradient(135deg, #312E81 0%, #1E1B4B 100%)",
    accentColor: "#A78BFA"
  },
  {
    id: "book-14-spot-the-error-subject-verb-agreement",
    title: "Spot the Error! The Ultimate Guide to Subject-Verb Agreement for Exam Success: Master Every Rule, Ace Every Test",
    subtitle: "Master Every Rule and Ace Every Test on Subject-Verb Agreement",
    series: "Fasttrack English Grammar Series — Book 14",
    category: "Syntax & Agreement",
    topic: "Subject-Verb Agreement",
    exams: ["SSC CGL", "IBPS PO", "Banking", "Railways", "State PSC"],
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.9,
    reviews: 480,
    badge: "Bestseller",
    amazonUrl: "https://amzn.to/4xMYMeU",
    coverImage: "img/books/book-14-spot-the-error-subject-verb-agreement.jpg",
    description: "The ultimate guide to Subject-Verb Agreement that helps you master every rule and ace error-spotting questions in competitive exams.",
    features: [
      "Every important rule covered",
      "Exam-focused approach",
      "Error-spotting mastery",
      "Practice for success"
    ],
    coverBg: "linear-gradient(135deg, #1B3A6B 0%, #0D1E3A 100%)",
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
