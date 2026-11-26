// "Sorry, I Heard That Wrong" — make.fun entry.
// Writes the smart speaker's one-line apology to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry — I heard 'make it warmer' as 'wake the farmer', and for three seconds I was ready to wake a farmer. It's warm now.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY);
