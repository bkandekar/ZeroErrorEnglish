/**
 * ZeroErrorEnglish - Static Site & Post Scheduling Builder
 * Plain Node.js with zero dependencies
 *
 * Responsibilities:
 * 1. Reads every JSON file in `/posts/`
 * 2. Auto-transitions any "scheduled" posts whose publishDate has arrived to "published" and updates the file
 * 3. Compiles published posts (publishDate <= now) into root `posts-index.json`
 * 4. Regenerates `sitemap.xml`, `rss.xml`, and `robots.txt`
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://bkandekar.github.io/ZeroErrorEnglish'; // Base site domain
const POSTS_DIR = path.join(__dirname, 'posts');
const INDEX_FILE = path.join(__dirname, 'posts-index.json');
const SITEMAP_FILE = path.join(__dirname, 'sitemap.xml');
const RSS_FILE = path.join(__dirname, 'rss.xml');
const ROBOTS_FILE = path.join(__dirname, 'robots.txt');

function runBuild() {
  console.log('🚀 [ZeroErrorEnglish] Starting build process...');
  const now = new Date();
  const nowIso = now.toISOString();
  console.log(`⏱️ Current build timestamp: ${nowIso}`);

  if (!fs.existsSync(POSTS_DIR)) {
    console.warn('⚠️ No /posts/ directory found. Creating empty one.');
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  const postFiles = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.json'));
  console.log(`📁 Found ${postFiles.length} post files in /posts/`);

  const allPosts = [];
  let updatedScheduledCount = 0;

  for (const filename of postFiles) {
    const filePath = path.join(POSTS_DIR, filename);
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const post = JSON.parse(fileContent);

      // Check if scheduled post has passed its publishDate
      if (post.status === 'scheduled') {
        const publishTime = new Date(post.publishDate).getTime();
        if (!isNaN(publishTime) && publishTime <= now.getTime()) {
          console.log(`✨ Publishing scheduled post: "${post.title}" (${filename})`);
          post.status = 'published';
          fs.writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf8');
          updatedScheduledCount++;
        }
      }

      allPosts.push({ ...post, _filename: filename });
    } catch (err) {
      console.error(`❌ Error parsing ${filename}:`, err.message);
    }
  }

  if (updatedScheduledCount > 0) {
    console.log(`✅ Converted ${updatedScheduledCount} scheduled post(s) to published.`);
  }

  // Filter to published posts that are not in the future
  const publishedPosts = allPosts
    .filter(post => {
      if (post.status !== 'published') return false;
      const pubTime = new Date(post.publishDate).getTime();
      return isNaN(pubTime) || pubTime <= now.getTime();
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  console.log(`📰 Total active published posts: ${publishedPosts.length}`);

  // Create lightweight index for frontend (stripping heavy full content to keep index small & fast)
  const indexData = publishedPosts.map(p => ({
    id: p.id,
    slug: p.slug || p.id,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    tags: p.tags || [],
    coverImage: p.coverImage || 'img/books/book-01-subject-verb-agreement.jpg',
    author: p.author || 'ZeroErrorEnglish Editorial',
    readingTime: p.readingTime || '5 min read',
    publishDate: p.publishDate,
    createdDate: p.createdDate,
    featured: Boolean(p.featured),
    content: p.content // Include content so single-file static loading works smoothly
  }));

  // Write posts-index.json
  fs.writeFileSync(INDEX_FILE, JSON.stringify(indexData, null, 2), 'utf8');
  console.log(`✅ Generated posts-index.json successfully (${indexData.length} items).`);

  // Generate Sitemap XML
  generateSitemap(indexData);

  // Generate RSS Feed XML
  generateRssFeed(indexData);

  // Generate robots.txt
  generateRobotsTxt();

  console.log('🎉 [ZeroErrorEnglish] Build completed successfully!');
}

function generateSitemap(posts) {
  const staticPages = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/blog.html', changefreq: 'daily', priority: '0.9' },
    { loc: '/books.html', changefreq: 'weekly', priority: '0.9' },
    { loc: '/about.html', changefreq: 'monthly', priority: '0.7' },
    { loc: '/contact.html', changefreq: 'monthly', priority: '0.6' },
    { loc: '/privacy-policy.html', changefreq: 'yearly', priority: '0.3' },
    { loc: '/terms-and-conditions.html', changefreq: 'yearly', priority: '0.3' },
    { loc: '/disclaimer.html', changefreq: 'yearly', priority: '0.3' }
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const page of staticPages) {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${page.loc}</loc>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  for (const post of posts) {
    const postDate = post.publishDate ? post.publishDate.split('T')[0] : new Date().toISOString().split('T')[0];
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/post.html?slug=${encodeURIComponent(post.slug)}</loc>\n`;
    xml += `    <lastmod>${postDate}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  fs.writeFileSync(SITEMAP_FILE, xml, 'utf8');
  console.log(`✅ Generated sitemap.xml with ${staticPages.length + posts.length} URLs.`);
}

function generateRssFeed(posts) {
  const latestDate = posts.length > 0 ? new Date(posts[0].publishDate).toUTCString() : new Date().toUTCString();
  let xml = `<?xml version="1.0" encoding="UTF-8" ?>\n`;
  xml += `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n`;
  xml += `<channel>\n`;
  xml += `  <title>ZeroErrorEnglish - English Grammar Blog & Exam Strategy</title>\n`;
  xml += `  <link>${SITE_URL}</link>\n`;
  xml += `  <description>High-yield English grammar rules, bracket-elimination strategies, and book previews for Indian competitive exams (SSC CGL, IBPS PO, UPSC CDS/NDA, State PSC).</description>\n`;
  xml += `  <language>en-in</language>\n`;
  xml += `  <lastBuildDate>${latestDate}</lastBuildDate>\n`;
  xml += `  <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />\n`;

  for (const post of posts) {
    const pubDate = post.publishDate ? new Date(post.publishDate).toUTCString() : new Date().toUTCString();
    xml += `  <item>\n`;
    xml += `    <title><![CDATA[${post.title}]]></title>\n`;
    xml += `    <link>${SITE_URL}/post.html?slug=${encodeURIComponent(post.slug)}</link>\n`;
    xml += `    <guid isPermaLink="true">${SITE_URL}/post.html?slug=${encodeURIComponent(post.slug)}</guid>\n`;
    xml += `    <pubDate>${pubDate}</pubDate>\n`;
    xml += `    <description><![CDATA[${post.excerpt}]]></description>\n`;
    xml += `    <category>${post.category}</category>\n`;
    xml += `  </item>\n`;
  }

  xml += `</channel>\n`;
  xml += `</rss>\n`;
  fs.writeFileSync(RSS_FILE, xml, 'utf8');
  console.log(`✅ Generated rss.xml with ${posts.length} entries.`);
}

function generateRobotsTxt() {
  const content = `# ZeroErrorEnglish Robots.txt
User-agent: *
Allow: /
Disallow: /admin.html

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(ROBOTS_FILE, content, 'utf8');
  console.log(`✅ Generated robots.txt.`);
}

// Run if called directly
if (require.main === module) {
  runBuild();
}

module.exports = { runBuild };
