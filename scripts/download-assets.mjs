import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const ASSETS_DIR = 'public/images';

// Core assets to download (filtered from 136 images — skip tracking pixels and duplicates)
const assets = [
  { url: 'https://framerusercontent.com/images/ib5pkXVx7VcbkFgEgolGkwJv4.png', name: 'logo.png' },
  { url: 'https://framerusercontent.com/images/b4ZbnRDm0OmaWkJuvZbrO0c9xgc.png', name: 'arrow-right.png' },
  { url: 'https://framerusercontent.com/images/OrDnnaloeIGjDP9yPeobYuDj7L0.png', name: 'g2-logo.png' },
  { url: 'https://framerusercontent.com/images/jBUMVVFjKCBRw4l4EEvLSAq3ik4.png', name: 'hero-gradient-noise.png' },
  { url: 'https://framerusercontent.com/images/0r45uXBVPEPrJyJz5i7CjSUQxvY.png', name: 'favicon.png' },
  { url: 'https://framerusercontent.com/images/Lp6wTFrR0cUnB0qdOyBhwqsrlfM.png', name: 'favicon-alt.png' },
];

async function download(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(`${ASSETS_DIR}/${filename}`, buf);
    console.log(`✅ ${filename} (${(buf.length / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.error(`❌ ${filename}: ${e.message}`);
  }
}

if (!existsSync(ASSETS_DIR)) await mkdir(ASSETS_DIR, { recursive: true });

// Download 4 at a time
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(a => download(a.url, a.name)));
}

console.log('\nDone! Core assets downloaded.');
