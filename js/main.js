/**
 * ZeroErrorEnglish - Main Frontend Application Logic
 * Vanilla JavaScript (No frameworks, pure static hosting compatible)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initActiveNav();
  initDiagnosticQuiz();
  initMnemonicCard();
  initReadingProgressBar();

  // Page-specific routing based on DOM elements
  if (document.getElementById('homepagePostsContainer')) {
    initHomepage();
  }
  if (document.getElementById('blogPostsContainer')) {
    initBlogListing();
  }
  if (document.getElementById('singlePostContainer')) {
    initSinglePostReader();
  }
  if (document.getElementById('allBooksGrid')) {
    initBooksPage();
  }
});

/* ==========================================================================
   1. Theme Management (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('zee_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('zee_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
    });
  });
}

function updateThemeIcon(theme) {
  const icons = document.querySelectorAll('.theme-toggle-icon');
  icons.forEach(icon => {
    if (theme === 'dark') {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
    } else {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
    }
  });
}

/* ==========================================================================
   2. Mobile Navigation & Active Links
   ========================================================================== */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
      const isOpen = navLinks.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
}

function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   3. Data Fetching (posts-index.json)
   ========================================================================== */
let CACHED_POSTS = null;

function isPostPublished(post) {
  if (!post || !post.publishDate) return true;
  const publishDate = new Date(post.publishDate);
  const now = new Date();
  return publishDate <= now;
}

async function fetchPostsIndex() {
  if (CACHED_POSTS) return CACHED_POSTS;
  try {
    const res = await fetch('posts-index.json?t=' + new Date().getTime());
    if (!res.ok) throw new Error('Failed to load posts index');
    const allPosts = await res.json();
    CACHED_POSTS = allPosts.filter(isPostPublished);
    return CACHED_POSTS;
  } catch (err) {
    console.warn('Could not fetch posts-index.json, using fallback data:', err);
    return [];
  }
}
/* ==========================================================================
   4. Homepage Logic
   ========================================================================== */
async function initHomepage() {
  const featuredContainer = document.getElementById('featuredPostContainer');
  const recentContainer = document.getElementById('homepagePostsContainer');
  const featuredBooksGrid = document.getElementById('homepageBooksGrid');

  // 1. Render Featured Books from books.js
  if (featuredBooksGrid && typeof getFeaturedBooks === 'function') {
    const featuredBooks = getFeaturedBooks(6);
    featuredBooksGrid.innerHTML = featuredBooks.map(b => renderBookCardHtml(b)).join('');
  }

  // 2. Fetch Blog Posts
  const posts = await fetchPostsIndex();
  if (!posts || posts.length === 0) {
    if (recentContainer) {
      recentContainer.innerHTML = `<p class="empty-state-text">No published articles yet. Check back soon!</p>`;
    }
    return;
  }

  // Find featured post or default to first
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const recentPosts = posts.filter(p => p.id !== featuredPost.id).slice(0, 3);

  // Render Featured Post Banner
  if (featuredContainer && featuredPost) {
    const postDate = formatDate(featuredPost.publishDate);
    featuredContainer.innerHTML = `
      <div class="featured-post-banner">
        <div class="featured-content-col">
          <span class="featured-badge">⭐ Editor's Pick • ${featuredPost.category}</span>
          <h2 class="featured-title">
            <a href="post.html?slug=${encodeURIComponent(featuredPost.slug)}">${featuredPost.title}</a>
          </h2>
          <p class="post-card-excerpt">${featuredPost.excerpt}</p>
          <div class="post-card-meta">
            <span>By ${featuredPost.author}</span>
            <span>•</span>
            <span>${postDate}</span>
            <span>•</span>
            <span>${featuredPost.readingTime}</span>
          </div>
          <div style="margin-top: 1.5rem;">
            <a href="post.html?slug=${encodeURIComponent(featuredPost.slug)}" class="btn btn-primary">
              <span>Read Full Lesson</span>
              <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </a>
          </div>
        </div>
        <div class="featured-visual-col">
          <div style="padding: 2.5rem; text-align: center; color: #FFFFFF;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎯</div>
            <h3 style="color: #FFFFFF; font-size: 1.3rem;">Zero Error Guarantee</h3>
            <p style="color: #CBD5E1; font-size: 0.9rem; margin-bottom: 0;">Master the 22-year bracket elimination formula for competitive English.</p>
          </div>
        </div>
      </div>
    `;
  }

  // Render Recent Posts
  if (recentContainer) {
    if (recentPosts.length > 0) {
      recentContainer.innerHTML = recentPosts.map(p => renderPostCardHtml(p)).join('');
    } else {
      recentContainer.innerHTML = [featuredPost].map(p => renderPostCardHtml(p)).join('');
    }
  }
}

/* ==========================================================================
   5. Blog Listing Page Logic (blog.html)
   ========================================================================== */
async function initBlogListing() {
  const container = document.getElementById('blogPostsContainer');
  const searchInput = document.getElementById('blogSearchInput');
  const categoryFilters = document.getElementById('blogCategoryFilters');
  const resultCount = document.getElementById('blogResultsCount');

  if (!container) return;

  const allPosts = await fetchPostsIndex();
  let currentCategory = 'all';
  let currentQuery = '';

  function renderFiltered() {
    let filtered = allPosts.filter(post => {
      const matchCat = currentCategory === 'all' || post.category.toLowerCase() === currentCategory.toLowerCase();
      const q = currentQuery.toLowerCase().trim();
      const matchQuery = !q || 
        post.title.toLowerCase().includes(q) || 
        post.excerpt.toLowerCase().includes(q) ||
        (post.tags && post.tags.some(t => t.toLowerCase().includes(q)));
      return matchCat && matchQuery;
    });

    if (resultCount) {
      resultCount.textContent = `Showing ${filtered.length} article${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
          <h3>No articles found</h3>
          <p style="color: var(--text-muted);">Try a different search keyword or switch categories.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(p => renderPostCardHtml(p)).join('');
    }
  }

  // Category buttons
  if (categoryFilters) {
    const categories = ['all', ...new Set(allPosts.map(p => p.category))];
    categoryFilters.innerHTML = categories.map(cat => `
      <button class="filter-pill-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
        ${cat === 'all' ? 'All Topics' : cat}
      </button>
    `).join('');

    categoryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill-btn');
      if (!btn) return;
      categoryFilters.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderFiltered();
    });
  }

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value;
      renderFiltered();
    });
  }

  renderFiltered();
}

/* ==========================================================================
   6. Single Post Reader Logic (post.html)
   ========================================================================== */
async function initSinglePostReader() {
  const articleContent = document.getElementById('postBodyContent');
  const postTitle = document.getElementById('postMainTitle');
  const postCategory = document.getElementById('postCategoryBadge');
  const postDate = document.getElementById('postDateLabel');
  const postReadTime = document.getElementById('postReadTimeLabel');
  const postAuthor = document.getElementById('postAuthorLabel');
  const postCoverImage = document.getElementById('postCoverImage');
  const tocList = document.getElementById('postTocList');
  const relatedContainer = document.getElementById('relatedPostsContainer');
  const sidebarPosts = document.getElementById('sidebarPopularPosts');
  const sidebarBookWidget = document.getElementById('sidebarFeaturedBookWidget');
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  const posts = await fetchPostsIndex();
  if (posts.length === 0) return;

  const post = posts.find(p => p.slug === slug || p.id === slug) || posts[0];

  // Set Page Meta
  document.title = `${post.title} | ZeroErrorEnglish`;
  if (postTitle) postTitle.textContent = post.title;
  if (postCategory) postCategory.textContent = post.category;
  if (postDate) postDate.textContent = formatDate(post.publishDate);
  if (postReadTime) postReadTime.textContent = post.readingTime;
  if (postAuthor) postAuthor.textContent = post.author;
if (postAuthor) postAuthor.textContent = post.author;
  if (postCoverImage && post.coverImage) {
    postCoverImage.src = post.coverImage;
    postCoverImage.alt = post.title;
    postCoverImage.style.display = 'block';
  }
  // Render HTML Content
  if (articleContent) {
    articleContent.innerHTML = post.content || `<p>${post.excerpt}</p>`;
  }

  // Generate Table of Contents
  if (tocList && articleContent) {
    const headings = articleContent.querySelectorAll('h2, h3');
    if (headings.length > 0) {
      tocList.innerHTML = Array.from(headings).map((h, i) => {
        const id = `section-heading-${i}`;
        h.id = id;
        const isH3 = h.tagName.toLowerCase() === 'h3';
        return `<li style="${isH3 ? 'margin-left: 1rem;' : ''}"><a href="#${id}">${h.textContent}</a></li>`;
      }).join('');
    } else {
      const tocCard = document.getElementById('postTocCard');
      if (tocCard) tocCard.style.display = 'none';
    }
  }

  // Init Share Buttons
  initShareButtons(post);

  // Render Related Posts
  if (relatedContainer) {
    const related = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);
    const displayPosts = related.length > 0 ? related : posts.filter(p => p.id !== post.id).slice(0, 2);
    relatedContainer.innerHTML = displayPosts.map(p => renderPostCardHtml(p)).join('');
  }

  // Render Sidebar Popular Posts
  if (sidebarPosts) {
    sidebarPosts.innerHTML = posts.slice(0, 4).map(p => `
      <li class="sidebar-post-item">
        <a href="post.html?slug=${encodeURIComponent(p.slug)}">
          <span class="sidebar-post-item-title">${p.title}</span>
          <span class="sidebar-post-item-date">${formatDate(p.publishDate)} • ${p.readingTime}</span>
        </a>
      </li>
    `).join('');
  }

  // Render Sidebar Book Widget
  if (sidebarBookWidget && typeof getFeaturedBooks === 'function') {
    const topBook = getFeaturedBooks(1)[0];
    if (topBook) {
      sidebarBookWidget.innerHTML = `
        <div class="sidebar-widget">
          <div style="font-size: 0.75rem; font-weight: 800; color: var(--accent-gold); text-transform: uppercase; margin-bottom: 0.5rem;">Recommended Book</div>
          <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem;">${topBook.title}</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">${topBook.subtitle}</p>
          <a href="${topBook.amazonUrl}" target="_blank" class="btn btn-amazon" style="width: 100%;">
            <span>Buy on Amazon (${topBook.price})</span>
          </a>
        </div>
      `;
    }
  }
}

/* ==========================================================================
   7. Books Catalog Page Logic (books.html)
   ========================================================================== */
function initBooksPage() {
  const container = document.getElementById('allBooksGrid');
  const examFilters = document.getElementById('examFilterPills');
  const searchInput = document.getElementById('booksSearchInput');
  const countLabel = document.getElementById('booksCountLabel');

  if (!container || typeof getAllBooks !== 'function') return;

  const allBooks = getAllBooks();
  let currentExam = 'all';
  let currentSearch = '';

  function renderBooks() {
    let list = allBooks;
    if (currentExam !== 'all') {
      list = list.filter(b => b.exams.some(e => e.toLowerCase().includes(currentExam.toLowerCase())));
    }
    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase().trim();
      list = list.filter(b => 
        b.title.toLowerCase().includes(q) ||
        b.subtitle.toLowerCase().includes(q) ||
        b.topic.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.exams.some(e => e.toLowerCase().includes(q))
      );
    }

    if (countLabel) {
      countLabel.textContent = `Showing ${list.length} of ${allBooks.length} KDP Books`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">📚</div>
          <h3>No books match your criteria</h3>
          <p style="color: var(--text-muted);">Try clearing the filters or searching for another exam.</p>
        </div>
      `;
    } else {
      container.innerHTML = list.map(b => renderBookCardHtml(b)).join('');
    }
  }

  if (examFilters) {
    examFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill-btn');
      if (!btn) return;
      examFilters.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentExam = btn.getAttribute('data-exam');
      renderBooks();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderBooks();
    });
  }

  renderBooks();
}

/* ==========================================================================
   8. Helper: Render Post Card HTML
   ========================================================================== */
function renderPostCardHtml(post) {
  const dateStr = formatDate(post.publishDate);
  const tagsHtml = (post.tags || []).slice(0, 3).map(t => `<span class="tag-pill">#${t}</span>`).join('');

  return `
    <article class="post-card">
      <div class="post-card-cover-wrapper">
        <span class="post-card-category-badge">${post.category}</span>
        <img 
          src="${post.coverImage || 'img/books/book-01-subject-verb-agreement.jpg'}" 
          alt="${post.title}" 
          class="post-card-img" 
          loading="lazy" 
          onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'200\\' viewBox=\\'0 0 400 200\\'><rect fill=\\'%231B3A6B\\' width=\\'400\\' height=\\'200\\'/><text fill=\\'%23F5A623\\' font-family=\\'sans-serif\\' font-size=\\'18\\' font-weight=\\'bold\\' x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'>ZeroErrorEnglish</text></svg>';"
        />
      </div>
      <div class="post-card-body">
        <div class="post-card-meta">
          <span>${dateStr}</span>
          <span>•</span>
          <span>${post.readingTime || '5 min read'}</span>
        </div>
        <h3 class="post-card-title">
          <a href="post.html?slug=${encodeURIComponent(post.slug)}">${post.title}</a>
        </h3>
        <p class="post-card-excerpt">${post.excerpt}</p>
        <div class="post-card-tags">
          ${tagsHtml}
        </div>
        <div class="post-card-footer">
          <span style="color: var(--text-muted); font-size: 0.78rem;">By ${post.author || 'ZeroErrorEnglish'}</span>
          <a href="post.html?slug=${encodeURIComponent(post.slug)}" class="read-more-link">
            <span>Read Rule</span>
            <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   9. Interactive Diagnostic Quiz (Homepage)
   ========================================================================== */
const QUIZ_QUESTIONS = [
  {
    exam: "SSC CGL Tier 2",
    sentence: "Along the bank of the turbulent river [A] / was found several ancient artifacts [B] / belonging to the Harappan civilization [C]. Spot the error:",
    options: [
      { text: "A - Along the bank of", correct: false },
      { text: "B - was found several ancient", correct: true },
      { text: "C - belonging to the Harappan", correct: false },
      { text: "D - No Error", correct: false }
    ],
    explanation: "✅ Correct! In this inverted sentence, bracket out [Along the bank] [of the turbulent river]. The post-positioned real subject is 'several ancient artifacts' (Plural). Therefore, replace singular 'was found' with plural 'were found'."
  },
  {
    exam: "IBPS PO Mains",
    sentence: "If the committee would have finalized [A] / the guidelines on time [B] / the disbursement could proceed smoothly [C]. Spot the error:",
    options: [
      { text: "A - If the committee would have finalized", correct: true },
      { text: "B - the guidelines on time", correct: false },
      { text: "C - the disbursement could proceed", correct: false },
      { text: "D - No Error", correct: false }
    ],
    explanation: "✅ Correct! The 'If-clause' can NEVER contain 'would have'. Replace 'would have finalized' with Past Perfect 'had finalized' (Third Conditional rule)."
  },
  {
    exam: "UPSC CDS",
    sentence: "Scarcely had the candidate [A] / entered the exam venue [B] / than the chief superintendent announced the instructions [C]. Spot the error:",
    options: [
      { text: "A - Scarcely had the candidate", correct: false },
      { text: "B - entered the exam venue", correct: false },
      { text: "C - than the chief superintendent", correct: true },
      { text: "D - No Error", correct: false }
    ],
    explanation: "✅ Correct! 'Scarcely' and 'Hardly' are always paired with 'when' or 'before', NEVER 'than' ('than' is paired only with 'No sooner'). Replace 'than' with 'when'."
  }
];

let currentQuizIndex = 0;

function initDiagnosticQuiz() {
  const quizBox = document.getElementById('diagnosticQuizBox');
  if (!quizBox) return;

  function loadQuizQuestion(index) {
    const q = QUIZ_QUESTIONS[index];
    quizBox.innerHTML = `
      <div class="quiz-question-header">
        <span>${q.exam} Trap</span>
        <span>Question ${index + 1} of ${QUIZ_QUESTIONS.length}</span>
      </div>
      <div class="quiz-sentence">${q.sentence}</div>
      <div class="quiz-options-list">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt-btn" data-index="${i}">
            <span>${opt.text}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="quizExplanation"></div>
      <div style="margin-top: 1rem; display: flex; justify-content: flex-end;">
        <button class="btn btn-outline" id="nextQuizBtn" style="font-size: 0.82rem; padding: 0.4rem 0.8rem; display: none;">Next Trap →</button>
      </div>
    `;

    const optButtons = quizBox.querySelectorAll('.quiz-opt-btn');
    const expBox = quizBox.querySelector('#quizExplanation');
    const nextBtn = quizBox.querySelector('#nextQuizBtn');

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const optIndex = parseInt(btn.getAttribute('data-index'), 10);
        const chosen = q.options[optIndex];

        optButtons.forEach((b, idx) => {
          b.disabled = true;
          if (q.options[idx].correct) b.classList.add('correct');
        });

        if (chosen.correct) {
          btn.classList.add('correct');
          expBox.className = 'quiz-explanation show correct-exp';
          expBox.textContent = q.explanation;
        } else {
          btn.classList.add('wrong');
          expBox.className = 'quiz-explanation show wrong-exp';
          expBox.textContent = `❌ Incorrect option chosen. ${q.explanation}`;
        }

        if (nextBtn) {
          nextBtn.style.display = 'inline-flex';
          nextBtn.addEventListener('click', () => {
            currentQuizIndex = (currentQuizIndex + 1) % QUIZ_QUESTIONS.length;
            loadQuizQuestion(currentQuizIndex);
          });
        }
      });
    });
  }

  loadQuizQuestion(0);
}

/* ==========================================================================
   10. Interactive Flip Mnemonic Card (Homepage)
   ========================================================================== */
const MNEMONIC_RULES = [
  {
    hint: "Rule 1: Adjective Order",
    keyword: "OSASCOMP Formula",
    frontDesc: "How to order multiple adjectives in a single sentence without guessing.",
    title: "Opinion • Size • Age • Shape • Color • Origin • Material • Purpose",
    backDesc: "Example: 'A lovely (Opinion) little (Size) old (Age) rectangular (Shape) brown (Color) Italian (Origin) leather (Material) handbag (Purpose).'"
  },
  {
    hint: "Rule 2: Pronoun Etiquette",
    keyword: "The 231 vs 123 Rule",
    frontDesc: "Order of personal pronouns in good deeds vs confessions of error.",
    title: "2nd -> 3rd -> 1st Person (Good) | 1st -> 2nd -> 3rd (Fault)",
    backDesc: "Good Deed: 'You, he and I helped the poor.' (231)\nAdmitting Fault: 'I, you and he committed the blunder.' (123)"
  },
  {
    hint: "Rule 3: Conjunction Lock",
    keyword: "LEST... SHOULD Pair",
    frontDesc: "Why does 'lest' trigger negative errors in 90% of exam papers?",
    title: "'Lest' already means 'for fear that' (Negative)",
    backDesc: "Rule: 'Lest' takes ONLY 'should' or bare subjunctive, and NEVER takes 'not'.\n✅ Run fast lest you should miss the train."
  },
  {
    hint: "Rule 4: Gerund Triggers",
    keyword: "Prepositional 'TO' List",
    frontDesc: "Expressions where 'to' is a preposition and must take V-ing.",
    title: "Look forward to • Used to • With a view to • Prone to",
    backDesc: "Always follow these with Gerund (V-ing), NOT V1.\n✅ I look forward to meeting you (NOT meet you)."
  }
];

let mnemonicIndex = 0;

function initMnemonicCard() {
  const container = document.getElementById('mnemonicCardContainer');
  const nextBtn = document.getElementById('nextMnemonicBtn');
  if (!container) return;

  function loadMnemonic(index) {
    const m = MNEMONIC_RULES[index];
    container.innerHTML = `
      <div class="mnemonic-card" id="mnemonicCard">
        <div class="mnemonic-front">
          <div>
            <span class="mnemonic-hint">${m.hint}</span>
            <div class="mnemonic-keyword">${m.keyword}</div>
            <p style="color: #E2E8F0; font-size: 0.85rem; line-height: 1.4;">${m.frontDesc}</p>
          </div>
          <div class="mnemonic-tap-tip">
            <span>🔄 Click / Tap anywhere on card to flip & reveal rule</span>
          </div>
        </div>
        <div class="mnemonic-back">
          <div>
            <span class="mnemonic-hint">Mastery Blueprint</span>
            <div class="mnemonic-rule-title">${m.title}</div>
            <p class="mnemonic-rule-desc">${m.backDesc.replace(/\n/g, '<br>')}</p>
          </div>
          <div class="mnemonic-tap-tip" style="color: var(--text-muted);">
            <span>🔄 Click to flip back</span>
          </div>
        </div>
      </div>
    `;

    const card = container.querySelector('#mnemonicCard');
    container.onclick = () => {
      card.classList.toggle('is-flipped');
    };
  }

  loadMnemonic(0);

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mnemonicIndex = (mnemonicIndex + 1) % MNEMONIC_RULES.length;
      loadMnemonic(mnemonicIndex);
    });
  }
}

/* ==========================================================================
   11. Reading Progress Bar & Social Share
   ========================================================================== */
function initReadingProgressBar() {
  const bar = document.querySelector('.reading-progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight <= 0) return;
    const scrolled = (window.scrollY / docHeight) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
  });
}

function initShareButtons(post) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`Master this English Grammar Rule: "${post.title}" by ZeroErrorEnglish`);

  const shareWhatsapp = document.getElementById('shareWhatsapp');
  const shareTelegram = document.getElementById('shareTelegram');
  const shareX = document.getElementById('shareX');
  const shareFacebook = document.getElementById('shareFacebook');
  const shareCopy = document.getElementById('shareCopyLink');

  if (shareWhatsapp) shareWhatsapp.href = `https://api.whatsapp.com/send?text=${text}%20${url}`;
  if (shareTelegram) shareTelegram.href = `https://t.me/share/url?url=${url}&text=${text}`;
  if (shareX) shareX.href = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  if (shareFacebook) shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  
  if (shareCopy) {
    shareCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => showToast('Article link copied to clipboard!', 'success'))
        .catch(() => showToast('Could not copy link.', 'warning'));
    });
  }
}

/* ==========================================================================
   12. Utilities (Toast & Date Formatter)
   ========================================================================== */
function formatDate(isoString) {
  if (!isoString) return 'Recently';
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch {
    return isoString;
  }
}

function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
