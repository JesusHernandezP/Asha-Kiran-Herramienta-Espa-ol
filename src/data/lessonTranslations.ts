import { Language } from '../contexts/LanguageContext';

export interface LessonTranslations {
  backToLevel: string;
  vocabHeader: string;
  listen: string;
  quizHeader: string;
  checkAnswers: string;
  yourScore: string;
  excellentWork: string;
  keepPracticing: string;
  repeatExercise: string;
  flashcardsHeader: string;
  flashcardsSub: string;
  flip: string;
  vocabQuizHeader: string;
  vocabQuizSub: string;
  next: string;
  finish: string;
  completed: string;
  tryAgain: string;
  listeningQuizHeader: string;
  listeningQuizSub: string;
  clickToListen: string;
  translationLabel: string;
  memoryHeader: string;
  memorySub: string;
  great: string;
  memorySuccess: string;
  playAgain: string;
  exploreLevelSub: string;
  noLessons: string;
  categories: Record<string, string>;
}

export const lessonTranslations: Record<Language, LessonTranslations> = {
  es: {
    backToLevel: "Volver a Nivel",
    vocabHeader: "Vocabulario y Juegos interactivos",
    listen: "Escuchar",
    quizHeader: "Ponte a prueba",
    checkAnswers: "Comprobar respuestas",
    yourScore: "Tu puntuación:",
    excellentWork: "¡Excelente trabajo!",
    keepPracticing: "Buen intento, sigue practicando.",
    repeatExercise: "Repetir ejercicio",
    flashcardsHeader: "Tarjetas de Vocabulario",
    flashcardsSub: "Toca la tarjeta para ver la traducción.",
    flip: "Voltear",
    vocabQuizHeader: "Test Rápido",
    vocabQuizSub: "¿Qué palabra corresponde a esta imagen?",
    next: "Siguiente",
    finish: "Terminar",
    completed: "¡Completado!",
    tryAgain: "Intentar de nuevo",
    listeningQuizHeader: "Quiz Auditivo",
    listeningQuizSub: "Escucha el audio y selecciona la palabra correcta",
    clickToListen: "Haz clic en el círculo para escuchar",
    translationLabel: "Traducción",
    memoryHeader: "Juego de Memoria",
    memorySub: "Encuentra las parejas (palabra y dibujo).",
    great: "¡Genial!",
    memorySuccess: "Has encontrado todas las parejas.",
    playAgain: "Jugar de nuevo",
    exploreLevelSub: "Explora los contenidos agrupados por categorías para el Nivel {level}. Ideal para la pantalla de tu móvil.",
    noLessons: "Aún no hay lecciones disponibles para este nivel.",
    categories: {
      "Alfabetización": "Alfabetización",
      "Vocabulario": "Vocabulario",
      "Gramática": "Gramática",
      "Comprensión": "Comprensión"
    }
  },
  en: {
    backToLevel: "Back to Level",
    vocabHeader: "Vocabulary and Interactive Games",
    listen: "Listen",
    quizHeader: "Test yourself",
    checkAnswers: "Check answers",
    yourScore: "Your score:",
    excellentWork: "Excellent work!",
    keepPracticing: "Good attempt, keep practicing.",
    repeatExercise: "Repeat exercise",
    flashcardsHeader: "Vocabulary Flashcards",
    flashcardsSub: "Tap the card to see the translation.",
    flip: "Flip",
    vocabQuizHeader: "Quick Quiz",
    vocabQuizSub: "Which word matches this image?",
    next: "Next",
    finish: "Finish",
    completed: "Completed!",
    tryAgain: "Try again",
    listeningQuizHeader: "Listening Quiz",
    listeningQuizSub: "Listen to the audio and select the correct word",
    clickToListen: "Click on the circle to listen",
    translationLabel: "Translation",
    memoryHeader: "Memory Game",
    memorySub: "Find the pairs (word and picture).",
    great: "Great!",
    memorySuccess: "You have found all the pairs.",
    playAgain: "Play again",
    exploreLevelSub: "Explore the contents grouped by categories for Level {level}. Ideal for your mobile screen.",
    noLessons: "There are no lessons available for this level yet.",
    categories: {
      "Alfabetización": "Literacy",
      "Vocabulario": "Vocabulary",
      "Gramática": "Grammar",
      "Comprensión": "Comprehension"
    }
  },
  ar: {
    backToLevel: "العودة إلى المستوى",
    vocabHeader: "المفردات والألعاب التفاعلية",
    listen: "استمع",
    quizHeader: "اختبر نفسك",
    checkAnswers: "التحقق من الإجابات",
    yourScore: "درجتك:",
    excellentWork: "عمل ممتاز!",
    keepPracticing: "محاولة جيدة، استمر في التدريب.",
    repeatExercise: "إعادة التمرين",
    flashcardsHeader: "بطاقات المفردات",
    flashcardsSub: "اضغط على البطاقة لرؤية الترجمة.",
    flip: "اقلب",
    vocabQuizHeader: "اختبار سريع",
    vocabQuizSub: "أي كلمة تطابق هذه الصورة؟",
    next: "التالي",
    finish: "إنهاء",
    completed: "اكتمل!",
    tryAgain: "حاول مجدداً",
    listeningQuizHeader: "اختبار الاستماع",
    listeningQuizSub: "استمع إلى الصوت واختر الكلمة الصحيحة",
    clickToListen: "انقر على الدائرة للاستماع",
    translationLabel: "الترجمة",
    memoryHeader: "لعبة الذاكرة",
    memorySub: "جد الأزواج المتطابقة (الكلمة والرسمة).",
    great: "رائع!",
    memorySuccess: "لقد وجدت كل الأزواج.",
    playAgain: "اللعب مجدداً",
    exploreLevelSub: "استكشف المحتوى المصنف حسب الفئات للمستوى {level}. مناسب جداً لشاشة هاتفك المحمول.",
    noLessons: "لا توجد دروس متاحة لهذا المستوى بعد.",
    categories: {
      "Alfabetización": "محو الأمية",
      "Vocabulario": "المفردات",
      "Gramática": "القواعد",
      "Comprensión": "الفهم"
    }
  },
  uk: {
    backToLevel: "Назад до рівня",
    vocabHeader: "Словниковий запас та інтерактивні ігри",
    listen: "Слухати",
    quizHeader: "Перевір себе",
    checkAnswers: "Перевірити відповіді",
    yourScore: "Ваш результат:",
    excellentWork: "Чудова робота!",
    keepPracticing: "Хороша спроба, продовжуй практикуватися.",
    repeatExercise: "Повторити вправу",
    flashcardsHeader: "Флеш-картки словникового запасу",
    flashcardsSub: "Торкніться картки, щоб побачити переклад.",
    flip: "Перевернути",
    vocabQuizHeader: "Швидкий тест",
    vocabQuizSub: "Яке слово відповідає цьому зображенню?",
    next: "Далі",
    finish: "Завершити",
    completed: "Завершено!",
    tryAgain: "Спробувати знову",
    listeningQuizHeader: "Аудіо-тест",
    listeningQuizSub: "Прослухайте адіо та виберіть правильне слово",
    clickToListen: "Клацніть на коло, щоб прослухати",
    translationLabel: "Переклад",
    memoryHeader: "Гра на пам'ять",
    memorySub: "Знайдіть пари (слово та малюнок).",
    great: "Чудово!",
    memorySuccess: "Ви знайшли всі пари.",
    playAgain: "Грати знову",
    exploreLevelSub: "Переглядайте вміст, згрупований за категоріями для Рівня {level}. Ідеально для екрану вашого мобільного.",
    noLessons: "Для цього рівня поки немає доступних уроків.",
    categories: {
      "Alfabetización": "Грамотність",
      "Vocabulario": "Словниковий запас",
      "Gramática": "Граматика",
      "Comprensión": "Розуміння"
    }
  },
  fr: {
    backToLevel: "Retour au niveau",
    vocabHeader: "Vocabulaire et Jeux interactifs",
    listen: "Écouter",
    quizHeader: "Mettez-vous à l'épreuve",
    checkAnswers: "Vérifier les réponses",
    yourScore: "Votre score :",
    excellentWork: "Excellent travail !",
    keepPracticing: "Bon essai, continuez à vous entraîner.",
    repeatExercise: "Répéter l'exercice",
    flashcardsHeader: "Cartes de vocabulaire",
    flashcardsSub: "Appuyez sur la carte pour voir la traduction.",
    flip: "Retourner",
    vocabQuizHeader: "Quiz rapide",
    vocabQuizSub: "Quel mot correspond à cette image ?",
    next: "Suivant",
    finish: "Terminer",
    completed: "Complété !",
    tryAgain: "Essayer à nouveau",
    listeningQuizHeader: "Quiz d'écoute",
    listeningQuizSub: "Écoutez l'audio et sélectionnez le bon mot",
    clickToListen: "Cliquez sur le cercle pour écouter",
    translationLabel: "Traduction",
    memoryHeader: "Jeu de mémoire",
    memorySub: "Trouvez les paires (mot et image).",
    great: "Génial !",
    memorySuccess: "Vous avez trouvé toutes les paires.",
    playAgain: "Jouer à nouveau",
    exploreLevelSub: "Explorez le contenu regroupé par catégories pour le Niveau {level}. Idéal pour l'écran de votre mobile.",
    noLessons: "Il n'y a pas encore de leçons disponibles pour ce niveau.",
    categories: {
      "Alfabetización": "Alphabétisation",
      "Vocabulario": "Vocabulaire",
      "Gramática": "Grammaire",
      "Comprensión": "Compréhension"
    }
  }
};

