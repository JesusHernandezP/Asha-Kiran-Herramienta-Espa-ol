export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type Category = 'Alfabetización' | 'Vocabulario' | 'Gramática' | 'Comprensión' | 'Multimedia';

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface VocabularyItem {
  word: string;
  translations?: Record<string, string>;
  translation?: string; // fallback
  emoji: string;
  imageUrl?: string;
  illustrationUrl?: string;
  color?: string;
}

export interface Lesson {
  id: string;
  topic: string; // Thematic identifier (e.g., 'Saludos')
  title: string;
  level: Level;
  category: Category;
  description: string;
  content: string; // Markdown content, heavily visual
  imageUrl?: string;
  illustrationUrl?: string;
  emoji?: string;
  color?: string;
  vocabulary?: VocabularyItem[];
  exercises?: Exercise[];
}

export const lessons: Lesson[] = [
  {
    id: "a1-alfa-abecedario",
    topic: "El Abecedario",
    title: "Alfabetización: El Abecedario",
    level: "A1",
    category: "Alfabetización",
    description: "Aprende las 27 letras del abecedario español con palabras básicas y vocabulario esencial.",
    imageUrl: "/images/lessons/abecedario.png",
    illustrationUrl: "/images/lessons/abecedario.png",
    color: "#E2F3E7",
    vocabulary: [
      { word: "Avión", translations: { en: "Airplane", ar: "طائرة", uk: "Літак", fr: "Avion" }, imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&auto=format&fit=crop&q=60", emoji: "✈️", color: "#E2F3E7" },
      { word: "Barco", translations: { en: "Boat", ar: "قارب", uk: "Човен", fr: "Bateau" }, imageUrl: "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🚢", color: "#E2F3E7" },
      { word: "Casa", translations: { en: "House", ar: "منزل", uk: "Будинок", fr: "Maison" }, imageUrl: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=200&auto=format&fit=crop&q=60", emoji: "🏠", color: "#E3EEF9" },
      { word: "Dedo", translations: { en: "Finger", ar: "إصبع", uk: "Палець", fr: "Doigt" }, imageUrl: "https://images.unsplash.com/photo-1596180316165-0974ef954468?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "☝️", color: "#FCE8E8" },
      { word: "Elefante", translations: { en: "Elephant", ar: "فيل", uk: "Слон", fr: "Éléphant" }, imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=200&auto=format&fit=crop&q=60", emoji: "🐘", color: "#E2F3E7" },
      { word: "Fuego", translations: { en: "Fire", ar: "نار", uk: "Вогонь", fr: "Feu" }, imageUrl: "https://plus.unsplash.com/premium_photo-1679954565327-e7e294e68b1c?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🔥", color: "#FFF4E5" },
      { word: "Gato", translations: { en: "Cat", ar: "قطة", uk: "Кіт", fr: "Chat" }, imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&auto=format&fit=crop&q=60", emoji: "🐱", color: "#F3E8FF" },
      { word: "Helado", translations: { en: "Ice cream", ar: "مثلجات", uk: "Морозиво", fr: "Glace" }, imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=200&auto=format&fit=crop&q=60", emoji: "🍦", color: "#FEFCBF" },
      { word: "Isla", translations: { en: "Island", ar: "جزيرة", uk: "Острів", fr: "Île" }, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop&q=60", emoji: "🏝️", color: "#E2F3E7" },
      { word: "Jirafa", translations: { en: "Giraffe", ar: "زرافة", uk: "Жирафа", fr: "Girafe" }, imageUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=200&auto=format&fit=crop&q=60", emoji: "🦒", color: "#FEFCBF" },
      { word: "Koala", translations: { en: "Koala", ar: "كوالا", uk: "Коала", fr: "Koala" }, imageUrl: "https://images.unsplash.com/photo-1579972383667-4894c883d674?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🐨", color: "#E3EEF9" },
      { word: "Luna", translations: { en: "Moon", ar: "قمر", uk: "Місяць", fr: "Lune" }, imageUrl: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=200&auto=format&fit=crop&q=60", emoji: "🌙", color: "#F3E8FF" },
      { word: "Manzana", translations: { en: "Apple", ar: "تفاحة", uk: "Яблуко", fr: "Pomme" }, imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&auto=format&fit=crop&q=60", emoji: "🍎", color: "#FCE8E8" },
      { word: "Nube", translations: { en: "Cloud", ar: "سحابة", uk: "Хмара", fr: "Nuage" }, imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=200&auto=format&fit=crop&q=60", emoji: "☁️", color: "#E3EEF9" },
      { word: "Ñandú", translations: { en: "Rhea / Ostrich", ar: "نعامة", uk: "Нанду", fr: "Nandou" }, imageUrl: "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=200&auto=format&fit=crop&q=60", emoji: "🐦", color: "#F3E8FF" },
      { word: "Oso", translations: { en: "Bear", ar: "دب", uk: "Ведмідь", fr: "Ours" }, imageUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=200&auto=format&fit=crop&q=60", emoji: "🐻", color: "#E2F3E7" },
      { word: "Perro", translations: { en: "Dog", ar: "كلب", uk: "Собака", fr: "Chien" }, imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&auto=format&fit=crop&q=60", emoji: "🐶", color: "#FEFCBF" },
      { word: "Queso", translations: { en: "Cheese", ar: "جبن", uk: "Сир", fr: "Fromage" }, imageUrl: "https://plus.unsplash.com/premium_photo-1691939610797-aba18030c15f?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🧀", color: "#FEFCBF" },
      { word: "Ratón", translations: { en: "Mouse", ar: "فأر", uk: "Миша", fr: "Souris" }, imageUrl: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=200&auto=format&fit=crop&q=60", emoji: "🐭", color: "#E3EEF9" },
      { word: "Sol", translations: { en: "Sun", ar: "شمس", uk: "Сонце", fr: "Soleil" }, imageUrl: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "☀️", color: "#FEFCBF" },
      { word: "Tren", translations: { en: "Train", ar: "قطار", uk: "Потяг", fr: "Train" }, imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=200&auto=format&fit=crop&q=60", emoji: "🚆", color: "#FCE8E8" },
      { word: "Uvas", translations: { en: "Grapes", ar: "عنب", uk: "Виноград", fr: "Raisins" }, imageUrl: "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=200&auto=format&fit=crop&q=60", emoji: "🍇", color: "#F3E8FF" },
      { word: "Vaca", translations: { en: "Cow", ar: "بقرة", uk: "Корова", fr: "Vache" }, imageUrl: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=200&auto=format&fit=crop&q=60", emoji: "🐮", color: "#E2F3E7" },
      { word: "Kiwi", translations: { en: "Kiwi", ar: "كيوي", uk: "Ківі", fr: "Kiwi" }, imageUrl: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=200&auto=format&fit=crop&q=60", emoji: "🥝", color: "#E2F3E7" },
      { word: "Xilófono", translations: { en: "Xylophone", ar: "إксيليفون", uk: "Ксилофон", fr: "Xylophone" }, imageUrl: "https://images.unsplash.com/photo-1711048421235-3fcb9dcf82f7?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🎹", color: "#F3E8FF" },
      { word: "Yoyó", translations: { en: "Yoyo", ar: "يويو", uk: "Йо-йо", fr: "Yoyo" }, imageUrl: "https://images.unsplash.com/photo-1646954843635-126c0fe8f3d7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🪀", color: "#FCE8E8" },
      { word: "Zapato", translations: { en: "Shoe", ar: "حذاء", uk: "Взуття", fr: "Chaussure" }, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&auto=format&fit=crop&q=60", emoji: "👞", color: "#FFF4E5" }
    ],
    content: `
## Vamos a aprender el abecedario de la A a la Z

### Ejercicio de pronunciación:
Usa el botón de abajo si estuviera disponible el audio (simulación).
<button class="audio-btn">🔊 Escuchar el abecedario</button>
    `,
    exercises: [
      {
        id: "ex1",
        question: `¿Con qué letra empieza la palabra 'Avión'? <trans en="(What letter does the word 'Airplane' begin with?)" ar="(ما هو الحرف الذي تبدأ به كلمة "طائرة"؟)" uk="(З якої літери починається слово «Літак»?)" fr="(Par quelle lettre commence le mot « Avion » ?)"/>`,
        options: ["E <trans en=\"(E)\" ar=\"(ه)\" uk=\"(E)\" fr=\"(E)\"/>", "O <trans en=\"(Or)\" ar=\"(أو)\" uk=\"(Або)\" fr=\"(Ou)\"/>", "A <trans en=\"(A)\" ar=\"(أ)\" uk=\"(А)\" fr=\"(Un)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: `¿Qué imagen empieza con la letra 'B'? <trans en="(Which image starts with the letter 'B'?)" ar="(ما هي الصورة التي تبدأ بحرف "ب"؟)" uk="(Яке зображення починається з літери «В»?)" fr="(Quelle image commence par la lettre 'B' ?)"/>`,
        options: ["Casa <trans en=\"(House)\" ar=\"(البيت)\" uk=\"(Будинок)\" fr=\"(Maison)\"/>", "Barco <trans en=\"(Ship)\" ar=\"(السفينة)\" uk=\"(Корабель)\" fr=\"(Navire)\"/>", "Dedo <trans en=\"(Finger)\" ar=\"(الاصبع)\" uk=\"(Палець)\" fr=\"(Doigt)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: `¿Con qué letra empieza la palabra 'Sol'? <trans en="(What letter does the word 'Sun' begin with?)" ar="(ما هو الحرف الذي تبدأ به كلمة شمس؟)" uk="(З якої літери починається слово «Сонечко»?)" fr="(Par quelle lettre commence le mot « Soleil » ?)"/>`,
        options: ["S <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "T <trans en=\"(T)\" ar=\"(ت)\" uk=\"(Т)\" fr=\"(T)\"/>", "R <trans en=\"(R)\" ar=\"(ر)\" uk=\"(Р)\" fr=\"(R)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `¿Con qué letra empieza 'Gato'? <trans en="(What letter does 'Gato' begin with?)" ar="(ما هو الحرف الذي يبدأ به "جاتو"؟)" uk="(З якої літери починається "Gato"?)" fr="(Par quelle lettre commence « Gato » ?)"/>`,
        options: ["C <trans en=\"(C)\" ar=\"(ج)\" uk=\"(C)\" fr=\"(C)\"/>", "G <trans en=\"(G)\" ar=\"(ز)\" uk=\"(G)\" fr=\"(G)\"/>", "J <trans en=\"(J)\" ar=\"(ج)\" uk=\"(Дж)\" fr=\"(J)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex5",
        question: `¿Qué letra va después de la 'M'? <trans en="(What letter comes after 'M'?)" ar="(ما هو الحرف الذي يأتي بعد "م"؟)" uk="(Яка буква стоїть після «М»?)" fr="(Quelle lettre vient après 'M' ?)"/>`,
        options: ["N <trans en=\"(N)\" ar=\"(ن)\" uk=\"(Н)\" fr=\"(N)\"/>", "L <trans en=\"(L)\" ar=\"(ل)\" uk=\"(Л)\" fr=\"(L)\"/>", "O <trans en=\"(Or)\" ar=\"(أو)\" uk=\"(Або)\" fr=\"(Ou)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `¿Cuál es una vocal? <trans en="(What is a vowel?)" ar="(ما هو حرف العلة؟)" uk="(Що таке голосний звук?)" fr="(Qu'est-ce qu'une voyelle ?)"/>`,
        options: ["P <trans en=\"(P)\" ar=\"(ص)\" uk=\"(П)\" fr=\"(P)\"/>", "E <trans en=\"(E)\" ar=\"(ه)\" uk=\"(E)\" fr=\"(E)\"/>", "S <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex7",
        question: `¿Con qué letra termina 'Reloj'? <trans en="(What letter does 'Clock' end with?)" ar="(ما هو الحرف الذي تنتهي به "الساعة"؟)" uk="(На яку букву закінчується «Годинник»?)" fr="(Par quelle lettre se termine « Clock » ?)"/>`,
        options: ["J <trans en=\"(J)\" ar=\"(ج)\" uk=\"(Дж)\" fr=\"(J)\"/>", "G <trans en=\"(G)\" ar=\"(ز)\" uk=\"(G)\" fr=\"(G)\"/>", "X <trans en=\"(X)\" ar=\"(X)\" uk=\"(X)\" fr=\"(X)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `¿Cuál no es una vocal? <trans en="(Which is not a vowel?)" ar="(ما هو ليس حرف علة؟)" uk="(Що не є голосним?)" fr="(Laquelle n'est pas une voyelle ?)"/>`,
        options: ["A <trans en=\"(A)\" ar=\"(أ)\" uk=\"(А)\" fr=\"(Un)\"/>", "I <trans en=\"(I)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(Je)\"/>", "R <trans en=\"(R)\" ar=\"(ر)\" uk=\"(Р)\" fr=\"(R)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex9",
        question: `¿Qué letra va antes de la 'C'? <trans en="(What letter comes before 'C'?)" ar="(ما هو الحرف الذي يأتي قبل "C"؟)" uk="(Яка буква стоїть перед «С»?)" fr="(Quelle lettre précède le « C » ?)"/>`,
        options: ["B <trans en=\"(B)\" ar=\"(ب)\" uk=\"(Б)\" fr=\"(B)\"/>", "D <trans en=\"(D)\" ar=\"(د)\" uk=\"(D)\" fr=\"(D)\"/>", "A <trans en=\"(A)\" ar=\"(أ)\" uk=\"(А)\" fr=\"(Un)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `¿Con qué letra empieza 'Zapato'? <trans en="(What letter does 'Zapato' begin with?)" ar="(ما هو الحرف الذي يبدأ به "زاباتو"؟)" uk="(З якої літери починається "Zapato"?)" fr="(Par quelle lettre commence « Zapato » ?)"/>`,
        options: ["S <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "Z <trans en=\"(Z)\" ar=\"(ز)\" uk=\"(З)\" fr=\"(Z)\"/>", "C <trans en=\"(C)\" ar=\"(ج)\" uk=\"(C)\" fr=\"(C)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: `¿Qué letra suena fuerte en 'Perro'? <trans en="(What lyrics sound strong in 'Perro'?)" ar="(ما هي الكلمات التي تبدو قوية في "Perro"؟)" uk="(Який текст звучить сильно в "Perro"?)" fr="(Quelles paroles semblent fortes dans « Perro » ?)"/>`,
        options: ["P <trans en=\"(P)\" ar=\"(ص)\" uk=\"(П)\" fr=\"(P)\"/>", "RR <trans en=\"(RR)\" ar=\"(ر.ر)\" uk=\"(RR)\" fr=\"(RR)\"/>", "O <trans en=\"(Or)\" ar=\"(أو)\" uk=\"(Або)\" fr=\"(Ou)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: `¿Qué letra falta en '_asa' (House)? <trans en="(What letter is missing in '_asa' (House)?)" ar="(ما هو الحرف المفقود في '_asa' (البيت)؟)" uk="(Якої літери не вистачає в '_asa' (Будинок)?)" fr="(Quelle lettre manque dans '_asa' (Maison) ?)"/>`,
        options: ["K <trans en=\"(K)\" ar=\"(ك)\" uk=\"(К)\" fr=\"(K)\"/>", "S <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "C <trans en=\"(C)\" ar=\"(ج)\" uk=\"(C)\" fr=\"(C)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex13",
        question: `¿Cómo se escribe 'Water' en español? <trans en="(How do you write 'Water' in Spanish?)" ar="(كيف تكتب "الماء" بالإسبانية؟)" uk="(Як писати «Вода» іспанською?)" fr="(Comment écrit-on « Eau » en espagnol ?)"/>`,
        options: ["Agua <trans en=\"(Water)\" ar=\"(ماء)\" uk=\"(Вода)\" fr=\"(Eau)\"/>", "Ajua <trans en=\"(Ajua)\" ar=\"(أجوا)\" uk=\"(Аджуа)\" fr=\"(Ajua)\"/>", "Awa <trans en=\"(Awa)\" ar=\"(عوا)\" uk=\"(Ава)\" fr=\"(Awa)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿Con qué letra empieza 'Hola'? <trans en="(What letter does 'Hello' begin with?)" ar="(ما هو الحرف الذي تبدأ به كلمة "Hello"؟)" uk="(З якої літери починається «Привіт»?)" fr="(Par quelle lettre commence « Bonjour » ?)"/>`,
        options: ["O <trans en=\"(Or)\" ar=\"(أو)\" uk=\"(Або)\" fr=\"(Ou)\"/>", "H <trans en=\"(H)\" ar=\"(ح)\" uk=\"(H)\" fr=\"(H)\"/>", "J <trans en=\"(J)\" ar=\"(ج)\" uk=\"(Дж)\" fr=\"(J)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex15",
        question: `¿Qué letra sigue a la 'T'? <trans en="(What letter follows 'T'?)" ar="(ما هو الحرف الذي يلي حرف "T"؟)" uk="(Яка буква стоїть після «Т»?)" fr="(Quelle lettre suit 'T' ?)"/>`,
        options: ["S <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "U <trans en=\"(U)\" ar=\"(ش)\" uk=\"(U)\" fr=\"(U)\"/>", "V <trans en=\"(V)\" ar=\"(V)\" uk=\"(В)\" fr=\"(V)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex16",
        question: `¿Cuál es la primera letra del abecedario? <trans en="(What is the first letter of the alphabet?)" ar="(ما هو الحرف الأول من الأبجدية؟)" uk="(Яка перша буква алфавіту?)" fr="(Quelle est la première lettre de l'alphabet ?)"/>`,
        options: ["A <trans en=\"(A)\" ar=\"(أ)\" uk=\"(А)\" fr=\"(Un)\"/>", "E <trans en=\"(E)\" ar=\"(ه)\" uk=\"(E)\" fr=\"(E)\"/>", "O <trans en=\"(Or)\" ar=\"(أو)\" uk=\"(Або)\" fr=\"(Ou)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `¿Cuál es la última letra del abecedario? <trans en="(What is the last letter of the alphabet?)" ar="(ما هو الحرف الأخير من الأبجدية؟)" uk="(Яка остання буква алфавіту?)" fr="(Quelle est la dernière lettre de l'alphabet ?)"/>`,
        options: ["Y <trans en=\"(And)\" ar=\"(و)\" uk=\"(І)\" fr=\"(Et)\"/>", "X <trans en=\"(X)\" ar=\"(X)\" uk=\"(X)\" fr=\"(X)\"/>", "Z <trans en=\"(Z)\" ar=\"(ز)\" uk=\"(З)\" fr=\"(Z)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex18",
        question: `¿Con qué letra empieza 'Queso'? <trans en="(What letter does 'Queso' begin with?)" ar="(ما هو الحرف الذي يبدأ به "Queso"؟)" uk="(З якої літери починається «Queso»?)" fr="(Par quelle lettre commence « Queso » ?)"/>`,
        options: ["C <trans en=\"(C)\" ar=\"(ج)\" uk=\"(C)\" fr=\"(C)\"/>", "K <trans en=\"(K)\" ar=\"(ك)\" uk=\"(К)\" fr=\"(K)\"/>", "Q <trans en=\"(Q)\" ar=\"(س)\" uk=\"(Q)\" fr=\"(Q)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex19",
        question: `¿Qué letra es la 'H' en 'Hola'? <trans en="(What letter is the 'H' in 'Hello'?)" ar="(ما هو الحرف "H" في "Hello"؟)" uk="(Яка літера "H" у "Hello"?)" fr="(Quelle lettre est le « H » dans « Bonjour » ?)"/>`,
        options: ["Fuerte <trans en=\"(Strong)\" ar=\"(قوي)\" uk=\"(Сильний)\" fr=\"(Fort)\"/>", "Muda <trans en=\"(Moult)\" ar=\"(مولت)\" uk=\"(Линька)\" fr=\"(Mue)\"/>", "Suave <trans en=\"(Soft)\" ar=\"(ناعمة)\" uk=\"(М'який)\" fr=\"(Doux)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex20",
        question: `¿Cómo se llama la letra 'Ñ'? <trans en="(What is the name of the letter 'Ñ'?)" ar="(ما إسم حرف " ن " ؟)" uk="(Як називається буква «Ñ»?)" fr="(Quel est le nom de la lettre 'Ñ' ?)"/>`,
        options: ["Ene <trans en=\"(Jan)\" ar=\"(يناير)\" uk=\"(Січ)\" fr=\"(Janvier)\"/>", "Eñe <trans en=\"(Eñe)\" ar=\"(إيني)\" uk=\"(Eñe)\" fr=\"(Oui)\"/>", "Eme <trans en=\"(Eme)\" ar=\"(ايمي)\" uk=\"(Еме)\" fr=\"(Eme)\"/>"],
        correctAnswer: 1
      }
    
    ]
  },
  {
    id: "a1-vocab-cuerpo",
    topic: "Cuerpo Humano",
    title: "Partes del Cuerpo Humano",
    level: "A1",
    category: "Vocabulario",
    description: "Imágenes y vocabulario básico sobre las partes principales de nuestro cuerpo.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/cuerpo.png",
    color: "#EBF8FF",
    vocabulary: [
        {
          word: 'La cabeza',
          translations: {
            en: 'Head',
            ar: 'الرأس',
            uk: 'Голова',
            fr: 'Tête'
          },
          emoji: '👧',
          color: '#EBF8FF'
        },
        {
          word: 'La mano',
          translations: {
            en: 'Hand',
            ar: 'اليد',
            uk: 'Рука',
            fr: 'Main'
          },
          emoji: '✋',
          color: '#EBF8FF'
        },
        {
          word: 'El pie',
          translations: {
            en: 'Foot',
            ar: 'القدم',
            uk: 'Нога',
            fr: 'Pied'
          },
          emoji: '🦶',
          color: '#EBF8FF'
        },
        {
          word: 'Los ojos',
          translations: {
            en: 'Eyes',
            ar: 'العينان',
            uk: 'Очі',
            fr: 'Yeux'
          },
          emoji: '👁️',
          color: '#EBF8FF'
        },
        {
          word: 'Las piernas',
          translations: {
            en: 'Legs',
            ar: 'الساقين',
            uk: 'Ноги',
            fr: 'Jambes'
          },
          emoji: '🦵',
          color: '#EBF8FF'
        },
        {
          word: 'El brazo',
          translations: {
            en: 'Arm',
            ar: 'الذراع',
            uk: 'Рука',
            fr: 'Bras'
          },
          emoji: '💪',
          color: '#EBF8FF'
        },
        {
          word: 'La boca',
          translations: {
            en: 'Mouth',
            ar: 'الفم',
            uk: 'Рот',
            fr: 'Bouche'
          },
          emoji: '👄',
          color: '#EBF8FF'
        },
        {
          word: 'La nariz',
          translations: {
            en: 'Nose',
            ar: 'الأنف',
            uk: 'Ніс',
            fr: 'Nez'
          },
          emoji: '👃',
          color: '#EBF8FF'
        },
        {
          word: 'Las orejas',
          translations: {
            en: 'Ears',
            ar: 'الأذنان',
            uk: 'Вуха',
            fr: 'Oreilles'
          },
          emoji: '👂',
          color: '#EBF8FF'
        },
        {
          word: 'El dedo',
          translations: {
            en: 'Finger',
            ar: 'إصبع',
            uk: 'Палець',
            fr: 'Doigt'
          },
          emoji: '☝️',
          color: '#EBF8FF'
        },
        {
          word: 'El cuello',
          translations: {
            en: 'Neck',
            ar: 'الرقبة',
            uk: 'Шия',
            fr: 'Cou'
          },
          emoji: '🦒',
          color: '#EBF8FF'
        },
        {
          word: 'El hombro',
          translations: {
            en: 'Shoulder',
            ar: 'الكتف',
            uk: 'Плече',
            fr: 'Épaule'
          },
          emoji: '💪',
          color: '#EBF8FF'
        },
        {
          word: 'El codo',
          translations: {
            en: 'Elbow',
            ar: 'المرفق',
            uk: 'Лікоть',
            fr: 'Coude'
          },
          emoji: '💪',
          color: '#EBF8FF'
        },
        {
          word: 'La muñeca',
          translations: {
            en: 'Wrist',
            ar: 'المعصم',
            uk: 'Зап\'ястя',
            fr: 'Poignet'
          },
          emoji: '⌚',
          color: '#EBF8FF'
        },
        {
          word: 'El pecho',
          translations: {
            en: 'Chest',
            ar: 'الصدر',
            uk: 'Груди',
            fr: 'Poitrine'
          },
          emoji: '🧍',
          color: '#EBF8FF'
        },
        {
          word: 'La espalda',
          translations: {
            en: 'Back',
            ar: 'الظهر',
            uk: 'Спина',
            fr: 'Dos'
          },
          emoji: '🧍',
          color: '#EBF8FF'
        },
        {
          word: 'El estómago',
          translations: {
            en: 'Stomach',
            ar: 'المعدة',
            uk: 'Живіт',
            fr: 'Estomac'
          },
          emoji: '🤰',
          color: '#EBF8FF'
        },
        {
          word: 'La cintura',
          translations: {
            en: 'Waist',
            ar: 'الخصر',
            uk: 'Талія',
            fr: 'Taille'
          },
          emoji: '🧍',
          color: '#EBF8FF'
        },
        {
          word: 'La rodilla',
          translations: {
            en: 'Knee',
            ar: 'الركبة',
            uk: 'Коліно',
            fr: 'Genou'
          },
          emoji: '🦵',
          color: '#EBF8FF'
        },
        {
          word: 'El tobillo',
          translations: {
            en: 'Ankle',
            ar: 'الكاحل',
            uk: 'Кісточка',
            fr: 'Cheville'
          },
          emoji: '🦶',
          color: '#EBF8FF'
        },
        {
          word: 'El pelo',
          translations: {
            en: 'Hair',
            ar: 'الشعر',
            uk: 'Волосся',
            fr: 'Cheveux'
          },
          emoji: '💇',
          color: '#EBF8FF'
        },
        {
          word: 'La cara',
          translations: {
            en: 'Face',
            ar: 'الوجه',
            uk: 'Обличчя',
            fr: 'Visage'
          },
          emoji: '😊',
          color: '#EBF8FF'
        },
        {
          word: 'La frente',
          translations: {
            en: 'Forehead',
            ar: 'الجبهة',
            uk: 'Лоб',
            fr: 'Front'
          },
          emoji: '😊',
          color: '#EBF8FF'
        },
        {
          word: 'Las mejillas',
          translations: {
            en: 'Cheeks',
            ar: 'الخدود',
            uk: 'Щоки',
            fr: 'Joues'
          },
          emoji: '😊',
          color: '#EBF8FF'
        },
        {
          word: 'La barbilla',
          translations: {
            en: 'Chin',
            ar: 'الذقن',
            uk: 'Підборіддя',
            fr: 'Menton'
          },
          emoji: '😊',
          color: '#EBF8FF'
        },
        {
          word: 'Los dientes',
          translations: {
            en: 'Teeth',
            ar: 'الأسنان',
            uk: 'Зуби',
            fr: 'Dents'
          },
          emoji: '🦷',
          color: '#EBF8FF'
        },
        {
          word: 'La lengua',
          translations: {
            en: 'Tongue',
            ar: 'اللسان',
            uk: 'Язик',
            fr: 'Langue'
          },
          emoji: '👅',
          color: '#EBF8FF'
        },
        {
          word: 'Los labios',
          translations: {
            en: 'Lips',
            ar: 'الشفاه',
            uk: 'Губи',
            fr: 'Lèvres'
          },
          emoji: '👄',
          color: '#EBF8FF'
        },
        {
          word: 'El corazón',
          translations: {
            en: 'Heart',
            ar: 'القلب',
            uk: 'Серце',
            fr: 'Cœur'
          },
          emoji: '❤️',
          color: '#EBF8FF'
        },
        {
          word: 'La piel',
          translations: {
            en: 'Skin',
            ar: 'الجلد',
            uk: 'Шкіра',
            fr: 'Peau'
          },
          emoji: '🖐️',
          color: '#EBF8FF'
        }
      ],
    content: `
## El Cuerpo Humano

Aprender las partes de nuestro cuerpo nos ayuda a comunicarnos mejor.
    `,
    exercises: [
      {
        id: "ex1",
        question: `¿Cómo se dice <trans en="'Hand'" ar="'يد'" uk="'Рука'" fr="'Main'"/> en Español?`,
        options: ["La pierna <trans en=\"(The leg)\" ar=\"(الساق)\" uk=\"(Нога)\" fr=\"(La jambe)\"/>", "La mano <trans en=\"(The hand)\" ar=\"(اليد)\" uk=\"(Руку)\" fr=\"(La main)\"/>", "El pie <trans en=\"(The foot)\" ar=\"(القدم)\" uk=\"(Стопа)\" fr=\"(Le pied)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `Usas estos para ver: <trans en="(You use these to see:)" ar="(يمكنك استخدام هذه لرؤية:)" uk="(Ви використовуєте їх, щоб побачити:)" fr="(Vous les utilisez pour voir :)"/>`,
        options: ["Los ojos <trans en=\"(The eyes)\" ar=\"(العيون)\" uk=\"(Очі)\" fr=\"(Les yeux)\"/>", "El brazo <trans en=\"(The arm)\" ar=\"(الذراع)\" uk=\"(Рука)\" fr=\"(Le bras)\"/>", "La cabeza <trans en=\"(The head)\" ar=\"(الرأس)\" uk=\"(Голова)\" fr=\"(La tête)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `¿Qué usamos para ver? <trans en="(What do we use to see?)" ar="(ماذا نستخدم لنرى؟)" uk="(Що ми використовуємо, щоб побачити?)" fr="(Qu'est-ce qu'on utilise pour voir ?)"/>`,
        options: ["Las orejas <trans en=\"(The ears)\" ar=\"(الأذنين)\" uk=\"(Вуха)\" fr=\"(Les oreilles)\"/>", "Los ojos <trans en=\"(The eyes)\" ar=\"(العيون)\" uk=\"(Очі)\" fr=\"(Les yeux)\"/>", "La nariz <trans en=\"(The nose)\" ar=\"(الأنف)\" uk=\"(Ніс)\" fr=\"(Le nez)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex4",
        question: `¿Qué usamos para caminar? <trans en="(What do we use to walk?)" ar="(ماذا نستخدم للمشي؟)" uk="(Чим ми гуляємо?)" fr="(Qu'utilise-t-on pour marcher ?)"/>`,
        options: ["Las piernas <trans en=\"(The legs)\" ar=\"(الساقين)\" uk=\"(Ноги)\" fr=\"(Les jambes)\"/>", "Los brazos <trans en=\"(The arms)\" ar=\"(الأسلحة)\" uk=\"(Руки)\" fr=\"(Les bras)\"/>", "Las manos <trans en=\"(The hands)\" ar=\"(الأيدي)\" uk=\"(Руки)\" fr=\"(Les mains)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `¿Dónde está el pelo? <trans en="(Where is the hair?)" ar="(أين الشعر؟)" uk="(Де волосся?)" fr="(Où sont les cheveux ?)"/>`,
        options: ["En el pie <trans en=\"(On the foot)\" ar=\"(على القدم)\" uk=\"(На нозі)\" fr=\"(Au pied)\"/>", "En la cabeza <trans en=\"(In the head)\" ar=\"(في الرأس)\" uk=\"(В голові)\" fr=\"(Dans la tête)\"/>", "En el brazo <trans en=\"(In the arm)\" ar=\"(في الذراع)\" uk=\"(В руці)\" fr=\"(Dans le bras)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: `¿Qué usamos para escuchar? <trans en="(What do we use to listen?)" ar="(ماذا نستخدم للاستماع؟)" uk="(Що ми використовуємо, щоб слухати?)" fr="(Qu'utilise-t-on pour écouter ?)"/>`,
        options: ["Los ojos <trans en=\"(The eyes)\" ar=\"(العيون)\" uk=\"(Очі)\" fr=\"(Les yeux)\"/>", "La boca <trans en=\"(The mouth)\" ar=\"(الفم)\" uk=\"(Рот)\" fr=\"(La bouche)\"/>", "Las orejas <trans en=\"(The ears)\" ar=\"(الأذنين)\" uk=\"(Вуха)\" fr=\"(Les oreilles)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex7",
        question: `¿Cuántos dedos hay en una mano? <trans en="(How many fingers are there on a hand?)" ar="(كم عدد الأصابع الموجودة في اليد؟)" uk="(Скільки пальців на руці?)" fr="(Combien y a-t-il de doigts dans une main ?)"/>`,
        options: ["Cinco <trans en=\"(Five)\" ar=\"(خمسة)\" uk=\"(П'ять)\" fr=\"(Cinq)\"/>", "Seis <trans en=\"(Six)\" ar=\"(ستة)\" uk=\"(Шість)\" fr=\"(Six)\"/>", "Cuatro <trans en=\"(Four)\" ar=\"(أربعة)\" uk=\"(Чотири)\" fr=\"(Quatre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `¿Qué parte conecta la cabeza con el cuerpo? <trans en="(What part connects the head to the body?)" ar="(ما هو الجزء الذي يربط الرأس بالجسم؟)" uk="(Яка частина з’єднує голову з тулубом?)" fr="(Quelle partie relie la tête au corps ?)"/>`,
        options: ["El cuello <trans en=\"(The neck)\" ar=\"(الرقبة)\" uk=\"(Шия)\" fr=\"(Le cou)\"/>", "La espalda <trans en=\"(The back)\" ar=\"(الظهر)\" uk=\"(Спина)\" fr=\"(Le dos)\"/>", "El pecho <trans en=\"(The chest)\" ar=\"(الصدر)\" uk=\"(Скриня)\" fr=\"(La poitrine)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `El plural de 'El pie' es... <trans en="(The plural of 'The foot' is...)" ar="(جمع "القدم" هو...)" uk="(Множина «стопи» є...)" fr="(Le pluriel de « Le pied » est...)"/>`,
        options: ["Los pies <trans en=\"(The feet)\" ar=\"(القدمين)\" uk=\"(Ноги)\" fr=\"(Les pieds)\"/>", "Los pie <trans en=\"(The feet)\" ar=\"(القدمين)\" uk=\"(Ноги)\" fr=\"(Les pieds)\"/>", "Las pies <trans en=\"(The feet)\" ar=\"(القدمين)\" uk=\"(Ноги)\" fr=\"(Les pieds)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `¿Qué está en la cara? <trans en="(What is on the face?)" ar="(ماذا يوجد على الوجه؟)" uk="(Що на обличчі?)" fr="(Qu'y a-t-il sur le visage ?)"/>`,
        options: ["El codo <trans en=\"(The elbow)\" ar=\"(الكوع)\" uk=\"(Лікоть)\" fr=\"(Le coude)\"/>", "La nariz <trans en=\"(The nose)\" ar=\"(الأنف)\" uk=\"(Ніс)\" fr=\"(Le nez)\"/>", "La rodilla <trans en=\"(The knee)\" ar=\"(الركبة)\" uk=\"(Коліно)\" fr=\"(Le genou)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: `¿Con qué saboreamos la comida? <trans en="(What do we taste food with?)" ar="(بماذا نتذوق الطعام؟)" uk="(Чим ми смакуємо їжу?)" fr="(Avec quoi goûte-t-on les aliments ?)"/>`,
        options: ["Con la lengua <trans en=\"(With the tongue)\" ar=\"(مع اللسان)\" uk=\"(З язиком)\" fr=\"(Avec la langue)\"/>", "Con los dientes <trans en=\"(With teeth)\" ar=\"(مع الأسنان)\" uk=\"(З зубами)\" fr=\"(Avec des dents)\"/>", "Con el cuello <trans en=\"(With the neck)\" ar=\"(مع الرقبة)\" uk=\"(З шиєю)\" fr=\"(Avec le cou)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `Tenemos dos... <trans en="(We have two...)" ar="(لدينا اثنان...)" uk="(У нас два...)" fr="(Nous en avons deux...)"/>`,
        options: ["Narices <trans en=\"(Nose)\" ar=\"(أنف)\" uk=\"(Ніс)\" fr=\"(Nez)\"/>", "Cabezas <trans en=\"(Heads)\" ar=\"(رؤساء)\" uk=\"(Голови)\" fr=\"(Têtes)\"/>", "Manos <trans en=\"(Hands)\" ar=\"(الأيدي)\" uk=\"(Руки)\" fr=\"(Mains)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex13",
        question: `¿Qué doblamos al caminar? <trans en="(What do we bend when we walk?)" ar="(ماذا نثني عندما نسير؟)" uk="(Що ми згинаємо, коли йдемо?)" fr="(Que plie-t-on quand on marche ?)"/>`,
        options: ["La rodilla <trans en=\"(The knee)\" ar=\"(الركبة)\" uk=\"(Коліно)\" fr=\"(Le genou)\"/>", "El codo <trans en=\"(The elbow)\" ar=\"(الكوع)\" uk=\"(Лікоть)\" fr=\"(Le coude)\"/>", "El hombro <trans en=\"(The shoulder)\" ar=\"(الكتف)\" uk=\"(Плече)\" fr=\"(L'épaule)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿Qué usamos para comer? <trans en="(What do we use to eat?)" ar="(ماذا نستخدم للأكل؟)" uk="(Що ми використовуємо для їжі?)" fr="(Qu'est-ce qu'on utilise pour manger ?)"/>`,
        options: ["La boca <trans en=\"(The mouth)\" ar=\"(الفم)\" uk=\"(Рот)\" fr=\"(La bouche)\"/>", "La oreja <trans en=\"(The ear)\" ar=\"(الأذن)\" uk=\"(Вухо)\" fr=\"(L'oreille)\"/>", "El ojo <trans en=\"(The eye)\" ar=\"(العين)\" uk=\"(Око)\" fr=\"(L'oeil)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `¿Dónde ponemos los zapatos? <trans en="(Where do we put the shoes?)" ar="(أين نضع الأحذية؟)" uk="(Куди ми покладемо взуття?)" fr="(Où met-on les chaussures ?)"/>`,
        options: ["En las manos <trans en=\"(In the hands)\" ar=\"(في اليدين)\" uk=\"(В руках)\" fr=\"(Dans les mains)\"/>", "En los pies <trans en=\"(On the feet)\" ar=\"(على القدمين)\" uk=\"(На ногах)\" fr=\"(Aux pieds)\"/>", "En la cabeza <trans en=\"(In the head)\" ar=\"(في الرأس)\" uk=\"(В голові)\" fr=\"(Dans la tête)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex16",
        question: `El corazón está en... <trans en="(The heart is in...)" ar="(القلب فيه ...)" uk="(Серце в...)" fr="(Le cœur est dans...)"/>`,
        options: ["El pecho <trans en=\"(The chest)\" ar=\"(الصدر)\" uk=\"(Скриня)\" fr=\"(La poitrine)\"/>", "La pierna <trans en=\"(The leg)\" ar=\"(الساق)\" uk=\"(Нога)\" fr=\"(La jambe)\"/>", "La cara <trans en=\"(The face)\" ar=\"(الوجه)\" uk=\"(Обличчя)\" fr=\"(Le visage)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Después de la mano viene el... <trans en="(After the hand comes the...)" ar="(وبعد أن تأتي اليد...)" uk="(Після руки йде...)" fr="(Après la main vient le...)"/>`,
        options: ["Pie <trans en=\"(Foot)\" ar=\"(قدم)\" uk=\"(Стопа)\" fr=\"(Pied)\"/>", "Brazo <trans en=\"(Arm)\" ar=\"(ذراع)\" uk=\"(Рука)\" fr=\"(Bras)\"/>", "Cuello <trans en=\"(Neck)\" ar=\"(رقبة)\" uk=\"(Шия)\" fr=\"(Cou)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex18",
        question: `¿Qué nos duele si pensamos mucho? <trans en="(What hurts us if we think a lot?)" ar="(ماذا يضرنا لو فكرنا كثيراً؟)" uk="(Що нам шкодить, якщо ми багато думаємо?)" fr="(Qu'est-ce qui nous fait mal si nous réfléchissons beaucoup ?)"/>`,
        options: ["La cabeza <trans en=\"(The head)\" ar=\"(الرأس)\" uk=\"(Голова)\" fr=\"(La tête)\"/>", "El pie <trans en=\"(The foot)\" ar=\"(القدم)\" uk=\"(Стопа)\" fr=\"(Le pied)\"/>", "La mano <trans en=\"(The hand)\" ar=\"(اليد)\" uk=\"(Руку)\" fr=\"(La main)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `¿Qué usamos para escribir? <trans en="(What do we use to write?)" ar="(ماذا نستخدم في الكتابة؟)" uk="(Що ми використовуємо для написання?)" fr="(Qu'utilise-t-on pour écrire ?)"/>`,
        options: ["El pie <trans en=\"(The foot)\" ar=\"(القدم)\" uk=\"(Стопа)\" fr=\"(Le pied)\"/>", "La mano <trans en=\"(The hand)\" ar=\"(اليد)\" uk=\"(Руку)\" fr=\"(La main)\"/>", "La oreja <trans en=\"(The ear)\" ar=\"(الأذن)\" uk=\"(Вухо)\" fr=\"(L'oreille)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex20",
        question: `¿Qué usamos para ver? (Extra) <trans en="(What do we use to see? )" ar="(ماذا نستخدم لنرى؟ (إضافي))" uk="(Що ми використовуємо, щоб побачити? (Додатково))" fr="(Qu'est-ce qu'on utilise pour voir ? (Supplémentaire))"/>`,
        options: ["Las orejas <trans en=\"(The ears)\" ar=\"(الأذنين)\" uk=\"(Вуха)\" fr=\"(Les oreilles)\"/>", "Los ojos <trans en=\"(The eyes)\" ar=\"(العيون)\" uk=\"(Очі)\" fr=\"(Les yeux)\"/>", "La nariz <trans en=\"(The nose)\" ar=\"(الأنف)\" uk=\"(Ніс)\" fr=\"(Le nez)\"/>"],
        correctAnswer: 1
      }
    
    
    ]
  },
  {
    id: "a1-vocab-colores",
    topic: "Los Colores",
    title: "Vocabulario: Los Colores",
    level: "A1",
    category: "Vocabulario",
    description: "Vocabulario con tonos de colores. Rojo, azul, verde, amarillo, naranja.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/colores.png",
    color: "#FFF5F5",
    vocabulary: [
        {
          word: 'Rojo',
          translations: {
            en: 'Red',
            ar: 'أحمر',
            uk: 'Червоний',
            fr: 'Rouge'
          },
          emoji: '🍎',
          color: '#E53E3E'
        },
        {
          word: 'Azul',
          translations: {
            en: 'Blue',
            ar: 'أزرق',
            uk: 'Синій',
            fr: 'Bleu'
          },
          emoji: '💧',
          color: '#3182CE'
        },
        {
          word: 'Verde',
          translations: {
            en: 'Green',
            ar: 'أخضر',
            uk: 'Зелений',
            fr: 'Vert'
          },
          emoji: '🐸',
          color: '#38A169'
        },
        {
          word: 'Amarillo',
          translations: {
            en: 'Yellow',
            ar: 'أصفر',
            uk: 'Жовтий',
            fr: 'Jaune'
          },
          emoji: '☀️',
          color: '#ECC94B'
        },
        {
          word: 'Naranja',
          translations: {
            en: 'Orange',
            ar: 'برتقالي',
            uk: 'Помаранчевий',
            fr: 'Orange'
          },
          emoji: '🍊',
          color: '#DD6B20'
        },
        {
          word: 'Negro',
          translations: {
            en: 'Black',
            ar: 'أسود',
            uk: 'Чорний',
            fr: 'Noir'
          },
          emoji: '🎩',
          color: '#1A202C'
        },
        {
          word: 'Blanco',
          translations: {
            en: 'White',
            ar: 'أبيض',
            uk: 'Білий',
            fr: 'Blanc'
          },
          emoji: '⬜',
          color: '#F7FAFC'
        },
        {
          word: 'Rosa',
          translations: {
            en: 'Pink',
            ar: 'وردي',
            uk: 'Рожевий',
            fr: 'Rose'
          },
          emoji: '🌸',
          color: '#FBB6CE'
        },
        {
          word: 'Marrón',
          translations: {
            en: 'Brown',
            ar: 'بني',
            uk: 'Коричневий',
            fr: 'Marron'
          },
          emoji: '🟫',
          color: '#975A16'
        },
        {
          word: 'Gris',
          translations: {
            en: 'Gray',
            ar: 'رمادي',
            uk: 'Сірий',
            fr: 'Gris'
          },
          emoji: '🩶',
          color: '#A0AEC0'
        },
        {
          word: 'Violeta',
          translations: {
            en: 'Violet',
            ar: 'بنفسجي',
            uk: 'Фіолетовий',
            fr: 'Violet'
          },
          emoji: '🔮',
          color: '#805AD5'
        },
        {
          word: 'Celeste',
          translations: {
            en: 'Light Blue',
            ar: 'أزرق سماوي',
            uk: 'Блакитний',
            fr: 'Bleu ciel'
          },
          emoji: '🌤️',
          color: '#63B3ED'
        },
        {
          word: 'Turquesa',
          translations: {
            en: 'Turquoise',
            ar: 'فيروزي',
            uk: 'Бірюзовий',
            fr: 'Turquoise'
          },
          emoji: '💎',
          color: '#4FD1C5'
        },
        {
          word: 'Rosa claro',
          translations: {
            en: 'Light Pink',
            ar: 'وردي فاتح',
            uk: 'Світло-рожевий',
            fr: 'Rose clair'
          },
          emoji: '🌸',
          color: '#FFF5F5'
        },
        {
          word: 'Verde oscuro',
          translations: {
            en: 'Dark Green',
            ar: 'أخضر غامق',
            uk: 'Темно-зелений',
            fr: 'Vert foncé'
          },
          emoji: '🌲',
          color: '#22543D'
        },
        {
          word: 'Azul marino',
          translations: {
            en: 'Navy Blue',
            ar: 'أزرق داكن',
            uk: 'Темно-синій',
            fr: 'Bleu marine'
          },
          emoji: '⚓',
          color: '#1A365D'
        },
        {
          word: 'Dorado',
          translations: {
            en: 'Golden',
            ar: 'ذهبي',
            uk: 'Золотий',
            fr: 'Doré'
          },
          emoji: '👑',
          color: '#D69E2E'
        },
        {
          word: 'Plateado',
          translations: {
            en: 'Silver',
            ar: 'فضي',
            uk: 'Срібний',
            fr: 'Argenté'
          },
          emoji: '🪙',
          color: '#E2E8F0'
        },
        {
          word: 'Beige',
          translations: {
            en: 'Beige',
            ar: 'بيج',
            uk: 'Бежевий',
            fr: 'Beige'
          },
          emoji: '🌾',
          color: '#EDF2F7'
        },
        {
          word: 'Lila',
          translations: {
            en: 'Lilac',
            ar: 'ليلكي',
            uk: 'Бузковий',
            fr: 'Lilas'
          },
          emoji: '🪻',
          color: '#E9D8FD'
        },
        {
          word: 'Ocre',
          translations: {
            en: 'Ochre',
            ar: 'مغرة',
            uk: 'Охра',
            fr: 'Ocre'
          },
          emoji: '🍁',
          color: '#C05621'
        },
        {
          word: 'Castaño',
          translations: {
            en: 'Chestnut',
            ar: 'كستنائي',
            uk: 'Каштановий',
            fr: 'Châtain'
          },
          emoji: '🌰',
          color: '#744210'
        },
        {
          word: 'Esmeralda',
          translations: {
            en: 'Emerald',
            ar: 'زمردي',
            uk: 'Смарагдовий',
            fr: 'Émeraude'
          },
          emoji: '❇️',
          color: '#276749'
        },
        {
          word: 'Fucsia',
          translations: {
            en: 'Fuchsia',
            ar: 'فوشيا',
            uk: 'Фуксія',
            fr: 'Fuchsia'
          },
          emoji: '🌺',
          color: '#D53F8C'
        },
        {
          word: 'Ceniza',
          translations: {
            en: 'Ash',
            ar: 'رمادي رمادي',
            uk: 'Попелястий',
            fr: 'Cendré'
          },
          emoji: '💨',
          color: '#CBD5E0'
        },
        {
          word: 'Amarillo limón',
          translations: {
            en: 'Lemon Yellow',
            ar: 'أصفر ليموني',
            uk: 'Лимонно-жовтий',
            fr: 'Jaune citron'
          },
          emoji: '🍋',
          color: '#FEFCBF'
        },
        {
          word: 'Verde lima',
          translations: {
            en: 'Lime Green',
            ar: 'أخضر ليموني',
            uk: 'Салатовий',
            fr: 'Vert lime'
          },
          emoji: '🍈',
          color: '#C6F6D5'
        },
        {
          word: 'Salmón',
          translations: {
            en: 'Salmon',
            ar: 'سلموني',
            uk: 'Лососевий',
            fr: 'Saumon'
          },
          emoji: '🍣',
          color: '#FEB2B2'
        },
        {
          word: 'Morado',
          translations: {
            en: 'Purple',
            ar: 'أرجواني',
            uk: 'Пурпуровий',
            fr: 'Pourpre'
          },
          emoji: '🍇',
          color: '#6B46C1'
        },
        {
          word: 'Bronce',
          translations: {
            en: 'Bronze',
            ar: 'برونزي',
            uk: 'Бронзовий',
            fr: 'Bronze'
          },
          emoji: '🥉',
          color: '#B7791F'
        }
      ],
    content: `
## ¿De qué color es?
    `,
    exercises: [
      {
        id: "ex1",
        question: `El cielo es... <trans en="(Heaven is...)" ar="(الجنة...)" uk="(Небо - це...)" fr="(Le paradis est...)"/>`,
        options: ["Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>", "Azul <trans en=\"(Blue)\" ar=\"(الأزرق)\" uk=\"(Блакитний)\" fr=\"(Bleu)\"/>", "Amarillo <trans en=\"(Yellow)\" ar=\"(أصفر)\" uk=\"(Жовтий)\" fr=\"(Jaune)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `Una manzana normalmente es... <trans en="(An apple is usually...)" ar="(التفاحة عادة...)" uk="(Яблуко зазвичай...)" fr="(Une pomme est généralement...)"/>`,
        options: ["Verde o Roja <trans en=\"(Green or Red)\" ar=\"(أخضر أو أحمر)\" uk=\"(Зелений або Червоний)\" fr=\"(Vert ou Rouge)\"/>", "Azul o Negra <trans en=\"(Blue or Black)\" ar=\"(أزرق أو أسود)\" uk=\"(Синій або чорний)\" fr=\"(Bleu ou Noir)\"/>", "Naranja <trans en=\"(Orange)\" ar=\"(برتقالي)\" uk=\"(Апельсин)\" fr=\"(Orange)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `¿De qué color es la hierba? <trans en="(What color is the grass?)" ar="(ما هو لون العشب؟)" uk="(Якого кольору трава?)" fr="(De quelle couleur est l'herbe ?)"/>`,
        options: ["Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>", "Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>", "Azul <trans en=\"(Blue)\" ar=\"(الأزرق)\" uk=\"(Блакитний)\" fr=\"(Bleu)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex4",
        question: `¿De qué color es la nieve? <trans en="(What color is the snow?)" ar="(ما هو لون الثلج؟)" uk="(Якого кольору сніг?)" fr="(De quelle couleur est la neige ?)"/>`,
        options: ["Negro <trans en=\"(Black)\" ar=\"(أسود)\" uk=\"(Чорний)\" fr=\"(Noir)\"/>", "Amarillo <trans en=\"(Yellow)\" ar=\"(أصفر)\" uk=\"(Жовтий)\" fr=\"(Jaune)\"/>", "Blanco <trans en=\"(White)\" ar=\"(أبيض)\" uk=\"(Білий)\" fr=\"(Blanc)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex5",
        question: `¿De qué color es el carbón? <trans en="(What color is charcoal?)" ar="(ما هو لون الفحم؟)" uk="(Якого кольору вугілля?)" fr="(De quelle couleur est le charbon de bois ?)"/>`,
        options: ["Negro <trans en=\"(Black)\" ar=\"(أسود)\" uk=\"(Чорний)\" fr=\"(Noir)\"/>", "Blanco <trans en=\"(White)\" ar=\"(أبيض)\" uk=\"(Білий)\" fr=\"(Blanc)\"/>", "Gris <trans en=\"(Gray)\" ar=\"(رمادي)\" uk=\"(Сірий)\" fr=\"(Gris)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `¿De qué color es un plátano? <trans en="(What color is a banana?)" ar="(ما هو لون الموز؟)" uk="(Якого кольору банан?)" fr="(De quelle couleur est une banane ?)"/>`,
        options: ["Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>", "Amarillo <trans en=\"(Yellow)\" ar=\"(أصفر)\" uk=\"(Жовтий)\" fr=\"(Jaune)\"/>", "Azul <trans en=\"(Blue)\" ar=\"(الأزرق)\" uk=\"(Блакитний)\" fr=\"(Bleu)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex7",
        question: `¿De qué color es la leche? <trans en="(What color is the milk?)" ar="(ما هو لون الحليب؟)" uk="(Якого кольору молоко?)" fr="(De quelle couleur est le lait ?)"/>`,
        options: ["Blanca <trans en=\"(White)\" ar=\"(ابيض)\" uk=\"(Білий)\" fr=\"(Blanc)\"/>", "Negra <trans en=\"(Black)\" ar=\"(اسود)\" uk=\"(Чорний)\" fr=\"(Noir)\"/>", "Roja <trans en=\"(Red)\" ar=\"(أحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `El color del mar es generalmente... <trans en="(The color of the sea is generally...)" ar="(لون البحر عموما...)" uk="(Колір моря зазвичай...)" fr="(La couleur de la mer est généralement...)"/>`,
        options: ["Azul <trans en=\"(Blue)\" ar=\"(الأزرق)\" uk=\"(Блакитний)\" fr=\"(Bleu)\"/>", "Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>", "Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Una rosa suele ser de color... <trans en="(A rose is usually colored...)" ar="(الوردة عادة تكون ملونة...)" uk="(Троянда зазвичай кольорова...)" fr="(Une rose est généralement colorée...)"/>`,
        options: ["Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>", "Negro <trans en=\"(Black)\" ar=\"(أسود)\" uk=\"(Чорний)\" fr=\"(Noir)\"/>", "Azul <trans en=\"(Blue)\" ar=\"(الأزرق)\" uk=\"(Блакитний)\" fr=\"(Bleu)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `¿Qué color resulta de mezclar blanco y negro? <trans en="(What color results from mixing black and white?)" ar="(ما اللون الناتج عن خلط الأبيض والأسود؟)" uk="(Який колір виходить у результаті змішування чорного та білого?)" fr="(Quelle couleur résulte du mélange du noir et du blanc ?)"/>`,
        options: ["Marrón <trans en=\"(Brown)\" ar=\"(بني)\" uk=\"(Коричневий)\" fr=\"(Marron)\"/>", "Gris <trans en=\"(Gray)\" ar=\"(رمادي)\" uk=\"(Сірий)\" fr=\"(Gris)\"/>", "Rosa <trans en=\"(Pink)\" ar=\"(وردي)\" uk=\"(Рожевий)\" fr=\"(Rose)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: `El chocolate es... <trans en="(Chocolate is...)" ar="(الشوكولاتة...)" uk="(Шоколад - це...)" fr="(Le chocolat est...)"/>`,
        options: ["Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>", "Marrón <trans en=\"(Brown)\" ar=\"(بني)\" uk=\"(Коричневий)\" fr=\"(Marron)\"/>", "Blanco <trans en=\"(White)\" ar=\"(أبيض)\" uk=\"(Білий)\" fr=\"(Blanc)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: `¿De qué color es el cielo nocturno? <trans en="(What color is the night sky?)" ar="(ما هو لون السماء ليلا؟)" uk="(Якого кольору нічне небо?)" fr="(De quelle couleur est le ciel nocturne ?)"/>`,
        options: ["Azul oscuro / Negro <trans en=\"(Dark blue/Black)\" ar=\"(أزرق داكن/أسود)\" uk=\"(Темно-синій/чорний)\" fr=\"(Bleu foncé/noir)\"/>", "Blanco <trans en=\"(White)\" ar=\"(أبيض)\" uk=\"(Білий)\" fr=\"(Blanc)\"/>", "Amarillo <trans en=\"(Yellow)\" ar=\"(أصفر)\" uk=\"(Жовтий)\" fr=\"(Jaune)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `¿Qué color significa 'Peligro' o 'Parar' en un semáforo? <trans en="(What color means 'Danger' or 'Stop' at a traffic light?)" ar="(ما هو اللون الذي يعني "خطر" أو "توقف" عند إشارة المرور؟)" uk="(Який колір означає «Небезпека» або «Стоп» на світлофорі?)" fr="(Quelle couleur signifie « Danger » ou « Stop » à un feu tricolore ?)"/>`,
        options: ["Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>", "Amarillo <trans en=\"(Yellow)\" ar=\"(أصفر)\" uk=\"(Жовтий)\" fr=\"(Jaune)\"/>", "Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex14",
        question: `¿Qué color significa 'Avanzar' en un semáforo? <trans en="(What color means 'Go' on a traffic light?)" ar="(ما هو اللون الذي يعني "انطلق" في إشارة المرور؟)" uk="(Який колір означає «Йди» на світлофорі?)" fr="(Quelle couleur signifie « Go » sur un feu de circulation ?)"/>`,
        options: ["Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>", "Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>", "Azul <trans en=\"(Blue)\" ar=\"(الأزرق)\" uk=\"(Блакитний)\" fr=\"(Bleu)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex15",
        question: `¿De qué color es una naranja? <trans en="(What color is an orange?)" ar="(ما هو اللون البرتقالي؟)" uk="(Якого кольору апельсин?)" fr="(De quelle couleur est une orange ?)"/>`,
        options: ["Naranja <trans en=\"(Orange)\" ar=\"(برتقالي)\" uk=\"(Апельсин)\" fr=\"(Orange)\"/>", "Amarillo <trans en=\"(Yellow)\" ar=\"(أصفر)\" uk=\"(Жовтий)\" fr=\"(Jaune)\"/>", "Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Un cerdo de juguete suele ser... <trans en="(A toy pig is usually...)" ar="(لعبة الخنزير عادة ما تكون...)" uk="(Іграшкова свинка зазвичай...)" fr="(Un cochon jouet est généralement...)"/>`,
        options: ["Negro <trans en=\"(Black)\" ar=\"(أسود)\" uk=\"(Чорний)\" fr=\"(Noir)\"/>", "Rosa <trans en=\"(Pink)\" ar=\"(وردي)\" uk=\"(Рожевий)\" fr=\"(Rose)\"/>", "Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex17",
        question: `¿De qué color es la sangre? <trans en="(What color is the blood?)" ar="(ما هو لون الدم؟)" uk="(Якого кольору кров?)" fr="(De quelle couleur est le sang ?)"/>`,
        options: ["Roja <trans en=\"(Red)\" ar=\"(أحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>", "Azul <trans en=\"(Blue)\" ar=\"(الأزرق)\" uk=\"(Блакитний)\" fr=\"(Bleu)\"/>", "Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `¿De qué color es el sol? <trans en="(What color is the sun?)" ar="(ما هو لون الشمس؟)" uk="(Якого кольору сонечко?)" fr="(De quelle couleur est le soleil ?)"/>`,
        options: ["Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>", "Morado <trans en=\"(Purple)\" ar=\"(بنفسجي)\" uk=\"(Фіолетовий)\" fr=\"(Violet)\"/>", "Amarillo <trans en=\"(Yellow)\" ar=\"(أصفر)\" uk=\"(Жовтий)\" fr=\"(Jaune)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex19",
        question: `El cielo despejado es... <trans en="(The clear sky is...)" ar="(السماء صافية...)" uk="(Чисте небо - це...)" fr="(Le ciel clair est...)"/>`,
        options: ["Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>", "Marrón <trans en=\"(Brown)\" ar=\"(بني)\" uk=\"(Коричневий)\" fr=\"(Marron)\"/>", "Azul <trans en=\"(Blue)\" ar=\"(الأزرق)\" uk=\"(Блакитний)\" fr=\"(Bleu)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex20",
        question: `¿De qué color es la hierba? (Extra) <trans en="(What color is the grass? (Bonus))" ar="(ما هو لون العشب؟ (مكافأة))" uk="(Якого кольору трава? (Бонус))" fr="(De quelle couleur est l'herbe ? (Prime))"/>`,
        options: ["Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>", "Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>", "Azul <trans en=\"(Blue)\" ar=\"(الأزرق)\" uk=\"(Блакитний)\" fr=\"(Bleu)\"/>"],
        correctAnswer: 1
      }
    
    
    ]
  },
  {
    id: "a1-gram-articulos",
    topic: "Gramática",
    title: "Artículos y Plurales",
    level: "A1",
    category: "Gramática",
    description: "Aprende a usar los artículos (el, la, los, las) y a formar el plural añadiendo 'S' o 'ES'.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/articulos.png",
    color: "#EBF8FF",
    vocabulary: [
        {
          word: 'El niño',
          translations: {
            en: 'The boy',
            ar: 'الولد',
            uk: 'Хлопчик',
            fr: 'Le garçon'
          },
          emoji: '👦',
          color: '#EBF8FF'
        },
        {
          word: 'La niña',
          translations: {
            en: 'The girl',
            ar: 'البنت',
            uk: 'Дівчинка',
            fr: 'La fille'
          },
          emoji: '👧',
          color: '#FFF5F5'
        },
        {
          word: 'Los niños',
          translations: {
            en: 'The children',
            ar: 'الأطفال',
            uk: 'Діти',
            fr: 'Les enfants'
          },
          emoji: '🧑‍🤝‍🧑',
          color: '#E2F3E7'
        },
        {
          word: 'Las niñas',
          translations: {
            en: 'The girls',
            ar: 'البنات',
            uk: 'Дівчатка',
            fr: 'Les filles'
          },
          emoji: '👭',
          color: '#FCE8E8'
        },
        {
          word: 'El libro',
          translations: {
            en: 'The book',
            ar: 'الكتاب',
            uk: 'Книга',
            fr: 'Le livre'
          },
          emoji: '📖',
          color: '#FEFCBF'
        },
        {
          word: 'La mesa',
          translations: {
            en: 'The table',
            ar: 'الطاولة',
            uk: 'Стіл',
            fr: 'La table'
          },
          emoji: '🪑',
          color: '#EDF2F7'
        },
        {
          word: 'Los libros',
          translations: {
            en: 'The books',
            ar: 'الكتب',
            uk: 'Книги',
            fr: 'Les livres'
          },
          emoji: '📚',
          color: '#FEFCBF'
        },
        {
          word: 'Las mesas',
          translations: {
            en: 'The tables',
            ar: 'الطاولات',
            uk: 'Столи',
            fr: 'Les tables'
          },
          emoji: '🪑',
          color: '#EDF2F7'
        },
        {
          word: 'El coche',
          translations: {
            en: 'The car',
            ar: 'السيارة',
            uk: 'Автомобіль',
            fr: 'La voiture'
          },
          emoji: '🚗',
          color: '#FFF4E5'
        },
        {
          word: 'La bicicleta',
          translations: {
            en: 'The bicycle',
            ar: 'الدراجة',
            uk: 'Велосипед',
            fr: 'Le vélo'
          },
          emoji: '🚲',
          color: '#E2F3E7'
        },
        {
          word: 'Los coches',
          translations: {
            en: 'The cars',
            ar: 'السيارات',
            uk: 'Автомобілі',
            fr: 'Les voitures'
          },
          emoji: '🚗',
          color: '#FFF4E5'
        },
        {
          word: 'Las bicicletas',
          translations: {
            en: 'The bicycles',
            ar: 'الدراجات',
            uk: 'Велосипеди',
            fr: 'Les vélos'
          },
          emoji: '🚲',
          color: '#E2F3E7'
        },
        {
          word: 'El perro',
          translations: {
            en: 'The dog',
            ar: 'الكلب',
            uk: 'Собака',
            fr: 'Le chien'
          },
          emoji: '🐶',
          color: '#FEFCBF'
        },
        {
          word: 'La perra',
          translations: {
            en: 'The female dog',
            ar: 'الكلبة',
            uk: 'Собака (самка)',
            fr: 'La chienne'
          },
          emoji: '🐶',
          color: '#FEFCBF'
        },
        {
          word: 'Los perros',
          translations: {
            en: 'The dogs',
            ar: 'الكلاب',
            uk: 'Собаки',
            fr: 'Les chiens'
          },
          emoji: '🐕',
          color: '#FEFCBF'
        },
        {
          word: 'Las perras',
          translations: {
            en: 'The female dogs',
            ar: 'الكلاب (إناث)',
            uk: 'Собаки (самки)',
            fr: 'Les chiennes'
          },
          emoji: '🐕',
          color: '#FEFCBF'
        },
        {
          word: 'El gato',
          translations: {
            en: 'The cat',
            ar: 'القط',
            uk: 'Кіт',
            fr: 'Le chat'
          },
          emoji: '🐱',
          color: '#F3E8FF'
        },
        {
          word: 'La gata',
          translations: {
            en: 'The female cat',
            ar: 'القطة',
            uk: 'Кішка',
            fr: 'La chatte'
          },
          emoji: '🐱',
          color: '#F3E8FF'
        },
        {
          word: 'Los gatos',
          translations: {
            en: 'The cats',
            ar: 'القطط',
            uk: 'Коти',
            fr: 'Les chats'
          },
          emoji: '🐈',
          color: '#F3E8FF'
        },
        {
          word: 'Las gatas',
          translations: {
            en: 'The female cats',
            ar: 'القطط (إناث)',
            uk: 'Кішки',
            fr: 'Les chattes'
          },
          emoji: '🐈',
          color: '#F3E8FF'
        },
        {
          word: 'El profesor',
          translations: {
            en: 'The teacher (m)',
            ar: 'المعلم',
            uk: 'Вчитель',
            fr: 'Le professeur'
          },
          emoji: '🧑‍🏫',
          color: '#E3EEF9'
        },
        {
          word: 'La profesora',
          translations: {
            en: 'The teacher (f)',
            ar: 'المعلمة',
            uk: 'Вчителька',
            fr: 'La professeure'
          },
          emoji: '👩‍🏫',
          color: '#E3EEF9'
        },
        {
          word: 'Los profesores',
          translations: {
            en: 'The teachers (m/mix)',
            ar: 'المعلمون',
            uk: 'Вчителі',
            fr: 'Les professeurs'
          },
          emoji: '🧑‍🏫',
          color: '#E3EEF9'
        },
        {
          word: 'Las profesoras',
          translations: {
            en: 'The teachers (f)',
            ar: 'المعلمات',
            uk: 'Вчительки',
            fr: 'Les professeures'
          },
          emoji: '👩‍🏫',
          color: '#E3EEF9'
        },
        {
          word: 'El bolígrafo',
          translations: {
            en: 'The pen',
            ar: 'القلم',
            uk: 'Ручка',
            fr: 'Le stylo'
          },
          emoji: '🖊️',
          color: '#EDF2F7'
        },
        {
          word: 'La regla',
          translations: {
            en: 'The ruler',
            ar: 'المسطرة',
            uk: 'Лінійка',
            fr: 'La règle'
          },
          emoji: '📏',
          color: '#EDF2F7'
        },
        {
          word: 'Los bolígrafos',
          translations: {
            en: 'The pens',
            ar: 'الأقلام',
            uk: 'Ручки',
            fr: 'Les stylos'
          },
          emoji: '🖊️',
          color: '#EDF2F7'
        },
        {
          word: 'Las reglas',
          translations: {
            en: 'The rulers',
            ar: 'المساطر',
            uk: 'Лінійки',
            fr: 'Les règles'
          },
          emoji: '📏',
          color: '#EDF2F7'
        },
        {
          word: 'El cuaderno',
          translations: {
            en: 'The notebook',
            ar: 'الدفتر',
            uk: 'Зошит',
            fr: 'Le cahier'
          },
          emoji: '📓',
          color: '#EDF2F7'
        },
        {
          word: 'Las libretas',
          translations: {
            en: 'The notebooks',
            ar: 'الدفاتر الصغيرة',
            uk: 'Блокноти',
            fr: 'Les carnets'
          },
          emoji: '📓',
          color: '#EDF2F7'
        }
      ],
    content: `
## Los Artículos Definidos

En español, usamos diferentes artículos dependiendo de si la palabra es masculina o femenina, y si es singular (uno) o plural (más de uno).

### Singular <trans en="(Singular)" ar="(مفرد)" uk="(Однина)" fr="(Singulier)"/>
*   **El** <trans en="(The - Masculine)" ar="(ال - مذكر)" uk="(Чоловічий рід)" fr="(Le)"/>: El niño, El perro, El coche.
*   **La** <trans en="(The - Feminine)" ar="(ال - مؤنث)" uk="(Жіночий рід)" fr="(La)"/>: La niña, La casa, La mesa.

### Plural <trans en="(Plural)" ar="(جمع)" uk="(Множина)" fr="(Pluriel)"/>
Para formar el plural de las palabras que terminan en vocal (a, e, i, o, u), añadimos una **"S"** al final.
*   **Los** <trans en="(The - Masculine plural)" ar="(ال - جمع مذكر)" uk="(Чоловічий рід множина)" fr="(Les - Masculin)"/>: *Los niño**s***.
*   **Las** <trans en="(The - Feminine plural)" ar="(ال - جمع مؤنث)" uk="(Жіночий рід множина)" fr="(Les - Féminin)"/>: *Las niña**s***.
    `,
    exercises: [
      {
        id: "ex1",
        question: `___ mesa <trans en='(table)' ar='(طاولة)' uk='(стіл)' fr='(table)'/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `¿Cuál es el plural de 'perro' <trans en='(dog)' ar='(كلب)' uk='(собака)' fr='(chien)'/>?`,
        options: ["perros <trans en=\"(dogs)\" ar=\"(كلاب)\" uk=\"(собаки)\" fr=\"(les chiens)\"/>", "perroes <trans en=\"(dogs)\" ar=\"(الكلاب)\" uk=\"(собаки)\" fr=\"(chiens)\"/>", "perro <trans en=\"(dog)\" ar=\"(كلب)\" uk=\"(собака)\" fr=\"(chien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `___ amigos <trans en='(friends)' ar='(أصدقاء)' uk='(друзі)' fr='(amis)'/>`,
        options: ["La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 3
      },
      {
        id: "ex4",
        question: `___ chico <trans en="(___ boy)" ar="(___ ولد)" uk="(___ хлопчик)" fr="(___ garçon)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `___ chicas <trans en="(___ girls)" ar="(___ بنات)" uk="(___ дівчат)" fr="(___ les filles)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 3
      },
      {
        id: "ex6",
        question: `___ gatos <trans en="(___ cats)" ar="(___ القطط)" uk="(___ котів)" fr="(___ chats)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex7",
        question: `___ libro <trans en="(___ book)" ar="(___ كتاب)" uk="(___ книга)" fr="(___ livre)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `___ mochilas <trans en="(___ backpacks)" ar="(___ حقائب الظهر)" uk="(___ рюкзаків)" fr="(___ sacs à dos)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 3
      },
      {
        id: "ex9",
        question: `___ profesora <trans en="(___ teacher)" ar="(___ معلم)" uk="(___ викладач)" fr="(___ professeur)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex10",
        question: `___ perros <trans en="(___ dogs)" ar="(___ كلاب)" uk="(___ собак)" fr="(___ chiens)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex11",
        question: `___ agua (excepción) <trans en="(___ water (exception))" ar="(___ الماء (استثناء))" uk="(___ вода (виняток))" fr="(___ eau (exception))"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `___ manos <trans en="(___ hands)" ar="(___ الأيدي)" uk="(___ рук)" fr="(___ mains)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 3
      },
      {
        id: "ex13",
        question: `___ flor <trans en="(___ flower)" ar="(___ زهرة)" uk="(___ квітка)" fr="(___ fleur)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex14",
        question: `___ zapatos <trans en="(___ shoes)" ar="(___ حذاء)" uk="(___ взуття)" fr="(___ chaussures)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex15",
        question: `___ hombre <trans en="(___ man)" ar="(___ رجل)" uk="(___ людина)" fr="(___ mec)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `___ mujer <trans en="(___ woman)" ar="(___ امرأة)" uk="(___ жінка)" fr="(___ femme)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex17",
        question: `___ día (excepción) <trans en="(___ day (exception))" ar="(___ يوم (استثناء))" uk="(___ день (виняток))" fr="(___ jour (exception))"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `___ problemas (excepción) <trans en="(___ problems (exception))" ar="(___ مشاكل (استثناء))" uk="(___ проблем (виняток))" fr="(___ problèmes (exception))"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex19",
        question: `___ ciudades <trans en="(___ cities)" ar="(___ المدن)" uk="(___ міст)" fr="(___ villes)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 3
      },
      {
        id: "ex20",
        question: `___ universidad <trans en="(___ university)" ar="(___ الجامعة)" uk="(___ університет)" fr="(___ université)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Los <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "Las <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      }
    
    ]
  },
  {
    id: "a1-gram-pronombres",
    topic: "Pronombres Personales",
    title: "Pronombres Personales",
    level: "A1",
    category: "Gramática",
    description: "Aprende los pronombres para referirte a personas: yo, tú, él, ella, nosotros, vosotros, ellos.",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/pronombres.png",
    color: "#E2F3E7",
    vocabulary: [
        {
          word: 'Yo hablo',
          translations: {
            en: 'I speak',
            ar: 'أنا أتحدث',
            uk: 'Я говорю',
            fr: 'Je parle'
          },
          emoji: '🗣️',
          color: '#EBF8FF'
        },
        {
          word: 'Tú hablas',
          translations: {
            en: 'You speak',
            ar: 'أنت تتحدث',
            uk: 'Ти говориш',
            fr: 'Tu parles'
          },
          emoji: '🗣️',
          color: '#EBF8FF'
        },
        {
          word: 'Él habla',
          translations: {
            en: 'He speaks',
            ar: 'هو يتحدث',
            uk: 'Він говорить',
            fr: 'Il parle'
          },
          emoji: '🗣️',
          color: '#EBF8FF'
        },
        {
          word: 'Ella habla',
          translations: {
            en: 'She speaks',
            ar: 'هي تتحدث',
            uk: 'Вона говорить',
            fr: 'Elle parle'
          },
          emoji: '🗣️',
          color: '#EBF8FF'
        },
        {
          word: 'Usted habla',
          translations: {
            en: 'You speak (formal)',
            ar: 'حضرتك تتحدث',
            uk: 'Ви говорите (ввічливо)',
            fr: 'Vous parlez (formel)'
          },
          emoji: '🗣️',
          color: '#EDF2F7'
        },
        {
          word: 'Nosotros hablamos',
          translations: {
            en: 'We speak (m)',
            ar: 'نحن نتحدث (للذكور)',
            uk: 'Ми говоримо (ч)',
            fr: 'Nous parlons (m)'
          },
          emoji: '🗣️',
          color: '#E2F3E7'
        },
        {
          word: 'Nosotras hablamos',
          translations: {
            en: 'We speak (f)',
            ar: 'نحن نتحدث (للإناث)',
            uk: 'Ми говоримо (ж)',
            fr: 'Nous parlons (f)'
          },
          emoji: '🗣️',
          color: '#E2F3E7'
        },
        {
          word: 'Vosotros habláis',
          translations: {
            en: 'You all speak (m)',
            ar: 'أنتم تتحدثون (للذكور)',
            uk: 'Ви говорите (м. plural)',
            fr: 'Vous parlez (m. pl.)'
          },
          emoji: '🗣️',
          color: '#FEFCBF'
        },
        {
          word: 'Vosotras habláis',
          translations: {
            en: 'You all speak (f)',
            ar: 'أنتن تتحدثن (للإناث)',
            uk: 'Ви говорите (ж. plural)',
            fr: 'Vous parlez (f. pl.)'
          },
          emoji: '🗣️',
          color: '#FEFCBF'
        },
        {
          word: 'Ellos hablan',
          translations: {
            en: 'They speak (m)',
            ar: 'هم يتحدثون',
            uk: 'Вони говорять (ч)',
            fr: 'Ils parlent'
          },
          emoji: '🗣️',
          color: '#E3EEF9'
        },
        {
          word: 'Ellas hablan',
          translations: {
            en: 'They speak (f)',
            ar: 'هن يتحدثن',
            uk: 'Вони говорять (ж)',
            fr: 'Elles parlent'
          },
          emoji: '🗣️',
          color: '#E3EEF9'
        },
        {
          word: 'Ustedes hablan',
          translations: {
            en: 'You all speak (formal)',
            ar: 'أنتم تتحدثون (للاحترام)',
            uk: 'Ви всі говорите (ввічливо)',
            fr: 'Vous parlez (pl. formel)'
          },
          emoji: '🗣️',
          color: '#EDF2F7'
        },
        {
          word: 'Yo como',
          translations: {
            en: 'I eat',
            ar: 'أنا آكل',
            uk: 'Я їм',
            fr: 'Je mange'
          },
          emoji: '🍽️',
          color: '#FFF4E5'
        },
        {
          word: 'Tú comes',
          translations: {
            en: 'You eat',
            ar: 'أنت تأكل',
            uk: 'Ти їси',
            fr: 'Tu manges'
          },
          emoji: '🍽️',
          color: '#FFF4E5'
        },
        {
          word: 'Él come',
          translations: {
            en: 'He eats',
            ar: 'هو يأكل',
            uk: 'Він їсть',
            fr: 'Il mange'
          },
          emoji: '🍽️',
          color: '#FFF4E5'
        },
        {
          word: 'Ella come',
          translations: {
            en: 'She eats',
            ar: 'هي تأكل',
            uk: 'Вона їсть',
            fr: 'Elle mange'
          },
          emoji: '🍽️',
          color: '#FFF4E5'
        },
        {
          word: 'Nosotros comemos',
          translations: {
            en: 'We eat',
            ar: 'نحن نأكل',
            uk: 'Ми їмо',
            fr: 'Nous mangeons'
          },
          emoji: '🍽️',
          color: '#E2F3E7'
        },
        {
          word: 'Vosotros coméis',
          translations: {
            en: 'You all eat',
            ar: 'أنتم تأكلون',
            uk: 'Ви їсте',
            fr: 'Vous mangez (pl.)'
          },
          emoji: '🍽️',
          color: '#FEFCBF'
        },
        {
          word: 'Ellos comen',
          translations: {
            en: 'They eat',
            ar: 'هم يأكلون',
            uk: 'Вони їдять',
            fr: 'Ils mangent'
          },
          emoji: '🍽️',
          color: '#E3EEF9'
        },
        {
          word: 'Yo vivo',
          translations: {
            en: 'I live',
            ar: 'أنا أعيش',
            uk: 'Я живу',
            fr: 'Je vis'
          },
          emoji: '🏠',
          color: '#E3EEF9'
        },
        {
          word: 'Tú vives',
          translations: {
            en: 'You live',
            ar: 'أنت تعيش',
            uk: 'Ти живеш',
            fr: 'Tu vis'
          },
          emoji: '🏠',
          color: '#E3EEF9'
        },
        {
          word: 'Él vive',
          translations: {
            en: 'He lives',
            ar: 'هو يعيش',
            uk: 'Він живе',
            fr: 'Il vit'
          },
          emoji: '🏠',
          color: '#E3EEF9'
        },
        {
          word: 'Nosotros vivimos',
          translations: {
            en: 'We live',
            ar: 'نحن نعيش',
            uk: 'Ми живемо',
            fr: 'Nous vivons'
          },
          emoji: '🏠',
          color: '#E2F3E7'
        },
        {
          word: 'Vosotros vivís',
          translations: {
            en: 'You all live',
            ar: 'أنتم تعيشون',
            uk: 'Ви живете',
            fr: 'Vous vivez'
          },
          emoji: '🏠',
          color: '#FEFCBF'
        },
        {
          word: 'Ellos viven',
          translations: {
            en: 'They live',
            ar: 'هم يعيشون',
            uk: 'Вони живуть',
            fr: 'Ils vivent'
          },
          emoji: '🏠',
          color: '#E3EEF9'
        },
        {
          word: 'Yo escribo',
          translations: {
            en: 'I write',
            ar: 'أنا أكتب',
            uk: 'Я пишу',
            fr: 'Je write'
          },
          emoji: '✍️',
          color: '#EDF2F7'
        },
        {
          word: 'Tú estudias',
          translations: {
            en: 'You study',
            ar: 'أنت تدرس',
            uk: 'Ти вчишся',
            fr: 'Tu étudies'
          },
          emoji: '📚',
          color: '#FEFCBF'
        },
        {
          word: 'Él corre',
          translations: {
            en: 'He runs',
            ar: 'هو يجري',
            uk: 'Він біжить',
            fr: 'Il court'
          },
          emoji: '🏃',
          color: '#EBF8FF'
        },
        {
          word: 'Nosotros dormimos',
          translations: {
            en: 'We sleep',
            ar: 'نحن ننام',
            uk: 'Ми спимо',
            fr: 'Nous dormons'
          },
          emoji: '🛌',
          color: '#E2F3E7'
        },
        {
          word: 'Ellos juegan',
          translations: {
            en: 'They play',
            ar: 'هم يلعبون',
            uk: 'Вони грають',
            fr: 'Ils jouent'
          },
          emoji: '⚽',
          color: '#E3EEF9'
        }
      ],
    content: `
## Los Pronombres Personales

Para hablar de quién hace la acción, usamos los pronombres personales. ¡Aprenderlos de memoria es súper importante!

*   **Yo** <trans en="(I)" ar="(أنا)" uk="(Я)" fr="(Je)"/>
*   **Tú** <trans en="(You)" ar="(أنت)" uk="(Ти)" fr="(Tu)"/>
*   **Él / Ella** <trans en="(He / She)" ar="(هو / هي)" uk="(Він/Вона)" fr="(Il/Elle)"/>
*   **Nosotros / Nosotras** <trans en="(We)" ar="(نحن)" uk="(Ми)" fr="(Nous)"/>
*   **Vosotros / Vosotras** <trans en="(You all)" ar="(أنتم)" uk="(Ви)" fr="(Vous)"/>
*   **Ellos / Ellas** <trans en="(They)" ar="(هم)" uk="(Вони)" fr="(Ils/Elles)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: `Cuando hablo de mí mismo <trans en='(When I talk about myself)' ar='(عندما أتحدث عن نفسي)' uk='(Коли я говорю про себе)' fr='(Quand je parle de moi-même)'/>, uso:`,
        options: ["Tú <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Yo <trans en=\"(Me)\" ar=\"(انا)\" uk=\"(Я)\" fr=\"(Moi)\"/>", "Él <trans en=\"(He)\" ar=\"(هو)\" uk=\"(Він)\" fr=\"(Il)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `Ana y yo <trans en='(Ana and I)' ar='(آنا وأنا)' uk='(Ана і я)' fr='(Ana et moi)'/> somos...`,
        options: ["Ellos <trans en=\"(They)\" ar=\"(هم)\" uk=\"(Вони)\" fr=\"(Ils)\"/>", "Vosotros <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex3",
        question: `Cuando hablo con mi amigo <trans en='(When I talk to my friend)' ar='(عندما أتحدث مع صديقي)' uk='(Коли я говорю зі своїм другом)' fr='(Quand je parle à mon ami)'/>, le digo:`,
        options: ["Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>", "Tú <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Él <trans en=\"(He)\" ar=\"(هو)\" uk=\"(Він)\" fr=\"(Il)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex4",
        question: `___ soy estudiante. <trans en="(___ I am a student.)" ar="(___ أنا طالب.)" uk="(___ Я студент.)" fr="(___ Je suis étudiant.)"/>`,
        options: ["Él <trans en=\"(He)\" ar=\"(هو)\" uk=\"(Він)\" fr=\"(Il)\"/>", "Tú <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Yo <trans en=\"(Me)\" ar=\"(انا)\" uk=\"(Я)\" fr=\"(Moi)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex5",
        question: `___ es mi amigo Carlos. <trans en="(___ is my friend Carlos.)" ar="(___ هو صديقي كارلوس.)" uk="(___ це мій друг Карлос.)" fr="(___ est mon ami Carlos.)"/>`,
        options: ["Ella <trans en=\"(She)\" ar=\"(هي)\" uk=\"(Вона)\" fr=\"(Elle)\"/>", "Él <trans en=\"(He)\" ar=\"(هو)\" uk=\"(Він)\" fr=\"(Il)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: `___ comemos paella. <trans en="(___ we eat paella.)" ar="(___ نحن نأكل الباييلا.)" uk="(___ ми їмо паелью.)" fr="(___ on mange de la paella.)"/>`,
        options: ["Ellos <trans en=\"(They)\" ar=\"(هم)\" uk=\"(Вони)\" fr=\"(Ils)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>", "Yo <trans en=\"(Me)\" ar=\"(انا)\" uk=\"(Я)\" fr=\"(Moi)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex7",
        question: `___ tienes un coche rojo. <trans en="(___ you have a red car.)" ar="(___ لديك سيارة حمراء.)" uk="(___ у вас червона машина.)" fr="(___ tu as une voiture rouge.)"/>`,
        options: ["Tú <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Él <trans en=\"(He)\" ar=\"(هو)\" uk=\"(Він)\" fr=\"(Il)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `___ son de Madrid. <trans en="(___ are from Madrid.)" ar="(___ من مدريد.)" uk="(___ з Мадрида.)" fr="(___ viennent de Madrid.)"/>`,
        options: ["Ellos <trans en=\"(They)\" ar=\"(هم)\" uk=\"(Вони)\" fr=\"(Ils)\"/>", "Él <trans en=\"(He)\" ar=\"(هو)\" uk=\"(Він)\" fr=\"(Il)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `___ (vosotros) sois hermanos. <trans en="(___ (you) are brothers.)" ar="(___ (أنتم) إخوة.)" uk="(___ (ви) брати.)" fr="(___ (vous) êtes frères.)"/>`,
        options: ["Vosotros <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>", "Ellos <trans en=\"(They)\" ar=\"(هم)\" uk=\"(Вони)\" fr=\"(Ils)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `___ es mi madre. <trans en="(___ is my mother.)" ar="(___ هي أمي.)" uk="(___ моя мама.)" fr="(___ est ma mère.)"/>`,
        options: ["Él <trans en=\"(He)\" ar=\"(هو)\" uk=\"(Він)\" fr=\"(Il)\"/>", "Ella <trans en=\"(She)\" ar=\"(هي)\" uk=\"(Вона)\" fr=\"(Elle)\"/>", "Yo <trans en=\"(Me)\" ar=\"(انا)\" uk=\"(Я)\" fr=\"(Moi)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: `Juan y yo somos estudiantes. ___ estudiamos español. <trans en="(Juan and I are students. ___ we study Spanish.)" ar="(أنا وخوان طلاب. ___ ندرس اللغة الإسبانية.)" uk="(Хуан і я студенти. ___ вивчаємо іспанську мову.)" fr="(Juan et moi sommes étudiants. ___ nous étudions l'espagnol.)"/>`,
        options: ["Ellos <trans en=\"(They)\" ar=\"(هم)\" uk=\"(Вони)\" fr=\"(Ils)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>", "Vosotros <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: `María y tú. ___ cantáis muy bien. <trans en="(Maria and you. ___ you sing very well.)" ar="(ماريا وأنت. ___ أنت تغني بشكل جيد للغاية.)" uk="(Марія і ти. ___ ти дуже гарно співаєш.)" fr="(Maria et toi. ___ tu chantes très bien.)"/>`,
        options: ["Ellas <trans en=\"(They)\" ar=\"(هم)\" uk=\"(Вони)\" fr=\"(Ils)\"/>", "Vosotros <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Nosotras <trans en=\"(We)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex13",
        question: `Luis y Pedro están allí. ___ son amigos. <trans en="(Luis and Pedro are there. ___ are friends.)" ar="(لويس وبيدرو هناك. ___ أصدقاء.)" uk="(Луїс і Педро там. ___ друзі.)" fr="(Luis et Pedro sont là. ___ sont amis.)"/>`,
        options: ["Ellos <trans en=\"(They)\" ar=\"(هم)\" uk=\"(Вони)\" fr=\"(Ils)\"/>", "Vosotros <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `___ tengo frío. <trans en="(___ I'm cold.)" ar="(___ أنا بارد.)" uk="(___ Мені холодно.)" fr="(___ J'ai froid.)"/>`,
        options: ["Yo <trans en=\"(Me)\" ar=\"(انا)\" uk=\"(Я)\" fr=\"(Moi)\"/>", "Él <trans en=\"(He)\" ar=\"(هو)\" uk=\"(Він)\" fr=\"(Il)\"/>", "Tú <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `___ eres simpático. <trans en="(___ you are nice.)" ar="(___ أنت لطيف.)" uk="(___ ти хороший.)" fr="(___ tu es gentil.)"/>`,
        options: ["Tú <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>", "Yo <trans en=\"(Me)\" ar=\"(انا)\" uk=\"(Я)\" fr=\"(Moi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `___ estamos cansados. <trans en="(___ we are tired.)" ar="(___ لقد تعبنا.)" uk="(___ ми втомилися.)" fr="(___ nous sommes fatigués.)"/>`,
        options: ["Vosotros <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Ellos <trans en=\"(They)\" ar=\"(هم)\" uk=\"(Вони)\" fr=\"(Ils)\"/>", "Nosotros <trans en=\"(Us)\" ar=\"(نحن)\" uk=\"(Ми)\" fr=\"(Nous)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex17",
        question: `___ habla italiano. <trans en="(___ speaks Italian.)" ar="(___ يتحدث الإيطالية.)" uk="(___ розмовляє італійською.)" fr="(___ parle italien.)"/>`,
        options: ["Él / Ella <trans en=\"(He/She)\" ar=\"(هو / هي)\" uk=\"(Він/вона)\" fr=\"(Il/Elle)\"/>", "Yo <trans en=\"(Me)\" ar=\"(انا)\" uk=\"(Я)\" fr=\"(Moi)\"/>", "Tú <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `___ vivo en Barcelona. <trans en="(___ I live in Barcelona.)" ar="(___ أعيش في برشلونة.)" uk="(___ Я живу в Барселоні.)" fr="(___ J'habite à Barcelone.)"/>`,
        options: ["Tú <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Yo <trans en=\"(Me)\" ar=\"(انا)\" uk=\"(Я)\" fr=\"(Moi)\"/>", "Ellos <trans en=\"(They)\" ar=\"(هم)\" uk=\"(Вони)\" fr=\"(Ils)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex19",
        question: `Paco, ___ eres muy alto. <trans en="(Paco, ___ you are very tall.)" ar="(باكو، ___ أنت طويل جدًا.)" uk="(Пако, ___ ти дуже високий.)" fr="(Paco, ___ tu es très grand.)"/>`,
        options: ["él <trans en=\"(he)\" ar=\"(هو)\" uk=\"(він)\" fr=\"(il)\"/>", "tú <trans en=\"(you)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu)\"/>", "yo <trans en=\"(me)\" ar=\"(انا)\" uk=\"(я)\" fr=\"(moi)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex20",
        question: `Mis padres no están, ___ están trabajando. <trans en="(My parents are not here, ___ are working.)" ar="(والدي ليسا هنا، ___ يعملون.)" uk="(Батьків тут немає, ___ працюють.)" fr="(Mes parents ne sont pas là, ___ travaillent.)"/>`,
        options: ["ellos <trans en=\"(them)\" ar=\"(لهم)\" uk=\"(їх)\" fr=\"(eux)\"/>", "nosotros <trans en=\"(us)\" ar=\"(نحن)\" uk=\"(ми)\" fr=\"(nous)\"/>", "vosotros <trans en=\"(you)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-gram-verbos",
    topic: "Verbos",
    title: "Verbos Básicos (Ser, Estar, Tener)",
    level: "A1",
    category: "Gramática",
    description: "Aprende los tres verbos más importantes en español para poder presentarte.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/verbos.png",
    color: "#E2E8F0",
    vocabulary: [
        {
          word: 'Yo soy estudiante',
          translations: {
            en: 'I am a student',
            ar: 'أنا طالب',
            uk: 'Я студент',
            fr: 'Je suis étudiant'
          },
          emoji: '🧑‍🎓',
          color: '#E3EEF9'
        },
        {
          word: 'Tú eres español',
          translations: {
            en: 'You are Spanish',
            ar: 'أنت إسباني',
            uk: 'Ти іспанець',
            fr: 'Tu es espagnol'
          },
          emoji: '🇪🇸',
          color: '#FFF5F5'
        },
        {
          word: 'Él es médico',
          translations: {
            en: 'He is a doctor',
            ar: 'هو طبيب',
            uk: 'Він лікар',
            fr: 'Il est médecin'
          },
          emoji: '👨‍⚕️',
          color: '#E2F3E7'
        },
        {
          word: 'Ella es simpática',
          translations: {
            en: 'She is nice',
            ar: 'هي لطيفة',
            uk: 'Вона симпатична',
            fr: 'Elle est sympa'
          },
          emoji: '😊',
          color: '#FFF5F5'
        },
        {
          word: 'Nosotros somos amigos',
          translations: {
            en: 'We are friends',
            ar: 'نحن أصدقاء',
            uk: 'Ми друзі',
            fr: 'Nous sommes amis'
          },
          emoji: '🤝',
          color: '#E2F3E7'
        },
        {
          word: 'Vosotros sois de Madrid',
          translations: {
            en: 'You all are from Madrid',
            ar: 'أنتم من مدريد',
            uk: 'Ви всі з Мадрида',
            fr: 'Vous êtes de Madrid'
          },
          emoji: '🏙️',
          color: '#FEFCBF'
        },
        {
          word: 'Ellos son ingenieros',
          translations: {
            en: 'They are engineers',
            ar: 'هم مهندسون',
            uk: 'Вони інженери',
            fr: 'Ils sont ingénieurs'
          },
          emoji: '👷',
          color: '#EDF2F7'
        },
        {
          word: 'Yo estoy en casa',
          translations: {
            en: 'I am at home',
            ar: 'أنا في المنزل',
            uk: 'Я вдома',
            fr: 'Je suis à la maison'
          },
          emoji: '🏠',
          color: '#E3EEF9'
        },
        {
          word: 'Tú estás cansado',
          translations: {
            en: 'You are tired',
            ar: 'أنت متعب',
            uk: 'Ти втомлений',
            fr: 'Tu es fatigué'
          },
          emoji: '🥱',
          color: '#EDF2F7'
        },
        {
          word: 'Él está feliz',
          translations: {
            en: 'He is happy',
            ar: 'هو سعيد',
            uk: 'Він щасливий',
            fr: 'Il est heureux'
          },
          emoji: '😊',
          color: '#FEFCBF'
        },
        {
          word: 'Ella está preocupada',
          translations: {
            en: 'She is worried',
            ar: 'هي قلقة',
            uk: 'Вона стурбована',
            fr: 'Elle est inquiète'
          },
          emoji: '😟',
          color: '#FFF5F5'
        },
        {
          word: 'Nosotros estamos listos',
          translations: {
            en: 'We are ready',
            ar: 'نحن مستعدون',
            uk: 'Ми готові',
            fr: 'Nous sommes prêts'
          },
          emoji: '👍',
          color: '#E2F3E7'
        },
        {
          word: 'Vosotros estáis en la escuela',
          translations: {
            en: 'You all are at school',
            ar: 'أنتم في المدرسة',
            uk: 'Ви в школі',
            fr: 'Vous êtes à l\'école'
          },
          emoji: '🏫',
          color: '#FEFCBF'
        },
        {
          word: 'Ellos están de viaje',
          translations: {
            en: 'They are traveling',
            ar: 'هم في رحلة',
            uk: 'Вони у подорожі',
            fr: 'Ils sont en voyage'
          },
          emoji: '✈️',
          color: '#E3EEF9'
        },
        {
          word: 'Yo tengo un coche',
          translations: {
            en: 'I have a car',
            ar: 'عندي سيارة',
            uk: 'У мене є машина',
            fr: 'J\'ai une voiture'
          },
          emoji: '🚗',
          color: '#FFF4E5'
        },
        {
          word: 'Tú tienes un libro',
          translations: {
            en: 'You have a book',
            ar: 'عندك كتاب',
            uk: 'У тебе є книга',
            fr: 'Tu as un livre'
          },
          emoji: '📘',
          color: '#FEFCBF'
        },
        {
          word: 'Él tiene una casa',
          translations: {
            en: 'He has a house',
            ar: 'عنده منزل',
            uk: 'У нього є будинок',
            fr: 'Il a une maison'
          },
          emoji: '🏠',
          color: '#E3EEF9'
        },
        {
          word: 'Ella tiene un perro',
          translations: {
            en: 'She has a dog',
            ar: 'عندها كلب',
            uk: 'У неї є собака',
            fr: 'Elle a un chien'
          },
          emoji: '🐶',
          color: '#FEFCBF'
        },
        {
          word: 'Nosotros tenemos hambre',
          translations: {
            en: 'We are hungry',
            ar: 'نحن جائعون',
            uk: 'Ми голодні',
            fr: 'Nous avons faim'
          },
          emoji: '🤤',
          color: '#FFF4E5'
        },
        {
          word: 'Vosotros tenéis sed',
          translations: {
            en: 'You all are thirsty',
            ar: 'أنتم عطشى',
            uk: 'Ви хочете пити',
            fr: 'Vous avez soif'
          },
          emoji: '🥛',
          color: '#FEFCBF'
        },
        {
          word: 'Ellos tienen frío',
          translations: {
            en: 'They are cold',
            ar: 'هم يشعرون بالبرد',
            uk: 'Їм холодно',
            fr: 'Ils ont froid'
          },
          emoji: '🥶',
          color: '#E3EEF9'
        },
        {
          word: 'Yo tengo 20 años',
          translations: {
            en: 'I am 20 years old',
            ar: 'عمري 20 سنة',
            uk: 'Мені 20 років',
            fr: 'J\'ai 20 ans'
          },
          emoji: '🔢',
          color: '#EDF2F7'
        },
        {
          word: 'Tú tienes sueño',
          translations: {
            en: 'You are sleepy',
            ar: 'أنت نعسان',
            uk: 'Ти хочеш спати',
            fr: 'Tu as sommeil'
          },
          emoji: '🥱',
          color: '#FEFCBF'
        },
        {
          word: 'Él tiene prisa',
          translations: {
            en: 'He is in a hurry',
            ar: 'هو مستعجل',
            uk: 'Він поспішає',
            fr: 'Il est pressé'
          },
          emoji: '⏰',
          color: '#EBF8FF'
        },
        {
          word: 'Nosotros tenemos calor',
          translations: {
            en: 'We are hot',
            ar: 'نحن نشعر بالحر',
            uk: 'Нам жарко',
            fr: 'Nous avons chaud'
          },
          emoji: '🥵',
          color: '#E2F3E7'
        },
        {
          word: 'Ellos tienen miedo',
          translations: {
            en: 'They are afraid',
            ar: 'هم خائفون',
            uk: 'Вони бояться',
            fr: 'Ils ont peur'
          },
          emoji: '😨',
          color: '#E3EEF9'
        },
        {
          word: 'Yo soy de Marruecos',
          translations: {
            en: 'I am from Morocco',
            ar: 'أنا من المغرب',
            uk: 'Я з Марокко',
            fr: 'Je suis du Maroc'
          },
          emoji: '🇲🇦',
          color: '#FFF5F5'
        },
        {
          word: 'Yo estoy alegre',
          translations: {
            en: 'I am cheerful',
            ar: 'أنا مبتهج',
            uk: 'Я веселий',
            fr: 'Je suis joyeux'
          },
          emoji: '😃',
          color: '#FEFCBF'
        },
        {
          word: 'Yo tengo prisa',
          translations: {
            en: 'I am in a hurry',
            ar: 'أنا مستعجل',
            uk: 'Я поспішаю',
            fr: 'Je suis pressé'
          },
          emoji: '⏰',
          color: '#EBF8FF'
        },
        {
          word: 'Nosotros somos una familia',
          translations: {
            en: 'We are a family',
            ar: 'نحن عائلة',
            uk: 'Ми сім\'я',
            fr: 'Nous sommes une famille'
          },
          emoji: '👨‍👩‍👧‍👦',
          color: '#E2F3E7'
        }
      ],
    content: `
## Verbos muy importantes: Ser, Estar y Tener

Aprender la conjugación (la forma) es esencial para comunicarte en español. A continuación tienes las tablas de conjugación completas en Presente de Indicativo.

### 1. Verbo SER <trans en="(Identity / To be)" ar="(الهوية / يكون)" uk="(Ідентичність / Бути)" fr="(Identité / Être)"/>
Se usa para identidad, origen, nacionalidad y profesión.
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Conjugación</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">soy</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Yo soy Ana.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I am Ana.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">eres</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Tú eres estudiante.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You are a student.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">es</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Él es de África.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">He is from Africa.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">somos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Nosotros somos amigos.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We are friends.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">sois</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Vosotros sois de España.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You all are from Spain.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">son</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Ellos son ingenieros.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They are engineers.</td></tr></tbody></table></div>
---

### 2. Verbo ESTAR <trans en="(Location or Emotion / To be)" ar="(المكان أو العاطفة / يكون)" uk="(Місце або Емоція / Бути)" fr="(Lieu ou Émotion / Être)"/>
Se usa para estados temporales, emociones y localización.
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Conjugación</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">estoy</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Yo estoy feliz.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I am happy.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">estás</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Tú estás en España.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You are in Spain.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">está</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Él está cansado.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">He is tired.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">estamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Nosotros estamos en clase.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We are in class.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">estáis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Vosotros estáis listos.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You all are ready.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">están</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Ellos están tristes.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They are sad.</td></tr></tbody></table></div>
---

### 3. Verbo TENER <trans en="(To have)" ar="(يملك)" uk="(Мати)" fr="(Avoir)"/>
Se usa para posesión y para expresar la edad en español.
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Conjugación</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">tengo</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Yo tengo 30 años.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I am 30 years old.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">tienes</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Tú tienes hambre.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You are hungry.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">tiene</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Él tiene un coche.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">He has a car.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">tenemos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Nosotros tenemos calor.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We are hot.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">tenéis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Vosotros tenéis sed.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You all are thirsty.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">tienen</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Ellos tienen prisa.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They are in a hurry.</td></tr></tbody></table></div>
    `,
    exercises: [
      {
        id: "ex1",
        question: `Completa: 'Yo _______ feliz hoy.' <trans en="(Complete: 'I _______ happy today.')" ar="(أكمل: "أنا _______ سعيد اليوم.")" uk="(Заповніть: «Сьогодні я _______ щасливий».)" fr="(Compléter : 'Je _______ heureux aujourd'hui.')"/>`,
        options: ["soy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "tengo <trans en=\"(I have)\" ar=\"(لقد)\" uk=\"(Маю)\" fr=\"(j'ai)\"/>", "estoy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: `Completa: 'Ella _______ de Senegal.' <trans en="(Complete: 'She _______ from Senegal.')" ar="(أكمل: "هي _______ من السنغال.")" uk="(Заповніть: «Вона _______ із Сенегалу».)" fr="(Compléter : "Elle _______ du Sénégal.")"/>`,
        options: ["es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>", "está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Completa: 'Nosotros _______ 20 años.' <trans en="(Complete: 'We _______ 20 years.')" ar="(أكمل: 'نحن _______ 20 عامًا.')" uk="(Заповніть: «Нам _______ 20 років».)" fr="(Compléter : « Nous _______ 20 ans. »)"/>`,
        options: ["somos <trans en=\"(we are)\" ar=\"(نحن)\" uk=\"(ми)\" fr=\"(nous sommes)\"/>", "estamos <trans en=\"(we are)\" ar=\"(نحن)\" uk=\"(ми)\" fr=\"(nous sommes)\"/>", "tenemos <trans en=\"(we have)\" ar=\"(لدينا)\" uk=\"(маємо)\" fr=\"(nous avons)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex4",
        question: `Yo ___ español. <trans en="(I ___ Spanish.)" ar="(أنا ___ الإسبانية.)" uk="(Я ___ іспанська.)" fr="(Je ___ espagnol.)"/>`,
        options: ["soy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "estoy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "hablo <trans en=\"(I speak)\" ar=\"(اتكلم)\" uk=\"(Я говорю)\" fr=\"(je parle)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex5",
        question: `Tú ___ en casa. <trans en="(You ___ at home.)" ar="(أنت ___ في المنزل.)" uk="(Ви ___ вдома.)" fr="(Vous ___ à la maison.)"/>`,
        options: ["eres <trans en=\"(you are)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu es)\"/>", "estás <trans en=\"(you are)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu es)\"/>", "tienes <trans en=\"(you have)\" ar=\"(لديك)\" uk=\"(маєш)\" fr=\"(tu as)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: `Él ___ 20 años. <trans en="(He ___ 20 years old.)" ar="(هو ___ 20 سنة.)" uk="(Йому ___ 20 років.)" fr="(Il ___ 20 ans.)"/>`,
        options: ["es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>", "está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex7",
        question: `Nosotros ___ estudiantes. <trans en="(We ___ students.)" ar="(نحن ___ الطلاب.)" uk="(Ми ___ студенти.)" fr="(Nous ___ étudiants.)"/>`,
        options: ["somos <trans en=\"(we are)\" ar=\"(نحن)\" uk=\"(ми)\" fr=\"(nous sommes)\"/>", "estamos <trans en=\"(we are)\" ar=\"(نحن)\" uk=\"(ми)\" fr=\"(nous sommes)\"/>", "tenemos <trans en=\"(we have)\" ar=\"(لدينا)\" uk=\"(маємо)\" fr=\"(nous avons)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Ellos ___ hambre. <trans en="(They ___ hungry.)" ar="(إنهم ___ جائعون.)" uk="(Вони ___ голодні.)" fr="(Ils ___ ont faim.)"/>`,
        options: ["son <trans en=\"(are)\" ar=\"(هي)\" uk=\"(є)\" fr=\"(sont)\"/>", "tienen <trans en=\"(have)\" ar=\"(لديك)\" uk=\"(мати)\" fr=\"(avoir)\"/>", "están <trans en=\"(are)\" ar=\"(هي)\" uk=\"(є)\" fr=\"(sont)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex9",
        question: `Yo ___ muy feliz hoy. <trans en="(I ___ very happy today.)" ar="(أنا ___ سعيد جدًا اليوم.)" uk="(Я ___ сьогодні дуже щасливий.)" fr="(Je ___ très heureux aujourd'hui.)"/>`,
        options: ["estoy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "soy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "tengo <trans en=\"(I have)\" ar=\"(لقد)\" uk=\"(Маю)\" fr=\"(j'ai)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Ella ___ doctora. <trans en="(She ___ doctor.)" ar="(هي ___ دكتورة.)" uk="(Вона ___ лікар.)" fr="(Elle ___ docteur.)"/>`,
        options: ["está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>", "es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex11",
        question: `¿Dónde ___ el baño? <trans en="(Where ___ the bathroom?)" ar="(أين ___ الحمام؟)" uk="(Де ___ ванна?)" fr="(Où ___ la salle de bain ?)"/>`,
        options: ["es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: `Tú ___ un perro. <trans en="(You ___ a dog.)" ar="(أنت ___ كلب.)" uk="(Ти ___ собака.)" fr="(Vous ___ un chien.)"/>`,
        options: ["eres <trans en=\"(you are)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu es)\"/>", "estás <trans en=\"(you are)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu es)\"/>", "tienes <trans en=\"(you have)\" ar=\"(لديك)\" uk=\"(маєш)\" fr=\"(tu as)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex13",
        question: `Nosotros ___ sed. <trans en="(We ___ thirsty.)" ar="(نحن ___ عطشان.)" uk="(Ми ___ хочемо спраги.)" fr="(Nous ___ avons soif.)"/>`,
        options: ["somos <trans en=\"(we are)\" ar=\"(نحن)\" uk=\"(ми)\" fr=\"(nous sommes)\"/>", "tenemos <trans en=\"(we have)\" ar=\"(لدينا)\" uk=\"(маємо)\" fr=\"(nous avons)\"/>", "estamos <trans en=\"(we are)\" ar=\"(نحن)\" uk=\"(ми)\" fr=\"(nous sommes)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex14",
        question: `La mesa ___ de madera. <trans en="(The ___ wooden table.)" ar="(الطاولة ___ الخشبية.)" uk="(Дерев'яний стіл ___.)" fr="(La table ___ en bois.)"/>`,
        options: ["es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `La sopa ___ caliente. <trans en="(The soup ___ hot.)" ar="(الشوربة ___ ساخنة.)" uk="(Суп ___ гарячий.)" fr="(La soupe ___ chaude.)"/>`,
        options: ["es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex16",
        question: `Yo ___ dos hermanos. <trans en="(I ___ two brothers.)" ar="(أنا ___ شقيقان.)" uk="(Я ___ два брати.)" fr="(Je ___ deux frères.)"/>`,
        options: ["soy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "tengo <trans en=\"(I have)\" ar=\"(لقد)\" uk=\"(Маю)\" fr=\"(j'ai)\"/>", "estoy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex17",
        question: `Vosotros ___ de México. <trans en="(You ___ from Mexico.)" ar="(أنت ___ من المكسيك.)" uk="(Ви ___ з Мексики.)" fr="(Vous ___ du Mexique.)"/>`,
        options: ["sois <trans en=\"(you are)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu es)\"/>", "estáis <trans en=\"(you are)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu es)\"/>", "tenéis <trans en=\"(you have)\" ar=\"(لديك)\" uk=\"(маєш)\" fr=\"(tu as)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Hoy ___ lunes. <trans en="(Today ___ Monday.)" ar="(اليوم ___ الاثنين.)" uk="(Сьогодні ___ понеділок.)" fr="(Aujourd'hui ___ lundi.)"/>`,
        options: ["es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `¿Qué hora ___? <trans en="(What time ___?)" ar="(في أي وقت ___؟)" uk="(О котрій годині ___?)" fr="(À quelle heure ___ ?)"/>`,
        options: ["está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>", "es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex20",
        question: `Yo ___ enfermo. <trans en="(I ___ sick.)" ar="(أنا ___ مريض.)" uk="(Я ___ хворий.)" fr="(Je ___ malade.)"/>`,
        options: ["soy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "estoy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "tengo <trans en=\"(I have)\" ar=\"(لقد)\" uk=\"(Маю)\" fr=\"(j'ai)\"/>"],
        correctAnswer: 1
      }
    
    ]
  },
  {
    id: "a1-vocab-ropa",
    topic: "Ropa",
    title: "Vocabulario: La Ropa",
    level: "A1",
    category: "Vocabulario",
    description: "¿Qué te pones cada día? Aprende palabras como camisa, pantalones y zapatos.",
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/ropa.png",
    color: "#E2E8F0",
    vocabulary: [
        {
          word: 'La camiseta',
          translations: {
            en: 'T-Shirt',
            ar: 'قميص',
            uk: 'Футболка',
            fr: 'T-shirt'
          },
          emoji: '👕',
          color: '#EDF2F7'
        },
        {
          word: 'El pantalón',
          translations: {
            en: 'Pants',
            ar: 'سروال',
            uk: 'Штани',
            fr: 'Pantalon'
          },
          emoji: '👖',
          color: '#EDF2F7'
        },
        {
          word: 'Los zapatos',
          translations: {
            en: 'Shoes',
            ar: 'حذاء',
            uk: 'Взуття',
            fr: 'Chaussures'
          },
          emoji: '👟',
          color: '#EDF2F7'
        },
        {
          word: 'La chaqueta',
          translations: {
            en: 'Jacket',
            ar: 'سترة',
            uk: 'Куртка',
            fr: 'Veste'
          },
          emoji: '🧥',
          color: '#EDF2F7'
        },
        {
          word: 'La falda',
          translations: {
            en: 'Skirt',
            ar: 'تنورة',
            uk: 'Спідниця',
            fr: 'Jupe'
          },
          emoji: '👗',
          color: '#EDF2F7'
        },
        {
          word: 'El abrigo',
          translations: {
            en: 'Coat',
            ar: 'معطف',
            uk: 'Пальто',
            fr: 'Manteau'
          },
          emoji: '🧥',
          color: '#EDF2F7'
        },
        {
          word: 'El vestido',
          translations: {
            en: 'Dress',
            ar: 'فستان',
            uk: 'Сукня',
            fr: 'Robe'
          },
          emoji: '👗',
          color: '#EDF2F7'
        },
        {
          word: 'La camisa',
          translations: {
            en: 'Shirt',
            ar: 'قميص رجالي',
            uk: 'Сорочка',
            fr: 'Chemise'
          },
          emoji: '👔',
          color: '#EDF2F7'
        },
        {
          word: 'El calcetín',
          translations: {
            en: 'Sock',
            ar: 'جورب',
            uk: 'Шкарпетка',
            fr: 'Chaussette'
          },
          emoji: '🧦',
          color: '#EDF2F7'
        },
        {
          word: 'La bufanda',
          translations: {
            en: 'Scarf',
            ar: 'وشاح',
            uk: 'Шарф',
            fr: 'Écharpe'
          },
          emoji: '🧣',
          color: '#EDF2F7'
        },
        {
          word: 'El sombrero',
          translations: {
            en: 'Hat',
            ar: 'قبعة',
            uk: 'Капелюх',
            fr: 'Chapeau'
          },
          emoji: '🎩',
          color: '#EDF2F7'
        },
        {
          word: 'Los guantes',
          translations: {
            en: 'Gloves',
            ar: 'قفازات',
            uk: 'Рукавички',
            fr: 'Gants'
          },
          emoji: '🧤',
          color: '#EDF2F7'
        },
        {
          word: 'El cinturón',
          translations: {
            en: 'Belt',
            ar: 'حزام',
            uk: 'Ремінь',
            fr: 'Ceinture'
          },
          emoji: '🎿',
          color: '#EDF2F7'
        },
        {
          word: 'La corbata',
          translations: {
            en: 'Tie',
            ar: 'ربطة عنق',
            uk: 'Краватка',
            fr: 'Cravate'
          },
          emoji: '👔',
          color: '#EDF2F7'
        },
        {
          word: 'Las sandalias',
          translations: {
            en: 'Sandals',
            ar: 'صندل',
            uk: 'Сандалії',
            fr: 'Sandales'
          },
          emoji: '🩴',
          color: '#EDF2F7'
        },
        {
          word: 'Las botas',
          translations: {
            en: 'Boots',
            ar: 'أحذية طويلة',
            uk: 'Чоботи',
            fr: 'Bottes'
          },
          emoji: '🥾',
          color: '#EDF2F7'
        },
        {
          word: 'La gorra',
          translations: {
            en: 'Cap',
            ar: 'قبعة رياضية',
            uk: 'Кепка',
            fr: 'Casquette'
          },
          emoji: '🧢',
          color: '#EDF2F7'
        },
        {
          word: 'El pijama',
          translations: {
            en: 'Pajamas',
            ar: 'ملابس النوم',
            uk: 'Піжама',
            fr: 'Pyjama'
          },
          emoji: '🛌',
          color: '#EDF2F7'
        },
        {
          word: 'El bañador',
          translations: {
            en: 'Swimsuit',
            ar: 'ملابس السباحة',
            uk: 'Купальник',
            fr: 'Maillot de bain'
          },
          emoji: '🩱',
          color: '#EDF2F7'
        },
        {
          word: 'Las gafas',
          translations: {
            en: 'Glasses',
            ar: 'نظارات',
            uk: 'Окуляри',
            fr: 'Lunettes'
          },
          emoji: '👓',
          color: '#EDF2F7'
        },
        {
          word: 'El paraguas',
          translations: {
            en: 'Umbrella',
            ar: 'مظلة',
            uk: 'Парасолька',
            fr: 'Parapluie'
          },
          emoji: '☂️',
          color: '#EDF2F7'
        },
        {
          word: 'El bolso',
          translations: {
            en: 'Handbag',
            ar: 'حقيبة يد',
            uk: 'Сумка',
            fr: 'Sac à main'
          },
          emoji: '👜',
          color: '#EDF2F7'
        },
        {
          word: 'La sudadera',
          translations: {
            en: 'Hoodie / Sweatshirt',
            ar: 'سترة رياضية',
            uk: 'Толстовка',
            fr: 'Sweat à capuche'
          },
          emoji: '🧥',
          color: '#EDF2F7'
        },
        {
          word: 'El chaleco',
          translations: {
            en: 'Vest',
            ar: 'سترة بدون أكمام',
            uk: 'Жилет',
            fr: 'Gilet'
          },
          emoji: '🦺',
          color: '#EDF2F7'
        },
        {
          word: 'Los pantalones cortos',
          translations: {
            en: 'Shorts',
            ar: 'سروal قصير',
            uk: 'Шорти',
            fr: 'Short'
          },
          emoji: '🩳',
          color: '#EDF2F7'
        },
        {
          word: 'La ropa interior',
          translations: {
            en: 'Underwear',
            ar: 'ملابس داخلية',
            uk: 'Нижня білизна',
            fr: 'Sous-vêtements'
          },
          emoji: '🩲',
          color: '#EDF2F7'
        },
        {
          word: 'El traje',
          translations: {
            en: 'Suit',
            ar: 'بدلة',
            uk: 'Костім',
            fr: 'Costume'
          },
          emoji: '🕴️',
          color: '#EDF2F7'
        },
        {
          word: 'El impermeable',
          translations: {
            en: 'Raincoat',
            ar: 'معطف واق من المطر',
            uk: 'Дощовик',
            fr: 'Imperméable'
          },
          emoji: '🧥',
          color: '#EDF2F7'
        },
        {
          word: 'La bata',
          translations: {
            en: 'Robe',
            ar: 'رداء الحمام',
            uk: 'Халат',
            fr: 'Peignoir'
          },
          emoji: '🧥',
          color: '#EDF2F7'
        },
        {
          word: 'Los pendientes',
          translations: {
            en: 'Earrings',
            ar: 'أقراط',
            uk: 'Сережки',
            fr: 'Boucles d\'oreilles'
          },
          emoji: '💎',
          color: '#EDF2F7'
        }
      ],
    content: `
## Las prendas de vestir
    `,
    exercises: [
      {
        id: "ex1",
        question: `Si hace frío <trans en="(cold)" ar="(بارد)" uk="(холодно)" fr="(froid)"/>, te pones:`,
        options: ["Una camiseta corta <trans en=\"(A short T-shirt)\" ar=\"(تيشيرت قصير)\" uk=\"(Коротка футболка)\" fr=\"(Un tee-shirt court)\"/>", "Una chaqueta <trans en=\"(A jacket)\" ar=\"(سترة)\" uk=\"(Куртка)\" fr=\"(Une veste)\"/>", "Un pantalón corto <trans en=\"(A pair of shorts)\" ar=\"(زوج من السراويل)\" uk=\"(Шорти)\" fr=\"(Un short)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `Me pongo la ___ en la cabeza. <trans en="(I put the ___ on my head.)" ar="(أضع ___ على رأسي.)" uk="(Я одягнув ___ на голову.)" fr="(J'ai mis le ___ sur ma tête.)"/>`,
        options: ["Gorra <trans en=\"(Cap)\" ar=\"(كاب)\" uk=\"(Кап)\" fr=\"(Casquette)\"/>", "Bufanda <trans en=\"(Scarf)\" ar=\"(وشاح)\" uk=\"(Шарф)\" fr=\"(Écharpe)\"/>", "Camiseta <trans en=\"(T-shirt)\" ar=\"(تي شيرت)\" uk=\"(Футболка)\" fr=\"(T-shirt)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Llevo los ___ en las piernas. <trans en="(I wear the ___ on my legs.)" ar="(أرتدي ___ على ساقي.)" uk="(Я ношу ___ на ногах.)" fr="(Je porte le ___ sur mes jambes.)"/>`,
        options: ["Pantalones <trans en=\"(Pants)\" ar=\"(السراويل)\" uk=\"(Штани)\" fr=\"(Pantalon)\"/>", "Guantes <trans en=\"(Gloves)\" ar=\"(قفازات)\" uk=\"(Рукавички)\" fr=\"(Gants)\"/>", "Zapatos <trans en=\"(Shoes)\" ar=\"(أحذية)\" uk=\"(Взуття)\" fr=\"(Chaussures)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `En invierno uso una ___ para el frío. <trans en="(In winter I use a ___ for the cold.)" ar="(في الشتاء أستخدم ___ للبرد.)" uk="(Взимку я використовую ___ для холоду.)" fr="(En hiver j'utilise un ___ pour le froid.)"/>`,
        options: ["Chaqueta <trans en=\"(Jacket)\" ar=\"(سترة)\" uk=\"(Куртка)\" fr=\"(Veste)\"/>", "Camiseta <trans en=\"(T-shirt)\" ar=\"(تي شيرت)\" uk=\"(Футболка)\" fr=\"(T-shirt)\"/>", "Falda <trans en=\"(Skirt)\" ar=\"(تنورة)\" uk=\"(Спідниця)\" fr=\"(Jupe)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Me pongo los ___ en los pies. <trans en="(I put the ___ on my feet.)" ar="(أضع ___ على قدمي.)" uk="(Я поставив ___ на ноги.)" fr="(J'ai mis le ___ sur mes pieds.)"/>`,
        options: ["Sombreros <trans en=\"(Hats)\" ar=\"(القبعات)\" uk=\"(Головні убори)\" fr=\"(Chapeaux)\"/>", "Zapatos <trans en=\"(Shoes)\" ar=\"(أحذية)\" uk=\"(Взуття)\" fr=\"(Chaussures)\"/>", "Cinturones <trans en=\"(Belts)\" ar=\"(أحزمة)\" uk=\"(Ремені)\" fr=\"(Ceintures)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: `Para nadar uso el ___. <trans en="(To swim I use the ___.)" ar="(للسباحة أستخدم ___.)" uk="(Для плавання я використовую ___.)" fr="(Pour nager j'utilise le ___.)"/>`,
        options: ["Bañador <trans en=\"(Swimsuit)\" ar=\"(ملابس السباحة)\" uk=\"(Купальник)\" fr=\"(Maillot de bain)\"/>", "Abrigo <trans en=\"(Coat)\" ar=\"(معطف)\" uk=\"(Пальто)\" fr=\"(Manteau)\"/>", "Vestido <trans en=\"(Dress)\" ar=\"(فستان)\" uk=\"(Сукня)\" fr=\"(Robe)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Para dormir me pongo el ___. <trans en="(To sleep I wear ___.)" ar="(للنوم أرتدي ___.)" uk="(Для сну я одягаю ___.)" fr="(Pour dormir, je porte ___.)"/>`,
        options: ["Pijama <trans en=\"(Pajamas)\" ar=\"(بيجامة)\" uk=\"(Піжами)\" fr=\"(Pyjamas)\"/>", "Vaquero <trans en=\"(Cowboy)\" ar=\"(كاوبوي)\" uk=\"(Ковбой)\" fr=\"(Cowboy)\"/>", "Jersey <trans en=\"(Jersey)\" ar=\"(جيرسي)\" uk=\"(Джерсі)\" fr=\"(Jersey)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Llevo una ___ en el cuello porque hace frío. <trans en="(I wear a ___ on my neck because it's cold.)" ar="(أرتدي ___ على رقبتي لأن الجو بارد.)" uk="(Я ношу ___ на шиї, бо холодно.)" fr="(Je porte un ___ au cou parce qu'il fait froid.)"/>`,
        options: ["Bufanda <trans en=\"(Scarf)\" ar=\"(وشاح)\" uk=\"(Шарф)\" fr=\"(Écharpe)\"/>", "Corbata <trans en=\"(Tie)\" ar=\"(ربطة عنق)\" uk=\"(Краватка)\" fr=\"(Cravate)\"/>", "Gorra <trans en=\"(Cap)\" ar=\"(كاب)\" uk=\"(Кап)\" fr=\"(Casquette)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Uso ___ en las manos en invierno. <trans en="(I use ___ on my hands in winter.)" ar="(أستخدم ___ على يدي في الشتاء.)" uk="(Я використовую ___ на руках взимку.)" fr="(J'utilise ___ sur mes mains en hiver.)"/>`,
        options: ["Guantes <trans en=\"(Gloves)\" ar=\"(قفازات)\" uk=\"(Рукавички)\" fr=\"(Gants)\"/>", "Calcetines <trans en=\"(Socks)\" ar=\"(الجوارب)\" uk=\"(Шкарпетки)\" fr=\"(Chaussettes)\"/>", "Zapatos <trans en=\"(Shoes)\" ar=\"(أحذية)\" uk=\"(Взуття)\" fr=\"(Chaussures)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Llevo ___ debajo de los zapatos. <trans en="(I wear ___ under my shoes.)" ar="(أرتدي ___ تحت حذائي.)" uk="(Я ношу ___ під взуттям.)" fr="(Je porte ___ sous mes chaussures.)"/>`,
        options: ["Calcetines <trans en=\"(Socks)\" ar=\"(الجوارب)\" uk=\"(Шкарпетки)\" fr=\"(Chaussettes)\"/>", "Guantes <trans en=\"(Gloves)\" ar=\"(قفازات)\" uk=\"(Рукавички)\" fr=\"(Gants)\"/>", "Bufandas <trans en=\"(Scarves)\" ar=\"(الأوشحة)\" uk=\"(Шарфи)\" fr=\"(Foulards)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Las mujeres a veces llevan una ___ en lugar de pantalones. <trans en="(Women sometimes wear a ___ instead of pants.)" ar="(ترتدي النساء أحيانًا ___ بدلاً من السراويل.)" uk="(Жінки іноді носять ___ замість штанів.)" fr="(Les femmes portent parfois un ___ au lieu d'un pantalon.)"/>`,
        options: ["Falda <trans en=\"(Skirt)\" ar=\"(تنورة)\" uk=\"(Спідниця)\" fr=\"(Jupe)\"/>", "Camisa <trans en=\"(Shirt)\" ar=\"(قميص)\" uk=\"(Сорочка)\" fr=\"(Chemise)\"/>", "Gorra <trans en=\"(Cap)\" ar=\"(كاب)\" uk=\"(Кап)\" fr=\"(Casquette)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `Un ___ es muy elegante para una boda. <trans en="(A ___ is very elegant for a wedding.)" ar="(A ___ أنيق جدًا لحفل الزفاف.)" uk="(___ дуже елегантний варіант для весілля.)" fr="(Un ___ est très élégant pour un mariage.)"/>`,
        options: ["Traje <trans en=\"(Suit)\" ar=\"(البدلة)\" uk=\"(Костюм)\" fr=\"(Costume)\"/>", "Pijama <trans en=\"(Pajamas)\" ar=\"(بيجامة)\" uk=\"(Піжами)\" fr=\"(Pyjamas)\"/>", "Bañador <trans en=\"(Swimsuit)\" ar=\"(ملابس السباحة)\" uk=\"(Купальник)\" fr=\"(Maillot de bain)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Llevo una ___ de manga corta en verano. <trans en="(I wear a short-sleeved ___ in summer.)" ar="(أرتدي ___ بأكمام قصيرة في الصيف.)" uk="(Влітку я ношу ___ з короткими рукавами.)" fr="(Je porte un ___ à manches courtes en été.)"/>`,
        options: ["Camiseta <trans en=\"(T-shirt)\" ar=\"(تي شيرت)\" uk=\"(Футболка)\" fr=\"(T-shirt)\"/>", "Bufanda <trans en=\"(Scarf)\" ar=\"(وشاح)\" uk=\"(Шарф)\" fr=\"(Écharpe)\"/>", "Chaqueta <trans en=\"(Jacket)\" ar=\"(سترة)\" uk=\"(Куртка)\" fr=\"(Veste)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Los pantalones que usamos mucho se llaman... <trans en="(The pants that we wear a lot are called...)" ar="(البنطلون الذي نرتديه كثيراً يسمى...)" uk="(Штани, які ми часто носимо, називаються...)" fr="(Les pantalons que l'on porte beaucoup s'appellent...)"/>`,
        options: ["Vaqueros <trans en=\"(Jeans)\" ar=\"(جينز)\" uk=\"(Джинси)\" fr=\"(Jeans)\"/>", "Camisas <trans en=\"(Shirts)\" ar=\"(قمصان)\" uk=\"(Сорочки)\" fr=\"(Chemises)\"/>", "Zapatos <trans en=\"(Shoes)\" ar=\"(أحذية)\" uk=\"(Взуття)\" fr=\"(Chaussures)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Para hacer deporte uso... <trans en="(To play sports I use...)" ar="(لممارسة الرياضة أستخدم...)" uk="(Для занять спортом використовую...)" fr="(Pour faire du sport j'utilise...)"/>`,
        options: ["Ropa deportiva / Chándal <trans en=\"(Sportswear / Tracksuit)\" ar=\"(ملابس رياضية/بدلة رياضية)\" uk=\"(Спортивний одяг / Спортивний костюм)\" fr=\"(Vêtements de sport / Survêtement)\"/>", "Traje <trans en=\"(Suit)\" ar=\"(البدلة)\" uk=\"(Костюм)\" fr=\"(Costume)\"/>", "Vestido <trans en=\"(Dress)\" ar=\"(فستان)\" uk=\"(Сукня)\" fr=\"(Robe)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Se pone en la cintura para sujetar el pantalón: <trans en="(It is placed at the waist to hold the pants:)" ar="(يوضع عند الخصر لتثبيت البنطلون :)" uk="(Розміщується на талії, щоб утримувати штани:)" fr="(Il se place à la taille pour maintenir le pantalon :)"/>`,
        options: ["Cinturón <trans en=\"(Belt)\" ar=\"(الحزام)\" uk=\"(Пояс)\" fr=\"(Ceinture)\"/>", "Corbata <trans en=\"(Tie)\" ar=\"(ربطة عنق)\" uk=\"(Краватка)\" fr=\"(Cravate)\"/>", "Bufanda <trans en=\"(Scarf)\" ar=\"(وشاح)\" uk=\"(Шарф)\" fr=\"(Écharpe)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Para no mojarme si llueve, uso un... <trans en="(To avoid getting wet if it rains, I use a...)" ar="(لتجنب البلل في حالة هطول المطر، أستخدم...)" uk="(Щоб не промокнути під час дощу, я використовую...)" fr="(Pour éviter de me mouiller s'il pleut, j'utilise un...)"/>`,
        options: ["Impermeable <trans en=\"(Waterproof)\" ar=\"(مقاوم للماء)\" uk=\"(Водонепроникний)\" fr=\"(Étanche)\"/>", "Bañador <trans en=\"(Swimsuit)\" ar=\"(ملابس السباحة)\" uk=\"(Купальник)\" fr=\"(Maillot de bain)\"/>", "Pijama <trans en=\"(Pajamas)\" ar=\"(بيجامة)\" uk=\"(Піжами)\" fr=\"(Pyjamas)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Las ___ son calzado abierto para el verano. <trans en="(The ___ are open shoes for summer.)" ar="(___ أحذية مفتوحة للصيف.)" uk="(___ — відкрите літнє взуття.)" fr="(Les ___ sont des chaussures ouvertes pour l'été.)"/>`,
        options: ["Sandalias <trans en=\"(Sandals)\" ar=\"(صنادل)\" uk=\"(Босоніжки)\" fr=\"(Sandales)\"/>", "Botas <trans en=\"(Boots)\" ar=\"(أحذية)\" uk=\"(Черевики)\" fr=\"(Bottes)\"/>", "Zapatillas deportivas <trans en=\"(Sports shoes)\" ar=\"(احذية رياضية)\" uk=\"(Спортивне взуття)\" fr=\"(Chaussures de sport)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `Me pongo la ___ en la cabeza. (Extra) <trans en="(I put the ___ on my head. (Bonus))" ar="(أضع ___ على رأسي. (مكافأة))" uk="(Я одягнув ___ на голову. (Бонус))" fr="(J'ai mis le ___ sur ma tête. (Prime))"/>`,
        options: ["Gorra <trans en=\"(Cap)\" ar=\"(كاب)\" uk=\"(Кап)\" fr=\"(Casquette)\"/>", "Bufanda <trans en=\"(Scarf)\" ar=\"(وشاح)\" uk=\"(Шарф)\" fr=\"(Écharpe)\"/>", "Camiseta <trans en=\"(T-shirt)\" ar=\"(تي شيرت)\" uk=\"(Футболка)\" fr=\"(T-shirt)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Llevo los ___ en las piernas. (Extra) <trans en="(I wear the ___ on my legs. (Bonus))" ar="(أرتدي ___ على ساقي. (مكافأة))" uk="(Я ношу ___ на ногах. (Бонус))" fr="(Je porte le ___ sur mes jambes. (Prime))"/>`,
        options: ["Pantalones <trans en=\"(Pants)\" ar=\"(السراويل)\" uk=\"(Штани)\" fr=\"(Pantalon)\"/>", "Guantes <trans en=\"(Gloves)\" ar=\"(قفازات)\" uk=\"(Рукавички)\" fr=\"(Gants)\"/>", "Zapatos <trans en=\"(Shoes)\" ar=\"(أحذية)\" uk=\"(Взуття)\" fr=\"(Chaussures)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-gram-genero",
    topic: "Gramática",
    title: "Género: Masculino y Femenino",
    level: "A1",
    category: "Gramática",
    description: "Aprende las reglas básicas para saber si una palabra es masculina (termina en 'o') o femenina (termina en 'a'), y algunas excepciones.",
    imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/genero.png",
    color: "#E2F3E7",
    vocabulary: [
        {
          word: 'El niño',
          translations: {
            en: 'The boy',
            ar: 'الولد',
            uk: 'Хлопчик',
            fr: 'Le garçon'
          },
          emoji: '👦',
          color: '#EBF8FF'
        },
        {
          word: 'La niña',
          translations: {
            en: 'The girl',
            ar: 'البنت',
            uk: 'Дівчинка',
            fr: 'La fille'
          },
          emoji: '👧',
          color: '#FFF5F5'
        },
        {
          word: 'El gato',
          translations: {
            en: 'The cat (m)',
            ar: 'القط',
            uk: 'Кіт',
            fr: 'Le chat'
          },
          emoji: '🐱',
          color: '#F3E8FF'
        },
        {
          word: 'La gata',
          translations: {
            en: 'The cat (f)',
            ar: 'القطة',
            uk: 'Кішка',
            fr: 'La chatte'
          },
          emoji: '🐱',
          color: '#F3E8FF'
        },
        {
          word: 'El perro',
          translations: {
            en: 'The dog (m)',
            ar: 'الكلب',
            uk: 'Собака',
            fr: 'Le chien'
          },
          emoji: '🐶',
          color: '#FEFCBF'
        },
        {
          word: 'La perra',
          translations: {
            en: 'The dog (f)',
            ar: 'الكلبة',
            uk: 'Собака (самка)',
            fr: 'La chienne'
          },
          emoji: '🐶',
          color: '#FEFCBF'
        },
        {
          word: 'El abuelo',
          translations: {
            en: 'The grandfather',
            ar: 'الجد',
            uk: 'Дідусь',
            fr: 'Le grand-père'
          },
          emoji: '👴',
          color: '#FEFCBF'
        },
        {
          word: 'La abuela',
          translations: {
            en: 'The grandmother',
            ar: 'الجدة',
            uk: 'Бабуся',
            fr: 'La grand-mère'
          },
          emoji: '👵',
          color: '#FEFCBF'
        },
        {
          word: 'El tío',
          translations: {
            en: 'The uncle',
            ar: 'العم / الخال',
            uk: 'Дядько',
            fr: 'L\'oncle'
          },
          emoji: '👨',
          color: '#FFF4E5'
        },
        {
          word: 'La tía',
          translations: {
            en: 'The aunt',
            ar: 'العمة / الخالة',
            uk: 'Тітка',
            fr: 'La tante'
          },
          emoji: '👩',
          color: '#FFF4E5'
        },
        {
          word: 'El primo',
          translations: {
            en: 'The cousin (m)',
            ar: 'ابن العم / الخال',
            uk: 'Двоюрідний брат',
            fr: 'Le cousin'
          },
          emoji: '👦',
          color: '#FFF4E5'
        },
        {
          word: 'La prima',
          translations: {
            en: 'The cousin (f)',
            ar: 'ابنة العم / الخالة',
            uk: 'Двоюрідна сестра',
            fr: 'La cousine'
          },
          emoji: '👧',
          color: '#FFF4E5'
        },
        {
          word: 'El hermano',
          translations: {
            en: 'The brother',
            ar: 'الأخ',
            uk: 'Брат',
            fr: 'Le frère'
          },
          emoji: '👦',
          color: '#EBF8FF'
        },
        {
          word: 'La hermana',
          translations: {
            en: 'The sister',
            ar: 'الأخت',
            uk: 'Сестра',
            fr: 'La sœur'
          },
          emoji: '👧',
          color: '#FFF5F5'
        },
        {
          word: 'El hijo',
          translations: {
            en: 'The son',
            ar: 'الابن',
            uk: 'Син',
            fr: 'Le fils'
          },
          emoji: '👶',
          color: '#EBF8FF'
        },
        {
          word: 'La hija',
          translations: {
            en: 'The daughter',
            ar: 'الابنة',
            uk: 'Донька',
            fr: 'La fille'
          },
          emoji: '👶',
          color: '#FFF5F5'
        },
        {
          word: 'El amigo',
          translations: {
            en: 'The friend (m)',
            ar: 'الصديق',
            uk: 'Друг',
            fr: 'L\'ami'
          },
          emoji: '🧑',
          color: '#E2F3E7'
        },
        {
          word: 'La amiga',
          translations: {
            en: 'The friend (f)',
            ar: 'الصديقة',
            uk: 'Подруга',
            fr: 'L\'amie'
          },
          emoji: '👩',
          color: '#E2F3E7'
        },
        {
          word: 'El médico',
          translations: {
            en: 'The doctor (m)',
            ar: 'الطبيب',
            uk: 'Лікар',
            fr: 'Le médecin'
          },
          emoji: '👨‍⚕️',
          color: '#E2F3E7'
        },
        {
          word: 'La médica',
          translations: {
            en: 'The doctor (f)',
            ar: 'الطبيبة',
            uk: 'Лікарка',
            fr: 'La femme médecin'
          },
          emoji: '👩‍⚕️',
          color: '#E2F3E7'
        },
        {
          word: 'El profesor',
          translations: {
            en: 'The teacher (m)',
            ar: 'المعلم',
            uk: 'Вчитель',
            fr: 'Le professeur'
          },
          emoji: '🧑‍🏫',
          color: '#E3EEF9'
        },
        {
          word: 'La profesora',
          translations: {
            en: 'The teacher (f)',
            ar: 'المعلمة',
            uk: 'Вчителька',
            fr: 'La professeure'
          },
          emoji: '👩‍🏫',
          color: '#E3EEF9'
        },
        {
          word: 'El vecino',
          translations: {
            en: 'The neighbor (m)',
            ar: 'الجار',
            uk: 'Сусід',
            fr: 'Le voisin'
          },
          emoji: '🏡',
          color: '#E2F3E7'
        },
        {
          word: 'La vecina',
          translations: {
            en: 'The neighbor (f)',
            ar: 'الجارة',
            uk: 'Сусідка',
            fr: 'La voisine'
          },
          emoji: '🏡',
          color: '#E2F3E7'
        },
        {
          word: 'El señor',
          translations: {
            en: 'The gentleman',
            ar: 'السيد',
            uk: 'Пан',
            fr: 'Le monsieur'
          },
          emoji: '👨',
          color: '#EDF2F7'
        },
        {
          word: 'La señora',
          translations: {
            en: 'The lady',
            ar: 'السيدة',
            uk: 'Пані',
            fr: 'La dame'
          },
          emoji: '👩',
          color: '#EDF2F7'
        },
        {
          word: 'El enfermero',
          translations: {
            en: 'The nurse (m)',
            ar: 'الممرض',
            uk: 'Медбрат',
            fr: 'L\'infirmier'
          },
          emoji: '🧑‍⚕️',
          color: '#E2F3E7'
        },
        {
          word: 'La enfermera',
          translations: {
            en: 'The nurse (f)',
            ar: 'الممرضة',
            uk: 'Медсестра',
            fr: 'L\'infirmière'
          },
          emoji: '👩‍⚕️',
          color: '#E2F3E7'
        },
        {
          word: 'El cocinero',
          translations: {
            en: 'The cook (m)',
            ar: 'الطباخ',
            uk: 'Кухар',
            fr: 'Le cuisinier'
          },
          emoji: '👨‍🍳',
          color: '#FFF4E5'
        },
        {
          word: 'La cocinera',
          translations: {
            en: 'The cook (f)',
            ar: 'الطباخة',
            uk: 'Кухарка',
            fr: 'La cuisinière'
          },
          emoji: '👩‍🍳',
          color: '#FFF4E5'
        }
      ],
    content: `
## Palabras Masculinas y Femeninas

Casi todas las cosas en español son masculinas o femeninas.

### Masculino <trans en="(Masculine)" ar="(مذكر)" uk="(Чоловічий рід)" fr="(Masculin)"/>
Normalmente terminan en **-O**. Usamos **EL** o **UN**.
*   **El** niño
*   **El** cielo
*   **El** oro

### Femenino <trans en="(Feminine)" ar="(مؤنث)" uk="(Жіночий рід)" fr="(Féminin)"/>
Normalmente terminan en **-A**. Usamos **LA** o **UNA**.
*   **La** niña
*   **La** tierra
*   **La** manzana

### Excepciones Importantes ⚠️
Las palabras que terminan en **-ción** siempre son **femeninas**, aunque no terminen en -a.
*   **La** informa**ción**
*   **La** concentra**ción**
*   **La** emo**ción**
    `,
    exercises: [
      {
        id: "ex1",
        question: `___ teléfono <trans en='(phone - ends in o)' ar='(هاتف)' uk='(телефон)' fr='(téléphone)'/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: `___ canción <trans en='(song - ends in ción)' ar='(أغنية)' uk='(пісня)' fr='(chanson)'/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: `___ casa <trans en='(house - ends in a)' ar='(منزل)' uk='(будинок)' fr='(maison)'/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex4",
        question: `___ problema <trans en="(___ problem)" ar="(___ مشكلة)" uk="(___ проблема)" fr="(___ problème)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `___ solución <trans en="(___ solution)" ar="(___ الحل)" uk="(___ рішення)" fr="(___ solution)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: `___ mapa <trans en="(___ map)" ar="(___ الخريطة)" uk="(___ карта)" fr="(___ carte)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `___ universidad <trans en="(___ university)" ar="(___ الجامعة)" uk="(___ університет)" fr="(___ université)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex8",
        question: `___ idioma <trans en="(___ language)" ar="(___ اللغة)" uk="(___ мова)" fr="(___ langue)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `___ mano <trans en="(___ hand)" ar="(___ يد)" uk="(___ рука)" fr="(___ main)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex10",
        question: `___ día <trans en="(___ day)" ar="(___ اليوم)" uk="(___ день)" fr="(___ jour)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `___ moto(cicleta) <trans en="(___ motorcycle (cycle))" ar="(___ دراجة نارية (دراجة))" uk="(___ мотоцикл (велосипед))" fr="(___ moto (cycle))"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: `___ foto(grafía) <trans en="(___ photo(graphy))" ar="(___ صورة (رسم بياني))" uk="(___ фото(графіка))" fr="(___ photo(graphie))"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex13",
        question: `___ agua (singular) <trans en="(___ water (singular))" ar="(___ ماء (مفرد))" uk="(___ вода (однина))" fr="(___ eau (singulier))"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `___ planeta <trans en="(___ planet)" ar="(___ الكوكب)" uk="(___ планета)" fr="(___ planète)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `___ ciudad <trans en="(___ city)" ar="(___ المدينة)" uk="(___ місто)" fr="(___ ville)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex16",
        question: `___ clima <trans en="(___ weather)" ar="(___ الطقس)" uk="(___ погода)" fr="(___ météo)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `___ sofá <trans en="(___ sofa)" ar="(___ أريكة)" uk="(___ диван)" fr="(___ canapé)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `___ clase <trans en="(___ class)" ar="(___ الصف)" uk="(___ клас)" fr="(___ classe)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex19",
        question: `___ flor <trans en="(___ flower)" ar="(___ زهرة)" uk="(___ квітка)" fr="(___ fleur)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex20",
        question: `___ árbol <trans en="(___ tree)" ar="(___ شجرة)" uk="(___ дерево)" fr="(___ arbre)"/>`,
        options: ["El <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>", "La <trans en=\"(The)\" ar=\"(ال)\" uk=\"(The)\" fr=\"(Le)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-gram-posesivos",
    topic: "Gramática",
    title: "Posesivos",
    level: "A1",
    category: "Gramática",
    description: "Aprende a indicar posesión: mi, tu, nuestro, vuestro, su.",
    imageUrl: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&auto=format&fit=crop&q=80",
    emoji: "🎒",
    color: "#FCE8E8",
    vocabulary: [
        {
          word: 'Mi coche',
          translations: {
            en: 'My car',
            ar: 'سيارتي',
            uk: 'Мій автомобіль',
            fr: 'Ma voiture'
          },
          emoji: '🚗',
          color: '#FFF4E5'
        },
        {
          word: 'Mis coches',
          translations: {
            en: 'My cars',
            ar: 'سياراتي',
            uk: 'Мої автомобілі',
            fr: 'Mes voitures'
          },
          emoji: '🚗',
          color: '#FFF4E5'
        },
        {
          word: 'Tu libro',
          translations: {
            en: 'Your book',
            ar: 'كتابك',
            uk: 'Твоя книга',
            fr: 'Ton livre'
          },
          emoji: '📘',
          color: '#FEFCBF'
        },
        {
          word: 'Tus libros',
          translations: {
            en: 'Your books',
            ar: 'كتبك',
            uk: 'Твої книги',
            fr: 'Tes livres'
          },
          emoji: '📚',
          color: '#FEFCBF'
        },
        {
          word: 'Su casa',
          translations: {
            en: 'His/Her house',
            ar: 'منزله / منزلها',
            uk: 'Його/Її будинок',
            fr: 'Sa maison'
          },
          emoji: '🏠',
          color: '#E3EEF9'
        },
        {
          word: 'Sus casas',
          translations: {
            en: 'His/Her houses',
            ar: 'منازلهم',
            uk: 'Його/Її будинки',
            fr: 'Ses maisons'
          },
          emoji: '🏠',
          color: '#E3EEF9'
        },
        {
          word: 'Nuestro perro',
          translations: {
            en: 'Our dog',
            ar: 'كلبنا',
            uk: 'Наш собака',
            fr: 'Notre chien'
          },
          emoji: '🐶',
          color: '#FEFCBF'
        },
        {
          word: 'Nuestra familia',
          translations: {
            en: 'Our family',
            ar: 'عائلتنا',
            uk: 'Наша сім\'я',
            fr: 'Notre famille'
          },
          emoji: '👨‍👩‍👧‍👦',
          color: '#E2F3E7'
        },
        {
          word: 'Nuestros amigos',
          translations: {
            en: 'Our friends',
            ar: 'أصدقاؤنا',
            uk: 'Наші друзі',
            fr: 'Nos amis'
          },
          emoji: '🤝',
          color: '#E2F3E7'
        },
        {
          word: 'Nuestras cosas',
          translations: {
            en: 'Our things',
            ar: 'أشياؤنا',
            uk: 'Наші речі',
            fr: 'Nos affaires'
          },
          emoji: '🧳',
          color: '#EDF2F7'
        },
        {
          word: 'Vuestro gato',
          translations: {
            en: 'Your cat (plural)',
            ar: 'قطكم',
            uk: 'Ваш кіт',
            fr: 'Votre chat'
          },
          emoji: '🐱',
          color: '#F3E8FF'
        },
        {
          word: 'Vuestra clase',
          translations: {
            en: 'Your class (plural)',
            ar: 'صفكم',
            uk: 'Ваш клас',
            fr: 'Votre classe'
          },
          emoji: '🏫',
          color: '#FEFCBF'
        },
        {
          word: 'Vuestros cuadernos',
          translations: {
            en: 'Your notebooks (plural)',
            ar: 'دفاتركم',
            uk: 'Ваші зошити',
            fr: 'Vos cahiers'
          },
          emoji: '📓',
          color: '#EDF2F7'
        },
        {
          word: 'Vuestras llaves',
          translations: {
            en: 'Your keys (plural)',
            ar: 'مفاتيحكم',
            uk: 'Ваші ключі',
            fr: 'Vos clés'
          },
          emoji: '🔑',
          color: '#FEFCBF'
        },
        {
          word: 'Su ordenador',
          translations: {
            en: 'Their computer',
            ar: 'حاسوبهم',
            uk: 'Їхній комп\'ютер',
            fr: 'Leur ordinateur'
          },
          emoji: '💻',
          color: '#EBF8FF'
        },
        {
          word: 'Sus maletas',
          translations: {
            en: 'Their suitcases',
            ar: 'حقائبهم',
            uk: 'Їхні валізи',
            fr: 'Leurs valises'
          },
          emoji: '🧳',
          color: '#FEFCBF'
        },
        {
          word: 'Mi lápiz',
          translations: {
            en: 'My pencil',
            ar: 'قلمي الرصاص',
            uk: 'Мій олівець',
            fr: 'Mon crayon'
          },
          emoji: '✏️',
          color: '#EDF2F7'
        },
        {
          word: 'Mis gafas',
          translations: {
            en: 'My glasses',
            ar: 'نظاراتي',
            uk: 'Мої окуляри',
            fr: 'Mes lunettes'
          },
          emoji: '👓',
          color: '#EDF2F7'
        },
        {
          word: 'Tu mochila',
          translations: {
            en: 'Your backpack',
            ar: 'حقيبتك',
            uk: 'Твій рюкзак',
            fr: 'Ton sac à dos'
          },
          emoji: '🎒',
          color: '#FFF5F5'
        },
        {
          word: 'Tus zapatos',
          translations: {
            en: 'Your shoes',
            ar: 'حذاؤك',
            uk: 'Твоє взуття',
            fr: 'Tes chaussures'
          },
          emoji: '👟',
          color: '#EDF2F7'
        },
        {
          word: 'Su abrigo',
          translations: {
            en: 'His/Her coat',
            ar: 'معطفه',
            uk: 'Його/Її пальто',
            fr: 'Son manteau'
          },
          emoji: '🧥',
          color: '#FFF4E5'
        },
        {
          word: 'Sus guantes',
          translations: {
            en: 'His/Her gloves',
            ar: 'قفازاته',
            uk: 'Його/Її рукавички',
            fr: 'Ses gants'
          },
          emoji: '🧤',
          color: '#EDF2F7'
        },
        {
          word: 'Nuestro jardín',
          translations: {
            en: 'Our garden',
            ar: 'حديقتنا',
            uk: 'Наш сад',
            fr: 'Notre jardin'
          },
          emoji: '🌳',
          color: '#E2F3E7'
        },
        {
          word: 'Nuestra mesa',
          translations: {
            en: 'Our table',
            ar: 'طاولتنا',
            uk: 'Наш стіл',
            fr: 'Notre table'
          },
          emoji: '🪑',
          color: '#EDF2F7'
        },
        {
          word: 'Nuestros profesores',
          translations: {
            en: 'Our teachers',
            ar: 'معلمونا',
            uk: 'Наші вчителі',
            fr: 'Nos professeurs'
          },
          emoji: '🧑‍🏫',
          color: '#E3EEF9'
        },
        {
          word: 'Vuestro teléfono',
          translations: {
            en: 'Your phone',
            ar: 'هاتفكم',
            uk: 'Ваш телефон',
            fr: 'Votre téléphone'
          },
          emoji: '📱',
          color: '#EBF8FF'
        },
        {
          word: 'Vuestra habitación',
          translations: {
            en: 'Your room',
            ar: 'غرفتكم',
            uk: 'Ваша кімната',
            fr: 'Votre chambre'
          },
          emoji: '🛌',
          color: '#F3E8FF'
        },
        {
          word: 'Vuestras fotos',
          translations: {
            en: 'Your photos',
            ar: 'صوركم',
            uk: 'Ваші фотографії',
            fr: 'Vos photos'
          },
          emoji: '📷',
          color: '#EDF2F7'
        },
        {
          word: 'Su teléfono',
          translations: {
            en: 'Their phone',
            ar: 'هاتفهم',
            uk: 'Їхній телефон',
            fr: 'Leur téléphone'
          },
          emoji: '📱',
          color: '#EBF8FF'
        },
        {
          word: 'Sus documentos',
          translations: {
            en: 'Their documents',
            ar: 'وثائقهم',
            uk: 'Їхні документи',
            fr: 'Leurs documents'
          },
          emoji: '📄',
          color: '#EDF2F7'
        }
      ],
    content: `
## ¿De quién es?

Para indicar que algo es de alguien, usamos posesivos. Van antes de las palabras.

*   **Mi** casa <trans en="(My house)" ar="(منزلي)" uk="(Мій дім)" fr="(Ma maison)"/>
*   **Tu** mochila <trans en="(Your backpack)" ar="(حقيبتك)" uk="(Твій рюкзак)" fr="(Ton sac à dos)"/>
*   **Su** coche <trans en="(His/Her car)" ar="(سيارته/سيارتها)" uk="(Його/Її машина)" fr="(Sa voiture)"/>
*   **Nuestra** ciudad <trans en="(Our city)" ar="(مدينتنا)" uk="(Наше місто)" fr="(Notre ville)"/>
*   **Vuestra** clase <trans en="(Your class)" ar="(فصلكم)" uk="(Ваш клас)" fr="(Votre classe)"/>
*   **Su** dinero <trans en="(Their money)" ar="(أموالهم)" uk="(Їхні гроші)" fr="(Leur argent)"/>

*Nota: "Nuestro/a" y "Vuestro/a" cambian de género (o/a) según la palabra que sigue. "Mi, Tu, Su" no cambian de género.*
    `,
    exercises: [
      {
        id: "ex1",
        question: `______ nombre es Ali. <trans en='(His name)' ar='(اسمه)' uk='(Його ім\`я)' fr='(Son nom)'/>`,
        options: ["Mi <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>", "Tu <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Su <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: `______ familia <trans en='(Our family)' ar='(عائلتنا)' uk='(Наша сім\`я)' fr='(Notre famille)'/>`,
        options: ["Nuestro <trans en=\"(Our)\" ar=\"(لدينا)\" uk=\"(Наші)\" fr=\"(Notre)\"/>", "Nuestra <trans en=\"(Our)\" ar=\"(لدينا)\" uk=\"(Наші)\" fr=\"(Notre)\"/>", "Mi <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: `Yo tengo una bicicleta. Es ______ bicicleta. <trans en="(I have a bicycle. It is ______ bicycle.)" ar="(لدي دراجة هوائية. إنها ______ دراجة.)" uk="(У мене є велосипед. Це ______ велосипед.)" fr="(J'ai un vélo. C'est ______ vélo.)"/>`,
        options: ["mi <trans en=\"(my)\" ar=\"(بلدي)\" uk=\"(мій)\" fr=\"(mon)\"/>", "tu <trans en=\"(you)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu)\"/>", "su <trans en=\"(your)\" ar=\"(الخاص بك)\" uk=\"(ваш)\" fr=\"(votre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `___ (yo) libro es nuevo. <trans en="(___ (I) book is new.)" ar="(___ كتاب (أنا) جديد.)" uk="(___ (I) книга нова.)" fr="(___ (I) le livre est nouveau.)"/>`,
        options: ["Mi <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>", "Tu <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Su <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `___ (tú) casa es grande. <trans en="(___ (your) house is big.)" ar="(___ (منزلك) كبير.)" uk="(___ (ваш) будинок великий.)" fr="(___ (votre) maison est grande.)"/>`,
        options: ["Mi <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>", "Tu <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Su <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: `___ (él) coche es rojo. <trans en="(___ (his) car is red.)" ar="(___ سيارته حمراء.)" uk="(___ (його) автомобіль червоний.)" fr="(___ (sa) voiture est rouge.)"/>`,
        options: ["Su <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>", "Tu <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Mi <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `___ (nosotros) amigos son simpáticos. <trans en="(___ (we) friends are nice.)" ar="(___ (نحن) أصدقاء لطيفون.)" uk="(___ (ми) друзі добрі.)" fr="(___ (nous) les amis sommes gentils.)"/>`,
        options: ["Nuestros <trans en=\"(Ours)\" ar=\"(لنا)\" uk=\"(Наші)\" fr=\"(Le nôtre)\"/>", "Vuestros <trans en=\"(Yours)\" ar=\"(لك)\" uk=\"(Ваш)\" fr=\"(Le vôtre)\"/>", "Sus <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `___ (ella) perro se llama Max. <trans en="(___ (her) dog's name is Max.)" ar="(___ اسم كلبها هو ماكس.)" uk="(___ (її) собаку звати Макс.)" fr="(___ (son) chien s'appelle Max.)"/>`,
        options: ["Su <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>", "Tu <trans en=\"(You)\" ar=\"(أنت)\" uk=\"(Ти)\" fr=\"(Vous)\"/>", "Mi <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `___ (vosotros) madre es profesora. <trans en="(___ (you) mother is a teacher.)" ar="(___ (أنت) والدتك معلمة.)" uk="(___ (ваша) мама вчителька.)" fr="(___ (votre) mère est enseignante.)"/>`,
        options: ["Vuestra <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>", "Nuestra <trans en=\"(Our)\" ar=\"(لدينا)\" uk=\"(Наші)\" fr=\"(Notre)\"/>", "Su <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `___ (ellos) zapatos están limpios. <trans en="(___ (their) shoes are clean.)" ar="(___ أحذيتهم نظيفة.)" uk="(___ (їхнє) взуття чисте.)" fr="(___ (leurs) chaussures sont propres.)"/>`,
        options: ["Sus <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>", "Tus <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>", "Mis <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `¿Es esta ___ (tú) mochila? <trans en="(Is this ___ (your) backpack?)" ar="(هل هذه ___ (حقيبة ظهرك)؟)" uk="(Це ___ (ваш) рюкзак?)" fr="(Est-ce ___ (votre) sac à dos ?)"/>`,
        options: ["tu <trans en=\"(you)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu)\"/>", "su <trans en=\"(your)\" ar=\"(الخاص بك)\" uk=\"(ваш)\" fr=\"(votre)\"/>", "mi <trans en=\"(my)\" ar=\"(بلدي)\" uk=\"(мій)\" fr=\"(mon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `___ (yo) hermanos viven en París. <trans en="(___ (I) brothers live in Paris.)" ar="(___ (أنا) أخوة يعيشون في باريس.)" uk="(___ (I) брати живуть у Парижі.)" fr="(___ (Moi) mes frères habitent à Paris.)"/>`,
        options: ["Mis <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>", "Tus <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>", "Sus <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `No encuentro ___ (yo) llaves. <trans en="(I can't find ___ (me) keys.)" ar="(لا أستطيع العثور على مفاتيح ___ (أنا).)" uk="(Я не можу знайти ___ (мене) ключі.)" fr="(Je ne trouve pas les clés de ___ (moi).)"/>`,
        options: ["mis <trans en=\"(my)\" ar=\"(بلدي)\" uk=\"(мій)\" fr=\"(mon)\"/>", "tus <trans en=\"(your)\" ar=\"(الخاص بك)\" uk=\"(ваш)\" fr=\"(votre)\"/>", "sus <trans en=\"(your)\" ar=\"(الخاص بك)\" uk=\"(ваш)\" fr=\"(votre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `___ (nosotros) ciudad es muy bonita. <trans en="(___ (we) city is very beautiful.)" ar="(___ (نحن) المدينة جميلة جدًا.)" uk="(___ (ми) місто дуже красиве.)" fr="(___ (nous) la ville est très belle.)"/>`,
        options: ["Nuestra <trans en=\"(Our)\" ar=\"(لدينا)\" uk=\"(Наші)\" fr=\"(Notre)\"/>", "Vuestra <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>", "Su <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Pedro y ___ (él) hermana son altos. <trans en="(Pedro and ___ (his) sister are tall.)" ar="(بيدرو و___ (أخته) طويلان.)" uk="(Педро та ___ (його) сестра високі.)" fr="(Pedro et ___ (sa) sœur sont grands.)"/>`,
        options: ["su <trans en=\"(your)\" ar=\"(الخاص بك)\" uk=\"(ваш)\" fr=\"(votre)\"/>", "tu <trans en=\"(you)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu)\"/>", "mi <trans en=\"(my)\" ar=\"(بلدي)\" uk=\"(мій)\" fr=\"(mon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Señor, ¿es este ___ (usted) abrigo? <trans en="(Sir, is this ___ (you) coat?)" ar="(سيدي، هل هذا معطف ___ (أنت)؟)" uk="(Сер, це ___ (ви) пальто?)" fr="(Monsieur, est-ce que c'est ___ (vous) manteau ?)"/>`,
        options: ["su <trans en=\"(your)\" ar=\"(الخاص بك)\" uk=\"(ваш)\" fr=\"(votre)\"/>", "tu <trans en=\"(you)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu)\"/>", "mi <trans en=\"(my)\" ar=\"(بلدي)\" uk=\"(мій)\" fr=\"(mon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `___ (nosotros) abuelos tienen 80 años. <trans en="(___ (we) grandparents are 80 years old.)" ar="(___ (نحن) الأجداد عمرنا 80 عامًا.)" uk="(___ (нам) бабусі та дідусю 80 років.)" fr="(___ (nous) grands-parents avons 80 ans.)"/>`,
        options: ["Nuestros <trans en=\"(Ours)\" ar=\"(لنا)\" uk=\"(Наші)\" fr=\"(Le nôtre)\"/>", "Vuestros <trans en=\"(Yours)\" ar=\"(لك)\" uk=\"(Ваш)\" fr=\"(Le vôtre)\"/>", "Mis <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `___ (tú) ojos son azules. <trans en="(___ (your) eyes are blue.)" ar="(___ (عيناك) زرقاء.)" uk="(___ (твої) очі блакитні.)" fr="(___ (vos) yeux sont bleus.)"/>`,
        options: ["Tus <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>", "Sus <trans en=\"(Your)\" ar=\"(الخاص بك)\" uk=\"(Ваш)\" fr=\"(Votre)\"/>", "Mis <trans en=\"(My)\" ar=\"(بلادي)\" uk=\"(Мій)\" fr=\"(Mon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `Me gusta ___ (vosotros) casa. <trans en="(I like ___ (you) house.)" ar="(أحب ___ (أنت) المنزل.)" uk="(Мені подобається ___ (ваш) будинок.)" fr="(J'aime ___ (toi) la maison.)"/>`,
        options: ["vuestra <trans en=\"(yours)\" ar=\"(لك)\" uk=\"(ваш)\" fr=\"(le vôtre)\"/>", "nuestra <trans en=\"(our)\" ar=\"(لدينا)\" uk=\"(наш)\" fr=\"(notre)\"/>", "su <trans en=\"(your)\" ar=\"(الخاص بك)\" uk=\"(ваш)\" fr=\"(votre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Ana y ___ (ella) hijos van al parque. <trans en="(Ana and ___ (her) children go to the park.)" ar="(آنا و___ أطفالها يذهبون إلى الحديقة.)" uk="(Ана та ___ (її) діти йдуть у парк.)" fr="(Ana et ___ (ses) enfants vont au parc.)"/>`,
        options: ["sus <trans en=\"(your)\" ar=\"(الخاص بك)\" uk=\"(ваш)\" fr=\"(votre)\"/>", "tus <trans en=\"(your)\" ar=\"(الخاص بك)\" uk=\"(ваш)\" fr=\"(votre)\"/>", "mis <trans en=\"(my)\" ar=\"(بلدي)\" uk=\"(мій)\" fr=\"(mon)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-gram-negacion",
    topic: "Gramática",
    title: "Afirmación y Negación",
    level: "A1",
    category: "Gramática",
    description: "Aprende a decir sí o no, y a expresar lo que te gusta y no te gusta.",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=80",
    emoji: "👍",
    color: "#E3EEF9",
    vocabulary: [
        {
          word: 'Sí',
          translations: {
            en: 'Yes',
            ar: 'نعم',
            uk: 'Так',
            fr: 'Oui'
          },
          emoji: '👍',
          color: '#E2F3E7'
        },
        {
          word: 'No',
          translations: {
            en: 'No',
            ar: 'لا',
            uk: 'Ні',
            fr: 'Non'
          },
          emoji: '👎',
          color: '#FCE8E8'
        },
        {
          word: 'También',
          translations: {
            en: 'Also / Too',
            ar: 'أيضاً',
            uk: 'Також',
            fr: 'Aussi'
          },
          emoji: '➕',
          color: '#E2F3E7'
        },
        {
          word: 'Tampoco',
          translations: {
            en: 'Neither',
            ar: 'ولا حتى / أيضاً لا',
            uk: 'Також ні',
            fr: 'Non plus'
          },
          emoji: '➖',
          color: '#FCE8E8'
        },
        {
          word: 'Siempre',
          translations: {
            en: 'Always',
            ar: 'دائماً',
            uk: 'Завжди',
            fr: 'Toujours'
          },
          emoji: '🔄',
          color: '#FEFCBF'
        },
        {
          word: 'Nunca',
          translations: {
            en: 'Never',
            ar: 'أبداً',
            uk: 'Ніколи',
            fr: 'Jamais'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Jamás',
          translations: {
            en: 'Never ever',
            ar: 'على الإطلاق / أبداً',
            uk: 'Ніколи в житті',
            fr: 'Jamais de la vie'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Algo',
          translations: {
            en: 'Something',
            ar: 'شيء ما',
            uk: 'Щось',
            fr: 'Quelque chose'
          },
          emoji: '📦',
          color: '#EDF2F7'
        },
        {
          word: 'Nada',
          translations: {
            en: 'Nothing',
            ar: 'لا شيء',
            uk: 'Нічого',
            fr: 'Rien'
          },
          emoji: '🕳️',
          color: '#FCE8E8'
        },
        {
          word: 'Alguien',
          translations: {
            en: 'Someone',
            ar: 'شخص ما',
            uk: 'Хтось',
            fr: 'Quelqu\'un'
          },
          emoji: '👤',
          color: '#EBF8FF'
        },
        {
          word: 'Nadie',
          translations: {
            en: 'No one',
            ar: 'لا أحد',
            uk: 'Ніхто',
            fr: 'Personne'
          },
          emoji: '👤',
          color: '#FCE8E8'
        },
        {
          word: 'Algún',
          translations: {
            en: 'Some / Any (m)',
            ar: 'بعض (قبل الاسم المذكر)',
            uk: 'Якийсь',
            fr: 'Quelque (m)'
          },
          emoji: '📦',
          color: '#EDF2F7'
        },
        {
          word: 'Ningún',
          translations: {
            en: 'No / None (m)',
            ar: 'لا أحد / لا شيء (مذكر)',
            uk: 'Жоден',
            fr: 'Aucun (m)'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Alguno',
          translations: {
            en: 'Someone / Some (m. pronoun)',
            ar: 'واحد منهم / بعض',
            uk: 'Хтось із',
            fr: 'Quelqu\'un d\'autre (m)'
          },
          emoji: '📦',
          color: '#EDF2F7'
        },
        {
          word: 'Ninguno',
          translations: {
            en: 'None (m. pronoun)',
            ar: 'لا أحد منهم',
            uk: 'Ніхто з',
            fr: 'Aucun (pron.)'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Alguna',
          translations: {
            en: 'Some / Any (f)',
            ar: 'بعض (مؤنث)',
            uk: 'Якась',
            fr: 'Quelque (f)'
          },
          emoji: '📦',
          color: '#EDF2F7'
        },
        {
          word: 'Ninguna',
          translations: {
            en: 'No / None (f)',
            ar: 'لا واحدة (مؤنث)',
            uk: 'Жодна',
            fr: 'Aucune'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Algunos',
          translations: {
            en: 'Some (m. pl.)',
            ar: 'بعضهم (جمع مذكر)',
            uk: 'Деякі (ч)',
            fr: 'Quelques-uns'
          },
          emoji: '📦',
          color: '#EDF2F7'
        },
        {
          word: 'Ningunos',
          translations: {
            en: 'None (m. pl.)',
            ar: 'لا يوجد أي منهم',
            uk: 'Жодні (ч)',
            fr: 'Aucuns'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Algunas',
          translations: {
            en: 'Some (f. pl.)',
            ar: 'بعضهن (جمع مؤنث)',
            uk: 'Деякі (ж)',
            fr: 'Quelques-unes'
          },
          emoji: '📦',
          color: '#EDF2F7'
        },
        {
          word: 'Ningunas',
          translations: {
            en: 'None (f. pl.)',
            ar: 'لا توجد أي منهن',
            uk: 'Жодні (ж)',
            fr: 'Aucunes (pl.)'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Verdadero',
          translations: {
            en: 'True',
            ar: 'صحيح / حقيقي',
            uk: 'Істинний',
            fr: 'Vrai'
          },
          emoji: '✅',
          color: '#E2F3E7'
        },
        {
          word: 'Falsó',
          translations: {
            en: 'False',
            ar: 'خاطئ',
            uk: 'Хибний',
            fr: 'Faux'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Correcto',
          translations: {
            en: 'Correct',
            ar: 'صائب',
            uk: 'Правильно',
            fr: 'Correct'
          },
          emoji: '✅',
          color: '#E2F3E7'
        },
        {
          word: 'Incorrecto',
          translations: {
            en: 'Incorrect',
            ar: 'غير صحيح',
            uk: 'Неправильно',
            fr: 'Incorrect'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Claro que sí',
          translations: {
            en: 'Of course',
            ar: 'بالتأكيد نعم',
            uk: 'Звичайно так',
            fr: 'Bien sûr que oui'
          },
          emoji: '👍',
          color: '#E2F3E7'
        },
        {
          word: 'Claro que no',
          translations: {
            en: 'Of course not',
            ar: 'بالتأكيد لا',
            uk: 'Звичайно ні',
            fr: 'Bien sûr que non'
          },
          emoji: '👎',
          color: '#FCE8E8'
        },
        {
          word: 'De ningún modo',
          translations: {
            en: 'By no means',
            ar: 'بأي حال من الأحوال لا',
            uk: 'Ні в якому разі',
            fr: 'En aucun cas'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Por supuesto',
          translations: {
            en: 'Naturally / Of course',
            ar: 'بالتأكيد',
            uk: 'Звісно',
            fr: 'Naturellement'
          },
          emoji: '👍',
          color: '#E2F3E7'
        },
        {
          word: 'Tal vez',
          translations: {
            en: 'Maybe',
            ar: 'ربما',
            uk: 'Можливо',
            fr: 'Peut-être'
          },
          emoji: '❓',
          color: '#EBF8FF'
        }
      ],
    content: `
## ¿Sí o No?

*   **Sí**, quiero pan.
*   **No**, no quiero pan.

*Para decir que algo no ocurre, ponemos "no" antes del verbo.*

## Los Gustos

Usamos **Me gusta** cuando algo nos parece bueno o bonito.

*   **Me gusta** el fútbol. <trans en="(I like soccer)" ar="(أحب كرة القدم)" uk="(Мені подобається футбол)" fr="(J'aime le football)"/>
*   **No me gusta** el frío. <trans en="(I don't like the cold)" ar="(لا أحب البرد)" uk="(Мені не подобається холод)" fr="(Je n'aime pas le froid)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: `___, me llamo Juan. <trans en="(___, my name is Juan.)" ar="(___، اسمي خوان.)" uk="(___, мене звати Хуан.)" fr="(___, je m'appelle Juan.)"/>`,
        options: ["No <trans en=\"(No)\" ar=\"(لا)\" uk=\"(Ні)\" fr=\"(Non)\"/>", "Sí <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `A mí ___ me gusta el pescado. Prefiero la carne. <trans en="(I ___ like fish. I prefer meat.)" ar="(أنا ___ أحب السمك. أنا أفضل اللحوم.)" uk="(Я ___ люблю рибу. Я віддаю перевагу м'ясу.)" fr="(Je ___ aime le poisson. Je préfère la viande.)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "también <trans en=\"(also)\" ar=\"(ايضا)\" uk=\"(також)\" fr=\"(aussi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Yo ___ como carne, soy vegetariano. <trans en="(I ___ eat meat, I'm a vegetarian.)" ar="(أنا ___ آكل اللحوم، أنا نباتي.)" uk="(Я ___ їм м'ясо, я вегетаріанець.)" fr="(Je ___ mange de la viande, je suis végétarien.)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "también <trans en=\"(also)\" ar=\"(ايضا)\" uk=\"(також)\" fr=\"(aussi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `A mí ___ me gusta el fútbol. ¡Lo odio! <trans en="(I ___ like football. I hate it!)" ar="(أنا ___ أحب كرة القدم. أنا أكره ذلك!)" uk="(Я ___ люблю футбол. Я ненавиджу це!)" fr="(Je ___ aime le football. Je déteste ça!)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "nunca <trans en=\"(never)\" ar=\"(أبدا)\" uk=\"(ніколи)\" fr=\"(jamais)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `¿Te gusta el café? - ___, mucho. <trans en="(Do you like coffee? - ___, a lot.)" ar="(هل تحب القهوة؟ - ___، كثيراً.)" uk="(Ви любите каву? - ___, багато.)" fr="(Aimez-vous le café ? - ___, beaucoup.)"/>`,
        options: ["Sí <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "No <trans en=\"(No)\" ar=\"(لا)\" uk=\"(Ні)\" fr=\"(Non)\"/>", "Tampoco <trans en=\"(Neither)\" ar=\"(ولا)\" uk=\"(Ні)\" fr=\"(Ni l'un ni l'autre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `Ellos ___ hablan ruso, solo español. <trans en="(They ___ speak Russian, only Spanish.)" ar="(إنهم ___ يتحدثون الروسية، والإسبانية فقط.)" uk="(Вони ___ говорять російською, тільки іспанською.)" fr="(Ils ___ parlent russe, seulement espagnol.)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "siempre <trans en=\"(always)\" ar=\"(دائما)\" uk=\"(завжди)\" fr=\"(toujours)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `No me gusta el frío, y a ti ___. <trans en="(I don't like the cold, and you ___.)" ar="(أنا لا أحب البرد، وأنت ___.)" uk="(Я не люблю холоду, а ти ___.)" fr="(Je n'aime pas le froid, et toi ___.)"/>`,
        options: ["tampoco <trans en=\"(neither)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(ni l'un ni l'autre)\"/>", "también <trans en=\"(also)\" ar=\"(ايضا)\" uk=\"(також)\" fr=\"(aussi)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Me gusta la pizza. - A mí ___. <trans en="(I like pizza. - Me ___.)" ar="(أحب البيتزا. - أنا ___.)" uk="(Я люблю піцу. - Я ___.)" fr="(J'aime la pizza. - Moi ___.)"/>`,
        options: ["también <trans en=\"(also)\" ar=\"(ايضا)\" uk=\"(також)\" fr=\"(aussi)\"/>", "tampoco <trans en=\"(neither)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(ni l'un ni l'autre)\"/>", "no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `___, no quiero ir. <trans en="(___, I don't want to go.)" ar="(___، لا أريد أن أذهب.)" uk="(___, я не хочу йти.)" fr="(___, je ne veux pas y aller.)"/>`,
        options: ["No <trans en=\"(No)\" ar=\"(لا)\" uk=\"(Ні)\" fr=\"(Non)\"/>", "Sí <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "También <trans en=\"(Also)\" ar=\"(ايضا)\" uk=\"(Також)\" fr=\"(Aussi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Nosotros ___ estamos cansados. <trans en="(We ___ are tired.)" ar="(نحن ___ متعبون.)" uk="(Ми ___ втомилися.)" fr="(Nous ___ sommes fatigués.)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "y <trans en=\"(and)\" ar=\"(و)\" uk=\"(і)\" fr=\"(et)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Él ___ tiene dinero. <trans en="(He ___ has money.)" ar="(هو ___ لديه المال.)" uk="(Він ___ має гроші.)" fr="(Il ___ a de l'argent.)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "con <trans en=\"(with)\" ar=\"(مع)\" uk=\"(с)\" fr=\"(avec)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `¿Vienes a la fiesta? - ___, no puedo. <trans en="(Are you coming to the party? - ___, I can't.)" ar="(هل ستأتي إلى الحفلة؟ - ___، لا أستطبع.)" uk="(Ви йдете на вечірку? - ___, я не можу.)" fr="(Tu viens à la fête ? - ___, Je ne peux pas.)"/>`,
        options: ["No <trans en=\"(No)\" ar=\"(لا)\" uk=\"(Ні)\" fr=\"(Non)\"/>", "Sí <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "Tampoco <trans en=\"(Neither)\" ar=\"(ولا)\" uk=\"(Ні)\" fr=\"(Ni l'un ni l'autre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `___, gracias. Ya he comido. <trans en="(___, thank you. I've already eaten.)" ar="(___، شكرا لك. لقد أكلت بالفعل.)" uk="(___, дякую. Я вже поїв.)" fr="(___, merci. J'ai déjà mangé.)"/>`,
        options: ["No <trans en=\"(No)\" ar=\"(لا)\" uk=\"(Ні)\" fr=\"(Non)\"/>", "Sí <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "También <trans en=\"(Also)\" ar=\"(ايضا)\" uk=\"(Також)\" fr=\"(Aussi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿Tienes hambre? - ___, quiero comer ya. <trans en="(Are you hungry? - ___, I want to eat now.)" ar="(هل أنت جائع؟ - ___، أريد أن آكل الآن.)" uk="(Ви голодні? - ___, я зараз хочу їсти.)" fr="(As-tu faim ? - ___, je veux manger maintenant.)"/>`,
        options: ["Sí <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "No <trans en=\"(No)\" ar=\"(لا)\" uk=\"(Ні)\" fr=\"(Non)\"/>", "Tampoco <trans en=\"(Neither)\" ar=\"(ولا)\" uk=\"(Ні)\" fr=\"(Ni l'un ni l'autre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `A María ___ le gusta leer. <trans en="(María ___ likes to read.)" ar="(ماريا ___ تحب القراءة.)" uk="(María ___ любить читати.)" fr="(María ___ aime lire.)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "tampoco <trans en=\"(neither)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(ni l'un ni l'autre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `A mi perro ___ le gusta bañarse. <trans en="(My dog ___ likes to bathe.)" ar="(كلبي ___ يحب الاستحمام.)" uk="(Моя собака ___ любить купатися.)" fr="(Mon chien ___ aime se baigner.)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "también <trans en=\"(also)\" ar=\"(ايضا)\" uk=\"(також)\" fr=\"(aussi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Nosotros ___ trabajamos los domingos. Descansamos. <trans en="(We ___ work on Sundays. We rest.)" ar="(نحن ___ نعمل يوم الأحد. نحن نرتاح.)" uk="(Ми ___ працюємо по неділях. Ми відпочиваємо.)" fr="(Nous ___ travaillons le dimanche. Nous nous reposons.)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "tampoco <trans en=\"(neither)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(ni l'un ni l'autre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `___ me gusta llegar tarde. <trans en="(___ I like to be late.)" ar="(___ أحب أن أتأخر.)" uk="(___ Я люблю спізнюватися.)" fr="(___ J'aime être en retard.)"/>`,
        options: ["No <trans en=\"(No)\" ar=\"(لا)\" uk=\"(Ні)\" fr=\"(Non)\"/>", "Sí <trans en=\"(Yes)\" ar=\"(نعم)\" uk=\"(Так)\" fr=\"(Oui)\"/>", "También <trans en=\"(Also)\" ar=\"(ايضا)\" uk=\"(Також)\" fr=\"(Aussi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `No veo nada, ___ hay luz. <trans en="(I don't see anything, ___ there is light.)" ar="(لا أرى شيئًا، ___ هناك ضوء.)" uk="(Я нічого не бачу, ___ там світло.)" fr="(Je ne vois rien, ___ il y a de la lumière.)"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "tampoco <trans en=\"(neither)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(ni l'un ni l'autre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Yo ___ como carne, soy vegetariano. (Extra) <trans en="(I ___ eat meat, I'm a vegetarian. (Bonus))" ar="(أنا ___ آكل اللحوم، أنا نباتي. (مكافأة))" uk="(Я ___ їм м'ясо, я вегетаріанець. (Бонус))" fr="(Je ___ mange de la viande, je suis végétarien. (Prime))"/>`,
        options: ["no <trans en=\"(no)\" ar=\"(لا)\" uk=\"(ні)\" fr=\"(non)\"/>", "sí <trans en=\"(yes)\" ar=\"(نعم)\" uk=\"(так)\" fr=\"(oui)\"/>", "también <trans en=\"(also)\" ar=\"(ايضا)\" uk=\"(також)\" fr=\"(aussi)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-vocab-saludos",
    topic: "Presentaciones",
    title: "Saludos y Presentaciones",
    level: "A1",
    category: "Vocabulario",
    description: "Hola, ¿cómo estás? Aprende las preguntas y respuestas más importantes para conocer a alguien.",
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/saludos.png",
    color: "#FFF5F5",
    vocabulary: [
        {
          word: 'Hola',
          translations: {
            en: 'Hello',
            ar: 'مرحباً',
            uk: 'Привіт',
            fr: 'Bonjour'
          },
          emoji: '👋',
          color: '#FFF5F5'
        },
        {
          word: '¿Cómo estás?',
          translations: {
            en: 'How are you?',
            ar: 'كيف حالك؟',
            uk: 'Як справи?',
            fr: 'Comment vas-tu ?'
          },
          emoji: '🤔',
          color: '#EBF8FF'
        },
        {
          word: 'Estoy bien',
          translations: {
            en: 'I\'m fine',
            ar: 'أنا بخير',
            uk: 'Я в порядку',
            fr: 'Je vais bien'
          },
          emoji: '😊',
          color: '#E2F3E7'
        },
        {
          word: 'Buenos días',
          translations: {
            en: 'Good morning',
            ar: 'صباح الخير',
            uk: 'Доброго ранку',
            fr: 'Bonjour'
          },
          emoji: '🌅',
          color: '#FFF4E5'
        },
        {
          word: 'Buenas tardes',
          translations: {
            en: 'Good afternoon',
            ar: 'مساء الخير',
            uk: 'Доброго дня',
            fr: 'Bon après-midi'
          },
          emoji: '☀️',
          color: '#FFF4E5'
        },
        {
          word: 'Buenas noches',
          translations: {
            en: 'Good night',
            ar: 'تصبح على خير',
            uk: 'Доброї ночі',
            fr: 'Bonsoir'
          },
          emoji: '🌙',
          color: '#F3E8FF'
        },
        {
          word: 'Adiós',
          translations: {
            en: 'Goodbye',
            ar: 'وداعاً',
            uk: 'До побачення',
            fr: 'Au revoir'
          },
          emoji: '👋',
          color: '#FCE8E8'
        },
        {
          word: 'Por favor',
          translations: {
            en: 'Please',
            ar: 'من فضلك',
            uk: 'Будь ласка',
            fr: 'S\'il vous plaît'
          },
          emoji: '🙏',
          color: '#E2F3E7'
        },
        {
          word: 'Gracias',
          translations: {
            en: 'Thank you',
            ar: 'شكراً',
            uk: 'Дякую',
            fr: 'Merci'
          },
          emoji: '🙏',
          color: '#E2F3E7'
        },
        {
          word: '¿Qué tal?',
          translations: {
            en: 'What\'s up?',
            ar: 'ما الأخبار؟',
            uk: 'Як воно?',
            fr: 'Quoi de neuf ?'
          },
          emoji: '🙌',
          color: '#EBF8FF'
        },
        {
          word: 'Hasta luego',
          translations: {
            en: 'See you later',
            ar: 'أراك لاحقاً',
            uk: 'До зустрічі',
            fr: 'À plus tard'
          },
          emoji: '👋',
          color: '#FCE8E8'
        },
        {
          word: 'Hasta pronto',
          translations: {
            en: 'See you soon',
            ar: 'أراك قريباً',
            uk: 'До швидкого',
            fr: 'À bientôt'
          },
          emoji: '👋',
          color: '#FCE8E8'
        },
        {
          word: 'Hasta mañana',
          translations: {
            en: 'See you tomorrow',
            ar: 'أراك غداً',
            uk: 'До завтра',
            fr: 'À demain'
          },
          emoji: '👋',
          color: '#FCE8E8'
        },
        {
          word: 'Mucho gusto',
          translations: {
            en: 'Nice to meet you',
            ar: 'سررت بلقائك',
            uk: 'Приємно познайомитись',
            fr: 'Ravi de vous rencontrer'
          },
          emoji: '🤝',
          color: '#E2F3E7'
        },
        {
          word: 'Bienvenido / Bienvenida',
          translations: {
            en: 'Welcome',
            ar: 'مرحباً بك',
            uk: 'Ласкаво просимо',
            fr: 'Bienvenue'
          },
          emoji: '🤗',
          color: '#E2F3E7'
        },
        {
          word: 'De nada',
          translations: {
            en: 'You\'re welcome',
            ar: 'على الرحب والسعة',
            uk: 'Нема за що',
            fr: 'De rien'
          },
          emoji: '🤗',
          color: '#E2F3E7'
        },
        {
          word: 'Lo siento',
          translations: {
            en: 'I\'m sorry',
            ar: 'أنا آسف',
            uk: 'Вибачте',
            fr: 'Désolé'
          },
          emoji: '😢',
          color: '#FCE8E8'
        },
        {
          word: 'Disculpe / Perdón',
          translations: {
            en: 'Excuse me / Sorry',
            ar: 'المعذرة',
            uk: 'Перепрошую',
            fr: 'Excusez-moi'
          },
          emoji: '🙇',
          color: '#FCE8E8'
        },
        {
          word: '¿Cómo te llamas?',
          translations: {
            en: 'What\'s your name?',
            ar: 'ما اسمك؟',
            uk: 'Як тебе звати?',
            fr: 'Comment t\'appelles-tu ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: 'Me llamo...',
          translations: {
            en: 'My name is...',
            ar: 'اسمي...',
            uk: 'Мене звати...',
            fr: 'Je m\'appelle...'
          },
          emoji: '✍️',
          color: '#E3EEF9'
        },
        {
          word: '¿De dónde eres?',
          translations: {
            en: 'Where are you from?',
            ar: 'من أين أنت؟',
            uk: 'Звідки ти?',
            fr: 'D\'où viens-tu ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: 'Soy de...',
          translations: {
            en: 'I am from...',
            ar: 'أنا من...',
            uk: 'Я з...',
            fr: 'Je suis de...'
          },
          emoji: '🌍',
          color: '#E3EEF9'
        },
        {
          word: '¿Cuántos años tienes?',
          translations: {
            en: 'How old are you?',
            ar: 'كم عمرك؟',
            uk: 'Скільки тобі років?',
            fr: 'Quel âge as-tu ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: 'Tengo ... años',
          translations: {
            en: 'I am ... years old',
            ar: 'عمري ... سنة',
            uk: 'Мені ... років',
            fr: 'J\'ai ... ans'
          },
          emoji: '🔢',
          color: '#E3EEF9'
        },
        {
          word: '¿Dónde vives?',
          translations: {
            en: 'Where do you live?',
            ar: 'أين تعيش؟',
            uk: 'Де ти живеш?',
            fr: 'Où habites-tu ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: 'Vivo en...',
          translations: {
            en: 'I live in...',
            ar: 'أعيش في...',
            uk: 'Я живу в...',
            fr: 'J\'habite à...'
          },
          emoji: '🏠',
          color: '#E3EEF9'
        },
        {
          word: 'Mucho gusto / Encantado',
          translations: {
            en: 'Pleased to meet you',
            ar: 'تشرفنا',
            uk: 'Радий знайомству',
            fr: 'Enchanté'
          },
          emoji: '🤝',
          color: '#E2F3E7'
        },
        {
          word: 'Igualmente',
          translations: {
            en: 'Likewise',
            ar: 'والمثل',
            uk: 'Взаємно',
            fr: 'De même'
          },
          emoji: '🤝',
          color: '#E2F3E7'
        },
        {
          word: 'Cuídate',
          translations: {
            en: 'Take care',
            ar: 'اعتني بنفسك',
            uk: 'Бережи себе',
            fr: 'Prends soin de toi'
          },
          emoji: '🤗',
          color: '#E2F3E7'
        },
        {
          word: '¡Que tengas un buen día!',
          translations: {
            en: 'Have a nice day!',
            ar: 'أتمنى لك يوماً سعيداً!',
            uk: 'Гарного дня!',
            fr: 'Bonne journée !'
          },
          emoji: '☀️',
          color: '#FFF4E5'
        }
      ],
    content: `
## Conversación Básica

Aquí tienes preguntas muy importantes y cómo responderlas de forma natural:

*   **Hola, ¿cómo estás?** <trans en="(Hello, how are you?)" ar="(مرحباً، كيف حالك؟)" uk="(Привіт, як справи?)" fr="(Bonjour, comment vas-tu ?)"/>
    *   **Estoy bien, gracias.** <trans en="(I'm fine, thank you)" ar="(أنا بخير، شكراً)" uk="(Я в порядку, дякую)" fr="(Je vais bien, merci)"/>
*   **¿Cómo te llamas?** <trans en="(What's your name?)" ar="(ما اسمك؟)" uk="(Як тебе звати?)" fr="(Comment t'appelles-tu ?)"/>
    *   **Me llamo Antonio.** <trans en="(My name is Antonio)" ar="(اسمي أنطونيو)" uk="(Мене звати Антоніо)" fr="(Je m'appelle Antonio)"/>
*   **¿De dónde eres?** <trans en="(Where are you from?)" ar="(من أين أنت؟)" uk="(Звідки ти?)" fr="(D'où viens-tu ?)"/>
    *   **Soy de Marruecos.** <trans en="(I am from Morocco)" ar="(أنا من المغرب)" uk="(Я з Марокко)" fr="(Je suis du Maroc)"/>
*   **¿Cuántos años tienes?** <trans en="(How old are you?)" ar="(كم عمرك؟)" uk="(Скільки тобі років?)" fr="(Quel âge as-tu ?)"/>
    *   **Tengo 30 años.** <trans en="(I am 30 years old)" ar="(عمري 30 سنة)" uk="(Мені 30 років)" fr="(J'ai 30 ans)"/>
*   **¿Cuánto tiempo llevas aquí?** <trans en="(How long have you been here?)" ar="(منذ متى وأنت هنا؟)" uk="(Як довго ти тут?)" fr="(Depuis combien de temps es-tu ici ?)"/>
    *   **Llevo dos meses.** <trans en="(I have been here for two months)" ar="(أنا هنا منذ شهرين)" uk="(Я тут два місяці)" fr="(Je suis ici depuis deux mois)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: `Responde a la pregunta: '¿Cómo te llamas?' <trans en="(Answers the question: 'What is your name?')" ar="(يجيب على السؤال: ما اسمك؟)" uk="(Відповідає на запитання: «Як тебе звати?»)" fr="(Répond à la question : « Quel est votre nom ? »)"/>`,
        options: ["Tengo 20 años <trans en=\"(I am 20 years old)\" ar=\"(عمري 20 سنة)\" uk=\"(Мені 20 років)\" fr=\"(J'ai 20 ans)\"/>", "Me llamo Sara <trans en=\"(My name is Sara)\" ar=\"(اسمي سارة)\" uk=\"(Мене звати Сара)\" fr=\"(Je m'appelle Sara)\"/>", "Soy de Málaga <trans en=\"(I am from Malaga)\" ar=\"(أنا من ملقة)\" uk=\"(Я з Малаги)\" fr=\"(Je viens de Malaga)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `Responde a la pregunta: '¿De dónde eres?' <trans en="(Answers the question: 'Where are you from?')" ar="(يجيب على السؤال: من أين أنت؟)" uk="(Відповідає на запитання: «Звідки ти?»)" fr="(Répond à la question : « D'où venez-vous ? »)"/>`,
        options: ["Soy de Senegal <trans en=\"(I am from Senegal)\" ar=\"(أنا من السنغال)\" uk=\"(Я з Сенегалу)\" fr=\"(Je viens du Sénégal)\"/>", "Estoy bien <trans en=\"(I'm fine)\" ar=\"(أنا بخير)\" uk=\"(Я в порядку)\" fr=\"(Je vais bien)\"/>", "Llevo tres semanas <trans en=\"(I've been there for three weeks)\" ar=\"(لقد كنت هناك لمدة ثلاثة أسابيع)\" uk=\"(Я там три тижні)\" fr=\"(J'y suis depuis trois semaines)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Responde a la pregunta: '¿Cuántos años tienes?' <trans en="(Answers the question: 'How old are you?')" ar="(يجيب على السؤال: "كم عمرك؟")" uk="(Відповідає на запитання: «Скільки тобі років?»)" fr="(Répond à la question : « Quel âge as-tu ? »)"/>`,
        options: ["Tengo mucho frío <trans en=\"(I'm very cold)\" ar=\"(أنا بارد جدا)\" uk=\"(Мені дуже холодно)\" fr=\"(J'ai très froid)\"/>", "Tengo 25 años <trans en=\"(I am 25 years old)\" ar=\"(عمري 25 سنة)\" uk=\"(Мені 25 років)\" fr=\"(J'ai 25 ans)\"/>", "Me llamo Luis <trans en=\"(My name is Luis)\" ar=\"(اسمي لويس)\" uk=\"(Мене звати Луїс)\" fr=\"(Je m'appelle Luis)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex4",
        question: `¿Cómo se dice 'Good morning'? <trans en="(How do you say 'Good morning'?)" ar="(كيف تقول "صباح الخير"؟)" uk="(Як сказати "Доброго ранку"?)" fr="(Comment dit-on « Bonjour » ?)"/>`,
        options: ["Buenos días <trans en=\"(Good morning)\" ar=\"(صباح الخير)\" uk=\"(Доброго ранку)\" fr=\"(Bonjour)\"/>", "Buenas tardes <trans en=\"(Good afternoon)\" ar=\"(مساء الخير)\" uk=\"(Доброго дня)\" fr=\"(Bonjour)\"/>", "Buenas noches <trans en=\"(Good evening)\" ar=\"(مساء الخير)\" uk=\"(Добрий вечір)\" fr=\"(Bonsoir)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `¿Cómo se dice 'Good night'? <trans en="(How do you say 'Good night'?)" ar="(كيف تقول "ليلة سعيدة"؟)" uk="(Як сказати "На добраніч"?)" fr="(Comment dit-on « Bonne nuit » ?)"/>`,
        options: ["Buenas noches <trans en=\"(Good evening)\" ar=\"(مساء الخير)\" uk=\"(Добрий вечір)\" fr=\"(Bonsoir)\"/>", "Buenos días <trans en=\"(Good morning)\" ar=\"(صباح الخير)\" uk=\"(Доброго ранку)\" fr=\"(Bonjour)\"/>", "Hola <trans en=\"(Hello)\" ar=\"(مرحبا)\" uk=\"(Привіт)\" fr=\"(Bonjour)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `Para despedirte dices: <trans en="(To say goodbye you say:)" ar="(لتقول وداعا تقول:)" uk="(На прощання ви говорите:)" fr="(Pour dire au revoir tu dis :)"/>`,
        options: ["Adiós <trans en=\"(Goodbye)\" ar=\"(وداعا)\" uk=\"(До побачення)\" fr=\"(Au revoir)\"/>", "Hola <trans en=\"(Hello)\" ar=\"(مرحبا)\" uk=\"(Привіт)\" fr=\"(Bonjour)\"/>", "Buenos días <trans en=\"(Good morning)\" ar=\"(صباح الخير)\" uk=\"(Доброго ранку)\" fr=\"(Bonjour)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `¿Qué dices a las 16:00 h? <trans en="(What do you say at 4:00 p.m.?)" ar="(ماذا تقول في الساعة 4:00 مساءً؟)" uk="(Що скажеш о 16:00?)" fr="(Que dis-tu à 16h00 ?)"/>`,
        options: ["Buenas tardes <trans en=\"(Good afternoon)\" ar=\"(مساء الخير)\" uk=\"(Доброго дня)\" fr=\"(Bonjour)\"/>", "Buenos días <trans en=\"(Good morning)\" ar=\"(صباح الخير)\" uk=\"(Доброго ранку)\" fr=\"(Bonjour)\"/>", "Buenas noches <trans en=\"(Good night)\" ar=\"(مساء الخير)\" uk=\"(Добрий вечір)\" fr=\"(Bonsoir)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `- 'Encantado de conocerte' - '________' <trans en="(- 'Nice to meet you' - '________')" ar="(- "تشرفت بلقائك" - "________")" uk="(- "Приємно познайомитися" - "________")" fr="(- 'Enchanté de vous rencontrer' - '________')"/>`,
        options: ["Igualmente <trans en=\"(Likewise)\" ar=\"(كذلك)\" uk=\"(Так само)\" fr=\"(De même)\"/>", "Adiós <trans en=\"(Goodbye)\" ar=\"(وداعا)\" uk=\"(До побачення)\" fr=\"(Au revoir)\"/>", "Bien <trans en=\"(Good)\" ar=\"(جيد)\" uk=\"(Добре)\" fr=\"(Bien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Si alguien estornuda dices: <trans en="(If someone sneezes you say:)" ar="(إذا عطس أحد فقل:)" uk="(Якщо хтось чхає, ви скажете:)" fr="(Si quelqu'un éternue, dites :)"/>`,
        options: ["¡Salud! <trans en=\"(Cheers!)\" ar=\"(هتاف!)\" uk=\"(На здоров'я!)\" fr=\"(Bravo!)\"/>", "¡Adiós! <trans en=\"(Bye bye!)\" ar=\"(وداعا وداعا!)\" uk=\"(До побачення!)\" fr=\"(Au revoir !)\"/>", "¡Gracias! <trans en=\"(Thank you!)\" ar=\"(شكرًا لك!)\" uk=\"(Дякую!)\" fr=\"(Merci!)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `¿Cómo pides un favor? <trans en="(How do you ask for a favor?)" ar="(كيف تطلب معروفا؟)" uk="(Як ви просите про послугу?)" fr="(Comment demander une faveur ?)"/>`,
        options: ["Por favor <trans en=\"(Please)\" ar=\"(من فضلك)\" uk=\"(Будь ласка)\" fr=\"(S'il vous plaît)\"/>", "De nada <trans en=\"(You're welcome)\" ar=\"(مرحبًا بك)\" uk=\"(Ні за що)\" fr=\"(De rien)\"/>", "Adiós <trans en=\"(Goodbye)\" ar=\"(وداعا)\" uk=\"(До побачення)\" fr=\"(Au revoir)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Si te dicen 'Gracias', tú respondes: <trans en="(If they say 'Thank you', you respond:)" ar="(إذا قالوا "شكرًا لك"، فإنك تجيب:)" uk="(Якщо вони кажуть «Дякую», ви відповідаєте:)" fr="(S'ils vous disent « Merci », vous répondez :)"/>`,
        options: ["De nada <trans en=\"(You're welcome)\" ar=\"(مرحبًا بك)\" uk=\"(Ні за що)\" fr=\"(De rien)\"/>", "Por favor <trans en=\"(Please)\" ar=\"(من فضلك)\" uk=\"(Будь ласка)\" fr=\"(S'il vous plaît)\"/>", "Hola <trans en=\"(Hello)\" ar=\"(مرحبا)\" uk=\"(Привіт)\" fr=\"(Bonjour)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `- '¿Qué tal?' - '________' <trans en="(- 'How are you?' - '________')" ar="(- "كيف حالك؟" - '________')" uk="(- "Як справи?" - '________')" fr="(- 'Comment vas-tu ?' - '________')"/>`,
        options: ["Muy bien <trans en=\"(Very good)\" ar=\"(جيد جدا)\" uk=\"(Дуже добре)\" fr=\"(Très bien)\"/>", "Me llamo Juan <trans en=\"(My name is Juan)\" ar=\"(اسمي خوان)\" uk=\"(Мене звати Хуан)\" fr=\"(Je m'appelle Juan)\"/>", "Soy de Perú <trans en=\"(I am from Peru)\" ar=\"(أنا من بيرو)\" uk=\"(Я з Перу)\" fr=\"(Je viens du Pérou)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Antes de ir a dormir dices: <trans en="(Before going to sleep you say:)" ar="(قبل النوم تقول:)" uk="(Перед сном ви говорите:)" fr="(Avant d'aller dormir tu dis :)"/>`,
        options: ["Buenas noches <trans en=\"(Good evening)\" ar=\"(مساء الخير)\" uk=\"(Добрий вечір)\" fr=\"(Bonsoir)\"/>", "Buenos días <trans en=\"(Good morning)\" ar=\"(صباح الخير)\" uk=\"(Доброго ранку)\" fr=\"(Bonjour)\"/>", "Hasta luego <trans en=\"(See you later)\" ar=\"(أراك لاحقا)\" uk=\"(До зустрічі)\" fr=\"(A plus tard)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Otra forma de decir 'Adiós' es: <trans en="(Another way to say 'Goodbye' is:)" ar="(هناك طريقة أخرى لقول "وداعا" وهي:)" uk="(Ще один спосіб сказати «До побачення»:)" fr="(Une autre façon de dire « Au revoir » est :)"/>`,
        options: ["Hasta luego <trans en=\"(See you later)\" ar=\"(أراك لاحقا)\" uk=\"(До зустрічі)\" fr=\"(A plus tard)\"/>", "Hola <trans en=\"(Hello)\" ar=\"(مرحبا)\" uk=\"(Привіт)\" fr=\"(Bonjour)\"/>", "Por favor <trans en=\"(Please)\" ar=\"(من فضلك)\" uk=\"(Будь ласка)\" fr=\"(S'il vous plaît)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Para preguntar la edad dices: <trans en="(To ask the age you say:)" ar="(للسؤال عن العمر تقول:)" uk="(Щоб запитати вік, ви скажете:)" fr="(Pour demander l'âge vous dites :)"/>`,
        options: ["¿Cuántos años tienes? <trans en=\"(How old are you?)\" ar=\"(كم عمرك؟)\" uk=\"(Скільки тобі років?)\" fr=\"(Quel âge as-tu ?)\"/>", "¿Cómo te llamas? <trans en=\"(What is your name?)\" ar=\"(ما اسمك؟)\" uk=\"(Як тебе звати?)\" fr=\"(Quel est ton nom?)\"/>", "¿De dónde eres? <trans en=\"(Where are you from?)\" ar=\"(من أين أنت؟)\" uk=\"(Ви звідки?)\" fr=\"(D'où venez-vous?)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `- '¿Dónde vives?' - '________' <trans en="(- 'Where do you live?' - '________')" ar="(- 'أين تعيش؟' - '________')" uk="(- "Де ти живеш?" - '________')" fr="(- 'Où  habites-tu?' - '________')"/>`,
        options: ["Vivo en Madrid <trans en=\"(I live in Madrid)\" ar=\"(أعيش في مدريد)\" uk=\"(Я живу в Мадриді)\" fr=\"(J'habite à Madrid)\"/>", "Soy de Madrid <trans en=\"(I'm from Madrid)\" ar=\"(أنا من مدريد)\" uk=\"(Я з Мадрида)\" fr=\"(Je viens de Madrid)\"/>", "Tengo 20 años <trans en=\"(I am 20 years old)\" ar=\"(عمري 20 سنة)\" uk=\"(Мені 20 років)\" fr=\"(J'ai 20 ans)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Para preguntar el nombre de alguien: <trans en="(To ask someone's name:)" ar="(للسؤال عن اسم شخص ما:)" uk="(Щоб запитати чиєсь ім'я:)" fr="(Pour demander le nom de quelqu'un :)"/>`,
        options: ["¿Cómo te llamas? <trans en=\"(What is your name?)\" ar=\"(ما اسمك؟)\" uk=\"(Як тебе звати?)\" fr=\"(Quel est ton nom ?)\"/>", "¿Qué tal? <trans en=\"(How are you?)\" ar=\"(كيف حالك؟)\" uk=\"(Як справи?)\" fr=\"(Comment vas-tu?)\"/>", "¿De dónde eres? <trans en=\"(Where are you from?)\" ar=\"(من أين أنت؟)\" uk=\"(Ви звідки?)\" fr=\"(D'où venez-vous?)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Si chocas con alguien sin querer dices: <trans en="(If you accidentally bump into someone you say:)" ar="(إذا اصطدمت بشخص بالخطأ فقل:)" uk="(Якщо ви випадково натрапите на когось, ви скажете:)" fr="(Si vous tombez accidentellement sur quelqu'un, vous dites :)"/>`,
        options: ["Perdón / Lo siento <trans en=\"(Sorry / I'm sorry)\" ar=\"(آسف / أنا آسف)\" uk=\"(Вибачте / мені шкода)\" fr=\"(Désolé / je suis désolé)\"/>", "De nada <trans en=\"(You're welcome)\" ar=\"(مرحبًا بك)\" uk=\"(Ні за що)\" fr=\"(De rien)\"/>", "Gracias <trans en=\"(Thank you)\" ar=\"(شكرا لك)\" uk=\"(Дякую)\" fr=\"(Merci)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `Un saludo muy informal entre amigos: <trans en="(A very informal greeting between friends:)" ar="(تحية غير رسمية بين الأصدقاء:)" uk="(Дуже неформальне привітання між друзями:)" fr="(Une salutation très informelle entre amis :)"/>`,
        options: ["¡Qué pasa! <trans en=\"(What's up!)\" ar=\"(ما الأمر!)\" uk=\"(Що там!)\" fr=\"(Quoi de neuf !)\"/>", "¡Buenos días señor! <trans en=\"(Good morning sir!)\" ar=\"(صباح الخير سيدي!)\" uk=\"(Доброго ранку, сер!)\" fr=\"(Bonjour Monsieur!)\"/>", "¡Adiós! <trans en=\"(Bye bye!)\" ar=\"(وداعا وداعا!)\" uk=\"(До побачення!)\" fr=\"(Au revoir !)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Si vas a ver a alguien mañana dices: <trans en="(If you are going to see someone tomorrow you say:)" ar="(إذا كنت ستقابل شخصًا غدًا فقل:)" uk="(Якщо ви збираєтеся зустрітися з кимось завтра, ви говорите:)" fr="(Si tu vas voir quelqu'un demain tu dis :)"/>`,
        options: ["Hasta mañana <trans en=\"(See you tomorrow)\" ar=\"(أراك غدا)\" uk=\"(До завтра)\" fr=\"(A demain)\"/>", "Hasta luego <trans en=\"(See you later)\" ar=\"(أراك لاحقا)\" uk=\"(До зустрічі)\" fr=\"(A plus tard)\"/>", "Adiós para siempre <trans en=\"(Goodbye forever)\" ar=\"(وداعا إلى الأبد)\" uk=\"(До побачення назавжди)\" fr=\"(Au revoir pour toujours)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-vocab-numeros",
    topic: "Números",
    title: "Vocabulario: Los Números (1-10)",
    level: "A1",
    category: "Vocabulario",
    description: "Aprende a contar del uno al diez.",
    imageUrl: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/numeros.png",
    color: "#EBF8FF",
    vocabulary: [
        {
          word: 'Uno (1)',
          translations: {
            en: 'One',
            ar: 'واحد',
            uk: 'Один',
            fr: 'Un'
          },
          emoji: '1️⃣',
          color: '#EBF8FF'
        },
        {
          word: 'Dos (2)',
          translations: {
            en: 'Two',
            ar: 'إثنان',
            uk: 'Два',
            fr: 'Deux'
          },
          emoji: '2️⃣',
          color: '#EBF8FF'
        },
        {
          word: 'Tres (3)',
          translations: {
            en: 'Three',
            ar: 'ثلاثة',
            uk: 'Три',
            fr: 'Trois'
          },
          emoji: '3️⃣',
          color: '#EBF8FF'
        },
        {
          word: 'Cuatro (4)',
          translations: {
            en: 'Four',
            ar: 'أربعة',
            uk: 'Чотири',
            fr: 'Quatre'
          },
          emoji: '4️⃣',
          color: '#EBF8FF'
        },
        {
          word: 'Cinco (5)',
          translations: {
            en: 'Five',
            ar: 'خمسة',
            uk: 'П\'ять',
            fr: 'Cinq'
          },
          emoji: '5️⃣',
          color: '#EBF8FF'
        },
        {
          word: 'Seis (6)',
          translations: {
            en: 'Six',
            ar: 'ستة',
            uk: 'Шість',
            fr: 'Six'
          },
          emoji: '6️⃣',
          color: '#EBF8FF'
        },
        {
          word: 'Siete (7)',
          translations: {
            en: 'Seven',
            ar: 'سبعة',
            uk: 'Сім',
            fr: 'Sept'
          },
          emoji: '7️⃣',
          color: '#EBF8FF'
        },
        {
          word: 'Ocho (8)',
          translations: {
            en: 'Eight',
            ar: 'ثمانية',
            uk: 'Вісім',
            fr: 'Huit'
          },
          emoji: '8️⃣',
          color: '#EBF8FF'
        },
        {
          word: 'Nueve (9)',
          translations: {
            en: 'Nine',
            ar: 'تسعة',
            uk: 'Дев\'ять',
            fr: 'Neuf'
          },
          emoji: '9️⃣',
          color: '#EBF8FF'
        },
        {
          word: 'Diez (10)',
          translations: {
            en: 'Ten',
            ar: 'عشرة',
            uk: 'Десять',
            fr: 'Dix'
          },
          emoji: '🔟',
          color: '#EBF8FF'
        },
        {
          word: 'Once (11)',
          translations: {
            en: 'Eleven',
            ar: 'أحد عشر',
            uk: 'Одинадцять',
            fr: 'Onze'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Doce (12)',
          translations: {
            en: 'Twelve',
            ar: 'اثنا عشر',
            uk: 'Дванадцять',
            fr: 'Douze'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Trece (13)',
          translations: {
            en: 'Thirteen',
            ar: 'ثلاثة عشر',
            uk: 'Тринадцять',
            fr: 'Treize'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Catorce (14)',
          translations: {
            en: 'Fourteen',
            ar: 'أربعة عشر',
            uk: 'Чотирнадцять',
            fr: 'Quatorze'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Quince (15)',
          translations: {
            en: 'Fifteen',
            ar: 'خمسة عشر',
            uk: 'П\'ятнадцять',
            fr: 'Quinze'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Dieciséis (16)',
          translations: {
            en: 'Sixteen',
            ar: 'ستة javaعشر',
            uk: 'Шістнадцять',
            fr: 'Seize'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Diecisiete (17)',
          translations: {
            en: 'Seventeen',
            ar: 'سبعة عشر',
            uk: 'Сімнадцять',
            fr: 'Dix-sept'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Dieciocho (18)',
          translations: {
            en: 'Eighteen',
            ar: 'ثمانية عشر',
            uk: 'Вісімнадцять',
            fr: 'Dix-huit'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Diecinueve (19)',
          translations: {
            en: 'Nineteen',
            ar: 'تسعة عشر',
            uk: 'Дев\'ятнадцять',
            fr: 'Dix-neuf'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veinte (20)',
          translations: {
            en: 'Twenty',
            ar: 'عشرون',
            uk: 'Двадцять',
            fr: 'Vingt'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veintiuno (21)',
          translations: {
            en: 'Twenty-one',
            ar: 'واحد وعشرون',
            uk: 'Двадцять один',
            fr: 'Vingt et un'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veintidós (22)',
          translations: {
            en: 'Twenty-two',
            ar: 'اثنان وعشرون',
            uk: 'Двадцять два',
            fr: 'Vingt-deux'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veintitrés (23)',
          translations: {
            en: 'Twenty-three',
            ar: 'ثلاثة وعشرون',
            uk: 'Двадцять три',
            fr: 'Vingt-trois'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veinticuatro (24)',
          translations: {
            en: 'Twenty-four',
            ar: 'أربعة وعشرon',
            uk: 'Двадцять чотири',
            fr: 'Vingt-quatre'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veinticinco (25)',
          translations: {
            en: 'Twenty-five',
            ar: 'خمسة وعشرون',
            uk: 'Двадцять п\'ять',
            fr: 'Vingt-cinq'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veintiséis (26)',
          translations: {
            en: 'Twenty-six',
            ar: 'ستة وعشرون',
            uk: 'Двадцять шість',
            fr: 'Vingt-six'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veintisiete (27)',
          translations: {
            en: 'Twenty-seven',
            ar: 'سبعة وعشرون',
            uk: 'Двадцять сім',
            fr: 'Vingt-sept'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veintiocho (28)',
          translations: {
            en: 'Twenty-eight',
            ar: 'ثمانية وعشرون',
            uk: 'Двадцять вісім',
            fr: 'Vingt-huit'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Veintinueve (29)',
          translations: {
            en: 'Twenty-nine',
            ar: 'تسعة وعشرون',
            uk: 'Двадцять дев\'ять',
            fr: 'Vingt-neuf'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: 'Treinta (30)',
          translations: {
            en: 'Thirty',
            ar: 'ثلاثون',
            uk: 'Тридцять',
            fr: 'Trente'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        }
      ],
    content: `
## A contar...

Saber los números nos ayuda a decir nuestra edad, la hora o precios.
Los primeros 10 son:

*   1 = **Uno**
*   2 = **Dos**
*   3 = **Tres**
*   4 = **Cuatro**
*   5 = **Cinco**
*   6 = **Seis**
*   7 = **Siete**
*   8 = **Ocho**
*   9 = **Nueve**
*   10 = **Diez**
    `,
    exercises: [
      {
        id: "ex1",
        question: `¿Qué número es el 'Cinco'? <trans en="(What number is 'Five'?)" ar="(ما هو الرقم "خمسة"؟)" uk="(Яке число "п'ять"?)" fr="(Quel nombre est « Cinq » ?)"/>`,
        options: ["6 <trans en=\"(6)\" ar=\"(6)\" uk=\"(6)\" fr=\"(6)\"/>", "5 <trans en=\"(5)\" ar=\"(5)\" uk=\"(5)\" fr=\"(5)\"/>", "10 <trans en=\"(10)\" ar=\"(10)\" uk=\"(10)\" fr=\"(10)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `3 en español es... <trans en="(3 in Spanish is...)" ar="(3 بالإسبانية...)" uk="(3 іспанською - це...)" fr="(3 en espagnol c'est...)"/>`,
        options: ["Tres <trans en=\"(Three)\" ar=\"(ثلاثة)\" uk=\"(Три)\" fr=\"(Trois)\"/>", "Dos <trans en=\"(Two)\" ar=\"(اثنان)\" uk=\"(Два)\" fr=\"(Deux)\"/>", "Uno <trans en=\"(One)\" ar=\"(واحد)\" uk=\"(Один)\" fr=\"(Un)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `10 + 5 = ? <trans en="(10 + 5 = ?)" ar="(10 + 5 = ؟)" uk="(10 + 5 = ?)" fr="(10 + 5 = ?)"/>`,
        options: ["Quince <trans en=\"(Fifteen)\" ar=\"(خمسة عشر)\" uk=\"(П'ятнадцять)\" fr=\"(Quinze)\"/>", "Catorce <trans en=\"(Fourteen)\" ar=\"(أربعة عشر)\" uk=\"(Чотирнадцять)\" fr=\"(Quatorze)\"/>", "Dieciséis <trans en=\"(Sixteen)\" ar=\"(ستة عشر)\" uk=\"(Шістнадцять)\" fr=\"(Seize)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `20 <trans en="(20)" ar="(20)" uk="(20)" fr="(20)"/>`,
        options: ["Veinte <trans en=\"(Twenty)\" ar=\"(عشرين)\" uk=\"(Двадцять)\" fr=\"(Vingt)\"/>", "Doce <trans en=\"(Twelve)\" ar=\"(اثنا عشر)\" uk=\"(Дванадцять)\" fr=\"(Douze)\"/>", "Diez <trans en=\"(Ten)\" ar=\"(عشرة)\" uk=\"(Десять)\" fr=\"(Dix)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `El número antes de diez es... <trans en="(The number before ten is...)" ar="(الرقم قبل العشرة هو...)" uk="(Число до десяти є...)" fr="(Le nombre avant dix est...)"/>`,
        options: ["Nueve <trans en=\"(Nine)\" ar=\"(تسعة)\" uk=\"(Дев'ять)\" fr=\"(Neuf)\"/>", "Once <trans en=\"(Eleven)\" ar=\"(أحد عشر)\" uk=\"(Одинадцять)\" fr=\"(Onze)\"/>", "Ocho <trans en=\"(Eight)\" ar=\"(ثمانية)\" uk=\"(Вісім)\" fr=\"(Huit)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `El número '15' se dice: <trans en="(The number '15' is said:)" ar="(يقال الرقم "15":)" uk="(Число '15' говориться:)" fr="(Le nombre '15' se dit :)"/>`,
        options: ["Quince <trans en=\"(Fifteen)\" ar=\"(خمسة عشر)\" uk=\"(П'ятнадцять)\" fr=\"(Quinze)\"/>", "Cinco <trans en=\"(Five)\" ar=\"(خمسة)\" uk=\"(П'ять)\" fr=\"(Cinq)\"/>", "Cincuenta <trans en=\"(Fifty)\" ar=\"(خمسون)\" uk=\"(П'ятдесят)\" fr=\"(Cinquante)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `50 <trans en="(50)" ar="(50)" uk="(50)" fr="(50)"/>`,
        options: ["Cincuenta <trans en=\"(Fifty)\" ar=\"(خمسون)\" uk=\"(П'ятдесят)\" fr=\"(Cinquante)\"/>", "Cinco <trans en=\"(Five)\" ar=\"(خمسة)\" uk=\"(П'ять)\" fr=\"(Cinq)\"/>", "Quince <trans en=\"(Fifteen)\" ar=\"(خمسة عشر)\" uk=\"(П'ятнадцять)\" fr=\"(Quinze)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `100 <trans en="(100)" ar="(100)" uk="(100)" fr="(100)"/>`,
        options: ["Cien <trans en=\"(One hundred)\" ar=\"(مائة)\" uk=\"(Сто)\" fr=\"(Cent)\"/>", "Cero <trans en=\"(Zero)\" ar=\"(صفر)\" uk=\"(Нуль)\" fr=\"(Zéro)\"/>", "Cincuenta <trans en=\"(Fifty)\" ar=\"(خمسون)\" uk=\"(П'ятдесят)\" fr=\"(Cinquante)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `30 <trans en="(30)" ar="(30)" uk="(30)" fr="(30)"/>`,
        options: ["Treinta <trans en=\"(Thirty)\" ar=\"(ثلاثون)\" uk=\"(Тридцять)\" fr=\"(Trente)\"/>", "Tres <trans en=\"(Three)\" ar=\"(ثلاثة)\" uk=\"(Три)\" fr=\"(Trois)\"/>", "Trece <trans en=\"(Thirteen)\" ar=\"(ثلاثة عشر)\" uk=\"(Тринадцять)\" fr=\"(Treize)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `El número después de 'veintinueve' es: <trans en="(The number after 'twenty-nine' is:)" ar="(الرقم بعد "تسعة وعشرون" هو:)" uk="(Число після "двадцяти дев'яти" таке:)" fr="(Le nombre après « vingt-neuf » est :)"/>`,
        options: ["Treinta <trans en=\"(Thirty)\" ar=\"(ثلاثون)\" uk=\"(Тридцять)\" fr=\"(Trente)\"/>", "Veintiocho <trans en=\"(Twenty-eight)\" ar=\"(ثمانية وعشرون)\" uk=\"(Двадцять вісім)\" fr=\"(Vingt-huit)\"/>", "Cuarenta <trans en=\"(Forty)\" ar=\"(أربعون)\" uk=\"(Сорок)\" fr=\"(Quarante)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `2 + 2 = ? <trans en="(2 + 2 = ?)" ar="(2 + 2 = ؟)" uk="(2 + 2 = ?)" fr="(2 + 2 = ?)"/>`,
        options: ["Cuatro <trans en=\"(Four)\" ar=\"(أربعة)\" uk=\"(Чотири)\" fr=\"(Quatre)\"/>", "Cinco <trans en=\"(Five)\" ar=\"(خمسة)\" uk=\"(П'ять)\" fr=\"(Cinq)\"/>", "Seis <trans en=\"(Six)\" ar=\"(ستة)\" uk=\"(Шість)\" fr=\"(Six)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `12 <trans en="(12)" ar="(12)" uk="(12)" fr="(12)"/>`,
        options: ["Doce <trans en=\"(Twelve)\" ar=\"(اثنا عشر)\" uk=\"(Дванадцять)\" fr=\"(Douze)\"/>", "Dos <trans en=\"(Two)\" ar=\"(اثنان)\" uk=\"(Два)\" fr=\"(Deux)\"/>", "Veinte <trans en=\"(Twenty)\" ar=\"(عشرين)\" uk=\"(Двадцять)\" fr=\"(Vingt)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `¿Cuántos meses tiene un año? <trans en="(How many months are in a year?)" ar="(كم عدد الشهور في السنة؟)" uk="(Скільки місяців у році?)" fr="(Combien de mois y a-t-il dans une année ?)"/>`,
        options: ["Doce <trans en=\"(Twelve)\" ar=\"(اثنا عشر)\" uk=\"(Дванадцять)\" fr=\"(Douze)\"/>", "Diez <trans en=\"(Ten)\" ar=\"(عشرة)\" uk=\"(Десять)\" fr=\"(Dix)\"/>", "Once <trans en=\"(Eleven)\" ar=\"(أحد عشر)\" uk=\"(Одинадцять)\" fr=\"(Onze)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿Cuántos días tiene una semana? <trans en="(How many days are there in a week?)" ar="(كم عدد أيام الأسبوع؟)" uk="(Скільки днів у тижні?)" fr="(Combien y a-t-il de jours dans une semaine ?)"/>`,
        options: ["Siete <trans en=\"(Seven)\" ar=\"(سبعة)\" uk=\"(Сім)\" fr=\"(Sept)\"/>", "Cinco <trans en=\"(Five)\" ar=\"(خمسة)\" uk=\"(П'ять)\" fr=\"(Cinq)\"/>", "Seis <trans en=\"(Six)\" ar=\"(ستة)\" uk=\"(Шість)\" fr=\"(Six)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `El número '40' se escribe: <trans en="(The number '40' is written:)" ar="(يتم كتابة الرقم "40":)" uk="(Число «40» пишеться:)" fr="(Le nombre '40' s'écrit :)"/>`,
        options: ["Cuarenta <trans en=\"(Forty)\" ar=\"(أربعون)\" uk=\"(Сорок)\" fr=\"(Quarante)\"/>", "Cuatro <trans en=\"(Four)\" ar=\"(أربعة)\" uk=\"(Чотири)\" fr=\"(Quatre)\"/>", "Catorce <trans en=\"(Fourteen)\" ar=\"(أربعة عشر)\" uk=\"(Чотирнадцять)\" fr=\"(Quatorze)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `¿Cómo se dice 'zero' en español? <trans en="(How do you say 'zero' in Spanish?)" ar="(كيف تقول "صفر" بالإسبانية؟)" uk="(Як сказати «нуль» іспанською?)" fr="(Comment dit-on « zéro » en espagnol ?)"/>`,
        options: ["Cero <trans en=\"(Zero)\" ar=\"(صفر)\" uk=\"(Нуль)\" fr=\"(Zéro)\"/>", "Uno <trans en=\"(One)\" ar=\"(واحد)\" uk=\"(Один)\" fr=\"(Un)\"/>", "Nada <trans en=\"(Nothing)\" ar=\"(لا شيء)\" uk=\"(Нічого)\" fr=\"(Rien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `21 <trans en="(21)" ar="(21)" uk="(21)" fr="(21)"/>`,
        options: ["Veintiuno <trans en=\"(Twenty-one)\" ar=\"(واحد وعشرون)\" uk=\"(Двадцять один)\" fr=\"(Vingt et un)\"/>", "Veinte uno <trans en=\"(Twenty one)\" ar=\"(واحد وعشرون)\" uk=\"(Двадцять один)\" fr=\"(Vingt et un)\"/>", "Veinte y uno <trans en=\"(Twenty-one)\" ar=\"(واحد وعشرون)\" uk=\"(Двадцять один)\" fr=\"(Vingt et un)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `11 <trans en="(11)" ar="(11)" uk="(11)" fr="(11)"/>`,
        options: ["Once <trans en=\"(Eleven)\" ar=\"(أحد عشر)\" uk=\"(Одинадцять)\" fr=\"(Onze)\"/>", "Diez y uno <trans en=\"(Ten and one)\" ar=\"(عشرة وواحد)\" uk=\"(Десять і один)\" fr=\"(Dix et un)\"/>", "Unce <trans en=\"(Unce)\" ar=\"(أونس)\" uk=\"(Unce)\" fr=\"(Une fois)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `¿Cuántas horas tiene un día? <trans en="(How many hours are there in a day?)" ar="(كم عدد الساعات الموجودة في اليوم الواحد؟)" uk="(Скільки годин у добі?)" fr="(Combien d'heures y a-t-il dans une journée ?)"/>`,
        options: ["Veinticuatro <trans en=\"(Twenty-four)\" ar=\"(أربعة وعشرون)\" uk=\"(Двадцять чотири)\" fr=\"(Vingt-quatre)\"/>", "Doce <trans en=\"(Twelve)\" ar=\"(اثنا عشر)\" uk=\"(Дванадцять)\" fr=\"(Douze)\"/>", "Treinta <trans en=\"(Thirty)\" ar=\"(ثلاثون)\" uk=\"(Тридцять)\" fr=\"(Trente)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `10 + 5 = ? (Extra) <trans en="(10 + 5 = ? (Bonus))" ar="(10 + 5 = ؟ (مكافأة))" uk="(10 + 5 = ? (Бонус))" fr="(10 + 5 = ? (Prime))"/>`,
        options: ["Quince <trans en=\"(Fifteen)\" ar=\"(خمسة عشر)\" uk=\"(П'ятнадцять)\" fr=\"(Quinze)\"/>", "Catorce <trans en=\"(Fourteen)\" ar=\"(أربعة عشر)\" uk=\"(Чотирнадцять)\" fr=\"(Quatorze)\"/>", "Dieciséis <trans en=\"(Sixteen)\" ar=\"(ستة عشر)\" uk=\"(Шістнадцять)\" fr=\"(Seize)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-vocab-nacionalidades",
    topic: "Países",
    title: "Países y Nacionalidades",
    level: "A1",
    category: "Vocabulario",
    description: "España y español. Inglaterra y británico. Aprende cómo hablar de orígenes.",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&auto=format&fit=crop&q=80",
    emoji: "🌐",
    color: "#FEFCBF",
    vocabulary: [
        {
          word: 'España / español',
          translations: {
            en: 'Spain / Spanish',
            ar: 'إسبانيا / إسباني',
            uk: 'Іспанія / іспанець',
            fr: 'Espagne / espagnol'
          },
          emoji: '🇪🇸',
          color: '#FFF5F5'
        },
        {
          word: 'Marruecos / marroquí',
          translations: {
            en: 'Morocco / Moroccan',
            ar: 'المغرب / مغربي',
            uk: 'Марокко / марокканець',
            fr: 'Maroc / marocain'
          },
          emoji: '🇲🇦',
          color: '#FCE8E8'
        },
        {
          word: 'Francia / francés',
          translations: {
            en: 'France / French',
            ar: 'فرنسا / فرنسي',
            uk: 'Франція / француз',
            fr: 'France / français'
          },
          emoji: '🇫🇷',
          color: '#E3EEF9'
        },
        {
          word: 'Senegal / senegalés',
          translations: {
            en: 'Senegal / Senegalese',
            ar: 'السنغال / سنغالي',
            uk: 'Сенегал / сенегалець',
            fr: 'Sénégal / sénégalais'
          },
          emoji: '🇸🇳',
          color: '#E2F3E7'
        },
        {
          word: 'Inglaterra / inglés',
          translations: {
            en: 'England / English',
            ar: 'إنجلترا / إنجليزي',
            uk: 'Англія / англієць',
            fr: 'Angleterre / anglais'
          },
          emoji: '🇬🇧',
          color: '#EBF8FF'
        },
        {
          word: 'Alemania / alemán',
          translations: {
            en: 'Germany / German',
            ar: 'ألمانيا / ألماني',
            uk: 'Німеччина / німець',
            fr: 'Allemagne / allemand'
          },
          emoji: '🇩🇪',
          color: '#FFF4E5'
        },
        {
          word: 'Italia / italiano',
          translations: {
            en: 'Italy / Italian',
            ar: 'إيطاليا / إيطالي',
            uk: 'Італія / італієць',
            fr: 'Italie / italien'
          },
          emoji: '🇮🇹',
          color: '#E2F3E7'
        },
        {
          word: 'Portugal / portugués',
          translations: {
            en: 'Portugal / Portuguese',
            ar: 'البرتغال / برتغالي',
            uk: 'Португалія / португалець',
            fr: 'Portugal / portugais'
          },
          emoji: '🇵🇹',
          color: '#EBF8FF'
        },
        {
          word: 'Rumanía / rumano',
          translations: {
            en: 'Romania / Romanian',
            ar: 'رومانيا / روماني',
            uk: 'Румунія / румун',
            fr: 'Roumanie / roumain'
          },
          emoji: '🇷🇴',
          color: '#FFF5F5'
        },
        {
          word: 'Ucrania / ucraniano',
          translations: {
            en: 'Ukraine / Ukrainian',
            ar: 'أوكرانيا / أوكراني',
            uk: 'Україна / українець',
            fr: 'Ukraine / ukrainien'
          },
          emoji: '🇺🇦',
          color: '#EBF8FF'
        },
        {
          word: 'China / chino',
          translations: {
            en: 'China / Chinese',
            ar: 'الصين / صيني',
            uk: 'Китай / китаєць',
            fr: 'Chine / chinois'
          },
          emoji: '🇨🇳',
          color: '#FFF5F5'
        },
        {
          word: 'Japón / japonés',
          translations: {
            en: 'Japan / Japanese',
            ar: 'اليابان / ياباني',
            uk: 'Японія / японець',
            fr: 'Japon / japonais'
          },
          emoji: '🇯🇵',
          color: '#FFF5F5'
        },
        {
          word: 'India / indio',
          translations: {
            en: 'India / Indian',
            ar: 'الهند / هندي',
            uk: 'Індія / індієць',
            fr: 'Inde / indien'
          },
          emoji: '🇮🇳',
          color: '#FEFCBF'
        },
        {
          word: 'Estados Unidos / estadounidense',
          translations: {
            en: 'USA / American',
            ar: 'الولايات المتحدة / أمريكي',
            uk: 'США / американець',
            fr: 'États-Unis / américain'
          },
          emoji: '🇺🇸',
          color: '#E3EEF9'
        },
        {
          word: 'México / mexicano',
          translations: {
            en: 'Mexico / Mexican',
            ar: 'المكسيك / مكسيكي',
            uk: 'Мексика / мексиканець',
            fr: 'Mexique / mexicain'
          },
          emoji: '🇲🇽',
          color: '#E2F3E7'
        },
        {
          word: 'Colombia / colombiano',
          translations: {
            en: 'Colombia / Colombian',
            ar: 'كولومبيا / كولومبي',
            uk: 'Колумбія / колумбієць',
            fr: 'Colombie / colombien'
          },
          emoji: '🇨🇴',
          color: '#FFF4E5'
        },
        {
          word: 'Argentina / argentino',
          translations: {
            en: 'Argentina / Argentine',
            ar: 'الأرجنتين / أرجنتيني',
            uk: 'Аргентина / аргентинець',
            fr: 'Argentine / argentin'
          },
          emoji: '🇦🇷',
          color: '#E3EEF9'
        },
        {
          word: 'Brasil / brasileño',
          translations: {
            en: 'Brazil / Brazilian',
            ar: 'البرازيل / برازيلي',
            uk: 'Бразилія / бразилець',
            fr: 'Brésil / brésilien'
          },
          emoji: '🇧🇷',
          color: '#E2F3E7'
        },
        {
          word: 'Nigeria / nigeriano',
          translations: {
            en: 'Nigeria / Nigerian',
            ar: 'نيجيريا / نيجيري',
            uk: 'Нігерія / нігерієць',
            fr: 'Nigeria / nigérian'
          },
          emoji: '🇳🇬',
          color: '#E2F3E7'
        },
        {
          word: 'Egipto / egipcio',
          translations: {
            en: 'Egypt / Egyptian',
            ar: 'مصر / مصري',
            uk: 'Єгипет / єгиптянин',
            fr: 'Égypte / égyptien'
          },
          emoji: '🇪🇬',
          color: '#FFF4E5'
        },
        {
          word: 'Rusia / ruso',
          translations: {
            en: 'Russia / Russian',
            ar: 'روسيا / روسي',
            uk: 'Росія / росіянин',
            fr: 'Russie / russe'
          },
          emoji: '🇷🇺',
          color: '#E3EEF9'
        },
        {
          word: 'Pakistán / pakistaní',
          translations: {
            en: 'Pakistan / Pakistani',
            ar: 'باكستان / باكستاني',
            uk: 'Пакистан / пакистанець',
            fr: 'Pakistan / pakistanais'
          },
          emoji: '🇵🇰',
          color: '#E2F3E7'
        },
        {
          word: 'Mali / maliense',
          translations: {
            en: 'Mali / Malian',
            ar: 'مالي / مالي',
            uk: 'Малі / малієць',
            fr: 'Mali / malien'
          },
          emoji: '🇲🇱',
          color: '#FFF4E5'
        },
        {
          word: 'Argelia / argelino',
          translations: {
            en: 'Algeria / Algerian',
            ar: 'الجزائر / جزائري',
            uk: 'Алжир / алжирець',
            fr: 'Algérie / algérien'
          },
          emoji: '🇩🇿',
          color: '#E2F3E7'
        },
        {
          word: 'Rumanía / rumano',
          translations: {
            en: 'Romania / Romanian',
            ar: 'رومانيا / روماني',
            uk: 'Румунія / румун',
            fr: 'Roumanie / roumain'
          },
          emoji: '🇷🇴',
          color: '#FFF5F5'
        },
        {
          word: 'Venezuela / venezolano',
          translations: {
            en: 'Venezuela / Venezuelan',
            ar: 'فنزويلا / فنزويلي',
            uk: 'Венесуела / венесуелець',
            fr: 'Venezuela / vénézuélien'
          },
          emoji: '🇻🇪',
          color: '#FFF4E5'
        },
        {
          word: 'Ecuador / ecuatoriano',
          translations: {
            en: 'Ecuador / Ecuadorian',
            ar: 'الإكوادور / إكوادوري',
            uk: 'Еквадор / еквадорець',
            fr: 'Équateur / équatorien'
          },
          emoji: '🇪🇨',
          color: '#FEFCBF'
        },
        {
          word: 'Perú / peruano',
          translations: {
            en: 'Peru / Peruvian',
            ar: 'بيرو / بيروفي',
            uk: 'Перу / перуанець',
            fr: 'Pérou / péruvien'
          },
          emoji: '🇵🇪',
          color: '#FFF4E5'
        },
        {
          word: 'Canadá / canadiense',
          translations: {
            en: 'Canada / Canadian',
            ar: 'كندا / كندي',
            uk: 'Канада / канадець',
            fr: 'Canada / canadien'
          },
          emoji: '🇨🇦',
          color: '#EBF8FF'
        },
        {
          word: 'Australia / australiano',
          translations: {
            en: 'Australia / Australian',
            ar: 'أستراليا / أسترالي',
            uk: 'Австралія / австралієць',
            fr: 'Australie / australien'
          },
          emoji: '🇦🇺',
          color: '#EBF8FF'
        }
      ],
    content: `
## País y Nacionalidad

Del país (el lugar) viene la palabra sobre tu origen (la nacionalidad).

*   País: **España**. "Yo soy de España".
*   Nacionalidad: **Español / Española**. "Yo soy español".

*   País: **Inglaterra**. "Vivo en Inglaterra".
*   Nacionalidad: **Inglés / Inglesa**.

*   País: **Marruecos**.
*   Nacionalidad: **Marroquí**. *(No cambia para masculino/femenino).*
    `,
    exercises: [
      {
        id: "ex1",
        question: `Una persona de Francia es... <trans en="(A person from France is...)" ar="(شخص من فرنسا...)" uk="(Людина з Франції...)" fr="(Une personne de France est...)"/>`,
        options: ["francés <trans en=\"(french)\" ar=\"(الفرنسية)\" uk=\"(французька)\" fr=\"(français)\"/>", "franco <trans en=\"(frank)\" ar=\"(صريح)\" uk=\"(відверто)\" fr=\"(franc)\"/>", "francia <trans en=\"(france)\" ar=\"(فرنسا)\" uk=\"(Франція)\" fr=\"(france)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: `Fátima es de Marruecos. Ella es... <trans en="(Fatima is from Morocco. She is...)" ar="(فاطمة من المغرب. هي...)" uk="(Фатіма з Марокко. вона...)" fr="(Fatima vient du Maroc. Elle est...)"/>`,
        options: ["marrueca <trans en=\"(morocco)\" ar=\"(المغرب)\" uk=\"(Марокко)\" fr=\"(maroc)\"/>", "marroquí <trans en=\"(Moroccan)\" ar=\"(مغربية)\" uk=\"(Марокканський)\" fr=\"(Marocain)\"/>", "marruecos <trans en=\"(morocco)\" ar=\"(المغرب)\" uk=\"(Марокко)\" fr=\"(maroc)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: `Él es de Francia. Él es... <trans en="(He is from France. He is...)" ar="(هو من فرنسا. هو...)" uk="(Він із Франції. Він...)" fr="(Il vient de France. Il est...)"/>`,
        options: ["Francés <trans en=\"(French)\" ar=\"(الفرنسية)\" uk=\"(Французька)\" fr=\"(Français)\"/>", "Francia <trans en=\"(France)\" ar=\"(فرنسا)\" uk=\"(Франція)\" fr=\"(France)\"/>", "Francésa <trans en=\"(French)\" ar=\"(الفرنسية)\" uk=\"(Французька)\" fr=\"(Français)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `Ella es de España. Ella es... <trans en="(She is from Spain. She is...)" ar="(هي من اسبانيا. هي...)" uk="(Вона з Іспанії. вона...)" fr="(Elle vient d'Espagne. Elle est...)"/>`,
        options: ["Española <trans en=\"(Spanish)\" ar=\"(الاسبانية)\" uk=\"(Іспанська)\" fr=\"(Espagnol)\"/>", "Español <trans en=\"(Spanish)\" ar=\"(الاسبانية)\" uk=\"(Іспанська)\" fr=\"(Espagnol)\"/>", "España <trans en=\"(Spain)\" ar=\"(اسبانيا)\" uk=\"(Іспанія)\" fr=\"(Espagne)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Ellos son de Alemania. Son... <trans en="(They are from Germany. They are...)" ar="(وهم من ألمانيا. هم...)" uk="(Вони з Німеччини. Вони...)" fr="(Ils viennent d'Allemagne. Ils sont...)"/>`,
        options: ["Alemanes <trans en=\"(Germans)\" ar=\"(الألمان)\" uk=\"(Німці)\" fr=\"(Allemands)\"/>", "Alemán <trans en=\"(German)\" ar=\"(الألمانية)\" uk=\"(Німецька)\" fr=\"(Allemand)\"/>", "Alemanias <trans en=\"(Germanys)\" ar=\"(المانيا)\" uk=\"(Німеччини)\" fr=\"(Allemagne)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `Yo soy de Italia. Yo soy... <trans en="(I am from Italy. I am...)" ar="(أنا من إيطاليا. انا...)" uk="(Я з Італії. я...)" fr="(Je viens d'Italie. je suis...)"/>`,
        options: ["Italiano/a <trans en=\"(Italian)\" ar=\"(ايطالي)\" uk=\"(Італійська)\" fr=\"(Italien)\"/>", "Italia <trans en=\"(Italy)\" ar=\"(إيطاليا)\" uk=\"(Італія)\" fr=\"(Italie)\"/>", "Italio <trans en=\"(Italy)\" ar=\"(إيطاليا)\" uk=\"(Італія)\" fr=\"(Italie)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Ella es de Estados Unidos. Es... <trans en="(She is from the United States. It's...)" ar="(هي من الولايات المتحدة. انها...)" uk="(Вона зі Сполучених Штатів. Це...)" fr="(Elle vient des États-Unis. C'est...)"/>`,
        options: ["Estadounidense <trans en=\"(United States)\" ar=\"(أمريكي)\" uk=\"(Американський)\" fr=\"(Américain)\"/>", "Americana <trans en=\"(American)\" ar=\"(أمريكي)\" uk=\"(Американський)\" fr=\"(Américain)\"/>", "Las dos son correctas <trans en=\"(Both are correct)\" ar=\"(كلاهما صحيح)\" uk=\"(Обидва правильні)\" fr=\"(Les deux sont corrects)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex8",
        question: `Él es de Japón. Él es... <trans en="(He is from Japan. He is...)" ar="(هو من اليابان. هو...)" uk="(Він з Японії. Він...)" fr="(Il vient du Japon. Il est...)"/>`,
        options: ["Japonés <trans en=\"(Japanese)\" ar=\"(اليابانية)\" uk=\"(Японська)\" fr=\"(Japonais)\"/>", "Japón <trans en=\"(Japan)\" ar=\"(اليابان)\" uk=\"(Японія)\" fr=\"(Japon)\"/>", "Japonesa <trans en=\"(Japanese)\" ar=\"(يابانية)\" uk=\"(Японська)\" fr=\"(Japonais)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Nosotros somos de México. Somos... <trans en="(We are from Mexico. We are...)" ar="(نحن من المكسيك. نحن...)" uk="(Ми з Мексики. ми...)" fr="(Nous venons du Mexique. Nous sommes...)"/>`,
        options: ["Mexicanos <trans en=\"(Mexicans)\" ar=\"(المكسيكيون)\" uk=\"(Мексиканці)\" fr=\"(Mexicains)\"/>", "México <trans en=\"(Mexico)\" ar=\"(المكسيك)\" uk=\"(Мексика)\" fr=\"(Mexique)\"/>", "Mexicano <trans en=\"(Mexican)\" ar=\"(مكسيكي)\" uk=\"(Мексиканська)\" fr=\"(Mexicain)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Ella es de Inglaterra. Ella es... <trans en="(She is from England. She is...)" ar="(إنها من إنجلترا. هي...)" uk="(Вона з Англії. вона...)" fr="(Elle vient d'Angleterre. Elle est...)"/>`,
        options: ["Inglesa <trans en=\"(English)\" ar=\"(الانجليزية)\" uk=\"(Англійська)\" fr=\"(Anglais)\"/>", "Inglés <trans en=\"(English)\" ar=\"(الإنجليزية)\" uk=\"(Англійська)\" fr=\"(Anglais)\"/>", "Inglaterra <trans en=\"(England)\" ar=\"(انجلترا)\" uk=\"(Англія)\" fr=\"(Angleterre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Él es de China. Él es... <trans en="(He is from China. He is...)" ar="(وهو من الصين. هو...)" uk="(Він з Китаю. Він...)" fr="(Il vient de Chine. Il est...)"/>`,
        options: ["Chino <trans en=\"(Chinese)\" ar=\"(الصينية)\" uk=\"(Китайська)\" fr=\"(Chinois)\"/>", "China <trans en=\"(China)\" ar=\"(الصين)\" uk=\"(Китай)\" fr=\"(Chine)\"/>", "Chinesco <trans en=\"(Chinese)\" ar=\"(صيني)\" uk=\"(Китайська)\" fr=\"(Chinois)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `Ella es de Marruecos. Ella es... <trans en="(She is from Morocco. She is...)" ar="(هي من المغرب. هي...)" uk="(Вона з Марокко. вона...)" fr="(Elle vient du Maroc. Elle est...)"/>`,
        options: ["Marroquí <trans en=\"(Moroccan)\" ar=\"(مغربية)\" uk=\"(Марокканський)\" fr=\"(Marocain)\"/>", "Marrueca <trans en=\"(Morocco)\" ar=\"(المغرب)\" uk=\"(Марокко)\" fr=\"(Maroc)\"/>", "Marroquesa <trans en=\"(Moroccan)\" ar=\"(مغربية)\" uk=\"(Марокканський)\" fr=\"(Marocain)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Ellos son de Brasil. Son... <trans en="(They are from Brazil. They are...)" ar="(وهم من البرازيل. هم...)" uk="(Вони з Бразилії. Вони...)" fr="(Ils viennent du Brésil. Ils sont...)"/>`,
        options: ["Brasileños <trans en=\"(Brazilians)\" ar=\"(البرازيليين)\" uk=\"(Бразильці)\" fr=\"(Brésiliens)\"/>", "Brasil <trans en=\"(Brazil)\" ar=\"(البرازيل)\" uk=\"(Бразилія)\" fr=\"(Brésil)\"/>", "Brasileros <trans en=\"(Brazilians)\" ar=\"(البرازيليين)\" uk=\"(Бразильці)\" fr=\"(Brésiliens)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Él es de Portugal. Él es... <trans en="(He is from Portugal. He is...)" ar="(هو من البرتغال. هو...)" uk="(Він з Португалії. Він...)" fr="(Il vient du Portugal. Il est...)"/>`,
        options: ["Portugués <trans en=\"(Portuguese)\" ar=\"(البرتغالية)\" uk=\"(Португальська)\" fr=\"(Portugais)\"/>", "Portugal <trans en=\"(Portugal)\" ar=\"(البرتغال)\" uk=\"(Португалія)\" fr=\"(Portugal)\"/>", "Portuguesa <trans en=\"(Portuguese)\" ar=\"(البرتغالية)\" uk=\"(Португальська)\" fr=\"(Portugais)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Ella es de Rusia. Ella es... <trans en="(She is from Russia. She is...)" ar="(هي من روسيا. هي...)" uk="(Вона з Росії. вона...)" fr="(Elle vient de Russie. Elle est...)"/>`,
        options: ["Rusa <trans en=\"(Russian)\" ar=\"(روسي)\" uk=\"(Російська)\" fr=\"(Russe)\"/>", "Ruso <trans en=\"(Russian)\" ar=\"(روسي)\" uk=\"(Російська)\" fr=\"(Russe)\"/>", "Rusias <trans en=\"(Russia)\" ar=\"(روسيا)\" uk=\"(Росія)\" fr=\"(Russie)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Él es de Argentina. Él es... <trans en="(He is from Argentina. He is...)" ar="(هو من الأرجنتين. هو...)" uk="(Він з Аргентини. Він...)" fr="(Il vient d'Argentine. Il est...)"/>`,
        options: ["Argentino <trans en=\"(Argentinian)\" ar=\"(أرجنتيني)\" uk=\"(Аргентинець)\" fr=\"(Argentin)\"/>", "Argentina <trans en=\"(Argentina)\" ar=\"(الارجنتين)\" uk=\"(Аргентина)\" fr=\"(Argentine)\"/>", "Argentinés <trans en=\"(Argentinian)\" ar=\"(أرجنتيني)\" uk=\"(Аргентинець)\" fr=\"(Argentin)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Ella es de Canadá. Ella es... <trans en="(She is from Canada. She is...)" ar="(هي من كندا. هي...)" uk="(Вона з Канади. вона...)" fr="(Elle vient du Canada. Elle est...)"/>`,
        options: ["Canadiense <trans en=\"(Canadian)\" ar=\"(كندي)\" uk=\"(Канадський)\" fr=\"(Canadien)\"/>", "Canadá <trans en=\"(Canada)\" ar=\"(كندا)\" uk=\"(Канада)\" fr=\"(Canada)\"/>", "Canadiensa <trans en=\"(Canadian)\" ar=\"(كندي)\" uk=\"(Канадський)\" fr=\"(Canadien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Él es de India. Él es... <trans en="(He is from India. He is...)" ar="(هو من الهند. هو...)" uk="(Він з Індії. Він...)" fr="(Il vient d'Inde. Il est...)"/>`,
        options: ["Indio <trans en=\"(Indian)\" ar=\"(هندي)\" uk=\"(Індіанець)\" fr=\"(Indien)\"/>", "Hindu <trans en=\"(Hindu)\" ar=\"(هندوسية)\" uk=\"(Індус)\" fr=\"(Hindou)\"/>", "Indies <trans en=\"(Indies)\" ar=\"(الهند)\" uk=\"(Інді)\" fr=\"(Indes)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `Ella es de Colombia. Ella es... <trans en="(She is from Colombia. She is...)" ar="(هي من كولومبيا. هي...)" uk="(Вона з Колумбії. вона...)" fr="(Elle vient de Colombie. Elle est...)"/>`,
        options: ["Colombiana <trans en=\"(Colombian)\" ar=\"(كولومبي)\" uk=\"(Колумбійський)\" fr=\"(Colombien)\"/>", "Colombiano <trans en=\"(Colombian)\" ar=\"(كولومبي)\" uk=\"(Колумбійський)\" fr=\"(Colombien)\"/>", "Colombia <trans en=\"(Colombia)\" ar=\"(كولومبيا)\" uk=\"(Колумбія)\" fr=\"(Colombie)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Él es de Francia. Él es... (Extra) <trans en="(He is from France. He is... (Extra))" ar="(هو من فرنسا. هو... (إضافي))" uk="(Він із Франції. Він... (Екстра))" fr="(Il vient de France. Il est... (Extra))"/>`,
        options: ["Francés <trans en=\"(French)\" ar=\"(الفرنسية)\" uk=\"(Французька)\" fr=\"(Français)\"/>", "Francia <trans en=\"(France)\" ar=\"(فرنسا)\" uk=\"(Франція)\" fr=\"(France)\"/>", "Francésa <trans en=\"(French)\" ar=\"(الفرنسية)\" uk=\"(Французька)\" fr=\"(Français)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-vocab-animales",
    topic: "Animales",
    title: "Animales y Naturaleza",
    level: "A2",
    category: "Vocabulario",
    description: "Vocabulario sobre árboles, montañas, y animales comunes (perro, gato, pájaro).",
    imageUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=600&auto=format&fit=crop&q=80",
    emoji: "🐶",
    color: "#FEFCBF",
    vocabulary: [
        {
          word: 'El perro',
          translations: {
            en: 'Dog',
            ar: 'كلب',
            uk: 'Собака',
            fr: 'Chien'
          },
          emoji: '🐶',
          color: '#FEFCBF'
        },
        {
          word: 'El gato',
          translations: {
            en: 'Cat',
            ar: 'قطة',
            uk: 'Кіт',
            fr: 'Chat'
          },
          emoji: '🐱',
          color: '#F3E8FF'
        },
        {
          word: 'El pájaro',
          translations: {
            en: 'Bird',
            ar: 'طائر',
            uk: 'Птах',
            fr: 'Oiseau'
          },
          emoji: '🐦',
          color: '#E3EEF9'
        },
        {
          word: 'El pez',
          translations: {
            en: 'Fish',
            ar: 'سمكة',
            uk: 'Риба',
            fr: 'Poisson'
          },
          emoji: '🐟',
          color: '#EBF8FF'
        },
        {
          word: 'El elefante',
          translations: {
            en: 'Elephant',
            ar: 'فيل',
            uk: 'Слон',
            fr: 'Éléphant'
          },
          emoji: '🐘',
          color: '#E2F3E7'
        },
        {
          word: 'La jirafa',
          translations: {
            en: 'Giraffe',
            ar: 'زرافة',
            uk: 'Жирафа',
            fr: 'Girafe'
          },
          emoji: '🦒',
          color: '#FEFCBF'
        },
        {
          word: 'El oso',
          translations: {
            en: 'Bear',
            ar: 'دب',
            uk: 'Ведмідь',
            fr: 'Ours'
          },
          emoji: '🐻',
          color: '#FFF4E5'
        },
        {
          word: 'La vaca',
          translations: {
            en: 'Cow',
            ar: 'بقرة',
            uk: 'Корова',
            fr: 'Vache'
          },
          emoji: '🐮',
          color: '#E2F3E7'
        },
        {
          word: 'El caballo',
          translations: {
            en: 'Horse',
            ar: 'حصان',
            uk: 'Кінь',
            fr: 'Cheval'
          },
          emoji: '🐎',
          color: '#FFF4E5'
        },
        {
          word: 'La oveja',
          translations: {
            en: 'Sheep',
            ar: 'خروف',
            uk: 'Вівця',
            fr: 'Mouton'
          },
          emoji: '🐑',
          color: '#F7FAFC'
        },
        {
          word: 'El león',
          translations: {
            en: 'Lion',
            ar: 'أسد',
            uk: 'Лев',
            fr: 'Lion'
          },
          emoji: '🦁',
          color: '#FEFCBF'
        },
        {
          word: 'El tigre',
          translations: {
            en: 'Tiger',
            ar: 'نمر',
            uk: 'Тигр',
            fr: 'Tigre'
          },
          emoji: '🐯',
          color: '#FFF4E5'
        },
        {
          word: 'El mono',
          translations: {
            en: 'Monkey',
            ar: 'قرد',
            uk: 'Мавпа',
            fr: 'Singe'
          },
          emoji: '🐒',
          color: '#FFF4E5'
        },
        {
          word: 'El ratón',
          translations: {
            en: 'Mouse',
            ar: 'فأر',
            uk: 'Миша',
            fr: 'Souris'
          },
          emoji: '🐭',
          color: '#CBD5E0'
        },
        {
          word: 'El conejo',
          translations: {
            en: 'Rabbit',
            ar: 'أرنب',
            uk: 'Кролик',
            fr: 'Lapin'
          },
          emoji: '🐰',
          color: '#F7FAFC'
        },
        {
          word: 'El pato',
          translations: {
            en: 'Duck',
            ar: 'بطة',
            uk: 'Качка',
            fr: 'Canard'
          },
          emoji: '🦆',
          color: '#E2F3E7'
        },
        {
          word: 'El pollo',
          translations: {
            en: 'Chicken',
            ar: 'دجاجة',
            uk: 'Курка',
            fr: 'Poulet'
          },
          emoji: '🐔',
          color: '#FEFCBF'
        },
        {
          word: 'El cerdo',
          translations: {
            en: 'Pig',
            ar: 'خنزير',
            uk: 'Свиня',
            fr: 'Cochon'
          },
          emoji: '🐷',
          color: '#FEB2B2'
        },
        {
          word: 'La cabra',
          translations: {
            en: 'Goat',
            ar: 'ماعز',
            uk: 'Коза',
            fr: 'Chèvre'
          },
          emoji: '🐐',
          color: '#EDF2F7'
        },
        {
          word: 'La tortuga',
          translations: {
            en: 'Turtle',
            ar: 'سلحفاة',
            uk: 'Черепаха',
            fr: 'Tortue'
          },
          emoji: '🐢',
          color: '#E2F3E7'
        },
        {
          word: 'La serpiente',
          translations: {
            en: 'Snake',
            ar: 'ثعبان',
            uk: 'Змія',
            fr: 'Serpent'
          },
          emoji: '🐍',
          color: '#E2F3E7'
        },
        {
          word: 'La rana',
          translations: {
            en: 'Frog',
            ar: 'ضفدع',
            uk: 'Жаба',
            fr: 'Grenouille'
          },
          emoji: '🐸',
          color: '#E2F3E7'
        },
        {
          word: 'La araña',
          translations: {
            en: 'Spider',
            ar: 'عنكبوت',
            uk: 'Павук',
            fr: 'Araignée'
          },
          emoji: '🕷️',
          color: '#CBD5E0'
        },
        {
          word: 'La mariposa',
          translations: {
            en: 'Butterfly',
            ar: 'فراشة',
            uk: 'Метелик',
            fr: 'Papillon'
          },
          emoji: '🦋',
          color: '#FBB6CE'
        },
        {
          word: 'La abeja',
          translations: {
            en: 'Bee',
            ar: 'نحلة',
            uk: 'Бджола',
            fr: 'Abeille'
          },
          emoji: '🐝',
          color: '#FEFCBF'
        },
        {
          word: 'El lobo',
          translations: {
            en: 'Wolf',
            ar: 'ذئб',
            uk: 'Вовк',
            fr: 'Loup'
          },
          emoji: '🐺',
          color: '#CBD5E0'
        },
        {
          word: 'El zorro',
          translations: {
            en: 'Fox',
            ar: 'ثعلب',
            uk: 'Лис',
            fr: 'Renard'
          },
          emoji: '🦊',
          color: '#FFF4E5'
        },
        {
          word: 'El delfín',
          translations: {
            en: 'Dolphin',
            ar: 'دولفين',
            uk: 'Дельфін',
            fr: 'Dauphin'
          },
          emoji: '🐬',
          color: '#E3EEF9'
        },
        {
          word: 'El tiburón',
          translations: {
            en: 'Shark',
            ar: 'قرش',
            uk: 'Акула',
            fr: 'Requin'
          },
          emoji: '🦈',
          color: '#E3EEF9'
        },
        {
          word: 'El águila',
          translations: {
            en: 'Eagle',
            ar: 'نسر',
            uk: 'Орел',
            fr: 'Aigle'
          },
          emoji: '🦅',
          color: '#FFF4E5'
        }
      ],
    content: `
## Mascotas y animales salvajes

## La Naturaleza
    `,
    exercises: [
      {
        id: "ex1",
        question: `¿Cuál es una mascota común en casa? <trans en="(What is a common pet at home?)" ar="(ما هو الحيوان الأليف الشائع في المنزل؟)" uk="(Який звичайний домашній улюбленець?)" fr="(Qu'est-ce qu'un animal de compagnie commun à la maison ?)"/>`,
        options: ["La montaña <trans en=\"(The mountain)\" ar=\"(الجبل)\" uk=\"(Гора)\" fr=\"(La montagne)\"/>", "El perro <trans en=\"(The dog)\" ar=\"(الكلب)\" uk=\"(Собака)\" fr=\"(Le chien)\"/>", "El árbol <trans en=\"(The tree)\" ar=\"(الشجرة)\" uk=\"(Дерево)\" fr=\"(L'arbre)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `¿Qué animal produce leche? <trans en="(What animal produces milk?)" ar="(ما هو الحيوان الذي ينتج الحليب؟)" uk="(Яка тварина дає молоко?)" fr="(Quel animal produit du lait ?)"/>`,
        options: ["La vaca <trans en=\"(The cow)\" ar=\"(البقرة)\" uk=\"(Корова)\" fr=\"(La vache)\"/>", "El perro <trans en=\"(The dog)\" ar=\"(الكلب)\" uk=\"(Собака)\" fr=\"(Le chien)\"/>", "El pez <trans en=\"(The fish)\" ar=\"(السمك)\" uk=\"(Риба)\" fr=\"(Le poisson)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Este animal tiene cuello largo: <trans en="(This animal has a long neck:)" ar="(هذا الحيوان له رقبة طويلة :)" uk="(Ця тварина має довгу шию:)" fr="(Cet animal a un long cou :)"/>`,
        options: ["Jirafa <trans en=\"(Giraffe)\" ar=\"(زرافة)\" uk=\"(Жираф)\" fr=\"(Girafe)\"/>", "Elefante <trans en=\"(Elephant)\" ar=\"(الفيل)\" uk=\"(Слон)\" fr=\"(Éléphant)\"/>", "Caballo <trans en=\"(Horse)\" ar=\"(حصان)\" uk=\"(Кінь)\" fr=\"(Cheval)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `Es el rey de la selva: <trans en="(He is the king of the jungle:)" ar="(هو ملك الغابة:)" uk="(Він король джунглів:)" fr="(C'est le roi de la jungle :)"/>`,
        options: ["León <trans en=\"(Leon)\" ar=\"(ليون)\" uk=\"(Леон)\" fr=\"(Léon)\"/>", "Tigre <trans en=\"(Tiger)\" ar=\"(النمر)\" uk=\"(Тигр)\" fr=\"(Tigre)\"/>", "Mono <trans en=\"(Monkey)\" ar=\"(قرد)\" uk=\"(Мавпа)\" fr=\"(Singe)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `¿Qué animal ladra? <trans en="(What animal barks?)" ar="(ما الحيوان الذي ينبح؟)" uk="(Яка тварина гавкає?)" fr="(Quel animal aboie ?)"/>`,
        options: ["El perro <trans en=\"(The dog)\" ar=\"(الكلب)\" uk=\"(Собака)\" fr=\"(Le chien)\"/>", "El gato <trans en=\"(The cat)\" ar=\"(القطة)\" uk=\"(Кішка)\" fr=\"(Le chat)\"/>", "El pájaro <trans en=\"(The bird)\" ar=\"(الطير)\" uk=\"(Птах)\" fr=\"(L'oiseau)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `¿Qué animal vuela? <trans en="(What animal flies?)" ar="(ما هو الحيوان الذي يطير؟)" uk="(Яка тварина літає?)" fr="(Quel animal vole ?)"/>`,
        options: ["El pájaro <trans en=\"(The bird)\" ar=\"(الطير)\" uk=\"(Птах)\" fr=\"(L'oiseau)\"/>", "La tortuga <trans en=\"(The turtle)\" ar=\"(السلحفاة)\" uk=\"(Черепаха)\" fr=\"(La tortue)\"/>", "El pez <trans en=\"(The fish)\" ar=\"(السمك)\" uk=\"(Риба)\" fr=\"(Le poisson)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Vive en el agua y nada: <trans en="(Lives in water and swims:)" ar="(يعيش في الماء ويسبح:)" uk="(Живе у воді і плаває:)" fr="(Vit dans l'eau et nage :)"/>`,
        options: ["Pez <trans en=\"(Fish)\" ar=\"(سمك)\" uk=\"(Риба)\" fr=\"(Poisson)\"/>", "Pájaro <trans en=\"(Bird)\" ar=\"(طير)\" uk=\"(Пташка)\" fr=\"(Oiseau)\"/>", "Conejo <trans en=\"(Rabbit)\" ar=\"(أرنب)\" uk=\"(Кролик)\" fr=\"(Lapin)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `El animal que maúlla es... <trans en="(The animal that meows is...)" ar="(الحيوان الذي يموء هو...)" uk="(Тварина, яка нявкає, це...)" fr="(L'animal qui miaule est...)"/>`,
        options: ["El gato <trans en=\"(The cat)\" ar=\"(القطة)\" uk=\"(Кішка)\" fr=\"(Le chat)\"/>", "El perro <trans en=\"(The dog)\" ar=\"(الكلب)\" uk=\"(Собака)\" fr=\"(Le chien)\"/>", "La vaca <trans en=\"(The cow)\" ar=\"(البقرة)\" uk=\"(Корова)\" fr=\"(La vache)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Es un animal muy lento y lleva su casa: <trans en="(It is a very slow animal and it carries its house:)" ar="(وهو حيوان بطيء جداً ويحمل بيته:)" uk="(Це дуже повільна тварина і вона несе свій будинок:)" fr="(C'est un animal très lent et il porte sa maison :)"/>`,
        options: ["Tortuga <trans en=\"(Turtle)\" ar=\"(سلحفاة)\" uk=\"(Черепаха)\" fr=\"(Tortue)\"/>", "Conejo <trans en=\"(Rabbit)\" ar=\"(أرنب)\" uk=\"(Кролик)\" fr=\"(Lapin)\"/>", "León <trans en=\"(Leon)\" ar=\"(ليون)\" uk=\"(Леон)\" fr=\"(Léon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `¿Qué animal tiene orejas largas y salta? <trans en="(What animal has long ears and jumps?)" ar="(ما هو الحيوان الذي له آذان طويلة ويقفز؟)" uk="(У якої тварини довгі вуха і стрибки?)" fr="(Quel animal a de longues oreilles et saute ?)"/>`,
        options: ["Conejo <trans en=\"(Rabbit)\" ar=\"(أرنب)\" uk=\"(Кролик)\" fr=\"(Lapin)\"/>", "Caballo <trans en=\"(Horse)\" ar=\"(حصان)\" uk=\"(Кінь)\" fr=\"(Cheval)\"/>", "Elefante <trans en=\"(Elephant)\" ar=\"(الفيل)\" uk=\"(Слон)\" fr=\"(Éléphant)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Es grande, gris y tiene trompa: <trans en="(It is big, gray and has a trunk:)" ar="(وهو كبير الحجم، رمادي اللون، وله جذع:)" uk="(Він великий, сірий і має стовбур:)" fr="(Il est grand, gris et possède une trompe :)"/>`,
        options: ["Elefante <trans en=\"(Elephant)\" ar=\"(الفيل)\" uk=\"(Слон)\" fr=\"(Éléphant)\"/>", "Jirafa <trans en=\"(Giraffe)\" ar=\"(زرافة)\" uk=\"(Жираф)\" fr=\"(Girafe)\"/>", "Tigre <trans en=\"(Tiger)\" ar=\"(النمر)\" uk=\"(Тигр)\" fr=\"(Tigre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `Animal que produce miel: <trans en="(Animal that produces honey:)" ar="(الحيوان الذي ينتج العسل :)" uk="(Тварини, що виробляють мед:)" fr="(Animal producteur de miel :)"/>`,
        options: ["Abeja <trans en=\"(Bee)\" ar=\"(النحلة)\" uk=\"(Бджола)\" fr=\"(Abeille)\"/>", "Mosca <trans en=\"(Fly)\" ar=\"(يطير)\" uk=\"(Літати)\" fr=\"(Voler)\"/>", "Mariposa <trans en=\"(Butterfly)\" ar=\"(الفراشة)\" uk=\"(Метелик)\" fr=\"(Papillon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `¿Cuál de estos animales es un ave? <trans en="(Which of these animals is a bird?)" ar="(أي من هذه الحيوانات يعتبر طائرا؟)" uk="(Хто з цих тварин належить до птахів?)" fr="(Lequel de ces animaux est un oiseau ?)"/>`,
        options: ["Pingüino <trans en=\"(Penguin)\" ar=\"(البطريق)\" uk=\"(Пінгвін)\" fr=\"(Pingouin)\"/>", "Mono <trans en=\"(Monkey)\" ar=\"(قرد)\" uk=\"(Мавпа)\" fr=\"(Singe)\"/>", "Caballo <trans en=\"(Horse)\" ar=\"(حصان)\" uk=\"(Кінь)\" fr=\"(Cheval)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿Qué animal corre muy rápido? <trans en="(What animal runs very fast?)" ar="(ما هو الحيوان الذي يركض بسرعة كبيرة؟)" uk="(Яка тварина дуже швидко бігає?)" fr="(Quel animal court très vite ?)"/>`,
        options: ["Guepardo / Tigre <trans en=\"(Cheetah/Tiger)\" ar=\"(الفهد/النمر)\" uk=\"(Гепард/Тигр)\" fr=\"(Guépard/Tigre)\"/>", "Tortuga <trans en=\"(Turtle)\" ar=\"(سلحفاة)\" uk=\"(Черепаха)\" fr=\"(Tortue)\"/>", "Oso <trans en=\"(Bear)\" ar=\"(الدب)\" uk=\"(Ведмідь)\" fr=\"(Ours)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Animal que come plátanos y trepa árboles: <trans en="(Animal that eats bananas and climbs trees:)" ar="(الحيوان الذي يأكل الموز ويتسلق الأشجار :)" uk="(Тварина, яка їсть банани та лазить по деревах:)" fr="(Animal qui mange des bananes et grimpe aux arbres :)"/>`,
        options: ["Mono <trans en=\"(Monkey)\" ar=\"(قرد)\" uk=\"(Мавпа)\" fr=\"(Singe)\"/>", "Perro <trans en=\"(Dog)\" ar=\"(كلب)\" uk=\"(Собака)\" fr=\"(Chien)\"/>", "Jirafa <trans en=\"(Giraffe)\" ar=\"(زرافة)\" uk=\"(Жираф)\" fr=\"(Girafe)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Es verde y salta cerca del agua: <trans en="(It is green and jumps near the water:)" ar="(وهو أخضر ويقفز بالقرب من الماء:)" uk="(Він зелений і стрибає біля води:)" fr="(Il est vert et saute près de l'eau :)"/>`,
        options: ["Rana <trans en=\"(Frog)\" ar=\"(الضفدع)\" uk=\"(Жаба)\" fr=\"(Grenouille)\"/>", "Pez <trans en=\"(Fish)\" ar=\"(سمك)\" uk=\"(Риба)\" fr=\"(Poisson)\"/>", "Araña <trans en=\"(Spider)\" ar=\"(العنكبوت)\" uk=\"(Павук)\" fr=\"(Araignée)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Produce lana para la ropa: <trans en="(Produces wool for clothing:)" ar="(إنتاج الصوف للملابس :)" uk="(Виробляє вовну для одягу:)" fr="(Produit de la laine pour l'habillement :)"/>`,
        options: ["Oveja <trans en=\"(Sheep)\" ar=\"(غنم)\" uk=\"(Вівці)\" fr=\"(Moutons)\"/>", "Vaca <trans en=\"(Cow)\" ar=\"(بقرة)\" uk=\"(Корова)\" fr=\"(Vache)\"/>", "Cerdo <trans en=\"(Pig)\" ar=\"(خنزير)\" uk=\"(Свиня)\" fr=\"(Cochon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Animal que cacarea y pone huevos: <trans en="(Animal that crows and lays eggs:)" ar="(الحيوان الذي يصيح ويضع البيض :)" uk="(Тварина, яка кукурікає і несе яйця:)" fr="(Animal qui chante et pond des œufs :)"/>`,
        options: ["Gallina <trans en=\"(Hen)\" ar=\"(دجاجة)\" uk=\"(Курка)\" fr=\"(Poule)\"/>", "Vaca <trans en=\"(Cow)\" ar=\"(بقرة)\" uk=\"(Корова)\" fr=\"(Vache)\"/>", "Pájaro <trans en=\"(Bird)\" ar=\"(طير)\" uk=\"(Пташка)\" fr=\"(Oiseau)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `¿Qué animal produce leche? (Extra) <trans en="(What animal produces milk? (Bonus))" ar="(ما هو الحيوان الذي ينتج الحليب؟ (مكافأة))" uk="(Яка тварина дає молоко? (Бонус))" fr="(Quel animal produit du lait ? (Prime))"/>`,
        options: ["La vaca <trans en=\"(The cow)\" ar=\"(البقرة)\" uk=\"(Корова)\" fr=\"(La vache)\"/>", "El perro <trans en=\"(The dog)\" ar=\"(الكلب)\" uk=\"(Собака)\" fr=\"(Le chien)\"/>", "El pez <trans en=\"(The fish)\" ar=\"(السمك)\" uk=\"(Риба)\" fr=\"(Le poisson)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Este animal tiene cuello largo: (Extra) <trans en="(This animal has a long neck: (Extra))" ar="(هذا الحيوان له رقبة طويلة: (إضافي))" uk="(Ця тварина має довгу шию: (Екстра))" fr="(Cet animal a un long cou : (Extra))"/>`,
        options: ["Jirafa <trans en=\"(Giraffe)\" ar=\"(زرافة)\" uk=\"(Жираф)\" fr=\"(Girafe)\"/>", "Elefante <trans en=\"(Elephant)\" ar=\"(الفيل)\" uk=\"(Слон)\" fr=\"(Éléphant)\"/>", "Caballo <trans en=\"(Horse)\" ar=\"(حصان)\" uk=\"(Кінь)\" fr=\"(Cheval)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-comp-lectura",
    topic: "Comprensión",
    title: "Lectura Fácil: Mi Primer Día",
    level: "A2",
    category: "Comprensión",
    description: "Una lectura corta para entender frases simples y practicar preguntas.",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop&q=80",
    emoji: "📖",
    color: "#EBF8FF",
    content: `
## LECTURA: Hola, me llamo Ali

> *"Hola, me llamo Ali. Tengo veinticinco (25) años. Yo soy de Marruecos, pero ahora estoy en Málaga, España. Yo tengo una hermana que se llama Fátima."*

> *"Me gusta mucho el mar y quiero trabajar de cocinero. Yo hablo un poco de español, pero estudio todos los días en la escuela."*

### Lee la lectura con atención y responde al ejercicio.
    `,
    exercises: [
      {
        id: "ex1",
        question: `¿De dónde es Ali? <trans en="(Where is Ali from?)" ar="(من أين علي؟)" uk="(Звідки Алі?)" fr="(D'où vient Ali ?)"/>`,
        options: ["Es de Málaga <trans en=\"(He is from Malaga)\" ar=\"(وهو من ملقة)\" uk=\"(Він із Малаги)\" fr=\"(Il est de Malaga)\"/>", "Es de Marruecos <trans en=\"(He is from Morocco)\" ar=\"(هو من المغرب)\" uk=\"(Він з Марокко)\" fr=\"(Il vient du Maroc)\"/>", "Es de Francia <trans en=\"(He is from France)\" ar=\"(هو من فرنسا)\" uk=\"(Він із Франції)\" fr=\"(Il vient de France)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `¿De qué quiere trabajar Ali? <trans en="(What does Ali want to work on?)" ar="(ما الذي يريد علي أن يعمل عليه؟)" uk="(Над чим Алі хоче працювати?)" fr="(Sur quoi Ali veut-il travailler ?)"/>`,
        options: ["De profesor <trans en=\"(As a teacher)\" ar=\"(كمدرس)\" uk=\"(Як вчитель)\" fr=\"(En tant qu'enseignant)\"/>", "De cocinero <trans en=\"(As a cook)\" ar=\"(كطباخ)\" uk=\"(Як кухар)\" fr=\"(En tant que cuisinier)\"/>", "De conductor <trans en=\"(Driver)\" ar=\"(سائق)\" uk=\"(Водій)\" fr=\"(Chauffeur)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: `¿Dónde está Ali ahora? <trans en="(Where is Ali now?)" ar="(أين علي الآن؟)" uk="(Де зараз Алі?)" fr="(Où est Ali maintenant ?)"/>`,
        options: ["En Marruecos <trans en=\"(In Morocco)\" ar=\"(في المغرب)\" uk=\"(У Марокко)\" fr=\"(Au Maroc)\"/>", "En Málaga <trans en=\"(In Malaga)\" ar=\"(في ملقة)\" uk=\"(У Малазі)\" fr=\"(À Málaga)\"/>", "En Madrid <trans en=\"(In Madrid)\" ar=\"(في مدريد)\" uk=\"(У Мадриді)\" fr=\"(À Madrid)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex4",
        question: `En un texto, 'ayer' se refiere a... <trans en="(In a text, 'yesterday' refers to...)" ar="(في النص، تشير كلمة "أمس" إلى ...)" uk="(У тексті «вчора» стосується...)" fr="(Dans un texte, « hier » fait référence à...)"/>`,
        options: ["El pasado <trans en=\"(The past)\" ar=\"(الماضي)\" uk=\"(Минуле)\" fr=\"(Le passé)\"/>", "El presente <trans en=\"(The present)\" ar=\"(الحاضر)\" uk=\"(Сучасність)\" fr=\"(Le présent)\"/>", "El futuro <trans en=\"(The future)\" ar=\"(المستقبل)\" uk=\"(Майбутнє)\" fr=\"(L'avenir)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Si alguien dice 'estoy muy cansado', ¿cómo se siente? <trans en="(If someone says 'I'm very tired', how do you feel?)" ar="(إذا قال لك أحدهم "أنا متعب جدًا"، ما هو شعورك؟)" uk="(Якщо хтось каже: «Я дуже втомився», що ви відчуваєте?)" fr="(Si quelqu'un vous dit « Je suis très fatigué », comment vous sentez-vous ?)"/>`,
        options: ["Sin energía <trans en=\"(No power)\" ar=\"(لا قوة)\" uk=\"(Немає живлення)\" fr=\"(Pas de courant)\"/>", "Feliz <trans en=\"(Happy)\" ar=\"(سعيد)\" uk=\"(Щасливий)\" fr=\"(Heureux)\"/>", "Enfadado <trans en=\"(Angry)\" ar=\"(غاضب)\" uk=\"(Злий)\" fr=\"(En colère)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `Si la lectura dice 'Mañana lloverá', ¿cuándo ocurrirá? <trans en="(If the reading says 'Tomorrow it will rain', when will it happen?)" ar="(إذا كانت القراءة تقول "غداً ستمطر" متى سيحدث ذلك؟)" uk="(Якщо на екрані написано: «Завтра буде дощ», коли це станеться?)" fr="(Si la lecture dit « Demain il pleuvra », quand cela arrivera-t-il ?)"/>`,
        options: ["En el futuro <trans en=\"(In the future)\" ar=\"(في المستقبل)\" uk=\"(У майбутньому)\" fr=\"(Dans le futur)\"/>", "En el pasado <trans en=\"(In the past)\" ar=\"(في الماضي)\" uk=\"(У минулому)\" fr=\"(Dans le passé)\"/>", "Hoy <trans en=\"(Today)\" ar=\"(اليوم)\" uk=\"(Сьогодні)\" fr=\"(Aujourd'hui)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `¿Qué significa 'leer un cuento'? <trans en="(What does 'read a story' mean?)" ar="(ماذا تعني عبارة "اقرأ قصة"؟)" uk="(Що означає «прочитати історію»?)" fr="(Que signifie « lire une histoire » ?)"/>`,
        options: ["Leer una historia corta <trans en=\"(Read a short story)\" ar=\"(قراءة قصة قصيرة)\" uk=\"(Прочитайте коротке оповідання)\" fr=\"(Lire une nouvelle)\"/>", "Escribir una carta <trans en=\"(Write a letter)\" ar=\"(اكتب رسالة)\" uk=\"(Напишіть листа)\" fr=\"(Écrivez une lettre)\"/>", "Comprar un libro <trans en=\"(Buy a book)\" ar=\"(شراء كتاب)\" uk=\"(Купити книгу)\" fr=\"(Acheter un livre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Si alguien tiene hambre, normalmente... <trans en="(If someone is hungry, usually...)" ar="(إذا كان شخص ما جائعا، عادة...)" uk="(Якщо хтось голодний, зазвичай...)" fr="(Si quelqu'un a faim, généralement...)"/>`,
        options: ["Come <trans en=\"(Eat)\" ar=\"(أكل)\" uk=\"(Їсти)\" fr=\"(Manger)\"/>", "Duerme <trans en=\"(Sleep)\" ar=\"(النوم)\" uk=\"(Спати)\" fr=\"(Dormir)\"/>", "Corre <trans en=\"(Run)\" ar=\"(تشغيل)\" uk=\"(Біжи)\" fr=\"(Courir)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Si en el texto dice 'Juan corre rápido', ¿qué hace Juan? <trans en="(If the text says 'John runs fast', what does John do?)" ar="(إذا كان النص يقول "جون يجري بسرعة"، فماذا يفعل جون؟)" uk="(Якщо в тексті сказано «Іван швидко біжить», що робить Джон?)" fr="(Si le texte dit « John court vite », que fait John ?)"/>`,
        options: ["Va a mucha velocidad <trans en=\"(It goes very fast)\" ar=\"(يذهب بسرعة كبيرة)\" uk=\"(Це йде дуже швидко)\" fr=\"(Ça va très vite)\"/>", "Duerme <trans en=\"(Sleep)\" ar=\"(النوم)\" uk=\"(Спати)\" fr=\"(Dormir)\"/>", "Camina lento <trans en=\"(Walk slowly)\" ar=\"(المشي ببطء)\" uk=\"(Ходи повільно)\" fr=\"(Marchez lentement)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Cuando un personaje 'se despide', significa que... <trans en="(When a character 'says goodbye', it means that...)" ar="(عندما تقول الشخصية "وداعًا"، فهذا يعني أن...)" uk="(Коли персонаж «прощається», це означає, що...)" fr="(Quand un personnage « dit au revoir », cela signifie que...)"/>`,
        options: ["Dice adiós <trans en=\"(Says goodbye)\" ar=\"(يقول وداعا)\" uk=\"(Прощається)\" fr=\"(Dit au revoir)\"/>", "Dice hola <trans en=\"(Says hello)\" ar=\"(يقول مرحبا)\" uk=\"(Вітається)\" fr=\"(Dit bonjour)\"/>", "Llora <trans en=\"(Cry)\" ar=\"(البكاء)\" uk=\"(Плакати)\" fr=\"(Pleurer)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Si la tienda está 'cerrada', tú... <trans en="(If the store is 'closed', you...)" ar="(إذا كان المتجر "مغلقًا"، فأنت...)" uk="(Якщо магазин «зачинено», ви...)" fr="(Si le magasin est « fermé », vous...)"/>`,
        options: ["No puedes comprar <trans en=\"(You can't buy)\" ar=\"(لا يمكنك الشراء)\" uk=\"(Не можна купити)\" fr=\"(Vous ne pouvez pas acheter)\"/>", "Puedes entrar <trans en=\"(You can enter)\" ar=\"(يمكنك الدخول)\" uk=\"(Ви можете входити)\" fr=\"(Vous pouvez entrer)\"/>", "Compras pan <trans en=\"(You buy bread)\" ar=\"(تشتري الخبز)\" uk=\"(Купуєш хліб)\" fr=\"(Vous achetez du pain)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `'Había una vez' se usa al principio de... <trans en="('Once upon a time' is used at the beginning of...)" ar="(يتم استخدام عبارة "كان ياما كان" في بداية ...)" uk="(«Одного разу» використовується на початку...)" fr="(« Il était une fois » est utilisé au début de...)"/>`,
        options: ["Un cuento <trans en=\"(A story)\" ar=\"(قصة)\" uk=\"(Розповідь)\" fr=\"(Une histoire)\"/>", "Una carta formal <trans en=\"(A formal letter)\" ar=\"(خطاب رسمي)\" uk=\"(Офіційний лист)\" fr=\"(Une lettre formelle)\"/>", "Una noticia <trans en=\"(A news)\" ar=\"(خبر)\" uk=\"(Новина)\" fr=\"(Une nouvelle)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Si el protagonista 'encuentra' un tesoro, ¿qué significa? <trans en="(If the protagonist 'finds' a treasure, what does it mean?)" ar="(إذا "عثر" بطل الرواية على كنز، فماذا يعني ذلك؟)" uk="(Якщо герой «знаходить» скарб, що це означає?)" fr="(Si le protagoniste « trouve » un trésor, qu'est-ce que cela signifie ?)"/>`,
        options: ["Lo halla o lo ve <trans en=\"(Find it or see it)\" ar=\"(ابحث عنه أو شاهده)\" uk=\"(Знайдіть або подивіться)\" fr=\"(Trouvez-le ou voyez-le)\"/>", "Lo pierde <trans en=\"(Loses it)\" ar=\"(يخسره)\" uk=\"(Втрачає його)\" fr=\"(Le perd)\"/>", "Lo esconde <trans en=\"(Hides it)\" ar=\"(يخفيه)\" uk=\"(Приховує це)\" fr=\"(Le cache)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿Qué es un 'resumen'? <trans en="(What is a 'summary'?)" ar="(ما هو "الملخص"؟)" uk="(Що таке «резюме»?)" fr="(Qu'est-ce qu'un « résumé » ?)"/>`,
        options: ["La idea principal breve <trans en=\"(Brief main idea)\" ar=\"(فكرة رئيسية مختصرة)\" uk=\"(Коротка основна думка)\" fr=\"(Brève idée principale)\"/>", "Un cuento largo <trans en=\"(A long story)\" ar=\"(قصة طويلة)\" uk=\"(Довга історія)\" fr=\"(Une longue histoire)\"/>", "Una pregunta <trans en=\"(A question)\" ar=\"(سؤال)\" uk=\"(Питання)\" fr=\"(Une question)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Si alguien dice 'No entiendo', necesita... <trans en="(If someone says 'I don't understand', they need...)" ar="(إذا قال شخص ما "لا أفهم"، فهو بحاجة إلى...)" uk="(Якщо хтось каже "Я не розумію", їм потрібно...)" fr="(Si quelqu'un dit 'Je ne comprends pas', il lui faut...)"/>`,
        options: ["Una explicación <trans en=\"(An explanation)\" ar=\"(شرح)\" uk=\"(Пояснення)\" fr=\"(Une explication)\"/>", "Comida <trans en=\"(Food)\" ar=\"(الغذاء)\" uk=\"(Харчування)\" fr=\"(Nourriture)\"/>", "Dormir <trans en=\"(Sleep)\" ar=\"(النوم)\" uk=\"(Спати)\" fr=\"(Dormir)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Si el texto habla del 'invierno', probablemente mencione... <trans en="(If the text talks about 'winter', it probably mentions...)" ar="(إذا كان النص يتحدث عن "الشتاء"، فمن المحتمل أنه يذكر...)" uk="(Якщо в тексті йдеться про «зиму», то, мабуть, згадується...)" fr="(Si le texte parle d'hiver, il mentionne probablement...)"/>`,
        options: ["Nieve y frío <trans en=\"(Snow and cold)\" ar=\"(الثلج والبرد)\" uk=\"(Сніг і холод)\" fr=\"(Neige et froid)\"/>", "Playa y sol <trans en=\"(Beach and sun)\" ar=\"(الشاطئ والشمس)\" uk=\"(Пляж і сонце)\" fr=\"(Plage et soleil)\"/>", "Mucho calor <trans en=\"(Very hot)\" ar=\"(حار جدا)\" uk=\"(Дуже жарко)\" fr=\"(Très chaud)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `¿Qué significa 'subrayar' una palabra? <trans en="(What does it mean to 'underline' a word?)" ar="(ما معنى وضع خط تحت الكلمة؟)" uk="(Що означає «підкреслити» слово?)" fr="(Que signifie « souligner » un mot ?)"/>`,
        options: ["Poner una línea debajo <trans en=\"(Put a line below)\" ar=\"(ضع خطا أدناه)\" uk=\"(Поставте рядок нижче)\" fr=\"(Mettez une ligne ci-dessous)\"/>", "Borrarla <trans en=\"(Delete it)\" ar=\"(احذفه)\" uk=\"(Видалити)\" fr=\"(Supprimez-le)\"/>", "Ignorarla <trans en=\"(Ignore her)\" ar=\"(تجاهلها)\" uk=\"(Ігноруйте її)\" fr=\"(Ignore-la)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Si María 'estudió toda la noche', ella... <trans en="(If María 'studied all night', she...)" ar="(إذا كانت ماريا "تدرس طوال الليل"، فهي...)" uk="(Якщо Марія «вчилася всю ніч», вона...)" fr="(Si María « étudiait toute la nuit », elle...)"/>`,
        options: ["Está cansada hoy <trans en=\"(She is tired today)\" ar=\"(إنها متعبة اليوم)\" uk=\"(Вона сьогодні втомилася)\" fr=\"(Elle est fatiguée aujourd'hui)\"/>", "Durmió muy bien <trans en=\"(He slept very well)\" ar=\"(كان ينام جيدا)\" uk=\"(Він дуже добре спав)\" fr=\"(Il a très bien dormi)\"/>", "No sabe nada <trans en=\"(He doesn't know anything)\" ar=\"(لا يعرف شيئا)\" uk=\"(Він нічого не знає)\" fr=\"(Il ne sait rien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `En un diálogo, '—' significa que... <trans en="(In a dialogue, '—' means that...)" ar="(في الحوار، "-" تعني أن...)" uk="(У діалозі «—» означає, що...)" fr="(Dans un dialogue, '—' signifie que...)"/>`,
        options: ["Alguien habla <trans en=\"(Someone speaks)\" ar=\"(شخص ما يتحدث)\" uk=\"(Хтось говорить)\" fr=\"(Quelqu'un parle)\"/>", "El texto terminó <trans en=\"(The text ended)\" ar=\"(انتهى النص)\" uk=\"(Текст закінчено)\" fr=\"(Le texte est terminé)\"/>", "Es un título <trans en=\"(It's a title)\" ar=\"(إنه عنوان)\" uk=\"(Це назва)\" fr=\"(C'est un titre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Si el texto dice 'Al final, fueron felices', es... <trans en="(If the text says 'In the end, they were happy', it is...)" ar="(إذا كان النص يقول "في النهاية، كانوا سعداء"، فهو...)" uk="(Якщо в тексті написано «Зрештою вони були щасливі», це...)" fr="(Si le texte dit 'Au final, ils étaient contents', c'est...)"/>`,
        options: ["La conclusión <trans en=\"(The conclusion)\" ar=\"(الخاتمة)\" uk=\"(Висновок)\" fr=\"(La conclusion)\"/>", "La introducción <trans en=\"(The introduction)\" ar=\"(المقدمة)\" uk=\"(Вступ)\" fr=\"(L'introduction)\"/>", "El título <trans en=\"(The title)\" ar=\"(العنوان)\" uk=\"(Назва)\" fr=\"(Le titre)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-vocab-mapas",
    topic: "Paises",
    title: "Vocabulario: El Mapa del Mundo",
    level: "A2",
    category: "Vocabulario",
    description: "Continentes, países comunes, y vocabulario geográfico.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    emoji: "🌍",
    color: "#E2E8F0",
    vocabulary: [
        {
          word: 'El mapa',
          translations: {
            en: 'Map',
            ar: 'خريطة',
            uk: 'Карта',
            fr: 'Carte'
          },
          emoji: '🗺️',
          color: '#E3EEF9'
        },
        {
          word: 'El continente',
          translations: {
            en: 'Continent',
            ar: 'قارة',
            uk: 'Континент',
            fr: 'Continent'
          },
          emoji: '🌍',
          color: '#E2F3E7'
        },
        {
          word: 'El país',
          translations: {
            en: 'Country',
            ar: 'بلد',
            uk: 'Країна',
            fr: 'Pays'
          },
          emoji: '🏳️',
          color: '#FFF4E5'
        },
        {
          word: 'La ciudad',
          translations: {
            en: 'City',
            ar: 'مدينة',
            uk: 'Місто',
            fr: 'Ville'
          },
          emoji: '🏙️',
          color: '#EDF2F7'
        },
        {
          word: 'La capital',
          translations: {
            en: 'Capital',
            ar: 'عاصمة',
            uk: 'Столиця',
            fr: 'Capitale'
          },
          emoji: '🏛️',
          color: '#E3EEF9'
        },
        {
          word: 'El océano',
          translations: {
            en: 'Ocean',
            ar: 'محيط',
            uk: 'Океан',
            fr: 'Ocean'
          },
          emoji: '🌊',
          color: '#E3EEF9'
        },
        {
          word: 'El mar',
          translations: {
            en: 'Sea',
            ar: 'بحر',
            uk: 'Море',
            fr: 'Mer'
          },
          emoji: '🌊',
          color: '#E3EEF9'
        },
        {
          word: 'El río',
          translations: {
            en: 'River',
            ar: 'نهر',
            uk: 'Річка',
            fr: 'Rivière'
          },
          emoji: '🏞️',
          color: '#E3EEF9'
        },
        {
          word: 'La montaña',
          translations: {
            en: 'Mountain',
            ar: 'جبل',
            uk: 'Гора',
            fr: 'Montagne'
          },
          emoji: '⛰️',
          color: '#E2F3E7'
        },
        {
          word: 'El desierto',
          translations: {
            en: 'Desert',
            ar: 'صحراء',
            uk: 'Пустеля',
            fr: 'Désert'
          },
          emoji: '🌵',
          color: '#FEFCBF'
        },
        {
          word: 'La selva',
          translations: {
            en: 'Jungle',
            ar: 'غابة مطيرة',
            uk: 'Джунглі',
            fr: 'Jungle'
          },
          emoji: '🌳',
          color: '#E2F3E7'
        },
        {
          word: 'El lago',
          translations: {
            en: 'Lake',
            ar: 'بحيرة',
            uk: 'Озеро',
            fr: 'Lac'
          },
          emoji: '🏞️',
          color: '#E3EEF9'
        },
        {
          word: 'La isla',
          translations: {
            en: 'Island',
            ar: 'جزيرة',
            uk: 'Острів',
            fr: 'Île'
          },
          emoji: '🏝️',
          color: '#EBF8FF'
        },
        {
          word: 'La frontera',
          translations: {
            en: 'Border',
            ar: 'حدود',
            uk: 'Кордон',
            fr: 'Frontière'
          },
          emoji: '🚧',
          color: '#FCE8E8'
        },
        {
          word: 'El norte',
          translations: {
            en: 'North',
            ar: 'الشمال',
            uk: 'Північ',
            fr: 'Nord'
          },
          emoji: '⬆️',
          color: '#EDF2F7'
        },
        {
          word: 'El sur',
          translations: {
            en: 'South',
            ar: 'الجنوب',
            uk: 'Південь',
            fr: 'Sud'
          },
          emoji: '⬇️',
          color: '#EDF2F7'
        },
        {
          word: 'El este',
          translations: {
            en: 'East',
            ar: 'الشرق',
            uk: 'Схід',
            fr: 'Est'
          },
          emoji: '➡️',
          color: '#EDF2F7'
        },
        {
          word: 'El oeste',
          translations: {
            en: 'West',
            ar: 'الغرب',
            uk: 'Захід',
            fr: 'Ouest'
          },
          emoji: '⬅️',
          color: '#EDF2F7'
        },
        {
          word: 'El globo terráqueo',
          translations: {
            en: 'Globe',
            ar: 'كرة أرضية',
            uk: 'Глобус',
            fr: 'Globe terrestre'
          },
          emoji: '🌐',
          color: '#E3EEF9'
        },
        {
          word: 'La brújula',
          translations: {
            en: 'Compass',
            ar: 'بوصلة',
            uk: 'Компас',
            fr: 'Boussole'
          },
          emoji: '🧭',
          color: '#FEFCBF'
        },
        {
          word: 'Las coordenadas',
          translations: {
            en: 'Coordinates',
            ar: 'إحداثيات',
            uk: 'Координати',
            fr: 'Coordonnées'
          },
          emoji: '📍',
          color: '#EDF2F7'
        },
        {
          word: 'El clima',
          translations: {
            en: 'Climate',
            ar: 'مناخ',
            uk: 'Клімат',
            fr: 'Climat'
          },
          emoji: '🌤️',
          color: '#FEFCBF'
        },
        {
          word: 'La población',
          translations: {
            en: 'Population',
            ar: 'السكان',
            uk: 'Населення',
            fr: 'Population'
          },
          emoji: '🧑‍🤝‍🧑',
          color: '#EDF2F7'
        },
        {
          word: 'El territorio',
          translations: {
            en: 'Territory',
            ar: 'أراضي',
            uk: 'Територія',
            fr: 'Territoire'
          },
          emoji: '🗺️',
          color: '#E2F3E7'
        },
        {
          word: 'El valle',
          translations: {
            en: 'Valley',
            ar: 'وادي',
            uk: 'Долина',
            fr: 'Vallée'
          },
          emoji: '⛰️',
          color: '#E2F3E7'
        },
        {
          word: 'El bosque',
          translations: {
            en: 'Forest',
            ar: 'غابة',
            uk: 'Ліс',
            fr: 'Forêt'
          },
          emoji: '🌲',
          color: '#E2F3E7'
        },
        {
          word: 'La costa',
          translations: {
            en: 'Coast',
            ar: 'ساحل',
            uk: 'Узбережжя',
            fr: 'Côte'
          },
          emoji: '🏖️',
          color: '#EBF8FF'
        },
        {
          word: 'La bandera',
          translations: {
            en: 'Flag',
            ar: 'علم',
            uk: 'Прапор',
            fr: 'Drapeau'
          },
          emoji: '🚩',
          color: '#FCE8E8'
        },
        {
          word: 'El planisferio',
          translations: {
            en: 'World map',
            ar: 'خريطة العالم',
            uk: 'Планісфера',
            fr: 'Planisphère'
          },
          emoji: '🗺️',
          color: '#E3EEF9'
        },
        {
          word: 'La escala',
          translations: {
            en: 'Scale',
            ar: 'مقياس رسم',
            uk: 'Масштаб',
            fr: 'Échelle'
          },
          emoji: '📏',
          color: '#EDF2F7'
        }
      ],
    content: `
## Los Continentes

Existen diferentes continentes en el mundo:
- **África**
- **Europa**
- **América** (Norte y Sur)
- **Asia**
- **Oceanía**

## Países 

Para decir de dónde eres puedes decir: *"Yo soy de..."* y tu país.
    `,
    exercises: [
      {
        id: "ex1",
        question: `España está en: <trans en="(Spain is in:)" ar="(اسبانيا في:)" uk="(Іспанія знаходиться в:)" fr="(L'Espagne est dans :)"/>`,
        options: ["Asia <trans en=\"(Asia)\" ar=\"(آسيا)\" uk=\"(Азія)\" fr=\"(Asie)\"/>", "África <trans en=\"(Africa)\" ar=\"(أفريقيا)\" uk=\"(Африка)\" fr=\"(Afrique)\"/>", "Europa <trans en=\"(Europe)\" ar=\"(أوروبا)\" uk=\"(Європа)\" fr=\"(Europe)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: `¿Cómo se llama el continente con muchos desiertos al sur de Europa? <trans en="(What is the name of the continent with many deserts south of Europe?)" ar="(ما اسم القارة التي بها صحاري كثيرة جنوب أوروبا؟)" uk="(Як називається материк з багатьма пустелями на південь від Європи?)" fr="(Quel est le nom du continent qui compte de nombreux déserts au sud de l'Europe ?)"/>`,
        options: ["África <trans en=\"(Africa)\" ar=\"(أفريقيا)\" uk=\"(Африка)\" fr=\"(Afrique)\"/>", "América <trans en=\"(America)\" ar=\"(امريكا)\" uk=\"(Америка)\" fr=\"(Amérique)\"/>", "Oceanía <trans en=\"(Oceania)\" ar=\"(أوقيانوسيا)\" uk=\"(Океанія)\" fr=\"(Océanie)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `El país al sur de España es... <trans en="(The country south of Spain is...)" ar="(الدولة الواقعة جنوب إسبانيا هي...)" uk="(Країна на південь від Іспанії...)" fr="(Le pays au sud de l'Espagne est...)"/>`,
        options: ["Marruecos <trans en=\"(Morocco)\" ar=\"(المغرب)\" uk=\"(Марокко)\" fr=\"(Maroc)\"/>", "Francia <trans en=\"(France)\" ar=\"(فرنسا)\" uk=\"(Франція)\" fr=\"(France)\"/>", "Italia <trans en=\"(Italy)\" ar=\"(إيطاليا)\" uk=\"(Італія)\" fr=\"(Italie)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `La capital de Francia es... <trans en="(The capital of France is...)" ar="(عاصمة فرنسا ...)" uk="(Столицею Франції є...)" fr="(La capitale de la France est...)"/>`,
        options: ["París <trans en=\"(Paris)\" ar=\"(باريس)\" uk=\"(Париж)\" fr=\"(Paris)\"/>", "Madrid <trans en=\"(Madrid)\" ar=\"(مدريد)\" uk=\"(Мадрид)\" fr=\"(Madrid)\"/>", "Roma <trans en=\"(Rome)\" ar=\"(روما)\" uk=\"(Рим)\" fr=\"(Rome)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `País situado al norte de México: <trans en="(Country located north of Mexico:)" ar="(دولة تقع شمال المكسيك :)" uk="(Країна на північ від Мексики:)" fr="(Pays situé au nord du Mexique :)"/>`,
        options: ["Estados Unidos <trans en=\"(United States)\" ar=\"(الولايات المتحدة)\" uk=\"(Сполучені Штати)\" fr=\"(États-Unis)\"/>", "Brasil <trans en=\"(Brazil)\" ar=\"(البرازيل)\" uk=\"(Бразилія)\" fr=\"(Brésil)\"/>", "Argentina <trans en=\"(Argentina)\" ar=\"(الارجنتين)\" uk=\"(Аргентина)\" fr=\"(Argentine)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `¿Dónde está la Torre Eiffel? <trans en="(Where is the Eiffel Tower?)" ar="(أين يقع برج إيفل؟)" uk="(Де знаходиться Ейфелева вежа?)" fr="(Où est la Tour Eiffel ?)"/>`,
        options: ["Francia <trans en=\"(France)\" ar=\"(فرنسا)\" uk=\"(Франція)\" fr=\"(France)\"/>", "Italia <trans en=\"(Italy)\" ar=\"(إيطاليا)\" uk=\"(Італія)\" fr=\"(Italie)\"/>", "España <trans en=\"(Spain)\" ar=\"(اسبانيا)\" uk=\"(Іспанія)\" fr=\"(Espagne)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `¿En qué continente está China? <trans en="(What continent is China on?)" ar="(في أي قارة تقع الصين؟)" uk="(На якому континенті розташований Китай?)" fr="(Sur quel continent se trouve la Chine ?)"/>`,
        options: ["Asia <trans en=\"(Asia)\" ar=\"(آسيا)\" uk=\"(Азія)\" fr=\"(Asie)\"/>", "Europa <trans en=\"(Europe)\" ar=\"(أوروبا)\" uk=\"(Європа)\" fr=\"(Europe)\"/>", "América <trans en=\"(America)\" ar=\"(امريكا)\" uk=\"(Америка)\" fr=\"(Amérique)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `¿En qué país se encuentra Roma? <trans en="(In which country is Rome located?)" ar="(في أي بلد تقع روما؟)" uk="(У якій країні розташований Рим?)" fr="(Dans quel pays se trouve Rome ?)"/>`,
        options: ["Italia <trans en=\"(Italy)\" ar=\"(إيطاليا)\" uk=\"(Італія)\" fr=\"(Italie)\"/>", "Grecia <trans en=\"(Greece)\" ar=\"(اليونان)\" uk=\"(Греція)\" fr=\"(Grèce)\"/>", "Portugal <trans en=\"(Portugal)\" ar=\"(البرتغال)\" uk=\"(Португалія)\" fr=\"(Portugal)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `La capital de España es... <trans en="(The capital of Spain is...)" ar="(عاصمة اسبانيا ...)" uk="(Столицею Іспанії є...)" fr="(La capitale de l'Espagne est...)"/>`,
        options: ["Madrid <trans en=\"(Madrid)\" ar=\"(مدريد)\" uk=\"(Мадрид)\" fr=\"(Madrid)\"/>", "Barcelona <trans en=\"(Barcelona)\" ar=\"(برشلونة)\" uk=\"(Барселона)\" fr=\"(Barcelone)\"/>", "Sevilla <trans en=\"(Seville)\" ar=\"(إشبيلية)\" uk=\"(Севілья)\" fr=\"(Séville)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `El país más grande de Sudamérica es... <trans en="(The largest country in South America is...)" ar="(أكبر دولة في أمريكا الجنوبية هي ...)" uk="(Найбільшою країною Південної Америки є...)" fr="(Le plus grand pays d'Amérique du Sud est...)"/>`,
        options: ["Brasil <trans en=\"(Brazil)\" ar=\"(البرازيل)\" uk=\"(Бразилія)\" fr=\"(Brésil)\"/>", "Chile <trans en=\"(Chile)\" ar=\"(تشيلي)\" uk=\"(Чилі)\" fr=\"(Chili)\"/>", "Perú <trans en=\"(Peru)\" ar=\"(بيرو)\" uk=\"(Перу)\" fr=\"(Pérou)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `¿Qué país comparte la península Ibérica con España? <trans en="(What country shares the Iberian Peninsula with Spain?)" ar="(ما هي الدولة التي تشترك في شبه الجزيرة الأيبيرية مع إسبانيا؟)" uk="(Яка країна поділяє Піренейський півострів з Іспанією?)" fr="(Quel pays partage la péninsule ibérique avec l'Espagne ?)"/>`,
        options: ["Portugal <trans en=\"(Portugal)\" ar=\"(البرتغال)\" uk=\"(Португалія)\" fr=\"(Portugal)\"/>", "Francia <trans en=\"(France)\" ar=\"(فرنسا)\" uk=\"(Франція)\" fr=\"(France)\"/>", "Italia <trans en=\"(Italy)\" ar=\"(إيطاليا)\" uk=\"(Італія)\" fr=\"(Italie)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `¿En qué continente está Egipto? <trans en="(What continent is Egypt on?)" ar="(في أي قارة تقع مصر؟)" uk="(На якому континенті розташований Єгипет?)" fr="(Sur quel continent se trouve l'Egypte ?)"/>`,
        options: ["África <trans en=\"(Africa)\" ar=\"(أفريقيا)\" uk=\"(Африка)\" fr=\"(Afrique)\"/>", "Asia <trans en=\"(Asia)\" ar=\"(آسيا)\" uk=\"(Азія)\" fr=\"(Asie)\"/>", "Europa <trans en=\"(Europe)\" ar=\"(أوروبا)\" uk=\"(Європа)\" fr=\"(Europe)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Londres es la capital de... <trans en="(London is the capital of...)" ar="(لندن عاصمة...)" uk="(Лондон є столицею...)" fr="(Londres est la capitale de...)"/>`,
        options: ["Inglaterra / Reino Unido <trans en=\"(England / United Kingdom)\" ar=\"(انجلترا / المملكة المتحدة)\" uk=\"(Англія / Великобританія)\" fr=\"(Angleterre / Royaume-Uni)\"/>", "Irlanda <trans en=\"(Ireland)\" ar=\"(ايرلندا)\" uk=\"(Ірландія)\" fr=\"(Irlande)\"/>", "Alemania <trans en=\"(Germany)\" ar=\"(ألمانيا)\" uk=\"(Німеччина)\" fr=\"(Allemagne)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿Qué océano está entre América y Europa? <trans en="(What ocean is between America and Europe?)" ar="(ما هو المحيط الذي يقع بين أمريكا وأوروبا؟)" uk="(Який океан знаходиться між Америкою та Європою?)" fr="(Quel océan se trouve entre l'Amérique et l'Europe ?)"/>`,
        options: ["Atlántico <trans en=\"(Atlantic)\" ar=\"(الأطلسي)\" uk=\"(Атлантика)\" fr=\"(Atlantique)\"/>", "Pacífico <trans en=\"(Pacific)\" ar=\"(المحيط الهادئ)\" uk=\"(Тихий океан)\" fr=\"(Pacifique)\"/>", "Índico <trans en=\"(Indian)\" ar=\"(هندي)\" uk=\"(Індіанець)\" fr=\"(Indien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `¿En qué continente está Argentina? <trans en="(What continent is Argentina on?)" ar="(في أي قارة تقع الأرجنتين؟)" uk="(На якому континенті розташована Аргентина?)" fr="(Sur quel continent se trouve l'Argentine ?)"/>`,
        options: ["América <trans en=\"(America)\" ar=\"(امريكا)\" uk=\"(Америка)\" fr=\"(Amérique)\"/>", "África <trans en=\"(Africa)\" ar=\"(أفريقيا)\" uk=\"(Африка)\" fr=\"(Afrique)\"/>", "Europa <trans en=\"(Europe)\" ar=\"(أوروبا)\" uk=\"(Європа)\" fr=\"(Europe)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `¿Dónde está Tokio? <trans en="(Where is Tokyo?)" ar="(أين تقع طوكيو؟)" uk="(Де Токіо?)" fr="(Où est Tokyo ?)"/>`,
        options: ["Japón <trans en=\"(Japan)\" ar=\"(اليابان)\" uk=\"(Японія)\" fr=\"(Japon)\"/>", "China <trans en=\"(China)\" ar=\"(الصين)\" uk=\"(Китай)\" fr=\"(Chine)\"/>", "Corea <trans en=\"(Korea)\" ar=\"(كوريا)\" uk=\"(Корея)\" fr=\"(Corée)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Marruecos está en el continente de... <trans en="(Morocco is on the continent of...)" ar="(يقع المغرب في قارة...)" uk="(Марокко знаходиться на континенті...)" fr="(Le Maroc est sur le continent de...)"/>`,
        options: ["África <trans en=\"(Africa)\" ar=\"(أفريقيا)\" uk=\"(Африка)\" fr=\"(Afrique)\"/>", "Europa <trans en=\"(Europe)\" ar=\"(أوروبا)\" uk=\"(Європа)\" fr=\"(Europe)\"/>", "Asia <trans en=\"(Asia)\" ar=\"(آسيا)\" uk=\"(Азія)\" fr=\"(Asie)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Rusia está situada en... <trans en="(Russia is located in...)" ar="(تقع روسيا في ...)" uk="(Росія розташована в...)" fr="(La Russie est située dans...)"/>`,
        options: ["Europa y Asia <trans en=\"(Europe and Asia)\" ar=\"(أوروبا وآسيا)\" uk=\"(Європа та Азія)\" fr=\"(Europe et Asie)\"/>", "Solo Asia <trans en=\"(Asia only)\" ar=\"(آسيا فقط)\" uk=\"(Тільки Азія)\" fr=\"(Asie uniquement)\"/>", "Solo Europa <trans en=\"(Europe only)\" ar=\"(أوروبا فقط)\" uk=\"(Тільки Європа)\" fr=\"(Europe uniquement)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `¿Qué país tiene forma de bota? <trans en="(What country is shaped like a boot?)" ar="(ما هي الدولة التي على شكل الحذاء؟)" uk="(Яка країна має форму чобота?)" fr="(Quel pays a la forme d'une botte ?)"/>`,
        options: ["Italia <trans en=\"(Italy)\" ar=\"(إيطاليا)\" uk=\"(Італія)\" fr=\"(Italie)\"/>", "España <trans en=\"(Spain)\" ar=\"(اسبانيا)\" uk=\"(Іспанія)\" fr=\"(Espagne)\"/>", "Grecia <trans en=\"(Greece)\" ar=\"(اليونان)\" uk=\"(Греція)\" fr=\"(Grèce)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `El país al sur de España es... (Extra) <trans en="(The country south of Spain is... (Extra))" ar="(الدولة الواقعة جنوب إسبانيا هي... (إضافي))" uk="(Країна на південь від Іспанії... (Додатково))" fr="(Le pays au sud de l'Espagne est... (Extra))"/>`,
        options: ["Marruecos <trans en=\"(Morocco)\" ar=\"(المغرب)\" uk=\"(Марокко)\" fr=\"(Maroc)\"/>", "Francia <trans en=\"(France)\" ar=\"(فرنسا)\" uk=\"(Франція)\" fr=\"(France)\"/>", "Italia <trans en=\"(Italy)\" ar=\"(إيطاليا)\" uk=\"(Італія)\" fr=\"(Italie)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-vocab-direcciones",
    topic: "Direcciones",
    title: "Supervivencia: ¿Dónde está...?",
    level: "A2",
    category: "Vocabulario",
    description: "Aprende a preguntar por lugares importantes como el lavabo, el autobús o la tienda.",
    imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop&q=80",
    emoji: "🗺️",
    color: "#EBF8FF",
    vocabulary: [
        {
          word: 'El lavabo / baño',
          translations: {
            en: 'Bathroom',
            ar: 'الحمام',
            uk: 'Туалет',
            fr: 'Toilettes'
          },
          emoji: '🚽',
          color: '#EBF8FF'
        },
        {
          word: 'El autobús',
          translations: {
            en: 'Bus',
            ar: 'حافلة',
            uk: 'Автобус',
            fr: 'Bus'
          },
          emoji: '🚌',
          color: '#FFF5F5'
        },
        {
          word: 'El metro',
          translations: {
            en: 'Metro',
            ar: 'مترو الأنفاق',
            uk: 'Метро',
            fr: 'Métro'
          },
          emoji: '🚇',
          color: '#E2F3E7'
        },
        {
          word: 'La tienda',
          translations: {
            en: 'Shop',
            ar: 'متجر',
            uk: 'Магазин',
            fr: 'Magasin'
          },
          emoji: '🏪',
          color: '#FEFCBF'
        },
        {
          word: 'La farmacia',
          translations: {
            en: 'Pharmacy',
            ar: 'صيدلية',
            uk: 'Аптека',
            fr: 'Pharmacie'
          },
          emoji: '💊',
          color: '#FCE8E8'
        },
        {
          word: 'La calle',
          translations: {
            en: 'Street',
            ar: 'شارع',
            uk: 'Вулиця',
            fr: 'Rue'
          },
          emoji: '🛣️',
          color: '#EDF2F7'
        },
        {
          word: 'La avenida',
          translations: {
            en: 'Avenue',
            ar: 'شارع رئيسي',
            uk: 'Проспект',
            fr: 'Avenue'
          },
          emoji: '🛣️',
          color: '#EDF2F7'
        },
        {
          word: 'La plaza',
          translations: {
            en: 'Square',
            ar: 'ميدان',
            uk: 'Площа',
            fr: 'Place'
          },
          emoji: '🏛️',
          color: '#EDF2F7'
        },
        {
          word: 'La esquina',
          translations: {
            en: 'Corner',
            ar: 'زاوية',
            uk: 'Кут',
            fr: 'Coin'
          },
          emoji: '📐',
          color: '#EDF2F7'
        },
        {
          word: 'El cruce',
          translations: {
            en: 'Crossing / Intersection',
            ar: 'تقاطع',
            uk: 'Перехрестя',
            fr: 'Carrefour'
          },
          emoji: '🚸',
          color: '#EDF2F7'
        },
        {
          word: 'Derecha',
          translations: {
            en: 'Right',
            ar: 'يمين',
            uk: 'Праворуч',
            fr: 'Droite'
          },
          emoji: '➡️',
          color: '#EDF2F7'
        },
        {
          word: 'Izquierda',
          translations: {
            en: 'Left',
            ar: 'يسار',
            uk: 'Ліворуч',
            fr: 'Gauche'
          },
          emoji: '⬅️',
          color: '#EDF2F7'
        },
        {
          word: 'Todo recto / Derecho',
          translations: {
            en: 'Straight ahead',
            ar: 'مباشرة',
            uk: 'Прямо',
            fr: 'Tout droit'
          },
          emoji: '⬆️',
          color: '#EDF2F7'
        },
        {
          word: 'Girar / Doblar',
          translations: {
            en: 'To turn',
            ar: 'انعطاف',
            uk: 'Повертати',
            fr: 'Tourner'
          },
          emoji: '↩️',
          color: '#EDF2F7'
        },
        {
          word: 'Cerca',
          translations: {
            en: 'Near',
            ar: 'قريب',
            uk: 'Близько',
            fr: 'Près'
          },
          emoji: '📍',
          color: '#E2F3E7'
        },
        {
          word: 'Lejos',
          translations: {
            en: 'Far',
            ar: 'بعيد',
            uk: 'Далеко',
            fr: 'Loin'
          },
          emoji: '🌍',
          color: '#FCE8E8'
        },
        {
          word: 'Al lado de',
          translations: {
            en: 'Next to',
            ar: 'بجانب',
            uk: 'Поруч з',
            fr: 'À côté de'
          },
          emoji: '🧑‍🤝‍🧑',
          color: '#EDF2F7'
        },
        {
          word: 'Enfrente de',
          translations: {
            en: 'In front of',
            ar: 'أمام',
            uk: 'Навпроти',
            fr: 'En face de'
          },
          emoji: '↔️',
          color: '#EDF2F7'
        },
        {
          word: 'Detrás de',
          translations: {
            en: 'Behind',
            ar: 'خلف',
            uk: 'Позаду',
            fr: 'Derrière'
          },
          emoji: '⬅️',
          color: '#EDF2F7'
        },
        {
          word: 'El mapa',
          translations: {
            en: 'Map',
            ar: 'خريطة',
            uk: 'Карта',
            fr: 'Carte'
          },
          emoji: '🗺️',
          color: '#E3EEF9'
        },
        {
          word: 'La parada de autobús',
          translations: {
            en: 'Bus stop',
            ar: 'موقف حافلات',
            uk: 'Автобусна зупинка',
            fr: 'Arrêt de bus'
          },
          emoji: '🚏',
          color: '#FFF5F5'
        },
        {
          word: 'La estación de tren',
          translations: {
            en: 'Train station',
            ar: 'محطة قطار',
            uk: 'Залізничний вокзал',
            fr: 'Gare ferroviaire'
          },
          emoji: '🚉',
          color: '#FFF5F5'
        },
        {
          word: 'El supermercado',
          translations: {
            en: 'Supermarket',
            ar: 'سوبرماركت',
            uk: 'Супермаркет',
            fr: 'Supermarché'
          },
          emoji: '🛒',
          color: '#EBF8FF'
        },
        {
          word: 'El banco',
          translations: {
            en: 'Bank',
            ar: 'بنك',
            uk: 'Банк',
            fr: 'Banque'
          },
          emoji: '🏦',
          color: '#EBF8FF'
        },
        {
          word: 'El hospital',
          translations: {
            en: 'Hospital',
            ar: 'مستشفى',
            uk: 'Лікарня',
            fr: 'Hôpital'
          },
          emoji: '🏥',
          color: '#E2F3E7'
        },
        {
          word: 'La oficina de turismo',
          translations: {
            en: 'Tourist office',
            ar: 'مكتب السياحة',
            uk: 'Туристичний офіс',
            fr: 'Office de tourisme'
          },
          emoji: 'ℹ️',
          color: '#EBF8FF'
        },
        {
          word: 'El semáforo',
          translations: {
            en: 'Traffic light',
            ar: 'إشارة مرور',
            uk: 'Світлофор',
            fr: 'Feu de signalisation'
          },
          emoji: '🚦',
          color: '#EDF2F7'
        },
        {
          word: 'El paso de peatones',
          translations: {
            en: 'Pedestrian crossing',
            ar: 'مмер مشاة',
            uk: 'Пішохідний перехід',
            fr: 'Passage piéton'
          },
          emoji: '🚸',
          color: '#EDF2F7'
        },
        {
          word: 'El billete / boleto',
          translations: {
            en: 'Ticket',
            ar: 'تذكرة',
            uk: 'Квиток',
            fr: 'Ticket'
          },
          emoji: '🎫',
          color: '#EDF2F7'
        },
        {
          word: 'Perdido / Perdida',
          translations: {
            en: 'Lost',
            ar: 'مفقود / تائه',
            uk: 'Загублений',
            fr: 'Perdu'
          },
          emoji: '😰',
          color: '#FCE8E8'
        }
      ],
    content: `
## Preguntar por lugares

Si estás perdido o necesitas algo urgente, puedes usar: **¿Dónde está...?** <trans en="(Where is...?)" ar="(أين...؟)" uk="(Де знаходиться...?)" fr="(Où est...?)"/>

*   ¿Dónde está **el lavabo**? <trans en="(Where is the bathroom?)" ar="(أين الحمام؟)" uk="(Де туалет?)" fr="(Où sont les toilettes ?)"/>
*   ¿Dónde está **el autobús**?
*   ¿Dónde está **la estación de metro**?
*   ¿Dónde está **la tienda** de comida?
    `,
    exercises: [
      {
        id: "ex1",
        question: `Necesitas lavarte las manos. Preguntas: ¿Dónde está...? <trans en="(You need to wash your hands. Questions: Where is...?)" ar="(أنت بحاجة إلى غسل يديك. الأسئلة: أين...؟)" uk="(Треба вимити руки. Запитання: Де...?)" fr="(Vous devez vous laver les mains. Questions : Où est... ?)"/>`,
        options: ["el metro <trans en=\"(the meter)\" ar=\"(المتر)\" uk=\"(лічильник)\" fr=\"(le compteur)\"/>", "el lavabo <trans en=\"(the sink)\" ar=\"(الحوض)\" uk=\"(раковина)\" fr=\"(l'évier)\"/>", "el autobús <trans en=\"(the bus)\" ar=\"(الحافلة)\" uk=\"(автобус)\" fr=\"(le bus)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `Quieres comprar algo de comida. Preguntas: ¿Dónde está...? <trans en="(You want to buy some food. Questions: Where is...?)" ar="(تريد شراء بعض الطعام. الأسئلة: أين...؟)" uk="(Ви хочете купити трохи їжі. Запитання: Де...?)" fr="(Vous voulez acheter de la nourriture. Questions : Où est... ?)"/>`,
        options: ["la tienda <trans en=\"(the store)\" ar=\"(المتجر)\" uk=\"(магазин)\" fr=\"(le magasin)\"/>", "el hospital <trans en=\"(the hospital)\" ar=\"(المستشفى)\" uk=\"(лікарня)\" fr=\"(l'hôpital)\"/>", "el mar <trans en=\"(the sea)\" ar=\"(البحر)\" uk=\"(море)\" fr=\"(la mer)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Para indicar que vayas en la misma dirección, dices: <trans en="(To indicate that you are going in the same direction, you say:)" ar="(للإشارة إلى أنك تسير في نفس الاتجاه تقول:)" uk="(Щоб вказати, що ви йдете в тому самому напрямку, скажіть:)" fr="(Pour indiquer que vous allez dans la même direction, vous dites :)"/>`,
        options: ["Sigue todo recto <trans en=\"(Go straight ahead)\" ar=\"(المضي قدما مباشرة)\" uk=\"(Іди прямо вперед)\" fr=\"(Allez tout droit)\"/>", "Gira a la izquierda <trans en=\"(Turn left)\" ar=\"(اتجه إلى اليسار)\" uk=\"(Поверніть ліворуч)\" fr=\"(Tournez à gauche)\"/>", "Ve hacia atrás <trans en=\"(Go back)\" ar=\"(ارجع)\" uk=\"(Повернись назад)\" fr=\"(Retourner)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `Lo contrario de 'derecha' es... <trans en="(The opposite of 'right' is...)" ar="(عكس كلمة "الحق" هو ...)" uk="(Протилежністю до "право" є...)" fr="(Le contraire de « droit » est...)"/>`,
        options: ["Izquierda <trans en=\"(Left)\" ar=\"(اليسار)\" uk=\"(Ліворуч)\" fr=\"(Gauche)\"/>", "Arriba <trans en=\"(Up)\" ar=\"(فوق)\" uk=\"(Вгору)\" fr=\"(Vers le haut)\"/>", "Recto <trans en=\"(Straight)\" ar=\"(مستقيم)\" uk=\"(Прямо)\" fr=\"(Hétéro)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Si el banco no está lejos, está... <trans en="(If the bank is not far away, it is...)" ar="(إذا لم يكن البنك بعيدًا، فهو...)" uk="(Якщо банк недалеко, це...)" fr="(Si la banque n'est pas loin, c'est...)"/>`,
        options: ["Cerca <trans en=\"(Nearby)\" ar=\"(قريب)\" uk=\"(Поруч)\" fr=\"(À proximité)\"/>", "Allí <trans en=\"(There)\" ar=\"(هناك)\" uk=\"(Там)\" fr=\"(Là)\"/>", "A la vuelta <trans en=\"(On the way back)\" ar=\"(في طريق العودة)\" uk=\"(На зворотному шляху)\" fr=\"(Sur le chemin du retour)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `¿Cómo preguntas dónde está el metro? <trans en="(How do you ask where the subway is?)" ar="(كيف تسأل أين مترو الانفاق؟)" uk="(Як запитати де метро?)" fr="(Comment demande-t-on où est le métro ?)"/>`,
        options: ["¿Dónde está el metro? <trans en=\"(Where is the subway?)\" ar=\"(أين هو مترو الانفاق؟)\" uk=\"(Де знаходиться метро?)\" fr=\"(Où est le métro ?)\"/>", "¿Qué es el metro? <trans en=\"(What is the meter?)\" ar=\"(ما هو المتر؟)\" uk=\"(Що таке лічильник?)\" fr=\"(Qu'est-ce que le compteur ?)\"/>", "¿Cuándo es el metro? <trans en=\"(When is the subway?)\" ar=\"(متى مترو الانفاق؟)\" uk=\"(Коли метро?)\" fr=\"(Quand est le métro ?)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Si necesitas cambiar de calle, debes... <trans en="(If you need to change streets, you must...)" ar="(إذا كنت بحاجة إلى تغيير الشوارع، يجب عليك...)" uk="(Якщо вам потрібно змінити вулицю, ви повинні...)" fr="(Si vous devez changer de rue, vous devez...)"/>`,
        options: ["Girar / Torcer <trans en=\"(Twist / Twist)\" ar=\"(تويست / تويست)\" uk=\"(Крутити / Крутити)\" fr=\"(Torsion / Torsion)\"/>", "Seguir recto <trans en=\"(Go straight)\" ar=\"(اذهب مباشرة)\" uk=\"(Йди прямо)\" fr=\"(Allez tout droit)\"/>", "Parar <trans en=\"(Stop)\" ar=\"(توقف)\" uk=\"(Стоп)\" fr=\"(Arrêtez)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `El lugar donde dos calles se cruzan es la... <trans en="(The place where two streets intersect is the...)" ar="(المكان الذي يتقاطع فيه شارعان هو...)" uk="(Місце перетину двох вулиць - це...)" fr="(L'endroit où deux rues se croisent est le...)"/>`,
        options: ["Esquina / Cruce <trans en=\"(Corner / Crossing)\" ar=\"(ركن / معبر)\" uk=\"(Кут / Перетин)\" fr=\"(Coin / Traversée)\"/>", "Avenida <trans en=\"(Avenue)\" ar=\"(الجادة)\" uk=\"(Просп)\" fr=\"(Avenue)\"/>", "Plaza <trans en=\"(Square)\" ar=\"(ساحة)\" uk=\"(Квадрат)\" fr=\"(Carré)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Si pasas la plaza, significa que la dejas... <trans en="(If you pass the square, it means you leave it...)" ar="(إذا تجاوزت المربع فهذا يعني أنك تركته...)" uk="(Якщо ви проходите повз площу, значить виходите з неї...)" fr="(Si vous passez la place, cela signifie que vous la quittez...)"/>`,
        options: ["Atrás <trans en=\"(Back)\" ar=\"(العودة)\" uk=\"(Назад)\" fr=\"(Retour)\"/>", "Delante <trans en=\"(Front)\" ar=\"(الجبهة)\" uk=\"(Спереду)\" fr=\"(Avant)\"/>", "Arriba <trans en=\"(Up)\" ar=\"(فوق)\" uk=\"(Вгору)\" fr=\"(Vers le haut)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Para subir a la planta 2, usas el... <trans en="(To go up to floor 2, use the...)" ar="(للصعود إلى الطابق الثاني، استخدم...)" uk="(Щоб піднятися на 2 поверх, використовуйте...)" fr="(Pour monter à l'étage 2, utilisez le...)"/>`,
        options: ["Ascensor / Escaleras <trans en=\"(Elevator / Stairs)\" ar=\"(مصعد / سلالم)\" uk=\"(Ліфт / Сходи)\" fr=\"(Ascenseur / Escaliers)\"/>", "Sótano <trans en=\"(Basement)\" ar=\"(الطابق السفلي)\" uk=\"(Підвал)\" fr=\"(Sous-sol)\"/>", "Coche <trans en=\"(Car)\" ar=\"(سيارة)\" uk=\"(Автомобіль)\" fr=\"(Voiture)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `El parque está 'enfrente' significa que está... <trans en="(The park is 'in front' means it is...)" ar="(الحديقة "أمام" تعني أنها...)" uk="(Парк «попереду» означає, що це...)" fr="(Le parc est 'devant' signifie qu'il est...)"/>`,
        options: ["Cara a cara <trans en=\"(Face to face)\" ar=\"(وجها لوجه)\" uk=\"(Віч-на-віч)\" fr=\"(Face à face)\"/>", "Al lado <trans en=\"(Next door)\" ar=\"(المجاور)\" uk=\"(По сусідству)\" fr=\"(À côté)\"/>", "Detrás <trans en=\"(Behind)\" ar=\"(خلف)\" uk=\"(Позаду)\" fr=\"(Derrière)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `Un lugar para caminar al lado de la calle es... <trans en="(A place to walk next to the street is...)" ar="(مكان للمشي بجوار الشارع ...)" uk="(Місце для прогулянок біля вулиці - це...)" fr="(Un endroit pour se promener à côté de la rue est...)"/>`,
        options: ["La acera <trans en=\"(The sidewalk)\" ar=\"(الرصيف)\" uk=\"(Тротуар)\" fr=\"(Le trottoir)\"/>", "La carretera <trans en=\"(The road)\" ar=\"(الطريق)\" uk=\"(Дорога)\" fr=\"(La route)\"/>", "El semáforo <trans en=\"(The traffic light)\" ar=\"(إشارة المرور)\" uk=\"(Світлофор)\" fr=\"(Le feu tricolore)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Lo opuesto a 'Cerca' es... <trans en="(The opposite of 'Near' is...)" ar="(عكس "القريب" هو ...)" uk="(Протилежністю до "Поруч" є...)" fr="(Le contraire de « Proche » est...)"/>`,
        options: ["Lejos <trans en=\"(Far away)\" ar=\"(بعيدا)\" uk=\"(Далеко)\" fr=\"(Loin)\"/>", "Dentro <trans en=\"(Inside)\" ar=\"(داخل)\" uk=\"(Всередині)\" fr=\"(À l'intérieur)\"/>", "Encima <trans en=\"(Above)\" ar=\"(فوق)\" uk=\"(Вище)\" fr=\"(Ci-dessus)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿Qué haces en un paso de cebra? <trans en="(What do you do at a zebra crossing?)" ar="(ماذا تفعل عند معبر حمار وحشي؟)" uk="(Що ви робите на зебрі?)" fr="(Que faites-vous à un passage piéton ?)"/>`,
        options: ["Cruzar la calle <trans en=\"(Cross the street)\" ar=\"(عبور الشارع)\" uk=\"(Перейти вулицю)\" fr=\"(Traverser la rue)\"/>", "Aparcar el coche <trans en=\"(Park the car)\" ar=\"(ركن السيارة)\" uk=\"(Припаркуйте автомобіль)\" fr=\"(Garez la voiture)\"/>", "Girar <trans en=\"(Turn)\" ar=\"(بدوره)\" uk=\"(Поворот)\" fr=\"(Tourner)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `El museo está 'al lado de' la iglesia, significa... <trans en="(The museum is 'next to' the church, it means...)" ar="(المتحف "بجانب" الكنيسة يعني...)" uk="(Музей «поруч» з церквою, значить...)" fr="(Le musée est 'à côté' de l'église, ça veut dire...)"/>`,
        options: ["Muy cerca, contiguo <trans en=\"(Very close, adjacent)\" ar=\"(قريب جدًا، مجاور)\" uk=\"(Зовсім близько, по сусідству)\" fr=\"(Très proche, adjacent)\"/>", "Lejos <trans en=\"(Far away)\" ar=\"(بعيدا)\" uk=\"(Далеко)\" fr=\"(Loin)\"/>", "Detrás <trans en=\"(Behind)\" ar=\"(خلف)\" uk=\"(Позаду)\" fr=\"(Derrière)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Si te dicen 'Coge la primera calle a la derecha', tú... <trans en="(If they tell you 'Take the first street on the right', you...)" ar="(إذا قالوا لك خذ أول شارع على اليمين فأنت...)" uk="(Якщо вам скажуть «Поїдьте на першу вулицю праворуч», ви...)" fr="(S'ils vous disent 'Prenez la première rue à droite', vous...)"/>`,
        options: ["Giras en la primera calle a la derecha <trans en=\"(You turn into the first street on the right)\" ar=\"(تتجه إلى أول شارع على اليمين)\" uk=\"(Ви повертаєте на першу вулицю праворуч)\" fr=\"(Vous tournez dans la première rue à droite)\"/>", "Vas recto <trans en=\"(You go straight)\" ar=\"(تذهب مباشرة)\" uk=\"(Йди прямо)\" fr=\"(Tu vas tout droit)\"/>", "Giras a la izquierda <trans en=\"(You turn left)\" ar=\"(تستدير لليسار)\" uk=\"(Ви повертаєте ліворуч)\" fr=\"(Vous tournez à gauche)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Lo contrario de 'Subir' es... <trans en="(The opposite of 'Up' is...)" ar="(عكس "أعلى" هو ...)" uk="(Протилежністю "Вгору" є...)" fr="(Le contraire de « Up » est...)"/>`,
        options: ["Bajar <trans en=\"(Download)\" ar=\"(تحميل)\" uk=\"(Завантажити)\" fr=\"(Télécharger)\"/>", "Entrar <trans en=\"(Enter)\" ar=\"(أدخل)\" uk=\"(Введіть)\" fr=\"(Entrez)\"/>", "Cruzar <trans en=\"(Cross)\" ar=\"(صليب)\" uk=\"(Хрест)\" fr=\"(Croix)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Un coche debe parar si el semáforo está en... <trans en="(A car must stop if the traffic light is on...)" ar="(يجب أن تتوقف السيارة إذا كانت إشارة المرور مضاءة...)" uk="(Автомобіль повинен зупинитися, якщо горить світлофор...)" fr="(Une voiture doit s'arrêter si le feu est allumé...)"/>`,
        options: ["Rojo <trans en=\"(Red)\" ar=\"(الأحمر)\" uk=\"(Червоний)\" fr=\"(Rouge)\"/>", "Verde <trans en=\"(Green)\" ar=\"(أخضر)\" uk=\"(Зелений)\" fr=\"(Vert)\"/>", "Ámbar <trans en=\"(Amber)\" ar=\"(العنبر)\" uk=\"(Бурштин)\" fr=\"(Ambre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `'Sigue hasta el final de la calle' significa... <trans en="('Go to the end of the street' means...)" ar="("اذهب إلى نهاية الشارع" تعني...)" uk="(«Іти в кінець вулиці» означає...)" fr="('Aller jusqu'au bout de la rue' signifie...)"/>`,
        options: ["No gires hasta llegar al final <trans en=\"(Don't turn until you reach the end)\" ar=\"(لا تلتفت حتى تصل إلى النهاية)\" uk=\"(Не обертай, поки не дійдеш до кінця)\" fr=\"(Ne vous retournez pas avant d'avoir atteint la fin)\"/>", "Date la vuelta <trans en=\"(Turn around)\" ar=\"(يستدير)\" uk=\"(Повернись)\" fr=\"(Retournez-vous)\"/>", "Cruza ahora <trans en=\"(Cross now)\" ar=\"(اعبر الآن)\" uk=\"(Хрест зараз)\" fr=\"(Traversez maintenant)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Para indicar que vayas en la misma dirección, dices: (Extra) <trans en="(To indicate that you are going in the same direction, you say: (Extra))" ar="(للإشارة إلى أنك تسير في نفس الاتجاه تقول: (زيادة))" uk="(Щоб вказати, що ви йдете в тому ж напрямку, ви скажете: (Додатково))" fr="(Pour indiquer que vous allez dans la même direction, vous dites : (Extra))"/>`,
        options: ["Sigue todo recto <trans en=\"(Go straight ahead)\" ar=\"(المضي قدما مباشرة)\" uk=\"(Іди прямо вперед)\" fr=\"(Allez tout droit)\"/>", "Gira a la izquierda <trans en=\"(Turn left)\" ar=\"(اتجه إلى اليسار)\" uk=\"(Поверніть ліворуч)\" fr=\"(Tournez à gauche)\"/>", "Ve hacia atrás <trans en=\"(Go back)\" ar=\"(ارجع)\" uk=\"(Повернись назад)\" fr=\"(Retourner)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-gram-necesidades",
    topic: "Necesidades",
    title: "Supervivencia: Quiero y Necesito",
    level: "A2",
    category: "Gramática",
    description: "Aprende a expresar tus deseos y necesidades: quiero comprar, necesito ayuda, quiero ir a...",
    imageUrl: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=600&auto=format&fit=crop&q=80",
    emoji: "🛒",
    color: "#F3E8FF",
    vocabulary: [
        {
          word: 'Quiero comprar pan',
          translations: {
            en: 'I want to buy bread',
            ar: 'أريد شراء الخبز',
            uk: 'Я хочу купити хліб',
            fr: 'Je veux acheter du pain'
          },
          emoji: '🍞',
          color: '#FEFCBF'
        },
        {
          word: 'Necesito comprar medicina',
          translations: {
            en: 'I need to buy medicine',
            ar: 'أحتاج لشراء الدواء',
            uk: 'Мені потрібно купити ліки',
            fr: 'J\'ai besoin d\'acheter des médicaments'
          },
          emoji: '💊',
          color: '#FCE8E8'
        },
        {
          word: 'Quiero ir al médico',
          translations: {
            en: 'I want to go to the doctor',
            ar: 'أريد الذهاب إلى الطبيب',
            uk: 'Я хочу піти до лікаря',
            fr: 'Je veux aller chez le médecin'
          },
          emoji: '🩺',
          color: '#E2F3E7'
        },
        {
          word: 'Necesito ir al baño',
          translations: {
            en: 'I need to go to the bathroom',
            ar: 'أحتاج للذهاب إلى الحمام',
            uk: 'Мені потрібно в туалет',
            fr: 'J\'ai besoin d\'aller aux toilettes'
          },
          emoji: '🚽',
          color: '#EBF8FF'
        },
        {
          word: 'Quiero comer algo',
          translations: {
            en: 'I want to eat something',
            ar: 'أريد أن آكل شيئاً',
            uk: 'Я хочу щось з\'їсти',
            fr: 'Je veux manger quelque chose'
          },
          emoji: '🍏',
          color: '#FFF4E5'
        },
        {
          word: 'Necesito beber agua',
          translations: {
            en: 'I need to drink water',
            ar: 'أحتاج لشرب الماء',
            uk: 'Мені потрібно випити води',
            fr: 'J\'ai besoin de boire de l\'eau'
          },
          emoji: '💧',
          color: '#E3EEF9'
        },
        {
          word: 'Quiero hablar español',
          translations: {
            en: 'I want to speak Spanish',
            ar: 'أريد التحدث بالإسبانية',
            uk: 'Я хочу говорити іспанською',
            fr: 'Je veux parler espagnol'
          },
          emoji: '🗣️',
          color: '#EBF8FF'
        },
        {
          word: 'Necesito estudiar hoy',
          translations: {
            en: 'I need to study today',
            ar: 'أحتاج للدراسة اليوم',
            uk: 'Мені потрібно вчитися сьогодні',
            fr: 'J\'ai besoin d\'étudier aujourd\'hui'
          },
          emoji: '📚',
          color: '#FEFCBF'
        },
        {
          word: 'Quiero descansar un poco',
          translations: {
            en: 'I want to rest a bit',
            ar: 'أريد الاستراحة قليلاً',
            uk: 'Я хочу трохи відпочити',
            fr: 'Je veux me reposer un peu'
          },
          emoji: '🛌',
          color: '#F3E8FF'
        },
        {
          word: 'Necesito dormir más',
          translations: {
            en: 'I need to sleep more',
            ar: 'أحتاج للنوم أكثر',
            uk: 'Мені потрібно більше спати',
            fr: 'J\'ai besoin de dormir plus'
          },
          emoji: '🛌',
          color: '#F3E8FF'
        },
        {
          word: 'Quiero un taxi',
          translations: {
            en: 'I want a taxi',
            ar: 'أريد سيارة أجرة',
            uk: 'Я хочу таксі',
            fr: 'Je veux un taxi'
          },
          emoji: '🚕',
          color: '#FEFCBF'
        },
        {
          word: 'Necesito un billete',
          translations: {
            en: 'I need a ticket',
            ar: 'أحتاج إلى تذكرة',
            uk: 'Мені потрібен квиток',
            fr: 'J\'ai besoin d\'un billet'
          },
          emoji: '🎫',
          color: '#EDF2F7'
        },
        {
          word: 'Quiero reservar una mesa',
          translations: {
            en: 'I want to reserve a table',
            ar: 'أريد حجز طاولة',
            uk: 'Я хочу забронювати столик',
            fr: 'Je veux réserver une table'
          },
          emoji: '🪑',
          color: '#E2F3E7'
        },
        {
          word: 'Necesito pagar la cuenta',
          translations: {
            en: 'I need to pay the bill',
            ar: 'أحتاج لدفع الحساب',
            uk: 'Мені потрібно сплатити рахунок',
            fr: 'J\'ai besoin de payer l\'addition'
          },
          emoji: '💵',
          color: '#EBF8FF'
        },
        {
          word: 'Quiero visitar Madrid',
          translations: {
            en: 'I want to visit Madrid',
            ar: 'أريد زيارة مدريد',
            uk: 'Я хочу відвідати Мадрид',
            fr: 'Je veux visiter Madrid'
          },
          emoji: '🏙️',
          color: '#E3EEF9'
        },
        {
          word: 'Necesito renovar mi pasaporte',
          translations: {
            en: 'I need to renew my passport',
            ar: 'أحتاج لتجديد جواز سفري',
            uk: 'Мені потрібно оновити паспорт',
            fr: 'J\'ai besoin de renouveler mon passeport'
          },
          emoji: '📕',
          color: '#FCE8E8'
        },
        {
          word: 'Quiero alquilar un coche',
          translations: {
            en: 'I want to rent a car',
            ar: 'أريد استئجار سيارة',
            uk: 'Я хочу орендувати машину',
            fr: 'Je veux louer une voiture'
          },
          emoji: '🚗',
          color: '#FFF4E5'
        },
        {
          word: 'Necesito encontrar un hotel',
          translations: {
            en: 'I need to find a hotel',
            ar: 'أحتاج لإيجاد فندق',
            uk: 'Мені потрібно знайти готель',
            fr: 'J\'ai besoin de trouver un hôtel'
          },
          emoji: '🏨',
          color: '#EDF2F7'
        },
        {
          word: 'Quiero aprender a cocinar',
          translations: {
            en: 'I want to learn to cook',
            ar: 'أريد تعلم الطبخ',
            uk: 'Я хочу навчитися готувати',
            fr: 'Je veux apprendre à cuisiner'
          },
          emoji: '🍳',
          color: '#FFF4E5'
        },
        {
          word: 'Necesito trabajar mañana',
          translations: {
            en: 'I need to work tomorrow',
            ar: 'أحتاج للعمل غداً',
            uk: 'Мені потрібно працювати завтра',
            fr: 'J\'ai besoin de travailler demain'
          },
          emoji: '💼',
          color: '#E3EEF9'
        },
        {
          word: 'Quiero café con leche',
          translations: {
            en: 'I want coffee with milk',
            ar: 'أريد قهوة بالحليب',
            uk: 'Я хочу каву з молоком',
            fr: 'Je veux un café au lait'
          },
          emoji: '☕',
          color: '#FFF4E5'
        },
        {
          word: 'Necesito una ensalada',
          translations: {
            en: 'I need a salad',
            ar: 'أحتاج إلى سلطة',
            uk: 'Мені потрібен салат',
            fr: 'J\'ai besoin d\'une salade'
          },
          emoji: '🥗',
          color: '#E2F3E7'
        },
        {
          word: 'Quiero ensalada sin sal',
          translations: {
            en: 'I want salad without salt',
            ar: 'أريد سلطة بدون ملح',
            uk: 'Я хочу салат без солі',
            fr: 'Je veux une salade sans sel'
          },
          emoji: '🥗',
          color: '#E2F3E7'
        },
        {
          word: 'Necesito un abrigo nuevo',
          translations: {
            en: 'I need a new coat',
            ar: 'أحتاج لمعطف جديد',
            uk: 'Мені потрібне нове пальто',
            fr: 'J\'ai besoin d\'un nouveau manteau'
          },
          emoji: '🧥',
          color: '#FFF4E5'
        },
        {
          word: 'Quiero ver la televisión',
          translations: {
            en: 'I want to watch TV',
            ar: 'أريد مشاهدة التلفزيون',
            uk: 'Я хочу дивитися телевізор',
            fr: 'Je veux regarder la télévision'
          },
          emoji: '📺',
          color: '#EDF2F7'
        },
        {
          word: 'Necesito llamar por teléfono',
          translations: {
            en: 'I need to make a phone call',
            ar: 'أحتاج لإجراء مكالمة هاتفية',
            uk: 'Мені потрібно зателефонувати',
            fr: 'J\'ai besoin de téléphoner'
          },
          emoji: '📞',
          color: '#EBF8FF'
        },
        {
          word: 'Quiero viajar en verano',
          translations: {
            en: 'I want to travel in summer',
            ar: 'أريد السفر في الصيف',
            uk: 'Я хочу подорожувати влітку',
            fr: 'Je veux voyager en été'
          },
          emoji: '✈️',
          color: '#E3EEF9'
        },
        {
          word: 'Necesito hacer la compra',
          translations: {
            en: 'I need to go grocery shopping',
            ar: 'أحتاج للقيام بالتسوق للطعام',
            uk: 'Мені потрібно скупитися',
            fr: 'J\'ai besoin de faire las courses'
          },
          emoji: '🛒',
          color: '#EBF8FF'
        },
        {
          word: 'Quiero un helado de chocolate',
          translations: {
            en: 'I want a chocolate ice cream',
            ar: 'أريد مثلجات الشوكولاتة',
            uk: 'Я хочу шоколадне морозиво',
            fr: 'Je veux une glace au chocolat'
          },
          emoji: '🍦',
          color: '#FEFCBF'
        },
        {
          word: 'Necesito limpiar la casa',
          translations: {
            en: 'I need to clean the house',
            ar: 'أحتاج لتنظيف المنزل',
            uk: 'Мені потрібно прибрати в будинку',
            fr: 'J\'ai besoin de nettoyer la maison'
          },
          emoji: '🧹',
          color: '#EDF2F7'
        }
      ],
    content: `
## Expresar deseos y necesidades: Querer y Necesitar

Para pedir cosas o decir qué queremos hacer o qué necesitamos, usamos los verbos **Querer** (deseo o intención) y **Necesitar** (obligación o necesidad). A continuación tienes sus conjugaciones completas en Presente de Indicativo:

### 1. Verbo QUERER (E -> IE) <trans en="(To want)" ar="(يريد)" uk="(Хотіти)" fr="(Vouloir)"/>
*Nota: Es un verbo irregular con cambio de vocal (e -> ie) en todas las personas menos nosotros y vosotros.*
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Conjugación</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">quiero</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Quiero comprar agua.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I want to buy water.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">quieres</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">¿Quieres un café?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Do you want a coffee?</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">quiere</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Él quiere ir a la estación.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">He wants to go to the station.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">queremos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Queremos viajar hoy.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We want to travel today.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">queréis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">¿Queréis comer algo?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Do you all want to eat something?</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">quieren</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Ellos quieren aprender español.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They want to learn Spanish.</td></tr></tbody></table></div>
---

### 2. Verbo NECESITAR (Regular) <trans en="(To need)" ar="(يحتاج)" uk="(Потребувати)" fr="(Avoir besoin de)"/>
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Conjugación</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">necesito</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Necesito ayuda, por favor.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I need help, please.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">necesitas</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">¿Necesitas un bolígrafo?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Do you need a pen?</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">necesita</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Ella necesita trabajar.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">She needs to work.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">necesitamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Necesitamos más tiempo.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We need more time.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">necesitáis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">¿Necesitáis dinero?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Do you all need money?</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">necesitan</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Ellos necesitan descansar.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They need to rest.</td></tr></tbody></table></div>
    `,
    exercises: [
      {
        id: "ex1",
        question: `No tienes agua y tienes mucha sed. Dices: '______ comprar agua'. <trans en="(You have no water and you are very thirsty. You say: '______ buy water.')" ar="(ليس لديك ماء وأنت عطشان جداً. تقول: ______ شراء الماء.)" uk="(У вас немає води, і ви відчуваєте сильну спрагу. Ви говорите: «______ купіть воду».)" fr="(Vous n'avez pas d'eau et vous avez très soif. Vous dites : « ______ achète de l'eau ».)"/>`,
        options: ["Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>", "Necesito <trans en=\"(I need)\" ar=\"(أحتاج)\" uk=\"(Мені потрібно)\" fr=\"(J'ai besoin)\"/>", "Hola <trans en=\"(Hello)\" ar=\"(مرحبا)\" uk=\"(Привіт)\" fr=\"(Bonjour)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `¿Cómo pides que alguien te asista? <trans en="(How do you ask someone to assist you?)" ar="(كيف تطلب من أحد أن يساعدك؟)" uk="(Як попросити когось допомогти вам?)" fr="(Comment demander à quelqu'un de vous aider ?)"/>`,
        options: ["Necesito ayuda <trans en=\"(I need help)\" ar=\"(أحتاج للمساعدة)\" uk=\"(Мені потрібна допомога)\" fr=\"(J'ai besoin d'aide)\"/>", "Quiero ir <trans en=\"(I want to go)\" ar=\"(أريد أن أذهب)\" uk=\"(Я хочу піти)\" fr=\"(Je veux y aller)\"/>", "El lavabo <trans en=\"(The sink)\" ar=\"(الحوض)\" uk=\"(Раковина)\" fr=\"(L'évier)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Para vivir, el ser humano ___ beber agua. <trans en="(To live, human beings ___ drink water.)" ar="(لكي يعيش أيها الإنسان ___ يشرب الماء.)" uk="(Щоб жити, люди ___ п’ють воду.)" fr="(Pour vivre, les êtres humains ___ boivent de l'eau.)"/>`,
        options: ["necesita <trans en=\"(need)\" ar=\"(الحاجة)\" uk=\"(потреба)\" fr=\"(besoin)\"/>", "quiere <trans en=\"(wants)\" ar=\"(يريد)\" uk=\"(хоче)\" fr=\"(veut)\"/>", "odia <trans en=\"(hate)\" ar=\"(الكراهية)\" uk=\"(ненавиджу)\" fr=\"(déteste)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `Si estás cansado, ___ dormir. <trans en="(If you are tired, ___ sleep.)" ar="(إذا كنت متعباً، ___ نم.)" uk="(Якщо ти втомився, ___ спи.)" fr="(Si vous êtes fatigué, ___ dormez.)"/>`,
        options: ["tienes que / necesitas <trans en=\"(you have to / need)\" ar=\"(عليك / تحتاج)\" uk=\"(ти повинен / потрібно)\" fr=\"(tu dois / besoin)\"/>", "puedes <trans en=\"(you can)\" ar=\"(يمكنك)\" uk=\"(ти можеш)\" fr=\"(tu peux)\"/>", "sabes <trans en=\"(you know)\" ar=\"(تعلمون)\" uk=\"(ти знаєш)\" fr=\"(tu sais)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Yo ___ comprar pan, no hay en casa. <trans en="(I ___ buy bread, there isn't any at home.)" ar="(أنا ___ أشتري الخبز، لا يوجد خبز في المنزل.)" uk="(Я ___ хліб купую, вдома нема.)" fr="(Je ___achète du pain, il n'y en a pas à la maison.)"/>`,
        options: ["tengo que <trans en=\"(I have to)\" ar=\"(لا بد لي من ذلك)\" uk=\"(Я повинен)\" fr=\"(je dois)\"/>", "soy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "estoy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `Nosotros ___ estudiar para el examen. <trans en="(We ___ study for the exam.)" ar="(نحن ___ ندرس للامتحان.)" uk="(Ми ___ готуємося до іспиту.)" fr="(Nous ___ étudions pour l'examen.)"/>`,
        options: ["debemos <trans en=\"(we must)\" ar=\"(يجب علينا)\" uk=\"(ми повинні)\" fr=\"(nous devons)\"/>", "somos <trans en=\"(we are)\" ar=\"(نحن)\" uk=\"(ми)\" fr=\"(nous sommes)\"/>", "tenemos <trans en=\"(we have)\" ar=\"(لدينا)\" uk=\"(маємо)\" fr=\"(nous avons)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `¿Qué ___ hacer mañana? <trans en="(What ___ to do tomorrow?)" ar="(ماذا ___ تفعل غدا؟)" uk="(Що ___ робити завтра?)" fr="(Que ___ faire demain ?)"/>`,
        options: ["tienes que <trans en=\"(you have to)\" ar=\"(عليك بذلك)\" uk=\"(ти повинен)\" fr=\"(tu dois)\"/>", "eres <trans en=\"(you are)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu es)\"/>", "estás <trans en=\"(you are)\" ar=\"(أنت)\" uk=\"(ти)\" fr=\"(tu es)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Para viajar a otro país, a veces ___ pasaporte. <trans en="(To travel to another country, sometimes ___ passport.)" ar="(للسفر إلى بلد آخر، أحيانًا ___ جواز السفر.)" uk="(Щоб поїхати в іншу країну, іноді ___ паспорт.)" fr="(Pour voyager dans un autre pays, parfois ___ passeport.)"/>`,
        options: ["necesitas <trans en=\"(you need)\" ar=\"(تحتاج)\" uk=\"(вам потрібно)\" fr=\"(tu as besoin)\"/>", "comes <trans en=\"(you eat)\" ar=\"(تأكل)\" uk=\"(ти їси)\" fr=\"(tu manges)\"/>", "lees <trans en=\"(you read)\" ar=\"(تقرأ)\" uk=\"(ти читаєш)\" fr=\"(tu lis)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Ella ___ trabajar todos los días. <trans en="(She ___ work every day.)" ar="(هي ___ تعمل كل يوم.)" uk="(Вона ___ працює щодня.)" fr="(Elle ___ travaille tous les jours.)"/>`,
        options: ["tiene que <trans en=\"(has to)\" ar=\"(يجب)\" uk=\"(повинен)\" fr=\"(doit)\"/>", "tengo que <trans en=\"(I have to)\" ar=\"(لا بد لي من ذلك)\" uk=\"(Я повинен)\" fr=\"(je dois)\"/>", "tienes que <trans en=\"(you have to)\" ar=\"(عليك بذلك)\" uk=\"(ти повинен)\" fr=\"(tu dois)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `___ silencio en la biblioteca. (Obligación general) <trans en="(___ silence in the library. (General obligation))" ar="(___ الصمت في المكتبة. (الالتزام العام))" uk="(___ тиша в бібліотеці. (Загальне зобов'язання))" fr="(___ silence dans la bibliothèque. (Obligation générale))"/>`,
        options: ["Hay que hacer <trans en=\"(It must be done)\" ar=\"(يجب أن يتم ذلك)\" uk=\"(Це треба зробити)\" fr=\"(Il faut le faire)\"/>", "Tengo que <trans en=\"(I have to)\" ar=\"(لا بد لي من ذلك)\" uk=\"(Я повинен)\" fr=\"(Je dois)\"/>", "Necesitas <trans en=\"(You need)\" ar=\"(تحتاج)\" uk=\"(Вам потрібно)\" fr=\"(Vous avez besoin)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Para aprender español, ___ practicar mucho. <trans en="(To learn Spanish, ___ practice a lot.)" ar="(لتعلم اللغة الإسبانية، ___ تدرب كثيرًا.)" uk="(Щоб вивчити іспанську, ___ багато тренуйтеся.)" fr="(Pour apprendre l'espagnol, ___ pratiquez beaucoup.)"/>`,
        options: ["hay que <trans en=\"(you have to)\" ar=\"(عليك بذلك)\" uk=\"(ти повинен)\" fr=\"(tu dois)\"/>", "tengo <trans en=\"(I have)\" ar=\"(لقد)\" uk=\"(Маю)\" fr=\"(j'ai)\"/>", "debo de <trans en=\"(I must)\" ar=\"(لا بد لي من ذلك)\" uk=\"(Я повинен)\" fr=\"(je dois)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `Yo no ___ ir, no es obligatorio. <trans en="(I don't ___ go, it's not mandatory.)" ar="(أنا لا ___ أذهب، هذا ليس إلزاميا.)" uk="(Я не ___ ходжу, це не обов'язково.)" fr="(Je n'y vais pas ___, ce n'est pas obligatoire.)"/>`,
        options: ["tengo que <trans en=\"(I have to)\" ar=\"(لا بد لي من ذلك)\" uk=\"(Я повинен)\" fr=\"(je dois)\"/>", "necesito <trans en=\"(need)\" ar=\"(الحاجة)\" uk=\"(потреба)\" fr=\"(besoin)\"/>", "debo <trans en=\"(I must)\" ar=\"(لا بد لي من ذلك)\" uk=\"(Я повинен)\" fr=\"(je dois)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `¿Tú ___ ayuda? <trans en="(Do you ___ help?)" ar="(هل ___ مساعدة؟)" uk="(Ви ___ допомагаєте?)" fr="(Est-ce que vous ___ aidez ?)"/>`,
        options: ["necesitas <trans en=\"(you need)\" ar=\"(تحتاج)\" uk=\"(вам потрібно)\" fr=\"(tu as besoin)\"/>", "necesito <trans en=\"(need)\" ar=\"(الحاجة)\" uk=\"(потреба)\" fr=\"(besoin)\"/>", "necesita <trans en=\"(need)\" ar=\"(الحاجة)\" uk=\"(потреба)\" fr=\"(besoin)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Ellos ___ descansar después del partido. <trans en="(They ___ rest after the game.)" ar="(إنهم ___ يستريحون بعد المباراة.)" uk="(Вони ___ відпочивають після гри.)" fr="(Ils ___ se reposent après le match.)"/>`,
        options: ["necesitan <trans en=\"(need)\" ar=\"(الحاجة)\" uk=\"(потреба)\" fr=\"(besoin)\"/>", "tienen <trans en=\"(have)\" ar=\"(لديك)\" uk=\"(мати)\" fr=\"(avoir)\"/>", "deben de <trans en=\"(must)\" ar=\"(يجب)\" uk=\"(треба)\" fr=\"(doit)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Para comprar, ___ dinero. <trans en="(To buy, ___ money.)" ar="(لشراء، ___ المال.)" uk="(Купити, ___ грошей.)" fr="(Pour acheter, ___ de l'argent.)"/>`,
        options: ["hace falta <trans en=\"(it is necessary)\" ar=\"(فمن الضروري)\" uk=\"(треба)\" fr=\"(c'est nécessaire)\"/>", "tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>", "es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `___ comer más verduras para estar sano. <trans en="(___ eat more vegetables to be healthy.)" ar="(___ تناول المزيد من الخضار لتكون بصحة جيدة.)" uk="(___ їжте більше овочів, щоб бути здоровим.)" fr="(___ mangez plus de légumes pour être en bonne santé.)"/>`,
        options: ["Debes <trans en=\"(You must)\" ar=\"(يجب عليك)\" uk=\"(Ви повинні)\" fr=\"(Vous devez)\"/>", "Tienes <trans en=\"(You have)\" ar=\"(لديك)\" uk=\"(Ви маєте)\" fr=\"(Vous avez)\"/>", "Haces <trans en=\"(You do)\" ar=\"(أنت تفعل)\" uk=\"(Ви робите)\" fr=\"(Vous le faites)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Me duele la cabeza, ___ una aspirina. <trans en="(My head hurts, ___ an aspirin.)" ar="(رأسي يؤلمني، ___ حبة أسبرين.)" uk="(Голова болить, ___ аспірин.)" fr="(J'ai mal à la tête, ___ une aspirine.)"/>`,
        options: ["necesito <trans en=\"(need)\" ar=\"(الحاجة)\" uk=\"(потреба)\" fr=\"(besoin)\"/>", "tengo <trans en=\"(I have)\" ar=\"(لقد)\" uk=\"(Маю)\" fr=\"(j'ai)\"/>", "quiero que <trans en=\"(I want you)\" ar=\"(أريدك)\" uk=\"(Я хочу тебе)\" fr=\"(je te veux)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Nosotros no ___ dinero, es gratis. <trans en="(We don't ___ money, it's free.)" ar="(نحن لا ___ المال، فهو مجاني.)" uk="(Ми не ___ грошей, це безкоштовно.)" fr="(Nous ne ___ pas d'argent, c'est gratuit.)"/>`,
        options: ["necesitamos <trans en=\"(we need)\" ar=\"(نحتاج)\" uk=\"(нам потрібно)\" fr=\"(nous avons besoin)\"/>", "debemos <trans en=\"(we must)\" ar=\"(يجب علينا)\" uk=\"(ми повинні)\" fr=\"(nous devons)\"/>", "tenemos que <trans en=\"(we have to)\" ar=\"(علينا أن)\" uk=\"(ми повинні)\" fr=\"(nous devons)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `Vosotros ___ hacer los deberes. <trans en="(You ___ do your homework.)" ar="(أنت ___ تقوم بواجبك المنزلي.)" uk="(Ви ___ виконуєте домашнє завдання.)" fr="(Vous ___ faites vos devoirs.)"/>`,
        options: ["tenéis que <trans en=\"(you have to)\" ar=\"(عليك بذلك)\" uk=\"(ти повинен)\" fr=\"(tu dois)\"/>", "tenéis <trans en=\"(you have)\" ar=\"(لديك)\" uk=\"(маєш)\" fr=\"(tu as)\"/>", "debéis de <trans en=\"(you must)\" ar=\"(يجب عليك)\" uk=\"(ти повинен)\" fr=\"(tu dois)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Para vivir, el ser humano ___ beber agua. (Extra) <trans en="(To live, human beings ___ drink water. (Bonus))" ar="(لكي يعيش أيها الإنسان ___ يشرب الماء. (مكافأة))" uk="(Щоб жити, люди ___ п’ють воду. (Бонус))" fr="(Pour vivre, les êtres humains ___ boivent de l'eau. (Prime))"/>`,
        options: ["necesita <trans en=\"(need)\" ar=\"(الحاجة)\" uk=\"(потреба)\" fr=\"(besoin)\"/>", "quiere <trans en=\"(wants)\" ar=\"(يريد)\" uk=\"(хоче)\" fr=\"(veut)\"/>", "odia <trans en=\"(hate)\" ar=\"(الكراهية)\" uk=\"(ненавиджу)\" fr=\"(déteste)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-gram-tener-estados",
    topic: "Estados Físicos",
    title: "Supervivencia: Tengo / No tengo",
    level: "A2",
    category: "Gramática",
    description: "Usa el verbo TENER para hablar de lo que posees y de tus sensaciones corporales.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1674675646613-819adc35b9ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    emoji: "🌡️",
    color: "#FFF4E5",
    vocabulary: [
        {
          word: 'Tengo hambre',
          translations: {
            en: 'I am hungry',
            ar: 'أنا جائع',
            uk: 'Я голодний',
            fr: 'J\'ai faim'
          },
          emoji: '🤤',
          color: '#FFF4E5'
        },
        {
          word: 'No tengo hambre',
          translations: {
            en: 'I am not hungry',
            ar: 'لست جائعاً',
            uk: 'Я не голодний',
            fr: 'Je n\'ai pas faim'
          },
          emoji: '🤢',
          color: '#EDF2F7'
        },
        {
          word: 'Tengo sed',
          translations: {
            en: 'I am thirsty',
            ar: 'أنا عطشان',
            uk: 'Я хочу пити',
            fr: 'J\'ai soif'
          },
          emoji: '🥛',
          color: '#E3EEF9'
        },
        {
          word: 'No tengo sed',
          translations: {
            en: 'I am not thirsty',
            ar: 'لست عطشاناً',
            uk: 'Я не хочу пити',
            fr: 'Je n\'ai pas soif'
          },
          emoji: '🥛',
          color: '#E3EEF9'
        },
        {
          word: 'Tengo frío',
          translations: {
            en: 'I am cold',
            ar: 'أشعر بالبرد',
            uk: 'Мені холодно',
            fr: 'J\'ai froid'
          },
          emoji: '🥶',
          color: '#E3EEF9'
        },
        {
          word: 'No tengo frío',
          translations: {
            en: 'I am not cold',
            ar: 'لا أشعر بالبرد',
            uk: 'Мені не холодно',
            fr: 'Je n\'ai pas froid'
          },
          emoji: '☀️',
          color: '#FFF4E5'
        },
        {
          word: 'Tengo calor',
          translations: {
            en: 'I am hot',
            ar: 'أشعر بالحر',
            uk: 'Мені жарко',
            fr: 'J\'ai chaud'
          },
          emoji: '🥵',
          color: '#E2F3E7'
        },
        {
          word: 'No tengo calor',
          translations: {
            en: 'I am not hot',
            ar: 'لا أشعر بالحر',
            uk: 'Мені не жарко',
            fr: 'Je n\'ai pas chaud'
          },
          emoji: '❄️',
          color: '#EBF8FF'
        },
        {
          word: 'Tengo sueño',
          translations: {
            en: 'I am sleepy',
            ar: 'أشعر بالنعاس',
            uk: 'Я хочу спати',
            fr: 'J\'ll y a sommeil'
          },
          emoji: '🥱',
          color: '#FEFCBF'
        },
        {
          word: 'No tengo sueño',
          translations: {
            en: 'I am not sleepy',
            ar: 'لا أشعر بالنعاس',
            uk: 'Я не хочу спати',
            fr: 'Je n\'ai pas sommeil'
          },
          emoji: '😳',
          color: '#EDF2F7'
        },
        {
          word: 'Tengo prisa',
          translations: {
            en: 'I am in a hurry',
            ar: 'أنا مستعجل',
            uk: 'Я поспішаю',
            fr: 'Je suis pressé'
          },
          emoji: '⏰',
          color: '#EBF8FF'
        },
        {
          word: 'No tengo prisa',
          translations: {
            en: 'I am not in a hurry',
            ar: 'لست مستعجلاً',
            uk: 'Я не поспішаю',
            fr: 'Je ne suis pas pressé'
          },
          emoji: '🧘',
          color: '#E2F3E7'
        },
        {
          word: 'Tengo miedo',
          translations: {
            en: 'I am afraid',
            ar: 'أنا خائف',
            uk: 'Я боюсь',
            fr: 'J\'ai peur'
          },
          emoji: '😨',
          color: '#E3EEF9'
        },
        {
          word: 'No tengo miedo',
          translations: {
            en: 'I am not afraid',
            ar: 'لست خائفاً',
            uk: 'Я не боюсь',
            fr: 'Je n\'ai pas peur'
          },
          emoji: '🛡️',
          color: '#E2F3E7'
        },
        {
          word: 'Tengo razón',
          translations: {
            en: 'I am right',
            ar: 'أنا على حق',
            uk: 'Я правий',
            fr: 'J\'ai raison'
          },
          emoji: '🧠',
          color: '#FEFCBF'
        },
        {
          word: 'No tengo razón',
          translations: {
            en: 'I am wrong',
            ar: 'لست على حق',
            uk: 'Я не правий',
            fr: 'Je n\'ai pas raison'
          },
          emoji: '🤷',
          color: '#EDF2F7'
        },
        {
          word: 'Tengo cuidado',
          translations: {
            en: 'I am careful',
            ar: 'أنا حذر',
            uk: 'Я обережний',
            fr: 'Je fais attention'
          },
          emoji: '⚠️',
          color: '#FEFCBF'
        },
        {
          word: 'No tengo cuidado',
          translations: {
            en: 'I am careless',
            ar: 'لست حذراً',
            uk: 'Я необережний',
            fr: 'Je ne fais pas attention'
          },
          emoji: '💨',
          color: '#EDF2F7'
        },
        {
          word: 'Tengo suerte',
          translations: {
            en: 'I am lucky',
            ar: 'أنا محظوظ',
            uk: 'Мені щастить',
            fr: 'J\'ai de la chance'
          },
          emoji: '🍀',
          color: '#E2F3E7'
        },
        {
          word: 'No tengo suerte',
          translations: {
            en: 'I am unlucky',
            ar: 'لست محظوظاً',
            uk: 'Мені не щастить',
            fr: 'Je n\'ai pas de la chance'
          },
          emoji: '🍂',
          color: '#EDF2F7'
        },
        {
          word: 'Tengo celos',
          translations: {
            en: 'I am jealous',
            ar: 'أنا أغار',
            uk: 'Я ревную',
            fr: 'Je suis jaloux'
          },
          emoji: '😒',
          color: '#FCE8E8'
        },
        {
          word: 'No tengo celos',
          translations: {
            en: 'I am not jealous',
            ar: 'لا أغار',
            uk: 'Я не ревную',
            fr: 'Je ne suis pas jaloux'
          },
          emoji: '😊',
          color: '#E2F3E7'
        },
        {
          word: 'Tengo dolor de cabeza',
          translations: {
            en: 'I have a headache',
            ar: 'أشعر بصداع',
            uk: 'У мене болить голова',
            fr: 'J\'ai mal à la tête'
          },
          emoji: '🤕',
          color: '#FFF4E5'
        },
        {
          word: 'No tengo dolor',
          translations: {
            en: 'I feel no pain',
            ar: 'لا أشعر بألم',
            uk: 'Я не відчуваю болю',
            fr: 'Je n\'ai pas mal'
          },
          emoji: '😊',
          color: '#E2F3E7'
        },
        {
          word: 'Tengo ganas de viajar',
          translations: {
            en: 'I feel like traveling',
            ar: 'أرغب في السفر',
            uk: 'Я хочу подорожувати',
            fr: 'J\'ai envie de voyager'
          },
          emoji: '✈️',
          color: '#E3EEF9'
        },
        {
          word: 'No tengo ganas',
          translations: {
            en: 'I don\'t feel like it',
            ar: 'ليس لدي رغبة',
            uk: 'Я не маю бажання',
            fr: 'Je n\'ai pas envie'
          },
          emoji: '🥱',
          color: '#EDF2F7'
        },
        {
          word: 'Tengo la culpa',
          translations: {
            en: 'It is my fault',
            ar: 'أنا المذنب',
            uk: 'Це моя провина',
            fr: 'C\'est de ma faute'
          },
          emoji: '🙇',
          color: '#FCE8E8'
        },
        {
          word: 'No tengo la culpa',
          translations: {
            en: 'It is not my fault',
            ar: 'ليست غلطتي',
            uk: 'Це не моя провина',
            fr: 'Ce n\'est pas de ma faute'
          },
          emoji: '🤷',
          color: '#EDF2F7'
        },
        {
          word: 'Tengo éxito',
          translations: {
            en: 'I am successful',
            ar: 'أنا ناجح',
            uk: 'Я успішний',
            fr: 'J\'ai du succès'
          },
          emoji: '🏆',
          color: '#FEFCBF'
        },
        {
          word: 'No tengo éxito',
          translations: {
            en: 'I am not successful',
            ar: 'لست ناجحاً',
            uk: 'Я не успішний',
            fr: 'Je n\'ai pas de succès'
          }
        }
      ],
    content: `
## Posesión y Estados Físicos

Usamos **Tengo** para decir las cosas que son nuestras, pero *también* para cómo nos sentimos físicamente.

### Posesión
*   **Tengo** dinero. <trans en="(I have money)" ar="(عندي مال)" uk="(У мене є гроші)" fr="(J'ai de l'argent)"/>
*   **No tengo** teléfono. <trans en="(I don't have a phone)" ar="(ليس عندي هاتف)" uk="(У мене немає телефону)" fr="(Je n'ai pas de téléphone)"/>

### Sensaciones
*   **Tengo hambre** (quiero comer).
*   **Tengo sed** (quiero beber).
*   **Tengo frío** (necesito una chaqueta).
    `,
    exercises: [
      {
        id: "ex1",
        question: `Si quieres comer porque tu estómago está vacío, dices: <trans en="(If you want to eat because your stomach is empty, you say:)" ar="(إذا أردت أن تأكل لأن معدتك فارغة فقل:)" uk="(Якщо ви хочете їсти, тому що ваш шлунок порожній, ви говорите:)" fr="(Si tu veux manger parce que ton estomac est vide, tu dis :)"/>`,
        options: ["Tengo frío <trans en=\"(I'm cold)\" ar=\"(أنا بارد)\" uk=\"(Мені холодно)\" fr=\"(J'ai froid)\"/>", "Tengo hambre <trans en=\"(I'm hungry)\" ar=\"(أنا جائع)\" uk=\"(Я голодний)\" fr=\"(J'ai faim)\"/>", "Tengo dinero <trans en=\"(I have money)\" ar=\"(لدي المال)\" uk=\"(У мене є гроші)\" fr=\"(J'ai de l'argent)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `Para decir 'I don't have money', en español es: <trans en="(To say 'I don't have money', in Spanish it is:)" ar="(القول "ليس لدي مال" هو بالإسبانية:)" uk="(Сказати «у мене немає грошей» іспанською:)" fr="(Pour dire 'Je n'ai pas d'argent', en espagnol c'est :)"/>`,
        options: ["No tengo dinero <trans en=\"(I don't have money)\" ar=\"(ليس لدي المال)\" uk=\"(У мене немає грошей)\" fr=\"(Je n'ai pas d'argent)\"/>", "Necesito dinero <trans en=\"(I need money)\" ar=\"(أنا بحاجة إلى المال)\" uk=\"(Мені потрібні гроші)\" fr=\"(J'ai besoin d'argent)\"/>", "Dónde está el dinero <trans en=\"(Where is the money)\" ar=\"(أين المال)\" uk=\"(Де гроші)\" fr=\"(Où est l'argent)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Si hace 40 grados, yo ___. <trans en="(If it's 40 degrees, I ___.)" ar="(إذا كانت درجة الحرارة 40 درجة، فأنا ___.)" uk="(Якщо 40 градусів, я ___.)" fr="(S'il fait 40 degrés, je ___.)"/>`,
        options: ["tengo calor <trans en=\"(I'm hot)\" ar=\"(أنا ساخن)\" uk=\"(Мені жарко)\" fr=\"(j'ai chaud)\"/>", "tengo frío <trans en=\"(I'm cold)\" ar=\"(أنا بارد)\" uk=\"(Мені холодно)\" fr=\"(j'ai froid)\"/>", "tengo miedo <trans en=\"(I'm afraid)\" ar=\"(أخشى)\" uk=\"(Я боюся)\" fr=\"(j'ai peur)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `Si hace -5 grados, nosotros ___. <trans en="(If it's -5 degrees, we ___.)" ar="(إذا كانت -5 درجات، فإننا ___.)" uk="(Якщо -5 градусів, ми ___.)" fr="(S'il fait -5 degrés, nous ___.)"/>`,
        options: ["tenemos frío <trans en=\"(we are cold)\" ar=\"(نحن باردون)\" uk=\"(нам холодно)\" fr=\"(nous avons froid)\"/>", "tenemos calor <trans en=\"(we are hot)\" ar=\"(نحن ساخنون)\" uk=\"(нам жарко)\" fr=\"(nous sommes chauds)\"/>", "tenemos sueño <trans en=\"(we are sleepy)\" ar=\"(نحن نعسان)\" uk=\"(ми сонні)\" fr=\"(nous avons sommeil)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `No he comido nada hoy, ___. <trans en="(I haven't eaten anything today, ___.)" ar="(لم آكل شيئًا اليوم، ___.)" uk="(Я сьогодні нічого не їв, ___.)" fr="(Je n'ai rien mangé aujourd'hui, ___.)"/>`,
        options: ["tengo hambre <trans en=\"(I'm hungry)\" ar=\"(أنا جائع)\" uk=\"(Я голодний)\" fr=\"(j'ai faim)\"/>", "tengo sed <trans en=\"(I'm thirsty)\" ar=\"(أنا عطشان)\" uk=\"(Я спраглий)\" fr=\"(j'ai soif)\"/>", "tengo frío <trans en=\"(I'm cold)\" ar=\"(أنا بارد)\" uk=\"(Мені холодно)\" fr=\"(j'ai froid)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `He caminado por el desierto, ___. <trans en="(I have walked through the desert, ___.)" ar="(لقد مشيت عبر الصحراء، ___.)" uk="(Я пройшов через пустелю, ___.)" fr="(J'ai traversé le désert, ___.)"/>`,
        options: ["tengo sed <trans en=\"(I'm thirsty)\" ar=\"(أنا عطشان)\" uk=\"(Я спраглий)\" fr=\"(j'ai soif)\"/>", "tengo hambre <trans en=\"(I'm hungry)\" ar=\"(أنا جائع)\" uk=\"(Я голодний)\" fr=\"(j'ai faim)\"/>", "tengo sueño <trans en=\"(I'm sleepy)\" ar=\"(أنا نعسان)\" uk=\"(Я сонний)\" fr=\"(j'ai sommeil)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Son las 3 de la madrugada, ___. <trans en="(It's 3 in the morning, ___.)" ar="(الساعة الثالثة صباحًا، ___.)" uk="(Зараз 3 ранку, ___.)" fr="(Il est 3 heures du matin, ___.)"/>`,
        options: ["tengo sueño <trans en=\"(I'm sleepy)\" ar=\"(أنا نعسان)\" uk=\"(Я сонний)\" fr=\"(j'ai sommeil)\"/>", "tengo calor <trans en=\"(I'm hot)\" ar=\"(أنا ساخن)\" uk=\"(Мені жарко)\" fr=\"(j'ai chaud)\"/>", "tengo hambre <trans en=\"(I'm hungry)\" ar=\"(أنا جائع)\" uk=\"(Я голодний)\" fr=\"(j'ai faim)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Veo un león en la calle, ___. <trans en="(I see a lion on the street, ___.)" ar="(أرى أسدًا في الشارع، ___.)" uk="(Я бачу лева на вулиці, ___.)" fr="(Je vois un lion dans la rue, ___.)"/>`,
        options: ["tengo miedo <trans en=\"(I'm afraid)\" ar=\"(أخشى)\" uk=\"(Я боюся)\" fr=\"(j'ai peur)\"/>", "tengo sed <trans en=\"(I'm thirsty)\" ar=\"(أنا عطشان)\" uk=\"(Я спраглий)\" fr=\"(j'ai soif)\"/>", "tengo frío <trans en=\"(I'm cold)\" ar=\"(أنا بارد)\" uk=\"(Мені холодно)\" fr=\"(j'ai froid)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Necesito ir al baño, ___. <trans en="(I need to go to the bathroom, ___.)" ar="(أريد أن أذهب إلى الحمام، ___.)" uk="(Мені потрібно в туалет, ___.)" fr="(Je dois aller aux toilettes, ___.)"/>`,
        options: ["tengo prisa / urgencia <trans en=\"(I'm in a hurry / urgency)\" ar=\"(أنا مستعجل/عاجل)\" uk=\"(Я поспішаю / терміново)\" fr=\"(je suis pressé / urgence)\"/>", "tengo frío <trans en=\"(I'm cold)\" ar=\"(أنا بارد)\" uk=\"(Мені холодно)\" fr=\"(j'ai froid)\"/>", "tengo hambre <trans en=\"(I'm hungry)\" ar=\"(أنا جائع)\" uk=\"(Я голодний)\" fr=\"(j'ai faim)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Llego tarde al trabajo, ___. <trans en="(I'm late for work, ___.)" ar="(لقد تأخرت عن العمل، ___.)" uk="(Я запізнююсь на роботу, ___.)" fr="(Je suis en retard au travail, ___.)"/>`,
        options: ["tengo prisa <trans en=\"(I'm in a hurry)\" ar=\"(أنا في عجلة من أمري)\" uk=\"(Я поспішаю)\" fr=\"(je suis pressé)\"/>", "tengo miedo <trans en=\"(I'm afraid)\" ar=\"(أخشى)\" uk=\"(Я боюся)\" fr=\"(j'ai peur)\"/>", "tengo sueño <trans en=\"(I'm sleepy)\" ar=\"(أنا نعسان)\" uk=\"(Я сонний)\" fr=\"(j'ai sommeil)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Ella ___ razón, 2 + 2 son 4. <trans en="(She ___ reason, 2 + 2 is 4.)" ar="(هي ___ السبب، 2 + 2 يساوي 4.)" uk="(Вона ___ причина, 2 + 2 це 4.)" fr="(Elle ___ raisonne, 2 + 2 font 4.)"/>`,
        options: ["tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>", "es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `¿___ hambre vosotros? <trans en="(Are you ___ hungry?)" ar="(هل أنت ___ جائع؟)" uk="(Ти ___ голодний?)" fr="(Avez-vous ___ faim ?)"/>`,
        options: ["Tenéis <trans en=\"(You have)\" ar=\"(لديك)\" uk=\"(Ви маєте)\" fr=\"(Vous avez)\"/>", "Estáis <trans en=\"(You are)\" ar=\"(أنت)\" uk=\"(Ви)\" fr=\"(Vous êtes)\"/>", "Sois <trans en=\"(You are)\" ar=\"(أنت)\" uk=\"(Ви)\" fr=\"(Vous êtes)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Si trabajas mucho sin parar, tú ___. <trans en="(If you work hard without stopping, you ___.)" ar="(إذا عملت بجد دون توقف، فإنك ___.)" uk="(Якщо ви наполегливо працюєте без зупинки, ви ___.)" fr="(Si vous travaillez dur sans vous arrêter, vous ___.)"/>`,
        options: ["tienes cansancio <trans en=\"(you are tired)\" ar=\"(أنت متعب)\" uk=\"(ти втомився)\" fr=\"(tu es fatigué)\"/>", "estás cansado <trans en=\"(you are tired)\" ar=\"(أنت متعب)\" uk=\"(ти втомився)\" fr=\"(tu es fatigué)\"/>", "Las dos son comunes <trans en=\"(Both are common)\" ar=\"(كلاهما شائع)\" uk=\"(Обидва поширені)\" fr=\"(Les deux sont communs)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex14",
        question: `Ellos no han bebido agua, ___. <trans en="(They have not drunk water, ___.)" ar="(لم يشربوا الماء، ___.)" uk="(Води не напились, ___.)" fr="(Ils n'ont pas bu d'eau, ___.)"/>`,
        options: ["tienen sed <trans en=\"(they are thirsty)\" ar=\"(إنهم عطشانون)\" uk=\"(вони відчувають спрагу)\" fr=\"(ils ont soif)\"/>", "tienen hambre <trans en=\"(they are hungry)\" ar=\"(إنهم جائعون)\" uk=\"(вони голодні)\" fr=\"(ils ont faim)\"/>", "tienen prisa <trans en=\"(they are in a hurry)\" ar=\"(إنهم في عجلة من أمرهم)\" uk=\"(вони поспішають)\" fr=\"(ils sont pressés)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `¡Abre la ventana! ___ mucho calor. <trans en="(Open the window! ___ very hot.)" ar="(افتح النافذة! ___ حار جدًا.)" uk="(Відчиніть вікно! ___ дуже жарко.)" fr="(Ouvrez la fenêtre ! ___ très chaud.)"/>`,
        options: ["Tengo <trans en=\"(I have)\" ar=\"(لقد)\" uk=\"(Маю)\" fr=\"(J'ai)\"/>", "Estoy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(Je suis)\"/>", "Soy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(Je suis)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `¡Cierra la puerta! ___ frío. <trans en="(Close the door! ___ cold.)" ar="(أغلق الباب! ___ بارد.)" uk="(Зачини двері! ___ холодно.)" fr="(Fermez la porte ! ___ froid.)"/>`,
        options: ["Tengo <trans en=\"(I have)\" ar=\"(لقد)\" uk=\"(Маю)\" fr=\"(J'ai)\"/>", "Hace <trans en=\"(Ago)\" ar=\"(منذ)\" uk=\"(Тому)\" fr=\"(Il y a)\"/>", "Ambas pueden ser correctas <trans en=\"(Both can be correct)\" ar=\"(كلاهما يمكن أن يكون صحيحا)\" uk=\"(І те, і інше може бути правильним)\" fr=\"(Les deux peuvent être corrects)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex17",
        question: `El bebé llora porque ___ sueño. <trans en="(The baby cries because ___ sleep.)" ar="(الطفل يبكي بسبب ___ النوم.)" uk="(Дитина плаче, бо ___ спить.)" fr="(Le bébé pleure parce que ___ dort.)"/>`,
        options: ["tiene <trans en=\"(has)\" ar=\"(لديه)\" uk=\"(має)\" fr=\"(a)\"/>", "está <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>", "es <trans en=\"(is)\" ar=\"(هو)\" uk=\"(є)\" fr=\"(est)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Yo nunca ___ miedo de los perros. <trans en="(I never ___ afraid of dogs.)" ar="(أنا لا ___ أخاف من الكلاب أبدًا.)" uk="(Я ніколи ___ не боюся собак.)" fr="(Je n'ai jamais ___ peur des chiens.)"/>`,
        options: ["tengo <trans en=\"(I have)\" ar=\"(لقد)\" uk=\"(Маю)\" fr=\"(j'ai)\"/>", "soy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>", "estoy <trans en=\"(I am)\" ar=\"(أنا)\" uk=\"(Я)\" fr=\"(je suis)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `Cuando no como en todo el día, ___. <trans en="(When I don't eat all day, ___.)" ar="(عندما لا آكل طوال اليوم، ___.)" uk="(Коли я не їм цілий день, ___.)" fr="(Quand je ne mange pas toute la journée, ___.)"/>`,
        options: ["tengo mucha hambre <trans en=\"(I'm very hungry)\" ar=\"(أنا جائع جدا)\" uk=\"(Я дуже голодний)\" fr=\"(j'ai très faim)\"/>", "soy hambre <trans en=\"(I am hungry)\" ar=\"(أنا جائع)\" uk=\"(Я голодний)\" fr=\"(j'ai faim)\"/>", "estoy hambre <trans en=\"(I'm hungry)\" ar=\"(أنا جائع)\" uk=\"(Я голодний)\" fr=\"(j'ai faim)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Si hace 40 grados, yo ___. (Extra) <trans en="(If it's 40 degrees, I ___. (Bonus))" ar="(إذا كانت درجة الحرارة 40 درجة، فأنا ___. (مكافأة))" uk="(Якщо 40 градусів, я ___. (Бонус))" fr="(S'il fait 40 degrés, je ___. (Prime))"/>`,
        options: ["tengo calor <trans en=\"(I'm hot)\" ar=\"(أنا ساخن)\" uk=\"(Мені жарко)\" fr=\"(j'ai chaud)\"/>", "tengo frío <trans en=\"(I'm cold)\" ar=\"(أنا بارد)\" uk=\"(Мені холодно)\" fr=\"(j'ai froid)\"/>", "tengo miedo <trans en=\"(I'm afraid)\" ar=\"(أخشى)\" uk=\"(Я боюся)\" fr=\"(j'ai peur)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-gram-me-duele",
    topic: "Expresiones",
    title: "Supervivencia: Me duele, me gusta...",
    level: "A2",
    category: "Gramática",
    description: "Aprende a expresar dolor, molestias, gustos y preocupaciones usando 'Me'.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661779204668-1453dc7435ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    emoji: "🤕",
    color: "#FCE8E8",
    vocabulary: [
        {
          word: 'Me duele la cabeza',
          translations: {
            en: 'My head hurts',
            ar: 'رأسي يؤلمني',
            uk: 'У мене болить голова',
            fr: 'J\'ai mal à la tête'
          },
          emoji: '🤕',
          color: '#FFF4E5'
        },
        {
          word: 'Me duele el estómago',
          translations: {
            en: 'My stomach hurts',
            ar: 'معدتي تؤلمني',
            uk: 'У мене болить живіт',
            fr: 'J\'ai mal a l\'estomac'
          },
          emoji: '🤢',
          color: '#FFF4E5'
        },
        {
          word: 'Me duele la espalda',
          translations: {
            en: 'My back hurts',
            ar: 'ظهري يؤلمني',
            uk: 'У мене болить спина',
            fr: 'J\'ai mal au dos'
          },
          emoji: '🧍',
          color: '#EDF2F7'
        },
        {
          word: 'Me duele la garganta',
          translations: {
            en: 'My throat hurts',
            ar: 'حلقي يؤلمني',
            uk: 'У мене болить горло',
            fr: 'J\'ai mal à la gorge'
          },
          emoji: '🗣️',
          color: '#FCE8E8'
        },
        {
          word: 'Me duele el brazo',
          translations: {
            en: 'My arm hurts',
            ar: 'ذراعي يؤلمني',
            uk: 'У мене болить рука',
            fr: 'J\'ai mal au bras'
          },
          emoji: '💪',
          color: '#E3EEF9'
        },
        {
          word: 'Me duele la pierna',
          translations: {
            en: 'My leg hurts',
            ar: 'ساقي تؤلمني',
            uk: 'У мене болить нога',
            fr: 'J\'ai mal à la jambe'
          },
          emoji: '🦵',
          color: '#E2F3E7'
        },
        {
          word: 'Me duele el pie',
          translations: {
            en: 'My foot hurts',
            ar: 'قدمي تؤلمني',
            uk: 'У мене болить стопа',
            fr: 'J\'ai mal au pied'
          },
          emoji: '🦶',
          color: '#EDF2F7'
        },
        {
          word: 'Me duele la mano',
          translations: {
            en: 'My hand hurts',
            ar: 'يدي تؤلمني',
            uk: 'У мене болить кисть руки',
            fr: 'J\'ai mal à la main'
          },
          emoji: '🖐️',
          color: '#EDF2F7'
        },
        {
          word: 'Me duele el cuello',
          translations: {
            en: 'My neck hurts',
            ar: 'رقبتي تؤلمني',
            uk: 'У мене болить шия',
            fr: 'J\'ai mal au cou'
          },
          emoji: '🦒',
          color: '#EDF2F7'
        },
        {
          word: 'Me duele el hombro',
          translations: {
            en: 'My shoulder hurts',
            ar: 'كتفي يؤلمني',
            uk: 'У мене болить плече',
            fr: 'J\'ai mal à l\'épaule'
          },
          emoji: '💪',
          color: '#EBF8FF'
        },
        {
          word: 'Me duelen los ojos',
          translations: {
            en: 'My eyes hurt',
            ar: 'عيناي تؤلمني',
            uk: 'У мене болять очі',
            fr: 'J\'ai mal aux yeux'
          },
          emoji: '👁️',
          color: '#E3EEF9'
        },
        {
          word: 'Me duelen los pies',
          translations: {
            en: 'My feet hurt',
            ar: 'قدماي تؤلمني',
            uk: 'У мене болять стопи',
            fr: 'J\'ai mal aux pieds'
          },
          emoji: '🦶',
          color: '#EDF2F7'
        },
        {
          word: 'Me duelen las manos',
          translations: {
            en: 'My hands hurt',
            ar: 'يداي تؤلمني',
            uk: 'У мене болять руки',
            fr: 'J\'ai mal aux mains'
          },
          emoji: '🖐️',
          color: '#EDF2F7'
        },
        {
          word: 'Me duelen los oídos',
          translations: {
            en: 'My ears hurt',
            ar: 'أذنيا تؤلمني',
            uk: 'У мене болять вуха',
            fr: 'J\'ai mal aux oreilles'
          },
          emoji: '👂',
          color: '#FEFCBF'
        },
        {
          word: 'Me duelen las rodillas',
          translations: {
            en: 'My knees hurt',
            ar: 'ركبتاي تؤلمني',
            uk: 'У мене болять коліна',
            fr: 'J\'ai mal aux genoux'
          },
          emoji: '🦵',
          color: '#E2F3E7'
        },
        {
          word: 'Me gusta la música',
          translations: {
            en: 'I like music',
            ar: 'تعجبني الموسيقى',
            uk: 'Мені подобається музика',
            fr: 'J\'aime la musique'
          },
          emoji: '🎵',
          color: '#F3E8FF'
        },
        {
          word: 'Me gusta el español',
          translations: {
            en: 'I like Spanish',
            ar: 'يعجبني الإسبانية',
            uk: 'Мені подобається іспанська',
            fr: 'J\'aime l\'espagnol'
          },
          emoji: '🇪🇸',
          color: '#FFF5F5'
        },
        {
          word: 'Me gusta viajar',
          translations: {
            en: 'I like to travel',
            ar: 'يعجبني السفر',
            uk: 'Мені подобається подорожувати',
            fr: 'J\'aime voyager'
          },
          emoji: '✈️',
          color: '#E3EEF9'
        },
        {
          word: 'Me gusta el café',
          translations: {
            en: 'I like coffee',
            ar: 'يعجبني القهوة',
            uk: 'Мені подобається кава',
            fr: 'J\'aime le café'
          },
          emoji: '☕',
          color: '#FFF4E5'
        },
        {
          word: 'Me gusta leer libros',
          translations: {
            en: 'I like to read books',
            ar: 'يعجبني قراءة الكتب',
            uk: 'Мені подобається читати книги',
            fr: 'J\'aime lire'
          },
          emoji: '📖',
          color: '#FEFCBF'
        },
        {
          word: 'Me gustan los animales',
          translations: {
            en: 'I like animals',
            ar: 'تعجبني الحيوانات',
            uk: 'Мені подобаються тварини',
            fr: 'J\'aime les animaux'
          },
          emoji: '🐶',
          color: '#FEFCBF'
        },
        {
          word: 'Me gustan los deportes',
          translations: {
            en: 'I like sports',
            ar: 'تعجبني الرياضة',
            uk: 'Мені подобається спорт',
            fr: 'J\'aime le sport'
          },
          emoji: '⚽',
          color: '#E2F3E7'
        },
        {
          word: 'Me gustan las películas',
          translations: {
            en: 'I like movies',
            ar: 'تعجبني الأفلام',
            uk: 'Мені подобаються фільми',
            fr: 'J\'aime les films'
          },
          emoji: '🎬',
          color: '#EDF2F7'
        },
        {
          word: 'Me gustan las uvas',
          translations: {
            en: 'I like grapes',
            ar: 'يعجبني العنب',
            uk: 'Мені подобається виноград',
            fr: 'J\'aime les raisins'
          },
          emoji: '🍇',
          color: '#F3E8FF'
        },
        {
          word: 'Me gustan los colores',
          translations: {
            en: 'I like colors',
            ar: 'تعجبني الألوان',
            uk: 'Мені подобаються кольори',
            fr: 'J\'aime les couleurs'
          },
          emoji: '🎨',
          color: '#FFF5F5'
        },
        {
          word: 'A ella le duele la cabeza',
          translations: {
            en: 'Her head hurts',
            ar: 'رأسها يؤلمها',
            uk: 'У неї болить голова',
            fr: 'Elle a mal à la tête'
          },
          emoji: '🤕',
          color: '#FFF4E5'
        },
        {
          word: 'A él le gusta bailar',
          translations: {
            en: 'He likes to dance',
            ar: 'هو يعجبه الرقص',
            uk: 'Йому подобається танцювати',
            fr: 'Il aime danser'
          },
          emoji: '💃',
          color: '#FFF5F5'
        },
        {
          word: 'Nos gusta el chocolate',
          translations: {
            en: 'We like chocolate',
            ar: 'يعجبنا الشوكولاتة',
            uk: 'Нам подобається шоколад',
            fr: 'Nous aimons le chocolat'
          },
          emoji: '🍫',
          color: '#FEFCBF'
        },
        {
          word: '¿Te duele el pecho?',
          translations: {
            en: 'Does your chest hurt?',
            ar: 'هل يؤلمك صدرك؟',
            uk: 'У тебе болить у грудях?',
            fr: 'As-tu mal à la poitrine ?'
          },
          emoji: '🧍',
          color: '#EDF2F7'
        },
        {
          word: '¿Te gustan los coches?',
          translations: {
            en: 'Do you like cars?',
            ar: 'هل تعجبك السيارات؟',
            uk: 'Тобі подобаються машини?',
            fr: 'Aimes-tu les voitures ?'
          },
          emoji: '🚗',
          color: '#FFF4E5'
        }
      ],
    content: `
## Expresando dolor y gustos: Doler, Gustar y Pronombres de Objeto Indirecto

Algunos verbos en español se construyen de forma diferente: no se conjuga el verbo según el sujeto tradicional, sino que el sujeto es lo que causa el dolor o el gusto, y la persona afectada se indica con un **Pronombre de Objeto Indirecto**.

### Los Pronombres de Objeto Indirecto
*   **me** (a mí)
*   **te** (a ti)
*   **le** (a él / ella / usted)
*   **nos** (a nosotros / nosotras)
*   **os** (a vosotros / vosotras)
*   **les** (a ellos / ellas / ustedes)

### 1. Verbo DOLER (O -> UE) <trans en="(To hurt / ache)" ar="(يؤلم)" uk="(Боліти)" fr="(Faire mal)"/>
*Nota: Solo se usa en tercera persona del singular (**duele**) para una cosa singular o tercera persona del plural (**duelen**) para cosas en plural.*
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Afectado</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Pronombre</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Verbo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A mí</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">me</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">duele (sing) / duelen (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Me duele la cabeza.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">My head hurts.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A ti</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">te</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">duele (sing) / duelen (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">¿Te duele el estómago?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Does your stomach hurt?</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A él / ella / usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">le</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">duele (sing) / duelen (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">A él le duele la pierna.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">His leg hurts.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A nosotros / nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">nos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">duele (sing) / duelen (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Nos duelen los pies.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Our feet hurt.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A vosotros / vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">os</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">duele (sing) / duelen (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">¿Os duele la garganta?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Does your throat hurt?</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A ellos / ellas / ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">les</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">duele (sing) / duelen (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Les duelen los ojos.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Their eyes hurt.</td></tr></tbody></table></div>
---

### 2. Verbo GUSTAR (Regular) <trans en="(To like / please)" ar="(يعجب)" uk="(Подобатися)" fr="(Aimer / Plaire)"/>
*Funciona igual que doler: se usa **gusta** para singulares o verbos en infinitivo, y **gustan** para plurales.*
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Afectado</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Pronombre</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Verbo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A mí</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">me</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">gusta (sing) / gustan (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Me gusta España.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I like Spain.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A ti</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">te</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">gusta (sing) / gustan (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">¿Te gustan las manzanas?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Do you like apples?</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A él / ella / usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">le</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">gusta (sing) / gustan (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">A ella le gusta cantar.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">She likes to sing.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A nosotros / nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">nos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">gusta (sing) / gustan (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Nos gusta el español.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We like Spanish.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A vosotros / vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">os</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">gusta (sing) / gustan (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">¿Os gustan los deportes?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Do you all like sports?</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">A ellos / ellas / ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">les</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">gusta (sing) / gustan (plur)</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Les gustan los libros.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They like books.</td></tr></tbody></table></div>
    `,
    exercises: [
      {
        id: "ex1",
        question: `Si tu cabeza no está bien y sientes dolor, dices: <trans en="(If your head is not well and you feel pain, you say:)" ar="(إذا كان رأسك ليس بخير وتشعر بالألم فقل:)" uk="(Якщо ваша голова погана і ви відчуваєте біль, ви говорите:)" fr="(Si votre tête ne va pas bien et que vous ressentez de la douleur, vous dites :)"/>`,
        options: ["Me gusta la cabeza <trans en=\"(I like the head)\" ar=\"(أنا أحب الرأس)\" uk=\"(Мені подобається голова)\" fr=\"(J'aime la tête)\"/>", "Tengo cabeza <trans en=\"(I have a head)\" ar=\"(لدي رأس)\" uk=\"(У мене є голова)\" fr=\"(J'ai une tête)\"/>", "Me duele la cabeza <trans en=\"(My head hurts)\" ar=\"(رأسي يؤلمني)\" uk=\"(Голова болить)\" fr=\"(J'ai mal à la tête)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: `Si algo es muy ruidoso y no te deja dormir: <trans en="(If something is very noisy and doesn't let you sleep:)" ar="(إذا كان هناك شيء صاخب جدًا ولا يسمح لك بالنوم:)" uk="(Якщо щось дуже шумне і не дає вам спати:)" fr="(Si quelque chose est très bruyant et ne vous permet pas de dormir :)"/>`,
        options: ["Me molesta el ruido <trans en=\"(The noise bothers me)\" ar=\"(الضجيج يزعجني)\" uk=\"(Мене турбує шум)\" fr=\"(Le bruit me dérange)\"/>", "Me aburre el ruido <trans en=\"(Noise bores me)\" ar=\"(الضجيج يضايقني)\" uk=\"(Мене шум набридає)\" fr=\"(Le bruit m'ennuie)\"/>", "Me gusta el ruido <trans en=\"(I like noise)\" ar=\"(أحب الضوضاء)\" uk=\"(Я люблю шум)\" fr=\"(J'aime le bruit)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Si como mucho caramelo, me duele ___. <trans en="(If I eat a lot of candy, it hurts ___.)" ar="(إذا أكلت الكثير من الحلوى، فهذا يؤلمني ___.)" uk="(Якщо я їм багато цукерок, це боляче ___.)" fr="(Si je mange beaucoup de bonbons, ça fait mal ___.)"/>`,
        options: ["la barriga / el estómago <trans en=\"(the belly / stomach)\" ar=\"(البطن / المعدة)\" uk=\"(живіт / живіт)\" fr=\"(le ventre/estomac)\"/>", "la rodilla <trans en=\"(the knee)\" ar=\"(الركبة)\" uk=\"(коліно)\" fr=\"(le genou)\"/>", "el pelo <trans en=\"(hair)\" ar=\"(شعر)\" uk=\"(волосся)\" fr=\"(cheveux)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `Si escucho música muy alta, me duelen ___. <trans en="(If I listen to music too loud, it hurts ___.)" ar="(إذا استمعت إلى الموسيقى بصوت عالٍ جدًا، فهذا يؤلمني ___.)" uk="(Якщо я слухаю музику занадто голосно, мені стає боляче ___.)" fr="(Si j'écoute de la musique trop fort, ça fait mal ___.)"/>`,
        options: ["los oídos <trans en=\"(ears)\" ar=\"(آذان)\" uk=\"(вуха)\" fr=\"(oreilles)\"/>", "los ojos <trans en=\"(the eyes)\" ar=\"(العيون)\" uk=\"(очі)\" fr=\"(les yeux)\"/>", "los pies <trans en=\"(feet)\" ar=\"(قدم)\" uk=\"(ноги)\" fr=\"(pieds)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `He corrido 20 km, me duelen ___. <trans en="(I have run 20 km, they hurt me ___.)" ar="(لقد ركضت 20 كم، لقد آذوني ___.)" uk="(Я пробіг 20 км, мені боляче ___.)" fr="(J'ai couru 20 km, ils m'ont fait mal ___.)"/>`,
        options: ["las piernas <trans en=\"(the legs)\" ar=\"(الساقين)\" uk=\"(ноги)\" fr=\"(les jambes)\"/>", "las manos <trans en=\"(hands)\" ar=\"(الأيدي)\" uk=\"(руки)\" fr=\"(les mains)\"/>", "las orejas <trans en=\"(the ears)\" ar=\"(الأذنين)\" uk=\"(вуха)\" fr=\"(les oreilles)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `Llevo gafas porque me duelen ___ al leer. <trans en="(I wear glasses because they hurt ___ when reading.)" ar="(أرتدي النظارات لأنها تؤلمني ___ عند القراءة.)" uk="(Я ношу окуляри, тому що вони болять ___ під час читання.)" fr="(Je porte des lunettes parce qu'elles font mal ___ en lisant.)"/>`,
        options: ["los ojos <trans en=\"(the eyes)\" ar=\"(العيون)\" uk=\"(очі)\" fr=\"(les yeux)\"/>", "los dientes <trans en=\"(teeth)\" ar=\"(أسنان)\" uk=\"(зуби)\" fr=\"(les dents)\"/>", "los brazos <trans en=\"(the arms)\" ar=\"(الأسلحة)\" uk=\"(руки)\" fr=\"(les bras)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `¿A ti ___ la garganta? <trans en="(Do you ___ your throat?)" ar="(هل ___ حلقك؟)" uk="(Ви ___ своє горло?)" fr="(Est-ce que tu ___ ta gorge ?)"/>`,
        options: ["te duele <trans en=\"(it hurts you)\" ar=\"(يؤذيك)\" uk=\"(тобі боляче)\" fr=\"(ça te fait mal)\"/>", "me duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "le duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `A Juan ___ la cabeza. <trans en="(To Juan ___ the head.)" ar="(إلى خوان ___ الرأس.)" uk="(Хуану ___ голову.)" fr="(À Juan ___ le chef.)"/>`,
        options: ["le duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "me duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "te duele <trans en=\"(it hurts you)\" ar=\"(يؤذيك)\" uk=\"(тобі боляче)\" fr=\"(ça te fait mal)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `A nosotros ___ los pies. <trans en="(To us ___ the feet.)" ar="(لنا ___ القدمين.)" uk="(Нам ___ ноги.)" fr="(A nous ___ les pieds.)"/>`,
        options: ["nos duelen <trans en=\"(they hurt us)\" ar=\"(لقد آذونا)\" uk=\"(вони завдають нам шкоди)\" fr=\"(ils nous ont fait du mal)\"/>", "nos duele <trans en=\"(it hurts us)\" ar=\"(يؤذينا)\" uk=\"(нам боляче)\" fr=\"(ça nous fait mal)\"/>", "me duelen <trans en=\"(they hurt me)\" ar=\"(لقد جرحوني)\" uk=\"(вони зробили мені боляче)\" fr=\"(ils m'ont blessé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `A ellos ___ la espalda. <trans en="(To them ___ the back.)" ar="(لهم ___ الظهر.)" uk="(До них ___ спиною.)" fr="(À eux ___ le dos.)"/>`,
        options: ["les duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "le duelen <trans en=\"(they hurt)\" ar=\"(يؤلمون)\" uk=\"(вони болять)\" fr=\"(ils ont mal)\"/>", "les duelen <trans en=\"(they hurt)\" ar=\"(يؤلمون)\" uk=\"(вони болять)\" fr=\"(ils ont mal)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `A mí ___ el estómago. <trans en="(I ___ my stomach.)" ar="(أنا ___ معدتي.)" uk="(Я ___ живіт.)" fr="(Je ___ mon ventre.)"/>`,
        options: ["me duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "te duele <trans en=\"(it hurts you)\" ar=\"(يؤذيك)\" uk=\"(тобі боляче)\" fr=\"(ça te fait mal)\"/>", "me duelen <trans en=\"(they hurt me)\" ar=\"(لقد جرحوني)\" uk=\"(вони зробили мені боляче)\" fr=\"(ils m'ont blessé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `¿Qué te pasa? - ___ la muela. <trans en="(What's wrong with you? - ___ the tooth.)" ar="(ما بك؟ - ___ السن.)" uk="(Що з тобою? - ___ зуб.)" fr="(Qu'est-ce qui ne va pas chez toi ? - ___ la dent.)"/>`,
        options: ["Me duele <trans en=\"(It hurts me)\" ar=\"(يؤذيني)\" uk=\"(Мені боляче)\" fr=\"(Ça me fait mal)\"/>", "Me duelen <trans en=\"(They hurt me)\" ar=\"(لقد جرحوني)\" uk=\"(Вони зробили мені боляче)\" fr=\"(Ils m'ont blessé)\"/>", "Te duele <trans en=\"(It hurts you)\" ar=\"(يؤذيك)\" uk=\"(Вам боляче)\" fr=\"(Ça te fait mal)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Si algo está en plural usamos: <trans en="(If something is plural we use:)" ar="(إذا كان الشيء بصيغة الجمع نستخدم:)" uk="(Якщо щось у множині, ми використовуємо:)" fr="(Si quelque chose est au pluriel, nous utilisons :)"/>`,
        options: ["duelen <trans en=\"(hurt)\" ar=\"(يجرح)\" uk=\"(боляче)\" fr=\"(blessé)\"/>", "duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "doler <trans en=\"(hurt)\" ar=\"(يجرح)\" uk=\"(боляче)\" fr=\"(blessé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `A ella ___ los brazos hoy. <trans en="(To her ___ arms today.)" ar="(لها ___ ذراعيها اليوم.)" uk="(До її ___ рук сьогодні.)" fr="(Dans ses ___ bras aujourd'hui.)"/>`,
        options: ["le duelen <trans en=\"(they hurt)\" ar=\"(يؤلمون)\" uk=\"(вони болять)\" fr=\"(ils ont mal)\"/>", "le duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "les duelen <trans en=\"(they hurt)\" ar=\"(يؤلمون)\" uk=\"(вони болять)\" fr=\"(ils ont mal)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Si trabajas mucho frente al ordenador, te duele... <trans en="(If you work a lot in front of the computer, it hurts...)" ar="(إذا كنت تعمل كثيرًا أمام الكمبيوتر، فهذا مؤلم...)" uk="(Якщо ви багато працюєте за комп'ютером, це боляче...)" fr="(Si vous travaillez beaucoup devant l'ordinateur, ça fait mal...)"/>`,
        options: ["La espalda / los ojos <trans en=\"(The back / eyes)\" ar=\"(الظهر / العيون)\" uk=\"(Спина / очі)\" fr=\"(Le dos/les yeux)\"/>", "Los pies <trans en=\"(Feet)\" ar=\"(قدم)\" uk=\"(Ноги)\" fr=\"(Pieds)\"/>", "Las rodillas <trans en=\"(The knees)\" ar=\"(الركبتين)\" uk=\"(Коліна)\" fr=\"(Les genoux)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Doctor, ___ mucho el pecho. <trans en="(Doctor, ___ a lot of chest.)" ar="(دكتور، ___ صدر كبير.)" uk="(Лікарю, ___ багато грудей.)" fr="(Docteur, ___ beaucoup de poitrine.)"/>`,
        options: ["me duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "le duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "te duele <trans en=\"(it hurts you)\" ar=\"(يؤذيك)\" uk=\"(тобі боляче)\" fr=\"(ça te fait mal)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `A vosotros ___ las piernas de jugar al fútbol. <trans en="(You ___ legs from playing soccer.)" ar="(أنت ___ ساقيك من لعب كرة القدم.)" uk="(Ви ___ ноги від гри у футбол.)" fr="(Vous ___ jambes après avoir joué au football.)"/>`,
        options: ["os duelen <trans en=\"(they hurt you)\" ar=\"(يؤذونك)\" uk=\"(вони завдають вам шкоди)\" fr=\"(ils t'ont blessé)\"/>", "nos duelen <trans en=\"(they hurt us)\" ar=\"(لقد آذونا)\" uk=\"(вони завдають нам шкоди)\" fr=\"(ils nous ont fait du mal)\"/>", "les duelen <trans en=\"(they hurt)\" ar=\"(يؤلمون)\" uk=\"(вони болять)\" fr=\"(ils ont mal)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `¿A quién ___ la cabeza? <trans en="(Whose head ___?)" ar="(رأس من ___؟)" uk="(Чия голова ___?)" fr="(La tête de qui ___ ?)"/>`,
        options: ["le duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "me duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "les duelen <trans en=\"(they hurt)\" ar=\"(يؤلمون)\" uk=\"(вони болять)\" fr=\"(ils ont mal)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `Me he caído, me ___ todo el cuerpo. <trans en="(I fell, I ___ my whole body.)" ar="(لقد وقعت، لقد ___ جسدي كله.)" uk="(Я впав, я ___ всім тілом.)" fr="(Je suis tombé, je ___ tout mon corps.)"/>`,
        options: ["duele <trans en=\"(it hurts)\" ar=\"(يؤلم)\" uk=\"(боляче)\" fr=\"(ça fait mal)\"/>", "duelen <trans en=\"(hurt)\" ar=\"(يجرح)\" uk=\"(боляче)\" fr=\"(blessé)\"/>", "doler <trans en=\"(hurt)\" ar=\"(يجرح)\" uk=\"(боляче)\" fr=\"(blessé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Si como mucho caramelo, me duele ___. (Extra) <trans en="(If I eat a lot of candy, it hurts ___. (Bonus))" ar="(إذا أكلت الكثير من الحلوى، فهذا يؤلمني ___. (مكافأة))" uk="(Якщо я їм багато цукерок, це боляче ___. (Бонус))" fr="(Si je mange beaucoup de bonbons, ça fait mal ___. (Prime))"/>`,
        options: ["la barriga / el estómago <trans en=\"(the belly / stomach)\" ar=\"(البطن / المعدة)\" uk=\"(живіт / живіт)\" fr=\"(le ventre/estomac)\"/>", "la rodilla <trans en=\"(the knee)\" ar=\"(الركبة)\" uk=\"(коліно)\" fr=\"(le genou)\"/>", "el pelo <trans en=\"(hair)\" ar=\"(شعر)\" uk=\"(волосся)\" fr=\"(cheveux)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-comp-supermercado",
    topic: "Comprensión",
    title: "Lectura Fácil: En el supermercado",
    level: "A2",
    category: "Comprensión",
    description: "Lee sobre una visita al supermercado y practica el vocabulario de alimentos y compras.",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
    emoji: "🛒",
    color: "#E2F3E7",
    content: `
## LECTURA: La lista de la compra

> *"Hoy es sábado y Ana va al supermercado. Ana necesita muchas cosas para la semana. En su lista de la compra tiene: manzanas, leche, arroz y pan."*

> *"Primero, ella va a la sección de frutas. Después, compra la leche y el arroz. Al final, Ana paga en la caja con dinero en efectivo. El cajero dice: 'Gracias, ¡buen fin de semana!'."*

### Lee la lectura con atención y responde al ejercicio.
    `,
    exercises: [
      {
        id: "ex1",
        question: `¿Qué día va Ana al supermercado? <trans en="(What day does Ana go to the supermarket?)" ar="(في أي يوم تذهب آنا إلى السوبر ماركت؟)" uk="(У який день Ана йде в супермаркет?)" fr="(Quel jour Ana va-t-elle au supermarché ?)"/>`,
        options: ["El lunes <trans en=\"(Monday)\" ar=\"(الاثنين)\" uk=\"(Понеділок)\" fr=\"(Lundi)\"/>", "El sábado <trans en=\"(Saturday)\" ar=\"(السبت)\" uk=\"(Субота)\" fr=\"(Samedi)\"/>", "El domingo <trans en=\"(Sunday)\" ar=\"(الأحد)\" uk=\"(Неділя)\" fr=\"(Dimanche)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `¿Qué compra primero Ana? <trans en="(What does Ana buy first?)" ar="(ماذا تشتري آنا أولاً؟)" uk="(Що Аня купує в першу чергу?)" fr="(Qu'est-ce qu'Ana achète en premier ?)"/>`,
        options: ["Frutas (manzanas) <trans en=\"(Fruits (apples))\" ar=\"(فواكه (تفاح))\" uk=\"(Фрукти (яблука))\" fr=\"(Fruits (pommes))\"/>", "Leche <trans en=\"(Milk)\" ar=\"(حليب)\" uk=\"(Молоко)\" fr=\"(Lait)\"/>", "Carne <trans en=\"(Meat)\" ar=\"(لحم)\" uk=\"(М'ясо)\" fr=\"(Viande)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `¿Cómo paga Ana? <trans en="(How does Ana pay?)" ar="(كيف تدفع آنا؟)" uk="(Як Ана платить?)" fr="(Comment Ana paie-t-elle ?)"/>`,
        options: ["Con tarjeta <trans en=\"(With card)\" ar=\"(بالبطاقة)\" uk=\"(З карткою)\" fr=\"(Avec carte)\"/>", "Con el teléfono <trans en=\"(With the phone)\" ar=\"(مع الهاتف)\" uk=\"(З телефону)\" fr=\"(Avec le téléphone)\"/>", "Con dinero en efectivo <trans en=\"(With cash)\" ar=\"(بالنقود)\" uk=\"(Готівкою)\" fr=\"(En espèces)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex4",
        question: `¿Dónde compras la fruta y verdura? <trans en="(Where do you buy fruit and vegetables?)" ar="(أين تشتري الفواكه والخضروات؟)" uk="(Де ви купуєте фрукти та овочі?)" fr="(Où achetez-vous les fruits et légumes ?)"/>`,
        options: ["En la frutería / supermercado <trans en=\"(At the fruit shop/supermarket)\" ar=\"(في متجر الفاكهة/السوبر ماركت)\" uk=\"(У фруктовому магазині/супермаркеті)\" fr=\"(Au fruiterie/supermarché)\"/>", "En la farmacia <trans en=\"(At the pharmacy)\" ar=\"(في الصيدلية)\" uk=\"(В аптеці)\" fr=\"(A la pharmacie)\"/>", "En la zapatería <trans en=\"(In the shoe store)\" ar=\"(في محل الأحذية)\" uk=\"(У взуттєвому магазині)\" fr=\"(Dans le magasin de chaussures)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Para comprar carne voy a... <trans en="(To buy meat I am going to...)" ar="(لشراء اللحوم سأذهب ...)" uk="(Щоб купити м'ясо, збираюся...)" fr="(Pour acheter de la viande, je vais...)"/>`,
        options: ["La carnicería <trans en=\"(The butcher shop)\" ar=\"(محل الجزارة)\" uk=\"(М'ясний магазин)\" fr=\"(La boucherie)\"/>", "La panadería <trans en=\"(The bakery)\" ar=\"(المخبز)\" uk=\"(Пекарня)\" fr=\"(La boulangerie)\"/>", "La pescadería <trans en=\"(The fishmonger)\" ar=\"(بائع السمك)\" uk=\"(Рибний продавець)\" fr=\"(Le poissonnier)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `El lugar donde pagas en el supermercado es... <trans en="(The place where you pay at the supermarket is...)" ar="(المكان الذي تدفع فيه في السوبر ماركت هو...)" uk="(Місце, де ви платите в супермаркеті, це...)" fr="(L'endroit où vous payez au supermarché est...)"/>`,
        options: ["La caja <trans en=\"(The box)\" ar=\"(الصندوق)\" uk=\"(Коробка)\" fr=\"(La boîte)\"/>", "La puerta <trans en=\"(The door)\" ar=\"(الباب)\" uk=\"(Двері)\" fr=\"(La porte)\"/>", "El baño <trans en=\"(The bathroom)\" ar=\"(الحمام)\" uk=\"(Ванна кімната)\" fr=\"(La salle de bain)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `¿Qué usamos para llevar los productos en la tienda? <trans en="(What do we use to carry the products in the store?)" ar="(ماذا نستخدم لحمل المنتجات في المتجر؟)" uk="(Що ми використовуємо для транспортування продуктів у магазині?)" fr="(Qu'utilisons-nous pour transporter les produits dans le magasin ?)"/>`,
        options: ["Un carrito o cesta <trans en=\"(A cart or basket)\" ar=\"(عربة أو سلة)\" uk=\"(Візок або кошик)\" fr=\"(Un chariot ou un panier)\"/>", "Una mochila <trans en=\"(A backpack)\" ar=\"(حقيبة ظهر)\" uk=\"(Рюкзак)\" fr=\"(Un sac à dos)\"/>", "Una maleta <trans en=\"(A suitcase)\" ar=\"(حقيبة)\" uk=\"(Валіза)\" fr=\"(Une valise)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `¿Qué compras en la pescadería? <trans en="(What do you buy at the fishmonger?)" ar="(ماذا تشتري من بائع السمك؟)" uk="(Що ви купуєте в рибному магазині?)" fr="(Qu'est-ce qu'on achète chez le poissonnier ?)"/>`,
        options: ["Pescado <trans en=\"(Fish)\" ar=\"(سمك)\" uk=\"(Риба)\" fr=\"(Poisson)\"/>", "Pollo <trans en=\"(Chicken)\" ar=\"(دجاج)\" uk=\"(Курка)\" fr=\"(Poulet)\"/>", "Queso <trans en=\"(Cheese)\" ar=\"(جبن)\" uk=\"(Сир)\" fr=\"(Fromage)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `El pan se compra en... <trans en="(Bread is bought in...)" ar="(يُشترى الخبز في...)" uk="(Хліб купують у...)" fr="(Le pain s'achète à...)"/>`,
        options: ["La panadería <trans en=\"(The bakery)\" ar=\"(المخبز)\" uk=\"(Пекарня)\" fr=\"(La boulangerie)\"/>", "La ferretería <trans en=\"(The hardware store)\" ar=\"(محل الأجهزة)\" uk=\"(Будівельний магазин)\" fr=\"(La quincaillerie)\"/>", "La librería <trans en=\"(The bookstore)\" ar=\"(محل بيع الكتب)\" uk=\"(Книгарня)\" fr=\"(La librairie)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Si quieres comprar yogures o leche, buscas la sección de... <trans en="(If you want to buy yogurt or milk, look for the... section)" ar="(إذا أردت شراء الزبادي أو الحليب ابحث عن قسم...)" uk="(Якщо ви хочете купити йогурт або молоко, шукайте розділ...)" fr="(Si vous souhaitez acheter du yaourt ou du lait, cherchez la rubrique...)"/>`,
        options: ["Lácteos <trans en=\"(Dairy)\" ar=\"(الألبان)\" uk=\"(Молочні)\" fr=\"(Produits laitiers)\"/>", "Limpieza <trans en=\"(Cleaning)\" ar=\"(التنظيف)\" uk=\"(Прибирання)\" fr=\"(Nettoyage)\"/>", "Bebidas <trans en=\"(Drinks)\" ar=\"(المشروبات)\" uk=\"(Напої)\" fr=\"(Boissons)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `¿Qué frase usas para preguntar el precio? <trans en="(What phrase do you use to ask the price?)" ar="(ما هي العبارة التي تستخدمها للسؤال عن السعر؟)" uk="(Яку фразу ви використовуєте, щоб запитати ціну?)" fr="(Quelle phrase utilisez-vous pour demander le prix ?)"/>`,
        options: ["¿Cuánto cuesta? <trans en=\"(How much does it cost?)\" ar=\"(كم يكلف؟)\" uk=\"(Скільки це коштує?)\" fr=\"(Combien ça coûte?)\"/>", "¿Dónde está? <trans en=\"(Where is?)\" ar=\"(أين هو؟)\" uk=\"(Де?)\" fr=\"(Où est?)\"/>", "¿Cómo se llama? <trans en=\"(What's it called?)\" ar=\"(ماذا يسمى؟)\" uk=\"(Як це називається?)\" fr=\"(Comment ça s'appelle ?)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `La lista de cosas que necesitas comprar es... <trans en="(The list of things you need to buy is...)" ar="(قائمة الأشياء التي تحتاج إلى شرائها هي...)" uk="(Список речей, які вам потрібно купити, це...)" fr="(La liste des choses que vous devez acheter est...)"/>`,
        options: ["La lista de la compra <trans en=\"(The shopping list)\" ar=\"(قائمة التسوق)\" uk=\"(Список покупок)\" fr=\"(La liste de courses)\"/>", "El recibo <trans en=\"(The receipt)\" ar=\"(الإيصال)\" uk=\"(Квитанція)\" fr=\"(Le reçu)\"/>", "La factura <trans en=\"(The invoice)\" ar=\"(الفاتورة)\" uk=\"(Рахунок-фактура)\" fr=\"(La facture)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Cuando pagas, te dan un papel que se llama... <trans en="(When you pay, they give you a piece of paper called...)" ar="(عندما تدفع، يعطونك قطعة من الورق تسمى...)" uk="(Коли ви платите, вам дають папірець, який називається...)" fr="(Quand vous payez, ils vous donnent un morceau de papier appelé...)"/>`,
        options: ["Ticket / Recibo <trans en=\"(Ticket / Receipt)\" ar=\"(تذكرة/إيصال)\" uk=\"(Квиток / Квитанція)\" fr=\"(Billet / Reçu)\"/>", "Billete <trans en=\"(Ticket)\" ar=\"(تذكرة)\" uk=\"(Квиток)\" fr=\"(Billet)\"/>", "Libro <trans en=\"(Book)\" ar=\"(كتاب)\" uk=\"(Книга)\" fr=\"(Réserver)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿Qué artículo NO está en la sección de limpieza? <trans en="(What item is NOT in the cleaning section?)" ar="(ما هو العنصر غير الموجود في قسم التنظيف؟)" uk="(Якого пункту НЕ входить до розділу прибирання?)" fr="(Quel article ne se trouve PAS dans la section nettoyage ?)"/>`,
        options: ["Cebollas <trans en=\"(Onions)\" ar=\"(بصل)\" uk=\"(Цибуля)\" fr=\"(Oignons)\"/>", "Jabón <trans en=\"(Soap)\" ar=\"(صابون)\" uk=\"(Мило)\" fr=\"(Savon)\"/>", "Lejía <trans en=\"(Bleach)\" ar=\"(مبيض)\" uk=\"(Відбілювач)\" fr=\"(Eau de Javel)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `En la charcutería puedes comprar... <trans en="(At the delicatessen you can buy...)" ar="(في محل بيع الأطعمة المعلبة يمكنك شراء ...)" uk="(У магазині делікатесів можна купити...)" fr="(A l'épicerie fine vous pouvez acheter...)"/>`,
        options: ["Jamón y queso <trans en=\"(Ham and cheese)\" ar=\"(لحم الخنزير والجبن)\" uk=\"(Шинка і сир)\" fr=\"(Jambon et fromage)\"/>", "Pescado <trans en=\"(Fish)\" ar=\"(سمك)\" uk=\"(Риба)\" fr=\"(Poisson)\"/>", "Zapatos <trans en=\"(Shoes)\" ar=\"(أحذية)\" uk=\"(Взуття)\" fr=\"(Chaussures)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Para comprar medicina vas a... <trans en="(To buy medicine you go to...)" ar="(لشراء الدواء تذهب إليه...)" uk="(За ліками ви йдете в...)" fr="(Pour acheter des médicaments, tu vas à...)"/>`,
        options: ["La farmacia <trans en=\"(The pharmacy)\" ar=\"(الصيدلية)\" uk=\"(Аптека)\" fr=\"(La pharmacie)\"/>", "La panadería <trans en=\"(The bakery)\" ar=\"(المخبز)\" uk=\"(Пекарня)\" fr=\"(La boulangerie)\"/>", "La carnicería <trans en=\"(The butcher shop)\" ar=\"(محل الجزارة)\" uk=\"(М'ясний магазин)\" fr=\"(La boucherie)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `El agua y los zumos están en la sección de... <trans en="(Water and juices are in the...)" ar="(الماء والعصائر موجودة في...)" uk="(Вода та соки в...)" fr="(L'eau et les jus sont dans le...)"/>`,
        options: ["Bebidas <trans en=\"(Drinks)\" ar=\"(المشروبات)\" uk=\"(Напої)\" fr=\"(Boissons)\"/>", "Lácteos <trans en=\"(Dairy)\" ar=\"(الألبان)\" uk=\"(Молочні)\" fr=\"(Produits laitiers)\"/>", "Carnes <trans en=\"(Meats)\" ar=\"(اللحوم)\" uk=\"(М'ясо)\" fr=\"(Viandes)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Para pagar con tarjeta necesitas... <trans en="(To pay by card you need...)" ar="(للدفع عن طريق البطاقة تحتاج...)" uk="(Для оплати карткою потрібно...)" fr="(Pour payer par carte il vous faut...)"/>`,
        options: ["Una tarjeta de crédito/débito <trans en=\"(A credit/debit card)\" ar=\"(بطاقة الائتمان/الخصم)\" uk=\"(Кредитна/дебетова картка)\" fr=\"(Une carte de crédit/débit)\"/>", "Efectivo <trans en=\"(Cash)\" ar=\"(نقدا)\" uk=\"(Готівка)\" fr=\"(Espèces)\"/>", "Un cheque <trans en=\"(A check)\" ar=\"(شيك)\" uk=\"(Чек)\" fr=\"(Un chèque)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `¿Qué compras por docenas? <trans en="(What do you buy by the dozen?)" ar="(ماذا تشتري بالدرزن؟)" uk="(Що ви купуєте десятками?)" fr="(Qu'est-ce qu'on achète à la douzaine ?)"/>`,
        options: ["Huevos <trans en=\"(Eggs)\" ar=\"(البيض)\" uk=\"(Яйця)\" fr=\"(Oeufs)\"/>", "Leche <trans en=\"(Milk)\" ar=\"(حليب)\" uk=\"(Молоко)\" fr=\"(Lait)\"/>", "Carne <trans en=\"(Meat)\" ar=\"(لحم)\" uk=\"(М'ясо)\" fr=\"(Viande)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Si el producto pesa mucho, el supermercado lo vende por... <trans en="(If the product weighs a lot, the supermarket sells it for...)" ar="(إذا كان المنتج يزن كثيرًا، فإن السوبر ماركت يبيعه بـ...)" uk="(Якщо товар важить багато, супермаркет продає його за...)" fr="(Si le produit pèse beaucoup, le supermarché le vend pour...)"/>`,
        options: ["Kilos <trans en=\"(Kilos)\" ar=\"(كيلو)\" uk=\"(Кілограми)\" fr=\"(Kilos)\"/>", "Litros <trans en=\"(Liters)\" ar=\"(لتر)\" uk=\"(Літри)\" fr=\"(Litres)\"/>", "Metros <trans en=\"(Meters)\" ar=\"(متر)\" uk=\"(Метри)\" fr=\"(Mètres)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-comp-medico",
    topic: "Comprensión",
    title: "Lectura Fácil: En la farmacia",
    level: "A2",
    category: "Comprensión",
    description: "Una pequeña conversación en la farmacia para practicar cómo pedir medicamentos.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80",
    emoji: "🏥",
    color: "#FFF5F5",
    content: `
## LECTURA: Necesito pastillas

> *Carlos está en la farmacia porque está enfermo.*
> **Farmacéutico:** Hola, buenos días. ¿En qué puedo ayudarle?
> **Carlos:** Hola. Me duele la cabeza mucho y tengo fiebre. Necesito pastillas, por favor.
> **Farmacéutico:** Sí, claro. Tome estas pastillas cada ocho (8) horas con un poco de agua.
> **Carlos:** ¿Cuánto cuesta?
> **Farmacéutico:** Son cinco euros.
> **Carlos:** Aquí tiene. Muchas gracias.

### Lee la conversación con atención y responde al ejercicio.
    `,
    exercises: [
      {
        id: "ex1",
        question: `¿Qué le pasa a Carlos? <trans en="(What's wrong with Carlos?)" ar="(ما هو الخطأ في كارلوس؟)" uk="(Що не так з Карлосом?)" fr="(Qu'est-ce qui ne va pas avec Carlos ?)"/>`,
        options: ["Le duele la cabeza y tiene fiebre <trans en=\"(You have a headache and a fever)\" ar=\"(لديك صداع وحمى)\" uk=\"(У вас головний біль і висока температура)\" fr=\"(Vous avez mal à la tête et de la fièvre)\"/>", "Le duele el estómago <trans en=\"(Your stomach hurts)\" ar=\"(معدتك تؤلمك)\" uk=\"(Болить живіт)\" fr=\"(Tu as mal au ventre)\"/>", "Tiene hambre y necesita comer <trans en=\"(You are hungry and need to eat)\" ar=\"(أنت جائع وتحتاج إلى تناول الطعام)\" uk=\"(Ви голодні і вам потрібно поїсти)\" fr=\"(Vous avez faim et avez besoin de manger)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: `¿Cada cuántas horas tiene que tomar las pastillas? <trans en="(How often do you have to take the pills?)" ar="(كم مرة يجب عليك تناول الحبوب؟)" uk="(Як часто потрібно приймати таблетки?)" fr="(À quelle fréquence devez-vous prendre les pilules ?)"/>`,
        options: ["Cada 5 horas <trans en=\"(Every 5 hours)\" ar=\"(كل 5 ساعات)\" uk=\"(Кожні 5 годин)\" fr=\"(Toutes les 5 heures)\"/>", "Cada 8 horas <trans en=\"(Every 8 hours)\" ar=\"(كل 8 ساعات)\" uk=\"(Кожні 8 годин)\" fr=\"(Toutes les 8 heures)\"/>", "Cada 10 horas <trans en=\"(Every 10 hours)\" ar=\"(كل 10 ساعات)\" uk=\"(Кожні 10 годин)\" fr=\"(Toutes les 10 heures)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: `¿Cuánto dinero paga Carlos? <trans en="(How much money does Carlos pay?)" ar="(كم من المال يدفع كارلوس؟)" uk="(Скільки грошей платить Карлос?)" fr="(Combien d'argent Carlos paie-t-il ?)"/>`,
        options: ["Diez euros <trans en=\"(Ten euros)\" ar=\"(عشرة يورو)\" uk=\"(Десять євро)\" fr=\"(Dix euros)\"/>", "Ocho euros <trans en=\"(Eight euros)\" ar=\"(ثمانية يورو)\" uk=\"(Вісім євро)\" fr=\"(Huit euros)\"/>", "Cinco euros <trans en=\"(Five euros)\" ar=\"(خمسة يورو)\" uk=\"(П'ять євро)\" fr=\"(Cinq euros)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex4",
        question: `El lugar al que vas si estás enfermo es... <trans en="(The place you go if you're sick is...)" ar="(المكان الذي تذهب إليه إذا كنت مريضاً هو...)" uk="(Куди ви йдете, якщо захворіли, це...)" fr="(L'endroit où vous allez si vous êtes malade est...)"/>`,
        options: ["El médico / El hospital <trans en=\"(The doctor / The hospital)\" ar=\"(الطبيب / المستشفى)\" uk=\"(Лікар / Лікарня)\" fr=\"(Le médecin / L'hôpital)\"/>", "El supermercado <trans en=\"(The supermarket)\" ar=\"(السوبر ماركت)\" uk=\"(Супермаркет)\" fr=\"(Le supermarché)\"/>", "La escuela <trans en=\"(The school)\" ar=\"(المدرسة)\" uk=\"(Школа)\" fr=\"(L'école)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `La persona que te receta medicinas es... <trans en="(The person who prescribes medicines for you is...)" ar="(الشخص الذي يصف لك الأدوية هو...)" uk="(Людина, яка виписує вам ліки, це...)" fr="(La personne qui vous prescrit des médicaments est...)"/>`,
        options: ["El doctor / La doctora <trans en=\"(The doctor / The doctor)\" ar=\"(الطبيب / الطبيب)\" uk=\"(Лікар / Лікар)\" fr=\"(Le docteur / Le docteur)\"/>", "El profesor <trans en=\"(The teacher)\" ar=\"(المعلم)\" uk=\"(Учитель)\" fr=\"(Le professeur)\"/>", "El policía <trans en=\"(The policeman)\" ar=\"(الشرطي)\" uk=\"(Поліцейський)\" fr=\"(Le policier)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `Si tienes fiebre, el médico te toma la... <trans en="(If you have a fever, the doctor takes your...)" ar="(إذا كنت تعاني من الحمى، يقوم الطبيب بأخذ...)" uk="(Якщо у вас температура, лікар приймає...)" fr="(Si vous avez de la fièvre, le médecin prend votre...)"/>`,
        options: ["Temperatura <trans en=\"(Temperature)\" ar=\"(درجة الحرارة)\" uk=\"(Температура)\" fr=\"(Température)\"/>", "Altura <trans en=\"(Height)\" ar=\"(الارتفاع)\" uk=\"(Висота)\" fr=\"(Hauteur)\"/>", "Edad <trans en=\"(Age)\" ar=\"(العمر)\" uk=\"(Вік)\" fr=\"(Âge)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Si te duele la garganta y toses, tienes... <trans en="(If your throat hurts and you cough, you have...)" ar="(إذا كان حلقك يؤلمك وتسعل، فهذا يعني...)" uk="(Якщо у вас болить горло і ви кашляєте, у вас...)" fr="(Si vous avez mal à la gorge et que vous toussez, vous avez...)"/>`,
        options: ["Tos / Resfriado <trans en=\"(Cough / Cold)\" ar=\"(السعال/البرد)\" uk=\"(Кашель / Застуда)\" fr=\"(Toux / Rhume)\"/>", "Alergia al sol <trans en=\"(Sun allergy)\" ar=\"(حساسية الشمس)\" uk=\"(Сонячна алергія)\" fr=\"(Allergie au soleil)\"/>", "Hambre <trans en=\"(Hunger)\" ar=\"(الجوع)\" uk=\"(Голод)\" fr=\"(La faim)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `El papel que el médico te da para comprar medicina se llama... <trans en="(The paper that the doctor gives you to buy medicine is called...)" ar="(الورقة التي يعطيك إياها الطبيب لشراء الدواء تسمى...)" uk="(Папір, який дає лікар, щоб купити ліки, називається...)" fr="(Le papier que le médecin vous donne pour acheter des médicaments s'appelle...)"/>`,
        options: ["Receta <trans en=\"(Recipe)\" ar=\"(وصفة)\" uk=\"(Рецепт)\" fr=\"(Recette)\"/>", "Factura <trans en=\"(Invoice)\" ar=\"(الفاتورة)\" uk=\"(Рахунок-фактура)\" fr=\"(Facture)\"/>", "Carta <trans en=\"(Letter)\" ar=\"(رسالة)\" uk=\"(Лист)\" fr=\"(Lettre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Si te rompes un brazo, te ponen... <trans en="(If you break your arm, they put you...)" ar="(إذا كسرت ذراعك، فسيضعونك...)" uk="(Зламаєш руку, кладуть...)" fr="(Si tu te casses le bras, ils te mettent...)"/>`,
        options: ["Una escayola / yeso <trans en=\"(A plaster cast)\" ar=\"(قالب من الجبس)\" uk=\"(Гіпсова пов'язка)\" fr=\"(Un plâtre)\"/>", "Una tirita <trans en=\"(A band-aid)\" ar=\"(إسعافات أولية)\" uk=\"(Пластир)\" fr=\"(Un pansement)\"/>", "Una bufanda <trans en=\"(A scarf)\" ar=\"(وشاح)\" uk=\"(Шарф)\" fr=\"(Un foulard)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `¿Cómo te sientes si estás resfriado? <trans en="(How do you feel if you have a cold?)" ar="(ما هو شعورك إذا أصبت بالبرد؟)" uk="(Що ви відчуваєте, якщо застудилися?)" fr="(Comment vous sentez-vous si vous avez un rhume ?)"/>`,
        options: ["Cansado y con dolor de cabeza <trans en=\"(Tired and with a headache)\" ar=\"(متعب ومعه صداع)\" uk=\"(Втомлений і з головним болем)\" fr=\"(Fatigué et mal à la tête)\"/>", "Con mucha energía <trans en=\"(With a lot of energy)\" ar=\"(مع الكثير من الطاقة)\" uk=\"(З великою кількістю енергії)\" fr=\"(Avec beaucoup d'énergie)\"/>", "Muy feliz <trans en=\"(Very happy)\" ar=\"(سعيد جدا)\" uk=\"(Дуже щаслива)\" fr=\"(Très heureux)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Para curar un corte pequeño te pones... <trans en="(To heal a small cut you put...)" ar="(لشفاء قطع صغير وضعته...)" uk="(Щоб залікувати невеликий поріз, ви наносите...)" fr="(Pour soigner une petite coupure vous mettez...)"/>`,
        options: ["Una tirita <trans en=\"(A band-aid)\" ar=\"(إسعافات أولية)\" uk=\"(Пластир)\" fr=\"(Un pansement)\"/>", "Una escayola <trans en=\"(A plaster)\" ar=\"(جص)\" uk=\"(Пластир)\" fr=\"(Un plâtre)\"/>", "Una inyección <trans en=\"(An injection)\" ar=\"(حقنة)\" uk=\"(Укол)\" fr=\"(Une injection)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `¿Qué te pones en la axila para medir la fiebre? <trans en="(What do you put in your armpit to measure fever?)" ar="(ماذا تضع في إبطك لقياس الحمى؟)" uk="(Що ви кладете під пахву, щоб виміряти температуру?)" fr="(Que mets-tu sous ton aisselle pour mesurer la fièvre ?)"/>`,
        options: ["Un termómetro <trans en=\"(A thermometer)\" ar=\"(ميزان حرارة)\" uk=\"(Термометр)\" fr=\"(Un thermomètre)\"/>", "Una venda <trans en=\"(A bandage)\" ar=\"(ضمادة)\" uk=\"(Пов'язка)\" fr=\"(Un pansement)\"/>", "Un fonendoscopio <trans en=\"(A stethoscope)\" ar=\"(سماعة الطبيب)\" uk=\"(Стетоскоп)\" fr=\"(Un stéthoscope)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `¿Qué preguntas al llegar a la consulta? <trans en="(What questions do you ask when you arrive for the consultation?)" ar="(ما هي الأسئلة التي تطرحها عند وصولك للاستشارة؟)" uk="(Які питання ви задаєте, коли приходите на консультацію?)" fr="(Quelles questions posez-vous en arrivant à la consultation ?)"/>`,
        options: ["¿Quién es el último? <trans en=\"(Who is the last one?)\" ar=\"(من هو الأخير؟)\" uk=\"(Хто останній?)\" fr=\"(Qui est le dernier ?)\"/>", "¿Cuánto cuesta? <trans en=\"(How much does it cost?)\" ar=\"(كم يكلف؟)\" uk=\"(Скільки це коштує?)\" fr=\"(Combien ça coûte?)\"/>", "¿Qué hora es? <trans en=\"(What time is it?)\" ar=\"(أي ساعة؟)\" uk=\"(Котра година?)\" fr=\"(Quelle heure est-il?)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Si un alimento te hace daño siempre, tienes... <trans en="(If a food always hurts you, you have...)" ar="(إذا كان الطعام يؤذيك دائمًا، فلديك...)" uk="(Якщо їжа завжди шкодить вам, у вас є...)" fr="(Si un aliment vous fait toujours mal, vous avez...)"/>`,
        options: ["Alergia o intolerancia <trans en=\"(Allergy or intolerance)\" ar=\"(الحساسية أو عدم التحمل)\" uk=\"(Алергія або непереносимість)\" fr=\"(Allergie ou intolérance)\"/>", "Fiebre <trans en=\"(Fever)\" ar=\"(حمى)\" uk=\"(Лихоманка)\" fr=\"(Fièvre)\"/>", "Gripe <trans en=\"(Flu)\" ar=\"(الانفلونزا)\" uk=\"(Грип)\" fr=\"(Grippe)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `La enfermera te puede poner una... <trans en="(The nurse can give you a...)" ar="(يمكن للممرضة أن تعطيك...)" uk="(Медсестра може дати вам...)" fr="(L'infirmière peut vous donner un...)"/>`,
        options: ["Inyección / Vacuna <trans en=\"(Injection/Vaccine)\" ar=\"(الحقن/اللقاح)\" uk=\"(Ін'єкція/вакцина)\" fr=\"(Injection/Vaccin)\"/>", "Tirita en el zapato <trans en=\"(Band-aid on the shoe)\" ar=\"(ضمادة على الحذاء)\" uk=\"(Пластир на черевику)\" fr=\"(Pansement sur la chaussure)\"/>", "Gorra <trans en=\"(Cap)\" ar=\"(كاب)\" uk=\"(Кап)\" fr=\"(Casquette)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Las pastillas y jarabes son... <trans en="(Pills and syrups are...)" ar="(الحبوب والعصائر...)" uk="(Таблетки та сиропи - це...)" fr="(Les pilules et les sirops sont...)"/>`,
        options: ["Medicamentos <trans en=\"(Medications)\" ar=\"(الأدوية)\" uk=\"(Ліки)\" fr=\"(Médicaments)\"/>", "Comida <trans en=\"(Food)\" ar=\"(الغذاء)\" uk=\"(Харчування)\" fr=\"(Nourriture)\"/>", "Bebidas <trans en=\"(Drinks)\" ar=\"(المشروبات)\" uk=\"(Напої)\" fr=\"(Boissons)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `¿Qué médico cuida los dientes? <trans en="(Which doctor takes care of your teeth?)" ar="(من هو الطبيب الذي يعتني بأسنانك؟)" uk="(Який лікар займається вашими зубами?)" fr="(Quel médecin s'occupe de vos dents ?)"/>`,
        options: ["El dentista <trans en=\"(The dentist)\" ar=\"(طبيب الأسنان)\" uk=\"(Стоматолог)\" fr=\"(Le dentiste)\"/>", "El pediatra <trans en=\"(The pediatrician)\" ar=\"(طبيب الأطفال)\" uk=\"(Педіатр)\" fr=\"(Le pédiatre)\"/>", "El cirujano <trans en=\"(The surgeon)\" ar=\"(الجراح)\" uk=\"(Хірург)\" fr=\"(Le chirurgien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `¿Qué médico cuida a los niños? <trans en="(Which doctor takes care of the children?)" ar="(من هو الطبيب الذي يعتني بالأطفال؟)" uk="(Який лікар займається дітьми?)" fr="(Quel médecin s'occupe des enfants ?)"/>`,
        options: ["El pediatra <trans en=\"(The pediatrician)\" ar=\"(طبيب الأطفال)\" uk=\"(Педіатр)\" fr=\"(Le pédiatre)\"/>", "El dentista <trans en=\"(The dentist)\" ar=\"(طبيب الأسنان)\" uk=\"(Стоматолог)\" fr=\"(Le dentiste)\"/>", "El oftalmólogo <trans en=\"(The ophthalmologist)\" ar=\"(طبيب العيون)\" uk=\"(Лікар-офтальмолог)\" fr=\"(L'ophtalmologiste)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `Si te duele el estómago, quizás tengas un dolor de... <trans en="(If your stomach hurts, you may have a...)" ar="(إذا كانت معدتك تؤلمك، فقد يكون لديك...)" uk="(Якщо у вас болить живіт, можливо, у вас...)" fr="(Si vous avez mal au ventre, vous pourriez avoir un...)"/>`,
        options: ["Barriga <trans en=\"(Belly)\" ar=\"(البطن)\" uk=\"(Живіт)\" fr=\"(Ventre)\"/>", "Cabeza <trans en=\"(Head)\" ar=\"(الرأس)\" uk=\"(Голова)\" fr=\"(Tête)\"/>", "Espalda <trans en=\"(Back)\" ar=\"(العودة)\" uk=\"(Назад)\" fr=\"(Retour)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `¿Qué necesitas pedir antes de ir al médico? <trans en="(What do you need to ask for before going to the doctor?)" ar="(ما الذي يجب أن تسأل عنه قبل الذهاب إلى الطبيب؟)" uk="(Що потрібно запитати перед походом до лікаря?)" fr="(Que faut-il demander avant d'aller chez le médecin ?)"/>`,
        options: ["Cita previa <trans en=\"(Appointment)\" ar=\"(موعد)\" uk=\"(Призначення)\" fr=\"(Rendez-vous)\"/>", "Permiso de conducir <trans en=\"(Driving license)\" ar=\"(رخصة القيادة)\" uk=\"(Водійські права)\" fr=\"(Permis de conduire)\"/>", "La cuenta <trans en=\"(The account)\" ar=\"(الحساب)\" uk=\"(Рахунок)\" fr=\"(Le compte)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "b1-gram-pasado",
    topic: "Tiempos del Pasado",
    title: "El Pretérito Indefinido",
    level: "B1",
    category: "Gramática",
    description: "Aprende a hablar de acciones terminadas en un momento específico del pasado.",
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80",
    emoji: "⏳",
    color: "#FEFCBF",
    content: `
## El Pretérito Indefinido: Hablé, comí, viví...

El Pretérito Indefinido (también conocido como Pretérito Perfecto Simple) se utiliza para expresar acciones completamente terminadas en el pasado, en un tiempo delimitado y desconectado del presente (ej: "ayer", "la semana pasada", "en 1999", "hace tres días").

### 1. Verbos Regulares: Desinencias y Conjugación
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Verbos en -AR (ej. Hablar)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Verbos en -ER / -IR (ej. Comer / Vivir)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hablé</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">comí / viví</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Ayer hablé con mi madre.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Yesterday I spoke with my mother.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hablaste</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">comiste / viviste</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">¿Comiste en el restaurante?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Did you eat at the restaurant?</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">habló</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">comió / vivió</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Ella vivió en Francia un año.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">She lived in France for a year.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hablamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">comimos / vivimos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Nosotros comimos pasta.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We ate pasta.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hablasteis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">comisteis / vivisteis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Vosotros hablasteis mucho.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You all spoke a lot.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hablaron</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">comieron / vivieron</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Ellos vieron a su amigo.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They saw their friend.</td></tr></tbody></table></div>
---

### 2. Verbos Irregulares de Alta Frecuencia

Los verbos **SER** (ser de profesión, origen, etc.) e **IR** (moverse a un lugar) comparten la misma conjugación exacta en pretérito indefinido:
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">SER / IR</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">TENER (Tuv-)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo SER / IR</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo TENER</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">fui</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">tuve</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Yo fui al cine ayer.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Tuve mucha suerte.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">fuiste</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">tuviste</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">¿Fuiste tú el ganador?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Tuviste un buen día.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">fue</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">tuvo</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Él fue a Valencia.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Tuvo un examen ayer.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">fuimos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">tuvimos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Fuimos muy felices allí.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Tuvimos problemas.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">fuisteis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">tuvisteis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">¿Fuisteis al médico?</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Tuvisteis frío.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">fueron</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">tuvieron</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Ellos fueron a casa.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Tuvieron que salir.</td></tr></tbody></table></div>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Ayer yo ___ al trabajo. <trans en=\"(Yesterday I ___ to work.)\" ar=\"(أمس أنا ___ إلى العمل.)\" uk=\"(Вчора я ___ на роботу.)\" fr=\"(Hier, je ___ au travail.)\"/>",
        options: ["fui","fuiste","fue"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Tú ___ a la ciudad por la mañana. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["fuiste","fui","fue"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Él ___ al hospital ayer. <trans en=\"(He/She ___)\" ar=\"(هو/هي ___)\" uk=\"(Він/Вона ___)\" fr=\"(Il/Elle ___)\"/>",
        options: ["fue","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Ella ___ a la tienda antes. <trans en=\"(She ___)\" ar=\"(هي ___)\" uk=\"(Вона ___)\" fr=\"(Elle ___)\"/>",
        options: ["fue","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Nosotros ___ a casa por la tarde. <trans en=\"(We ___ house.)\" ar=\"(نحن ___ المنزل.)\" uk=\"(Ми ___ будинку.)\" fr=\"(Nous ___ la maison.)\"/>",
        options: ["fuimos","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Vosotros ___ al centro ayer. <trans en=\"(You all ___)\" ar=\"(أنتم ___)\" uk=\"(Ви всі ___)\" fr=\"(Vous ___)\"/>",
        options: ["fuisteis","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Ellos ___ a la escuela por la mañana. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["fueron","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Yo ___ al mercado ayer. <trans en=\"(I ___)\" ar=\"(أنا ___)\" uk=\"(Я ___)\" fr=\"(Je ___)\"/>",
        options: ["fui","fuiste","fue"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Tú ___ a la calle por la tarde. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["fuiste","fui","fue"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Ellas ___ al trabajo ayer. <trans en=\"(They ___ work.)\" ar=\"(هم ___ العمل.)\" uk=\"(Вони ___ роботу.)\" fr=\"(Ils ___ le travail.)\"/>",
        options: ["fueron","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Ayer yo ___ en casa. <trans en=\"(Yesterday I ___ at home.)\" ar=\"(أمس كنت ___ في المنزل.)\" uk=\"(Вчора я ___ вдома.)\" fr=\"(Hier, j'étais ___ à la maison.)\"/>",
        options: ["estuve","estuviste","estuvo"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Tú ___ en la ciudad. <trans en=\"(You ___ in the city/Madrid.)\" ar=\"(أنت ___ في المدينة/مدريد.)\" uk=\"(Ти ___ у місті/Мадриді.)\" fr=\"(Tu ___ dans la ville/Madrid.)\"/>",
        options: ["estuviste","estuve","estuvo"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Él ___ en el hospital. <trans en=\"(He/She ___)\" ar=\"(هو/هي ___)\" uk=\"(Він/Вона ___)\" fr=\"(Il/Elle ___)\"/>",
        options: ["estuvo","estuve","estuviste"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Ella ___ en la tienda. <trans en=\"(She ___)\" ar=\"(هي ___)\" uk=\"(Вона ___)\" fr=\"(Elle ___)\"/>",
        options: ["estuvo","estuve","estuviste"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Nosotros ___ juntos ayer. <trans en=\"(We ___ together.)\" ar=\"(نحن ___ معاً.)\" uk=\"(Ми ___ разом.)\" fr=\"(Nous ___ ensemble.)\"/>",
        options: ["estuvimos","estuve","estuviste"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Vosotros ___ en la calle. <trans en=\"(You all ___)\" ar=\"(أنتم ___)\" uk=\"(Ви всі ___)\" fr=\"(Vous ___)\"/>",
        options: ["estuvisteis","estuve","estuviste"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Ellos ___ en el trabajo. <trans en=\"(They ___ work.)\" ar=\"(هم ___ العمل.)\" uk=\"(Вони ___ роботу.)\" fr=\"(Ils ___ le travail.)\"/>",
        options: ["estuvieron","estuve","estuviste"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Yo ___ allí por la mañana. <trans en=\"(I ___)\" ar=\"(أنا ___)\" uk=\"(Я ___)\" fr=\"(Je ___)\"/>",
        options: ["estuve","estuviste","estuvo"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Tú ___ aquí ayer. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["estuviste","estuve","estuvo"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Ellas ___ en la escuela. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["estuvieron","estuve","estuviste"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b2-gram-subjuntivo",
    topic: "El Subjuntivo",
    title: "Introducción al Subjuntivo",
    level: "B2",
    category: "Gramática",
    description: "Expresa deseos, dudas, emociones y probabilidades usando el presente de subjuntivo.",
    imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop&q=80",
    emoji: "💭",
    color: "#E3EEF9",
    content: `
## El Presente de Subjuntivo: Formación y Conjugación

El subjuntivo es un *modo* verbal en español. Se utiliza principalmente para expresar deseos, emociones, dudas, probabilidad o recomendaciones en oraciones subordinadas conectadas por "que".

### 1. Conjugación de Verbos Regulares
Para conjugar en Presente de Subjuntivo, se toma la raíz de la primera persona del singular del presente de indicativo y se añaden las siguientes terminaciones:
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Verbos en -AR (ej. Hablar)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Verbos en -ER / -IR (ej. Comer / Vivir)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo -AR</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo -ER / -IR</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hable</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">coma / viva</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Quiero que él me hable.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Me alegra que comas bien.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hables</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">comas / vivas</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Es bueno que hables español.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Dudo que comas carne hoy.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hable</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">coma / viva</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Te aconsejo que hables hoy.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Necesito que ella coma algo.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hablemos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">comamos / vivamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Esperamos que hablemos pronto.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Queremos que comamos juntos.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">habléis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">comáis / viváis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Quiero que vosotros habléis.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Me gusta que comáis fruta.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hablen</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">coman / vivan</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Ojalá hablen con su jefe.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Busco que ellos coman aquí.</td></tr></tbody></table></div>
---

### 2. Verbos Irregulares de Alta Frecuencia

Algunos verbos clave tienen formas completamente irregulares en presente de subjuntivo:
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">SER</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">IR</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">TENER</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">sea</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">vaya</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">tenga</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">seas</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">vayas</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">tengas</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">sea</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">vaya</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">tenga</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">seamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">vayamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">tengamos</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">seáis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">vayáis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">tengáis</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">sean</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">vayan</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">tengan</td></tr></tbody></table></div>
**Ejemplos:**
- *Es importante que tú **seas** sincero.*
- *Dudo que ellos **vayan** a la fiesta de noche.*
- *Quiero que vosotros **tengáis** un buen viaje.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "Quiero que tú ___ (venir) a mi fiesta.",
        options: ["vienes","vengas","vengas que"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Es necesario que nosotros ___ (estudiar) más.",
        options: ["estudiemos","estudiamos","estudiar"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Cuando ___ (llegar) a casa, te llamaré. (Acción futura)",
        options: ["llegues","llegas","llegarás"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "No creo que él ___ (tener) razón.",
        options: ["tiene","tenga","tuviera"],
        correctAnswer: 1
      },
      {
        id: "ex5",
        question: "Espero que mañana ___ (hacer) buen tiempo.",
        options: ["haga","hace","hará"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Te llamo para que ___ (saber) que estoy bien.",
        options: ["sabes","sepas","saber"],
        correctAnswer: 1
      },
      {
        id: "ex7",
        question: "Buscamos un hotel que ___ (tener) piscina.",
        options: ["tiene","tenga","tuviera"],
        correctAnswer: 1
      },
      {
        id: "ex8",
        question: "Dudo que ellos ___ (venir) hoy.",
        options: ["vengan","vienen","vendrán"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Me alegra de que tú ___ (estar) aquí.",
        options: ["estás","estés","estuvieras"],
        correctAnswer: 1
      },
      {
        id: "ex10",
        question: "Es una lástima que no ___ (poder) venir.",
        options: ["puedes","puedas","pudiste"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: "Te aconsejo que ___ (hablar) con tu jefe.",
        options: ["hables","hablas","hablar"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "No me parece que ___ (ser) una buena idea.",
        options: ["sea","es","sería"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Tal vez ___ (ir) al cine esta tarde.",
        options: ["vaya","voy","iré"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Ojalá ___ (aprobar, yo) el examen de conducir.",
        options: ["apruebe","apruebo","aprobé"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Hará lo que tú le ___ (decir).",
        options: ["digas","dices","dirás"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Antes de que tú ___ (ir), quiero decirte algo.",
        options: ["vayas","vas","irás"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Me molesta que la gente ___ (hacer) ruido.",
        options: ["haga","hace","hagan"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Aunque ___ (llover) mañana, iré de excursión. (Probabilidad futura)",
        options: ["llueva","llueve","lloverá"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Le pido a Dios que te ___ (proteger).",
        options: ["proteja","protege","proteges"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Deseo que os ___ (divertirse) mucho.",
        options: ["divirtáis","divertís","divierten"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "c1-vocab-modismos",
    topic: "Expresiones Idiomáticas",
    title: "Modismos y Frases Hechas",
    level: "C1",
    category: "Vocabulario",
    description: "Aprende expresiones idiomáticas comunes para hablar con gran naturalidad y entender a los nativos.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    emoji: "🗣️",
    color: "#F3E8FF",
    content: `
## Expresiones Idiomáticas

Para hablar como un nativo, es esencial conocer las frases hechas que se usan en el día a día.

*   **Tomar el pelo:** Engañar o bromear con alguien.
    *   *Ejemplo: ¿Cien euros por este café? ¡Me estás tomando el pelo!*
*   **Echar una mano:** Ayudar a alguien.
    *   *Ejemplo: ¿Me echas una mano con estas cajas? Pesan mucho.*
*   **Estar en las nubes:** Estar despistado o pensando en otras cosas.
    *   *Ejemplo: Juan nunca escucha en clase, siempre está en las nubes.*
*   **Costar un ojo de la cara:** Ser muy caro.
    *   *Ejemplo: Me encanta ese coche, pero debe costar un ojo de la cara.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si alguien 'te toma el pelo', esa persona está...",
        options: ["Cortándote el cabello", "Bromeando contigo o engañándote", "Enojada contigo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Si necesitas que tu amigo te ayude, le dices:",
        options: ["Échame una mano", "Estoy en las nubes", "Me cuesta un ojo"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "c2-comp-literatura",
    topic: "Literatura y Cultura",
    title: "Análisis Literario Breve",
    level: "C2",
    category: "Comprensión",
    description: "Lee textos literarios complejos, comprende dobles sentidos, ironía y vocabulario muy avanzado.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
    color: "#FFF4E5",
    content: `
## Lectura Avanzada

Analicemos un pequeño fragmento que utiliza un lenguaje rico en matices:

> *"La ciudad amaneció envuelta en un manto de niebla tan espeso que hasta los pensamientos parecían desvanecerse antes de tomar forma humana. Era un letargo colectivo, una pausa impuesta por la marea gris que disolvía contornos y certezas."*

### Análisis
Este texto no solo describe el clima (la niebla), sino que lo utiliza como metáfora del estado psicológico de los habitantes ("letargo colectivo", "disolvía certezas"). Hay una personificación sutil ("pausa impuesta") y un vocabulario abstracto ("contornos", "letargo").
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué sugiere la expresión 'los pensamientos parecían desvanecerse' en este contexto?",
        options: ["Que la gente sufría de amnesia.", "Una sensación de confusión, irrealidad y letargo mental.", "Que la niebla era tóxica."],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "La palabra 'letargo' se puede sustituir más adecuadamente por:",
        options: ["Alegría", "Adormecimiento o inactividad profunda", "Movimiento frenético"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-vocab-horas-fechas",
    topic: "Fechas y Horas",
    title: "Vocabulario: Días, Meses y la Hora",
    level: "A1",
    category: "Vocabulario",
    description: "Aprende los días de la semana, los meses y cómo decir la hora en español.",
    imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&auto=format&fit=crop&q=80",
    emoji: "📅",
    color: "#E3EEF9",
    vocabulary: [
        {
          word: 'Lunes',
          translations: {
            en: 'Monday',
            ar: 'الإثنين',
            uk: 'Понеділок',
            fr: 'Lundi'
          },
          emoji: '📅',
          color: '#EBF8FF'
        },
        {
          word: 'Martes',
          translations: {
            en: 'Tuesday',
            ar: 'الثلاثاء',
            uk: 'Вівторок',
            fr: 'Mardi'
          },
          emoji: '📅',
          color: '#EBF8FF'
        },
        {
          word: 'Miércoles',
          translations: {
            en: 'Wednesday',
            ar: 'الأربعاء',
            uk: 'Середа',
            fr: 'Mercredi'
          },
          emoji: '📅',
          color: '#EBF8FF'
        },
        {
          word: 'Jueves',
          translations: {
            en: 'Thursday',
            ar: 'الخميس',
            uk: 'Четвер',
            fr: 'Jeudi'
          },
          emoji: '📅',
          color: '#EBF8FF'
        },
        {
          word: 'Viernes',
          translations: {
            en: 'Friday',
            ar: 'الجمعة',
            uk: 'П\'ятниця',
            fr: 'Vendredi'
          },
          emoji: '📅',
          color: '#EBF8FF'
        },
        {
          word: 'Sábado',
          translations: {
            en: 'Saturday',
            ar: 'السبت',
            uk: 'Субота',
            fr: 'Samedi'
          },
          emoji: '🏖️',
          color: '#EBF8FF'
        },
        {
          word: 'Domingo',
          translations: {
            en: 'Sunday',
            ar: 'الأحد',
            uk: 'Неділя',
            fr: 'Dimanche'
          },
          emoji: '🏖️',
          color: '#EBF8FF'
        },
        {
          word: 'Enero',
          translations: {
            en: 'January',
            ar: 'يناير',
            uk: 'Січень',
            fr: 'Janvier'
          },
          emoji: '❄️',
          color: '#EBF8FF'
        },
        {
          word: 'Febrero',
          translations: {
            en: 'February',
            ar: 'فبراير',
            uk: 'Лютий',
            fr: 'Février'
          },
          emoji: '❄️',
          color: '#EBF8FF'
        },
        {
          word: 'Marzo',
          translations: {
            en: 'March',
            ar: 'مارس',
            uk: 'Березень',
            fr: 'Mars'
          },
          emoji: '🌱',
          color: '#EBF8FF'
        },
        {
          word: 'Abril',
          translations: {
            en: 'April',
            ar: 'أبريل',
            uk: 'Квітень',
            fr: 'Avril'
          },
          emoji: '🌱',
          color: '#EBF8FF'
        },
        {
          word: 'Mayo',
          translations: {
            en: 'May',
            ar: 'مايو',
            uk: 'Травень',
            fr: 'Mai'
          },
          emoji: '🌱',
          color: '#EBF8FF'
        },
        {
          word: 'Junio',
          translations: {
            en: 'June',
            ar: 'يونيو',
            uk: 'Червень',
            fr: 'Juin'
          },
          emoji: '☀️',
          color: '#EBF8FF'
        },
        {
          word: 'Julio',
          translations: {
            en: 'July',
            ar: 'يوليو',
            uk: 'Липень',
            fr: 'Juillet'
          },
          emoji: '☀️',
          color: '#EBF8FF'
        },
        {
          word: 'Agosto',
          translations: {
            en: 'August',
            ar: 'أغسطس',
            uk: 'Серпень',
            fr: 'Août'
          },
          emoji: '☀️',
          color: '#EBF8FF'
        },
        {
          word: 'Septiembre',
          translations: {
            en: 'September',
            ar: 'سبتمبر',
            uk: 'Вересень',
            fr: 'Septembre'
          },
          emoji: '🍁',
          color: '#EBF8FF'
        },
        {
          word: 'Octubre',
          translations: {
            en: 'October',
            ar: 'أكتوبر',
            uk: 'Жовтень',
            fr: 'Octobre'
          },
          emoji: '🍁',
          color: '#EBF8FF'
        },
        {
          word: 'Noviembre',
          translations: {
            en: 'November',
            ar: 'نوفمبر',
            uk: 'Листопад',
            fr: 'Novembre'
          },
          emoji: '🍁',
          color: '#EBF8FF'
        },
        {
          word: 'Diciembre',
          translations: {
            en: 'December',
            ar: 'ديسمبر',
            uk: 'Грудень',
            fr: 'Décembre'
          },
          emoji: '❄️',
          color: '#EBF8FF'
        },
        {
          word: 'La hora',
          translations: {
            en: 'The hour / time',
            ar: 'الساعة',
            uk: 'Година / час',
            fr: 'L\'heure'
          },
          emoji: '⏰',
          color: '#EBF8FF'
        },
        {
          word: 'El minuto',
          translations: {
            en: 'Minute',
            ar: 'الدقيقة',
            uk: 'Хвилина',
            fr: 'Minute'
          },
          emoji: '⏱️',
          color: '#EBF8FF'
        },
        {
          word: 'El segundo',
          translations: {
            en: 'Second',
            ar: 'الثانية',
            uk: 'Секунда',
            fr: 'Seconde'
          },
          emoji: '⏱️',
          color: '#EBF8FF'
        },
        {
          word: 'Hoy',
          translations: {
            en: 'Today',
            ar: 'اليوم',
            uk: 'Сьогодні',
            fr: 'Aujourd\'hui'
          },
          emoji: '📅',
          color: '#EBF8FF'
        },
        {
          word: 'Ayer',
          translations: {
            en: 'Yesterday',
            ar: 'أمس',
            uk: 'Вчора',
            fr: 'Hier'
          },
          emoji: '📅',
          color: '#EBF8FF'
        },
        {
          word: 'Mañana',
          translations: {
            en: 'Tomorrow',
            ar: 'غداً',
            uk: 'Завтра',
            fr: 'Demain'
          },
          emoji: '📅',
          color: '#EBF8FF'
        },
        {
          word: 'La mañana',
          translations: {
            en: 'Morning',
            ar: 'الصباح',
            uk: 'Ранок',
            fr: 'Le matin'
          },
          emoji: '🌅',
          color: '#EBF8FF'
        },
        {
          word: 'La tarde',
          translations: {
            en: 'Afternoon',
            ar: 'بعد الظهر',
            uk: 'День / вечір',
            fr: 'L\'après-midi'
          },
          emoji: '☀️',
          color: '#EBF8FF'
        },
        {
          word: 'La noche',
          translations: {
            en: 'Night',
            ar: 'الليل',
            uk: 'Ніч',
            fr: 'La nuit'
          },
          emoji: '🌙',
          color: '#EBF8FF'
        },
        {
          word: 'La semana',
          translations: {
            en: 'Week',
            ar: 'الأسبوع',
            uk: 'Тиждень',
            fr: 'La semana'
          },
          emoji: '📅',
          color: '#EBF8FF'
        },
        {
          word: 'El año',
          translations: {
            en: 'Year',
            ar: 'السنة',
            uk: 'Рік',
            fr: 'L\'année'
          },
          emoji: '📅',
          color: '#EBF8FF'
        }
      ],
    content: `
## Los Días de la Semana
Lunes, Martes, Miércoles, Jueves, Viernes, Sábado y Domingo.

## La Hora
Para preguntar la hora: **¿Qué hora es?** <trans en="(What time is it?)" ar="(كم الساعة؟)" uk="(Котра година?)" fr="(Quelle heure est-il ?)"/>
Para responder: **Son las dos.** (2:00) o **Es la una.** (1:00).
    `,
    exercises: [
      {
        id: "ex1",
        question: `¿Qué día va después del lunes? <trans en="(What day comes after Monday?)" ar="(ما هو اليوم الذي يأتي بعد يوم الاثنين؟)" uk="(Який день наступає після понеділка?)" fr="(Quel jour vient après lundi ?)"/>`,
        options: ["Miércoles <trans en=\"(Wednesday)\" ar=\"(الاربعاء)\" uk=\"(Середа)\" fr=\"(Mercredi)\"/>", "Martes <trans en=\"(Tuesday)\" ar=\"(الثلاثاء)\" uk=\"(Вівторок)\" fr=\"(Mardi)\"/>", "Sábado <trans en=\"(Saturday)\" ar=\"(السبت)\" uk=\"(Субота)\" fr=\"(Samedi)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `¿Cómo preguntas la hora? <trans en="(How do you ask the time?)" ar="(كيف تسأل عن الوقت؟)" uk="(Як ви питаєте час?)" fr="(Comment demandez-vous l'heure ?)"/>`,
        options: ["¿Cómo te llamas? <trans en=\"(What is your name?)\" ar=\"(ما اسمك؟)\" uk=\"(Як тебе звати?)\" fr=\"(Quel est ton nom?)\"/>", "¿Dónde estás? <trans en=\"(Where are you?)\" ar=\"(أين أنت؟)\" uk=\"(Де ти?)\" fr=\"(Où es-tu?)\"/>", "¿Qué hora es? <trans en=\"(What time is it?)\" ar=\"(أي ساعة؟)\" uk=\"(Котра година?)\" fr=\"(Quelle heure est-il?)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex3",
        question: `¿Qué día es hoy? <trans en="(What day is today?)" ar="(ما هو اليوم؟)" uk="(Який сьогодні день?)" fr="(Quel jour sommes-nous aujourd'hui?)"/>`,
        options: ["Lunes <trans en=\"(Monday)\" ar=\"(الاثنين)\" uk=\"(Понеділок)\" fr=\"(Lundi)\"/>", "Enero <trans en=\"(January)\" ar=\"(يناير)\" uk=\"(Січень)\" fr=\"(Janvier)\"/>", "Mañana <trans en=\"(Tomorrow)\" ar=\"(غدا)\" uk=\"(Завтра)\" fr=\"(Demain)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `¿En qué mes estamos? <trans en="(What month are we in?)" ar="(في أي شهر نحن؟)" uk="(У якому ми місяці?)" fr="(Dans quel mois sommes-nous ?)"/>`,
        options: ["Octubre <trans en=\"(October)\" ar=\"(أكتوبر)\" uk=\"(Жовтень)\" fr=\"(Octobre)\"/>", "Martes <trans en=\"(Tuesday)\" ar=\"(الثلاثاء)\" uk=\"(Вівторок)\" fr=\"(Mardi)\"/>", "Primavera <trans en=\"(Spring)\" ar=\"(الربيع)\" uk=\"(Весна)\" fr=\"(Printemps)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `El primer día de la semana es... <trans en="(The first day of the week is...)" ar="(أول يوم في الأسبوع هو...)" uk="(Перший день тижня...)" fr="(Le premier jour de la semaine est...)"/>`,
        options: ["Lunes <trans en=\"(Monday)\" ar=\"(الاثنين)\" uk=\"(Понеділок)\" fr=\"(Lundi)\"/>", "Domingo <trans en=\"(Sunday)\" ar=\"(الأحد)\" uk=\"(Неділя)\" fr=\"(Dimanche)\"/>", "Martes <trans en=\"(Tuesday)\" ar=\"(الثلاثاء)\" uk=\"(Вівторок)\" fr=\"(Mardi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `El último mes del año es... <trans en="(The last month of the year is...)" ar="(آخر شهر في السنة هو...)" uk="(Останній місяць року...)" fr="(Le dernier mois de l'année est...)"/>`,
        options: ["Diciembre <trans en=\"(December)\" ar=\"(ديسمبر)\" uk=\"(Грудень)\" fr=\"(Décembre)\"/>", "Enero <trans en=\"(January)\" ar=\"(يناير)\" uk=\"(Січень)\" fr=\"(Janvier)\"/>", "Noviembre <trans en=\"(November)\" ar=\"(نوفمبر)\" uk=\"(Листопад)\" fr=\"(Novembre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `El día después de 'Martes' es... <trans en="(The day after 'Tuesday' is...)" ar="(اليوم الذي يلي "الثلاثاء" هو ...)" uk="(Наступний день після "вівторка"...)" fr="(Le lendemain de « mardi » est...)"/>`,
        options: ["Miércoles <trans en=\"(Wednesday)\" ar=\"(الاربعاء)\" uk=\"(Середа)\" fr=\"(Mercredi)\"/>", "Jueves <trans en=\"(Thursday)\" ar=\"(الخميس)\" uk=\"(Четвер)\" fr=\"(Jeudi)\"/>", "Lunes <trans en=\"(Monday)\" ar=\"(الاثنين)\" uk=\"(Понеділок)\" fr=\"(Lundi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `¿Qué estación hace mucho calor? <trans en="(What season is very hot?)" ar="(ما هو الموسم حار جدا؟)" uk="(Яка пора року дуже спекотна?)" fr="(Quelle saison est très chaude ?)"/>`,
        options: ["Verano <trans en=\"(Summer)\" ar=\"(الصيف)\" uk=\"(Літо)\" fr=\"(Été)\"/>", "Invierno <trans en=\"(Winter)\" ar=\"(الشتاء)\" uk=\"(Зима)\" fr=\"(Hiver)\"/>", "Otoño <trans en=\"(Autumn)\" ar=\"(الخريف)\" uk=\"(Осінь)\" fr=\"(Automne)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `¿Qué estación hace mucho frío? <trans en="(What season is very cold?)" ar="(ما هو الموسم بارد جدا؟)" uk="(Яка пора року дуже холодна?)" fr="(Quelle saison est très froide ?)"/>`,
        options: ["Invierno <trans en=\"(Winter)\" ar=\"(الشتاء)\" uk=\"(Зима)\" fr=\"(Hiver)\"/>", "Primavera <trans en=\"(Spring)\" ar=\"(الربيع)\" uk=\"(Весна)\" fr=\"(Printemps)\"/>", "Verano <trans en=\"(Summer)\" ar=\"(الصيف)\" uk=\"(Літо)\" fr=\"(Été)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `¿Qué hora es? '14:00' <trans en="(What time is it? '14:00')" ar="(ما هو الوقت؟ '14:00')" uk="(Котра година? '14:00')" fr="(Quelle heure est-il ? '14h00')"/>`,
        options: ["Son las dos de la tarde <trans en=\"(It's two in the afternoon)\" ar=\"(الساعة الثانية بعد الظهر)\" uk=\"(Друга година дня)\" fr=\"(Il est deux heures de l'après-midi)\"/>", "Son las catorce de la mañana <trans en=\"(It's fourteen in the morning)\" ar=\"(إنها الرابعة عشرة صباحاً)\" uk=\"(Зараз чотирнадцята ранку)\" fr=\"(Il est quatorze heures du matin)\"/>", "Es la dos <trans en=\"(It's two)\" ar=\"(إنه اثنان)\" uk=\"(Це два)\" fr=\"(Il est deux)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Si son las '13:30', decimos que es la una y... <trans en="(If it is '13:30', we say it is one and...)" ar="(إذا كانت الساعة "13:30" نقول أنها واحدة و...)" uk="(Якщо це "13:30", ми кажемо, що це один і...)" fr="(S'il est '13h30', on dit qu'il est une et...)"/>`,
        options: ["media <trans en=\"(average)\" ar=\"(متوسط)\" uk=\"(середній)\" fr=\"(moyen)\"/>", "cuarto <trans en=\"(fourth)\" ar=\"(رابعا)\" uk=\"(четвертий)\" fr=\"(quatrième)\"/>", "treinta <trans en=\"(thirty)\" ar=\"(ثلاثون)\" uk=\"(тридцять)\" fr=\"(trente)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `Si son las '15:15', decimos que son las tres y... <trans en="(If it is '15:15', we say it is three and...)" ar="(إذا كانت "15:15" نقول أنها ثلاثة و...)" uk="(Якщо це "15:15", ми кажемо, що це три і...)" fr="(S'il est '15h15', on dit qu'il est trois heures et...)"/>`,
        options: ["cuarto <trans en=\"(fourth)\" ar=\"(رابعا)\" uk=\"(четвертий)\" fr=\"(quatrième)\"/>", "quince <trans en=\"(fifteen)\" ar=\"(خمسة عشر)\" uk=\"(п'ятнадцять)\" fr=\"(quinze)\"/>", "media <trans en=\"(average)\" ar=\"(متوسط)\" uk=\"(середній)\" fr=\"(moyen)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `El día antes de hoy fue... <trans en="(The day before today was...)" ar="(أول من اليوم كان...)" uk="(Напередодні було...)" fr="(Avant-hier, c'était...)"/>`,
        options: ["Ayer <trans en=\"(Yesterday)\" ar=\"(أمس)\" uk=\"(Вчора)\" fr=\"(Hier)\"/>", "Mañana <trans en=\"(Tomorrow)\" ar=\"(غدا)\" uk=\"(Завтра)\" fr=\"(Demain)\"/>", "Luego <trans en=\"(Then)\" ar=\"(ثم)\" uk=\"(Тоді)\" fr=\"(Alors)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `El día después de hoy será... <trans en="(The day after today will be...)" ar="(سيكون بعد اليوم...)" uk="(Післязавтра буде...)" fr="(Après-demain sera...)"/>`,
        options: ["Mañana <trans en=\"(Tomorrow)\" ar=\"(غدا)\" uk=\"(Завтра)\" fr=\"(Demain)\"/>", "Ayer <trans en=\"(Yesterday)\" ar=\"(أمس)\" uk=\"(Вчора)\" fr=\"(Hier)\"/>", "Pronto <trans en=\"(Soon)\" ar=\"(قريبا)\" uk=\"(Скоро)\" fr=\"(Bientôt)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `El fin de semana son los días... <trans en="(The weekend is the days...)" ar="(عطلة نهاية الأسبوع هي الأيام ...)" uk="(Вихідні - це дні...)" fr="(Le week-end, ce sont les jours...)"/>`,
        options: ["Sábado y Domingo <trans en=\"(Saturday and Sunday)\" ar=\"(السبت والأحد)\" uk=\"(Субота та неділя)\" fr=\"(Samedi et dimanche)\"/>", "Lunes y Martes <trans en=\"(Monday and Tuesday)\" ar=\"(الاثنين والثلاثاء)\" uk=\"(Понеділок і вівторок)\" fr=\"(Lundi et mardi)\"/>", "Viernes y Sábado <trans en=\"(Friday and Saturday)\" ar=\"(الجمعة والسبت)\" uk=\"(П'ятниця та субота)\" fr=\"(Vendredi et samedi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `¿En qué mes celebramos la Navidad? <trans en="(In what month do we celebrate Christmas?)" ar="(في أي شهر نحتفل بعيد الميلاد؟)" uk="(В якому місяці ми святкуємо Різдво?)" fr="(En quel mois fête-t-on Noël ?)"/>`,
        options: ["Diciembre <trans en=\"(December)\" ar=\"(ديسمبر)\" uk=\"(Грудень)\" fr=\"(Décembre)\"/>", "Agosto <trans en=\"(August)\" ar=\"(أغسطس)\" uk=\"(Серпень)\" fr=\"(Août)\"/>", "Febrero <trans en=\"(February)\" ar=\"(فبراير)\" uk=\"(Лютий)\" fr=\"(Février)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Si son las '8:45', decimos que son las nueve menos... <trans en="(If it is '8:45', we say it is nine to nine...)" ar="(إذا كانت الساعة 8:45 نقول أنها الساعة التاسعة إلى التاسعة...)" uk="(Якщо це "8:45", ми кажемо, що це дев'ять на дев'ять...)" fr="(S'il est '8h45', on dit qu'il est neuf heures moins neuf...)"/>`,
        options: ["cuarto <trans en=\"(fourth)\" ar=\"(رابعا)\" uk=\"(четвертий)\" fr=\"(quatrième)\"/>", "quince <trans en=\"(fifteen)\" ar=\"(خمسة عشر)\" uk=\"(п'ятнадцять)\" fr=\"(quinze)\"/>", "media <trans en=\"(average)\" ar=\"(متوسط)\" uk=\"(середній)\" fr=\"(moyen)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `¿Cuántos minutos tiene una hora? <trans en="(How many minutes are in an hour?)" ar="(كم دقيقة في الساعة؟)" uk="(Скільки хвилин у годині?)" fr="(Combien de minutes y a-t-il dans une heure ?)"/>`,
        options: ["Sesenta <trans en=\"(Sixty)\" ar=\"(ستين)\" uk=\"(Шістдесят)\" fr=\"(Soixante)\"/>", "Cien <trans en=\"(One hundred)\" ar=\"(مائة)\" uk=\"(Сто)\" fr=\"(Cent)\"/>", "Treinta <trans en=\"(Thirty)\" ar=\"(ثلاثون)\" uk=\"(Тридцять)\" fr=\"(Trente)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `¿Cuántos segundos tiene un minuto? <trans en="(How many seconds are in a minute?)" ar="(كم ثانية في الدقيقة؟)" uk="(Скільки секунд у хвилині?)" fr="(Combien de secondes compte une minute ?)"/>`,
        options: ["Sesenta <trans en=\"(Sixty)\" ar=\"(ستين)\" uk=\"(Шістдесят)\" fr=\"(Soixante)\"/>", "Diez <trans en=\"(Ten)\" ar=\"(عشرة)\" uk=\"(Десять)\" fr=\"(Dix)\"/>", "Cien <trans en=\"(One hundred)\" ar=\"(مائة)\" uk=\"(Сто)\" fr=\"(Cent)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `¿Qué día es hoy? (Extra) <trans en="(What day is today? (Bonus))" ar="(ما هو اليوم؟ (مكافأة))" uk="(Який сьогодні день? (Бонус))" fr="(Quel jour on est aujourd'hui ? (Prime))"/>`,
        options: ["Lunes <trans en=\"(Monday)\" ar=\"(الاثنين)\" uk=\"(Понеділок)\" fr=\"(Lundi)\"/>", "Enero <trans en=\"(January)\" ar=\"(يناير)\" uk=\"(Січень)\" fr=\"(Janvier)\"/>", "Mañana <trans en=\"(Tomorrow)\" ar=\"(غدا)\" uk=\"(Завтра)\" fr=\"(Demain)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-vocab-profesiones",
    topic: "Profesiones",
    title: "Vocabulario: Las Profesiones",
    level: "A1",
    category: "Vocabulario",
    description: "Aprende nombres de profesiones comunes como médico, profesor o cocinero.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    emoji: "💼",
    color: "#FCE8E8",
    vocabulary: [
        {
          word: 'El profesor / La profesora',
          translations: {
            en: 'Teacher',
            ar: 'المعلم / المعلمة',
            uk: 'Вчитель / вчителька',
            fr: 'Professeur'
          },
          emoji: '🧑‍🏫',
          color: '#E3EEF9'
        },
        {
          word: 'El médico / La médica',
          translations: {
            en: 'Doctor',
            ar: 'الطبيب / الطبيبة',
            uk: 'Лікар',
            fr: 'Médecin'
          },
          emoji: '👨‍⚕️',
          color: '#E2F3E7'
        },
        {
          word: 'El cocinero / La cocinera',
          translations: {
            en: 'Cook',
            ar: 'الطباخ / الطباخة',
            uk: 'Кухар',
            fr: 'Cuisinier'
          },
          emoji: '👨‍🍳',
          color: '#FFF4E5'
        },
        {
          word: 'El enfermero / La enfermera',
          translations: {
            en: 'Nurse',
            ar: 'الممرض / الممرضة',
            uk: 'Медбрат / медсестра',
            fr: 'Infirmier'
          },
          emoji: '🧑‍⚕️',
          color: '#E2F3E7'
        },
        {
          word: 'El ingeniero / La ingeniera',
          translations: {
            en: 'Engineer',
            ar: 'المهندس / المهندسة',
            uk: 'Інженер',
            fr: 'Ingénieur'
          },
          emoji: '👷',
          color: '#E3EEF9'
        },
        {
          word: 'El carpintero',
          translations: {
            en: 'Carpenter',
            ar: 'النجار',
            uk: 'Тесля',
            fr: 'Charpentier'
          },
          emoji: '🪚',
          color: '#FEFCBF'
        },
        {
          word: 'El electricista',
          translations: {
            en: 'Electrician',
            ar: 'كهربائي',
            uk: 'Електрик',
            fr: 'Électricien'
          },
          emoji: '⚡',
          color: '#FEFCBF'
        },
        {
          word: 'El fontanero / El plomero',
          translations: {
            en: 'Plumber',
            ar: 'سباك',
            uk: 'Сантехнік',
            fr: 'Plombier'
          },
          emoji: '🔧',
          color: '#FEFCBF'
        },
        {
          word: 'El pintor / La pintora',
          translations: {
            en: 'Painter',
            ar: 'الرسام / الرسامة',
            uk: 'Маляр / художник',
            fr: 'Peintre'
          },
          emoji: '🎨',
          color: '#FFF5F5'
        },
        {
          word: 'El policía / La mujer policía',
          translations: {
            en: 'Police officer',
            ar: 'الشرطي / الشرطية',
            uk: 'Поліцейський',
            fr: 'Policier'
          },
          emoji: '👮',
          color: '#E3EEF9'
        },
        {
          word: 'El bombero',
          translations: {
            en: 'Firefighter',
            ar: 'رجل الإطفاء',
            uk: 'Пожежник',
            fr: 'Pompier'
          },
          emoji: '👩‍🚒',
          color: '#FCE8E8'
        },
        {
          word: 'El camarero / La camarera',
          translations: {
            en: 'Waiter / Waitress',
            ar: 'النادل / النادلة',
            uk: 'Офіціант / офіціантка',
            fr: 'Serveur'
          },
          emoji: '🤵',
          color: '#EDF2F7'
        },
        {
          word: 'El peluquero / La peluquera',
          translations: {
            en: 'Hairdresser',
            ar: 'مصفف الشعر',
            uk: 'Перукар',
            fr: 'Coiffeur'
          },
          emoji: '💇',
          color: '#F3E8FF'
        },
        {
          word: 'El dentista / La dentista',
          translations: {
            en: 'Dentist',
            ar: 'طبيب الأسنان',
            uk: 'Стоматолог',
            fr: 'Dentiste'
          },
          emoji: '🦷',
          color: '#EBF8FF'
        },
        {
          word: 'El veterinario / La veterinaria',
          translations: {
            en: 'Veterinarian',
            ar: 'الطبيب البيطري',
            uk: 'Ветеринар',
            fr: 'Vétérinaire'
          },
          emoji: '🐶',
          color: '#E2F3E7'
        },
        {
          word: 'El mecánico / La mecánica',
          translations: {
            en: 'Mechanic',
            ar: 'ميكانيكي',
            uk: 'Механік',
            fr: 'Mécanicien'
          },
          emoji: '🚗',
          color: '#E2F3E7'
        },
        {
          word: 'El conductor / La conductora',
          translations: {
            en: 'Driver',
            ar: 'السائق / السائقة',
            uk: 'Водій',
            fr: 'Conducteur'
          },
          emoji: '🚗',
          color: '#FCE8E8'
        },
        {
          word: 'El agricultor / La agricultora',
          translations: {
            en: 'Farmer',
            ar: 'المزارع / المزارعة',
            uk: 'Фермер',
            fr: 'Agriculteur'
          },
          emoji: '🧑‍🌾',
          color: '#E2F3E7'
        },
        {
          word: 'El cartero',
          translations: {
            en: 'Mail carrier',
            ar: 'ساعي البريد',
            uk: 'Поштар',
            fr: 'Facteur'
          },
          emoji: '✉️',
          color: '#E3EEF9'
        },
        {
          word: 'El abogado / La abogada',
          translations: {
            en: 'Lawyer',
            ar: 'المحامي / المحامية',
            uk: 'Юрист / адвокат',
            fr: 'Avocat'
          },
          emoji: '💼',
          color: '#E3EEF9'
        },
        {
          word: 'El periodista / La periodista',
          translations: {
            en: 'Journalist',
            ar: 'صحفي / صحفية',
            uk: 'Журналіст',
            fr: 'Journaliste'
          },
          emoji: '🎤',
          color: '#EBF8FF'
        },
        {
          word: 'El escritor / La escritora',
          translations: {
            en: 'Writer',
            ar: 'الكاتب / الكاتبة',
            uk: 'Письменник',
            fr: 'Écrivain'
          },
          emoji: '✍️',
          color: '#E3EEF9'
        },
        {
          word: 'El actor / La actriz',
          translations: {
            en: 'Actor / Actress',
            ar: 'الممثل / الممثلة',
            uk: 'Актор / акторка',
            fr: 'Acteur'
          },
          emoji: '🎭',
          color: '#FFF5F5'
        },
        {
          word: 'El músico / La música',
          translations: {
            en: 'Musician',
            ar: 'الموسيقار / الموسيقارة',
            uk: 'Музикант',
            fr: 'Musicien'
          },
          emoji: '🎵',
          color: '#F3E8FF'
        },
        {
          word: 'El arquitecto / La arquitecta',
          translations: {
            en: 'Architect',
            ar: 'مهندس معماري',
            uk: 'Архітектор',
            fr: 'Architecte'
          },
          emoji: '📐',
          color: '#E3EEF9'
        },
        {
          word: 'El vendedor / La vendedora',
          translations: {
            en: 'Salesperson',
            ar: 'البائع / البائعة',
            uk: 'Продавець',
            fr: 'Vendeur'
          },
          emoji: '🛒',
          color: '#EBF8FF'
        },
        {
          word: 'El cajero / La cajera',
          translations: {
            en: 'Cashier',
            ar: 'أمين الصندوق',
            uk: 'Касир',
            fr: 'Caissier'
          },
          emoji: '🪙',
          color: '#EBF8FF'
        },
        {
          word: 'El científico / La científica',
          translations: {
            en: 'Scientist',
            ar: 'العالم / العالمة',
            uk: 'Вчений',
            fr: 'Scientifique'
          },
          emoji: '🔬',
          color: '#E2F3E7'
        },
        {
          word: 'El albañil',
          translations: {
            en: 'Bricklayer',
            ar: 'البناء',
            uk: 'Муляр',
            fr: 'Maçon'
          },
          emoji: '👷',
          color: '#FEFCBF'
        },
        {
          word: 'El electricista',
          translations: {
            en: 'Electrician',
            ar: 'كهربائي',
            uk: 'Електрик',
            fr: 'Électricien'
          },
          emoji: '⚡',
          color: '#FEFCBF'
        }
      ],
    content: `
## ¿A qué te dedicas?
Para hablar de nuestra profesión usamos el verbo SER.
*   **Soy** profesor. <trans en="(I am a teacher)" ar="(أنا معلم)" uk="(Я вчитель)" fr="(Je suis professeur)"/>
*   Ella **es** médica. <trans en="(She is a doctor)" ar="(هي طبيبة)" uk="(Вона лікар)" fr="(Elle est médecin)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: `La persona que hace la comida es el... <trans en="(The person who makes the food is the...)" ar="(الشخص الذي يصنع الطعام هو...)" uk="(Людина, яка готує їжу, є...)" fr="(La personne qui prépare la nourriture est la...)"/>`,
        options: ["Médico <trans en=\"(Doctor)\" ar=\"(دكتور)\" uk=\"(Лікар)\" fr=\"(Docteur)\"/>", "Profesor <trans en=\"(Professor)\" ar=\"(أستاذ)\" uk=\"(Професор)\" fr=\"(Professeur)\"/>", "Cocinero <trans en=\"(Cook)\" ar=\"(كوك)\" uk=\"(Кухар)\" fr=\"(Cuisiner)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: `La persona que enseña en la escuela es... <trans en="(The person who teaches at the school is...)" ar="(الشخص الذي يدرس في المدرسة هو ...)" uk="(У школі викладає...)" fr="(La personne qui enseigne à l'école est...)"/>`,
        options: ["Profesor / Profesora <trans en=\"(Teacher)\" ar=\"(المعلم)\" uk=\"(Учитель)\" fr=\"(Professeur)\"/>", "Médico <trans en=\"(Doctor)\" ar=\"(دكتور)\" uk=\"(Лікар)\" fr=\"(Docteur)\"/>", "Policía <trans en=\"(Police)\" ar=\"(الشرطة)\" uk=\"(Поліція)\" fr=\"(Police)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `La persona que cura a los enfermos es... <trans en="(The person who heals the sick is...)" ar="(الشخص الذي يشفي المرضى هو...)" uk="(Людина, яка зцілює хворих, це...)" fr="(Celui qui guérit les malades est...)"/>`,
        options: ["Médico / Doctor <trans en=\"(Doctor / Doctor)\" ar=\"(دكتور/ دكتور)\" uk=\"(Лікар / Доктор)\" fr=\"(Docteur / Docteur)\"/>", "Bombero <trans en=\"(Firefighter)\" ar=\"(رجل إطفاء)\" uk=\"(Пожежний)\" fr=\"(Pompier)\"/>", "Cocinero <trans en=\"(Cook)\" ar=\"(كوك)\" uk=\"(Кухар)\" fr=\"(Cuisiner)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `La persona que hace pan es... <trans en="(The person who makes bread is...)" ar="(الشخص الذي يصنع الخبز هو...)" uk="(Людина, яка готує хліб, це...)" fr="(La personne qui fait le pain est...)"/>`,
        options: ["Panadero <trans en=\"(Baker)\" ar=\"(بيكر)\" uk=\"(Пекар)\" fr=\"(Boulanger)\"/>", "Carpintero <trans en=\"(Carpenter)\" ar=\"(نجار)\" uk=\"(Столяр)\" fr=\"(Charpentier)\"/>", "Peluquero <trans en=\"(Hairdresser)\" ar=\"(كوافير)\" uk=\"(Перукар)\" fr=\"(Coiffeur)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `La persona que apaga el fuego es... <trans en="(The person who puts out the fire is...)" ar="(الذي يطفئ النار هو...)" uk="(Людина, яка гасить пожежу, це...)" fr="(La personne qui éteint le feu est...)"/>`,
        options: ["Bombero <trans en=\"(Firefighter)\" ar=\"(رجل إطفاء)\" uk=\"(Пожежний)\" fr=\"(Pompier)\"/>", "Policía <trans en=\"(Police)\" ar=\"(الشرطة)\" uk=\"(Поліція)\" fr=\"(Police)\"/>", "Cartero <trans en=\"(Postman)\" ar=\"(ساعي البريد)\" uk=\"(Листоноша)\" fr=\"(Facteur)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `La persona que corta el pelo es... <trans en="(The person who cuts the hair is...)" ar="(الشخص الذي يقص الشعر هو...)" uk="(Людина, яка стриже волосся - це...)" fr="(La personne qui coupe les cheveux est...)"/>`,
        options: ["Peluquero <trans en=\"(Hairdresser)\" ar=\"(كوافير)\" uk=\"(Перукар)\" fr=\"(Coiffeur)\"/>", "Abogado <trans en=\"(Lawyer)\" ar=\"(محامي)\" uk=\"(Юрист)\" fr=\"(Avocat)\"/>", "Mecánico <trans en=\"(Mechanic)\" ar=\"(ميكانيكي)\" uk=\"(Механік)\" fr=\"(Mécanicien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `La persona que prepara la comida en un restaurante es... <trans en="(The person who prepares food in a restaurant is...)" ar="(الشخص الذي يعد الطعام في المطعم هو...)" uk="(Людина, яка готує їжу в ресторані, це...)" fr="(La personne qui prépare les plats dans un restaurant est...)"/>`,
        options: ["Cocinero <trans en=\"(Cook)\" ar=\"(كوك)\" uk=\"(Кухар)\" fr=\"(Cuisiner)\"/>", "Camarero <trans en=\"(Waiter)\" ar=\"(النادل)\" uk=\"(Офіціант)\" fr=\"(Serveur)\"/>", "Panadero <trans en=\"(Baker)\" ar=\"(بيكر)\" uk=\"(Пекар)\" fr=\"(Boulanger)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `La persona que sirve la comida en un restaurante es... <trans en="(The person who serves food in a restaurant is...)" ar="(الشخص الذي يقدم الطعام في المطعم هو...)" uk="(Людина, яка подає їжу в ресторані, це...)" fr="(La personne qui sert de la nourriture dans un restaurant est...)"/>`,
        options: ["Camarero <trans en=\"(Waiter)\" ar=\"(النادل)\" uk=\"(Офіціант)\" fr=\"(Serveur)\"/>", "Cocinero <trans en=\"(Cook)\" ar=\"(كوك)\" uk=\"(Кухар)\" fr=\"(Cuisiner)\"/>", "Policía <trans en=\"(Police)\" ar=\"(الشرطة)\" uk=\"(Поліція)\" fr=\"(Police)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `La persona que arregla los coches es... <trans en="(The person who fixes the cars is...)" ar="(الشخص الذي يصلح السيارات هو...)" uk="(Людина, яка ремонтує машини, це...)" fr="(La personne qui répare les voitures est...)"/>`,
        options: ["Mecánico <trans en=\"(Mechanic)\" ar=\"(ميكانيكي)\" uk=\"(Механік)\" fr=\"(Mécanicien)\"/>", "Carpintero <trans en=\"(Carpenter)\" ar=\"(نجار)\" uk=\"(Столяр)\" fr=\"(Charpentier)\"/>", "Médico <trans en=\"(Doctor)\" ar=\"(دكتور)\" uk=\"(Лікар)\" fr=\"(Docteur)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `La persona que defiende a alguien en un juicio es... <trans en="(The person who defends someone in a trial is...)" ar="(الشخص الذي يدافع عن شخص ما في المحاكمة هو...)" uk="(Людина, яка захищає когось у суді, є...)" fr="(La personne qui défend quelqu'un dans un procès est...)"/>`,
        options: ["Abogado <trans en=\"(Lawyer)\" ar=\"(محامي)\" uk=\"(Юрист)\" fr=\"(Avocat)\"/>", "Juez <trans en=\"(Judge)\" ar=\"(القاضي)\" uk=\"(Суддя)\" fr=\"(Juge)\"/>", "Policía <trans en=\"(Police)\" ar=\"(الشرطة)\" uk=\"(Поліція)\" fr=\"(Police)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `La persona que trae las cartas a casa es... <trans en="(The person who brings the letters home is...)" ar="(الشخص الذي يحضر الرسائل إلى المنزل هو...)" uk="(Людина, яка приносить листи додому, це...)" fr="(La personne qui ramène les lettres à la maison est...)"/>`,
        options: ["Cartero <trans en=\"(Postman)\" ar=\"(ساعي البريد)\" uk=\"(Листоноша)\" fr=\"(Facteur)\"/>", "Bombero <trans en=\"(Firefighter)\" ar=\"(رجل إطفاء)\" uk=\"(Пожежний)\" fr=\"(Pompier)\"/>", "Panadero <trans en=\"(Baker)\" ar=\"(بيكر)\" uk=\"(Пекар)\" fr=\"(Boulanger)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `La persona que construye casas es... <trans en="(The person who builds houses is...)" ar="(من يبني البيوت هو...)" uk="(Людина, яка будує будинки, це...)" fr="(La personne qui construit des maisons est...)"/>`,
        options: ["Albañil / Constructor <trans en=\"(Mason / Builder)\" ar=\"(ميسون/باني)\" uk=\"(Муляр / Будівельник)\" fr=\"(Maçon / Constructeur)\"/>", "Mecánico <trans en=\"(Mechanic)\" ar=\"(ميكانيكي)\" uk=\"(Механік)\" fr=\"(Mécanicien)\"/>", "Peluquero <trans en=\"(Hairdresser)\" ar=\"(كوافير)\" uk=\"(Перукар)\" fr=\"(Coiffeur)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `La persona que diseña edificios es... <trans en="(The person who designs buildings is...)" ar="(الشخص الذي يصمم المباني هو...)" uk="(Людина, яка проектує будівлі, це...)" fr="(La personne qui conçoit les bâtiments est...)"/>`,
        options: ["Arquitecto <trans en=\"(Architect)\" ar=\"(مهندس معماري)\" uk=\"(Архітектор)\" fr=\"(Architecte)\"/>", "Abogado <trans en=\"(Lawyer)\" ar=\"(محامي)\" uk=\"(Юрист)\" fr=\"(Avocat)\"/>", "Médico <trans en=\"(Doctor)\" ar=\"(دكتور)\" uk=\"(Лікар)\" fr=\"(Docteur)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `La persona que toca música es... <trans en="(The person who plays music is...)" ar="(الشخص الذي يعزف الموسيقى هو...)" uk="(Людина, яка грає музику, це...)" fr="(La personne qui joue de la musique est...)"/>`,
        options: ["Músico <trans en=\"(Musician)\" ar=\"(موسيقي)\" uk=\"(Музикант)\" fr=\"(Musicien)\"/>", "Actor <trans en=\"(Actor)\" ar=\"(ممثل)\" uk=\"(Актор)\" fr=\"(Acteur)\"/>", "Pintor <trans en=\"(Painter)\" ar=\"(رسام)\" uk=\"(Художник)\" fr=\"(Peintre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `La persona que actúa en películas es... <trans en="(The person who acts in movies is...)" ar="(الشخص الذي يمثل في الأفلام هو...)" uk="(Людина, яка знімається в кіно, це...)" fr="(La personne qui joue dans les films est...)"/>`,
        options: ["Actor / Actriz <trans en=\"(Actor/Actress)\" ar=\"(ممثل/ممثلة)\" uk=\"(Актор/Актриса)\" fr=\"(Acteur/Actrice)\"/>", "Cantante <trans en=\"(Singer)\" ar=\"(مغني)\" uk=\"(Співак)\" fr=\"(Chanteur)\"/>", "Escritor <trans en=\"(Writer)\" ar=\"(كاتب)\" uk=\"(Письменник)\" fr=\"(Écrivain)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `La persona que escribe libros es... <trans en="(The person who writes books is...)" ar="(الشخص الذي يكتب الكتب هو...)" uk="(Людина, яка пише книги, це...)" fr="(La personne qui écrit des livres est...)"/>`,
        options: ["Escritor <trans en=\"(Writer)\" ar=\"(كاتب)\" uk=\"(Письменник)\" fr=\"(Écrivain)\"/>", "Pintor <trans en=\"(Painter)\" ar=\"(رسام)\" uk=\"(Художник)\" fr=\"(Peintre)\"/>", "Periodista <trans en=\"(Journalist)\" ar=\"(صحفي)\" uk=\"(Журналіст)\" fr=\"(Journaliste)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `La persona que informa de las noticias es... <trans en="(The person who reports the news is...)" ar="(من ينقل الخبر هو...)" uk="(Людина, яка повідомляє новини, це...)" fr="(La personne qui rapporte la nouvelle est...)"/>`,
        options: ["Periodista <trans en=\"(Journalist)\" ar=\"(صحفي)\" uk=\"(Журналіст)\" fr=\"(Journaliste)\"/>", "Actor <trans en=\"(Actor)\" ar=\"(ممثل)\" uk=\"(Актор)\" fr=\"(Acteur)\"/>", "Músico <trans en=\"(Musician)\" ar=\"(موسيقي)\" uk=\"(Музикант)\" fr=\"(Musicien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `La persona que trabaja en una tienda vendiendo es... <trans en="(The person who works in a store selling is...)" ar="(الشخص الذي يعمل في محل بيع هو...)" uk="(Людина, яка працює в магазині з продажу, це...)" fr="(La personne qui travaille dans un magasin vendant est...)"/>`,
        options: ["Dependiente <trans en=\"(Dependent)\" ar=\"(معال)\" uk=\"(Залежний)\" fr=\"(Dépendant)\"/>", "Camarero <trans en=\"(Waiter)\" ar=\"(النادل)\" uk=\"(Офіціант)\" fr=\"(Serveur)\"/>", "Cartero <trans en=\"(Postman)\" ar=\"(ساعي البريد)\" uk=\"(Листоноша)\" fr=\"(Facteur)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `La persona que enseña en la escuela es... (Extra) <trans en="(The person who teaches at the school is... (Extra))" ar="(الشخص الذي يقوم بالتدريس في المدرسة هو... (إضافي))" uk="(Людина, яка викладає в школі... (Додатково))" fr="(La personne qui enseigne à l'école est... (Extra))"/>`,
        options: ["Profesor / Profesora <trans en=\"(Teacher)\" ar=\"(المعلم)\" uk=\"(Учитель)\" fr=\"(Professeur)\"/>", "Médico <trans en=\"(Doctor)\" ar=\"(دكتور)\" uk=\"(Лікар)\" fr=\"(Docteur)\"/>", "Policía <trans en=\"(Police)\" ar=\"(الشرطة)\" uk=\"(Поліція)\" fr=\"(Police)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `La persona que cura a los enfermos es... (Extra) <trans en="(The person who heals the sick is... (Extra))" ar="(الشخص الذي يشفي المرضى هو... (إضافة))" uk="(Людина, яка зцілює хворих, це... (Додатково))" fr="(La personne qui guérit les malades est... (Extra))"/>`,
        options: ["Médico / Doctor <trans en=\"(Doctor / Doctor)\" ar=\"(دكتور/ دكتور)\" uk=\"(Лікар / Доктор)\" fr=\"(Docteur / Docteur)\"/>", "Bombero <trans en=\"(Firefighter)\" ar=\"(رجل إطفاء)\" uk=\"(Пожежний)\" fr=\"(Pompier)\"/>", "Cocinero <trans en=\"(Cook)\" ar=\"(كوك)\" uk=\"(Кухар)\" fr=\"(Cuisiner)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-vocab-familia",
    topic: "Familia",
    title: "La Familia y Descripción Física",
    level: "A1",
    category: "Vocabulario",
    description: "Habla de tu familia (madre, padre) y describe cómo son (alto, bajo).",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80",
    emoji: "👨‍👩‍👦",
    color: "#E2F3E7",
    vocabulary: [
        {
          word: 'El padre',
          translations: {
            en: 'Father',
            ar: 'أب',
            uk: 'Батько',
            fr: 'Père'
          },
          emoji: '👨',
          color: '#E2F3E7'
        },
        {
          word: 'La madre',
          translations: {
            en: 'Mother',
            ar: 'أم',
            uk: 'Мати',
            fr: 'Mère'
          },
          emoji: '👩',
          color: '#FFF5F5'
        },
        {
          word: 'El hermano',
          translations: {
            en: 'Brother',
            ar: 'أخ',
            uk: 'Брат',
            fr: 'Frère'
          },
          emoji: '👦',
          color: '#E3EEF9'
        },
        {
          word: 'La hermana',
          translations: {
            en: 'Sister',
            ar: 'أخت',
            uk: 'Сестра',
            fr: 'Sœur'
          },
          emoji: '👧',
          color: '#FCE8E8'
        },
        {
          word: 'El hijo',
          translations: {
            en: 'Son',
            ar: 'ابن',
            uk: 'Син',
            fr: 'Fils'
          },
          emoji: '👶',
          color: '#E2F3E7'
        },
        {
          word: 'La hija',
          translations: {
            en: 'Daughter',
            ar: 'ابنة',
            uk: 'Донька',
            fr: 'Fille'
          },
          emoji: '👶',
          color: '#FFF5F5'
        },
        {
          word: 'El abuelo',
          translations: {
            en: 'Grandfather',
            ar: 'جد',
            uk: 'Дідусь',
            fr: 'Grand-père'
          },
          emoji: '👴',
          color: '#FEFCBF'
        },
        {
          word: 'La abuela',
          translations: {
            en: 'Grandmother',
            ar: 'جدة',
            uk: 'Бабуся',
            fr: 'Grand-mère'
          },
          emoji: '👵',
          color: '#FEFCBF'
        },
        {
          word: 'El tío',
          translations: {
            en: 'Uncle',
            ar: 'عم / خال',
            uk: 'Дядько',
            fr: 'Oncle'
          },
          emoji: '👨',
          color: '#FFF4E5'
        },
        {
          word: 'La tía',
          translations: {
            en: 'Aunt',
            ar: 'عمة / خالة',
            uk: 'Тітка',
            fr: 'Tante'
          },
          emoji: '👩',
          color: '#FFF4E5'
        },
        {
          word: 'El primo',
          translations: {
            en: 'Cousin (male)',
            ar: 'ابن العم / الخال',
            uk: 'Двоюрідний брат',
            fr: 'Cousin'
          },
          emoji: '👦',
          color: '#FFF4E5'
        },
        {
          word: 'La prima',
          translations: {
            en: 'Cousin (female)',
            ar: 'ابنة العم / الخالة',
            uk: 'Двоюрідна сестра',
            fr: 'Cousine'
          },
          emoji: '👧',
          color: '#FFF4E5'
        },
        {
          word: 'El sobrino',
          translations: {
            en: 'Nephew',
            ar: 'ابن الأخ / الأخت',
            uk: 'Племінник',
            fr: 'Neveu'
          },
          emoji: '👦',
          color: '#F3E8FF'
        },
        {
          word: 'La sobrina',
          translations: {
            en: 'Niece',
            ar: 'ابنة الأخ / الأخت',
            uk: 'Племінниця',
            fr: 'Nièce'
          },
          emoji: '👧',
          color: '#F3E8FF'
        },
        {
          word: 'El nieto',
          translations: {
            en: 'Grandson',
            ar: 'حفيد',
            uk: 'Онук',
            fr: 'Petit-fils'
          },
          emoji: '👶',
          color: '#FEFCBF'
        },
        {
          word: 'La nieta',
          translations: {
            en: 'Granddaughter',
            ar: 'حفيدة',
            uk: 'Онука',
            fr: 'Petite-fille'
          },
          emoji: '👶',
          color: '#FEFCBF'
        },
        {
          word: 'El esposo / El marido',
          translations: {
            en: 'Husband',
            ar: 'زوج',
            uk: 'Чоловік (у шлюбі)',
            fr: 'Mari'
          },
          emoji: '👨',
          color: '#E2F3E7'
        },
        {
          word: 'La esposa / La mujer',
          translations: {
            en: 'Wife',
            ar: 'زوجة',
            uk: 'Дружина',
            fr: 'Épouse'
          },
          emoji: '👩',
          color: '#FFF5F5'
        },
        {
          word: 'El cuñado',
          translations: {
            en: 'Brother-in-law',
            ar: 'صهر / شقيق الزوجة',
            uk: 'Швагро / свояк',
            fr: 'Beau-frère'
          },
          emoji: '👨',
          color: '#EDF2F7'
        },
        {
          word: 'La cuñada',
          translations: {
            en: 'Sister-in-law',
            ar: 'شقيقة الزوجة',
            uk: 'Своячка / зовиця',
            fr: 'Belle-sœur'
          },
          emoji: '👩',
          color: '#EDF2F7'
        },
        {
          word: 'El suegro',
          translations: {
            en: 'Father-in-law',
            ar: 'حما',
            uk: 'Тесть / свекор',
            fr: 'Beau-père'
          },
          emoji: '👴',
          color: '#EDF2F7'
        },
        {
          word: 'La suegra',
          translations: {
            en: 'Mother-in-law',
            ar: 'حмаة',
            uk: 'Теща / свекруха',
            fr: 'Belle-mère'
          },
          emoji: '👵',
          color: '#EDF2F7'
        },
        {
          word: 'El yerno',
          translations: {
            en: 'Son-in-law',
            ar: 'صهر / زوج الابنة',
            uk: 'Зять',
            fr: 'Gendre'
          },
          emoji: '👨',
          color: '#EDF2F7'
        },
        {
          word: 'La nuera',
          translations: {
            en: 'Daughter-in-law',
            ar: 'كنة / زوجة الابن',
            uk: 'Невістка',
            fr: 'Belle-fille'
          },
          emoji: '👩',
          color: '#EDF2F7'
        },
        {
          word: 'El padrastro',
          translations: {
            en: 'Stepfather',
            ar: 'زوج الأم',
            uk: 'Вітчим',
            fr: 'Beau-père'
          },
          emoji: '👨',
          color: '#E3EEF9'
        },
        {
          word: 'La madrastra',
          translations: {
            en: 'Stepmother',
            ar: 'زوجة الأب',
            uk: 'Мачуха',
            fr: 'Belle-mère'
          },
          emoji: '👩',
          color: '#FFF5F5'
        },
        {
          word: 'El hermanastro',
          translations: {
            en: 'Stepbrother',
            ar: 'أخ غير شقيق',
            uk: 'Зведений брат',
            fr: 'Demi-frère'
          },
          emoji: '👦',
          color: '#E3EEF9'
        },
        {
          word: 'La hermanastra',
          translations: {
            en: 'Stepsister',
            ar: 'أخت غير شقيقة',
            uk: 'Зведена сестра',
            fr: 'Demi-sœur'
          },
          emoji: '👧',
          color: '#FCE8E8'
        },
        {
          word: 'Alto / Alta',
          translations: {
            en: 'Tall',
            ar: 'طويل',
            uk: 'Високий',
            fr: 'Grand'
          },
          emoji: '🧍',
          color: '#EBF8FF'
        },
        {
          word: 'Bajo / Baja',
          translations: {
            en: 'Short',
            ar: 'قصير',
            uk: 'Низький',
            fr: 'Petit'
          },
          emoji: '🧍',
          color: '#EBF8FF'
        }
      ],
    content: `
## Mi Familia
*   Mi mamá es **la madre**.
*   Mi papá es **el padre**.
*   Los hijos son **los hermanos**.

## Descripciones Físicas
Usamos el verbo SER para describir:
*   Mi hermano **es alto**. (Masculino)
*   Mi hermana **es alta**. (Femenina)
    `,
    exercises: [
      {
        id: "ex1",
        question: `El papá en español se dice también... <trans en="(Dad in Spanish is also said...)" ar="(يُقال "أبي" بالإسبانية أيضًا...)" uk="(Тато іспанською також кажуть...)" fr="(Papa en espagnol se dit aussi...)"/>`,
        options: ["El padre <trans en=\"(The father)\" ar=\"(الأب)\" uk=\"(Батько)\" fr=\"(Le père)\"/>", "El hermano <trans en=\"(The brother)\" ar=\"(الأخ)\" uk=\"(Брат)\" fr=\"(Le frère)\"/>", "El abuelo <trans en=\"(Grandfather)\" ar=\"(جد)\" uk=\"(Дід)\" fr=\"(Grand-père)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: `Para decir que tu hermana tiene mucha altura dices: Mi hermana es... <trans en="(To say that your sister is very tall you say: My sister is...)" ar="(لكي تقول أن أختك طويلة جداً تقول: أختي...)" uk="(Щоб сказати, що твоя сестра дуже висока, ти скажеш: Моя сестра...)" fr="(Pour dire que ta sœur est très grande tu dis : Ma sœur est...)"/>`,
        options: ["alta <trans en=\"(high)\" ar=\"(عالية)\" uk=\"(висока)\" fr=\"(élevé)\"/>", "alto <trans en=\"(high)\" ar=\"(عالية)\" uk=\"(висока)\" fr=\"(élevé)\"/>", "baja <trans en=\"(low)\" ar=\"(منخفض)\" uk=\"(низький)\" fr=\"(faible)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `El padre de mi padre es mi... <trans en="(My father's father is my...)" ar="(والد والدي هو ...)" uk="(Батько мого батька - мій...)" fr="(Le père de mon père est mon...)"/>`,
        options: ["Abuelo <trans en=\"(Grandfather)\" ar=\"(جد)\" uk=\"(Дід)\" fr=\"(Grand-père)\"/>", "Tío <trans en=\"(Uncle)\" ar=\"(عم)\" uk=\"(Дядько)\" fr=\"(Oncle)\"/>", "Hermano <trans en=\"(Brother)\" ar=\"(أخي)\" uk=\"(Брате)\" fr=\"(Frère)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `La madre de mi madre es mi... <trans en="(My mother's mother is my...)" ar="(أم أمي هي...)" uk="(Мама моєї мами моя...)" fr="(La mère de ma mère est ma...)"/>`,
        options: ["Abuela <trans en=\"(Grandma)\" ar=\"(الجدة)\" uk=\"(Бабуся)\" fr=\"(Grand-mère)\"/>", "Tía <trans en=\"(Aunt)\" ar=\"(عمة)\" uk=\"(Тітка)\" fr=\"(Tante)\"/>", "Prima <trans en=\"(Premium)\" ar=\"(قسط)\" uk=\"(Преміум)\" fr=\"(Prime)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `El hermano de mi padre es mi... <trans en="(My father's brother is my...)" ar="(أخي والدي هو ...)" uk="(Батьків брат мій...)" fr="(Le frère de mon père est mon...)"/>`,
        options: ["Tío <trans en=\"(Uncle)\" ar=\"(عم)\" uk=\"(Дядько)\" fr=\"(Oncle)\"/>", "Primo <trans en=\"(Cousin)\" ar=\"(ابن عم)\" uk=\"(Двоюрідний брат)\" fr=\"(Cousine)\"/>", "Abuelo <trans en=\"(Grandfather)\" ar=\"(جد)\" uk=\"(Дід)\" fr=\"(Grand-père)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `La hermana de mi madre es mi... <trans en="(My mother's sister is my...)" ar="(أخت أمي هي...)" uk="(Мамина сестра моя...)" fr="(La sœur de ma mère est ma...)"/>`,
        options: ["Tía <trans en=\"(Aunt)\" ar=\"(عمة)\" uk=\"(Тітка)\" fr=\"(Tante)\"/>", "Prima <trans en=\"(Premium)\" ar=\"(قسط)\" uk=\"(Преміум)\" fr=\"(Prime)\"/>", "Abuela <trans en=\"(Grandma)\" ar=\"(الجدة)\" uk=\"(Бабуся)\" fr=\"(Grand-mère)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `El hijo de mi tío es mi... <trans en="(My uncle's son is my...)" ar="(ابن عمي هو ...)" uk="(Дядьків син мій...)" fr="(Le fils de mon oncle est mon...)"/>`,
        options: ["Primo <trans en=\"(Cousin)\" ar=\"(ابن عم)\" uk=\"(Двоюрідний брат)\" fr=\"(Cousine)\"/>", "Hermano <trans en=\"(Brother)\" ar=\"(أخي)\" uk=\"(Брате)\" fr=\"(Frère)\"/>", "Sobrino <trans en=\"(Nephew)\" ar=\"(ابن أخ)\" uk=\"(Племінник)\" fr=\"(Neveu)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `El hijo de mi hermano es mi... <trans en="(My brother's son is my...)" ar="(ابن أخي هو...)" uk="(Син мого брата - мій...)" fr="(Le fils de mon frère est mon...)"/>`,
        options: ["Sobrino <trans en=\"(Nephew)\" ar=\"(ابن أخ)\" uk=\"(Племінник)\" fr=\"(Neveu)\"/>", "Primo <trans en=\"(Cousin)\" ar=\"(ابن عم)\" uk=\"(Двоюрідний брат)\" fr=\"(Cousine)\"/>", "Tío <trans en=\"(Uncle)\" ar=\"(عم)\" uk=\"(Дядько)\" fr=\"(Oncle)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `La hija de mi hermana es mi... <trans en="(My sister's daughter is my...)" ar="(بنت أختي ...)" uk="(Дочка моєї сестри моя...)" fr="(La fille de ma sœur est ma...)"/>`,
        options: ["Sobrina <trans en=\"(Niece)\" ar=\"(ابنة)\" uk=\"(Племінниця)\" fr=\"(Nièce)\"/>", "Prima <trans en=\"(Premium)\" ar=\"(قسط)\" uk=\"(Преміум)\" fr=\"(Prime)\"/>", "Tía <trans en=\"(Aunt)\" ar=\"(عمة)\" uk=\"(Тітка)\" fr=\"(Tante)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Mi padre y mi madre son mis... <trans en="(My father and my mother are my...)" ar="(أبي وأمي هما...)" uk="(Мій батько і моя мати - це мої...)" fr="(Mon père et ma mère sont mes...)"/>`,
        options: ["Padres <trans en=\"(Parents)\" ar=\"(الوالدين)\" uk=\"(Батьки)\" fr=\"(Parents)\"/>", "Abuelos <trans en=\"(Grandparents)\" ar=\"(الأجداد)\" uk=\"(Дідусь і бабуся)\" fr=\"(Grands-parents)\"/>", "Tíos <trans en=\"(Uncles)\" ar=\"(أعمام)\" uk=\"(Дядьки)\" fr=\"(Oncles)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `El marido de mi madre es mi... <trans en="(My mother's husband is my...)" ar="(زوج أمي هو...)" uk="(Чоловік моєї мами - мій...)" fr="(Le mari de ma mère est mon...)"/>`,
        options: ["Padre <trans en=\"(Father)\" ar=\"(الأب)\" uk=\"(Батько)\" fr=\"(Père)\"/>", "Tío <trans en=\"(Uncle)\" ar=\"(عم)\" uk=\"(Дядько)\" fr=\"(Oncle)\"/>", "Abuelo <trans en=\"(Grandfather)\" ar=\"(جد)\" uk=\"(Дід)\" fr=\"(Grand-père)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `La mujer de mi padre es mi... <trans en="(My father's wife is my...)" ar="(زوجة أبي هي...)" uk="(Дружина мого батька - моя...)" fr="(La femme de mon père est ma...)"/>`,
        options: ["Madre <trans en=\"(Mother)\" ar=\"(الأم)\" uk=\"(Мати)\" fr=\"(Mère)\"/>", "Tía <trans en=\"(Aunt)\" ar=\"(عمة)\" uk=\"(Тітка)\" fr=\"(Tante)\"/>", "Abuela <trans en=\"(Grandma)\" ar=\"(الجدة)\" uk=\"(Бабуся)\" fr=\"(Grand-mère)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Yo soy el ___ de mis padres. <trans en="(I am the ___ of my parents.)" ar="(أنا ___ والدي.)" uk="(Я ___ моїх батьків.)" fr="(Je suis le ___ de mes parents.)"/>`,
        options: ["Hijo <trans en=\"(Son)\" ar=\"(الابن)\" uk=\"(Син)\" fr=\"(Fils)\"/>", "Sobrino <trans en=\"(Nephew)\" ar=\"(ابن أخ)\" uk=\"(Племінник)\" fr=\"(Neveu)\"/>", "Nieto <trans en=\"(Grandson)\" ar=\"(حفيد)\" uk=\"(Онук)\" fr=\"(Petit-fils)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Yo soy el ___ de mis abuelos. <trans en="(I am the ___ of my grandparents.)" ar="(أنا ___ أجدادي.)" uk="(Я ___ моїх дідуся та бабусі.)" fr="(Je suis le ___ de mes grands-parents.)"/>`,
        options: ["Nieto <trans en=\"(Grandson)\" ar=\"(حفيد)\" uk=\"(Онук)\" fr=\"(Petit-fils)\"/>", "Hijo <trans en=\"(Son)\" ar=\"(الابن)\" uk=\"(Син)\" fr=\"(Fils)\"/>", "Sobrino <trans en=\"(Nephew)\" ar=\"(ابن أخ)\" uk=\"(Племінник)\" fr=\"(Neveu)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `El hermano de mi marido es mi... <trans en="(My husband's brother is my...)" ar="(أخ زوجي هو ...)" uk="(Брат мого чоловіка мій...)" fr="(Le frère de mon mari est mon...)"/>`,
        options: ["Cuñado <trans en=\"(Brother-in-law)\" ar=\"(أخي)\" uk=\"(Свягер)\" fr=\"(Beau-frère)\"/>", "Suegro <trans en=\"(Father-in-law)\" ar=\"(حمو)\" uk=\"(Свекор)\" fr=\"(Beau-père)\"/>", "Yerno <trans en=\"(Son-in-law)\" ar=\"(صهر)\" uk=\"(Зять)\" fr=\"(Gendre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `El padre de mi mujer es mi... <trans en="(My wife's father is my...)" ar="(والد زوجتي هو...)" uk="(Батько моєї дружини - мій...)" fr="(Le père de ma femme est mon...)"/>`,
        options: ["Suegro <trans en=\"(Father-in-law)\" ar=\"(حمو)\" uk=\"(Свекор)\" fr=\"(Beau-père)\"/>", "Cuñado <trans en=\"(Brother-in-law)\" ar=\"(أخي)\" uk=\"(Свягер)\" fr=\"(Beau-frère)\"/>", "Yerno <trans en=\"(Son-in-law)\" ar=\"(صهر)\" uk=\"(Зять)\" fr=\"(Gendre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Si no tengo hermanos, soy hijo... <trans en="(If I don't have brothers, I'm a son...)" ar="(إذا لم يكن لدي إخوة فأنا ابن...)" uk="(Якщо в мене немає братів, я син...)" fr="(Si je n'ai pas de frères, je suis un fils...)"/>`,
        options: ["Único <trans en=\"(Unique)\" ar=\"(فريدة من نوعها)\" uk=\"(Унікальний)\" fr=\"(Unique)\"/>", "Solo <trans en=\"(Only)\" ar=\"(فقط)\" uk=\"(Тільки)\" fr=\"(Seulement)\"/>", "Primero <trans en=\"(First)\" ar=\"(أولا)\" uk=\"(Перший)\" fr=\"(D'abord)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Los hijos que nacen el mismo día de la misma madre son... <trans en="(Children born on the same day to the same mother are...)" ar="(الأطفال الذين يولدون في نفس اليوم من نفس الأم هم...)" uk="(Діти, народжені в один день від однієї матері, є...)" fr="(Les enfants nés le même jour de la même mère sont...)"/>`,
        options: ["Gemelos o Mellizos <trans en=\"(Twins or Twins)\" ar=\"(التوائم أو التوائم)\" uk=\"(Близнюки або Близнюки)\" fr=\"(Jumeaux ou jumeaux)\"/>", "Primos <trans en=\"(Cousins)\" ar=\"(أبناء العمومة)\" uk=\"(Кузени)\" fr=\"(Cousines)\"/>", "Sobrinos <trans en=\"(Nephews)\" ar=\"(أبناء الإخوة)\" uk=\"(Племінники)\" fr=\"(Neveux)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `La persona con la que me caso es mi... <trans en="(The person I am marrying is my...)" ar="(الشخص الذي سأتزوجه هو...)" uk="(Людина, з якою я виходжу заміж, моя...)" fr="(La personne que j'épouse est ma...)"/>`,
        options: ["Marido / Mujer <trans en=\"(Husband/Wife)\" ar=\"(الزوج/الزوجة)\" uk=\"(Чоловік/Дружина)\" fr=\"(Mari/Femme)\"/>", "Hermano <trans en=\"(Brother)\" ar=\"(أخي)\" uk=\"(Брате)\" fr=\"(Frère)\"/>", "Primo <trans en=\"(Cousin)\" ar=\"(ابن عم)\" uk=\"(Двоюрідний брат)\" fr=\"(Cousine)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `El padre de mi padre es mi... (Extra) <trans en="(My father's father is my... (Extra))" ar="(والد والدي هو... (إضافي))" uk="(Батько мого батька - мій... (Додатково))" fr="(Le père de mon père est mon... (Extra))"/>`,
        options: ["Abuelo <trans en=\"(Grandfather)\" ar=\"(جد)\" uk=\"(Дід)\" fr=\"(Grand-père)\"/>", "Tío <trans en=\"(Uncle)\" ar=\"(عم)\" uk=\"(Дядько)\" fr=\"(Oncle)\"/>", "Hermano <trans en=\"(Brother)\" ar=\"(أخي)\" uk=\"(Брате)\" fr=\"(Frère)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-gram-preguntas",
    topic: "Preguntas",
    title: "Preguntas Simples (Qué, Quién, Dónde)",
    level: "A1",
    category: "Gramática",
    description: "Aprende a formular preguntas básicas para pedir información.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1678048604398-f42dda6997bd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    emoji: "❓",
    color: "#FFF4E5",
    vocabulary: [
        {
          word: '¿Qué?',
          translations: {
            en: 'What?',
            ar: 'ماذا؟',
            uk: 'Що?',
            fr: 'Quoi / Que ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Quién?',
          translations: {
            en: 'Who?',
            ar: 'من؟',
            uk: 'Хто?',
            fr: 'Qui ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cómo?',
          translations: {
            en: 'How?',
            ar: 'كيف؟',
            uk: 'Як?',
            fr: 'Comment ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Dónde?',
          translations: {
            en: 'Where?',
            ar: 'أين؟',
            uk: 'Де?',
            fr: 'Où ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cuándo?',
          translations: {
            en: 'When?',
            ar: 'متى؟',
            uk: 'Коли?',
            fr: 'Quand ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Por qué?',
          translations: {
            en: 'Why?',
            ar: 'لماذا؟',
            uk: 'Чому?',
            fr: 'Pourquoi ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cuál?',
          translations: {
            en: 'Which?',
            ar: 'أي؟',
            uk: 'Який? / Котрий?',
            fr: 'Lequel / Laquelle ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cuáles?',
          translations: {
            en: 'Which ones?',
            ar: 'أي (للجمع)؟',
            uk: 'Які? / Котрі?',
            fr: 'Lesquels / Lesquelles ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cuánto?',
          translations: {
            en: 'How much? (m)',
            ar: 'كم (للمذكر)؟',
            uk: 'Скільки? (ч)',
            fr: 'Combien ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cuánta?',
          translations: {
            en: 'How much? (f)',
            ar: 'كم (للمؤنث)؟',
            uk: 'Скільки? (ж)',
            fr: 'Combien ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cuántos?',
          translations: {
            en: 'How many? (m. pl.)',
            ar: 'كم العدد (جمع مذكر)؟',
            uk: 'Скільки? (ч. plural)',
            fr: 'Combien ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cuántas?',
          translations: {
            en: 'How many? (f. pl.)',
            ar: 'كم العدد (جمع مؤنث)؟',
            uk: 'Скільки? (ж. plural)',
            fr: 'Combien ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿De quién?',
          translations: {
            en: 'Whose?',
            ar: 'لمن؟',
            uk: 'Чий?',
            fr: 'À qui ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Adónde?',
          translations: {
            en: 'Where to?',
            ar: 'إلى أين؟',
            uk: 'Куди?',
            fr: 'Où (destination) ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cómo estás?',
          translations: {
            en: 'How are you?',
            ar: 'كيف حالك؟',
            uk: 'Як справи?',
            fr: 'Comment vas-tu ?'
          },
          emoji: '👋',
          color: '#EBF8FF'
        },
        {
          word: '¿Qué hora es?',
          translations: {
            en: 'What time is it?',
            ar: 'كم الساعة؟',
            uk: 'Котра година?',
            fr: 'Quelle heure est-il ?'
          },
          emoji: '⏰',
          color: '#EBF8FF'
        },
        {
          word: '¿Dónde vives?',
          translations: {
            en: 'Where do you live?',
            ar: 'أين تعيش؟',
            uk: 'Де ти живеш?',
            fr: 'Où habites-tu ?'
          },
          emoji: '🏠',
          color: '#EBF8FF'
        },
        {
          word: '¿Cómo te llamas?',
          translations: {
            en: 'What is your name?',
            ar: 'ما اسمك؟',
            uk: 'Як тебе звати?',
            fr: 'Comment t\'appelles-tu ?'
          },
          emoji: '✍️',
          color: '#EBF8FF'
        },
        {
          word: '¿De dónde eres?',
          translations: {
            en: 'Where are you from?',
            ar: 'من أين أنت؟',
            uk: 'Звідки ти?',
            fr: 'D\'où es-tu ?'
          },
          emoji: '🌍',
          color: '#EBF8FF'
        },
        {
          word: '¿Qué es esto?',
          translations: {
            en: 'What is this?',
            ar: 'ما هذا؟',
            uk: 'Що це?',
            fr: 'Qu\'est-ce que c\'est ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Quién es él?',
          translations: {
            en: 'Who is he?',
            ar: 'من هو؟',
            uk: 'Хто він?',
            fr: 'Qui est-il ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Cuándo es tu cumpleaños?',
          translations: {
            en: 'When is your birthday?',
            ar: 'متى عيد ميلادك؟',
            uk: 'Коли твій день народження?',
            fr: 'Quand est ton anniversaire ?'
          },
          emoji: '🎂',
          color: '#F3E8FF'
        },
        {
          word: '¿Por qué estudias español?',
          translations: {
            en: 'Why do you study Spanish?',
            ar: 'لماذا تدرس الإسبانية؟',
            uk: 'Чому ти вчиш іспанську?',
            fr: 'Pourquoi étudies-tu l\'espagnol ?'
          },
          emoji: '📚',
          color: '#FEFCBF'
        },
        {
          word: '¿Cuánto cuesta?',
          translations: {
            en: 'How much does it cost?',
            ar: 'كم السعر؟',
            uk: 'Скільки це коштує?',
            fr: 'Combien ça coûte ?'
          },
          emoji: '🪙',
          color: '#FFF4E5'
        },
        {
          word: '¿Cuántos años tienes?',
          translations: {
            en: 'How old are you?',
            ar: 'كم عمرك؟',
            uk: 'Скільки тобі років?',
            fr: 'Quel âge as-tu ?'
          },
          emoji: '🔢',
          color: '#EBF8FF'
        },
        {
          word: '¿Cuál es tu teléfono?',
          translations: {
            en: 'What is your phone number?',
            ar: 'ما هو رقم هاتفك؟',
            uk: 'Який твій номер телефону?',
            fr: 'Quel est ton numéro ?'
          },
          emoji: '📱',
          color: '#EBF8FF'
        },
        {
          word: '¿De quién es este libro?',
          translations: {
            en: 'Whose book is this?',
            ar: 'لمن هذا الكتاب؟',
            uk: 'Чия це книга?',
            fr: 'À qui est ce livre ?'
          },
          emoji: '📘',
          color: '#FEFCBF'
        },
        {
          word: '¿Adónde vas?',
          translations: {
            en: 'Where are you going?',
            ar: 'إلى أين أنت ذاهب؟',
            uk: 'Куди ти йдеш?',
            fr: 'Où vas-tu ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿Qué haces?',
          translations: {
            en: 'What are you doing?',
            ar: 'ماذا تفعل؟',
            uk: 'Що ти робиш?',
            fr: 'Que fais-tu ?'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: '¿A qué hora empieza?',
          translations: {
            en: 'What time does it start?',
            ar: 'في أي ساعة يبدأ؟',
            uk: 'О котрій годині починається?',
            fr: 'À quelle heure ça commence ?'
          },
          emoji: '⏰',
          color: '#EBF8FF'
        }
      ],
    content: `
## Palabras para Preguntar
Para hacer preguntas necesitas estas palabras. ¡Recuerda que llevan tilde (´) y se usa el signo (¿?)!

*   **¿Qué es esto?** <trans en="(What is this?)" ar="(ما هذا؟)" uk="(Що це?)" fr="(Qu'est-ce que c'est ?)"/>
*   **¿Quién eres tú?** <trans en="(Who are you?)" ar="(من أنت؟)" uk="(Хто ти?)" fr="(Qui es-tu ?)"/>
*   **¿Dónde está el baño?** <trans en="(Where is the bathroom?)" ar="(أين الحمام؟)" uk="(Де туалет?)" fr="(Où est la salle de bain ?)"/>
*   **¿Cuándo llegas?** <trans en="(When do you arrive?)" ar="(متى تصل؟)" uk="(Коли ти прибуваєш?)" fr="(Quand arrives-tu ?)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: `Si quieres saber el lugar, preguntas... <trans en="(If you want to know the place, ask...)" ar="(إذا أردت أن تعرف المكان فاسأل...)" uk="(Якщо ви хочете знати місце, запитайте...)" fr="(Si vous voulez connaître l'endroit, demandez...)"/>`,
        options: ["¿Quién? <trans en=\"(Who?)\" ar=\"(من؟)\" uk=\"(Хто?)\" fr=\"(Qui ?)\"/>", "¿Qué? <trans en=\"(That?)\" ar=\"(الذي - التي؟)\" uk=\"(Це?)\" fr=\"(Que?)\"/>", "¿Dónde? <trans en=\"(Where?)\" ar=\"(أين؟)\" uk=\"(Де?)\" fr=\"(Où?)\"/>"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: `Para preguntar por una persona usas: <trans en="(To ask about a person you use:)" ar="(للسؤال عن شخص تستخدمه:)" uk="(Щоб запитати про особу, яку ви використовуєте:)" fr="(Pour poser des questions sur une personne que vous utilisez :)"/>`,
        options: ["¿Qué? <trans en=\"(What?)\" ar=\"(ماذا؟)\" uk=\"(Що?)\" fr=\"(Quoi ?)\"/>", "¿Quién? <trans en=\"(Who?)\" ar=\"(من؟)\" uk=\"(ВООЗ?)\" fr=\"(OMS?)\"/>", "¿Cuándo? <trans en=\"(When?)\" ar=\"(متى؟)\" uk=\"(Коли?)\" fr=\"(Quand?)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: `___ te llamas? <trans en="(___ your name is?)" ar="(___ اسمك؟)" uk="(___ тебе звати?)" fr="(___ tu t'appelles ?)"/>`,
        options: ["Cómo <trans en=\"(How)\" ar=\"(كيف)\" uk=\"(Як)\" fr=\"(Comment)\"/>", "Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>", "Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `___ años tienes? <trans en="(___ years old are you?)" ar="(___ سنة عمرك؟)" uk="(Тобі ___ років?)" fr="(___ ans, as-tu ?)"/>`,
        options: ["Cuántos <trans en=\"(How many)\" ar=\"(كم)\" uk=\"(Скільки)\" fr=\"(Combien)\"/>", "Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>", "Cuándo <trans en=\"(When)\" ar=\"(متى)\" uk=\"(Коли)\" fr=\"(Quand)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `___ vives? <trans en="(___ do you live?)" ar="(___ هل تعيش؟)" uk="(___ ти живеш?)" fr="(___ tu vis ?)"/>`,
        options: ["Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>", "Cómo <trans en=\"(How)\" ar=\"(كيف)\" uk=\"(Як)\" fr=\"(Comment)\"/>", "Por qué <trans en=\"(Why)\" ar=\"(لماذا)\" uk=\"(Чому)\" fr=\"(Pourquoi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `___ es esto? - Es un libro. <trans en="(___ is this? - It's a book.)" ar="(___ هل هذا؟ - إنه كتاب.)" uk="(___ це? - Це книга.)" fr="(___ c'est ça ? - C'est un livre.)"/>`,
        options: ["Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>", "Quién <trans en=\"(Who)\" ar=\"(من)\" uk=\"(Хто)\" fr=\"(Qui)\"/>", "Cuál <trans en=\"(Which)\" ar=\"(التي)\" uk=\"(Які)\" fr=\"(Lequel)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `___ es él? - Es mi hermano. <trans en="(___ is he? - He's my brother.)" ar="(___ هل هو؟ - إنه أخي.)" uk="(___ він? - Він мій брат.)" fr="(___ c'est vrai ? - C'est mon frère.)"/>`,
        options: ["Quién <trans en=\"(Who)\" ar=\"(من)\" uk=\"(Хто)\" fr=\"(Qui)\"/>", "Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>", "Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `___ llegas? - Mañana. <trans en="(___ are you arriving? - Tomorrow.)" ar="(___ هل ستصل؟ - غداً.)" uk="(___ ти приїжджаєш? - Завтра.)" fr="(___ tu arrive ? - Demain.)"/>`,
        options: ["Cuándo <trans en=\"(When)\" ar=\"(متى)\" uk=\"(Коли)\" fr=\"(Quand)\"/>", "Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>", "Por qué <trans en=\"(Why)\" ar=\"(لماذا)\" uk=\"(Чому)\" fr=\"(Pourquoi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `___ estudias español? - Porque me gusta. <trans en="(___ do you study Spanish? - Because I like it.)" ar="(___ هل تدرس اللغة الاسبانية؟ - لأنني أحب ذلك.)" uk="(___ ти вивчаєш іспанську? - Тому що мені подобається.)" fr="(___ étudiez-vous l'espagnol ? - Parce que j'aime ça.)"/>`,
        options: ["Por qué <trans en=\"(Why)\" ar=\"(لماذا)\" uk=\"(Чому)\" fr=\"(Pourquoi)\"/>", "Cuándo <trans en=\"(When)\" ar=\"(متى)\" uk=\"(Коли)\" fr=\"(Quand)\"/>", "Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `___ de estos prefieres? <trans en="(___ of these do you prefer?)" ar="(___ من هذه تفضل؟)" uk="(___ із них ви віддаєте перевагу?)" fr="(___ parmi ceux-ci, préférez-vous ?)"/>`,
        options: ["Cuál <trans en=\"(Which)\" ar=\"(التي)\" uk=\"(Які)\" fr=\"(Lequel)\"/>", "Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>", "Quién <trans en=\"(Who)\" ar=\"(من)\" uk=\"(Хто)\" fr=\"(Qui)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `___ cuesta esto? <trans en="(___ does this cost?)" ar="(___ هل هذا يكلف؟)" uk="(___ це коштує?)" fr="(___ est-ce que ça coûte ?)"/>`,
        options: ["Cuánto <trans en=\"(How much)\" ar=\"(كم)\" uk=\"(Скільки)\" fr=\"(Combien)\"/>", "Cómo <trans en=\"(How)\" ar=\"(كيف)\" uk=\"(Як)\" fr=\"(Comment)\"/>", "Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `¿___ hora es? <trans en="(___ time is it?)" ar="(____ هل هذا هو الوقت؟)" uk="(___ час?)" fr="(___ il est temps ?)"/>`,
        options: ["Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>", "Cuál <trans en=\"(Which)\" ar=\"(التي)\" uk=\"(Які)\" fr=\"(Lequel)\"/>", "Cómo <trans en=\"(How)\" ar=\"(كيف)\" uk=\"(Як)\" fr=\"(Comment)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `¿___ vas? - Voy al supermercado. <trans en="(Are you ____ going? - I'm going to the supermarket.)" ar="(هل أنت ____ ذاهب؟ - أنا ذاهب إلى السوبر ماركت.)" uk="(Ви ____ йдете? - Я йду в супермаркет.)" fr="(Est-ce que tu ____ y vas ? - Je vais au supermarché.)"/>`,
        options: ["A dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>", "De dónde <trans en=\"(From where)\" ar=\"(من أين)\" uk=\"(Звідки)\" fr=\"(D'où)\"/>", "Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `¿___ eres? - Soy de Marruecos. <trans en="(___ are you? - I'm from Morocco.)" ar="(____ هل أنت؟ - أنا من المغرب.)" uk="(___ ти? - Я з Марокко.)" fr="(___ et toi ? - Je viens du Maroc.)"/>`,
        options: ["De dónde <trans en=\"(From where)\" ar=\"(من أين)\" uk=\"(Звідки)\" fr=\"(D'où)\"/>", "Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>", "A dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `¿___ hermanos tienes? <trans en="(Do you have ____ brothers?)" ar="(هل لديك ____ إخوة؟)" uk="(У вас є ____ братів?)" fr="(Avez-vous ____ frères ?)"/>`,
        options: ["Cuántos <trans en=\"(How many)\" ar=\"(كم)\" uk=\"(Скільки)\" fr=\"(Combien)\"/>", "Cuánto <trans en=\"(How much)\" ar=\"(كم)\" uk=\"(Скільки)\" fr=\"(Combien)\"/>", "Cuántas <trans en=\"(How many)\" ar=\"(كم)\" uk=\"(Скільки)\" fr=\"(Combien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `¿___ está el baño? <trans en="(___ is the bathroom?)" ar="(____ هو الحمام؟)" uk="(___ ванна кімната?)" fr="(___ c'est la salle de bain ?)"/>`,
        options: ["Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>", "Cómo <trans en=\"(How)\" ar=\"(كيف)\" uk=\"(Як)\" fr=\"(Comment)\"/>", "Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `¿___ se dice 'house' en español? <trans en="(Is ___ said 'house' in Spanish?)" ar="(هل يُقال ___ "منزل" باللغة الإسبانية؟)" uk="(___ каже «будинок» іспанською?)" fr="(Est-ce que ___ se dit « maison » en espagnol ?)"/>`,
        options: ["Cómo <trans en=\"(How)\" ar=\"(كيف)\" uk=\"(Як)\" fr=\"(Comment)\"/>", "Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>", "Por qué <trans en=\"(Why)\" ar=\"(لماذا)\" uk=\"(Чому)\" fr=\"(Pourquoi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `¿___ es tu número de teléfono? <trans en="(___ is your phone number?)" ar="(___ هو رقم هاتفك؟)" uk="(___ твій номер телефону?)" fr="(___ est votre numéro de téléphone ?)"/>`,
        options: ["Cuál <trans en=\"(Which)\" ar=\"(التي)\" uk=\"(Які)\" fr=\"(Lequel)\"/>", "Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>", "Cuánto <trans en=\"(How much)\" ar=\"(كم)\" uk=\"(Скільки)\" fr=\"(Combien)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `En español, usamos los signos de interrogación... <trans en="(In Spanish, we use question marks...)" ar="(في اللغة الاسبانية نستخدم علامات الاستفهام...)" uk="(В іспанській мові ми використовуємо знаки питання...)" fr="(En espagnol, on utilise des points d'interrogation...)"/>`,
        options: ["Al principio y al final (¿?) <trans en=\"(At the beginning and at the end (?))\" ar=\"(في البداية والنهاية (؟))\" uk=\"(На початку і в кінці (?))\" fr=\"(Au début et à la fin (?))\"/>", "Solo al final (?) <trans en=\"(Only at the end (?))\" ar=\"(فقط في النهاية (؟))\" uk=\"(Тільки в кінці (?))\" fr=\"(Seulement à la fin (?))\"/>", "Solo al principio (¿) <trans en=\"(Only at the beginning ())\" ar=\"(فقط في البداية ())\" uk=\"(Тільки на початку ())\" fr=\"(Seulement au début ())\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `___ te llamas? (Extra) <trans en="(___ your name is? (Bonus))" ar="(___ اسمك؟ (مكافأة))" uk="(___ тебе звати? (Бонус))" fr="(___ tu t'appelles ? (Prime))"/>`,
        options: ["Cómo <trans en=\"(How)\" ar=\"(كيف)\" uk=\"(Як)\" fr=\"(Comment)\"/>", "Qué <trans en=\"(What)\" ar=\"(ماذا)\" uk=\"(Що)\" fr=\"(Quoi)\"/>", "Dónde <trans en=\"(Where)\" ar=\"(أين)\" uk=\"(Де)\" fr=\"(Où)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a1-vocab-comida-casa",
    topic: "Cotidianidad",
    title: "Vocabulario: La Casa y la Comida",
    level: "A1",
    category: "Vocabulario",
    description: "Aprende el nombre de algunas partes de la casa y alimentos muy comunes.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
    emoji: "🍞",
    color: "#EBF8FF",
    vocabulary: [
        {
          word: 'La cocina',
          translations: {
            en: 'Kitchen',
            ar: 'المطبخ',
            uk: 'Кухня',
            fr: 'Cuisine'
          },
          emoji: '🍳',
          color: '#FFF4E5'
        },
        {
          word: 'El salón / La sala',
          translations: {
            en: 'Living room',
            ar: 'غرفة المعيشة',
            uk: 'Вітальня',
            fr: 'Salon'
          },
          emoji: '🛋️',
          color: '#E3EEF9'
        },
        {
          word: 'El dormitorio / La habitación',
          translations: {
            en: 'Bedroom',
            ar: 'غرفة النوم',
            uk: 'Спальня',
            fr: 'Chambre'
          },
          emoji: '🛏️',
          color: '#F3E8FF'
        },
        {
          word: 'El baño',
          translations: {
            en: 'Bathroom',
            ar: 'الحمام',
            uk: 'Ванна',
            fr: 'Salle de bain'
          },
          emoji: '🚿',
          color: '#EBF8FF'
        },
        {
          word: 'El jardín',
          translations: {
            en: 'Garden',
            ar: 'الحديقة',
            uk: 'Сад',
            fr: 'Jardin'
          },
          emoji: '🌿',
          color: '#E2F3E7'
        },
        {
          word: 'La puerta',
          translations: {
            en: 'Door',
            ar: 'الباب',
            uk: 'Двері',
            fr: 'Porte'
          },
          emoji: '🚪',
          color: '#FCE8E8'
        },
        {
          word: 'La ventana',
          translations: {
            en: 'Window',
            ar: 'النافذة',
            uk: 'Вікно',
            fr: 'Fenêtre'
          },
          emoji: '🪟',
          color: '#FEFCBF'
        },
        {
          word: 'La mesa',
          translations: {
            en: 'Table',
            ar: 'الطاولة',
            uk: 'Стіл',
            fr: 'Table'
          },
          emoji: '🪑',
          color: '#E2F3E7'
        },
        {
          word: 'La silla',
          translations: {
            en: 'Chair',
            ar: 'كرسي',
            uk: 'Стілець',
            fr: 'Chaise'
          },
          emoji: '🪑',
          color: '#E3EEF9'
        },
        {
          word: 'La cama',
          translations: {
            en: 'Bed',
            ar: 'سرير',
            uk: 'Ліжко',
            fr: 'Lit'
          },
          emoji: '🛏️',
          color: '#F3E8FF'
        },
        {
          word: 'El armario',
          translations: {
            en: 'Wardrobe / Closet',
            ar: 'خزانة ملابس',
            uk: 'Шафа',
            fr: 'Armoire'
          },
          emoji: '🚪',
          color: '#FEFCBF'
        },
        {
          word: 'El pan',
          translations: {
            en: 'Bread',
            ar: 'خبز',
            uk: 'Хліб',
            fr: 'Pain'
          },
          emoji: '🍞',
          color: '#FEFCBF'
        },
        {
          word: 'El agua',
          translations: {
            en: 'Water',
            ar: 'ماء',
            uk: 'Вода',
            fr: 'Eau'
          },
          emoji: '💧',
          color: '#E3EEF9'
        },
        {
          word: 'La leche',
          translations: {
            en: 'Milk',
            ar: 'حليب',
            uk: 'Молоко',
            fr: 'Lait'
          },
          emoji: '🥛',
          color: '#F7FAFC'
        },
        {
          word: 'El arroz',
          translations: {
            en: 'Rice',
            ar: 'أرز',
            uk: 'Рис',
            fr: 'Riz'
          },
          emoji: '🍚',
          color: '#F7FAFC'
        },
        {
          word: 'La manzana',
          translations: {
            en: 'Apple',
            ar: 'تفاحة',
            uk: 'Яблуко',
            fr: 'Pomme'
          },
          emoji: '🍎',
          color: '#FCE8E8'
        },
        {
          word: 'El queso',
          translations: {
            en: 'Cheese',
            ar: 'جبن',
            uk: 'Сир',
            fr: 'Fromage'
          },
          emoji: '🧀',
          color: '#FEFCBF'
        },
        {
          word: 'El huevo',
          translations: {
            en: 'Egg',
            ar: 'بيض',
            uk: 'Яйце',
            fr: 'Œuf'
          },
          emoji: '🥚',
          color: '#FEFCBF'
        },
        {
          word: 'La carne',
          translations: {
            en: 'Meat',
            ar: 'لحم',
            uk: 'М\'ясо',
            fr: 'Viande'
          },
          emoji: '🥩',
          color: '#FCE8E8'
        },
        {
          word: 'El pescado',
          translations: {
            en: 'Fish',
            ar: 'سمك',
            uk: 'Риба',
            fr: 'Poisson'
          },
          emoji: '🐟',
          color: '#EBF8FF'
        },
        {
          word: 'La sal',
          translations: {
            en: 'Salt',
            ar: 'ملح',
            uk: 'Сіль',
            fr: 'Sel'
          },
          emoji: '🧂',
          color: '#F7FAFC'
        },
        {
          word: 'El azúcar',
          translations: {
            en: 'Sugar',
            ar: 'سكر',
            uk: 'Цукор',
            fr: 'Sucre'
          },
          emoji: '🍬',
          color: '#FFF4E5'
        },
        {
          word: 'El aceite',
          translations: {
            en: 'Oil',
            ar: 'زيت',
            uk: 'Олія',
            fr: 'Huile'
          },
          emoji: '🫗',
          color: '#E2F3E7'
        },
        {
          word: 'La fruta',
          translations: {
            en: 'Fruit',
            ar: 'فاكهة',
            uk: 'Фрукти',
            fr: 'Fruit'
          },
          emoji: '🍎',
          color: '#FCE8E8'
        },
        {
          word: 'La verdura',
          translations: {
            en: 'Vegetable',
            ar: 'خضار',
            uk: 'Овочі',
            fr: 'Légume'
          },
          emoji: '🥬',
          color: '#E2F3E7'
        },
        {
          word: 'El plato',
          translations: {
            en: 'Plate',
            ar: 'طبق',
            uk: 'Тарілка',
            fr: 'Assiette'
          },
          emoji: '🍽️',
          color: '#EDF2F7'
        },
        {
          word: 'El vaso',
          translations: {
            en: 'Glass',
            ar: 'كوب',
            uk: 'Склянка',
            fr: 'Verre'
          },
          emoji: '🥛',
          color: '#EDF2F7'
        },
        {
          word: 'El tenedor',
          translations: {
            en: 'Fork',
            ar: 'شوكة',
            uk: 'Виделка',
            fr: 'Fourchette'
          },
          emoji: '🍴',
          color: '#EDF2F7'
        },
        {
          word: 'El cuchillo',
          translations: {
            en: 'Knife',
            ar: 'سكين',
            uk: 'Ніж',
            fr: 'Couteau'
          },
          emoji: '🔪',
          color: '#EDF2F7'
        },
        {
          word: 'La cuchara',
          translations: {
            en: 'Spoon',
            ar: 'ملعقة',
            uk: 'Ложка',
            fr: 'Cuillère'
          },
          emoji: '🥄',
          color: '#EDF2F7'
        }
      ],
    content: `
## Comida Básica
*   Quiero comer **pan**.
*   Necesito beber **agua**.

## La Casa
La casa tiene varias partes, como **el dormitorio** (para dormir) y **la cocina** (para cocinar).
    `,
    exercises: [
      {
        id: "ex1",
        question: `El lugar donde duermes se llama: <trans en="(The place where you sleep is called:)" ar="(المكان الذي تنام فيه يسمى :)" uk="(Місце, де ти спиш, називається:)" fr="(L'endroit où vous dormez s'appelle :)"/>`,
        options: ["El dormitorio <trans en=\"(The bedroom)\" ar=\"(غرفة النوم)\" uk=\"(Спальня)\" fr=\"(La chambre)\"/>", "La cocina <trans en=\"(The kitchen)\" ar=\"(المطبخ)\" uk=\"(Кухня)\" fr=\"(La cuisine)\"/>", "El pan <trans en=\"(The bread)\" ar=\"(الخبز)\" uk=\"(Хліб)\" fr=\"(Le pain)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: `La comida de la mañana se llama... <trans en="(The morning meal is called...)" ar="(تسمى الوجبة الصباحية...)" uk="(Ранковий прийом їжі називається...)" fr="(Le repas du matin s'appelle...)"/>`,
        options: ["Desayuno <trans en=\"(Breakfast)\" ar=\"(الإفطار)\" uk=\"(Сніданок)\" fr=\"(Petit-déjeuner)\"/>", "Almuerzo <trans en=\"(Lunch)\" ar=\"(الغداء)\" uk=\"(Обід)\" fr=\"(Déjeuner)\"/>", "Cena <trans en=\"(Dinner)\" ar=\"(العشاء)\" uk=\"(Вечеря)\" fr=\"(Dîner)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `La comida de la noche se llama... <trans en="(The evening meal is called...)" ar="(تسمى وجبة المساء...)" uk="(Вечеря називається...)" fr="(Le repas du soir s'appelle...)"/>`,
        options: ["Cena <trans en=\"(Dinner)\" ar=\"(العشاء)\" uk=\"(Вечеря)\" fr=\"(Dîner)\"/>", "Desayuno <trans en=\"(Breakfast)\" ar=\"(الإفطار)\" uk=\"(Сніданок)\" fr=\"(Petit-déjeuner)\"/>", "Comida <trans en=\"(Food)\" ar=\"(الغذاء)\" uk=\"(Харчування)\" fr=\"(Nourriture)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `Para cortar la carne usamos un... <trans en="(To cut the meat we use a...)" ar="(لتقطيع اللحم نستخدم...)" uk="(Для нарізки м'яса використовуємо...)" fr="(Pour couper la viande, nous utilisons un...)"/>`,
        options: ["Cuchillo <trans en=\"(Knife)\" ar=\"(سكين)\" uk=\"(Ніж)\" fr=\"(Couteau)\"/>", "Tenedor <trans en=\"(Fork)\" ar=\"(شوكة)\" uk=\"(Виделка)\" fr=\"(Fourchette)\"/>", "Cuchara <trans en=\"(Spoon)\" ar=\"(ملعقة)\" uk=\"(Ложка)\" fr=\"(Cuillère)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Para tomar sopa usamos una... <trans en="(To eat soup we use a...)" ar="(لتناول الحساء نستخدم...)" uk="(Для споживання супу ми використовуємо...)" fr="(Pour manger de la soupe on utilise un...)"/>`,
        options: ["Cuchara <trans en=\"(Spoon)\" ar=\"(ملعقة)\" uk=\"(Ложка)\" fr=\"(Cuillère)\"/>", "Tenedor <trans en=\"(Fork)\" ar=\"(شوكة)\" uk=\"(Виделка)\" fr=\"(Fourchette)\"/>", "Cuchillo <trans en=\"(Knife)\" ar=\"(سكين)\" uk=\"(Ніж)\" fr=\"(Couteau)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `Bebemos agua en un... <trans en="(We drink water in a...)" ar="(نشرب الماء في...)" uk="(П'ємо воду в...)" fr="(Nous buvons de l'eau dans un...)"/>`,
        options: ["Vaso <trans en=\"(Glass)\" ar=\"(زجاج)\" uk=\"(Скло)\" fr=\"(Verre)\"/>", "Plato <trans en=\"(Plate)\" ar=\"(لوحة)\" uk=\"(Тарілка)\" fr=\"(Assiette)\"/>", "Tenedor <trans en=\"(Fork)\" ar=\"(شوكة)\" uk=\"(Виделка)\" fr=\"(Fourchette)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Dormimos en una... <trans en="(We slept in a...)" ar="(لقد نمنا في...)" uk="(Ми спали в...)" fr="(Nous avons dormi dans un...)"/>`,
        options: ["Cama <trans en=\"(Bed)\" ar=\"(السرير)\" uk=\"(Ліжко)\" fr=\"(Lit)\"/>", "Mesa <trans en=\"(Table)\" ar=\"(الجدول)\" uk=\"(Таблиця)\" fr=\"(Tableau)\"/>", "Silla <trans en=\"(Chair)\" ar=\"(كرسي)\" uk=\"(Стілець)\" fr=\"(Chaise)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Nos sentamos en una... <trans en="(We sat in a...)" ar="(جلسنا في...)" uk="(Ми сиділи в...)" fr="(Nous nous sommes assis dans un...)"/>`,
        options: ["Silla <trans en=\"(Chair)\" ar=\"(كرسي)\" uk=\"(Стілець)\" fr=\"(Chaise)\"/>", "Mesa <trans en=\"(Table)\" ar=\"(الجدول)\" uk=\"(Таблиця)\" fr=\"(Tableau)\"/>", "Cama <trans en=\"(Bed)\" ar=\"(السرير)\" uk=\"(Ліжко)\" fr=\"(Lit)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Guardamos la comida fría en... <trans en="(We store cold food in...)" ar="(نقوم بتخزين الأطعمة الباردة في...)" uk="(Ми зберігаємо холодні продукти в...)" fr="(Nous stockons des aliments froids dans...)"/>`,
        options: ["La nevera / El frigorífico <trans en=\"(The refrigerator / The refrigerator)\" ar=\"(الثلاجة / الثلاجة)\" uk=\"(Холодильник / Холодильник)\" fr=\"(Le réfrigérateur / Le réfrigérateur)\"/>", "El horno <trans en=\"(The oven)\" ar=\"(الفرن)\" uk=\"(Піч)\" fr=\"(Le four)\"/>", "El microondas <trans en=\"(The microwave)\" ar=\"(الميكروويف)\" uk=\"(Мікрохвильова піч)\" fr=\"(Le micro-onde)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Cocinamos en... <trans en="(We cook in...)" ar="(نحن نطبخ في...)" uk="(Готуємо в...)" fr="(Nous cuisinons à...)"/>`,
        options: ["La cocina <trans en=\"(The kitchen)\" ar=\"(المطبخ)\" uk=\"(Кухня)\" fr=\"(La cuisine)\"/>", "El dormitorio <trans en=\"(The bedroom)\" ar=\"(غرفة النوم)\" uk=\"(Спальня)\" fr=\"(La chambre)\"/>", "El baño <trans en=\"(The bathroom)\" ar=\"(الحمام)\" uk=\"(Ванна кімната)\" fr=\"(La salle de bain)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Nos duchamos en... <trans en="(We showered in...)" ar="(استحممنا...)" uk="(Ми приймали душ у...)" fr="(Nous avons pris une douche...)"/>`,
        options: ["El baño <trans en=\"(The bathroom)\" ar=\"(الحمام)\" uk=\"(Ванна кімната)\" fr=\"(La salle de bain)\"/>", "El salón <trans en=\"(The living room)\" ar=\"(غرفة المعيشة)\" uk=\"(Вітальня)\" fr=\"(Le salon)\"/>", "La cocina <trans en=\"(The kitchen)\" ar=\"(المطبخ)\" uk=\"(Кухня)\" fr=\"(La cuisine)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `Vemos la televisión en... <trans en="(We watch television on...)" ar="(نشاهد التلفاز على...)" uk="(Ми дивимося телевізор на...)" fr="(Nous regardons la télévision sur...)"/>`,
        options: ["El salón <trans en=\"(The living room)\" ar=\"(غرفة المعيشة)\" uk=\"(Вітальня)\" fr=\"(Le salon)\"/>", "El pasillo <trans en=\"(The hallway)\" ar=\"(الردهة)\" uk=\"(Передпокій)\" fr=\"(Le couloir)\"/>", "El balcón <trans en=\"(The balcony)\" ar=\"(البلكونة)\" uk=\"(Балкон)\" fr=\"(Le balcon)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Ponemos la ropa en el... <trans en="(We put the clothes in the...)" ar="(نضع الملابس في...)" uk="(Одяг складаємо в...)" fr="(On met les vêtements dans le...)"/>`,
        options: ["Armario <trans en=\"(Wardrobe)\" ar=\"(خزانة الملابس)\" uk=\"(Шафа)\" fr=\"(Armoire)\"/>", "Baño <trans en=\"(Bathroom)\" ar=\"(الحمام)\" uk=\"(Ванна кімната)\" fr=\"(Salle de bain)\"/>", "Frigorífico <trans en=\"(Refrigerator)\" ar=\"(ثلاجة)\" uk=\"(Холодильник)\" fr=\"(Réfrigérateur)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Abrimos la ___ para entrar en casa. <trans en="(We open the ___ to enter the house.)" ar="(نفتح ___ للدخول إلى المنزل.)" uk="(Ми відкриваємо ___, щоб увійти в будинок.)" fr="(On ouvre le ___ pour entrer dans la maison.)"/>`,
        options: ["Puerta <trans en=\"(Door)\" ar=\"(الباب)\" uk=\"(Двері)\" fr=\"(Porte)\"/>", "Ventana <trans en=\"(Window)\" ar=\"(نافذة)\" uk=\"(Вікно)\" fr=\"(Fenêtre)\"/>", "Pared <trans en=\"(Wall)\" ar=\"(الجدار)\" uk=\"(Стіна)\" fr=\"(Mur)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Miramos por la ___ para ver la calle. <trans en="(We look down the ___ to see the street.)" ar="(ننظر إلى أسفل ___ لرؤية الشارع.)" uk="(Ми дивимося вниз по ___, щоб побачити вулицю.)" fr="(Nous regardons le ___ pour voir la rue.)"/>`,
        options: ["Ventana <trans en=\"(Window)\" ar=\"(نافذة)\" uk=\"(Вікно)\" fr=\"(Fenêtre)\"/>", "Puerta <trans en=\"(Door)\" ar=\"(الباب)\" uk=\"(Двері)\" fr=\"(Porte)\"/>", "Mesa <trans en=\"(Table)\" ar=\"(الجدول)\" uk=\"(Таблиця)\" fr=\"(Tableau)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `La fruta amarilla y alargada es... <trans en="(The yellow and elongated fruit is...)" ar="(الثمرة صفراء ومستطيلة ...)" uk="(Жовтий і подовжений плід...)" fr="(Le fruit jaune et allongé est...)"/>`,
        options: ["Un plátano <trans en=\"(A banana)\" ar=\"(موزة)\" uk=\"(Банан)\" fr=\"(Une banane)\"/>", "Una manzana <trans en=\"(An apple)\" ar=\"(تفاحة)\" uk=\"(Яблуко)\" fr=\"(Une pomme)\"/>", "Una naranja <trans en=\"(An orange)\" ar=\"(برتقالة)\" uk=\"(Апельсин)\" fr=\"(Une orange)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `La bebida blanca que dan las vacas es... <trans en="(The white drink that cows give is...)" ar="(المشروب الأبيض الذي تقدمه الأبقار هو...)" uk="(Білий напій, який дають корови, це...)" fr="(La boisson blanche que donnent les vaches est...)"/>`,
        options: ["Leche <trans en=\"(Milk)\" ar=\"(حليب)\" uk=\"(Молоко)\" fr=\"(Lait)\"/>", "Agua <trans en=\"(Water)\" ar=\"(ماء)\" uk=\"(Вода)\" fr=\"(Eau)\"/>", "Zumo <trans en=\"(Juice)\" ar=\"(عصير)\" uk=\"(Сік)\" fr=\"(Jus)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Comemos paella en un... <trans en="(We eat paella in a...)" ar="(نحن نأكل الباييلا في...)" uk="(Їмо паелью в...)" fr="(On mange de la paella dans un...)"/>`,
        options: ["Plato <trans en=\"(Plate)\" ar=\"(لوحة)\" uk=\"(Тарілка)\" fr=\"(Assiette)\"/>", "Vaso <trans en=\"(Glass)\" ar=\"(زجاج)\" uk=\"(Скло)\" fr=\"(Verre)\"/>", "Tenedor <trans en=\"(Fork)\" ar=\"(شوكة)\" uk=\"(Виделка)\" fr=\"(Fourchette)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `La comida de la mañana se llama... (Extra) <trans en="(The morning meal is called... (Extra))" ar="(وجبة الصباح تسمى... (إضافي))" uk="(Ранковий прийом їжі називається... (Додатковий))" fr="(Le repas du matin s'appelle... (Extra))"/>`,
        options: ["Desayuno <trans en=\"(Breakfast)\" ar=\"(الإفطار)\" uk=\"(Сніданок)\" fr=\"(Petit-déjeuner)\"/>", "Almuerzo <trans en=\"(Lunch)\" ar=\"(الغداء)\" uk=\"(Обід)\" fr=\"(Déjeuner)\"/>", "Cena <trans en=\"(Dinner)\" ar=\"(العشاء)\" uk=\"(Вечеря)\" fr=\"(Dîner)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `La comida de la noche se llama... (Extra) <trans en="(The evening meal is called... (Extra))" ar="(وجبة المساء تسمى... (إضافي))" uk="(Вечеря називається... (Додатково))" fr="(Le repas du soir s'appelle... (Extra))"/>`,
        options: ["Cena <trans en=\"(Dinner)\" ar=\"(العشاء)\" uk=\"(Вечеря)\" fr=\"(Dîner)\"/>", "Desayuno <trans en=\"(Breakfast)\" ar=\"(الإفطار)\" uk=\"(Сніданок)\" fr=\"(Petit-déjeuner)\"/>", "Comida <trans en=\"(Food)\" ar=\"(الغذاء)\" uk=\"(Харчування)\" fr=\"(Nourriture)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-gram-preterito-perfecto",
    topic: "Tiempos del Pasado",
    title: "El Pretérito Perfecto",
    level: "A2",
    category: "Gramática",
    description: "Habla sobre cosas que has hecho hoy, esta semana o en tu vida en general.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=80",
    emoji: "📅",
    color: "#FEFCBF",
    content: `
## El Pretérito Perfecto: He comido, has vivido...

Usamos este tiempo verbal para hablar de acciones pasadas que ocurrieron en un momento conectado con el presente (ej. "hoy", "esta mañana", "este año" o cuando preguntamos si alguien ha hecho algo "alguna vez").

**Fórmula:** Verbo **HABER** (auxiliar conjugado) + **PARTICIPIO** del verbo principal.

### 1. Conjugación completa del auxiliar HABER (Presente) <trans en="(Auxiliary To Have)" ar="(فعل مساعد يملك)" uk="(Допоміжне дієслово)" fr="(Auxiliaire Avoir)"/>
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Conjugación</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">he</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Yo he hablado.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I have spoken.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">has</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Tú has comido.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You have eaten.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">ha</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Él ha vivido aquí.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">He has lived here.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">hemos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Nosotros hemos terminado.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We have finished.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">habéis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Vosotros habéis estudiado.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You all have studied.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">han</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">Ellos han llegado.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They have arrived.</td></tr></tbody></table></div>
---

### 2. Formación de Participios
- Verbos en **-AR** -> terminan en **-ado** (ej: hablar -> hablado, viajar -> viajado)
- Verbos en **-ER / -IR** -> terminan en **-ido** (ej: comer -> comido, vivir -> vivido)

*Participios irregulares comunes:*
- Hacer -> **hecho** (He hecho los deberes)
- Ver -> **visto** (Hemos visto una película)
- Escribir -> **escrito** (Tú has escrito un mensaje)
- Volver -> **vuelto** (Ellos han vuelto de viaje)
    `,
    exercises: [
      {
        id: "ex1",
        question: `Hoy nosotros _______ (trabajar) mucho. <trans en="(Today we _______ (work) a lot.)" ar="(اليوم _______ (نعمل) كثيرًا.)" uk="(Сьогодні ми _______ (працюємо) багато.)" fr="(Aujourd'hui, nous _______ (travaillons) beaucoup.)"/>`,
        options: ["hemos trabajado <trans en=\"(we have worked)\" ar=\"(لقد عملنا)\" uk=\"(ми попрацювали)\" fr=\"(nous avons travaillé)\"/>", "han trabajado <trans en=\"(have worked)\" ar=\"(عملت)\" uk=\"(працювали)\" fr=\"(j'ai travaillé)\"/>", "ha trabajado <trans en=\"(has worked)\" ar=\"(وقد عملت)\" uk=\"(спрацювало)\" fr=\"(a fonctionné)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: `¿Tú _____ (estar) en Marruecos alguna vez? <trans en="(Have you ever _____ (be) in Morocco?)" ar="(هل سبق لك _____ (أن تكون) في المغرب؟)" uk="(Ви коли-небудь _____ (були) в Марокко?)" fr="(Avez-vous déjà _____ (être) au Maroc ?)"/>`,
        options: ["ha estado <trans en=\"(has been)\" ar=\"(تم)\" uk=\"(було)\" fr=\"(a été)\"/>", "has estado <trans en=\"(you have been)\" ar=\"(لقد كنت)\" uk=\"(ви були)\" fr=\"(tu as été)\"/>", "he estado <trans en=\"(I have been)\" ar=\"(لقد كنت)\" uk=\"(Я був)\" fr=\"(j'ai été)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: `Hoy ___ una manzana. <trans en="(Today ___ an apple.)" ar="(اليوم ___ تفاحة.)" uk="(Сьогодні ___ яблуко.)" fr="(Aujourd'hui ___ une pomme.)"/>`,
        options: ["he comido <trans en=\"(I have eaten)\" ar=\"(لقد أكلت)\" uk=\"(Я поїв)\" fr=\"(j'ai mangé)\"/>", "ha comido <trans en=\"(has eaten)\" ar=\"(قد أكل)\" uk=\"(з'їв)\" fr=\"(a mangé)\"/>", "hemos comido <trans en=\"(we have eaten)\" ar=\"(لقد أكلنا)\" uk=\"(ми поїли)\" fr=\"(nous avons mangé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `Esta mañana María ___ temprano. <trans en="(This morning Maria ___ early.)" ar="(هذا الصباح ماريا ___ مبكرا.)" uk="(Сьогодні вранці Марія ___ рано.)" fr="(Ce matin Maria ___ tôt.)"/>`,
        options: ["se ha levantado <trans en=\"(has risen)\" ar=\"(ارتفع)\" uk=\"(піднявся)\" fr=\"(s'est levé)\"/>", "se han levantado <trans en=\"(they have risen)\" ar=\"(لقد قاموا)\" uk=\"(вони піднялися)\" fr=\"(ils se sont levés)\"/>", "se he levantado <trans en=\"(I have gotten up)\" ar=\"(لقد استيقظت)\" uk=\"(Я встав)\" fr=\"(je me suis levé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Esta semana nosotros ___ mucho. <trans en="(This week we ___ a lot.)" ar="(هذا الأسبوع ___ الكثير.)" uk="(Цього тижня ми ___ багато.)" fr="(Cette semaine, nous ___ beaucoup.)"/>`,
        options: ["hemos trabajado <trans en=\"(we have worked)\" ar=\"(لقد عملنا)\" uk=\"(ми попрацювали)\" fr=\"(nous avons travaillé)\"/>", "han trabajado <trans en=\"(have worked)\" ar=\"(عملت)\" uk=\"(працювали)\" fr=\"(j'ai travaillé)\"/>", "habéis trabajado <trans en=\"(you have worked)\" ar=\"(لقد عملت)\" uk=\"(ви працювали)\" fr=\"(tu as travaillé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `¿Tú ___ alguna vez a España? <trans en="(Have you ever ___ to Spain?)" ar="(هل سبق لك ___ إلى إسبانيا؟)" uk="(Ви коли-небудь ___ відвідували Іспанію?)" fr="(Avez-vous déjà ___ en Espagne ?)"/>`,
        options: ["has viajado <trans en=\"(you have traveled)\" ar=\"(لقد سافرت)\" uk=\"(ви подорожували)\" fr=\"(tu as voyagé)\"/>", "ha viajado <trans en=\"(has traveled)\" ar=\"(سافر)\" uk=\"(подорожував)\" fr=\"(a voyagé)\"/>", "he viajado <trans en=\"(I have traveled)\" ar=\"(لقد سافرت)\" uk=\"(Я подорожував)\" fr=\"(j'ai voyagé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Este año ellos no ___ de vacaciones. <trans en="(This year they don't ___ on vacation.)" ar="(هذا العام لا ___ في إجازة.)" uk="(Цього року вони не ___ у відпустці.)" fr="(Cette année, ils ne ___ pas en vacances.)"/>`,
        options: ["han ido <trans en=\"(have gone)\" ar=\"(لقد ذهب)\" uk=\"(пішли)\" fr=\"(je suis parti)\"/>", "hemos ido <trans en=\"(we have gone)\" ar=\"(لقد ذهبنا)\" uk=\"(ми пішли)\" fr=\"(nous sommes partis)\"/>", "habéis ido <trans en=\"(you have gone)\" ar=\"(لقد ذهبت)\" uk=\"(ти пішов)\" fr=\"(tu es parti)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Yo nunca ___ sushi. <trans en="(I never ___ sushi.)" ar="(أنا لا ___ السوشي.)" uk="(Я ніколи не ___ суші.)" fr="(Je n'ai jamais ___ sushi.)"/>`,
        options: ["he probado <trans en=\"(I have tried)\" ar=\"(لقد حاولت)\" uk=\"(Я пробував)\" fr=\"(j'ai essayé)\"/>", "has probado <trans en=\"(have you tried)\" ar=\"(هل حاولت)\" uk=\"(ви пробували)\" fr=\"(as-tu essayé)\"/>", "ha probado <trans en=\"(has tried)\" ar=\"(وقد حاول)\" uk=\"(пробував)\" fr=\"(a essayé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `El pretérito perfecto de 'hacer' (yo) es... <trans en="(The past perfect of 'do' (yo) is...)" ar="(الماضي التام لـ "do" (yo) هو ...)" uk="(Минулий досконалий від "do" (yo) є...)" fr="(Le plus-que-parfait de 'do' (yo) est...)"/>`,
        options: ["he hecho <trans en=\"(I have done)\" ar=\"(لقد فعلت)\" uk=\"(Я зробив)\" fr=\"(j'ai fait)\"/>", "he hacido <trans en=\"(I have done)\" ar=\"(لقد فعلت)\" uk=\"(Я зробив)\" fr=\"(j'ai fait)\"/>", "he echo <trans en=\"(I have done)\" ar=\"(لقد فعلت)\" uk=\"(Я зробив)\" fr=\"(j'ai fait)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `El pretérito perfecto de 'escribir' (él) es... <trans en="(The past perfect of 'write' (him) is...)" ar="(الماضي التام لـ "اكتب" (هو) هو ...)" uk="(Минулий досконалий від «написати» (його) є...)" fr="(Le plus-que-parfait de « écrire » (lui) est...)"/>`,
        options: ["ha escrito <trans en=\"(has written)\" ar=\"(وقد كتب)\" uk=\"(написав)\" fr=\"(a écrit)\"/>", "ha escribido <trans en=\"(has written)\" ar=\"(وقد كتب)\" uk=\"(написав)\" fr=\"(a écrit)\"/>", "ha escrebido <trans en=\"(has written)\" ar=\"(وقد كتب)\" uk=\"(написав)\" fr=\"(a écrit)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `El pretérito perfecto de 'ver' (nosotros) es... <trans en="(The past perfect of 'see' (us) is...)" ar="(الماضي التام لـ "أرى" (نحن) هو ...)" uk="(Минулий досконалий від 'бачити' (нас) є...)" fr="(Le plus-que-parfait de « voir » (nous) est...)"/>`,
        options: ["hemos visto <trans en=\"(we have seen)\" ar=\"(لقد رأينا)\" uk=\"(ми бачили)\" fr=\"(nous avons vu)\"/>", "hemos vido <trans en=\"(we have seen)\" ar=\"(لقد رأينا)\" uk=\"(ми бачили)\" fr=\"(nous avons vu)\"/>", "hemos veído <trans en=\"(we have seen)\" ar=\"(لقد رأينا)\" uk=\"(ми бачили)\" fr=\"(nous avons vu)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `¿___ (vosotros) las llaves? <trans en="(___ (you) the keys?)" ar="(___ (أنت) المفاتيح؟)" uk="(___ (ви) ключі?)" fr="(___ (vous) les clés ?)"/>`,
        options: ["Habéis encontrado <trans en=\"(You have found)\" ar=\"(لقد وجدت)\" uk=\"(Ви знайшли)\" fr=\"(Vous avez trouvé)\"/>", "Han encontrado <trans en=\"(They have found)\" ar=\"(لقد وجدوا)\" uk=\"(Знайшли)\" fr=\"(Ils ont trouvé)\"/>", "Has encontrado <trans en=\"(You have found)\" ar=\"(لقد وجدت)\" uk=\"(Ви знайшли)\" fr=\"(Vous avez trouvé)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Aún no ___ (yo) mis deberes. <trans en="(I still haven't ___ (me) my homework.)" ar="(ما زلت لم ___ (أنا) واجباتي المنزلية.)" uk="(Я все ще не маю ___ (я) домашнього завдання.)" fr="(Je n'ai toujours pas ___ (moi) mes devoirs.)"/>`,
        options: ["he terminado <trans en=\"(I'm done)\" ar=\"(لقد انتهيت)\" uk=\"(Я закінчив)\" fr=\"(j'ai fini)\"/>", "ha terminado <trans en=\"(has finished)\" ar=\"(انتهى)\" uk=\"(закінчено)\" fr=\"(a fini)\"/>", "has terminado <trans en=\"(you're done)\" ar=\"(لقد انتهيت)\" uk=\"(ви закінчили)\" fr=\"(tu as fini)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Pedro ya ___ (volver) a casa. <trans en="(Pedro already ___ (return) home.)" ar="(بيدرو بالفعل ___ (عودة) إلى المنزل.)" uk="(Педро вже ___ (повернутися) додому.)" fr="(Pedro déjà ___ (retour) à la maison.)"/>`,
        options: ["ha vuelto <trans en=\"(is back)\" ar=\"(عاد)\" uk=\"(повернувся)\" fr=\"(est de retour)\"/>", "ha volvido <trans en=\"(has returned)\" ar=\"(لقد عاد)\" uk=\"(повернувся)\" fr=\"(est revenu)\"/>", "ha volvedo <trans en=\"(has returned)\" ar=\"(لقد عاد)\" uk=\"(повернувся)\" fr=\"(est revenu)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Esta tarde ___ (llover) mucho. <trans en="(This afternoon ___ (rain) a lot.)" ar="(بعد ظهر اليوم ___ (مطر) غزير.)" uk="(Сьогодні вдень ___ (дощ) багато.)" fr="(Cet après-midi ___ (pluie) beaucoup.)"/>`,
        options: ["ha llovido <trans en=\"(it has rained)\" ar=\"(هطلت الأمطار)\" uk=\"(пішов дощ)\" fr=\"(il a plu)\"/>", "he llovido <trans en=\"(it has rained)\" ar=\"(هطلت الأمطار)\" uk=\"(пішов дощ)\" fr=\"(il a plu)\"/>", "han llovido <trans en=\"(it has rained)\" ar=\"(هطلت الأمطار)\" uk=\"(пішов дощ)\" fr=\"(il a plu)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `¿Qué ___ (pasar) hoy? <trans en="(What ___ (happen) today?)" ar="(ماذا ___ (يحدث) اليوم؟)" uk="(Що ___ (відбулося) сьогодні?)" fr="(Que ___ (arrive-t-il) aujourd'hui ?)"/>`,
        options: ["ha pasado <trans en=\"(has passed)\" ar=\"(قد مضى)\" uk=\"(минуло)\" fr=\"(est passé)\"/>", "han pasado <trans en=\"(have passed)\" ar=\"(لقد مرت)\" uk=\"(пройшли)\" fr=\"(sont passés)\"/>", "has pasado <trans en=\"(you have passed)\" ar=\"(لقد مرت)\" uk=\"(ви пройшли)\" fr=\"(tu as réussi)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Mis padres ___ (decir) que no. <trans en="(My parents ___ (say) no.)" ar="(والدي ___ (قل) لا.)" uk="(Мої батьки ___ (кажуть) ні.)" fr="(Mes parents ___ (dis) non.)"/>`,
        options: ["han dicho <trans en=\"(they have said)\" ar=\"(قالوا)\" uk=\"(сказали вони)\" fr=\"(ils ont dit)\"/>", "han decido <trans en=\"(have decided)\" ar=\"(قررت)\" uk=\"(вирішили)\" fr=\"(j'ai décidé)\"/>", "han diciado <trans en=\"(they have said)\" ar=\"(قالوا)\" uk=\"(сказали вони)\" fr=\"(ils ont dit)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Hoy me ___ (levantar) a las 8. <trans en="(Today I ___ (get up) at 8.)" ar="(اليوم ___ (استيقظ) الساعة 8.)" uk="(Сьогодні я ___ (встаю) о 8.)" fr="(Aujourd'hui, je ___ (me lève) à 8 heures.)"/>`,
        options: ["he levantado <trans en=\"(I have raised)\" ar=\"(لقد رفعت)\" uk=\"(Я підняв)\" fr=\"(j'ai élevé)\"/>", "ha levantado <trans en=\"(has risen)\" ar=\"(ارتفع)\" uk=\"(піднявся)\" fr=\"(s'est levé)\"/>", "has levantado <trans en=\"(you have risen)\" ar=\"(لقد قمت)\" uk=\"(ти воскрес)\" fr=\"(tu es ressuscité)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `El verbo auxiliar del pretérito perfecto es... <trans en="(The auxiliary verb of the past perfect is...)" ar="(الفعل المساعد للماضي التام هو ...)" uk="(Допоміжним дієсловом минулого часу є...)" fr="(Le verbe auxiliaire du plus-que-parfait est...)"/>`,
        options: ["Haber <trans en=\"(Have)\" ar=\"(هل لديك)\" uk=\"(Мати)\" fr=\"(Avoir)\"/>", "Tener <trans en=\"(Have)\" ar=\"(هل)\" uk=\"(Є)\" fr=\"(Avoir)\"/>", "Ser <trans en=\"(Be)\" ar=\"(كن)\" uk=\"(Будь)\" fr=\"(Soyez)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Hoy ___ una manzana. (Extra) <trans en="(Today ___ an apple. (Bonus))" ar="(اليوم ___ تفاحة. (مكافأة))" uk="(Сьогодні ___ яблуко. (Бонус))" fr="(Aujourd'hui ___ une pomme. (Prime))"/>`,
        options: ["he comido <trans en=\"(I have eaten)\" ar=\"(لقد أكلت)\" uk=\"(Я поїв)\" fr=\"(j'ai mangé)\"/>", "ha comido <trans en=\"(has eaten)\" ar=\"(قد أكل)\" uk=\"(з'їв)\" fr=\"(a mangé)\"/>", "hemos comido <trans en=\"(we have eaten)\" ar=\"(لقد أكلنا)\" uk=\"(ми поїли)\" fr=\"(nous avons mangé)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-gram-futuro-proximo",
    topic: "Planes Futuros",
    title: "El Futuro Próximo (Voy a...)",
    level: "A2",
    category: "Gramática",
    description: "Habla de tus planes y de cosas que van a pasar usando 'IR + a + infinitivo'.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    emoji: "🔮",
    color: "#E2F3E7",
    content: `
## El Futuro Próximo: Ir + a + Infinitivo

Para hablar de planes inmediatos o decisiones tomadas para el futuro (ej. "mañana", "este fin de semana", "el próximo mes"), utilizamos la perífrasis verbal **Ir + a + Infinitivo**.

**Fórmula:** Verbo **IR** (conjugado en presente) + preposición **a** + verbo principal en **Infinitivo** (sin conjugar).

### Conjugación completa del verbo IR en Presente <trans en="(To go)" ar="(يذهب)" uk="(Йти / Їхати)" fr="(Aller)"/>
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Conjugación</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Fórmula</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">voy</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">voy a + inf.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Yo voy a viajar a Francia.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I am going to travel to France.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">vas</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">vas a + inf.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Tú vas a estudiar español.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You are going to study Spanish.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">va</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">va a + inf.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Ella va a trabajar mañana.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">She is going to work tomorrow.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">vamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">vamos a + inf.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Nosotros vamos a comer fuera.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We are going to eat out.</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">vais</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">vais a + inf.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Vosotros vais a jugar al fútbol.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You all are going to play soccer.</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">van</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">van a + inf.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">Ellos van a dormir temprano.</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They are going to sleep early.</td></tr></tbody></table></div>
    `,
    exercises: [
      {
        id: "ex1",
        question: `El fin de semana, yo _______ español. <trans en="(On the weekend, I _______ Spanish.)" ar="(في عطلة نهاية الأسبوع، أنا _______ الإسبانية.)" uk="(На вихідних я _______ іспанською.)" fr="(Le week-end, je _______ espagnol.)"/>`,
        options: ["voy a estudio <trans en=\"(I'm going to study)\" ar=\"(انا ذاهب للدراسة)\" uk=\"(Я збираюся вчитися)\" fr=\"(je vais étudier)\"/>", "voy a estudiar <trans en=\"(I'm going to study)\" ar=\"(انا ذاهب للدراسة)\" uk=\"(Я збираюся вчитися)\" fr=\"(je vais étudier)\"/>", "voy estudiar <trans en=\"(I'm going to study)\" ar=\"(انا ذاهب للدراسة)\" uk=\"(Я збираюся вчитися)\" fr=\"(je vais étudier)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `Mañana nosotros _____ ir al cine. <trans en="(Tomorrow we _____ go to the cinema.)" ar="(غدا _____ نذهب إلى السينما.)" uk="(Завтра ми _____ підемо в кінотеатр.)" fr="(Demain, nous _____ allons au cinéma.)"/>`,
        options: ["vamos a <trans en=\"(let's)\" ar=\"(دعونا)\" uk=\"(давайте)\" fr=\"(allons)\"/>", "vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>", "va a <trans en=\"(going to)\" ar=\"(الذهاب الى)\" uk=\"(збирається)\" fr=\"(je vais à)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `Mañana yo ___ a comprar pan. <trans en="(Tomorrow I ___ to buy bread.)" ar="(غدا أنا ___ لشراء الخبز.)" uk="(Завтра я ___ купити хліб.)" fr="(Demain, je ___ pour acheter du pain.)"/>`,
        options: ["voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>", "vas <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `El próximo año, ella ___ a viajar a Francia. <trans en="(Next year, she ___ to travel to France.)" ar="(العام المقبل، ___ ستسافر إلى فرنسا.)" uk="(Наступного року вона ___ поїде до Франції.)" fr="(L'année prochaine, elle ___ voyager en France.)"/>`,
        options: ["va <trans en=\"(goes)\" ar=\"(يذهب)\" uk=\"(йде)\" fr=\"(va)\"/>", "voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>", "van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Este fin de semana, nosotros ___ a ver una película. <trans en="(This weekend, we ___ to see a movie.)" ar="(في نهاية هذا الأسبوع، ___ لمشاهدة فيلم.)" uk="(Цими вихідними ми ___ хочемо подивитися фільм.)" fr="(Ce week-end, nous ___ pour voir un film.)"/>`,
        options: ["vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>", "van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>", "vais <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `¿Qué ___ a hacer tú esta tarde? <trans en="(What ___ are you going to do this afternoon?)" ar="(ماذا ___ ستفعل بعد ظهر هذا اليوم؟)" uk="(Що ___ ти збираєшся робити сьогодні вдень?)" fr="(Qu'est-ce que ___ tu vas faire cet après-midi ?)"/>`,
        options: ["vas <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "va <trans en=\"(goes)\" ar=\"(يذهب)\" uk=\"(йде)\" fr=\"(va)\"/>", "voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Mis amigos ___ a venir a mi fiesta. <trans en="(My friends ___ to come to my party.)" ar="(أصدقائي ___ ليأتوا إلى حفلتي.)" uk="(Мої друзі ___ прийти на мою вечірку.)" fr="(Mes amis ___ pour venir à ma fête.)"/>`,
        options: ["van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>", "vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>", "va <trans en=\"(goes)\" ar=\"(يذهب)\" uk=\"(йде)\" fr=\"(va)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Vosotros ___ a aprender español muy rápido. <trans en="(You ___ to learn Spanish very quickly.)" ar="(أنت ___ تتعلم اللغة الإسبانية بسرعة كبيرة.)" uk="(Ви ___ вивчити іспанську дуже швидко.)" fr="(Vous ___ apprendre l'espagnol très rapidement.)"/>`,
        options: ["vais <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>", "vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `El cielo está negro, ___ a llover. <trans en="(The sky is black, ___ it's going to rain.)" ar="(السماء سوداء، ___ ستمطر.)" uk="(Небо чорне, ___ буде дощ.)" fr="(Le ciel est noir, ___ il va pleuvoir.)"/>`,
        options: ["va <trans en=\"(goes)\" ar=\"(يذهب)\" uk=\"(йде)\" fr=\"(va)\"/>", "voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>", "van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Yo no ___ a comer más, estoy lleno. <trans en="(I don't ___ to eat more, I'm full.)" ar="(لا أريد ___ أن آكل أكثر، فأنا ممتلئ.)" uk="(Я не ___ їсти більше, я ситий.)" fr="(Je ne ___ pas manger plus, je suis rassasié.)"/>`,
        options: ["voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>", "vas <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "va <trans en=\"(goes)\" ar=\"(يذهب)\" uk=\"(йде)\" fr=\"(va)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `La estructura del futuro próximo es... <trans en="(The structure of the near future is...)" ar="(هيكل المستقبل القريب هو ...)" uk="(Структура найближчого майбутнього - це...)" fr="(La structure du futur proche est...)"/>`,
        options: ["Ir + a + infinitivo <trans en=\"(Go + to + infinitive)\" ar=\"(اذهب + إلى + صيغة المصدر)\" uk=\"(Go + to + інфінітив)\" fr=\"(Aller + à + infinitif)\"/>", "Ir + infinitivo <trans en=\"(Go + infinitive)\" ar=\"(اذهب + صيغة المصدر)\" uk=\"(Іти + інфінітив)\" fr=\"(Aller + infinitif)\"/>", "Estar + infinitivo <trans en=\"(Estar + infinitive)\" ar=\"(استار + صيغة المصدر)\" uk=\"(Естар + інфінітив)\" fr=\"(Estar + infinitif)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `¿Dónde ___ a dormir ellos hoy? <trans en="(Where ___ them to sleep today?)" ar="(أين ___ لهم أن يناموا اليوم؟)" uk="(Де ___ їм спати сьогодні?)" fr="(Où ___ les dorment-ils aujourd'hui ?)"/>`,
        options: ["van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>", "vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>", "vais <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Nosotros ___ a cocinar una tortilla. <trans en="(We ___ to cook an omelet.)" ar="(نحن ___ لطهي العجة.)" uk="(Ми ___ приготувати омлет.)" fr="(Nous ___ pour cuisiner une omelette.)"/>`,
        options: ["vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>", "vais <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Tú y yo ___ a salir esta noche. <trans en="(You and I ___ going out tonight.)" ar="(أنا وأنت ___ سنخرج الليلة.)" uk="(Ми з тобою ___ йдемо сьогодні ввечері.)" fr="(Toi et moi ___ sortons ce soir.)"/>`,
        options: ["vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>", "vais <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Usted ___ a entender esto pronto. <trans en="(You ___ to understand this soon.)" ar="(أنت ___ ستفهم هذا قريبًا.)" uk="(Ви ___ зрозумієте це найближчим часом.)" fr="(Vous ___ comprendrez cela bientôt.)"/>`,
        options: ["va <trans en=\"(goes)\" ar=\"(يذهب)\" uk=\"(йде)\" fr=\"(va)\"/>", "vas <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Ellas ___ a llegar tarde. <trans en="(They ___ to be late.)" ar="(إنهم ___ يتأخرون.)" uk="(Вони ___ спізнюватися.)" fr="(Ils ___ être en retard.)"/>`,
        options: ["van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>", "vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>", "va <trans en=\"(goes)\" ar=\"(يذهب)\" uk=\"(йде)\" fr=\"(va)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Yo ___ a estudiar más. <trans en="(I ___ to study more.)" ar="(أنا ___ لدراسة المزيد.)" uk="(Я ___ вчитися більше.)" fr="(Je ___ pour étudier davantage.)"/>`,
        options: ["voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>", "vas <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `¿A qué hora ___ a terminar tú? <trans en="(What time ___ will you finish?)" ar="(في أي وقت ___ ستنتهي؟)" uk="(О котрій годині ___ ти закінчиш?)" fr="(À quelle heure ___ vas-tu finir ?)"/>`,
        options: ["vas <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "va <trans en=\"(goes)\" ar=\"(يذهب)\" uk=\"(йде)\" fr=\"(va)\"/>", "voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `El tren ___ a salir en 5 minutos. <trans en="(The train ___ to leave in 5 minutes.)" ar="(القطار ___ سيغادر خلال 5 دقائق.)" uk="(Поїзд ___ відправляється через 5 хвилин.)" fr="(Le train ___ part dans 5 minutes.)"/>`,
        options: ["va <trans en=\"(goes)\" ar=\"(يذهب)\" uk=\"(йде)\" fr=\"(va)\"/>", "van <trans en=\"(go)\" ar=\"(اذهب)\" uk=\"(йти)\" fr=\"(allez)\"/>", "voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Mañana yo ___ a comprar pan. (Extra) <trans en="(Tomorrow I ___ to buy bread. (Bonus))" ar="(غدا أنا ___ لشراء الخبز. (مكافأة))" uk="(Завтра я ___ купити хліб. (Бонус))" fr="(Demain, je ___ pour acheter du pain. (Prime))"/>`,
        options: ["voy <trans en=\"(I go)\" ar=\"(أذهب)\" uk=\"(Я йду)\" fr=\"(je pars)\"/>", "vas <trans en=\"(you go)\" ar=\"(تذهب)\" uk=\"(ти йдеш)\" fr=\"(tu pars)\"/>", "vamos <trans en=\"(let's go)\" ar=\"(لنذهب)\" uk=\"(ходімо)\" fr=\"(allons-y)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-gram-comparaciones",
    topic: "Comparaciones",
    title: "Hacer Comparaciones Simples",
    level: "A2",
    category: "Gramática",
    description: "Aprende a comparar cosas: más alto que, menos grande que, tan bueno como...",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80",
    emoji: "⚖️",
    color: "#F3E8FF",
    content: `
## Comparar en Español

Para comparar dos cosas o personas, usamos estas estructuras:

### Más / Menos ... que
*   Málaga es **más grande que** mi pueblo.
*   El autobús es **menos rápido que** el tren.

### Mejor / Peor (Irregulares)
No decimos "más bueno". Decimos **mejor**.
No decimos "más malo". Decimos **peor**.
*   Esta comida es **mejor que** la otra.

### Tan ... como (Igualdad)
*   Mi hermano es **tan alto como** tú. (Tienen la misma altura).
    `,
    exercises: [
      {
        id: "ex1",
        question: `Un avión es ______ rápido que un coche. <trans en="(A plane is ______ faster than a car.)" ar="(الطائرة ______ أسرع من السيارة.)" uk="(Літак на ______ швидший за автомобіль.)" fr="(Un avion est ______ plus rapide qu'une voiture.)"/>`,
        options: ["más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>", "mucho <trans en=\"(a lot)\" ar=\"(كثيرا)\" uk=\"(багато)\" fr=\"(beaucoup)\"/>", "menos <trans en=\"(less)\" ar=\"(أقل)\" uk=\"(менше)\" fr=\"(moins)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: `Mi inglés es ______ que mi español. (Es 'más bueno') <trans en="(My English is ______ than my Spanish. (It's 'more good'))" ar="(لغتي الإنجليزية ______ أكثر من لغتي الإسبانية. (إنها "أكثر جيدة"))" uk="(Моя англійська ______ ніж моя іспанська. (Це "більш добре"))" fr="(Mon anglais est ______ supérieur à mon espagnol. (C'est 'plus bien'))"/>`,
        options: ["más bueno <trans en=\"(more good)\" ar=\"(المزيد من الخير)\" uk=\"(більше добра)\" fr=\"(plus de bien)\"/>", "mejor <trans en=\"(better)\" ar=\"(أفضل)\" uk=\"(краще)\" fr=\"(mieux)\"/>", "peor <trans en=\"(worse)\" ar=\"(أسوأ)\" uk=\"(гірше)\" fr=\"(pire)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: `Juan es ___ alto que Pedro. <trans en="(Juan is ___ taller than Pedro.)" ar="(خوان ___ أطول من بيدرو.)" uk="(Хуан на ___ вищий за Педро.)" fr="(Juan est ___ plus grand que Pedro.)"/>`,
        options: ["más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>", "muy <trans en=\"(very)\" ar=\"(جدا)\" uk=\"(дуже)\" fr=\"(très)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `Esta casa es ___ grande como la otra. <trans en="(This house is ___ big like the other one.)" ar="(هذا المنزل ___ كبير مثل المنزل الآخر.)" uk="(Цей будинок ___ великий, як інший.)" fr="(Cette maison est ___ grande comme l'autre.)"/>`,
        options: ["tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>", "más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>", "menos <trans en=\"(less)\" ar=\"(أقل)\" uk=\"(менше)\" fr=\"(moins)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Yo tengo ___ libros como tú. <trans en="(I have ___ books like you.)" ar="(لدي ___ كتب مثلك.)" uk="(У мене ___ таких книг, як ти.)" fr="(J'ai ___ livres comme toi.)"/>`,
        options: ["tantos <trans en=\"(so many)\" ar=\"(الكثير)\" uk=\"(так багато)\" fr=\"(tellement)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>", "más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `Ella tiene ___ años que yo. <trans en="(She is ___ years older than me.)" ar="(هي ___ أكبر مني بسنوات.)" uk="(Вона на ___ років старша за мене.)" fr="(Elle a ___ ans de plus que moi.)"/>`,
        options: ["menos <trans en=\"(less)\" ar=\"(أقل)\" uk=\"(менше)\" fr=\"(moins)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>", "igual <trans en=\"(same)\" ar=\"(نفسه)\" uk=\"(те саме)\" fr=\"(pareil)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `El león es ___ rápido que la tortuga. <trans en="(The lion is ___ faster than the tortoise.)" ar="(الأسد ___ أسرع من السلحفاة.)" uk="(Лев на ___ швидший за черепаху.)" fr="(Le lion est ___ plus rapide que la tortue.)"/>`,
        options: ["más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>", "menos <trans en=\"(less)\" ar=\"(أقل)\" uk=\"(менше)\" fr=\"(moins)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Mi coche es ___ bueno como el tuyo. <trans en="(My car is ___ good like yours.)" ar="(سيارتي ___ جيدة مثل سيارتك.)" uk="(Моя машина ___ хороша, як ваша.)" fr="(Ma voiture est ___ bonne comme la vôtre.)"/>`,
        options: ["tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>", "igual <trans en=\"(same)\" ar=\"(نفسه)\" uk=\"(те саме)\" fr=\"(pareil)\"/>", "más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `Madrid es ___ grande que Toledo. <trans en="(Madrid is ___ bigger than Toledo.)" ar="(مدريد ___ أكبر من توليدو.)" uk="(Мадрид на ___ більший за Толедо.)" fr="(Madrid est ___ plus grande que Tolède.)"/>`,
        options: ["más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>", "menos <trans en=\"(less)\" ar=\"(أقل)\" uk=\"(менше)\" fr=\"(moins)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Este examen es ___ fácil que el anterior. <trans en="(This exam is ___ easier than the previous one.)" ar="(هذا الامتحان ___ أسهل من الاختبار السابق.)" uk="(Цей іспит ___ легший за попередній.)" fr="(Cet examen est ___ plus facile que le précédent.)"/>`,
        options: ["menos <trans en=\"(less)\" ar=\"(أقل)\" uk=\"(менше)\" fr=\"(moins)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>", "igual <trans en=\"(same)\" ar=\"(نفسه)\" uk=\"(те саме)\" fr=\"(pareil)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `Yo como ___ como tú. <trans en="(I eat ___ like you.)" ar="(أنا آكل ___ مثلك.)" uk="(Я їм ___ як ти.)" fr="(Je mange ___ comme toi.)"/>`,
        options: ["tanto <trans en=\"(so much)\" ar=\"(كثيرا)\" uk=\"(так багато)\" fr=\"(tellement)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>", "más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `El invierno es ___ frío que el verano. <trans en="(Winter is ___ colder than summer.)" ar="(الشتاء ___ أبرد من الصيف.)" uk="(Зима на ___ холодніша за літо.)" fr="(L'hiver est ___ plus froid que l'été.)"/>`,
        options: ["más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>", "menos <trans en=\"(less)\" ar=\"(أقل)\" uk=\"(менше)\" fr=\"(moins)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `El oro es ___ caro que la plata. <trans en="(Gold is ___ expensive than silver.)" ar="(الذهب ___ أغلى من الفضة.)" uk="(Золото на ___ дорожче срібла.)" fr="(L'or est ___ plus cher que l'argent.)"/>`,
        options: ["más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>", "igual <trans en=\"(same)\" ar=\"(نفسه)\" uk=\"(те саме)\" fr=\"(pareil)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Nosotros trabajamos ___ que ellos (menos cantidad). <trans en="(We work ___ than them (less amount).)" ar="(نعمل ___ منهم (كمية أقل).)" uk="(Ми працюємо ___ ніж вони (менше).)" fr="(Nous travaillons ___ qu'eux (moins de montant).)"/>`,
        options: ["menos <trans en=\"(less)\" ar=\"(أقل)\" uk=\"(менше)\" fr=\"(moins)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>", "igual <trans en=\"(same)\" ar=\"(نفسه)\" uk=\"(те саме)\" fr=\"(pareil)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Para igualdad con adjetivos usamos... <trans en="(For equality with adjectives we use...)" ar="(للمساواة مع الصفات نستخدم ...)" uk="(Для рівності з прикметниками вживаємо...)" fr="(Pour l'égalité avec les adjectifs, nous utilisons...)"/>`,
        options: ["tan ... como <trans en=\"(so... like)\" ar=\"(هكذا... مثل)\" uk=\"(так... як)\" fr=\"(alors... comme)\"/>", "más ... que <trans en=\"(more...than)\" ar=\"(أكثر...من)\" uk=\"(більше... ніж)\" fr=\"(plus... que)\"/>", "tanto ... que <trans en=\"(so much... that)\" ar=\"(كثيرا...ذلك)\" uk=\"(стільки... того)\" fr=\"(tellement... que)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `Para igualdad con sustantivos (nombres) usamos... <trans en="(For equality with nouns (nouns) we use...)" ar="(للمساواة مع الأسماء (الأسماء) نستخدم...)" uk="(Для рівноправності з іменниками (іменниками) вживаємо...)" fr="(Pour l'égalité avec les noms (noms), nous utilisons...)"/>`,
        options: ["tanto/a/os/as ... como <trans en=\"(both ... and)\" ar=\"(كلاهما ... و)\" uk=\"(і ... і)\" fr=\"(les deux... et)\"/>", "tan ... como <trans en=\"(so... like)\" ar=\"(هكذا... مثل)\" uk=\"(так... як)\" fr=\"(alors... comme)\"/>", "más ... como <trans en=\"(more... like)\" ar=\"(المزيد... مثل)\" uk=\"(більше... подобається)\" fr=\"(plus... comme)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `Tengo ___ amigas como tú. <trans en="(I have ___ friends like you.)" ar="(لدي ___ أصدقاء مثلك.)" uk="(У мене ___ таких друзів, як ти.)" fr="(J'ai ___ amis comme toi.)"/>`,
        options: ["tantas <trans en=\"(so many)\" ar=\"(الكثير)\" uk=\"(так багато)\" fr=\"(tellement)\"/>", "tantos <trans en=\"(so many)\" ar=\"(الكثير)\" uk=\"(так багато)\" fr=\"(tellement)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Mejor es el comparativo de... <trans en="(Better is the comparison of...)" ar="(المقارنة أفضل ...)" uk="(Краще порівняння...)" fr="(Mieux vaut la comparaison de...)"/>`,
        options: ["Bueno <trans en=\"(Good)\" ar=\"(جيد)\" uk=\"(Добре)\" fr=\"(Bien)\"/>", "Malo <trans en=\"(Bad)\" ar=\"(سيئة)\" uk=\"(Погано)\" fr=\"(Mauvais)\"/>", "Grande <trans en=\"(Large)\" ar=\"(كبيرة)\" uk=\"(Великий)\" fr=\"(Grand)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `Peor es el comparativo de... <trans en="(The comparison of...)" ar="(المقارنة بين...)" uk="(Порівняння...)" fr="(La comparaison de...)"/>`,
        options: ["Malo <trans en=\"(Bad)\" ar=\"(سيئة)\" uk=\"(Погано)\" fr=\"(Mauvais)\"/>", "Bueno <trans en=\"(Good)\" ar=\"(جيد)\" uk=\"(Добре)\" fr=\"(Bien)\"/>", "Pequeño <trans en=\"(Small)\" ar=\"(صغير)\" uk=\"(Маленький)\" fr=\"(Petit)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `Juan es ___ alto que Pedro. (Extra) <trans en="(Juan is ___ taller than Pedro. (Bonus))" ar="(خوان ___ أطول من بيدرو. (مكافأة))" uk="(Хуан на ___ вищий за Педро. (Бонус))" fr="(Juan est ___ plus grand que Pedro. (Prime))"/>`,
        options: ["más <trans en=\"(more)\" ar=\"(المزيد)\" uk=\"(більше)\" fr=\"(plus)\"/>", "muy <trans en=\"(very)\" ar=\"(جدا)\" uk=\"(дуже)\" fr=\"(très)\"/>", "tan <trans en=\"(so)\" ar=\"(هكذا)\" uk=\"(так)\" fr=\"(donc)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "a2-vocab-restaurante",
    topic: "Restaurante",
    title: "Supervivencia: En el Restaurante",
    level: "A2",
    category: "Vocabulario",
    description: "Aprende a pedir comida y pagar en un bar o restaurante.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
    emoji: "🍽️",
    color: "#FFF5F5",
    vocabulary: [
        {
          word: 'El menú / La carta',
          translations: {
            en: 'Menu',
            ar: 'قائمة الطعام',
            uk: 'Меню',
            fr: 'Menu / Carte'
          },
          emoji: '📜',
          color: '#FEFCBF'
        },
        {
          word: 'La cuenta',
          translations: {
            en: 'Bill',
            ar: 'الحساب',
            uk: 'Рахунок',
            fr: 'L\'addition'
          },
          emoji: '💵',
          color: '#EBF8FF'
        },
        {
          word: 'Para beber',
          translations: {
            en: 'To drink',
            ar: 'للشرب',
            uk: 'Пити',
            fr: 'Pour boire'
          },
          emoji: '🥛',
          color: '#E3EEF9'
        },
        {
          word: 'Para comer',
          translations: {
            en: 'To eat',
            ar: 'للأكل',
            uk: 'Їсти',
            fr: 'Pour manger'
          },
          emoji: '🍽️',
          color: '#E2F3E7'
        },
        {
          word: 'El camarero / La camarera',
          translations: {
            en: 'Waiter / Waitress',
            ar: 'النادل / النادلة',
            uk: 'Офіціант / офіціантка',
            fr: 'Serveur'
          },
          emoji: '🤵',
          color: '#EDF2F7'
        },
        {
          word: 'La mesa',
          translations: {
            en: 'Table',
            ar: 'طاولة',
            uk: 'Стіл',
            fr: 'Table'
          },
          emoji: '🪑',
          color: '#EDF2F7'
        },
        {
          word: 'El plato',
          translations: {
            en: 'Plate / Dish',
            ar: 'طبق',
            uk: 'Тарілка / страва',
            fr: 'Assiette / Plat'
          },
          emoji: '🍽️',
          color: '#EDF2F7'
        },
        {
          word: 'El vaso',
          translations: {
            en: 'Glass',
            ar: 'كوب',
            uk: 'Склянка',
            fr: 'Verre'
          },
          emoji: '🥛',
          color: '#EDF2F7'
        },
        {
          word: 'La servilleta',
          translations: {
            en: 'Napkin',
            ar: 'منديل',
            uk: 'Серветка',
            fr: 'Serviette'
          },
          emoji: '🧻',
          color: '#EDF2F7'
        },
        {
          word: 'El tenedor',
          translations: {
            en: 'Fork',
            ar: 'شوكة',
            uk: 'Виделка',
            fr: 'Fourchette'
          },
          emoji: '🍴',
          color: '#EDF2F7'
        },
        {
          word: 'El cuchillo',
          translations: {
            en: 'Knife',
            ar: 'سكين',
            uk: 'Ніж',
            fr: 'Couteau'
          },
          emoji: '🔪',
          color: '#EDF2F7'
        },
        {
          word: 'La cuchara',
          translations: {
            en: 'Spoon',
            ar: 'ملعقة',
            uk: 'Ложка',
            fr: 'Cuillère'
          },
          emoji: '🥄',
          color: '#EDF2F7'
        },
        {
          word: 'La comida',
          translations: {
            en: 'Food / Meal',
            ar: 'طعام',
            uk: 'Їжа',
            fr: 'Nourriture / Repas'
          },
          emoji: '🍔',
          color: '#E2F3E7'
        },
        {
          word: 'La bebida',
          translations: {
            en: 'Drink',
            ar: 'مشروب',
            uk: 'Напій',
            fr: 'Boisson'
          },
          emoji: '🥤',
          color: '#E3EEF9'
        },
        {
          word: 'El postre',
          translations: {
            en: 'Dessert',
            ar: 'حلوى',
            uk: 'Десерт',
            fr: 'Dessert'
          },
          emoji: '🍰',
          color: '#F3E8FF'
        },
        {
          word: 'La propina',
          translations: {
            en: 'Tip',
            ar: 'بخشيش / إكرامية',
            uk: 'Чайові',
            fr: 'Pourboire'
          },
          emoji: '🪙',
          color: '#FEFCBF'
        },
        {
          word: 'Pedir / Ordenar',
          translations: {
            en: 'To order',
            ar: 'طلب',
            uk: 'Замовляти',
            fr: 'Commander'
          },
          emoji: '✍️',
          color: '#EDF2F7'
        },
        {
          word: 'Pagar',
          translations: {
            en: 'To pay',
            ar: 'دفع',
            uk: 'Платити',
            fr: 'Payer'
          },
          emoji: '💳',
          color: '#EBF8FF'
        },
        {
          word: 'Reservar',
          translations: {
            en: 'To reserve',
            ar: 'حجز',
            uk: 'Резервувати',
            fr: 'Réserver'
          },
          emoji: '📞',
          color: '#E3EEF9'
        },
        {
          word: 'La reserva',
          translations: {
            en: 'Reservation',
            ar: 'حجز مؤكد',
            uk: 'Бронювання',
            fr: 'Réservation'
          },
          emoji: '📅',
          color: '#E3EEF9'
        },
        {
          word: 'El desayuno',
          translations: {
            en: 'Breakfast',
            ar: 'فطور',
            uk: 'Сніданок',
            fr: 'Déjeuner'
          },
          emoji: '🍳',
          color: '#FFF4E5'
        },
        {
          word: 'El almuerzo',
          translations: {
            en: 'Lunch',
            ar: 'غداء',
            uk: 'Обід',
            fr: 'Dîner'
          },
          emoji: '🍛',
          color: '#FFF4E5'
        },
        {
          word: 'La cena',
          translations: {
            en: 'Dinner',
            ar: 'عشاء',
            uk: 'Вечеря',
            fr: 'Souper'
          },
          emoji: '🍲',
          color: '#FFF4E5'
        },
        {
          word: 'Delicioso / Rico',
          translations: {
            en: 'Delicious',
            ar: 'لذيذ',
            uk: 'Смачний',
            fr: 'Délicieux'
          },
          emoji: '🤤',
          color: '#E2F3E7'
        },
        {
          word: 'El agua sin gas',
          translations: {
            en: 'Still water',
            ar: 'مياه غير فوارة',
            uk: 'Негазована вода',
            fr: 'Eau plate'
          },
          emoji: '💧',
          color: '#E3EEF9'
        },
        {
          word: 'El agua con gas',
          translations: {
            en: 'Sparkling water',
            ar: 'مياه فوارة',
            uk: 'Газована вода',
            fr: 'Eau gazeuse'
          },
          emoji: '🫧',
          color: '#E3EEF9'
        },
        {
          word: 'La sal',
          translations: {
            en: 'Salt',
            ar: 'ملح',
            uk: 'Сіль',
            fr: 'Sel'
          },
          emoji: '🧂',
          color: '#EDF2F7'
        },
        {
          word: 'La pimienta',
          translations: {
            en: 'Pepper',
            ar: 'فلفل أسود',
            uk: 'Перець (спеція)',
            fr: 'Poivre'
          },
          emoji: '🫙',
          color: '#EDF2F7'
        },
        {
          word: 'Tengo hambre',
          translations: {
            en: 'I am hungry',
            ar: 'أنا جائع',
            uk: 'Я jоlодний',
            fr: 'J\'ai faim'
          },
          emoji: '🤤',
          color: '#FFF4E5'
        },
        {
          word: 'Tengo sed',
          translations: {
            en: 'I am thirsty',
            ar: 'أنا عطشان',
            uk: 'Я хочу пити',
            fr: 'J\'ai soif'
          },
          emoji: '🥛',
          color: '#E3EEF9'
        }
      ],
    content: `
## Pedir en un Restaurante

Camarero: **¿Qué van a tomar?**
Tú: **Para comer quiero** arroz con pollo, por favor.
Camarero: **¿Y para beber?**
Tú: **Para beber quiero** agua.

Al final de la comida:
Tú: **La cuenta, por favor.** (Para poder pagar).
    `,
    exercises: [
      {
        id: "ex1",
        question: `Cuando terminas de comer y quieres pagar, dices... <trans en="(When you finish eating and want to pay, you say...)" ar="(ولما تخلص الأكل وتريد الدفع تقول...)" uk="(Коли ви закінчуєте їсти і хочете заплатити, ви говорите...)" fr="(Quand tu as fini de manger et que tu veux payer, tu dis...)"/>`,
        options: ["La carta, por favor. <trans en=\"(The letter, please.)\" ar=\"(الرسالة من فضلك.)\" uk=\"(Лист, будь ласка.)\" fr=\"(La lettre, s'il vous plaît.)\"/>", "La cuenta, por favor. <trans en=\"(The bill, please.)\" ar=\"(الفاتورة من فضلك.)\" uk=\"(Рахунок, будь ласка.)\" fr=\"(La facture, s'il vous plaît.)\"/>", "El menú, por favor. <trans en=\"(Menu, please.)\" ar=\"(قائمة الطعام من فضلك.)\" uk=\"(Меню, будь ласка.)\" fr=\"(Le menu, s'il vous plaît.)\"/>"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: `El camarero te pregunta "¿Qué van a _______?" y respondes que quieres agua. <trans en="(The waiter asks you "What are you going to _______?" and you answer that you want water.)" ar="(يسألك النادل "ماذا ستفعل _______؟" وأجبت أنك تريد الماء.)" uk="(Офіціант запитує вас "Що ви йдете _______?" а ти відповідаєш, що хочеш води.)" fr="(Le serveur vous demande « Qu'est-ce que tu vas _______ ? » et tu réponds que tu veux de l'eau.)"/>`,
        options: ["beber <trans en=\"(drink)\" ar=\"(شرب)\" uk=\"(пити)\" fr=\"(boire)\"/>", "comer <trans en=\"(eat)\" ar=\"(أكل)\" uk=\"(їсти)\" fr=\"(manger)\"/>", "cuenta <trans en=\"(account)\" ar=\"(حساب)\" uk=\"(рахунок)\" fr=\"(compte)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: `El papel donde está la lista de platos y precios es... <trans en="(The paper where the list of dishes and prices is...)" ar="(الورقة التي توجد بها قائمة الأطباق والأسعار...)" uk="(Папір, де перелік страв і ціни...)" fr="(Le journal où se trouve la liste des plats et les prix...)"/>`,
        options: ["El menú / La carta <trans en=\"(The menu / The letter)\" ar=\"(القائمة / الرسالة)\" uk=\"(Меню / Лист)\" fr=\"(Le menu / La lettre)\"/>", "La factura <trans en=\"(The invoice)\" ar=\"(الفاتورة)\" uk=\"(Рахунок-фактура)\" fr=\"(La facture)\"/>", "El recibo <trans en=\"(The receipt)\" ar=\"(الإيصال)\" uk=\"(Квитанція)\" fr=\"(Le reçu)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: `La persona que te trae la comida es... <trans en="(The person who brings you food is...)" ar="(الشخص الذي يحضر لك الطعام هو...)" uk="(Людина, яка приносить вам їжу, це...)" fr="(La personne qui vous apporte à manger est...)"/>`,
        options: ["El camarero <trans en=\"(The waiter)\" ar=\"(النادل)\" uk=\"(Офіціант)\" fr=\"(Le serveur)\"/>", "El cocinero <trans en=\"(The cook)\" ar=\"(الطباخ)\" uk=\"(Кухар)\" fr=\"(Le cuisinier)\"/>", "El recepcionista <trans en=\"(The receptionist)\" ar=\"(موظف الاستقبال)\" uk=\"(Портьє)\" fr=\"(La réceptionniste)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: `Para pagar, pides... <trans en="(To pay, you ask...)" ar="(للدفع، تسأل...)" uk="(Щоб заплатити, ви просите...)" fr="(Pour payer, vous demandez...)"/>`,
        options: ["La cuenta <trans en=\"(The account)\" ar=\"(الحساب)\" uk=\"(Рахунок)\" fr=\"(Le compte)\"/>", "La carta <trans en=\"(The letter)\" ar=\"(الرسالة)\" uk=\"(Лист)\" fr=\"(La lettre)\"/>", "El menú <trans en=\"(The menu)\" ar=\"(القائمة)\" uk=\"(Меню)\" fr=\"(Le menu)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: `El primer plato que comes se llama... <trans en="(The first dish you eat is called...)" ar="(أول طبق تأكله يسمى...)" uk="(Перша страва, яку ви їсте, називається...)" fr="(Le premier plat que vous mangez s'appelle...)"/>`,
        options: ["Primer plato o entrante <trans en=\"(First course or starter)\" ar=\"(الدورة الأولى أو المبتدئين)\" uk=\"(Перша страва або закуска)\" fr=\"(Entrée ou entrée)\"/>", "Postre <trans en=\"(Dessert)\" ar=\"(حلوى)\" uk=\"(Десерт)\" fr=\"(Desserts)\"/>", "Bebida <trans en=\"(Drink)\" ar=\"(اشرب)\" uk=\"(Пити)\" fr=\"(Boire)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: `Lo dulce que comes al final de la comida es... <trans en="(The sweet thing you eat at the end of the meal is...)" ar="(الشيء الحلو الذي تأكله في آخر الوجبة هو...)" uk="(Солодке, що ви їсте в кінці їжі, це...)" fr="(La chose sucrée que vous mangez à la fin du repas est...)"/>`,
        options: ["El postre <trans en=\"(The dessert)\" ar=\"(الحلوى)\" uk=\"(Десерт)\" fr=\"(Le dessert)\"/>", "El entrante <trans en=\"(The starter)\" ar=\"(المبتدأ)\" uk=\"(Стартер)\" fr=\"(Le démarreur)\"/>", "La guarnición <trans en=\"(The garrison)\" ar=\"(الحامية)\" uk=\"(Гарнізон)\" fr=\"(La garnison)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: `Para reservar una mesa dices... <trans en="(To reserve a table you say...)" ar="(لحجز طاولة تقول...)" uk="(Щоб забронювати столик, ви говорите...)" fr="(Pour réserver une table vous dites...)"/>`,
        options: ["Quería reservar una mesa, por favor <trans en=\"(I would like to reserve a table, please)\" ar=\"(أريد حجز طاولة من فضلك)\" uk=\"(Я хочу забронювати столик, будь ласка)\" fr=\"(Je souhaite réserver une table, s'il vous plaît)\"/>", "Quiero pagar la cuenta <trans en=\"(I want to pay the bill)\" ar=\"(أريد أن أدفع الفاتورة)\" uk=\"(Я хочу оплатити рахунок)\" fr=\"(Je veux payer la facture)\"/>", "¿Dónde está el baño? <trans en=\"(Where is the bathroom?)\" ar=\"(أين الحمام؟)\" uk=\"(Де ванна кімната?)\" fr=\"(Où est la salle de bain ?)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: `¿Qué le dices al camarero para pedir? <trans en="(What do you say to the waiter to order?)" ar="(ماذا تقول للنادل ليطلب؟)" uk="(Що ви скажете офіціанту замовити?)" fr="(Que dites-vous au serveur pour commander ?)"/>`,
        options: ["Para mí, la ensalada por favor <trans en=\"(For me, the salad please)\" ar=\"(بالنسبة لي، السلطة من فضلك)\" uk=\"(Для мене, будь ласка, салат)\" fr=\"(Pour moi, la salade s'il vous plaît)\"/>", "Tráeme la cuenta <trans en=\"(Bring me the bill)\" ar=\"(أحضر لي الفاتورة)\" uk=\"(Принесіть мені рахунок)\" fr=\"(Apportez-moi la facture)\"/>", "Adiós <trans en=\"(Goodbye)\" ar=\"(وداعا)\" uk=\"(До побачення)\" fr=\"(Au revoir)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: `Si la comida no tiene sal, le falta... <trans en="(If the food does not have salt, it lacks...)" ar="(إذا لم يكن الطعام به ملح فإنه يفتقر إلى...)" uk="(Якщо в їжі немає солі, їй бракує...)" fr="(Si la nourriture n'a pas de sel, il lui manque...)"/>`,
        options: ["Sabor / Sal <trans en=\"(Flavor/Salt)\" ar=\"(نكهة/ملح)\" uk=\"(Смак/Сіль)\" fr=\"(Saveur/Sel)\"/>", "Azúcar <trans en=\"(Sugar)\" ar=\"(سكر)\" uk=\"(Цукор)\" fr=\"(Sucre)\"/>", "Agua <trans en=\"(Water)\" ar=\"(ماء)\" uk=\"(Вода)\" fr=\"(Eau)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: `El dinero extra que dejas si el servicio es bueno es... <trans en="(The extra money you leave if the service is good is...)" ar="(الأموال الإضافية التي تتركها إذا كانت الخدمة جيدة هي ...)" uk="(Додаткові гроші, які ви залишаєте, якщо послуга хороша, це...)" fr="(L'argent supplémentaire que vous laissez si le service est bon est...)"/>`,
        options: ["La propina <trans en=\"(The tip)\" ar=\"(النصيحة)\" uk=\"(Підказка)\" fr=\"(Le conseil)\"/>", "El impuesto <trans en=\"(The tax)\" ar=\"(الضريبة)\" uk=\"(Податок)\" fr=\"(La taxe)\"/>", "El billete <trans en=\"(The ticket)\" ar=\"(التذكرة)\" uk=\"(Квиток)\" fr=\"(Le billet)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: `¿Qué usas para limpiarte la boca en la mesa? <trans en="(What do you use to clean your mouth at the table?)" ar="(ماذا تستخدم لتنظيف فمك على الطاولة؟)" uk="(Чим ви чистите рот за столом?)" fr="(Qu'utilisez-vous pour vous nettoyer la bouche à table ?)"/>`,
        options: ["La servilleta <trans en=\"(The napkin)\" ar=\"(المنديل)\" uk=\"(Серветка)\" fr=\"(La serviette)\"/>", "El mantel <trans en=\"(The tablecloth)\" ar=\"(مفرش المائدة)\" uk=\"(Скатертина)\" fr=\"(La nappe)\"/>", "El vaso <trans en=\"(The glass)\" ar=\"(الزجاج)\" uk=\"(Скло)\" fr=\"(Le verre)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: `Si la carne está muy hecha, está... <trans en="(If the meat is well done, it is...)" ar="(إذا نضج اللحم جيداً فهو...)" uk="(Якщо м'ясо добре просмажене, воно...)" fr="(Si la viande est bien cuite, elle l'est...)"/>`,
        options: ["Muy cocinada <trans en=\"(Very cooked)\" ar=\"(مطبوخة جدًا)\" uk=\"(Дуже приготований)\" fr=\"(Très cuit)\"/>", "Poco cocinada <trans en=\"(Undercooked)\" ar=\"(غير مطبوخ جيدًا)\" uk=\"(Недоварені)\" fr=\"(Pas assez cuit)\"/>", "Cruda <trans en=\"(Raw)\" ar=\"(خام)\" uk=\"(Сирий)\" fr=\"(Brut)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: `Una bebida con gas muy común es... <trans en="(A very common carbonated drink is...)" ar="(مشروب غازي شائع جدًا...)" uk="(Дуже поширеним газованим напоєм є...)" fr="(Une boisson gazeuse très courante est...)"/>`,
        options: ["El refresco / Agua con gas <trans en=\"(Soft drink / Sparkling water)\" ar=\"(مشروب غازي / مياه غازية)\" uk=\"(Безалкогольний напій / Газована вода)\" fr=\"(Boisson gazeuse / Eau gazeuse)\"/>", "El vino tinto <trans en=\"(Red wine)\" ar=\"(النبيذ الاحمر)\" uk=\"(Червоне вино)\" fr=\"(Vin rouge)\"/>", "El café <trans en=\"(The coffee)\" ar=\"(القهوة)\" uk=\"(Кава)\" fr=\"(Le café)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: `Si eres vegetariano, no comes... <trans en="(If you are vegetarian, you don't eat...)" ar="(إذا كنت نباتيًا، فلا تأكل...)" uk="(Якщо ви вегетаріанець, ви не їсте...)" fr="(Si vous êtes végétarien, vous ne mangez pas...)"/>`,
        options: ["Carne ni pescado <trans en=\"(Meat or fish)\" ar=\"(اللحوم أو الأسماك)\" uk=\"(М'ясо або риба)\" fr=\"(Viande ou poisson)\"/>", "Verduras <trans en=\"(Vegetables)\" ar=\"(خضار)\" uk=\"(Овочі)\" fr=\"(Légumes)\"/>", "Frutas <trans en=\"(Fruits)\" ar=\"(فواكه)\" uk=\"(Фрукти)\" fr=\"(Fruits)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: `El cuchillo, tenedor y cuchara son los... <trans en="(The knife, fork and spoon are the...)" ar="(السكين والشوكة والملعقة هي...)" uk="(Ніж, виделка і ложка - це...)" fr="(Le couteau, la fourchette et la cuillère sont les...)"/>`,
        options: ["Cubiertos <trans en=\"(Cutlery)\" ar=\"(أدوات المائدة)\" uk=\"(Столові прибори)\" fr=\"(Couverts)\"/>", "Platos <trans en=\"(Dishes)\" ar=\"(أطباق)\" uk=\"(Посуд)\" fr=\"(Plats)\"/>", "Vasos <trans en=\"(Glasses)\" ar=\"(نظارات)\" uk=\"(Окуляри)\" fr=\"(Lunettes)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: `¿Qué pides para beber por la mañana normalmente? <trans en="(What do you usually order to drink in the morning?)" ar="(ماذا تطلب عادة أن تشرب في الصباح؟)" uk="(Що ви зазвичай замовляєте випити вранці?)" fr="(Que commandez-vous habituellement à boire le matin ?)"/>`,
        options: ["Un café o té <trans en=\"(A coffee or tea)\" ar=\"(قهوة أو شاي)\" uk=\"(Кава чи чай)\" fr=\"(Un café ou un thé)\"/>", "Una cerveza <trans en=\"(A beer)\" ar=\"(بيرة)\" uk=\"(Пиво)\" fr=\"(Une bière)\"/>", "Una copa de vino <trans en=\"(A glass of wine)\" ar=\"(كأس من النبيذ)\" uk=\"(Келих вина)\" fr=\"(Un verre de vin)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: `Si no quieres comer en el restaurante, pides comida para... <trans en="(If you don't want to eat at the restaurant, you order food for...)" ar="(إذا كنت لا ترغب في تناول الطعام في المطعم، فاطلب الطعام لـ...)" uk="(Якщо ви не хочете їсти в ресторані, ви замовляєте їжу для...)" fr="(Si vous ne voulez pas manger au restaurant, vous commandez à manger pour...)"/>`,
        options: ["Llevar <trans en=\"(Carry)\" ar=\"(حمل)\" uk=\"(Нести)\" fr=\"(Porter)\"/>", "Tirar <trans en=\"(Throw)\" ar=\"(رمي)\" uk=\"(Кинути)\" fr=\"(Lancer)\"/>", "Dormir <trans en=\"(Sleep)\" ar=\"(النوم)\" uk=\"(Спати)\" fr=\"(Dormir)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: `¿Qué significa 'Menú del día'? <trans en="(What does 'Menu of the day' mean?)" ar="(ماذا تعني "قائمة اليوم"؟)" uk="(Що означає «Меню дня»?)" fr="(Que signifie « Menu du jour » ?)"/>`,
        options: ["Un menú cerrado más económico <trans en=\"(A more economical closed menu)\" ar=\"(قائمة مغلقة أكثر اقتصادا)\" uk=\"(Більш економне закрите меню)\" fr=\"(Un menu fermé plus économique)\"/>", "El plato más caro <trans en=\"(The most expensive dish)\" ar=\"(أغلى طبق)\" uk=\"(Найдорожча страва)\" fr=\"(Le plat le plus cher)\"/>", "Comida para niños <trans en=\"(Food for children)\" ar=\"(أغذية للأطفال)\" uk=\"(Харчування для дітей)\" fr=\"(Nourriture pour enfants)\"/>"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: `El papel donde está la lista de platos y precios es... (Extra) <trans en="(The paper where the list of dishes and prices is... (Extra))" ar="(الورقة التي توجد بها قائمة الأطباق والأسعار... (إضافي))" uk="(Папір, де перелік страв і ціни... (Додатково))" fr="(Le journal où se trouve la liste des plats et les prix... (En Supplément))"/>`,
        options: ["El menú / La carta <trans en=\"(The menu / The letter)\" ar=\"(القائمة / الرسالة)\" uk=\"(Меню / Лист)\" fr=\"(Le menu / La lettre)\"/>", "La factura <trans en=\"(The invoice)\" ar=\"(الفاتورة)\" uk=\"(Рахунок-фактура)\" fr=\"(La facture)\"/>", "El recibo <trans en=\"(The receipt)\" ar=\"(الإيصال)\" uk=\"(Квитанція)\" fr=\"(Le reçu)\"/>"],
        correctAnswer: 0
      }
    
    ]
  },
  {
    id: "b1-gram-futuro-condicional",
    topic: "Tiempos Verbales",
    title: "El Futuro y el Condicional",
    level: "B1",
    category: "Gramática",
    description: "Aprende a hacer predicciones y a hablar de situaciones hipotéticas o deseos.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    emoji: "🚀",
    color: "#E2F3E7",
    content: `
## El Futuro Simple y el Condicional Simple

En el nivel B1 aprendemos a hablar de acciones futuras o predicciones de forma directa (Futuro), y a expresar deseos, hipótesis o consejos corteses (Condicional). Ambos tiempos comparten la particularidad de que **las desinencias se añaden al infinitivo completo del verbo**.

### 1. El Futuro Simple (Predicciones y planes seguros)
Se forma añadiendo las desinencias al infinitivo. Las terminaciones son iguales para **-AR**, **-ER** y **-IR**.
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Desinencia</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo (Hablar)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo (Comer)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo (Vivir)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-é</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablaré</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comeré</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">viviré</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I will talk/eat/live</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-ás</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablarás</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comerás</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">vivirás</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You will talk/eat/live</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-á</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablará</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comerá</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">vivirá</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">He/She will talk/eat/live</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-emos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablaremos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comeremos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">viviremos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We will talk/eat/live</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-éis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablaréis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comeréis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">viviréis</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You all will talk/eat/live</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-án</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablarán</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comerán</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">vivirán</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They will talk/eat/live</td></tr></tbody></table></div>
---

### 2. El Condicional Simple (Deseos, hipótesis y consejos)
Se forma añadiendo las desinencias al infinitivo. Las terminaciones también son iguales para **-AR**, **-ER** y **-IR**.
<div class="overflow-x-auto my-6 border border-stone-200 rounded-2xl shadow-sm bg-white"><table class="min-w-full divide-y divide-stone-200"><thead class="bg-stone-50"><tr><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Persona</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Desinencia</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo (Hablar)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo (Comer)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Ejemplo (Vivir)</th><th scope="col" class="px-5 py-3 text-left text-[11px] font-bold text-stone-500 uppercase tracking-wider">Traducción</th></tr></thead><tbody class="divide-y divide-stone-100 bg-white"><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Yo</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-ía</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablaría</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comería</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">viviría</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">I would talk/eat/live</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Tú</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-ías</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablarías</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comerías</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">vivirías</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You would talk/eat/live</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Él / Ella / Usted</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-ía</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablaría</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comería</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">viviría</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">He/She would talk/eat/live</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Nosotros / Nosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-íamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablaríamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comeríamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">viviríamos</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">We would talk/eat/live</td></tr><tr class="bg-white"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Vosotros / Vosotras</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-íais</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablaríais</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comeríais</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">viviríais</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">You all would talk/eat/live</td></tr><tr class="bg-stone-50/50"><td class="px-5 py-4 text-xs sm:text-sm font-bold text-[#192A56]">Ellos / Ellas / Ustedes</td><td class="px-5 py-4 text-xs sm:text-sm font-black text-[#00823B] text-sm sm:text-base">-ían</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-800 font-medium">hablarían</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">comerían</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">vivirían</td><td class="px-5 py-4 text-xs sm:text-sm text-stone-500 italic">They would talk/eat/live</td></tr></tbody></table></div>
*Nota sobre irregulares:* Verbos como **Tener** (tendr-), **Poder** (podr-), **Hacer** (har-), **Decir** (dir-) cambian su raíz, pero usan estas mismas terminaciones tanto en futuro como en condicional.
    `,
    exercises: [
      {
        id: "ex1",
        question: "Yo ___ vivido en otro país. <trans en=\"(I ___)\" ar=\"(أنا ___)\" uk=\"(Я ___)\" fr=\"(Je ___)\"/>",
        options: ["he","has","ha"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Tú ___ trabajado antes. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["has","he","ha"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Él ___ estudiado español. <trans en=\"(He/She ___)\" ar=\"(هو/هي ___)\" uk=\"(Він/Вона ___)\" fr=\"(Il/Elle ___)\"/>",
        options: ["ha","he","han"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Ella ___ viajado poco. <trans en=\"(She ___)\" ar=\"(هي ___)\" uk=\"(Вона ___)\" fr=\"(Elle ___)\"/>",
        options: ["ha","he","han"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Nosotros ___ aprendido mucho. <trans en=\"(We ___)\" ar=\"(نحن ___)\" uk=\"(Ми ___)\" fr=\"(Nous ___)\"/>",
        options: ["hemos","he","ha"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Vosotros ___ cambiado de ciudad. <trans en=\"(You all ___)\" ar=\"(أنتم ___)\" uk=\"(Ви всі ___)\" fr=\"(Vous ___)\"/>",
        options: ["habéis","he","ha"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Ellos ___ empezado una nueva vida. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["han","he","ha"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Yo ___ terminado un trabajo. <trans en=\"(I ___ work.)\" ar=\"(أنا ___ العمل.)\" uk=\"(Я ___ роботу.)\" fr=\"(Je ___ le travail.)\"/>",
        options: ["he","has","ha"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Tú ___ conocido a muchas personas. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["has","he","ha"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Ellas ___ ayudado a su familia. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["han","he","ha"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "He ___ (vivir) en una ciudad grande. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["vivido","vivado","vividoo"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "He ___ (trabajar) muchos años. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["trabajado","trabajado","trabajadoo"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "He ___ (estudiar) español. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["estudiado","estudiado","estudiadoo"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "He ___ (viajar) a otro país. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["viajado","viajado","viajadoo"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "He ___ (aprender) mucho aquí. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["aprendido","aprendado","aprendidoo"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "He ___ (cambiar) de trabajo. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["cambiado","cambiado","cambiadoo"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "He ___ (empezar) una nueva etapa. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["empezado","empezado","empezadoo"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "He ___ (terminar) mis estudios. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["terminado","terminado","terminadoo"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "He ___ (conocer) a nuevas personas. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["conocido","conocado","conocidoo"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "He ___ (ayudar) a mi familia. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["ayudado","ayudado","ayudadoo"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b1-vocab-opiniones",
    topic: "Opiniones y Consejos",
    title: "Dar Consejos y Expresar Opiniones",
    level: "B1",
    category: "Vocabulario",
    description: "Expresa lo que piensas sobre diferentes temas y da recomendaciones a otros.",
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=80",
    emoji: "💡",
    color: "#FFF4E5",
    content: `
## Expresar Opinión

Para decir lo que piensas de forma clara:
*   **En mi opinión**, el español es útil.
*   **Creo que** esta ciudad es hermosa.
*   **Me parece que** va a llover.

## Dar Consejos

Cuando alguien tiene un problema:
*   **Yo que tú,** estudiaría más. (Condicional)
*   **Deberías** descansar.
*   **Te aconsejo que** hables con él.
    `,
    exercises: [
      {
        id: "ex1",
        question: "Ese día yo ___ al hospital. <trans en=\"(I ___)\" ar=\"(أنا ___)\" uk=\"(Я ___)\" fr=\"(Je ___)\"/>",
        options: ["fui","fuiste","fue"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Tú ___ a la ciudad por la mañana. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["fuiste","fui","fue"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Él ___ al trabajo temprano. <trans en=\"(He/She ___ work.)\" ar=\"(هو/هي ___ العمل.)\" uk=\"(Він/Вона ___ роботу.)\" fr=\"(Il/Elle ___ le travail.)\"/>",
        options: ["fue","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Ella ___ a la escuela. <trans en=\"(She ___)\" ar=\"(هي ___)\" uk=\"(Вона ___)\" fr=\"(Elle ___)\"/>",
        options: ["fue","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Nosotros ___ a casa por la tarde. <trans en=\"(We ___ house.)\" ar=\"(نحن ___ المنزل.)\" uk=\"(Ми ___ будинку.)\" fr=\"(Nous ___ la maison.)\"/>",
        options: ["fuimos","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Vosotros ___ a la oficina. <trans en=\"(You all ___)\" ar=\"(أنتم ___)\" uk=\"(Ви всі ___)\" fr=\"(Vous ___)\"/>",
        options: ["fuisteis","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Ellos ___ a la calle. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["fueron","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Yo ___ a buscar ayuda. <trans en=\"(I ___)\" ar=\"(أنا ___)\" uk=\"(Я ___)\" fr=\"(Je ___)\"/>",
        options: ["fui","fuiste","fue"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Tú ___ al centro. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["fuiste","fui","fue"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Ellas ___ a un lugar importante. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["fueron","fui","fuiste"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Mi familia ___ a verme ese día. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["vine","viniste","vino"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Tú ___ conmigo por la tarde. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["viniste","vine","vino"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Él ___ temprano. <trans en=\"(He/She ___)\" ar=\"(هو/هي ___)\" uk=\"(Він/Вона ___)\" fr=\"(Il/Elle ___)\"/>",
        options: ["vino","vine","viniste"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Ella ___ sola. <trans en=\"(She ___)\" ar=\"(هي ___)\" uk=\"(Вона ___)\" fr=\"(Elle ___)\"/>",
        options: ["vino","vine","viniste"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Nosotros ___ juntos. <trans en=\"(We ___)\" ar=\"(نحن ___)\" uk=\"(Ми ___)\" fr=\"(Nous ___)\"/>",
        options: ["vinimos","vine","viniste"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Vosotros ___ más tarde. <trans en=\"(You all ___)\" ar=\"(أنتم ___)\" uk=\"(Ви всі ___)\" fr=\"(Vous ___)\"/>",
        options: ["vinisteis","vine","viniste"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Ellos ___ desde la ciudad. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["vinieron","vine","viniste"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Yo ___ a casa cansado. <trans en=\"(I ___ house.)\" ar=\"(أنا ___ المنزل.)\" uk=\"(Я ___ будинку.)\" fr=\"(Je ___ la maison.)\"/>",
        options: ["vine","viniste","vino"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Tú ___ con una idea. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["viniste","vine","vino"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Ellas ___ a ayudarme. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["vinieron","vine","viniste"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b1-gram-conectores",
    topic: "Conectores",
    title: "Conectores del Discurso",
    level: "B1",
    category: "Gramática",
    description: "Conecta tus ideas usando 'porque', 'aunque', 'sin embargo' para hablar mejor.",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80",
    emoji: "🔗",
    color: "#EBF8FF",
    content: `
## Unir nuestras frases

Los conectores son palabras que unen ideas y hacen que hables de forma más compleja.

*   **Porque** (Causa): Estudio español **porque** vivo aquí.
*   **Aunque** (Concesión / Obstáculo): Voy a ir a trabajar **aunque** estoy cansado.
*   **Sin embargo** (Contraste): Me gusta la ciudad. **Sin embargo**, es muy cara.
*   **Por eso** (Consecuencia): Está lloviendo mucho, **por eso** me quedo en casa.
    `,
    exercises: [
      {
        id: "ex1",
        question: "___ viví en otro país, ___ vivo aquí. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "___ trabajé en el campo, ___ trabajo en la ciudad. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "___ estudié poco, ___ estudio español. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "___ fui estudiante, ___ soy trabajador. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "___ estuve solo, ___ estoy con mi familia. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "___ tuve problemas, ___ estoy mejor. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "___ viví lejos, ___ vivo aquí. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "___ trabajé mucho, ___ trabajo menos. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "___ fui nuevo, ___ soy conocido. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "___ estuve mal, ___ estoy bien. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví allí, ahora vivo aquí.","Antes vivo allí, ahora viví aquí.","Antes viviré allí, ahora vivo aquí."],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Primera parte: PASADO (indefinido) / Segunda parte: PRESENTE <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Antes ___ (vivir) en el campo, ahora ___ (vivir) in la ciudad. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Antes ___ (trabajar) poco, ahora ___ (trabajar) más. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Antes ___ (estudiar) nada, ahora ___ (estudiar) español. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Antes ___ (tener) miedo, ahora ___ (tener) más confianza. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Antes ___ (ser) estudiante, ahora ___ (ser) trabajador. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Antes ___ (estar) solo, ahora ___ (estar) acompañado. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Antes ___ (vivir) allí, ahora ___ (vivir) aquí. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Antes ___ (trabajar) en casa, ahora ___ (trabajar) fuera. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Antes ___ (tener) problemas, ahora ___ (estar) mejor. <trans en=\"(Practice sentence)\" ar=\"(جملة تدريبية)\" uk=\"(Речення для практики)\" fr=\"(Phrase de pratique)\"/>",
        options: ["Antes viví en el campo, ahora vivo en la ciudad.","Antes vivo en el campo, ahora viví en la ciudad.","Antes viviré en el campo, ahora vivo en la ciudad."],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b2-gram-hipotesis",
    topic: "Hipótesis",
    title: "Expresión de Hipótesis y Probabilidad",
    level: "B2",
    category: "Gramática",
    description: "Aprende a formular suposiciones complejas usando el condicional y el subjuntivo.",
    imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=80",
    emoji: "🎲",
    color: "#F3E8FF",
    content: `
## Expresando Probabilidad e Hipótesis

En el nivel B2, no afirmamos cosas directamente, sino que a menudo evaluamos su probabilidad.

### Probabilidad en Presente
Para indicar que algo es probable pero no seguro:
*   **Es probable que** + Subjuntivo (Es probable que *llueva* hoy).
*   **Quizás / Tal vez** + Subjuntivo (Quizás *venga* más tarde).
*   **A lo mejor** + Indicativo (A lo mejor *viene* más tarde).

### Hipótesis Irreales (Si + Imperfecto Subjuntivo + Condicional)
Situaciones que no son reales en el presente:
*   Si **tuviera** dinero, **compraría** una casa. (Pero no tengo).
*   Si **hablara** francés, **viviría** en París.
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si ___ (tener, yo) dinero, viajaría por todo el mundo.",
        options: ["tuviera","tengo","tendría"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Si ___ (hacer) buen tiempo mañana, iremos al campo.",
        options: ["hace","hiciera","haría"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Habla de España como si ___ (conocer) todo el país.",
        options: ["conociera","conoce","conocería"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "A lo mejor ___ (venir) más tarde. (Usa Indicativo)",
        options: ["viene","venga","vendría"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Es muy probable que ___ (llegar) tarde por el tráfico.",
        options: ["lleguen","llegarían","llegan"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "En caso de que no ___ (encontrar) las llaves, llámame.",
        options: ["encuentres","encuentras","encontrarás"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Quizás nosotros ___ (ir) de vacaciones en julio.",
        options: ["vamos","vayamos","iríamos"],
        correctAnswer: 1
      },
      {
        id: "ex8",
        question: "Si yo ___ (ser) tú, no diría nada.",
        options: ["fuera","sería","soy"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Es posible que ella ya lo ___ (saber).",
        options: ["sepa","sabe","sabrá"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Por si ___ (acaso), llevaré un paraguas.",
        options: ["acaso","llueve","llueva"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: "Siempre que ___ (poder), te ayudaré.",
        options: ["pueda","puedo","podré"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "A condición de que tú ___ (pagar), iré contigo.",
        options: ["pagues","pagas","pagarás"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Como ___ (perder, yo) el autobús, llegaré tarde.",
        options: ["pierda","pierdo","perderé"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Si ___ (estudiar, tú) más, habrías aprobado.",
        options: ["hubieras estudiado","estudiaste","estudiaras"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Aunque no ___ (querer), tendrás que hacerlo.",
        options: ["quieras","quieres","querrás"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "A lo mejor no ___ (haber) clase mañana.",
        options: ["hay","haya","habrá"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Tal vez ___ (tener) que cancelar el viaje.",
        options: ["tengamos","tenemos","tendríamos"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Si me ___ (ayudar), terminaré más rápido.",
        options: ["ayudas","ayudaras","ayudarías"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Es probable que ellos ___ (querer) venir.",
        options: ["quieran","quieren","querrían"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Si ___ (ver) a Juan, dale recuerdos.",
        options: ["ves","veas","verás"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b2-comp-debates",
    topic: "Comprensión",
    title: "Debate: Texto Argumentativo",
    level: "B2",
    category: "Comprensión",
    description: "Comprende textos de nivel avanzado y practica cómo defender una postura sobre temas sociales.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
    emoji: "⚖️",
    color: "#FFF5F5",
    content: `
## LECTURA: El impacto de la tecnología

> *"Es innegable que la tecnología ha facilitado nuestras vidas en innumerables aspectos. Sin embargo, existe un debate creciente sobre si estamos perdiendo habilidades sociales esenciales. Por un lado, los defensores de la digitalización argumentan que nunca hemos estado tan conectados. Por otro lado, los críticos advierten sobre una epidemia de soledad disfrazada de hiperconexión, donde preferimos enviar un mensaje antes que entablar una conversación frente a frente."*

### Análisis del Debate
En B2 debes identificar las **dos posturas** en un debate y los conectores que estructuran el argumento ("Por un lado...", "Por otro lado...").
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué conector introduce un argumento opuesto?",
        options: ["Por consiguiente","Por el contrario","Además"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Para mostrar acuerdo parcial, dices:",
        options: ["Estoy totalmente de acuerdo.","En parte tienes razón, pero...","No lo veo así."],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "Un sinónimo formal de 'sin embargo' es...",
        options: ["No obstante","Por lo tanto","Porque"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "¿Qué frase introduce una opinión propia?",
        options: ["Desde mi punto de vista...","Según afirman los críticos...","Es evidente que..."],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "El conector 'por ende' expresa...",
        options: ["Causa","Consecuencia","Oposición"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: "Para estructurar los argumentos ordenadamente:",
        options: ["En primer lugar / Por otro lado / En conclusión","Hola / Adiós / Gracias","Porque / Aunque / Pero"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Si dices 'comparto tu postura', estás mostrando...",
        options: ["Desacuerdo","Acuerdo","Duda"],
        correctAnswer: 1
      },
      {
        id: "ex8",
        question: "El término 'discrepar' significa...",
        options: ["Estar en desacuerdo","Estar de acuerdo","Argumentar bien"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "¿Cuál no es un conector conclusivo?",
        options: ["En resumen","Por consiguiente","Por el contrario"],
        correctAnswer: 2
      },
      {
        id: "ex10",
        question: "Para refutar un argumento de forma educada:",
        options: ["Estás equivocado.","Entiendo tu postura, sin embargo discrepo en...","Cállate."],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: "La expresión 'a mi parecer' es equivalente a...",
        options: ["En mi opinión","Por eso","Aunque"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "El conector 'puesto que' introduce una...",
        options: ["Causa","Consecuencia","Condición"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "¿Qué conector sirve para añadir información?",
        options: ["Asimismo","En cambio","Por tanto"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "La frase 'es innegable que...' sirve para...",
        options: ["Presentar un hecho indiscutible","Expresar una hipótesis","Mostrar duda"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Si dices 'poner en tela de juicio', significa...",
        options: ["Dudar de la veracidad de algo","Aceptar algo sin dudar","Escribir un juicio"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Un argumento 'sólido' es aquel que está...",
        options: ["Bien fundamentado y difícil de refutar","Lleno de contradicciones","Escrito en piedra"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Para concluir un debate podemos usar:",
        options: ["En resumidas cuentas...","Para empezar...","Por otro lado..."],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "El conector 'aun así' expresa...",
        options: ["Concesión o contraste","Causa","Consecuencia"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Si apoyas una idea, estás a ___ de ella.",
        options: ["favor","contra","lado"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Si rechazas una idea, estás en ___ de ella.",
        options: ["contra","favor","pro"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b2-vocab-formal-informal",
    topic: "Registros",
    title: "Estilo Formal e Informal",
    level: "B2",
    category: "Vocabulario",
    description: "Adapta tu forma de hablar al contexto: escribir un email formal vs charlar con amigos.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
    emoji: "👔",
    color: "#E2E8F0",
    content: `
## Adaptar el Registro (Tú vs Usted)

En un nivel alto, debes saber cambiar de vocabulario dependiendo de con quién hablas.

### Estilo Informal (Amigos, familia, redes sociales)
*   Léxico relajado, uso del "Tú".
*   *¡Hola! ¿Qué tal todo? Escríbeme cuando puedas.*

### Estilo Formal (Trabajo, instituciones, solicitudes)
*   Uso de "Usted", saludos formales y condicional de cortesía.
*   *Estimado Sr. Pérez: Le escribo para solicitar información... Atentamente, Juan.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál es el saludo más adecuado para una carta formal?",
        options: ["¡Hola, qué tal!","Estimado Señor:","Querido amigo:"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cómo se despide uno en un correo informal?",
        options: ["Le saluda atentamente,","Un abrazo,","Sin otro particular, se despide"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "Usted se utiliza para un registro...",
        options: ["Formal","Informal","Ambos"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Un sinónimo formal de 'dar' es...",
        options: ["Entregar / Facilitar","Pasar","Regalar"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "En una entrevista de trabajo, debes usar el pronombre...",
        options: ["Tú","Usted","Vosotros"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: "La frase 'Quedo a su entera disposición' es típica del registro...",
        options: ["Formal","Informal","Familiar"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "¿Qué palabra es más formal?",
        options: ["Pedir","Solicitar","Querer"],
        correctAnswer: 1
      },
      {
        id: "ex8",
        question: "Para disculparse formalmente escribimos:",
        options: ["Lo siento mucho, tío.","Le ruego disculpe las molestias.","Perdona, no volverá a pasar."],
        correctAnswer: 1
      },
      {
        id: "ex9",
        question: "La palabra 'curro' es informal para...",
        options: ["Trabajo","Dinero","Fiesta"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Un correo formal debe terminar con:",
        options: ["Atentamente,","Besos,","Hasta luego,"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "La expresión '¿Podrías decirme...?' en formal se convierte en:",
        options: ["¿Sería tan amable de indicarme...?","Dime ahora mismo...","Oye, cuéntame..."],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "La palabra 'guay' es un adjetivo de registro...",
        options: ["Informal / Coloquial","Formal","Literario"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Si nos dirigimos a una persona con cargo importante, usamos el tratamiento:",
        options: ["Señor / Señora","Tú","Che"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "'Adjunto remito mi currículum' es adecuado para:",
        options: ["Enviar a un amigo","Solicitar un empleo formal","Subir a una red social"],
        correctAnswer: 1
      },
      {
        id: "ex15",
        question: "La palabra 'pasta' es coloquial para...",
        options: ["Dinero","Comida italiana","Las dos son correctas"],
        correctAnswer: 2
      },
      {
        id: "ex16",
        question: "En un email informal a un compañero de clase:",
        options: ["Hola Luis, ¿cómo vas?","Estimado alumno Luis:","A la atención de Luis:"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "La expresión 'ponerse en contacto' es...",
        options: ["Formal y común","Coloquial e informal","Incorrecta"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Para concertar una cita de negocios formalmente:",
        options: ["¿Le vendría bien reunirnos el martes?","¿Quedamos el martes a ver qué pasa?","Nos vemos el martes sin falta."],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "La palabra 'chaval' es informal para...",
        options: ["Chico / Joven","Perro","Trabajo"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Un registro formal evita el uso de...",
        options: ["Modismos y muletillas coloquiales","Verbos en condicional","Vocabulario preciso"],
        correctAnswer: 0
      }
    ]
  }
,
  {
    id: "b1-comp-narracion",
    topic: "Narración",
    title: "Lectura: Un viaje inolvidable",
    level: "B1",
    category: "Comprensión",
    description: "Aprende a narrar sucesos del pasado y a seguir el hilo de una historia.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=80",
    emoji: "✈️",
    color: "#FFF4E5",
    vocabulary: [
        {
          word: 'El viaje',
          translations: {
            en: 'Trip',
            ar: 'الرحلة',
            uk: 'Подорож',
            fr: 'Voyage'
          },
          emoji: '🧳',
          color: '#FFF4E5'
        },
        {
          word: 'El recuerdo',
          translations: {
            en: 'Memory',
            ar: 'الذكرى',
            uk: 'Спогад',
            fr: 'Souvenir'
          },
          emoji: '💭',
          color: '#F3E8FF'
        },
        {
          word: 'Planificar',
          translations: {
            en: 'To plan',
            ar: 'التخطيط',
            uk: 'Планувати',
            fr: 'Planifier'
          },
          emoji: '📅',
          color: '#E3EEF9'
        },
        {
          word: 'El aeropuerto',
          translations: {
            en: 'Airport',
            ar: 'المطار',
            uk: 'Аеропорт',
            fr: 'Aéroport'
          },
          emoji: '🛫',
          color: '#EBF8FF'
        },
        {
          word: 'El equipaje',
          translations: {
            en: 'Luggage',
            ar: 'الأمتعة',
            uk: 'Багаж',
            fr: 'Bagages'
          },
          emoji: '🧳',
          color: '#FEFCBF'
        },
        {
          word: 'El billete',
          translations: {
            en: 'Ticket',
            ar: 'تذكرة',
            uk: 'Квиток',
            fr: 'Billet'
          },
          emoji: '🎫',
          color: '#E2F3E7'
        },
        {
          word: 'El pasaporte',
          translations: {
            en: 'Passport',
            ar: 'جواز سفر',
            uk: 'Паспорт',
            fr: 'Passeport'
          },
          emoji: '📕',
          color: '#FCE8E8'
        },
        {
          word: 'El hotel',
          translations: {
            en: 'Hotel',
            ar: 'فندق',
            uk: 'Готель',
            fr: 'Hôtel'
          },
          emoji: '🏨',
          color: '#EDF2F7'
        },
        {
          word: 'El destino',
          translations: {
            en: 'Destination',
            ar: 'الوجهة',
            uk: 'Напрямок',
            fr: 'Destination'
          },
          emoji: '📍',
          color: '#FFF4E5'
        },
        {
          word: 'Hacer turismo',
          translations: {
            en: 'Sightseeing',
            ar: 'السياحة',
            uk: 'Огляд визначних пам\'яток',
            fr: 'Faire du tourisme'
          },
          emoji: '📸',
          color: '#F3E8FF'
        },
        {
          word: 'El mapa',
          translations: {
            en: 'Map',
            ar: 'خريطة',
            uk: 'Карта',
            fr: 'Carte'
          },
          emoji: '🗺️',
          color: '#E3EEF9'
        },
        {
          word: 'La maleta',
          translations: {
            en: 'Suitcase',
            ar: 'حقيبة سفر',
            uk: 'Валіза',
            fr: 'Valise'
          },
          emoji: '💼',
          color: '#FEFCBF'
        },
        {
          word: 'El crucero',
          translations: {
            en: 'Cruise',
            ar: 'رحلة بحرية',
            uk: 'Круїз',
            fr: 'Croisière'
          },
          emoji: '🚢',
          color: '#EBF8FF'
        },
        {
          word: 'El monumento',
          translations: {
            en: 'Monument',
            ar: 'نصب تذكاري',
            uk: 'Пам\'ятник',
            fr: 'Monument'
          },
          emoji: '🏛️',
          color: '#EDF2F7'
        },
        {
          word: 'El billete de ida y vuelta',
          translations: {
            en: 'Round-trip ticket',
            ar: 'تذكرة ذهاب وإياب',
            uk: 'Квиток туди й назад',
            fr: 'Billet aller-retour'
          },
          emoji: '🎫',
          color: '#E2F3E7'
        },
        {
          word: 'El guía turístico',
          translations: {
            en: 'Tour guide',
            ar: 'مرشد سياحي',
            uk: 'Гід',
            fr: 'Guide touristique'
          },
          emoji: '🤠',
          color: '#FEFCBF'
        },
        {
          word: 'El itinerario',
          translations: {
            en: 'Itinerary',
            ar: 'مسار الرحلة',
            uk: 'Маршрут',
            fr: 'Itinéraire'
          },
          emoji: '🗺️',
          color: '#E3EEF9'
        },
        {
          word: 'La reserva',
          translations: {
            en: 'Reservation',
            ar: 'حجز',
            uk: 'Бронювання',
            fr: 'Réservation'
          },
          emoji: '📅',
          color: '#FFF4E5'
        },
        {
          word: 'Viajar',
          translations: {
            en: 'To travel',
            ar: 'يسافر',
            uk: 'Подорожувати',
            fr: 'Voyager'
          },
          emoji: '✈️',
          color: '#FFF4E5'
        },
        {
          word: 'El alojamiento',
          translations: {
            en: 'Accommodation',
            ar: 'سكن / إقامة',
            uk: 'Житло',
            fr: 'Hébergement'
          },
          emoji: '🏨',
          color: '#EDF2F7'
        },
        {
          word: 'La aduana',
          translations: {
            en: 'Customs',
            ar: 'الجمارك',
            uk: 'Митниця',
            fr: 'Douane'
          },
          emoji: '🛂',
          color: '#FCE8E8'
        },
        {
          word: 'El visado',
          translations: {
            en: 'Visa',
            ar: 'تأشيرة دخول',
            uk: 'Віза',
            fr: 'Visa'
          },
          emoji: '🪪',
          color: '#FEFCBF'
        },
        {
          word: 'La excursión',
          translations: {
            en: 'Excursion',
            ar: 'رحلة قصيرة',
            uk: 'Екскурсія',
            fr: 'Excursion'
          },
          emoji: '⛰️',
          color: '#E2F3E7'
        },
        {
          word: 'Perder el tren',
          translations: {
            en: 'To miss the train',
            ar: 'فقدان القطار',
            uk: 'Запізнитися на потяг',
            fr: 'Rater le train'
          },
          emoji: '🚆',
          color: '#FCE8E8'
        },
        {
          word: 'El vuelo',
          translations: {
            en: 'Flight',
            ar: 'رحلة جوية',
            uk: 'Політ',
            fr: 'Vol'
          },
          emoji: '✈️',
          color: '#EBF8FF'
        },
        {
          word: 'La temporada alta',
          translations: {
            en: 'Peak season',
            ar: 'الموسم السياحي المزدحم',
            uk: 'Високий сезон',
            fr: 'Saison haute'
          },
          emoji: '☀️',
          color: '#FFF4E5'
        },
        {
          word: 'El souvenir',
          translations: {
            en: 'Souvenir',
            ar: 'هدية تذكارية',
            uk: 'Сувенір',
            fr: 'Souvenir'
          },
          emoji: '🎁',
          color: '#F3E8FF'
        },
        {
          word: 'El transbordo',
          translations: {
            en: 'Transfer / Connection',
            ar: 'تحويل الرحلة',
            uk: 'Пересадка',
            fr: 'Correspondance'
          },
          emoji: '🚊',
          color: '#EDF2F7'
        },
        {
          word: 'El tren de alta velocidad',
          translations: {
            en: 'High-speed train',
            ar: 'قطار سريع جداً',
            uk: 'Швидкісний потяг',
            fr: 'Train à grande vitesse'
          },
          emoji: '🚄',
          color: '#E2F3E7'
        },
        {
          word: 'La aventura',
          translations: {
            en: 'Adventure',
            ar: 'مغامرة',
            uk: 'Пригода',
            fr: 'Aventure'
          },
          emoji: '🧭',
          color: '#FFF4E5'
        }
      ],
    content: `
## LECTURA: Recuerdos de Andalucía

> *"El verano pasado, Lucía **planificó** un viaje muy especial a Málaga. Nunca antes **había visitado** el sur de España. Cuando **llegó** al aeropuerto, el sol brillaba con fuerza. Durante dos semanas, caminó por las calles históricas y probó los platos típicos. Al final del viaje, se dio cuenta de que ese sería un **recuerdo** imborrable."*

### Estructura de la narración en pasado:
Para contar historias, combinamos los pasados:
*   **Pretérito Indefinido** (acciones completas): *Llegó*, *caminó*.
*   **Pretérito Imperfecto** (descripción y circunstancias): *Brillaba*.
*   **Pretérito Pluscuamperfecto** (acción anterior a otra en el pasado): *Había visitado*.
    `,
    exercises: [
      {
        id: "ex1",
        question: "Yo ___ ayuda ese día. <trans en=\"(I ___)\" ar=\"(أنا ___)\" uk=\"(Я ___)\" fr=\"(Je ___)\"/>",
        options: ["busqué","buscaste","buscó"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Tú ___ una solución. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["buscaste","busqué","buscó"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Él ___ trabajo durante semanas. <trans en=\"(He/She ___ work.)\" ar=\"(هو/هي ___ العمل.)\" uk=\"(Він/Вона ___ роботу.)\" fr=\"(Il/Elle ___ le travail.)\"/>",
        options: ["buscó","busqué","buscaste"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Ella ___ información. <trans en=\"(She ___)\" ar=\"(هي ___)\" uk=\"(Вона ___)\" fr=\"(Elle ___)\"/>",
        options: ["buscó","busqué","buscaste"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Nosotros ___ una respuesta. <trans en=\"(We ___)\" ar=\"(نحن ___)\" uk=\"(Ми ___)\" fr=\"(Nous ___)\"/>",
        options: ["buscamos","busqué","buscaste"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Vosotros ___ un lugar. <trans en=\"(You all ___)\" ar=\"(أنتم ___)\" uk=\"(Ви всі ___)\" fr=\"(Vous ___)\"/>",
        options: ["buscasteis","busqué","buscaste"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Ellos ___ apoyo. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["buscaron","busqué","buscaste"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Yo ___ a una persona. <trans en=\"(I ___)\" ar=\"(أنا ___)\" uk=\"(Я ___)\" fr=\"(Je ___)\"/>",
        options: ["busqué","buscaste","buscó"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Tú ___ una explicación. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["buscaste","busqué","buscó"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Ellas ___ un cambio. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["buscaron","busqué","buscaste"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Yo ___ ayuda. <trans en=\"(I ___)\" ar=\"(أنا ___)\" uk=\"(Я ___)\" fr=\"(Je ___)\"/>",
        options: ["pedí","pediste","pidió"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Tú ___ información. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["pediste","pedí","pidió"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Él ___ dinero. <trans en=\"(He/She ___)\" ar=\"(هو/هي ___)\" uk=\"(Він/Вона ___)\" fr=\"(Il/Elle ___)\"/>",
        options: ["pidió","pedí","pediste"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Ella ___ un documento. <trans en=\"(She ___)\" ar=\"(هي ___)\" uk=\"(Вона ___)\" fr=\"(Elle ___)\"/>",
        options: ["pidió","pedí","pediste"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Nosotros ___ una cita. <trans en=\"(We ___)\" ar=\"(نحن ___)\" uk=\"(Ми ___)\" fr=\"(Nous ___)\"/>",
        options: ["pedimos","pedí","pediste"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Vosotros ___ apoyo. <trans en=\"(You all ___)\" ar=\"(أنتم ___)\" uk=\"(Ви всі ___)\" fr=\"(Vous ___)\"/>",
        options: ["pedisteis","pedí","pediste"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Ellos ___ permiso. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["pidieron","pedí","pediste"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Yo ___ una solución. <trans en=\"(I ___)\" ar=\"(أنا ___)\" uk=\"(Я ___)\" fr=\"(Je ___)\"/>",
        options: ["pedí","pediste","pidió"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Tú ___ una oportunidad. <trans en=\"(You ___)\" ar=\"(أنت ___)\" uk=\"(Ти ___)\" fr=\"(Tu ___)\"/>",
        options: ["pediste","pedí","pidió"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Ellas ___ ayuda. <trans en=\"(They ___)\" ar=\"(هم ___)\" uk=\"(Вони ___)\" fr=\"(Ils ___)\"/>",
        options: ["pidieron","pedí","pediste"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b2-gram-subjuntivo-avanzado",
    topic: "Subjuntivo",
    title: "Subjuntivo: Oraciones Temporales y Concesivas",
    level: "B2",
    category: "Gramática",
    description: "Usa el subjuntivo para hablar del futuro con 'cuando' y expresar contraste con 'aunque'.",
    imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&auto=format&fit=crop&q=80",
    emoji: "⏳",
    color: "#EBF8FF",
    vocabulary: [
        {
          word: 'Cuando',
          translations: {
            en: 'When',
            ar: 'عندما',
            uk: 'Коли',
            fr: 'Quand'
          },
          emoji: '⏰',
          color: '#EBF8FF'
        },
        {
          word: 'Aunque',
          translations: {
            en: 'Although',
            ar: 'بالرغم من',
            uk: 'Хоча',
            fr: 'Bien que / Aunque'
          },
          emoji: '⚖️',
          color: '#EBF8FF'
        },
        {
          word: 'Tan pronto como',
          translations: {
            en: 'As soon as',
            ar: 'بمجرد أن',
            uk: 'Як тільки',
            fr: 'Dès que'
          },
          emoji: '⚡',
          color: '#EBF8FF'
        },
        {
          word: 'Antes de que',
          translations: {
            en: 'Before (subj.)',
            ar: 'قبل أن',
            uk: 'Перед тим як',
            fr: 'Avant que'
          },
          emoji: '⏰',
          color: '#EBF8FF'
        },
        {
          word: 'Después de que',
          translations: {
            en: 'After (subj.)',
            ar: 'بعد أن',
            uk: 'Після того як',
            fr: 'Après que'
          },
          emoji: '⏰',
          color: '#EBF8FF'
        },
        {
          word: 'Para que',
          translations: {
            en: 'So that / In order to',
            ar: 'لكي / من أجل أن',
            uk: 'Для того щоб',
            fr: 'Pour que'
          },
          emoji: '🎯',
          color: '#E2F3E7'
        },
        {
          word: 'A menos que',
          translations: {
            en: 'Unless',
            ar: 'ما لم / إلا إذا',
            uk: 'Якщо тільки не',
            fr: 'À moins que'
          },
          emoji: '⚠️',
          color: '#FCE8E8'
        },
        {
          word: 'En caso de que',
          translations: {
            en: 'In case',
            ar: 'في حال أن',
            uk: 'У випадку якщо',
            fr: 'Au caso où'
          },
          emoji: '💼',
          color: '#EDF2F7'
        },
        {
          word: 'Con tal de que',
          translations: {
            en: 'Provided that',
            ar: 'شريطة أن',
            uk: 'За умови якщо',
            fr: 'À condition que'
          },
          emoji: '🤝',
          color: '#E2F3E7'
        },
        {
          word: 'Siempre que',
          translations: {
            en: 'Whenever / Provided that',
            ar: 'طالما أن / كلما',
            uk: 'Кожного разу коли',
            fr: 'Chaque fois que'
          },
          emoji: '🔄',
          color: '#EDF2F7'
        },
        {
          word: 'Hasta que',
          translations: {
            en: 'Until',
            ar: 'حتى أن',
            uk: 'До тих пір поки',
            fr: 'Jusqu\'à ce que'
          },
          emoji: '⏳',
          color: '#FEFCBF'
        },
        {
          word: 'Sin que',
          translations: {
            en: 'Without',
            ar: 'دون أن',
            uk: 'Без того щоб',
            fr: 'Sans que'
          },
          emoji: '❌',
          color: '#FCE8E8'
        },
        {
          word: 'Ojalá',
          translations: {
            en: 'Hopefully / If only',
            ar: 'يا ليت / إن شاء الله',
            uk: 'Дай Бог / Хоч би',
            fr: 'Pourvu que'
          },
          emoji: '🙏',
          color: '#E2F3E7'
        },
        {
          word: 'Tal vez',
          translations: {
            en: 'Maybe',
            ar: 'ربما / قد',
            uk: 'Можливо',
            fr: 'Peut-être'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: 'Quizás',
          translations: {
            en: 'Perhaps',
            ar: 'لعل / ربما',
            uk: 'Мабуть',
            fr: 'Probablement'
          },
          emoji: '❓',
          color: '#EBF8FF'
        },
        {
          word: 'A fin de que',
          translations: {
            en: 'So that',
            ar: 'بغية أن',
            uk: 'З метою щоб',
            fr: 'Afin que'
          },
          emoji: '🎯',
          color: '#E2F3E7'
        },
        {
          word: 'A condición de que',
          translations: {
            en: 'On condition that',
            ar: 'على شرط أن',
            uk: 'За умови що',
            fr: 'À condition que'
          },
          emoji: '🤝',
          color: '#E2F3E7'
        },
        {
          word: 'Como si',
          translations: {
            en: 'As if',
            ar: 'كما لو أن',
            uk: 'Ніби / наче',
            fr: 'Comme si'
          },
          emoji: '🎭',
          color: '#EDF2F7'
        },
        {
          word: 'Mientras que',
          translations: {
            en: 'While / Whereas',
            ar: 'بينما',
            uk: 'Тоді як / поки',
            fr: 'Tandis que'
          },
          emoji: '⏰',
          color: '#EDF2F7'
        },
        {
          word: 'De ahí que',
          translations: {
            en: 'Hence / That\'s why',
            ar: 'ومن هنا فإن',
            uk: 'Звідси й',
            fr: 'D\'où le fait que'
          },
          emoji: '➡️',
          color: '#EDF2F7'
        },
        {
          word: 'Por más que',
          translations: {
            en: 'No matter how much',
            ar: 'مهما كان / بالرغم من كل شيء',
            uk: 'Скільки б не',
            fr: 'Avoir beau'
          },
          emoji: '⚖️',
          color: '#EDF2F7'
        },
        {
          word: 'Por mucho que',
          translations: {
            en: 'No matter how much',
            ar: 'بقدر ما...',
            uk: 'Скільки б не',
            fr: 'Avoir beau'
          },
          emoji: '⚖️',
          color: '#EDF2F7'
        },
        {
          word: 'Aunque llueva',
          translations: {
            en: 'Even if it rains',
            ar: 'حتى لو أمطرت',
            uk: 'Навіть якщо піде дощ',
            fr: 'Même s\'il pleut'
          },
          emoji: '🌧️',
          color: '#E3EEF9'
        },
        {
          word: 'Cuando vuelva',
          translations: {
            en: 'When I return',
            ar: 'عندما أعود',
            uk: 'Коли я повернуся',
            fr: 'À mon retour'
          },
          emoji: '🏡',
          color: '#FFF4E5'
        },
        {
          word: 'Tan pronto como pueda',
          translations: {
            en: 'As soon as I can',
            ar: 'بمجرد أن أستطيع',
            uk: 'Як тільки зможу',
            fr: 'Dès que possible'
          },
          emoji: '⚡',
          color: '#E2F3E7'
        },
        {
          word: 'Para que sepas',
          translations: {
            en: 'Just so you know',
            ar: 'لكي تعرف فقط',
            uk: 'Щоб ти знав',
            fr: 'Pour que tu saches'
          },
          emoji: '🗣️',
          color: '#EBF8FF'
        },
        {
          word: 'Antes de que sea tarde',
          translations: {
            en: 'Before it\'s too late',
            ar: 'قبل أن يفوت الأوان',
            uk: 'Поки не пізно',
            fr: 'Avant qu\'il ne soit trop tard'
          },
          emoji: '⏰',
          color: '#FCE8E8'
        },
        {
          word: 'A menos que digas algo',
          translations: {
            en: 'Unless you say something',
            ar: 'ما لم تقل شيئاً',
            uk: 'Якщо тільки ти щось не скажеш',
            fr: 'À moins que tu ne dises quelque chose'
          },
          emoji: '🗣️',
          color: '#EDF2F7'
        },
        {
          word: 'Ojalá haga sol',
          translations: {
            en: 'Hopefully it will be sunny',
            ar: 'يا ليت الجو يكون مشمساً',
            uk: 'Хоч би було сонячно',
            fr: 'Pourvu qu\'il fasse beau'
          },
          emoji: '☀️',
          color: '#FEFCBF'
        },
        {
          word: 'Con tal de que estudies',
          translations: {
            en: 'Provided you study',
            ar: 'شريطة أن تدرس',
            uk: 'За умови що ти вчитимешся',
            fr: 'À condition que tu étudies'
          },
          emoji: '📚',
          color: '#F3E8FF'
        }
      ],
    content: `
## Oraciones Temporales y Concesivas con Subjuntivo

En el nivel B2, aprendemos que ciertas conjunciones cambian de modo (indicativo o subjuntivo) según la intención.

### 1. Oraciones Temporales (Cuando, Tan pronto como)
*   **Indicativo** (Rutina o Pasado): *Cuando voy a Málaga, como espetos.* (Rutina)
*   **Subjuntivo** (Acción Futura): *Cuando **tenga** tiempo, te llamaré.* (Futuro)

### 2. Oraciones Concesivas (Aunque)
*   **Indicativo** (Hecho real conocido): *Aunque está lloviendo, voy a salir.* (Sé que llueve)
*   **Subjuntivo** (Hipótesis o indiferencia): *Aunque **llueva** mañana, iré al parque.* (No me importa si llueve o no)
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si yo ___ (saber) la respuesta, te la habría dicho.",
        options: ["supiera","hubiera sabido","sabía"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¡Ojalá ___ (hacer) calor en este momento!",
        options: ["haga","hiciera","haría"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "Si ___ (tener, él) coche, vendría a buscarnos.",
        options: ["tuviera","tendría","tuviese que"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "El profesor nos recomendó que ___ (leer) el libro.",
        options: ["leyéramos","leamos","leyésemos de"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Si tú me ___ (avisar) antes, habríamos ido juntos.",
        options: ["hubieras avisado","avisaras","avisarías"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Como si no ___ (pasar) nada, él siguió caminando.",
        options: ["pasara","pasa","pasaría"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Quería que tú me ___ (ayudar) ayer.",
        options: ["ayudaras","ayudes","ayudarías"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Ojalá no ___ (llover) mañana en la excursión.",
        options: ["llueva","lloviera","llovería"],
        correctAnswer: 1
      },
      {
        id: "ex9",
        question: "Si nosotros ___ (estudiar) más, el examen habría sido fácil.",
        options: ["hubiéramos estudiado","estudiáramos","estudiábamos"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Te pedí que ___ (traer) el documento.",
        options: ["trajeras","traigas","traerías"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Si yo ___ (poder), te ayudaría ahora mismo.",
        options: ["pudiera","puedo","podría"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Me molestó que ella no ___ (venir) a mi boda.",
        options: ["viniera","venga","viniese que"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Si ___ (hacer, ellos) los deberes, no tendrían problemas.",
        options: ["hicieran","harían","hagan"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Ojalá yo ___ (vivir) en la playa.",
        options: ["viviera","viva","viviese a"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "El médico me prohibió que ___ (comer) azúcar.",
        options: ["comiera","coma","comiese de"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Si tú ___ (ser) rico, ¿qué harías?",
        options: ["fueras","serías","eres"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "No creía que ellos ___ (llegar) a tiempo.",
        options: ["llegaran","lleguen","llegarían"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Si nosotros ___ (saber) del examen, habríamos estudiado.",
        options: ["hubiéramos sabido","supiéramos","sabíamos"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Me pareció fatal que tú no nos ___ (llamar).",
        options: ["llamaras","llames","llamarías"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Si ___ (ver, yo) a tu hermano, le daré recuerdos.",
        options: ["veo","viera","vería"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "c1-comp-textos-complejos",
    topic: "Textos Complejos",
    title: "Comprensión: Editorial de Prensa",
    level: "C1",
    category: "Comprensión",
    description: "Analiza un texto formal sobre el cambio climático para comprender sutilezas y registros.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=80",
    emoji: "📰",
    color: "#E2F3E7",
    vocabulary: [
      { word: "El desafío", translations: { en: "The challenge", ar: "التحدي", uk: "Виклик", fr: "Le défi" }, imageUrl: "https://plus.unsplash.com/premium_photo-1720568151357-f4dbe4f54b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "⛰️", color: "#E2F3E7" },
      { word: "A largo plazo", translations: { en: "Long term", ar: "على المدى الطويل", uk: "على المدى البعيد", fr: "À long terme" }, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYkgQJTyHB_wHV8JWxUPVJTl5VVDo9NZXlw&s", emoji: "📈", color: "#E2F3E7" },
      { word: "El recurso", translations: { en: "The resource", ar: "المورد", uk: "Ресурс", fr: "La ressource" }, imageUrl: "https://images.unsplash.com/photo-1771294054598-879226abf362?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "💧", color: "#E2F3E7" }
    ],
    content: `
## LECTURA: El porvenir ecológico

> *"El calentamiento global representa, sin lugar a dudas, el mayor **desafío** al que se enfrenta la humanidad en el siglo XXI. La transición hacia fuentes de energía renovables no debe concebirse únicamente como una alternativa económica, sino como una obligación moral para salvaguardar nuestros **recursos** naturales. Las políticas adoptadas hoy determinarán el bienestar social **a largo plazo**, por lo que aplazar las reformas estructurales constituiría una negligencia imperdonable."*

### Comprensión en C1
En este nivel, debes comprender:
*   **El tono**: Formal, persuasivo y analítico.
*   **Las sutilezas**: Expresiones como *sin lugar a dudas* (absolutely) o *negligencia imperdonable* (unpardonable negligence).
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál es el propósito primordial del texto?",
        options: ["Criticar el consumo de energía", "Defender la transición ecológica como deber moral y necesidad a largo plazo", "Promover la industria automotriz"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Qué connota la frase 'aplazar las reformas'?",
        options: ["Postergar los cambios necesarios", "Acelerar los procesos gubernamentales", "Disminuir los impuestos"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "c1-gram-perifrasis",
    topic: "Perífrasis Verbales",
    title: "Gramática: Perífrasis Verbales Avanzadas",
    level: "C1",
    category: "Gramática",
    description: "Aprende a usar construcciones verbales precisas como 'soler', 'acabar de' o 'llevar + gerundio'.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    emoji: "⚙️",
    color: "#F3E8FF",
    vocabulary: [
      { word: "Soler", translations: { en: "To usually do", ar: "غالباً ما يفعل", uk: "Зазвичай робити", fr: "Avoir l'habitude de" }, imageUrl: "https://españolextranjeros.com/wp-content/uploads/2025/02/EL-VERBO-SOLER-EN-ESPANOL-espanol-extranjeros-www.espanolextranjeros.com-Victoria-Monera.jpg", emoji: "🔄", color: "#F3E8FF" },
      { word: "Llevar + gerundio", translations: { en: "To have been doing", ar: "يقوم به desde hace tiempo", uk: "Робити протягом часу", fr: "Faire depuis un moment" }, imageUrl: "https://www.profedeele.es/wp-content/uploads/2017/04/Gerundio-Actividades-web-3.jpg", emoji: "⏳", color: "#F3E8FF" },
      { word: "Acabar de", translations: { en: "To have just done", ar: "انتهى للتو من", uk: "Щойно зробити", fr: "Venir de" }, imageUrl: "https://thumbs.dreamstime.com/b/funcionamiento-de-la-empresaria-acabar-108730462.jpg", emoji: "🏁", color: "#F3E8FF" }
    ],
    content: `
## Perífrasis Verbales Avanzadas

Las perífrasis son uniones de dos o más verbos que funcionan como una sola unidad para añadir matices precisos de tiempo, duración u obligación.

### 1. Perífrasis Durativas
*   **Llevar + Gerundio** (Acción que comenzó en el pasado y continúa):
    *   *Llevo tres años estudiando español.* <trans en="(I have been studying Spanish for three years)" ar="(أنا أدرس الإسبانية منذ ثلاث سنوات)" uk="(Я вивчаю іспанську вже три роки)" fr="(J'étudie l'espagnol depuis trois ans)"/>
*   **Ir + Gerundio** (Proceso gradual y lento):
    *   *Poco a poco voy entendiendo la gramática.*

### 2. Perífrasis Temporales
*   **Acabar de + Infinitivo** (Acción recién terminada):
    *   *Acabo de llegar a la oficina.* <trans en="(I have just arrived at the office)" ar="(لقد وصلت للتو إلى المكتب)" uk="(Я щойно прийшов в офіс)" fr="(Je viens d'arriver au bureau)"/>
*   **Soler + Infinitivo** (Frecuencia / Hábito):
    *   *Suelo desayunar café con leche.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si empezaste a trabajar en 2020 y sigues allí, dices: '_______ trabajando aquí desde 2020'.",
        options: ["Suelo", "Llevo", "Acabo de"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Qué expresa la perífrasis 'acabar de + infinitivo'?",
        options: ["Una acción habitual", "Una acción que se completó recientemente", "Un plan futuro"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "c1-gram-estilo-indirecto",
    topic: "Estilo Indirecto",
    title: "Gramática: Estilo Indirecto en el Pasado",
    level: "C1",
    category: "Gramática",
    description: "Aprende a reportar lo que otros dijeron cambiando los tiempos verbales adecuadamente.",
    imageUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&auto=format&fit=crop&q=80",
    emoji: "💬",
    color: "#FFF5F5",
    vocabulary: [
      { word: "Asegurar", translations: { en: "To assure / state", ar: "يؤكد", uk: "Запевняти", fr: "Assurer" }, imageUrl: "https://img.freepik.com/vector-premium/asegurar-icono-bloqueado-vector-simbolo-supervision_883533-342.jpg", emoji: "🗣️", color: "#FFF5F5" },
      { word: "Preguntar", translations: { en: "To ask", ar: "يسأل", uk: "Запитувати", fr: "Demander" }, imageUrl: "https://elcandidatoidoneo.com/wp-content/uploads/2016/07/una-pregunta-poderosa-por-favor.jpg", emoji: "❓", color: "#FFF5F5" },
      { word: "Mencionar", translations: { en: "To mention", ar: "يذكر", uk: "Згадувати", fr: "Mentionner" }, imageUrl: "https://cdn-icons-png.flaticon.com/512/3893/3893261.png", emoji: "📝", color: "#FFF5F5" }
    ],
    content: `
## El Estilo Indirecto (Reported Speech)

Cuando queremos contar a alguien lo que otra persona ha dicho, usamos verbos de transmisión (decir, asegurar, preguntar) en pasado. Esto provoca cambios en los tiempos verbales.

| Estilo Directo (Presente) | Estilo Indirecto (Pasado) |
|---|---|
| *"Tengo hambre."* | Dijo que **tenía** hambre (Imperfecto). |
| *"Fui al mercado."* (Indefinido) | Dijo que **había ido** al mercado (Pluscuamperfecto). |
| *"Compraré el coche."* (Futuro) | Dijo que **compraría** el coche (Condicional). |
| *"¡Hazlo!"* (Imperativo) | Dijo que lo **hiciera** (Imperfecto de Subjuntivo). |
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si ayer tu hermano te dijo: 'No puedo ir', hoy dices: 'Él dijo que no _______ ir'.",
        options: ["pudo", "podía", "puede"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Si alguien dice: 'Llamaré mañana', el estilo indirecto correcto en pasado es: 'Dijo que _______ al día siguiente'.",
        options: ["llame", "llamará", "llamaría"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "c1-vocab-marcadores",
    topic: "Marcadores",
    title: "Vocabulario: Marcadores Discursivos",
    level: "C1",
    category: "Vocabulario",
    description: "Organiza tus ideas de forma fluida y profesional usando conectores de nivel avanzado.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    emoji: "🧠",
    color: "#FEFCBF",
    vocabulary: [
      { word: "No obstante", translations: { en: "Nevertheless", ar: "ومع ذلك", uk: "Проте", fr: "Néanmoins" }, imageUrl: "https://i.pinimg.com/736x/26/c7/d8/26c7d8cf9d432a85916f0af847549d7d.jpg", emoji: "⚖️", color: "#FEFCBF" },
      { word: "Por consiguiente", translations: { en: "Therefore / Consequently", ar: "بناء على ذلك", uk: "Отже", fr: "Par conséquent" }, imageUrl: "https://png.pngtree.com/png-clipart/20230813/original/pngtree-illustration-of-a-vector-young-male-holding-an-arrow-sign-pointing-to-next-page-vector-picture-image_10583032.png", emoji: "👉", color: "#FEFCBF" },
      { word: "En resumen", translations: { en: "In summary", ar: "باختصار", uk: "Підсумовуючи", fr: "En résumé" }, imageUrl: "https://img.magnific.com/vector-gratis/ilustracion-ensayo-dibujado-mano_23-2150297850.jpg?semt=ais_hybrid&w=740&q=80", emoji: "📌", color: "#FEFCBF" }
    ],
    content: `
## Marcadores Discursivos Avanzados

Los marcadores discursivos sirven para estructurar un discurso formal, facilitando la cohesión y claridad de nuestras exposiciones orales y escritas.

### 1. Contraste u Oposición
*   **No obstante** (Formal para *sin embargo*): *El presupuesto es limitado. **No obstante**, completaremos el proyecto.*
*   **A pesar de (que)**: *A pesar de las dificultades, logramos el éxito.*

### 2. Causa y Consecuencia
*   **Por consiguiente** (Formal para *por eso*): *No se cumplieron los plazos, **por consiguiente** se suspende la entrega.*
*   **Puesto que** (Formal para *porque*): *Puesto que nadie asistió, cancelamos la reunión.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál de estos conectores expresa consecuencia en un registro formal?",
        options: ["Puesto que", "Por consiguiente", "No obstante"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Completa: 'El candidato tiene experiencia. _______, no fue seleccionado para el cargo.'",
        options: ["En resumen", "No obstante", "Por consiguiente"],
        correctAnswer: 1
      }
    ]
  },
  {
  "id": "b1-lecturas-vida",
  "topic": "Comprensión B1",
  "title": "Comprensión Lectora: Vivencias y Orígenes (B1)",
  "level": "B1",
  "category": "Comprensión",
  "description": "Lecturas sobre el cambio de vida de Marta, el origen del chocolate y los beneficios de viajar solo, con 30 términos de vocabulario y 20 preguntas.",
  "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
  "illustrationUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
  "emoji": "📖",
  "color": "#E3EEF9",
  "vocabulary": [
    {
      "word": "Gran ciudad",
      "translations": {
        "en": "Big city",
        "ar": "مدينة كبيرة",
        "uk": "Велике місто",
        "fr": "Grande ville"
      },
      "emoji": "🏙️",
      "color": "#E3EEF9"
    },
    {
      "word": "Oficina de finanzas",
      "translations": {
        "en": "Finance office",
        "ar": "مكتب المالية",
        "uk": "Фінансовий офіс",
        "fr": "Bureau des finances"
      },
      "emoji": "🏢",
      "color": "#E3EEF9"
    },
    {
      "word": "Buen sueldo",
      "translations": {
        "en": "Good salary",
        "ar": "راتب جيد",
        "uk": "Хороша зарплата",
        "fr": "Bon salaire"
      },
      "emoji": "💰",
      "color": "#E3EEF9"
    },
    {
      "word": "Cansada",
      "translations": {
        "en": "Tired",
        "ar": "متعبة",
        "uk": "Втомлена",
        "fr": "Fatiguée"
      },
      "emoji": "😴",
      "color": "#E3EEF9"
    },
    {
      "word": "Estresada",
      "translations": {
        "en": "Stressed",
        "ar": "مجهدة",
        "uk": "Стресована",
        "fr": "Stressée"
      },
      "emoji": "😰",
      "color": "#E3EEF9"
    },
    {
      "word": "Tráfico",
      "translations": {
        "en": "Traffic",
        "ar": "حركة المرور",
        "uk": "Дорожній рух",
        "fr": "Trafic"
      },
      "emoji": "🚗",
      "color": "#E3EEF9"
    },
    {
      "word": "Ruido",
      "translations": {
        "en": "Noise",
        "ar": "ضوضاء",
        "uk": "Шум",
        "fr": "Bruit"
      },
      "emoji": "🔊",
      "color": "#E3EEF9"
    },
    {
      "word": "Cambio radical",
      "translations": {
        "en": "Radical change",
        "ar": "تغيير جذري",
        "uk": "Радикальні зміни",
        "fr": "Changement radical"
      },
      "emoji": "🔄",
      "color": "#E3EEF9"
    },
    {
      "word": "Mudarse",
      "translations": {
        "en": "To move (house)",
        "ar": "ينتقل",
        "uk": "Переїжджати",
        "fr": "Déménager"
      },
      "emoji": "📦",
      "color": "#E3EEF9"
    },
    {
      "word": "Gestionar",
      "translations": {
        "en": "To manage",
        "ar": "يدير / يسيّر",
        "uk": "Керувати",
        "fr": "Gérer"
      },
      "emoji": "📊",
      "color": "#E3EEF9"
    },
    {
      "word": "Casa rural",
      "translations": {
        "en": "Country house",
        "ar": "بيت ريفي",
        "uk": "Сільський будинок",
        "fr": "Gîte rural"
      },
      "emoji": "🏡",
      "color": "#E3EEF9"
    },
    {
      "word": "Cultivar",
      "translations": {
        "en": "To cultivate / grow",
        "ar": "يزرع",
        "uk": "Вирощувати",
        "fr": "Cultiver"
      },
      "emoji": "🌱",
      "color": "#E3EEF9"
    },
    {
      "word": "Verduras",
      "translations": {
        "en": "Vegetables",
        "ar": "خضار",
        "uk": "Овочі",
        "fr": "Légumes"
      },
      "emoji": "🥕",
      "color": "#E3EEF9"
    },
    {
      "word": "Vecinos",
      "translations": {
        "en": "Neighbors",
        "ar": "جيران",
        "uk": "Сусіди",
        "fr": "Voisins"
      },
      "emoji": "👥",
      "color": "#E3EEF9"
    },
    {
      "word": "Pasear",
      "translations": {
        "en": "To walk / stroll",
        "ar": "يتنزه",
        "uk": "Прогулюватися",
        "fr": "Se promener"
      },
      "emoji": "🚶",
      "color": "#E3EEF9"
    },
    {
      "word": "Bosque",
      "translations": {
        "en": "Forest",
        "ar": "غابة",
        "uk": "Ліс",
        "fr": "Forêt"
      },
      "emoji": "🌲",
      "color": "#E3EEF9"
    },
    {
      "word": "Chocolate",
      "translations": {
        "en": "Chocolate",
        "ar": "شوكولاتة",
        "uk": "Шоколад",
        "fr": "Chocolat"
      },
      "emoji": "🍫",
      "color": "#E3EEF9"
    },
    {
      "word": "Cacao",
      "translations": {
        "en": "Cocoa",
        "ar": "كاكاو",
        "uk": "Какао",
        "fr": "Cacao"
      },
      "emoji": "🍒",
      "color": "#E3EEF9"
    },
    {
      "word": "Regalo de los dioses",
      "translations": {
        "en": "Gift of the gods",
        "ar": "هدية الآلهة",
        "uk": "Подарунок богів",
        "fr": "Cadeau des dieux"
      },
      "emoji": "🎁",
      "color": "#E3EEF9"
    },
    {
      "word": "Bebida amarga",
      "translations": {
        "en": "Bitter drink",
        "ar": "مشروب مر",
        "uk": "Гіркий напій",
        "fr": "Boisson amère"
      },
      "emoji": "☕",
      "color": "#E3EEF9"
    },
    {
      "word": "Especias",
      "translations": {
        "en": "Spices",
        "ar": "توابل",
        "uk": "Спеції",
        "fr": "Épices"
      },
      "emoji": "🌶️",
      "color": "#E3EEF9"
    },
    {
      "word": "Sabor",
      "translations": {
        "en": "Flavor / Taste",
        "ar": "نكهة / طعم",
        "uk": "Смак",
        "fr": "Saveur"
      },
      "emoji": "👅",
      "color": "#E3EEF9"
    },
    {
      "word": "Azúcar",
      "translations": {
        "en": "Sugar",
        "ar": "سكر",
        "uk": "Цукор",
        "fr": "Sucre"
      },
      "emoji": "🍬",
      "color": "#E3EEF9"
    },
    {
      "word": "Lujo",
      "translations": {
        "en": "Luxury",
        "ar": "ترف / رفاهية",
        "uk": "Розкіш",
        "fr": "Luxe"
      },
      "emoji": "💎",
      "color": "#E3EEF9"
    },
    {
      "word": "Viajar solo",
      "translations": {
        "en": "To travel alone",
        "ar": "السفر بمفردك",
        "uk": "Подорожувати наодинці",
        "fr": "Voyager seul"
      },
      "emoji": "🧳",
      "color": "#E3EEF9"
    },
    {
      "word": "Aburrido",
      "translations": {
        "en": "Boring",
        "ar": "ممل",
        "uk": "ملل",
        "fr": "Ennuyeux"
      },
      "emoji": "🥱",
      "color": "#E3EEF9"
    },
    {
      "word": "Peligroso",
      "translations": {
        "en": "Dangerous",
        "ar": "خطير",
        "uk": "Небезпечний",
        "fr": "Dangereux"
      },
      "emoji": "⚠️",
      "color": "#E3EEF9"
    },
    {
      "word": "Compañía",
      "translations": {
        "en": "Company / Companion",
        "ar": "صحبة / رفقاء",
        "uk": "Компанія",
        "fr": "Compagnie"
      },
      "emoji": "👥",
      "color": "#E3EEF9"
    },
    {
      "word": "Itinerario",
      "translations": {
        "en": "Itinerary",
        "ar": "مسار الرحلة",
        "uk": "Маршрут",
        "fr": "Itinéraire"
      },
      "emoji": "🗺️",
      "color": "#E3EEF9"
    },
    {
      "word": "Confianza en sí mismo",
      "translations": {
        "en": "Self-confidence",
        "ar": "الثقة بالنفس",
        "uk": "Впевненість у собі",
        "fr": "Confiance en soi"
      },
      "emoji": "🦁",
      "color": "#E3EEF9"
    }
  ],
  "content": "\n## Lectura 1: El cambio de vida de Marta\n\nMarta vivía en una gran ciudad y trabajaba en una oficina de finanzas. Tenía un buen sueldo, pero siempre estaba cansada y estresada por el tráfico y el ruido. Un día, decidió que necesitaba un cambio radical. Dejó su trabajo, vendió su coche y se mudó a un pequeño pueblo en las montañas del norte de España.  \nAhora, Marta gestiona una pequeña casa rural y cultiva sus propias verduras. Aunque gana menos dinero que antes, asegura que es mucho más feliz. Los vecinos la recibieron con los brazos abiertos y cada tarde pasea por el bosque con su perro. Siente que por fin ha recuperado el control de su tiempo y de su vida.\n\n---\n\n## Lectura 2: El origen del chocolate\n\nHoy en día, el chocolate es uno de los dulces más populares del mundo, pero su historia comenzó hace miles de años en Mesoamérica. Los mayas y los aztecas consideraban que el cacao era un regalo de los dioses. Sin embargo, no lo consumían como nosotros: ellos preparaban una bebida amarga y picante mezclada con agua, maíz y especias.  \nCuando los españoles llegaron a América en el siglo XVI, llevaron el cacao a Europa. Al principio, a la corte española no le gustó el sabor amargo, pero todo cambió cuando decidieron añadirle azúcar y canela. A partir de ese momento, la bebida se convirtió en un lujo para la nobleza europea antes de transformarse en las tabletas que conocemos hoy.\n\n---\n\n## Lectura 3: Beneficios de viajar solo\n\nMucha gente piensa que viajar solo es aburrido o peligroso, pero cada vez más personas eligen esta aventura. Viajar sin compañía te obliga a salir de tu zona de confort y a tomar tus propias decisiones. No tienes que negociar el itinerario con nadie; si te apetece quedarte leyendo en un café toda la mañana, puedes hacerlo.  \nAdemás, cuando viajas solo, eres mucho más accesible para los demás. Es más fácil que los habitantes locales te hablen o que conozcas a otros viajeros en la misma situación. Al final del viaje, la mayoría de las personas vuelven a casa con una mayor confianza en sí mismas y con amigos de diferentes partes del mundo.\n  ",
  "exercises": [
    {
      "id": "b1-ex1",
      "question": "¿Por qué decidió Marta cambiar de vida?",
      "options": [
        "Porque quería ganar más dinero",
        "Porque estaba cansada y estresada por el tráfico y el ruido",
        "Porque no le gustaban sus compañeros de trabajo"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex2",
      "question": "¿A qué se dedica Marta en la actualidad?",
      "options": [
        "Gestiona una casa rural y cultiva verduras",
        "Trabaja en una oficina de finanzas en el pueblo",
        "Es veterinaria de animales en el bosque"
      ],
      "correctAnswer": 0
    },
    {
      "id": "b1-ex3",
      "question": "¿Cómo la trataron los vecinos al llegar al pueblo?",
      "options": [
        "No le hablaron al principio",
        "La recibieron con los brazos abiertos",
        "Le pidieron que se marchara"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex4",
      "question": "¿Cómo consumían originalmente el chocolate los mayas y aztecas?",
      "options": [
        "En tabletas dulces",
        "Como una bebida amarga, picante y fría",
        "Mezclado con leche caliente"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex5",
      "question": "¿Qué ingrediente añadieron los europeos que popularizó el chocolate?",
      "options": [
        "Sal y pimienta",
        "Azúcar y canela",
        "Hielo y frutas"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex6",
      "question": "¿Quiénes eran los únicos que consumían chocolate en Europa al principio?",
      "options": [
        "Los campesinos",
        "La nobleza europea",
        "Los marineros"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex7",
      "question": "¿Qué ventaja tiene viajar solo respecto al itinerario?",
      "options": [
        "Es más barato planificarlo",
        "No tienes que negociarlo con nadie",
        "Las agencias de viaje te lo regalan"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex8",
      "question": "¿Por qué es más fácil hacer amigos cuando viajas solo?",
      "options": [
        "Porque eres más accesible para los locales y otros viajeros",
        "Porque tienes más dinero para invitarlos",
        "Porque viajas en un grupo organizado"
      ],
      "correctAnswer": 0
    },
    {
      "id": "b1-ex9",
      "question": "¿Con qué beneficio personal suelen regresar a casa estos viajeros?",
      "options": [
        "Con más cansancio",
        "Con una mayor confianza en sí mismos",
        "Con ganas de no volver a viajar"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex10",
      "question": "Completa la frase con la palabra correcta: 'Carlos decidió _______ de ciudad para buscar trabajo.'",
      "options": [
        "mudarse",
        "gestionar",
        "cultivar"
      ],
      "correctAnswer": 0
    },
    {
      "id": "b1-ex11",
      "question": "El antónimo de 'amargo' es...",
      "options": [
        "picante",
        "salado",
        "dulce"
      ],
      "correctAnswer": 2
    },
    {
      "id": "b1-ex12",
      "question": "Marta pasea con su perro cada tarde. El sinónimo de 'pasear' es...",
      "options": [
        "correr",
        "caminar / dar una vuelta",
        "descansar"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex13",
      "question": "Completa: 'El chocolate se convirtió en un _______ para la nobleza europea.'",
      "options": [
        "sueldo",
        "lujo",
        "ruido"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex14",
      "question": "¿Qué significa 'cambio radical'?",
      "options": [
        "Un cambio pequeño y lento",
        "Un cambio completo y profundo",
        "No hacer ningún cambio"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex15",
      "question": "Completa: 'Cuando viajas sin _______, tienes total libertad.'",
      "options": [
        "itinerario",
        "compañía",
        "coche"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex16",
      "question": "¿Cuál de estos alimentos pertenece al grupo de las 'verduras'?",
      "options": [
        "La manzana",
        "La canela",
        "La zanahoria"
      ],
      "correctAnswer": 2
    },
    {
      "id": "b1-ex17",
      "question": "Completa la frase: 'El dinero mensual que recibe un trabajador se llama _______.'",
      "options": [
        "fianza",
        "sueldo",
        "lujo"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex18",
      "question": "Las personas que viven cerca de tu casa son tus...",
      "options": [
        "dioses",
        "vecinos",
        "compañeros de viaje"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b1-ex19",
      "question": "El cacao era considerado por los mayas como un regalo de los...",
      "options": [
        "nobles",
        "españoles",
        "dioses"
      ],
      "correctAnswer": 2
    },
    {
      "id": "b1-ex20",
      "question": "Completa: 'Tengo mucha _______ en mí mismo para superar la entrevista.'",
      "options": [
        "fianza",
        "confianza",
        "especias"
      ],
      "correctAnswer": 1
    }
  ]
},
{
  "id": "b2-lecturas-vida",
  "topic": "Comprensión B2",
  "title": "Comprensión Lectora: Sociedad y Entorno (B2)",
  "level": "B2",
  "category": "Comprensión",
  "description": "Lecturas sobre el teletrabajo, las estatuas de la isla de Pascua y la biodiversidad urbana, con 30 términos de vocabulario y 20 preguntas.",
  "imageUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
  "illustrationUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
  "emoji": "📖",
  "color": "#FAF9F6",
  "vocabulary": [
    {
      "word": "Auge",
      "translations": {
        "en": "Rise / Boom",
        "ar": "ذروة / صعود",
        "uk": "Сплеск / Бум",
        "fr": "Essor"
      },
      "emoji": "📈",
      "color": "#FAF9F6"
    },
    {
      "word": "Teletrabajo",
      "translations": {
        "en": "Teleworking / Remote work",
        "ar": "العمل عن بعد",
        "uk": "Дистанційна робота",
        "fr": "Télétravail"
      },
      "emoji": "💻",
      "color": "#FAF9F6"
    },
    {
      "word": "Panorama laboral",
      "translations": {
        "en": "Labor landscape",
        "ar": "المشهد العمالي",
        "uk": "Ринок праці",
        "fr": "Paysage professionnel"
      },
      "emoji": "💼",
      "color": "#FAF9F6"
    },
    {
      "word": "Flexibilidad horaria",
      "translations": {
        "en": "Flexible hours",
        "ar": "مرونة الوقت",
        "uk": "Гнучкий графік",
        "fr": "Flexibilité horaire"
      },
      "emoji": "⏰",
      "color": "#FAF9F6"
    },
    {
      "word": "Ahorro",
      "translations": {
        "en": "Savings",
        "ar": "توفير",
        "uk": "Заощадження",
        "fr": "Économie"
      },
      "emoji": "🐷",
      "color": "#FAF9F6"
    },
    {
      "word": "Desplazamiento",
      "translations": {
        "en": "Commuting / Travel",
        "ar": "التنقل",
        "uk": "التنقل",
        "fr": "Déplacement"
      },
      "emoji": "🚌",
      "color": "#FAF9F6"
    },
    {
      "word": "Obstáculo",
      "translations": {
        "en": "Obstacle / Hurdle",
        "ar": "عائق",
        "uk": "Перешкода",
        "fr": "Obstacle"
      },
      "emoji": "🚧",
      "color": "#FAF9F6"
    },
    {
      "word": "Difuso",
      "translations": {
        "en": "Blurry / Diffuse",
        "ar": "غامض / غير واضح",
        "uk": "Розмитий",
        "fr": "Flou"
      },
      "emoji": "🌫️",
      "color": "#FAF9F6"
    },
    {
      "word": "Desconectar",
      "translations": {
        "en": "To disconnect",
        "ar": "فصل / قطع الاتصال",
        "uk": "Відключитися",
        "fr": "Se déconnecter"
      },
      "emoji": "🔌",
      "color": "#FAF9F6"
    },
    {
      "word": "Aislamiento social",
      "translations": {
        "en": "Social isolation",
        "ar": "عزلة اجتماعية",
        "uk": "Соціальна ізоляція",
        "fr": "Isolement social"
      },
      "emoji": "👤",
      "color": "#FAF9F6"
    },
    {
      "word": "Mitigar",
      "translations": {
        "en": "To mitigate / Ease",
        "ar": "تخفيف / تسكين",
        "uk": "Пом'якшувати",
        "fr": "Mitiger / Atténuer"
      },
      "emoji": "🩹",
      "color": "#FAF9F6"
    },
    {
      "word": "Integración",
      "translations": {
        "en": "Integration",
        "ar": "دمج",
        "uk": "Інтеграція",
        "fr": "Intégration"
      },
      "emoji": "🤝",
      "color": "#FAF9F6"
    },
    {
      "word": "Moáis",
      "translations": {
        "en": "Moai statues",
        "ar": "تماثيل مواي",
        "uk": "Статуї моаї",
        "fr": "Moaïs"
      },
      "emoji": "🗿",
      "color": "#FAF9F6"
    },
    {
      "word": "Escultura de piedra",
      "translations": {
        "en": "Stone sculpture",
        "ar": "منحوتة حجرية",
        "uk": "Кам'яна скульптура",
        "fr": "Sculpture en pierre"
      },
      "emoji": "🗿",
      "color": "#FAF9F6"
    },
    {
      "word": "Desconcertar",
      "translations": {
        "en": "To puzzle / Baffle",
        "ar": "يربك / يحير",
        "uk": "Бентежити",
        "fr": "Déconcerter"
      },
      "emoji": "😕",
      "color": "#FAF9F6"
    },
    {
      "word": "Arqueólogos",
      "translations": {
        "en": "Archaeologists",
        "ar": "علماء الآثار",
        "uk": "Археологи",
        "fr": "Archéologues"
      },
      "emoji": "🤠",
      "color": "#FAF9F6"
    },
    {
      "word": "Toneladas",
      "translations": {
        "en": "Tons",
        "ar": "أطنان",
        "uk": "Тонни",
        "fr": "Tonnes"
      },
      "emoji": "🏋️",
      "color": "#FAF9F6"
    },
    {
      "word": "Troncos de árboles",
      "translations": {
        "en": "Tree trunks",
        "ar": "جذوع الأشجار",
        "uk": "Стовбури дерев",
        "fr": "Troncs d'arbres"
      },
      "emoji": "🪵",
      "color": "#FAF9F6"
    },
    {
      "word": "Deforestación",
      "translations": {
        "en": "Deforestation",
        "ar": "إزالة الغابات",
        "uk": "Вирубка лісів",
        "fr": "Déforestation"
      },
      "emoji": "🪓",
      "color": "#FAF9F6"
    },
    {
      "word": "Escasear",
      "translations": {
        "en": "To grow scarce",
        "ar": "يشح / يقل",
        "uk": "Бути в дефіциті",
        "fr": "Se raréfier"
      },
      "emoji": "📉",
      "color": "#FAF9F6"
    },
    {
      "word": "Colapso",
      "translations": {
        "en": "Collapse",
        "ar": "انهيار",
        "uk": "Колапс",
        "fr": "Effondrement"
      },
      "emoji": "💥",
      "color": "#FAF9F6"
    },
    {
      "word": "Conservación",
      "translations": {
        "en": "Conservation",
        "ar": "حفظ / صيانة",
        "uk": "Збереження",
        "fr": "Conservation"
      },
      "emoji": "🛡️",
      "color": "#FAF9F6"
    },
    {
      "word": "Asfalto",
      "translations": {
        "en": "Asphalt",
        "ar": "أسفلت",
        "uk": "Асфальт",
        "fr": "Asphalte"
      },
      "emoji": "🛣️",
      "color": "#FAF9F6"
    },
    {
      "word": "Hormigón",
      "translations": {
        "en": "Concrete",
        "ar": "خرسانة",
        "uk": "Бетон",
        "fr": "Béton"
      },
      "emoji": "🧱",
      "color": "#FAF9F6"
    },
    {
      "word": "Biodiversidad urbana",
      "translations": {
        "en": "Urban biodiversity",
        "ar": "التنوع البيولوجي الحضري",
        "uk": "Міське біорізноманіття",
        "fr": "Biodiversité urbaine"
      },
      "emoji": "🦋",
      "color": "#FAF9F6"
    },
    {
      "word": "Corredor verde",
      "translations": {
        "en": "Green corridor",
        "ar": "ممر أخضر",
        "uk": "Зелений коридор",
        "fr": "Corridor vert"
      },
      "emoji": "🌳",
      "color": "#FAF9F6"
    },
    {
      "word": "Refugio",
      "translations": {
        "en": "Refuge / Shelter",
        "ar": "ملجأ",
        "uk": "Притулок",
        "fr": "Refuge"
      },
      "emoji": "🏠",
      "color": "#FAF9F6"
    },
    {
      "word": "Cortisol",
      "translations": {
        "en": "Cortisol",
        "ar": "كورتيزول",
        "uk": "Кортизол",
        "fr": "Cortisol"
      },
      "emoji": "🧬",
      "color": "#FAF9F6"
    },
    {
      "word": "Estrés",
      "translations": {
        "en": "Stress",
        "ar": "توتر / ضغط عصبي",
        "uk": "Стрес",
        "fr": "Stress"
      },
      "emoji": "🤯",
      "color": "#FAF9F6"
    },
    {
      "word": "Habitable",
      "translations": {
        "en": "Livable / Habitable",
        "ar": "صالح للسكن",
        "uk": "Придатний для життя",
        "fr": "Habitable"
      },
      "emoji": "🛋️",
      "color": "#FAF9F6"
    }
  ],
  "content": "\n## Lectura 1: El auge del teletrabajo y sus desafíos\n\nLa adopción masiva del teletrabajo ha transformado por completo el panorama laboral contemporáneo. En un principio, tanto empresas como empleados aplaudieron esta modalidad debido a la flexibilidad horaria y al ahorro de tiempo en desplazamientos. Sin embargo, a medida que el modelo se ha consolidado, han comenzado a surgir desafíos psicológicos y logísticos que no se habían previsto adecuadamente.  \nEl principal obstáculo es la difusa línea que separa la vida laboral de la personal. Al trabajar en el mismo espacio donde se descansa, muchos profesionales confiesan que les resulta casi imposible \"desconectar\" al final de la jornada. Esto ha provocado un incremento en los casos de estrés laboral y una sensación de aislamiento social que las empresas intentan mitigar mediante reuniones híbridas y actividades de integración.\n\n---\n\n## Lectura 2: El misterio de la isla de Pascua\n\nLa isla de Pascua, ubicada en el océano Pacífico, es famosa mundialmente por sus imponentes estatuas de piedra conocidas como moáis. Estas gigantescas esculturas, talladas por los antiguos habitantes de la isla entre los siglos VIII y XVI, han desconcertado a los arqueólogos durante generaciones. La gran pregunta sigue siendo cómo una sociedad con tecnología limitada logró transportar bloques de piedra de varias toneladas a lo largo de kilómetros.  \nUna de las teorías más aceptadas sugiere que los isleños utilizaban troncos de árboles como rodillos para mover las estructuras. Lamentablemente, esta intensa actividad, sumada a la sobrepoblación, provocó una deforestación severa en la isla. Sin árboles, los recursos escasearon, lo que desencadenó una crisis social que colapsó la civilización antes de la llegada de los primeros exploradores europeos.\n\n---\n\n## Lectura 3: La importancia de la biodiversidad urbana\n\nCuando pensamos en la conservación de la naturaleza, solemos imaginar selvas tropicales o zonas montañosas remotas. Sin embargo, los científicos están prestando cada vez más atención a los ecosistemas urbanos. Las ciudades no son solo asfalto y hormigón; albergan una sorprendente variedad de aves, insectos y plantas que desempeñan un papel crucial en la calidad del aire y la regulación de la temperatura local.  \nCrear y mantener corredores verdes —como parques conectados o techos vegetales— ayuda a preservar esta biodiversidad. Estos espacios no solo ofrecen un refugio a los animales, sino que también mejoran significativamente la salud mental de los ciudadanos, reduciendo los niveles de cortisol, la hormona del estrés. Una ciudad verde es, en definitiva, una ciudad más habitable.\n  ",
  "exercises": [
    {
      "id": "b2-ex1",
      "question": "@[Textos Plataforma B1-C2.md] indica que las ventajas iniciales del teletrabajo son:",
      "options": [
        "La falta de control de las empresas",
        "La flexibilidad horaria y el ahorro de tiempo en traslados",
        "La reducción de los salarios ordinarios"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex2",
      "question": "¿Cuál es el principal obstáculo psicológico mencionado sobre el teletrabajo?",
      "options": [
        "La difusa línea entre la vida laboral y la personal",
        "No saber encender el ordenador portátil",
        "Tener demasiadas reuniones presenciales"
      ],
      "correctAnswer": 0
    },
    {
      "id": "b2-ex3",
      "question": "¿Cómo intentan las empresas solucionar el problema del aislamiento social?",
      "options": [
        "Prohibiendo el teletrabajo por completo",
        "Mediante reuniones híbridas y actividades de integración",
        "Aumentando las horas laborables diarias"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex4",
      "question": "¿En qué época aproximada se tallaron los moáis de la isla de Pascua?",
      "options": [
        "En el siglo XX",
        "Entre los siglos VIII y XVI",
        "Hace más de dos mil años"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex5",
      "question": "¿Cuál es el enigma arqueológico principal que rodea a estas estatuas?",
      "options": [
        "Cómo lograron esculpir la roca blanda",
        "Cómo las transportaron a lo largo de kilómetros sin tecnología avanzada",
        "De qué dios representaban las caras"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex6",
      "question": "¿Qué consecuencia ambiental provocó el uso excesivo de madera para mover los moáis?",
      "options": [
        "La contaminación del mar circundante",
        "Una deforestación severa en toda la isla",
        "La extinción de aves acuáticas"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex7",
      "question": "¿Qué funciones cruciales cumple la biodiversidad en las ciudades?",
      "options": [
        "Aumentar el tráfico vehicular nocturno",
        "Mejorar la calidad del aire y regular la temperatura local",
        "Facilitar la construcción de rascacielos"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex8",
      "question": "¿Qué es un 'corredor verde' según la lectura?",
      "options": [
        "Una carretera para coches eléctricos",
        "Espacios verdes como parques conectados o techos vegetales",
        "Una zona peatonal pintada de verde"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex9",
      "question": "¿Qué impacto tiene la presencia de áreas verdes sobre la hormona cortisol?",
      "options": [
        "La incrementa notablemente",
        "Reduce sus niveles, bajando el estrés de los ciudadanos",
        "No ejerce ninguna influencia médica"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex10",
      "question": "El antónimo de 'ahorro' es...",
      "options": [
        "gasto / despilfarro",
        "inversión",
        "presupuesto"
      ],
      "correctAnswer": 0
    },
    {
      "id": "b2-ex11",
      "question": "El sinónimo de la palabra 'mitigar' es...",
      "options": [
        "aumentar",
        "atenuar / suavizar",
        "provocar"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex12",
      "question": "Completa la frase: 'El hormigón y el _______ son materiales comunes en la arquitectura urbana.'",
      "options": [
        "cacao",
        "asfalto",
        "rodillo"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex13",
      "question": "Si los recursos en la isla eran limitados, significa que empezaron a...",
      "options": [
        "aumentar",
        "escasear",
        "consolidarse"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex14",
      "question": "El profesional que se encarga del estudio de civilizaciones antiguas a través de restos materiales es el...",
      "options": [
        "geólogo",
        "arqueólogo",
        "psicólogo"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex15",
      "question": "Completa la frase: 'La crisis social desencadenó el _______ total del sistema.'",
      "options": [
        "refugio",
        "colapso",
        "desplazamiento"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex16",
      "question": "¿Qué hormona está asociada con los niveles de estrés humano?",
      "options": [
        "Adrenalina",
        "Cortisol",
        "Insulina"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex17",
      "question": "Un obstáculo que es 'difuso' se caracteriza por ser...",
      "options": [
        "muy claro y preciso",
        "poco definido o confuso",
        "sencillo de resolver"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex18",
      "question": "El término 'habitable' se aplica a una casa que...",
      "options": [
        "está en ruinas",
        "reúne las condiciones para vivir en ella",
        "es extremadamente cara"
      ],
      "correctAnswer": 1
    },
    {
      "id": "b2-ex19",
      "question": "Completa: 'El teletrabajo ha transformado el _______ laboral contemporáneo.'",
      "options": [
        "asfalto",
        "auge",
        "panorama"
      ],
      "correctAnswer": 2
    },
    {
      "id": "b2-ex20",
      "question": "Para mover las piedras gigantes, los isleños utilizaban troncos como...",
      "options": [
        "rodillos",
        "moáis",
        "corredores"
      ],
      "correctAnswer": 0
    }
  ]
},
{
  "id": "c1-lecturas-vida",
  "topic": "Comprensión C1",
  "title": "Comprensión Lectora: Ética, Urbanismo y Ciencia (C1)",
  "level": "C1",
  "category": "Comprensión",
  "description": "Lecturas sobre el dilema ético de la IA en el arte, el fenómeno de la gentrificación y el descubrimiento de la neuroplasticidad, con 30 términos de vocabulario y 20 preguntas.",
  "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
  "illustrationUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
  "emoji": "📖",
  "color": "#E2F3E7",
  "vocabulary": [
    {
      "word": "Irrupción",
      "translations": {
        "en": "Emergence / Onset",
        "ar": "اقتحام / ظهور مفاجئ",
        "uk": "Поява / Вторгнення",
        "fr": "Irruption"
      },
      "emoji": "🌊",
      "color": "#E2F3E7"
    },
    {
      "word": "Algoritmos",
      "translations": {
        "en": "Algorithms",
        "ar": "خوارزميات",
        "uk": "Алгоритми",
        "fr": "Algorithmes"
      },
      "emoji": "🔢",
      "color": "#E2F3E7"
    },
    {
      "word": "Encarnizado",
      "translations": {
        "en": "Fierce / Bitter",
        "ar": "ضاري / محتدم",
        "uk": "Запеклий",
        "fr": "Acharné"
      },
      "emoji": "⚔️",
      "color": "#E2F3E7"
    },
    {
      "word": "Democratización",
      "translations": {
        "en": "Democratization",
        "ar": "إرساء الديمقراطية",
        "uk": "Демократизація",
        "fr": "Démocratisation"
      },
      "emoji": "🗳️",
      "color": "#E2F3E7"
    },
    {
      "word": "Plagio sistemático",
      "translations": {
        "en": "Systematic plagiarism",
        "ar": "سرقة أدبية ممنهجة",
        "uk": "Систематичний плагіат",
        "fr": "Plagiat systématique"
      },
      "emoji": "📋",
      "color": "#E2F3E7"
    },
    {
      "word": "Consentimiento",
      "translations": {
        "en": "Consent",
        "ar": "موافقة",
        "uk": "Згода",
        "fr": "Consentement"
      },
      "emoji": "✍️",
      "color": "#E2F3E7"
    },
    {
      "word": "Autoría",
      "translations": {
        "en": "Authorship",
        "ar": "تأليف / ملكية العمل",
        "uk": "Авторство",
        "fr": "Auteur / Paternité"
      },
      "emoji": "✒️",
      "color": "#E2F3E7"
    },
    {
      "word": "Emular",
      "translations": {
        "en": "To emulate",
        "ar": "يقلد / يحاكي",
        "uk": "Емулювати",
        "fr": "Émuler"
      },
      "emoji": "👥",
      "color": "#E2F3E7"
    },
    {
      "word": "Detrimento",
      "translations": {
        "en": "Detriment / Harm",
        "ar": "ضرر / أذى",
        "uk": "Шкода",
        "fr": "Détriment"
      },
      "emoji": "📉",
      "color": "#E2F3E7"
    },
    {
      "word": "Propiedad intelectual",
      "translations": {
        "en": "Intellectual property",
        "ar": "الملكية الفكرية",
        "uk": "Інтелектуальна власність",
        "fr": "Propriété intellectuelle"
      },
      "emoji": "🧠",
      "color": "#E2F3E7"
    },
    {
      "word": "Gentrificación",
      "translations": {
        "en": "Gentrification",
        "ar": "الgentrification (تغيير طبيعة الحي)",
        "uk": "Джентрифікація",
        "fr": "Gentrification"
      },
      "emoji": "🏢",
      "color": "#E2F3E7"
    },
    {
      "word": "Controvertido",
      "translations": {
        "en": "Controversial",
        "ar": "مثير للجدل",
        "uk": "Суперечливий",
        "fr": "Controversé"
      },
      "emoji": "🗣️",
      "color": "#E2F3E7"
    },
    {
      "word": "Rehabilitación",
      "translations": {
        "en": "Rehabilitation / Renovation",
        "ar": "إعادة تأهيل",
        "uk": "Реконструкція",
        "fr": "Réhabilitation"
      },
      "emoji": "🛠️",
      "color": "#E2F3E7"
    },
    {
      "word": "Afluencia de capital",
      "translations": {
        "en": "Capital inflow",
        "ar": "تدفق رأس المال",
        "uk": "Приплив капіталу",
        "fr": "Afflux de capitaux"
      },
      "emoji": "💵",
      "color": "#E2F3E7"
    },
    {
      "word": "Estética",
      "translations": {
        "en": "Aesthetics",
        "ar": "علم الجمال / جمالية",
        "uk": "Естетика",
        "fr": "Esthétique"
      },
      "emoji": "🎨",
      "color": "#E2F3E7"
    },
    {
      "word": "Encarecimiento",
      "translations": {
        "en": "Price increase",
        "ar": "ارتفاع الأسعار",
        "uk": "Подорожчання",
        "fr": "Renchérissement"
      },
      "emoji": "📈",
      "color": "#E2F3E7"
    },
    {
      "word": "Expulsión",
      "translations": {
        "en": "Expulsion / Displacement",
        "ar": "طرد / تهجير",
        "uk": "Виселення",
        "fr": "Expulsion"
      },
      "emoji": "🚪",
      "color": "#E2F3E7"
    },
    {
      "word": "Homogéneas",
      "translations": {
        "en": "Homogeneous",
        "ar": "متجانسة",
        "uk": "Однорідні",
        "fr": "Homogènes"
      },
      "emoji": "🥛",
      "color": "#E2F3E7"
    },
    {
      "word": "Erosión",
      "translations": {
        "en": "Erosion",
        "ar": "تآكل",
        "uk": "Ерозія",
        "fr": "Érosion"
      },
      "emoji": "🏔️",
      "color": "#E2F3E7"
    },
    {
      "word": "Tejido social",
      "translations": {
        "en": "Social fabric",
        "ar": "النسيج الاجتماعي",
        "uk": "Соціальна тканина",
        "fr": "Tissu social"
      },
      "emoji": "🧶",
      "color": "#E2F3E7"
    },
    {
      "word": "Desarraigo",
      "translations": {
        "en": "Uprooting / Alienation",
        "ar": "اقتلاع من الجذور / الغربة",
        "uk": "Відчуження / Втрата коріння",
        "fr": "Déracinement"
      },
      "emoji": "🥀",
      "color": "#E2F3E7"
    },
    {
      "word": "Neuroplasticidad",
      "translations": {
        "en": "Neuroplasticity",
        "ar": "المرونة العصبية",
        "uk": "Нейропластичність",
        "fr": "Neuroplasticité"
      },
      "emoji": "🧠",
      "color": "#E2F3E7"
    },
    {
      "word": "Estática",
      "translations": {
        "en": "Static",
        "ar": "ساكنة / غير متغيرة",
        "uk": "Статична",
        "fr": "Statique"
      },
      "emoji": "⏸️",
      "color": "#E2F3E7"
    },
    {
      "word": "Inmutable",
      "translations": {
        "en": "Immutable",
        "ar": "ثابتة لا تتغير",
        "uk": "Незмінна",
        "fr": "Immuable"
      },
      "emoji": "🔒",
      "color": "#E2F3E7"
    },
    {
      "word": "Deteriorar",
      "translations": {
        "en": "To deteriorate",
        "ar": "يتدهور",
        "uk": "Погіршуватися",
        "fr": "Se détériorer"
      },
      "emoji": "📉",
      "color": "#E2F3E7"
    },
    {
      "word": "Sinapsis",
      "translations": {
        "en": "Synapses",
        "ar": "مواضع التشابك العصبي",
        "uk": "Синапси",
        "fr": "Synapses"
      },
      "emoji": "⚡",
      "color": "#E2F3E7"
    },
    {
      "word": "Flexible",
      "translations": {
        "en": "Flexible",
        "ar": "مرن",
        "uk": "Гнучкий",
        "fr": "Flexible"
      },
      "emoji": "🤸",
      "color": "#E2F3E7"
    },
    {
      "word": "Catalizadores",
      "translations": {
        "en": "Catalysts",
        "ar": "محفزات",
        "uk": "Каталізатори",
        "fr": "Catalyseurs"
      },
      "emoji": "🧪",
      "color": "#E2F3E7"
    },
    {
      "word": "Maleable",
      "translations": {
        "en": "Malleable / Adaptable",
        "ar": "قابل للتشكيل",
        "uk": "Пластичний",
        "fr": "Malléable"
      },
      "emoji": "🏺",
      "color": "#E2F3E7"
    },
    {
      "word": "Derechos de autor",
      "translations": {
        "en": "Copyright",
        "ar": "حقوق الطبع والنشر",
        "uk": "Авторські права",
        "fr": "Droits d'auteur"
      },
      "emoji": "©️",
      "color": "#E2F3E7"
    }
  ],
  "content": "\n## Lectura 1: El dilema ético de la inteligencia artificial en el arte\n\nLa irrupción de algoritmos de inteligencia artificial capaces de generar imágenes, música y textos literarios de alta calidad ha desatado un debate encarnizado en el sector cultural. Mientras algunos tecnólogos celebran estas herramientas como una democratización de la creatividad, la comunidad artística denuncia de manera unánime el plagio sistemático que subyace en el entrenamiento de estos modelos de lenguaje, nutridos con millones de obras protegidas por derechos de autor sin consentimiento previo.  \nEl debate no es únicamente legal, sino también filosófico. Nos obliga a cuestionar la esencia misma de la autoría: ¿puede una máquina poseer intención artística o solo emula patrones probabilísticos? La falta de una legislación internacional clara deja a los creadores desprotegidos frente a un mercado que empieza a priorizar la inmediatez y el bajo coste de la producción automatizada en detrimento de la propiedad intelectual y el valor del trabajo humano.\n\n---\n\n## Lectura 2: El fenómeno de la gentrificación y el tejido social\n\nLa gentrificación se ha consolidado como uno de los procesos urbanísticos más controvertidos del siglo XXI. Este fenómeno, caracterizado por la rehabilitación de barrios históricos degradados y la consecuente afluencia de capital, suele traducirse a primera vista en una mejora estética y comercial de la zona. No obstante, este lavado de cara esconde una reality descarnada: el encarecimiento desorbitado de la vivienda y la expulsión residencial de los vecinos de toda la vida.  \nAl sustituir el comercio local tradicional por franquicias homogéneas y pisos turísticos, se erosiona la identidad cultural y el tejido social que daban vida al barrio. Los lazos de solidaridad vecinal se rompen, transformando vecindarios vibrantes en meros escaparates turísticos carentes de alma. El reto actual de las administraciones estriba en fomentar la inversión urbana sin que ello implique el desarraigo de las clases populares.\n\n---\n\n## Lectura 3: La importancia de la neuroplasticidad: el cerebro en constante evolución\n\nDurante décadas, la neurociencia sostuvo el dogma de que el cerebro humano adulto era una estructura estática e inmutable, cuyas conexiones neuronales se deterioraban irreversiblemente con la edad. Sin embargo, el descubrimiento de la neuroplasticidad revolucionó este paradigma al demostrar que el cerebro posee una capacidad asombrosa para reorganizarse, crear nuevas sinapsis e incluso generar neuronas a lo largo de toda la existencia en respuesta al aprendizaje y la experiencia.  \nEsta flexibilidad cognitiva implica que nuestras acciones y pensamientos moldean de forma literal la estructura física de nuestra mente. Actividades intelectualmente exigentes, el aprendizaje de un nuevo idioma o la práctica de la meditación actúan como catalizadores de esta remodelación arquitectónica cerebral. Por consiguiente, el envejecimiento cognitivo ya no se percibe como una decadencia pasiva, sino como un proceso maleable sobre el cual el individuo ejerce una influencia directa.\n  ",
  "exercises": [
    {
      "id": "c1-ex1",
      "question": "¿Cuál es el principal reproche legal de la comunidad artística al desarrollo de la IA?",
      "options": [
        "El alto coste energético de los servidores",
        "El plagio sistemático al entrenar modelos sin consentimiento previo",
        "La baja resolución de las ilustraciones generadas"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex2",
      "question": "¿Qué interrogante filosófico plantea la generación de arte por algoritmos?",
      "options": [
        "Si el arte digital debe costar impuestos adicionales",
        "Si una máquina puede poseer intención artística o solo emula patrones",
        "Cuál será la siguiente versión de los algoritmos"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex3",
      "question": "¿Por qué se encuentran desprotegidos los creadores frente a la IA?",
      "options": [
        "Políticamente no tienen derecho al voto",
        "Por la falta de una legislación internacional clara",
        "Porque no saben pintar al óleo"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex4",
      "question": "¿Qué efectos positivos y negativos contrapone el texto sobre la gentrificación?",
      "options": [
        "La reducción de la delincuencia y la escasez de vehículos",
        "La mejora estética/comercial contra el encarecimiento y expulsión de vecinos",
        "La creación de zonas verdes y el aumento del asfalto"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex5",
      "question": "¿Qué ocurre con la identidad de un barrio bajo este proceso de gentrificación?",
      "options": [
        "Se mantiene intacta y se fortalece",
        "Se erosiona al sustituir el comercio local por franquicias y pisos turísticos",
        "Se traslada a museos nacionales"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex6",
      "question": "¿Cuál es el desafío principal para las administraciones según la gentrificación?",
      "options": [
        "Atraer inversión urbana sin desarraigar a las clases populares",
        "Prohibir totalmente las visitas turísticas",
        "Subsanar todas las deudas de los ayuntamientos"
      ],
      "correctAnswer": 0
    },
    {
      "id": "c1-ex7",
      "question": "¿Qué dogma compartía la neurociencia clásica antes del descubrimiento de la neuroplasticidad?",
      "options": [
        "Que el cerebro es una red de agua",
        "Que el cerebro adulto es estático, inmutable y se deteriora irreversiblemente",
        "Que las neuronas se multiplican indefinidamente"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex8",
      "question": "¿Qué actividades estimulan la remodelación arquitectónica del cerebro?",
      "options": [
        "Mirar televisión pasivamente",
        "El aprendizaje de idiomas, la meditación y las actividades exigentes",
        "Dormir más de doce horas al día"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex9",
      "question": "¿Cómo se percibe el envejecimiento mental tras conocer la neuroplasticidad?",
      "options": [
        "Como un declive inevitable y pasivo",
        "Como un proceso maleable sobre el cual ejercemos influencia directa",
        "Como una enfermedad imposible de paliar"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex10",
      "question": "El sinónimo de 'debate encarnizado' es...",
      "options": [
        "conversación de cortesía",
        "discusión feroz / violenta",
        "acuerdo de paz"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex11",
      "question": "Si algo se hace sin 'consentimiento', significa que...",
      "options": [
        "se solicitó permiso formal",
        "se hizo sin el acuerdo o autorización de la persona",
        "es totalmente gratuito"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex12",
      "question": "Completa la frase: 'El encarecimiento de la vivienda provoca la _______ de los vecinos tradicionales.'",
      "options": [
        "gentrificación",
        "expulsión",
        "sinapsis"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex13",
      "question": "El antónimo de 'homogéneas' es...",
      "options": [
        "iguales",
        "heterogéneas / variadas",
        "estáticas"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex14",
      "question": "Completa la frase: 'El desarraigo de los residentes daña gravemente el _______ del vecindario.'",
      "options": [
        "algoritmo",
        "consentimiento",
        "tejido social"
      ],
      "correctAnswer": 2
    },
    {
      "id": "c1-ex15",
      "question": "Un cambio en la estructura física del cerebro se describe como una remodelación...",
      "options": [
        "inmutable",
        "arquitectónica",
        "estética"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex16",
      "question": "Las conexiones funcionales entre las células nerviosas cerebrales se llaman...",
      "options": [
        "sinapsis",
        "algoritmos",
        "catalizadores"
      ],
      "correctAnswer": 0
    },
    {
      "id": "c1-ex17",
      "question": "El término 'inmutable' se refiere a algo que...",
      "options": [
        "cambia con gran facilidad",
        "no se puede alterar o cambiar",
        "está roto"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c1-ex18",
      "question": "Completa: 'El aprendizaje y la experiencia actúan como _______ de la remodelación cerebral.'",
      "options": [
        "plagios",
        "desarraigos",
        "catalizadores"
      ],
      "correctAnswer": 2
    },
    {
      "id": "c1-ex19",
      "question": "¿Qué concepto define la propiedad sobre creaciones de la mente?",
      "options": [
        "Propiedad intelectual",
        "Gentrificación",
        "Consentimiento"
      ],
      "correctAnswer": 0
    },
    {
      "id": "c1-ex20",
      "question": "El cerebro posee capacidad para reorganizarse gracias a que es...",
      "options": [
        "estático",
        "maleable",
        "inmutable"
      ],
      "correctAnswer": 1
    }
  ]
},
{
  "id": "c2-lecturas-vida",
  "topic": "Comprensión C2",
  "title": "Comprensión Lectora: Filosofía, Cultura y Epistemología (C2)",
  "level": "C2",
  "category": "Comprensión",
  "description": "Lecturas sobre el eclipse de la oratoria, el coleccionismo y la epistemología de la posverdad, con 30 términos de vocabulario y 20 preguntas.",
  "imageUrl": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=80",
  "illustrationUrl": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=80",
  "emoji": "📖",
  "color": "#FFF4E5",
  "vocabulary": [
    {
      "word": "Impasible",
      "translations": {
        "en": "Impassive / Unmoved",
        "ar": "لا مبالٍ / هادئ",
        "uk": "Байдужий",
        "fr": "Impassible"
      },
      "emoji": "😐",
      "color": "#FFF4E5"
    },
    {
      "word": "Declive",
      "translations": {
        "en": "Decline",
        "ar": "تدهور / انحدar",
        "uk": "Занепад",
        "fr": "Déclin"
      },
      "emoji": "📉",
      "color": "#FFF4E5"
    },
    {
      "word": "Retórica clásica",
      "translations": {
        "en": "Classical rhetoric",
        "ar": "البلاغة الكلاسيكية",
        "uk": "Класична риторика",
        "fr": "Rhétorique classique"
      },
      "emoji": "🗣️",
      "color": "#FFF4E5"
    },
    {
      "word": "Vacuidad",
      "translations": {
        "en": "Emptiness / Vacuity",
        "ar": "فراغ",
        "uk": "Пустота",
        "fr": "Vacuité"
      },
      "emoji": "🕳️",
      "color": "#FFF4E5"
    },
    {
      "word": "Eslogan efectista",
      "translations": {
        "en": "Sensational slogan",
        "ar": "شعار مؤثر",
        "uk": "Сенсаційне гасло",
        "fr": "Slogan accrocheur"
      },
      "emoji": "📢",
      "color": "#FFF4E5"
    },
    {
      "word": "Ponderación de matices",
      "translations": {
        "en": "Nuances weighing",
        "ar": "وزن الفروق الدقيقة",
        "uk": "Зважування нюансів",
        "fr": "Pondération des nuances"
      },
      "emoji": "⚖️",
      "color": "#FFF4E5"
    },
    {
      "word": "Rigor dialéctico",
      "translations": {
        "en": "Dialectical rigor",
        "ar": "الصرامة الجدلية",
        "uk": "Діалектична строгість",
        "fr": "Rigueur dialectique"
      },
      "emoji": "🧠",
      "color": "#FFF4E5"
    },
    {
      "word": "Anacronismo",
      "translations": {
        "en": "Anachronism",
        "ar": "مغالطة تاريخية",
        "uk": "Анахронізм",
        "fr": "Anachronisme"
      },
      "emoji": "⏳",
      "color": "#FFF4E5"
    },
    {
      "word": "Trivialización",
      "translations": {
        "en": "Trivialization",
        "ar": "تبسيط مبتذل / تسخيف",
        "uk": "Тривіалізація",
        "fr": "Trivialisation"
      },
      "emoji": "🎈",
      "color": "#FFF4E5"
    },
    {
      "word": "Tribalismo ideológico",
      "translations": {
        "en": "Ideological tribalism",
        "ar": "القبلية الأيديولوجية",
        "uk": "Ідеологічний трибалізм",
        "fr": "Tribalisme idéologique"
      },
      "emoji": "🏹",
      "color": "#FFF4E5"
    },
    {
      "word": "Coleccionismo",
      "translations": {
        "en": "Collecting / Collectism",
        "ar": "جمع المقتنيات",
        "uk": "Колекціонування",
        "fr": "Collectionnisme"
      },
      "emoji": "📦",
      "color": "#FFF4E5"
    },
    {
      "word": "Meticuloso",
      "translations": {
        "en": "Meticulous",
        "ar": "دقيق للغاية / وسواسي",
        "uk": "Ретельний",
        "fr": "Meticuleux"
      },
      "emoji": "🔍",
      "color": "#FFF4E5"
    },
    {
      "word": "Sacralización",
      "translations": {
        "en": "Sacralization",
        "ar": "تقديس",
        "uk": "Сакралізація",
        "fr": "Sacralisation"
      },
      "emoji": "⛪",
      "color": "#FFF4E5"
    },
    {
      "word": "Taxonomía",
      "translations": {
        "en": "Taxonomy / Classification",
        "ar": "علم التصنيف",
        "uk": "Таксономія",
        "fr": "Taxonomie"
      },
      "emoji": "📂",
      "color": "#FFF4E5"
    },
    {
      "word": "Atávico",
      "translations": {
        "en": "Atavistic / Ancestral",
        "ar": "قديم / موروث عن الأجداد",
        "uk": "Атавістичний",
        "fr": "Atavique"
      },
      "emoji": "🦖",
      "color": "#FFF4E5"
    },
    {
      "word": "Fetiche material",
      "translations": {
        "en": "Material fetish / Token",
        "ar": "رمز مادي",
        "uk": "Матеріальний фетиш",
        "fr": "Fétiche matériel"
      },
      "emoji": "🧿",
      "color": "#FFF4E5"
    },
    {
      "word": "Finitud",
      "translations": {
        "en": "Finitude / Mortality",
        "ar": "محدودية / فناء",
        "uk": "Скінченність",
        "fr": "Finitude"
      },
      "emoji": "⏳",
      "color": "#FFF4E5"
    },
    {
      "word": "Aplacar",
      "translations": {
        "en": "To appease / Quell",
        "ar": "يهدئ / يسكن",
        "uk": "Заспокоювати",
        "fr": "Apaiser"
      },
      "emoji": "🌊",
      "color": "#FFF4E5"
    },
    {
      "word": "Bucle infinito",
      "translations": {
        "en": "Infinite loop",
        "ar": "حلقة لا نهائية",
        "uk": "Нескінченний цикл",
        "fr": "Boucle infinie"
      },
      "emoji": "🔁",
      "color": "#FFF4E5"
    },
    {
      "word": "Nostalgia",
      "translations": {
        "en": "Nostalgia",
        "ar": "حنين إلى الماضي",
        "uk": "Ностальгія",
        "fr": "Nostalgie"
      },
      "emoji": "🕰️",
      "color": "#FFF4E5"
    },
    {
      "word": "Epistemología",
      "translations": {
        "en": "Epistemology",
        "ar": "نظرية المعرفة",
        "uk": "Епістемологія",
        "fr": "Épistémologie"
      },
      "emoji": "📖",
      "color": "#FFF4E5"
    },
    {
      "word": "Posverdad",
      "translations": {
        "en": "Post-truth",
        "ar": "ما بعد الحقيقة",
        "uk": "Постправда",
        "fr": "Post-vérité"
      },
      "emoji": "🎭",
      "color": "#FFF4E5"
    },
    {
      "word": "Fractura epistemológica",
      "translations": {
        "en": "Epistemological fracture",
        "ar": "شرخ معرفي",
        "uk": "Епістемологічний розрив",
        "fr": "Fracture épistémologique"
      },
      "emoji": "⚡",
      "color": "#FFF4E5"
    },
    {
      "word": "Realidad fáctica",
      "translations": {
        "en": "Factual reality",
        "ar": "الواقع الفعلي / القائم على الحقائق",
        "uk": "Фактична реальність",
        "fr": "Réalité factuelle"
      },
      "emoji": "⚖️",
      "color": "#FFF4E5"
    },
    {
      "word": "Burbujas informativas",
      "translations": {
        "en": "Filter bubbles",
        "ar": "فقاعات المعلومات",
        "uk": "Інформаційні бульбашки",
        "fr": "Bulles d'information"
      },
      "emoji": "🫧",
      "color": "#FFF4E5"
    },
    {
      "word": "Escrutinio empírico",
      "translations": {
        "en": "Empirical scrutiny",
        "ar": "التدقيق التجريبي",
        "uk": "Емпіричне дослідження",
        "fr": "Scrutin empirique"
      },
      "emoji": "🔬",
      "color": "#FFF4E5"
    },
    {
      "word": "Cosmovisión",
      "translations": {
        "en": "Worldview",
        "ar": "رؤية العالم / الكونية",
        "uk": "Світогляд",
        "fr": "Vision du monde"
      },
      "emoji": "🌍",
      "color": "#FFF4E5"
    },
    {
      "word": "Disonancia cognitiva",
      "translations": {
        "en": "Cognitive dissonance",
        "ar": "التنافر المعرفي",
        "uk": "Когнітивний дисонанс",
        "fr": "Dissonance cognitive"
      },
      "emoji": "🧠",
      "color": "#FFF4E5"
    },
    {
      "word": "Hipertrofia informativa",
      "translations": {
        "en": "Information overload",
        "ar": "تضخم المعلومات",
        "uk": "Інформаційне перевантаження",
        "fr": "Surcharge informationnelle"
      },
      "emoji": "📚",
      "color": "#FFF4E5"
    },
    {
      "word": "Atomizar",
      "translations": {
        "en": "To atomize / Fragment",
        "ar": "يجزئ / يفتت",
        "uk": "Атомізувати / Розщеплювати",
        "fr": "Atomiser"
      },
      "emoji": "⚛️",
      "color": "#FFF4E5"
    }
  ],
  "content": "\n## Lectura 1: El eclipse de la oratoria en la era de la inmediatez digital\n\nAsistimos de manera impasible al paulatino declive de la retórica clásica en el discurso público contemporáneo. En un entorno comunicativo hiperconectado, tiranizado por el algoritmo y la brevedad del *clickbait*, el debate político e intelectual ha sucumbido a la vacuidad del eslogan efectista y la polarización extrema. La argumentación prolija, fundamentada en la ponderación de matices y el rigor dialéctico, se percibe hoy en día como un anacronismo tedioso que ahuyenta a una audiencia aquejada de un déficit de atención crónico.  \nEsta devaluación de la palabra no es un mero asunto estético; hiere de gravedad la calidad democrática. Cuando la persuasión apela exclusivamente al sesgo cognitivo visceral y prescinde de la lógica formal, el ciudadano queda inerme ante la demagogia. Restaurar el prestigio del discurso articulado se erige, por ende, en un imperativo ético inaplazable si pretendemos salvaguardar el ágora pública de la trivialización y el tribalismo ideológico.\n\n---\n\n## Lectura 2: El coleccionismo y la quimera de la posesión\n\nEl coleccionismo trasciende la mera acumulación suntuaria de objetos para adentrarse en los intrincados recovecos de la psicología humana. El coleccionista meticuloso no busca la utilidad práctica de la pieza adquirida, sino la sacralización de la misma dentro de una taxonomía personal y subjetiva. Existe en este impulso un intento atávico de conferir orden al caos cósmico, de compartimentar la realidad para hacerla aprehensible a través de fetiches materiales que actúan como diques de contención contra el olvido y la finitud.  \nParadójicamente, la aparente satisfacción que depara el hallazgo de la pieza largamente codiciada es tan efímera como ilusoria. Lejos de aplacar el deseo, la completitud de la serie espolea una nueva carencia, reanudando un bucle infinito donde el objeto ausente tiraniza al poseedor. Así, el coleccionismo se revela no como el disfrute de lo que se detenta, sino como una perenne nostalgia de lo que falta; una quimera donde el sujeto acaba siendo poseído por su propia colección.\n\n---\n\n## Lectura 3: Epistemología de la posverdad: la verdad como constructo de consumo\n\nEl advenimiento de la denominada sociedad de la posverdad ha supuesto una fractura epistemológica de magnitudes inéditas. Ya no se trata de la clásica mentira política —coherente en su deliberada ocultación de los hechos—, sino de la instauración de un régimen de indiferencia absoluta hacia la realidad fáctica. En este nuevo ecosistema, los hechos objetivos ejercen una influencia notablemente inferior a la hora de modelar la opinión pública que las apelaciones a las emociones de la masa o a las creencias firmemente arraigadas en burbujas informativas autorreferenciales.  \nLa verdad ha dejado de ser un consenso descubierto mediante el escrutinio empírico para transformarse en un bien de consumo personalizado. El individuo contemporáneo exige que la información valide su cosmovisión preexistente, penalizando cognitivamente cualquier disonancia que ose perturbar su zona de confort ideológico. Nos enfrentamos, por tanto, no a una falta de información, sino a una hipertrofia informativa que satura el juicio crítico y atomiza la realidad en tantas verdades como comunidades virtuales existan.\n  ",
  "exercises": [
    {
      "id": "c2-ex1",
      "question": "¿Qué factores del entorno digital actual han propiciado el declive de la retórica tradicional?",
      "options": [
        "La falta de conexiones de fibra óptica",
        "El algoritmo, la brevedad del clickbait y la hiperconectividad",
        "La proliferación de audiolibros gratuitos"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex2",
      "question": "¿Por qué el autor argumenta que la pérdida de la oratoria rigurosa afecta directamente a la democracia?",
      "options": [
        "Porque los políticos hablan con voz demasiado baja",
        "Porque deja al ciudadano inerme ante la demagogia al apelar al sesgo cognitivo visceral",
        "Porque disminuyen los presupuestos públicos destinados a debates"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex3",
      "question": "¿A qué resortes humanos apela la comunicación actual en lugar de recurrir a la lógica formal?",
      "options": [
        "A la lógica matemática formal",
        "Al sesgo cognitivo visceral y emocional de la masa",
        "A la memorización de discursos clásicos"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex4",
      "question": "Según el texto, ¿cuál es el trasfondo psicológico que motiva el impulso de coleccionar?",
      "options": [
        "El deseo de revender los objetos con beneficio económico",
        "Un intento atávico de ordenar el caos y contener el olvido y la finitud",
        "La falta de espacio para almacenar objetos comunes"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex5",
      "question": "Explique la paradoja que se manifiesta cuando un coleccionista consigue la pieza que tanto deseaba.",
      "options": [
        "El valor comercial disminuye drásticamente",
        "La completitud espolea una nueva carencia, reanudando el bucle del deseo",
        "El coleccionista decide donar la colección a un museo municipal"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex6",
      "question": "¿Qué significado encierra la frase final afirmando que el sujeto 'acaba siendo poseído por su propia colección'?",
      "options": [
        "Que la colección adquiere poderes sobrenaturales",
        "Que el coleccionista pierde autonomía subordinado a la tiranía de la colección",
        "Que los objetos ocupan su cama habitual"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex7",
      "question": "¿En qué se diferencia conceptualmente la 'posverdad' de la mentira política tradicional?",
      "options": [
        "La mentira tradicional requería papel impreso",
        "La posverdad instaura un régimen de indiferencia absoluta hacia la realidad fáctica",
        "La mentira era más fácil de memorizar"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex8",
      "question": "¿Cómo interactúa el ciudadano de la sociedad de la posverdad con la información que contradice sus creencias?",
      "options": [
        "La analiza críticamente y cambia de opinión",
        "La penaliza cognitivamente para proteger su zona de confort ideológico",
        "La comparte con todos sus contactos de forma neutral"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex9",
      "question": "¿Qué consecuencia tiene la 'hipertrofia informativa' sobre el juicio crítico y la noción colectiva de la realidad?",
      "options": [
        "Facilita un consenso científico unánime",
        "Satura el juicio crítico y atomiza la realidad en múltiples verdades estancas",
        "Reduce el coste de los dispositivos informáticos"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex10",
      "question": "El antónimo de 'impasible' es...",
      "options": [
        "tranquilo",
        "conmovido / alterado",
        "apático"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex11",
      "question": "La 'vacuidad' de una propuesta se refiere a su...",
      "options": [
        "riqueza conceptual",
        "falta de contenido o profundidad",
        "complejidad gramatical"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex12",
      "question": "Un coleccionista que trabaja de forma extremadamente cuidadosa y detallada es...",
      "options": [
        "impasible",
        "meticuloso",
        "atávico"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex13",
      "question": "Completa la frase: 'El impulso de coleccionar responde a un deseo _______ heredado de los ancestros.'",
      "options": [
        "fáctico",
        "atávico",
        "tedioso"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex14",
      "question": "El estudio del origen, alcance y validez del conocimiento científico es la...",
      "options": [
        "epistemología",
        "retórica",
        "taxonomía"
      ],
      "correctAnswer": 0
    },
    {
      "id": "c2-ex15",
      "question": "Completa: 'La sociedad de la posverdad ha causado una _______ epistemológica inédita.'",
      "options": [
        "finitud",
        "nostalgia",
        "fractura"
      ],
      "correctAnswer": 2
    },
    {
      "id": "c2-ex16",
      "question": "La realidad que se basa estrictamente en hechos reales y demostrables es la realidad...",
      "options": [
        "fáctica",
        "vacua",
        "anacrónica"
      ],
      "correctAnswer": 0
    },
    {
      "id": "c2-ex17",
      "question": "Completa la frase: 'Las comunidades de internet suelen encerrarse en sus propias _______ informativas.'",
      "options": [
        "taxonomías",
        "burbujas",
        "matices"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex18",
      "question": "Un examen minucioso y empírico de un hecho se denomina...",
      "options": [
        "eslogan",
        "escrutinio",
        "anacronismo"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex19",
      "question": "La cosmovisión de una persona representa su...",
      "options": [
        "situación financiera",
        "manera de ver e interpretar el mundo",
        "capacidad de oratoria"
      ],
      "correctAnswer": 1
    },
    {
      "id": "c2-ex20",
      "question": "Cuando una realidad unificada se divide en múltiples partes desconectadas, se dice que se ha...",
      "options": [
        "aplacado",
        "atomizado",
        "sacralizado"
      ],
      "correctAnswer": 1
    }
  ]
}
];
