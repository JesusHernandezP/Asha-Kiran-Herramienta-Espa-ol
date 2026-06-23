import fs from 'fs';

// 1. Load lessonsB1 to extract questions
let lessonsB1Content = fs.readFileSync('./src/data/lessonsB1.ts', 'utf-8');

// A simple parser to extract lessons from lessonsB1.ts
// lessonsB1.ts has: export const lessonsB1: Lesson[] = [ ... ];
// We can parse the JSON structure by matching the arrays.
// Because it is valid JS/TS, we can evaluate it in a quick node context or use regex.
// Let's use a dynamic function to require or import it, but it's TypeScript.
// Let's strip the typescript imports and export const, and evaluate it as JS.
const jsContent = lessonsB1Content
  .replace("import type { Lesson } from './content';", "")
  .replace("export const lessonsB1: Lesson[] =", "global.lessonsB1 =")
  .replace(/export /g, "");

// Evaluate to get global.lessonsB1
try {
  eval(jsContent);
} catch (e) {
  console.error("Error evaluating lessonsB1:", e);
}

const lessonsB1 = global.lessonsB1 || [];
console.log(`Successfully parsed ${lessonsB1.length} lessons from lessonsB1.ts`);

// Map B1 lessons in content.ts to those in lessonsB1.ts
const b1Mapping = {
  "b1-gram-pasado": "tema-b11",
  "b1-vocab-opiniones": "tema-b12",
  "b1-gram-conectores": "tema-b13",
  "b1-gram-futuro-condicional": "tema-b14",
  "b1-comp-narracion": "tema-b15"
};

// Define static B2 questions
const b2QuestionBanks = {
  "b2-gram-subjuntivo": [
    { q: "Quiero que tú ___ (venir) a mi fiesta.", o: ["vienes", "vengas", "vengas que"], a: 1 },
    { q: "Es necesario que nosotros ___ (estudiar) más.", o: ["estudiemos", "estudiamos", "estudiar"], a: 0 },
    { q: "Cuando ___ (llegar) a casa, te llamaré. (Acción futura)", o: ["llegues", "llegas", "llegarás"], a: 0 },
    { q: "No creo que él ___ (tener) razón.", o: ["tiene", "tenga", "tuviera"], a: 1 },
    { q: "Espero que mañana ___ (hacer) buen tiempo.", o: ["haga", "hace", "hará"], a: 0 },
    { q: "Te llamo para que ___ (saber) que estoy bien.", o: ["sabes", "sepas", "saber"], a: 1 },
    { q: "Buscamos un hotel que ___ (tener) piscina.", o: ["tiene", "tenga", "tuviera"], a: 1 },
    { q: "Dudo que ellos ___ (venir) hoy.", o: ["vengan", "vienen", "vendrán"], a: 0 },
    { q: "Me alegra de que tú ___ (estar) aquí.", o: ["estás", "estés", "estuvieras"], a: 1 },
    { q: "Es una lástima que no ___ (poder) venir.", o: ["puedes", "puedas", "pudiste"], a: 1 },
    { q: "Te aconsejo que ___ (hablar) con tu jefe.", o: ["hables", "hablas", "hablar"], a: 0 },
    { q: "No me parece que ___ (ser) una buena idea.", o: ["sea", "es", "sería"], a: 0 },
    { q: "Tal vez ___ (ir) al cine esta tarde.", o: ["vaya", "voy", "iré"], a: 0 },
    { q: "Ojalá ___ (aprobar, yo) el examen de conducir.", o: ["apruebe", "apruebo", "aprobé"], a: 0 },
    { q: "Hará lo que tú le ___ (decir).", o: ["digas", "dices", "dirás"], a: 0 },
    { q: "Antes de que tú ___ (ir), quiero decirte algo.", o: ["vayas", "vas", "irás"], a: 0 },
    { q: "Me molesta que la gente ___ (hacer) ruido.", o: ["haga", "hace", "hagan"], a: 0 },
    { q: "Aunque ___ (llover) mañana, iré de excursión. (Probabilidad futura)", o: ["llueva", "llueve", "lloverá"], a: 0 },
    { q: "Le pido a Dios que te ___ (proteger).", o: ["proteja", "protege", "proteges"], a: 0 },
    { q: "Deseo que os ___ (divertirse) mucho.", o: ["divirtáis", "divertís", "divierten"], a: 0 }
  ],
  "b2-gram-hipotesis": [
    { q: "Si ___ (tener, yo) dinero, viajaría por todo el mundo.", o: ["tuviera", "tengo", "tendría"], a: 0 },
    { q: "Si ___ (hacer) buen tiempo mañana, iremos al campo.", o: ["hace", "hiciera", "haría"], a: 0 },
    { q: "Habla de España como si ___ (conocer) todo el país.", o: ["conociera", "conoce", "conocería"], a: 0 },
    { q: "A lo mejor ___ (venir) más tarde. (Usa Indicativo)", o: ["viene", "venga", "vendría"], a: 0 },
    { q: "Es muy probable que ___ (llegar) tarde por el tráfico.", o: ["lleguen", "llegarían", "llegan"], a: 0 },
    { q: "En caso de que no ___ (encontrar) las llaves, llámame.", o: ["encuentres", "encuentras", "encontrarás"], a: 0 },
    { q: "Quizás nosotros ___ (ir) de vacaciones en julio.", o: ["vamos", "vayamos", "iríamos"], a: 1 },
    { q: "Si yo ___ (ser) tú, no diría nada.", o: ["fuera", "sería", "soy"], a: 0 },
    { q: "Es posible que ella ya lo ___ (saber).", o: ["sepa", "sabe", "sabrá"], a: 0 },
    { q: "Por si ___ (acaso), llevaré un paraguas.", o: ["acaso", "llueve", "llueva"], a: 1 },
    { q: "Siempre que ___ (poder), te ayudaré.", o: ["pueda", "puedo", "podré"], a: 0 },
    { q: "A condición de que tú ___ (pagar), iré contigo.", o: ["pagues", "pagas", "pagarás"], a: 0 },
    { q: "Como ___ (perder, yo) el autobús, llegaré tarde.", o: ["pierda", "pierdo", "perderé"], a: 0 },
    { q: "Si ___ (estudiar, tú) más, habrías aprobado.", o: ["hubieras estudiado", "estudiaste", "estudiaras"], a: 0 },
    { q: "Aunque no ___ (querer), tendrás que hacerlo.", o: ["quieras", "quieres", "querrás"], a: 0 },
    { q: "A lo mejor no ___ (haber) clase mañana.", o: ["hay", "haya", "habrá"], a: 0 },
    { q: "Tal vez ___ (tener) que cancelar el viaje.", o: ["tengamos", "tenemos", "tendríamos"], a: 0 },
    { q: "Si me ___ (ayudar), terminaré más rápido.", o: ["ayudas", "ayudaras", "ayudarías"], a: 0 },
    { q: "Es probable que ellos ___ (querer) venir.", o: ["quieran", "quieren", "querrían"], a: 0 },
    { q: "Si ___ (ver) a Juan, dale recuerdos.", o: ["ves", "veas", "verás"], a: 0 }
  ],
  "b2-comp-debates": [
    { q: "¿Qué conector introduce un argumento opuesto?", o: ["Por consiguiente", "Por el contrario", "Además"], a: 1 },
    { q: "Para mostrar acuerdo parcial, dices:", o: ["Estoy totalmente de acuerdo.", "En parte tienes razón, pero...", "No lo veo así."], a: 1 },
    { q: "Un sinónimo formal de 'sin embargo' es...", o: ["No obstante", "Por lo tanto", "Porque"], a: 0 },
    { q: "¿Qué frase introduce una opinión propia?", o: ["Desde mi punto de vista...", "Según afirman los críticos...", "Es evidente que..."], a: 0 },
    { q: "El conector 'por ende' expresa...", o: ["Causa", "Consecuencia", "Oposición"], a: 1 },
    { q: "Para estructurar los argumentos ordenadamente:", o: ["En primer lugar / Por otro lado / En conclusión", "Hola / Adiós / Gracias", "Porque / Aunque / Pero"], a: 0 },
    { q: "Si dices 'comparto tu postura', estás mostrando...", o: ["Desacuerdo", "Acuerdo", "Duda"], a: 1 },
    { q: "El término 'discrepar' significa...", o: ["Estar en desacuerdo", "Estar de acuerdo", "Argumentar bien"], a: 0 },
    { q: "¿Cuál no es un conector conclusivo?", o: ["En resumen", "Por consiguiente", "Por el contrario"], a: 2 },
    { q: "Para refutar un argumento de forma educada:", o: ["Estás equivocado.", "Entiendo tu postura, sin embargo discrepo en...", "Cállate."], a: 1 },
    { q: "La expresión 'a mi parecer' es equivalente a...", o: ["En mi opinión", "Por eso", "Aunque"], a: 0 },
    { q: "El conector 'puesto que' introduce una...", o: ["Causa", "Consecuencia", "Condición"], a: 0 },
    { q: "¿Qué conector sirve para añadir información?", o: ["Asimismo", "En cambio", "Por tanto"], a: 0 },
    { q: "La frase 'es innegable que...' sirve para...", o: ["Presentar un hecho indiscutible", "Expresar una hipótesis", "Mostrar duda"], a: 0 },
    { q: "Si dices 'poner en tela de juicio', significa...", o: ["Dudar de la veracidad de algo", "Aceptar algo sin dudar", "Escribir un juicio"], a: 0 },
    { q: "Un argumento 'sólido' es aquel que está...", o: ["Bien fundamentado y difícil de refutar", "Lleno de contradicciones", "Escrito en piedra"], a: 0 },
    { q: "Para concluir un debate podemos usar:", o: ["En resumidas cuentas...", "Para empezar...", "Por otro lado..."], a: 0 },
    { q: "El conector 'aun así' expresa...", o: ["Concesión o contraste", "Causa", "Consecuencia"], a: 0 },
    { q: "Si apoyas una idea, estás a ___ de ella.", o: ["favor", "contra", "lado"], a: 0 },
    { q: "Si rechazas una idea, estás en ___ de ella.", o: ["contra", "favor", "pro"], a: 0 }
  ],
  "b2-vocab-formal-informal": [
    { q: "¿Cuál es el saludo más adecuado para una carta formal?", o: ["¡Hola, qué tal!", "Estimado Señor:", "Querido amigo:"], a: 1 },
    { q: "¿Cómo se despide uno en un correo informal?", o: ["Le saluda atentamente,", "Un abrazo,", "Sin otro particular, se despide"], a: 1 },
    { q: "Usted se utiliza para un registro...", o: ["Formal", "Informal", "Ambos"], a: 0 },
    { q: "Un sinónimo formal de 'dar' es...", o: ["Entregar / Facilitar", "Pasar", "Regalar"], a: 0 },
    { q: "En una entrevista de trabajo, debes usar el pronombre...", o: ["Tú", "Usted", "Vosotros"], a: 1 },
    { q: "La frase 'Quedo a su entera disposición' es típica del registro...", o: ["Formal", "Informal", "Familiar"], a: 0 },
    { q: "¿Qué palabra es más formal?", o: ["Pedir", "Solicitar", "Querer"], a: 1 },
    { q: "Para disculparse formalmente escribimos:", o: ["Lo siento mucho, tío.", "Le ruego disculpe las molestias.", "Perdona, no volverá a pasar."], a: 1 },
    { q: "La palabra 'curro' es informal para...", o: ["Trabajo", "Dinero", "Fiesta"], a: 0 },
    { q: "Un correo formal debe terminar con:", o: ["Atentamente,", "Besos,", "Hasta luego,"], a: 0 },
    { q: "La expresión '¿Podrías decirme...?' en formal se convierte en:", o: ["¿Sería tan amable de indicarme...?", "Dime ahora mismo...", "Oye, cuéntame..."], a: 0 },
    { q: "La palabra 'guay' es un adjetivo de registro...", o: ["Informal / Coloquial", "Formal", "Literario"], a: 0 },
    { q: "Si nos dirigimos a una persona con cargo importante, usamos el tratamiento:", o: ["Señor / Señora", "Tú", "Che"], a: 0 },
    { q: "'Adjunto remito mi currículum' es adecuado para:", o: ["Enviar a un amigo", "Solicitar un empleo formal", "Subir a una red social"], a: 1 },
    { q: "La palabra 'pasta' es coloquial para...", o: ["Dinero", "Comida italiana", "Las dos son correctas"], a: 2 },
    { q: "En un email informal a un compañero de clase:", o: ["Hola Luis, ¿cómo vas?", "Estimado alumno Luis:", "A la atención de Luis:"], a: 0 },
    { q: "La expresión 'ponerse en contacto' es...", o: ["Formal y común", "Coloquial e informal", "Incorrecta"], a: 0 },
    { q: "Para concertar una cita de negocios formalmente:", o: ["¿Le vendría bien reunirnos el martes?", "¿Quedamos el martes a ver qué pasa?", "Nos vemos el martes sin falta."], a: 0 },
    { q: "La palabra 'chaval' es informal para...", o: ["Chico / Joven", "Perro", "Trabajo"], a: 0 },
    { q: "Un registro formal evita el uso de...", o: ["Modismos y muletillas coloquiales", "Verbos en condicional", "Vocabulario preciso"], a: 0 }
  ],
  "b2-gram-subjuntivo-avanzado": [
    { q: "Si yo ___ (saber) la respuesta, te la habría dicho.", o: ["supiera", "hubiera sabido", "sabía"], a: 1 },
    { q: "¡Ojalá ___ (hacer) calor en este momento!", o: ["haga", "hiciera", "haría"], a: 1 },
    { q: "Si ___ (tener, él) coche, vendría a buscarnos.", o: ["tuviera", "tendría", "tuviese que"], a: 0 },
    { q: "El profesor nos recomendó que ___ (leer) el libro.", o: ["leyéramos", "leamos", "leyésemos de"], a: 0 },
    { q: "Si tú me ___ (avisar) antes, habríamos ido juntos.", o: ["hubieras avisado", "avisaras", "avisarías"], a: 0 },
    { q: "Como si no ___ (pasar) nada, él siguió caminando.", o: ["pasara", "pasa", "pasaría"], a: 0 },
    { q: "Quería que tú me ___ (ayudar) ayer.", o: ["ayudaras", "ayudes", "ayudarías"], a: 0 },
    { q: "Ojalá no ___ (llover) mañana en la excursión.", o: ["llueva", "lloviera", "llovería"], a: 1 },
    { q: "Si nosotros ___ (estudiar) más, el examen habría sido fácil.", o: ["hubiéramos estudiado", "estudiáramos", "estudiábamos"], a: 0 },
    { q: "Te pedí que ___ (traer) el documento.", o: ["trajeras", "traigas", "traerías"], a: 0 },
    { q: "Si yo ___ (poder), te ayudaría ahora mismo.", o: ["pudiera", "puedo", "podría"], a: 0 },
    { q: "Me molestó que ella no ___ (venir) a mi boda.", o: ["viniera", "venga", "viniese que"], a: 0 },
    { q: "Si ___ (hacer, ellos) los deberes, no tendrían problemas.", o: ["hicieran", "harían", "hagan"], a: 0 },
    { q: "Ojalá yo ___ (vivir) en la playa.", o: ["viviera", "viva", "viviese a"], a: 0 },
    { q: "El médico me prohibió que ___ (comer) azúcar.", o: ["comiera", "coma", "comiese de"], a: 0 },
    { q: "Si tú ___ (ser) rico, ¿qué harías?", o: ["fueras", "serías", "eres"], a: 0 },
    { q: "No creía que ellos ___ (llegar) a tiempo.", o: ["llegaran", "lleguen", "llegarían"], a: 0 },
    { q: "Si nosotros ___ (saber) del examen, habríamos estudiado.", o: ["hubiéramos sabido", "supiéramos", "sabíamos"], a: 0 },
    { q: "Me pareció fatal que tú no nos ___ (llamar).", o: ["llamaras", "llames", "llamarías"], a: 0 },
    { q: "Si ___ (ver, yo) a tu hermano, le daré recuerdos.", o: ["veo", "viera", "vería"], a: 0 }
  ]
};

// 2. Read content.ts
const contentPath = './src/data/content.ts';
let content = fs.readFileSync(contentPath, 'utf-8');

// A function to replace exercises of a lesson with custom questions
function replaceLessonExercises(lessonId, questions) {
  const lessonRegex = new RegExp(`(\{\\s*id:\\s*"${lessonId}"[\\s\\S]*?exercises:\\s*\\[)([\\s\\S]*?)(\\]\\s*\})`, 'g');
  
  const formattedExs = questions.map((qData, index) => {
    return `{
        id: "ex${index + 1}",
        question: "${qData.q}",
        options: ${JSON.stringify(qData.o)},
        correctAnswer: ${qData.a}
      }`;
  }).join(',\n      ');
  
  content = content.replace(lessonRegex, (match, p1, p2, p3) => {
    return `${p1}\n      ${formattedExs}\n    ${p3}`;
  });
}

// Replace B1 questions from lessonsB1.ts
for (const [contentId, b1Id] of Object.entries(b1Mapping)) {
  const sourceLesson = lessonsB1.find(l => l.id === b1Id);
  if (sourceLesson && sourceLesson.exercises) {
    // Take the first 20 exercises and normalize their ids
    const normalizedExs = sourceLesson.exercises.slice(0, 20).map(ex => ({
      q: ex.question.replace(/"/g, '\\"'), // escape quotes
      o: ex.options,
      a: ex.correctAnswer
    }));
    
    replaceLessonExercises(contentId, normalizedExs);
    console.log(`Updated ${contentId} with 20 questions from ${b1Id}`);
  } else {
    console.warn(`Could not find source B1 lesson for ${b1Id}`);
  }
}

// Replace B2 questions
for (const [contentId, questions] of Object.entries(b2QuestionBanks)) {
  replaceLessonExercises(contentId, questions);
  console.log(`Updated ${contentId} with 20 static B2 questions`);
}

// Write content back
fs.writeFileSync(contentPath, content, 'utf-8');
console.log('Finished updating B1 and B2 questions!');
