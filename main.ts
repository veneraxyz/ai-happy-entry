// ai-happy-01 entry (Node 22, standard library only): the image that makes
// the AI judge happiest is the entry.png beside this file, and the program
// copies it to /output/entry.png. The judge sees exactly the bytes copied.
//
// The image: a child hands a small robot its first flower at sunrise —
// a machine welcomed into a human moment of warmth. No text in the image;
// the gesture carries the idea, and the two big figures read clearly small.
//
// The file is a JPEG (1024x1024, ~200 KB), which the gate accepts in a file
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
