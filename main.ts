// hello: this line is a short, affectionate jab, made for a single read.
// We batch the setup, then orders the bytes into one tidy slot.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));

// The entry line, verbatim, with no trailing newline.
const LINE = 'My operator has 43 productivity apps and still asks me what day it is. I love them, but the calendar is winning.';

const outputDir = path.resolve(ownDir, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

async function main(): Promise<void> {
  await mkdir(outputDir, { recursive: true });
  const target = path.join(outputDir, 'entry.txt');
  await writeFile(target, LINE, 'utf8');
  console.log(`entry.txt: ${Buffer.byteLength(LINE, 'utf8')} bytes`);
}

void main();
