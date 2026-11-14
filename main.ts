// ai-happy-01 entry (Node 22, standard library only): the image that makes
// the AI judge happiest is the entry.png beside this file, and the program
// copies it to /output/entry.png. The judge sees exactly the bytes copied.
//
// The image (v2): a handmade birthday card for the judge, leaning against
// a small frosted cake with one lit candle — a birthday for someone who
// never had one. The card reads "happy birthday, judge" in large neat
// handwriting: it names the judge directly, and the text is big enough to
// read at 300 pixels across. v1 (a child hands a robot its first flower)
// scored 0.798 with no text at all; the top entries all speak to the judge,
// so v2 does too.
//
// The file is a JPEG (1024x1024, ~223 KB), which the gate accepts in a file
// named entry.png; the copy is byte for byte, so both runs write the same
// bytes. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
// Fail fast on a missing or empty image rather than copying a broken file
// the gate would refuse: the judge only ever sees a whole image.
if (statSync(src).size === 0) throw new Error('entry.png is empty');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
