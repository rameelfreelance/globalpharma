/**
 * Re-encode raster images under /public in place (same paths & filenames).
 * - Caps longest edge at MAX_EDGE (enough for ~1920px layouts @2x).
 * - JPEG: mozjpeg, progressive
 * - PNG: zlib compression (keeps transparency)
 * - WebP: quality preset
 * Skips a file if the output would be larger than the original.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");

/** Longest side in pixels; aligns with 1920px Figma width + retina headroom */
const MAX_EDGE = 2560;

const RASTER_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function walkRasterFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walkRasterFiles(full, acc);
    else if (RASTER_EXT.has(path.extname(ent.name).toLowerCase())) acc.push(full);
  }
  return acc;
}

function formatMb(n) {
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeOne(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const before = fs.statSync(filePath).size;
  const tmp = `${filePath}.${process.pid}.${Date.now()}.tmp`;

  try {
    let pipeline = sharp(filePath, { failOn: "none" }).rotate();
    const meta = await sharp(filePath, { failOn: "none" }).metadata();

    if (meta.width && meta.height) {
      const longest = Math.max(meta.width, meta.height);
      if (longest > MAX_EDGE) {
        pipeline = pipeline.resize({
          width: MAX_EDGE,
          height: MAX_EDGE,
          fit: "inside",
          withoutEnlargement: true,
        });
      }
    }

    if (ext === ".png") {
      await pipeline
        .png({
          compressionLevel: 9,
          adaptiveFiltering: true,
          effort: 10,
        })
        .toFile(tmp);
    } else if (ext === ".webp") {
      await pipeline.webp({ quality: 85, effort: 6 }).toFile(tmp);
    } else {
      await pipeline
        .jpeg({
          quality: 84,
          mozjpeg: true,
          progressive: true,
        })
        .toFile(tmp);
    }

    const after = fs.statSync(tmp).size;
    if (after > before) {
      fs.unlinkSync(tmp);
      return {
        filePath,
        before,
        after: before,
        saved: 0,
        note: "skipped_output_larger",
      };
    }

    fs.renameSync(tmp, filePath);
    return {
      filePath,
      before,
      after,
      saved: before - after,
      note: "ok",
    };
  } catch (err) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    return {
      filePath,
      before,
      after: before,
      saved: 0,
      note: `error:${err.message}`,
    };
  }
}

async function main() {
  if (!fs.existsSync(publicDir)) {
    console.error("public/ not found:", publicDir);
    process.exit(1);
  }

  const files = walkRasterFiles(publicDir).sort();
  console.log(`Found ${files.length} raster files under public/\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  const errors = [];

  for (const f of files) {
    const rel = path.relative(publicDir, f);
    const res = await optimizeOne(f);
    totalBefore += res.before;
    totalAfter += res.after;

    const pct =
      res.before > 0
        ? (((res.before - res.after) / res.before) * 100).toFixed(1)
        : "0";

    if (String(res.note).startsWith("error:")) {
      errors.push(`${rel}: ${res.note}`);
      console.log(`ERR ${rel}`);
    } else if (res.note === "skipped_output_larger") {
      console.log(`SKIP ${rel} (would grow)`);
    } else {
      console.log(
        `OK   ${rel}  ${formatMb(res.before)} → ${formatMb(res.after)} (−${pct}%)`,
      );
    }
  }

  console.log("\n---");
  console.log(`Total: ${formatMb(totalBefore)} → ${formatMb(totalAfter)}`);
  console.log(
    `Saved: ${formatMb(totalBefore - totalAfter)} (${totalBefore > 0 ? (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1) : 0}%)`,
  );
  if (errors.length) {
    console.log("\nErrors:");
    errors.forEach((e) => console.log(e));
    process.exitCode = 1;
  }
}

main();
