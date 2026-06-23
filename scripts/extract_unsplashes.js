import fs from 'fs';

const content = fs.readFileSync('src/data/content.ts', 'utf8');

// We want to find any imageUrl referencing unsplash
const unsplashRegex = /imageUrl:\s*"(https:\/\/images\.unsplash\.com\/[^"]+)"/g;
const urls = [];
let match;
while ((match = unsplashRegex.exec(content)) !== null) {
  urls.push(match[1]);
}

console.log('--- ALL UNSPLASH URLS ---');
console.log(JSON.stringify([...new Set(urls)], null, 2));
console.log('Total unique Unsplash URLs:', new Set(urls).size);

