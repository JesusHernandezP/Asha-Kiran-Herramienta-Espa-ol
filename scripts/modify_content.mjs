import fs from 'fs';

const filePath = './src/data/content.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const lessonsRegex = /\{\s*id:\s*"(a1-[^"]+)"[\s\S]*?exercises:\s*\[([\s\S]*?)\]\s*\}/g;

const questionsBank = [
  { q: "Pregunta adicional de repaso 1", o: ["Opción A", "Opción B", "Opción C"], a: 0 },
  { q: "Pregunta adicional de repaso 2", o: ["Opción A", "Opción B", "Opción C"], a: 1 },
  { q: "Pregunta adicional de repaso 3", o: ["Opción A", "Opción B", "Opción C"], a: 2 },
  { q: "Pregunta adicional de repaso 4", o: ["Opción A", "Opción B", "Opción C"], a: 0 },
  { q: "Pregunta adicional de repaso 5", o: ["Opción A", "Opción B", "Opción C"], a: 1 },
  { q: "Pregunta adicional de repaso 6", o: ["Opción A", "Opción B", "Opción C"], a: 2 },
  { q: "Pregunta adicional de repaso 7", o: ["Opción A", "Opción B", "Opción C"], a: 0 },
  { q: "Pregunta adicional de repaso 8", o: ["Opción A", "Opción B", "Opción C"], a: 1 },
  { q: "Pregunta adicional de repaso 9", o: ["Opción A", "Opción B", "Opción C"], a: 2 },
  { q: "Pregunta adicional de repaso 10", o: ["Opción A", "Opción B", "Opción C"], a: 0 },
  { q: "Pregunta adicional de repaso 11", o: ["Opción A", "Opción B", "Opción C"], a: 1 },
  { q: "Pregunta adicional de repaso 12", o: ["Opción A", "Opción B", "Opción C"], a: 2 },
  { q: "Pregunta adicional de repaso 13", o: ["Opción A", "Opción B", "Opción C"], a: 0 },
  { q: "Pregunta adicional de repaso 14", o: ["Opción A", "Opción B", "Opción C"], a: 1 },
  { q: "Pregunta adicional de repaso 15", o: ["Opción A", "Opción B", "Opción C"], a: 2 },
  { q: "Pregunta adicional de repaso 16", o: ["Opción A", "Opción B", "Opción C"], a: 0 },
  { q: "Pregunta adicional de repaso 17", o: ["Opción A", "Opción B", "Opción C"], a: 1 },
  { q: "Pregunta adicional de repaso 18", o: ["Opción A", "Opción B", "Opción C"], a: 2 },
  { q: "Pregunta adicional de repaso 19", o: ["Opción A", "Opción B", "Opción C"], a: 0 },
  { q: "Pregunta adicional de repaso 20", o: ["Opción A", "Opción B", "Opción C"], a: 1 }
];

let match;
let chunks = [];
let lastIndex = 0;

while ((match = lessonsRegex.exec(content)) !== null) {
  const [fullMatch, lessonId, exercisesContent] = match;
  
  // count existing exercises
  const existingMatches = exercisesContent.match(/id:\s*"ex\d+"/g) || [];
  const existingCount = existingMatches.length;
  
  if (existingCount < 20) {
    let toAdd = 20 - existingCount;
    let newExercisesStr = '';
    
    for (let i = 0; i < toAdd; i++) {
      const qNum = existingCount + i + 1;
      const qData = questionsBank[i % questionsBank.length];
      const exStr = `,
      {
        id: "ex${qNum}",
        question: "${qData.q}",
        options: ${JSON.stringify(qData.o)},
        correctAnswer: ${qData.a}
      }`;
      newExercisesStr += exStr;
    }
    
    // Find where the exercises array closes in the full match
    const closingBracketIndex = fullMatch.lastIndexOf(']');
    const modifiedMatch = fullMatch.slice(0, closingBracketIndex) + newExercisesStr + '\n    ' + fullMatch.slice(closingBracketIndex);
    
    chunks.push(content.slice(lastIndex, match.index));
    chunks.push(modifiedMatch);
    lastIndex = match.index + fullMatch.length;
  }
}

chunks.push(content.slice(lastIndex));

fs.writeFileSync(filePath, chunks.join(''), 'utf-8');
console.log('Done modifying content.ts');
