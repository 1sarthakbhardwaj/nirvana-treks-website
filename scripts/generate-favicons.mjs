import sharp from "sharp";
import { readFileSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public", "brand-icon.svg"));

const outputs = [
  { path: "public/favicon-48.png", size: 48 },
  { path: "public/favicon.ico", size: 48 },
  { path: "public/icon-192.png", size: 192 },
  { path: "public/icon-512.png", size: 512 },
  { path: "public/apple-touch-icon.png", size: 180 },
  { path: "app/favicon.ico", size: 48 },
  { path: "app/icon.png", size: 32 },
  { path: "app/apple-icon.png", size: 180 },
];

for (const { path, size } of outputs) {
  await sharp(svg).resize(size, size).png().toFile(join(root, path));
}

copyFileSync(join(root, "public", "brand-icon.svg"), join(root, "app", "icon.svg"));

console.log("Mountain favicons written to app/ and public/");
