/**
 * ZeroErrorEnglish - Admin Panel Logic
 * GitHub REST API Direct Integration & Post Management
 */

document.addEventListener('DOMContentLoaded', () => {
  initAdminAuth();
  initEditorToolbar();
  initPostForm();
  initSlugAutoGenerator();
  loadPostList();
});

// State
let GITHUB_TOKEN = sessionStorage.getItem('zee_gh_token') || '';
let GITHUB_OWNER = sessionStorage.getItem('zee_gh_owner') || '';
let GITHUB_REPO = sessionStorage.getItem('zee_gh_repo') || '';
let CURRENT_EDITING_SHA = null;
let CURRENT_EDITING_FILENAME = null;

/* ==========================================================================
   1. Authentication & GitHub Settings
   ========================================================================== */
function initAdminAuth() {
  const tokenInput = document.getElementById('ghTokenInput');
  const ownerInput = document.getElementById('ghOwnerInput');
  const repoInput = document.getElementById('ghRepoInput');
  const saveBtn = document.getElementById('saveGhSettingsBtn');
  const statusDot = document.getElementById('tokenStatusDot');
  const statusText = document.getElementById('tokenStatusText');

  if (tokenInput && GITHUB_TOKEN) tokenInput.value = GITHUB_TOKEN;
  if (ownerInput && GITHUB_OWNER) ownerInput.value = GITHUB_OWNER;
  if (repoInput && GITHUB_REPO) repoInput.value = GITHUB_REPO;

  updateStatusUI();

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      GITHUB_TOKEN = tokenInput.value.trim();
      GITHUB_OWNER = ownerInput.value.trim();
      GITHUB_REPO = repoInput.value.trim();

      sessionStorage.setItem('zee_gh_token', GITHUB_TOKEN);
      sessionStorage.setItem('zee_gh_owner', GITHUB_OWNER);
      sessionStorage.setItem('zee_gh_repo', GITHUB_REPO);

      updateStatusUI();
      loadPostList();
      showToast('GitHub credentials saved for this browser session!', 'success');
    });
  }

  function updateStatusUI() {
    if (statusDot && statusText) {
      if (GITHUB_TOKEN && GITHUB_OWNER && GITHUB_REPO) {
        statusDot.className = 'status-dot connected';
        statusText.textContent = `Connected to ${GITHUB_OWNER}/${GITHUB_REPO}`;
      } else {
        statusDot.className = 'status-dot';
        statusText.textContent = 'Local / Disconnected Mode';
      }
    }
  }
}

/* ==========================================================================
   2. Editor Toolbar Helpers
   ========================================================================== */
function initEditorToolbar() {
  const editor = document.getElementById('postContentEditor');
  const toolbar = document.getElementById('editorToolbar');
  const previewToggle = document.getElementById('togglePreviewBtn');
  const previewBox = document.getElementById('editorPreviewBox');

  if (!editor || !toolbar) return;

  toolbar.addEventListener('click', (e) => {
    const btn = e.target.closest('.toolbar-btn');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    insertFormatting(action);
  });

  if (previewToggle && previewBox) {
    previewToggle.addEventListener('click', () => {
      const isHidden = previewBox.style.display === 'none' || !previewBox.style.display;
      if (isHidden) {
        previewBox.innerHTML = editor.value;
        previewBox.style.display = 'block';
        previewToggle.textContent = 'Hide Preview';
      } else {
        previewBox.style.display = 'none';
        previewToggle.textContent = 'Live Preview';
      }
    });
  }

  function insertFormatting(action) {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selected = editor.value.substring(start, end);
    let replacement = '';

    switch (action) {
      case 'h2':
        replacement = `<h2>${selected || 'Main Heading'}</h2>\n`;
        break;
      case 'h3':
        replacement = `<h3>${selected || 'Subheading'}</h3>\n`;
        break;
      case 'bold':
        replacement = `<strong>${selected || 'Bold Text'}</strong>`;
        break;
      case 'italic':
        replacement = `<em>${selected || 'Italic Text'}</em>`;
        break;
      case 'quote':
        replacement = `<blockquote class="exam-quote-box">\n  ${selected || 'Exam Rule or PYQ quote'}\n</blockquote>\n`;
        break;
      case 'list':
        replacement = `<ul>\n  <li>${selected || 'List item 1'}</li>\n  <li>List item 2</li>\n</ul>\n`;
        break;
      case 'rulebox':
        replacement = `<div class="rule-example-box">\n  <div class="example-wrong">❌ <em>Wrong example sentence</em></div>\n  <div class="example-correct">✅ <em>Corrected sentence with rule</em></div>\n</div>\n`;
        break;
      case 'pyq':
        replacement = `<div class="pyq-card">\n  <p class="pyq-question"><strong>Q (SSC CGL Tier 2):</strong> <em>${selected || 'Enter practice question sentence here.'}</em></p>\n  <details class=\"pyq-solution\">\n    <summary>Click to view step-by-step solution & rule</summary>\n    <div class=\"solution-content\">\n      <p><strong>Answer:</strong> ...</p>\n      <p><strong>Explanation:</strong> ...</p>\n    </div>\n  </details>\n</div>\n`;
        break;
      case 'bookpromo':
        replacement = `<div class="book-promo-cta-block">\n  <div class="promo-left">\n    <span class="promo-tag">Fasttrack English Series</span>\n    <h3>Master This Complete Topic on Amazon Kindle</h3>\n    <p>Get the complete Zero-Error Rulebook on Amazon Kindle with 250+ solved MCQs.</p>\n    <a href="https://www.amazon.in/dp/example" target="_blank" class="btn btn-gold">Get on Amazon (₹149)</a>\n  </div>\n</div>\n`;
        break;
      case 'faq':
        replacement = `<div class="faq-section-block">\n  <h3>Frequently Asked Questions (FAQs)</h3>\n  <div class="faq-item">\n    <div class="faq-question">Q1. Frequently asked exam query?</div>\n    <div class="faq-answer">Detailed clear answer for aspirants...</div>\n  </div>\n</div>\n`;
        break;
      default:
        return;
    }

    editor.setRangeText(replacement, start, end, 'end');
    editor.focus();
  }
}

/* ==========================================================================
   3. Slug Auto Generator
   ========================================================================== */
function initSlugAutoGenerator() {
  const titleInput = document.getElementById('postTitleInput');
  const slugInput = document.getElementById('postSlugInput');

  if (titleInput && slugInput) {
    titleInput.addEventListener('input', () => {
      if (!CURRENT_EDITING_FILENAME) {
        slugInput.value = generateSlug(titleInput.value);
      }
    });
  }
}

function generateSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* ==========================================================================
   4. Post Form & Actions (Draft, Schedule, Publish)
   ========================================================================== */
function initPostForm() {
  const form = document.getElementById('postEditorForm');
  const btnDraft = document.getElementById('btnSaveDraft');
  const btnSchedule = document.getElementById('btnSchedulePost');
  const btnPublish = document.getElementById('btnPublishNow');
  const scheduleDateInput = document.getElementById('scheduleDatePicker');
  const exportBtn = document.getElementById('btnExportJson');
  const resetBtn = document.getElementById('btnResetForm');

  if (btnDraft) {
    btnDraft.addEventListener('click', () => handleSave('draft'));
  }
  if (btnSchedule) {
    btnSchedule.addEventListener('click', () => {
      const scheduleModal = document.getElementById('scheduleModal');
      if (scheduleModal) scheduleModal.style.display = 'flex';
    });
  }
  if (btnPublish) {
    btnPublish.addEventListener('click', () => handleSave('published'));
  }

  const confirmScheduleBtn = document.getElementById('confirmScheduleBtn');
  if (confirmScheduleBtn) {
    confirmScheduleBtn.addEventListener('click', () => {
      const dateVal = scheduleDateInput.value;
      if (!dateVal) {
        alert('Please select a valid scheduled date & time.');
        return;
      }
      const isoDate = new Date(dateVal).toISOString();
      const scheduleModal = document.getElementById('scheduleModal');
      if (scheduleModal) scheduleModal.style.display = 'none';
      handleSave('scheduled', isoDate);
    });
  }

  const cancelScheduleBtn = document.getElementById('cancelScheduleBtn');
  if (cancelScheduleBtn) {
    cancelScheduleBtn.addEventListener('click', () => {
      const scheduleModal = document.getElementById('scheduleModal');
      if (scheduleModal) scheduleModal.style.display = 'none';
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const post = buildPostObject('draft');
      downloadJsonFile(post, `${post.slug || 'post'}.json`);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetEditorForm);
  }
}

function buildPostObject(status, scheduledDate = null) {
  const title = document.getElementById('postTitleInput').value.trim();
  const slug = document.getElementById('postSlugInput').value.trim() || generateSlug(title);
  const excerpt = document.getElementById('postExcerptInput').value.trim();
  const category = document.getElementById('postCategoryInput').value;
  const tagsStr = document.getElementById('postTagsInput').value.trim();
  const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()).filter(Boolean) : [];
  const coverImage = document.getElementById('postCoverInput').value.trim() || 'img/books/book-01-subject-verb-agreement.jpg';
  const author = document.getElementById('postAuthorInput').value.trim() || 'ZeroErrorEnglish Editorial';
  const readingTime = document.getElementById('postReadTimeInput').value.trim() || '5 min read';
  const isFeatured = document.getElementById('postFeaturedCheckbox') ? document.getElementById('postFeaturedCheckbox').checked : false;
  const content = document.getElementById('postContentEditor').value;

  const now = new Date().toISOString();
  let publishDate = now;
  if (status === 'scheduled' && scheduledDate) {
    publishDate = scheduledDate;
  } else if (status === 'draft') {
    publishDate = now;
  }

  return {
    id: slug,
    slug: slug,
    title: title,
    excerpt: excerpt,
    content: content,
    category: category,
    tags: tags,
    coverImage: coverImage,
    author: author,
    readingTime: readingTime,
    status: status,
    publishDate: publishDate,
    createdDate: now,
    featured: isFeatured
  };
}

async function handleSave(status, scheduledDate = null) {
  const post = buildPostObject(status, scheduledDate);

  if (!post.title || !post.content) {
    alert('Please provide at least a Title and Content for the post.');
    return;
  }

  const datePrefix = post.publishDate ? post.publishDate.split('T')[0] : new Date().toISOString().split('T')[0];
  const filename = CURRENT_EDITING_FILENAME || `${datePrefix}-${post.slug}.json`;

  if (GITHUB_TOKEN && GITHUB_OWNER && GITHUB_REPO) {
    showToast(`Committing ${filename} to GitHub repository...`, 'info');
    try {
      await commitPostToGitHub(filename, post);
      showToast(`Successfully saved "${post.title}" as ${status.toUpperCase()}!`, 'success');
      resetEditorForm();
      loadPostList();
    } catch (err) {
      console.error('GitHub API Error:', err);
      alert(`GitHub Commit Failed: ${err.message}\nFalling back to JSON download.`);
      downloadJsonFile(post, filename);
    }
  } else {
    // Local / Offline Mode
    showToast(`Saved locally! Downloading ${filename}...`, 'info');
    downloadJsonFile(post, filename);
    saveLocalDraft(post);
    loadPostList();
  }
}

/* ==========================================================================
   5. GitHub REST API Operations
   ========================================================================== */
async function commitPostToGitHub(filename, postObject) {
  const path = `posts/${filename}`;
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
  const contentBase64 = btoa(unescape(encodeURIComponent(JSON.stringify(postObject, null, 2))));

  // Check if file exists to get SHA
  let sha = CURRENT_EDITING_SHA;
  if (!sha) {
    try {
      const getRes = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      if (getRes.ok) {
        const data = await getRes.json();
        sha = data.sha;
      }
    } catch {
      // New file
    }
  }

  const bodyPayload = {
    message: `CMS: ${postObject.status.toUpperCase()} post "${postObject.title}"`,
    content: contentBase64,
    branch: 'main'
  };
  if (sha) bodyPayload.sha = sha;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyPayload)
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || `HTTP ${res.status}`);
  }

  return await res.json();
}

async function loadPostList() {
  const tableBody = document.getElementById('postTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:1.5rem;">Loading posts...</td></tr>`;

  try {
    const res = await fetch('posts-index.json?t=' + new Date().getTime());
    let posts = [];
    if (res.ok) {
      posts = await res.json();
    }

    // Also include any local drafts
    const localDrafts = getLocalDrafts();
    const combined = [...posts];

    localDrafts.forEach(d => {
      if (!combined.some(p => p.id === d.id)) {
        combined.push(d);
      }
    });

    if (combined.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:1.5rem; color:#64748B;">No posts created yet.</td></tr>`;
      return;
    }

    tableBody.innerHTML = combined.map(p => {
      const status = p.status || 'published';
      const badgeClass = status === 'published' ? 'published' : status === 'scheduled' ? 'scheduled' : 'draft';
      const dateDisplay = p.publishDate ? new Date(p.publishDate).toLocaleDateString() : 'N/A';

      return `
        <tr>
          <td><strong>${p.title}</strong></td>
          <td>${p.category || 'General'}</td>
          <td><span class="status-badge ${badgeClass}">${status}</span></td>
          <td>${dateDisplay}</td>
          <td>
            <button class="table-action-btn" onclick="editPost('${p.id}')">Edit</button>
          </td>
        </tr>
      `;
    }).join('');
  } catch (err) {
    console.error('Error loading posts list:', err);
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:1.5rem; color:#EF4444;">Could not load posts.</td></tr>`;
  }
}

window.editPost = async function(id) {
  try {
    const res = await fetch('posts-index.json?t=' + new Date().getTime());
    const posts = await res.json();
    const post = posts.find(p => p.id === id) || getLocalDrafts().find(p => p.id === id);

    if (!post) {
      alert('Post not found in index.');
      return;
    }

    document.getElementById('postTitleInput').value = post.title || '';
    document.getElementById('postSlugInput').value = post.slug || post.id || '';
    document.getElementById('postExcerptInput').value = post.excerpt || '';
    document.getElementById('postCategoryInput').value = post.category || 'Syntax & Agreement';
    document.getElementById('postTagsInput').value = (post.tags || []).join(', ');
    document.getElementById('postCoverInput').value = post.coverImage || '';
    document.getElementById('postAuthorInput').value = post.author || '';
    document.getElementById('postReadTimeInput').value = post.readingTime || '';
    document.getElementById('postContentEditor').value = post.content || '';
    if (document.getElementById('postFeaturedCheckbox')) {
      document.getElementById('postFeaturedCheckbox').checked = Boolean(post.featured);
    }

    CURRENT_EDITING_FILENAME = `${post.publishDate ? post.publishDate.split('T')[0] : '2026-08-16'}-${post.slug}.json`;

    showToast(`Loaded "${post.title}" into editor`, 'info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    alert('Error loading post: ' + err.message);
  }
};

function resetEditorForm() {
  document.getElementById('postEditorForm').reset();
  CURRENT_EDITING_SHA = null;
  CURRENT_EDITING_FILENAME = null;
}

function downloadJsonFile(obj, filename) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function saveLocalDraft(post) {
  const drafts = getLocalDrafts();
  const index = drafts.findIndex(d => d.id === post.id);
  if (index >= 0) drafts[index] = post;
  else drafts.push(post);
  localStorage.setItem('zee_local_drafts', JSON.stringify(drafts));
}

function getLocalDrafts() {
  try {
    return JSON.parse(localStorage.getItem('zee_local_drafts')) || [];
  } catch {
    return [];
  }
}
