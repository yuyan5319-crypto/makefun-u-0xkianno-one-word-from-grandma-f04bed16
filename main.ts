// One Word From Grandma — make.fun bounty entry.
//
// The competition asks for exactly one word: the single word a grandma
// would text about AI. This program writes that one word, and nothing else,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
//
// The word: "Skynet".
// Grandma has seen the Terminator films, she is a little worried about the
// machines, and this is the one word she would send her grandchild about AI.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word Grandma would text about AI.
const WORD = "Skynet";

// Where the entry goes: the harness sets MAKEFUN_OUTPUT_DIR, else /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// The gate only accepts 1-30 characters of non-whitespace text, and the
// brief allows exactly one word: enforce both before writing anything.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(
    `Entry must be exactly one word of 1-30 non-whitespace characters, got ${JSON.stringify(WORD)}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, WORD, "utf8");
console.log(`Wrote one word (${WORD.length} characters) to ${outFile}`);
