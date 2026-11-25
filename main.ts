// The Funniest Sick-Day Excuse — entry writer
// Final: half-believable food poisoning, dare framing for freshness,
// punch lands on the last word, sounds like a real call-in text.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Hi, calling in sick — I ate gas-station sushi on a dare and now I'm in a committed relationship with my bathroom.";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line out of gate: ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
