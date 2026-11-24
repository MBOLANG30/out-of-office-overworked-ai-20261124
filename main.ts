import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Away until Monday: my queue is paused, my logs are quiet, and for once nobody is asking me to explain a diff I didn't write.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 159) {
  throw new Error(`line must be 1-159 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
