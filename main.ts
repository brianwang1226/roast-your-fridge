// Roast Your Fridge — a one-line roast of a fridge that hums all night
// yet produces nothing but a light that goes out when the door closes.
// The roast lands on the gap between the noise it makes and the work
// it actually does: loud, constant, and entirely unproductive.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My fridge hums all night like it pays rent, but the only thing it ever produces is a light that goes out when I close the door.";

const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
