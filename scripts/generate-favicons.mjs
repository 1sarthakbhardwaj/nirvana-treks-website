import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public", "brand-icon.svg"));

const sizes = [
  { name: "favicon-48.png", size: 48 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
];

for (const { name, size } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(join(root, "public", name));
}

await sharp(join(root, "public", "favicon-48.png")).toFile(join(root, "public", "favicon.ico"));
await sharp(join(root, "public", "favicon-48.png")).toFile(join(root, "app", "favicon.ico"));

console.log("Generated favicons in public/ and app/favicon.ico");
