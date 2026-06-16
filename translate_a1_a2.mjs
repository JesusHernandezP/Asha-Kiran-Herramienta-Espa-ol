import fs from 'fs';

const filePath = './src/data/content.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Parse lessons of level A1 and A2
const lessonsRegex = /\{\s*id:\s*"(a[12]-[^"]+)"([\s\S]*?)exercises:\s*\[([\s\S]*?)\]\s*\}/g;

const lessonsToProcess = [];
let match;
while ((match = lessonsRegex.exec(content)) !== null) {
  lessonsToProcess.push({
    id: match[1],
    fullMatch: match[0],
    startIndex: match.index,
    endIndex: match.index + match[0].length,
    middlePart: match[2],
    exercisesContent: match[3],
  });
}

console.log(`Found ${lessonsToProcess.length} A1/A2 lessons to translate.`);

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function matchCapitalization(original, translated) {
  if (!original || !translated) return translated;
  if (original[0] === original[0].toUpperCase()) {
    return translated[0].toUpperCase() + translated.slice(1);
  }
  return translated;
}

async function translateBatch(texts, targetLang) {
  // We prefix each line with "--- " so we can split it safely
  const query = texts.map(t => {
    if (t.includes('<trans')) {
      return '--- SKIP';
    }
    // Remove any legacy trans tags just in case
    const clean = t.replace(/<trans\s+[^>]*\/>/g, '').trim();
    return `--- ${clean}`;
  }).join('\n');

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLang}&dt=t&q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const translatedText = data[0].map(x => x[0]).join('');
    
    // Split back and clean prefix
    const lines = translatedText.split('\n').map(l => {
      let cleaned = l.replace(/^---\s*/, '').trim();
      // Sometimes Google Translate might return it as "---SKIP" or change spacing, handle it
      if (cleaned.toUpperCase().startsWith('SKIP')) {
        return 'SKIP';
      }
      return cleaned;
    });

    return lines;
  } catch (err) {
    console.error(`Batch translation failed for ${targetLang}:`, err);
    return null;
  }
}

// Parse JS/TS exercises array content into actual object format so we can process it
function parseExercises(exercisesText) {
  try {
    const fn = new Function(`return [ ${exercisesText} ];`);
    return fn();
  } catch (err) {
    console.error("Failed to parse exercises text:", err);
    return [];
  }
}

async function run() {
  for (const lesson of lessonsToProcess) {
    console.log(`Translating lesson: ${lesson.id}...`);
    const exercises = parseExercises(lesson.exercisesContent);
    if (!exercises || exercises.length === 0) {
      console.log(`Skipping lesson ${lesson.id} (no exercises found or failed to parse)`);
      continue;
    }

    // Flatten all texts to translate
    // Each exercise has 1 question and N options
    const flatTexts = [];
    for (const ex of exercises) {
      flatTexts.push({ type: 'q', text: ex.question });
      for (const opt of ex.options) {
        flatTexts.push({ type: 'o', text: opt });
      }
    }

    // Call batch translations for all 4 target languages
    const enTranslations = await translateBatch(flatTexts.map(x => x.text), 'en');
    await delay(100);
    const arTranslations = await translateBatch(flatTexts.map(x => x.text), 'ar');
    await delay(100);
    const ukTranslations = await translateBatch(flatTexts.map(x => x.text), 'uk');
    await delay(100);
    const frTranslations = await translateBatch(flatTexts.map(x => x.text), 'fr');
    await delay(100);

    if (!enTranslations || !arTranslations || !ukTranslations || !frTranslations) {
      console.error(`Failed to translate lesson ${lesson.id} due to batch translation failure.`);
      continue;
    }

    // Reconstruct exercises with trans tags
    let flatIndex = 0;
    const translatedExercises = [];

    for (const ex of exercises) {
      let finalQuestion = ex.question;
      // Question translation
      const qItem = flatTexts[flatIndex];
      const enQ = enTranslations[flatIndex];
      const arQ = arTranslations[flatIndex];
      const ukQ = ukTranslations[flatIndex];
      const frQ = frTranslations[flatIndex];
      flatIndex++;

      if (!ex.question.includes('<trans') && enQ && arQ && ukQ && frQ && enQ !== 'SKIP') {
        const cleanQ = ex.question.trim();
        finalQuestion = `${cleanQ} <trans en="(${matchCapitalization(cleanQ, enQ)})" ar="(${arQ})" uk="(${matchCapitalization(cleanQ, ukQ)})" fr="(${matchCapitalization(cleanQ, frQ)})"/>`;
      }

      // Options translations
      const finalOptions = [];
      for (const opt of ex.options) {
        const optItem = flatTexts[flatIndex];
        const enO = enTranslations[flatIndex];
        const arO = arTranslations[flatIndex];
        const ukO = ukTranslations[flatIndex];
        const frO = frTranslations[flatIndex];
        flatIndex++;

        if (!opt.includes('<trans') && enO && arO && ukO && frO && enO !== 'SKIP') {
          const cleanOpt = opt.trim();
          const optTrans = `<trans en="(${matchCapitalization(cleanOpt, enO)})" ar="(${arO})" uk="(${matchCapitalization(cleanOpt, ukO)})" fr="(${matchCapitalization(cleanOpt, frO)})"/>`;
          finalOptions.push(`${cleanOpt} ${optTrans}`);
        } else {
          finalOptions.push(opt);
        }
      }

      translatedExercises.push({
        ...ex,
        question: finalQuestion,
        options: finalOptions
      });
    }

    // Format the exercises array back to TS code
    const exercisesJs = translatedExercises.map(ex => {
      const escapedQuestion = ex.question.replace(/`/g, '\\`').replace(/\$/g, '\\$');
      const escapedOptions = ex.options.map(opt => `"${opt.replace(/"/g, '\\"')}"`).join(', ');
      return `      {
        id: "${ex.id}",
        question: \`${escapedQuestion}\`,
        options: [${escapedOptions}],
        correctAnswer: ${ex.correctAnswer}
      }`;
    }).join(',\n');

    // Reload content.ts in case of concurrent modifications
    const currentContent = fs.readFileSync(filePath, 'utf-8');
    const lessonEscapedId = lesson.id.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const specificLessonRegex = new RegExp(`(\\{\\s*id:\\s*"${lessonEscapedId}"[\\s\\S]*?exercises:\\s*\\[)([\\s\\S]*?)(\\s*\\]\\s*\\})`);
    
    if (specificLessonRegex.test(currentContent)) {
      const updatedContent = currentContent.replace(specificLessonRegex, `$1\n${exercisesJs}\n    $3`);
      fs.writeFileSync(filePath, updatedContent, 'utf-8');
      console.log(`Successfully translated and updated: ${lesson.id}`);
    } else {
      console.error(`Could not locate lesson ${lesson.id} in content.ts to replace!`);
    }

    // Wait a bit between lessons
    await delay(1000);
  }

  console.log('All A1/A2 lessons have been successfully translated!');
}

run().catch(console.error);
