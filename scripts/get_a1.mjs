import fs from 'fs';
const content = fs.readFileSync('src/data/content.ts', 'utf-8');
const regex = /\{\s*id:\s*\"(a1-[^\"]+)\"[\s\S]*?topic:\s*\"([^\"]+)\"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1] + ' : ' + match[2]);
}
