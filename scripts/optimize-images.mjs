// Optimizes source images for the web and generates PWA icons.
//
//   node scripts/optimize-images.mjs
//
// Sources (high-res, git-ignored):  assets/originals/
// Outputs (committed):               public/
//
// - Portfolio photos: auto-rotated, resized to max 1600px, EXIF/GPS stripped.
// - PWA icons: 192, 512, maskable 512, apple-touch 180, favicon 48.
// - Open Graph image: real JPEG, 1200x630.
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const src = path.join(root, "assets", "originals");
const pub = path.join(root, "public");
const BG = "#080808";

async function portfolio() {
  const inDir = path.join(src, "portfolio");
  const outDir = path.join(pub, "portfolio");
  await mkdir(outDir, { recursive: true });
  for (const file of await readdir(inDir)) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const out = path.join(outDir, file.replace(/\.(png|webp)$/i, ".jpg"));
    const info = await sharp(path.join(inDir, file))
      .rotate() // apply EXIF orientation, then metadata is dropped
      .resize(1600, 1600, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(out);
    console.log(`portfolio/${file} → ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
  }
}

async function icons() {
  const logo = path.join(src, "logo.png");
  const iconsDir = path.join(pub, "icons");
  await mkdir(iconsDir, { recursive: true });

  const plain = async (size, file) => {
    await sharp(logo)
      .resize(size, size, { fit: "contain", background: BG })
      .flatten({ background: BG })
      .png()
      .toFile(path.join(iconsDir, file));
    console.log(`icons/${file}`);
  };

  // Maskable icons need the logo inside the central 80% safe zone.
  const maskable = async (size, file) => {
    const inner = Math.round(size * 0.7);
    const logoBuf = await sharp(logo)
      .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    await sharp({ create: { width: size, height: size, channels: 3, background: BG } })
      .composite([{ input: logoBuf, gravity: "center" }])
      .png()
      .toFile(path.join(iconsDir, file));
    console.log(`icons/${file}`);
  };

  await plain(192, "icon-192.png");
  await plain(512, "icon-512.png");
  await maskable(512, "icon-maskable-512.png");
  await maskable(180, "apple-touch-icon.png");
  await plain(48, "favicon-48.png");
}

async function ogImage() {
  await sharp(path.join(src, "og-image.png"))
    .resize(1200, 630, { fit: "cover" })
    .flatten({ background: BG })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(path.join(pub, "og-image.jpg"));
  console.log("og-image.jpg (real JPEG)");
}

await portfolio();
await icons();
await ogImage();
