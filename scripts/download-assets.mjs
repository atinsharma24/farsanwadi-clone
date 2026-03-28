import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const assets = [
  // Logo
  { url: 'https://farsanwadi.com/wp-content/uploads/elementor/thumbs/Farsanwadi-New-Small-Size-rkzetduo7wxdr8n092le6dnkjuo51lbqgnamiflam8.png', dest: 'images/logo.png' },
  // Full logo (larger version)
  { url: 'https://farsanwadi.com/wp-content/uploads/2025/06/Farsanwadi-New-Small-Size.png', dest: 'images/logo-large.png' },

  // Hero carousel slides
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/1.jpg', dest: 'images/hero-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/2.jpg', dest: 'images/hero-2.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/3.jpg', dest: 'images/hero-3.jpg' },

  // Benefit icons
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/02/india.svg', dest: 'images/icon-india.svg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/02/delivery-truck.svg', dest: 'images/icon-delivery.svg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/02/no-preservatives.png', dest: 'images/icon-no-preservatives.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/02/air-quality.svg', dest: 'images/icon-air-quality.svg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/02/buy.svg', dest: 'images/icon-buy.svg' },

  // Best sellers product images
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHK-10.jpg', dest: 'images/products/KHK-10.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/FRSNKHKCOMBO301-1.jpg', dest: 'images/products/FRSNKHKCOMBO301-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHC400X009-10.jpg', dest: 'images/products/KHC400X009-10.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHP4001-1.jpg', dest: 'images/products/KHP4001-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/C4004-1.jpg', dest: 'images/products/C4004-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/MKFP001-1.jpg', dest: 'images/products/MKFP001-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/NAMCOMBO304-1.jpg', dest: 'images/products/NAMCOMBO304-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHKMANIA5003-1.jpg', dest: 'images/products/KHKMANIA5003-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/BAKCOMBO003-1.jpg', dest: 'images/products/BAKCOMBO003-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/HTCCOMBO303-1.jpg', dest: 'images/products/HTCCOMBO303-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/HTC003-1.jpg', dest: 'images/products/HTC003-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHKMANIA3005-1.jpg', dest: 'images/products/KHKMANIA3005-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHPCOMBO3001-1.jpg', dest: 'images/products/KHPCOMBO3001-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHCCOMBO401-1.jpg', dest: 'images/products/KHCCOMBO401-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/FRSNKHKCOMBO303-1.jpg', dest: 'images/products/FRSNKHKCOMBO303-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHC400X009-11.jpg', dest: 'images/products/KHC400X009-11.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHC400X009-4.jpg', dest: 'images/products/KHC400X009-4.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHP4003-1.jpg', dest: 'images/products/KHP4003-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/C008-1.jpg', dest: 'images/products/C008-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/MKFP004-2.jpg', dest: 'images/products/MKFP004-2.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHKMANIA5004-1.jpg', dest: 'images/products/KHKMANIA5004-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/HTC002-1.jpg', dest: 'images/products/HTC002-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/HTC004-1.jpg', dest: 'images/products/HTC004-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/FRSNKHKCOMBO307-1.jpg', dest: 'images/products/FRSNKHKCOMBO307-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/FRSNKHKCOMBO210-1.jpg', dest: 'images/products/FRSNKHKCOMBO210-1.jpg' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/FRSNKHKCOMBO204-1.jpg', dest: 'images/products/FRSNKHKCOMBO204-1.jpg' },

  // Shop By Category images (portrait 202x303)
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/1.png', dest: 'images/categories/cat-1.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/2.png', dest: 'images/categories/cat-2.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/3.png', dest: 'images/categories/cat-3.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/4.png', dest: 'images/categories/cat-4.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/5.png', dest: 'images/categories/cat-5.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/6.png', dest: 'images/categories/cat-6.png' },

  // Shop By Occasion images
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/7.png', dest: 'images/occasions/occ-7.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/10.png', dest: 'images/occasions/occ-10.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/12.png', dest: 'images/occasions/occ-12.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/8.png', dest: 'images/occasions/occ-8.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/11.png', dest: 'images/occasions/occ-11.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/9.png', dest: 'images/occasions/occ-9.png' },

  // Shop By Taste images
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/13.png', dest: 'images/taste/taste-13.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/14.png', dest: 'images/taste/taste-14.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/15.png', dest: 'images/taste/taste-15.png' },

  // As Seen On logos
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/02/6-1.png', dest: 'images/seen-on/amazon.png' },
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/02/7-1.png', dest: 'images/seen-on/blinkit.png' },

  // Benefits section right image
  { url: 'https://farsanwadi.com/wp-content/uploads/2026/03/KHK-10.jpg', dest: 'images/benefits-side.jpg' },
];

async function download(url, destRel) {
  const dest = path.join(PUBLIC, destRel);
  const dir = path.dirname(dest);
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    await writeFile(dest, Buffer.from(buf));
    console.log(`✓ ${destRel}`);
  } catch (e) {
    console.error(`✗ ${destRel}: ${e.message}`);
  }
}

async function main() {
  const BATCH = 4;
  for (let i = 0; i < assets.length; i += BATCH) {
    const batch = assets.slice(i, i + BATCH);
    await Promise.all(batch.map(a => download(a.url, a.dest)));
  }
  console.log('\nDone!');
}

main();
