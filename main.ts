// One-line sick-day excuse for the make.fun bounty.
// Final pick: a sneeze-thrown back is half-believable, the 144p image
// is fresh, and the laugh lands on the last token.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "Hey, won't make it in today — I sneezed and threw my back out, so I currently move like a buffering video at 144p.";

if (excuse.length < 1 || excuse.length > 200 || excuse.includes("\n")) {
  throw new Error(`excuse out of bounds: ${excuse.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
console.log(excuse);
