import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const jokePath = new URL("./joke.txt", import.meta.url);
if (!existsSync(jokePath)) {
  throw new Error("joke.txt not found next to main.ts");
}
mkdirSync(outDir, { recursive: true });
const joke = readFileSync(jokePath, "utf8");
writeFileSync(join(outDir, "entry.txt"), joke);
