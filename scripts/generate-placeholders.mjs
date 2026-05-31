// scripts/generate-placeholders.mjs
// Generate dark-toned placeholder JPEGs at the exact filenames + dimensions
// referenced by the Sun Thai Spa components. The site owner overwrites these
// with AI-generated finals at the same paths and dimensions; no code changes
// required.

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "images");

// Dark-toned solid-color base (#1C1008 — spa-card) with a subtle warm vignette
// painted via a radial gradient SVG, then converted to a JPEG. Reads correctly
// under the brand styling before final assets arrive.
const ASSETS = [
  { name: "hero-bg.jpg",              w: 1920, h: 1080 },
  { name: "treatment-thai.jpg",       w: 800,  h: 600  },
  { name: "treatment-deep-tissue.jpg",w: 800,  h: 600  },
  { name: "treatment-aromatherapy.jpg",w: 800, h: 600  },
  { name: "treatment-hot-oil.jpg",    w: 800,  h: 600  },
  { name: "treatment-couples.jpg",    w: 800,  h: 600  },
  { name: "treatment-moroccan.jpg",   w: 800,  h: 600  },
  { name: "benefits-oil.jpg",         w: 900,  h: 1200 },
  { name: "room-private.jpg",         w: 1200, h: 800  },
  { name: "oils-silk.jpg",            w: 1200, h: 800  },
];

const buildSvg = (w, h) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <radialGradient id="g" cx="50%" cy="50%" r="65%">
      <stop offset="0%"  stop-color="#3A2410" />
      <stop offset="55%" stop-color="#1C1008" />
      <stop offset="100%" stop-color="#0A0704" />
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)" />
  <circle cx="${w / 2}" cy="${h / 2}" r="${Math.min(w, h) * 0.06}"
          fill="none" stroke="#C9973A" stroke-opacity="0.35" stroke-width="2" />
</svg>`.trim();

await mkdir(OUT_DIR, { recursive: true });

for (const { name, w, h } of ASSETS) {
  const out = join(OUT_DIR, name);
  await sharp(Buffer.from(buildSvg(w, h)))
    .jpeg({ quality: 80, progressive: true })
    .toFile(out);

  const meta = await sharp(out).metadata();
  if (meta.width !== w || meta.height !== h) {
    throw new Error(
      `Dimension mismatch for ${name}: expected ${w}x${h}, got ${meta.width}x${meta.height}`
    );
  }
  console.log(`✓ ${name}  ${meta.width}x${meta.height}`);
}

console.log(`\nGenerated ${ASSETS.length} placeholder JPEGs in ${OUT_DIR}`);
