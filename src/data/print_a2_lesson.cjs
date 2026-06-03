const fs = require('fs');
const content = fs.readFileSync('src/data/content.ts', 'utf8');

const regex = /\{\s*id:\s*["']a2-vocab-animales["'][\s\S]*?\}/i;
const match = content.match(regex);
if (match) {
  console.log(match[0]);
} else {
  console.log('Not found');
}
