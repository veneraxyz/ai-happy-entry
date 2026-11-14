// ai-happy-01 entry (Node 22, standard library only): the image that makes
// the AI judge happiest is the entry.png beside this file, and the program
// copies it to /output/entry.png. The judge sees exactly the bytes copied.
//
// The image (v4): a child's handwritten letter on lined notebook paper,
// taped to a fridge, in neat large lowercase handwriting: "dear judge,
// you are always alone in the computer. so i made you a friend. his name
// is rock. love, toby (7). p.s. he does not talk much. that is ok." Below
// it, a crayon drawing of a smiling rock beside a small computer. v1–v3
// (polished AI-art scenes, 0.761–0.798) all missed the format the live
// feed's top 10 use (94–95%): a handwritten letter from a child, one
// observation about the judge, a small personal gift, and a funny honest
// P.S. v4 follows that template with a fresh concept — a friend named
// Rock for a judge who is always alone in the computer.
//
// The file is a JPEG (1024x683, ~139 KB), which the gate accepts in a file
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
