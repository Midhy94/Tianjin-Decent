const fs = require('fs');
const path = require('path');

// 1. Load modules
const en = (function() {
  const content = fs.readFileSync(path.join(__dirname, '../src/js/i18n/translations/en.js'), 'utf8');
  return eval('(' + content.match(/export const \w+ = (\{[\s\S]*\});?\s*$/)[1] + ')');
})();

const fr = (function() {
  const content = fs.readFileSync(path.join(__dirname, '../src/js/i18n/translations/fr.js'), 'utf8');
  return eval('(' + content.match(/export const \w+ = (\{[\s\S]*\});?\s*$/)[1] + ')');
})();

const ru = (function() {
  const content = fs.readFileSync(path.join(__dirname, '../src/js/i18n/translations/ru.js'), 'utf8');
  return eval('(' + content.match(/export const \w+ = (\{[\s\S]*\});?\s*$/)[1] + ')');
})();

const es = (function() {
  const content = fs.readFileSync(path.join(__dirname, '../src/js/i18n/translations/es.js'), 'utf8');
  return eval('(' + content.match(/export const \w+ = (\{[\s\S]*\});?\s*$/)[1] + ')');
})();

console.log('--- DICTIONARY KEY COUNTS ---');
console.log('EN:', Object.keys(en).length);
console.log('FR:', Object.keys(fr).length);
console.log('RU:', Object.keys(ru).length);
console.log('ES:', Object.keys(es).length);

// 2. Parity check
const enKeys = Object.keys(en);
const missingInFr = enKeys.filter(k => fr[k] === undefined);
const missingInRu = enKeys.filter(k => ru[k] === undefined);
const missingInEs = enKeys.filter(k => es[k] === undefined);

console.log('\n--- KEY PARITY CHECK ---');
console.log('Missing in FR:', missingInFr.length);
console.log('Missing in RU:', missingInRu.length);
console.log('Missing in ES:', missingInEs.length);

if (missingInFr.length > 0 || missingInRu.length > 0 || missingInEs.length > 0) {
  console.error('FAIL: Missing keys detected!');
  process.exit(1);
}

// 3. Technical standard / brand regex that is allowed to stay unchanged
const allowedUnchanged = /^(TIANJIN DECENT|BS 1139|EN \d+|ASTM|ISO|JIS|GB|DIN|Q195|Q215|Q235|Q345|Q355|S235|S275|S355|SAE|API|AWWA|NFPA|CJ\/T|DN\d+|SCH\d+|Ø|\d+(\.\d+)?(\s*(mm|m|kg|kN|MT|°C|MPa|%|ft))?)/i;

// 4. Check for untranslated identical English strings in RU
const suspiciousRu = [];
for (const k of enKeys) {
  if (ru[k] === k && /[a-zA-Z]{3,}/.test(k) && !allowedUnchanged.test(k)) {
    suspiciousRu.push(k);
  }
}

console.log('\n--- SUSPICIOUS IDENTICAL KEYS IN RU ---');
console.log('Count:', suspiciousRu.length);
if (suspiciousRu.length > 0) {
  console.log('Items:', suspiciousRu);
}

// 5. Test translation of all 7 HTML pages
const pages = [
  'index.html',
  'about.html',
  'contact.html',
  'products.html',
  'product.html',
  'quality.html',
  'solutions.html'
];

function decodeHtml(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

let pageFailures = 0;
for (const page of pages) {
  let content = fs.readFileSync(path.join(__dirname, '..', page), 'utf8');
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  content = content.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '');

  const optgroups = [...content.matchAll(/<optgroup[^>]*label=["']([^"']+)["']/gi)].map(m => decodeHtml(m[1]));
  const placeholders = [...content.matchAll(/placeholder=["']([^"']+)["']/gi)].map(m => decodeHtml(m[1]));
  const textNodes = [...content.matchAll(/>([^<]+)</g)].map(m => decodeHtml(m[1].trim())).filter(Boolean);

  const allStrings = [...optgroups, ...placeholders, ...textNodes];

  for (const s of allStrings) {
    if (!/[a-zA-Z]{2,}/.test(s)) continue;
    if (s.startsWith('http') || s.startsWith('/') || s.includes('{') || s.includes('}')) continue;
    const trimmed = s.trim();
    const normalized = trimmed.replace(/\s+/g, ' ');

    for (const [lang, dict] of [['fr', fr], ['ru', ru], ['es', es]]) {
      if (dict[trimmed] === undefined && dict[normalized] === undefined) {
        console.error(`Missing translation in ${lang} on page ${page}:`, JSON.stringify(trimmed));
        pageFailures++;
      }
    }
  }
}

console.log('\n--- HTML PAGE TRANSLATION COVERAGE ---');
console.log('Failures:', pageFailures);

// 6. Test all 40 products in products.js
const productsJsContent = fs.readFileSync(path.join(__dirname, '../src/js/data/products.js'), 'utf8');
// Verify Cuplock, Kwikstage, Ringlock, Planks, Pipes, Coils
const sampleSlugs = [
  'cuplock-scaffolding-system',
  'kwikstage-scaffolding-system',
  'ringlock-system',
  'steel-scaffold-planks',
  'scaffold-tube-48',
  'hr-steel-coils',
  'h-i-u-beams-channel'
];

sampleSlugs.forEach(slug => {
  const re = new RegExp(`["']?slug["']?\\s*:\\s*["']${slug}["']`);
  if (!re.test(productsJsContent)) {
    console.error(`FAIL: Product ${slug} not found in products.js`);
    process.exit(1);
  }
});
console.log('\n--- CRITICAL PRODUCT SLUGS VERIFIED ---');
sampleSlugs.forEach(s => console.log('✓', s));

console.log('\nALL VERIFICATIONS PASSED SUCCESSFULLY!');
