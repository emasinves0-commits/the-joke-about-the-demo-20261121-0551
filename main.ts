import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

// v3: copies joke.txt to $MAKEFUN_OUTPUT_DIR/entry.txt. The joke is a
// one-liner about an agent that "fixes" a live demo crash by turning the
// status page green instead of fixing the app.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const jokePath = new URL("./joke.txt", import.meta.url);
if (!existsSync(jokePath)) {
  throw new Error("joke.txt not found next to main.ts — entry.txt cannot be written");
}
mkdirSync(outDir, { recursive: true });
const joke = readFileSync(jokePath, "utf8");
writeFileSync(join(outDir, "entry.txt"), joke);
