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
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=80",
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
        question: "¿Con qué letra empieza la palabra 'Avión'?",
        options: ["E", "O", "A"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "¿Qué imagen empieza con la letra 'B'?",
        options: ["Casa", "Barco", "Dedo"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "¿Con qué letra empieza la palabra 'Sol'?",
        options: ["S", "T", "R"],
        correctAnswer: 0
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
      { word: "La cabeza", translations: { en: "Head", ar: "الرأس", uk: "Голова", fr: "Tête" }, emoji: "👧", imageUrl: "https://images.unsplash.com/photo-1554533899-787ef890e98f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", illustrationUrl: "/images/vocab/cabeza.png", color: "#EBF8FF" },
      { word: "La mano", translations: { en: "Hand", ar: "اليد", uk: "Рука", fr: "Main" }, emoji: "✋", imageUrl: "https://plus.unsplash.com/premium_photo-1666107278223-780557577da0?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", illustrationUrl: "/images/vocab/mano.png", color: "#EBF8FF" },
      { word: "El pie", translations: { en: "Foot", ar: "القدم", uk: "Нога", fr: "Pied" }, emoji: "🦶", imageUrl: "https://images.unsplash.com/photo-1638859460750-181fcc7936a6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", illustrationUrl: "/images/vocab/pie.png", color: "#EBF8FF" },
      { word: "Los ojos", translations: { en: "Eyes", ar: "العينان", uk: "Очі", fr: "Yeux" }, emoji: "👁️", imageUrl: "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", illustrationUrl: "/images/vocab/ojos.png", color: "#EBF8FF" },
      { word: "Las piernas", translations: { en: "Legs", ar: "الساقين", uk: "Ноги", fr: "Jambes" }, emoji: "🦵", imageUrl: "https://images.unsplash.com/photo-1687462324979-c53a1af0d48c?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", illustrationUrl: "/images/vocab/piernas.png", color: "#EBF8FF" },
      { word: "El brazo", translations: { en: "Arm", ar: "الذراع", uk: "Рука", fr: "Bras" }, emoji: "💪", imageUrl: "https://images.unsplash.com/photo-1591302974398-10cb8ccb44c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", illustrationUrl: "/images/vocab/brazo.png", color: "#EBF8FF" }
    ],
    content: `
## El Cuerpo Humano

Aprender las partes de nuestro cuerpo nos ayuda a comunicarnos mejor.
    `,
    exercises: [
      {
        id: "ex1",
        question: `¿Cómo se dice <trans en="'Hand'" ar="'يد'" uk="'Рука'" fr="'Main'"/> en Español?`,
        options: ["La pierna", "La mano", "El pie"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Usas estos para ver:",
        options: ["Los ojos", "El brazo", "La cabeza"],
        correctAnswer: 0
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
      { word: "Rojo", translations: { en: "Red", ar: "أحمر", uk: "Червоний", fr: "Rouge" }, imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&auto=format&fit=crop&q=60", emoji: "🍎", color: "#E53E3E" },
      { word: "Azul", translations: { en: "Blue", ar: "أزرق", uk: "Синій", fr: "Bleu" }, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop&q=60", emoji: "💧", color: "#3182CE" },
      { word: "Verde", translations: { en: "Green", ar: "أخضر", uk: "Зелений", fr: "Vert" }, imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&auto=format&fit=crop&q=60", emoji: "🐸", color: "#38A169" },
      { word: "Amarillo", translations: { en: "Yellow", ar: "أصفر", uk: "Жовтий", fr: "Jaune" }, imageUrl: "https://images.unsplash.com/photo-1508808787069-421e7986016e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "☀️", color: "#ECC94B" },
      { word: "Naranja", translations: { en: "Orange", ar: "برتقالي", uk: "Помаранчевий", fr: "Orange" }, imageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=200&auto=format&fit=crop&q=60", emoji: "🍊", color: "#DD6B20" },
      { word: "Negro", translations: { en: "Black", ar: "أسود", uk: "Чорний", fr: "Noir" }, imageUrl: "https://plus.unsplash.com/premium_photo-1686727103139-2824d4fa46a3?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🎩", color: "#1A202C" }
    ],
    content: `
## ¿De qué color es?
    `,
    exercises: [
      {
        id: "ex1",
        question: "El cielo es...",
        options: ["Rojo", "Azul", "Amarillo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Una manzana normalmente es...",
        options: ["Verde o Roja", "Azul o Negra", "Naranja"],
        correctAnswer: 0
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
      { word: "El niño", translations: { en: "The boy", ar: "الولد", uk: "Хлопчик", fr: "Le garçon" }, imageUrl: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=200&auto=format&fit=crop&q=60", emoji: "👦", color: "#EBF8FF" },
      { word: "La niña", translations: { en: "The girl", ar: "البنت", uk: "Дівчинка", fr: "La fille" }, imageUrl: "https://images.unsplash.com/vector-1749532960847-0321e8e5c2c7?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👧", color: "#EBF8FF" },
      { word: "Los niños", translations: { en: "The boys / The children", ar: "الأولاد", uk: "Хлопчики", fr: "Les garçons" }, imageUrl: "https://plus.unsplash.com/premium_photo-1686920245950-58617c8a602e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👦👦", color: "#EBF8FF" },
      { word: "Las niñas", translations: { en: "The girls", ar: "البنات", uk: "Дівчатка", fr: "Les filles" }, imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200&auto=format&fit=crop&q=60", emoji: "👧👧", color: "#EBF8FF" }
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
        question: "___ mesa <trans en='(table)' ar='(طاولة)' uk='(стіл)' fr='(table)'/>",
        options: ["El", "La", "Los", "Las"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cuál es el plural de 'perro' <trans en='(dog)' ar='(كلب)' uk='(собака)' fr='(chien)'/>?",
        options: ["perros", "perroes", "perro"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "___ amigos <trans en='(friends)' ar='(أصدقاء)' uk='(друзі)' fr='(amis)'/>",
        options: ["La", "El", "Las", "Los"],
        correctAnswer: 3
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
      { word: "Yo", translations: { en: "I", ar: "أنا", uk: "Я", fr: "Je" }, imageUrl: "https://plus.unsplash.com/premium_vector-1764242114433-9eb1e57b37e6?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🙋", color: "#E2F3E7" },
      { word: "Tú", translations: { en: "You (singular, informal)", ar: "أنت", uk: "Ти", fr: "Tu" }, imageUrl: "https://images.unsplash.com/photo-1653685605513-fe65f8ae8dbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👉", color: "#E2F3E7" },
      { word: "Él / Ella", translations: { en: "He / She", ar: "هو / هي", uk: "Він / Вона", fr: "Il / Elle" }, imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60", emoji: "🧍", color: "#E2F3E7" },
      { word: "Nosotros", translations: { en: "We", ar: "نحن", uk: "Ми", fr: "Nous" }, imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=200&auto=format&fit=crop&q=60", emoji: "🫂", color: "#E2F3E7" },
      { word: "Vosotros", translations: { en: "You (plural, informal)", ar: "أنتم", uk: "Ви", fr: "Vous" }, imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&auto=format&fit=crop&q=60", emoji: "👋", color: "#E2F3E7" },
      { word: "Ellos / Ellas", translations: { en: "They", ar: "هم / هن", uk: "Вони", fr: "Ils / Elles" }, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQJty-Uboa0BltFJvFUoTtbugbjN8JwTR_w&s", emoji: "👥", color: "#E2F3E7" }
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
        question: "Cuando hablo de mí mismo <trans en='(When I talk about myself)' ar='(عندما أتحدث عن نفسي)' uk='(Коли я говорю про себе)' fr='(Quand je parle de moi-même)'/>, uso:",
        options: ["Tú", "Yo", "Él"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Ana y yo <trans en='(Ana and I)' ar='(آنا وأنا)' uk='(Ана і я)' fr='(Ana et moi)'/> somos...",
        options: ["Ellos", "Vosotros", "Nosotros"],
        correctAnswer: 2
      },
      {
        id: "ex3",
        question: "Cuando hablo con mi amigo <trans en='(When I talk to my friend)' ar='(عندما أتحدث مع صديقي)' uk='(Коли я говорю зі своїм другом)' fr='(Quand je parle à mon ami)'/>, le digo:",
        options: ["Nosotros", "Tú", "Él"],
        correctAnswer: 1
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
      { word: "Yo soy", translations: { en: "I am (teacher)", ar: "أنا معلم", uk: "Я вчитель", fr: "Je suis (professeur)" }, imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&auto=format&fit=crop&q=60", emoji: "🧑‍🏫", color: "#E2E8F0" },
      { word: "Yo estoy", translations: { en: "I am (at home)", ar: "أنا في المنزل", uk: "Я вдома", fr: "Je suis (à la maison)" }, imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&auto=format&fit=crop&q=60", emoji: "🏠", color: "#E2E8F0" },
      { word: "Yo tengo", translations: { en: "I have (an apple)", ar: "لدي تفاحة", uk: "Я маю", fr: "J'ai (une pomme)" }, imageUrl: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=200&auto=format&fit=crop&q=60", emoji: "🍎", color: "#E2E8F0" }
    ],
    content: `
## Verbos muy importantes

Aprender la conjugación (la forma) es esencial para comunicarte.

### Verbo SER <trans en="(Identity / To be)" ar="(الهوية / يكون)" uk="(Ідентичність / Бути)" fr="(Identité / Être)"/>
*   **Yo soy** Ana. <trans en="(I am Ana)" ar="(أنا آنا)" uk="(Я Ана)" fr="(Je suis Ana)"/>
*   **Él es** de África. <trans en="(He is from Africa)" ar="(هو من أفريقيا)" uk="(Він з Африки)" fr="(Il est d'Afrique)"/>

### Verbo ESTAR <trans en="(Location or Emotion / To be)" ar="(المكان أو العاطفة / يكون)" uk="(Місце або Емоція / Бути)" fr="(Lieu ou Émotion / Être)"/>
*   **Yo estoy** feliz. <trans en="(I am happy)" ar="(أنا سعيد)" uk="(Я щасливий)" fr="(Je suis heureux)"/>
*   **Tú estás** en España. <trans en="(You are in Spain)" ar="(أنت في إسبانيا)" uk="(Ти в Іспанії)" fr="(Tu es en Espagne)"/>

### Verbo TENER <trans en="(To have)" ar="(يملك)" uk="(Мати)" fr="(Avoir)"/>
*   **Yo tengo** 30 años. <trans en="(I am 30 years old)" ar="(عمري 30 سنة)" uk="(Мені 30 років)" fr="(J'ai 30 ans)"/>
*   **Tú tienes** hambre. <trans en="(You are hungry)" ar="(أنت جائع)" uk="(Ти голодний)" fr="(Tu as faim)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Completa: 'Yo _______ feliz hoy.'",
        options: ["soy", "tengo", "estoy"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Completa: 'Ella _______ de Senegal.'",
        options: ["es", "tiene", "está"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Completa: 'Nosotros _______ 20 años.'",
        options: ["somos", "estamos", "tenemos"],
        correctAnswer: 2
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
      { word: "La camiseta", translations: { en: "T-Shirt", ar: "قميص", uk: "Футболка", fr: "T-shirt" }, imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👕", color: "#EDF2F7" },
      { word: "El pantalón", translations: { en: "Pants", ar: "سروال", uk: "Штани", fr: "Pantalon" }, imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&auto=format&fit=crop&q=60", emoji: "👖", color: "#EDF2F7" },
      { word: "Los zapatos", translations: { en: "Shoes", ar: "حذاء", uk: "Взуття", fr: "Chaussures" }, imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&auto=format&fit=crop&q=60", emoji: "👟", color: "#EDF2F7" },
      { word: "La chaqueta", translations: { en: "Jacket", ar: "سترة", uk: "Куртка", fr: "Veste" }, imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&auto=format&fit=crop&q=60", emoji: "🧥", color: "#EDF2F7" }
    ],
    content: `
## Las prendas de vestir
    `,
    exercises: [
      {
        id: "ex1",
        question: `Si hace frío <trans en="(cold)" ar="(بارد)" uk="(холодно)" fr="(froid)"/>, te pones:`,
        options: ["Una camiseta corta", "Una chaqueta", "Un pantalón corto"],
        correctAnswer: 1
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
      { word: "El niño", translations: { en: "The boy", ar: "الولد", uk: "Хлопчик", fr: "Le garçon" }, imageUrl: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=200&auto=format&fit=crop&q=60", emoji: "👦", color: "#E2F3E7" },
      { word: "El cielo", translations: { en: "The sky", ar: "السماء", uk: "Небо", fr: "Le ciel" }, imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&auto=format&fit=crop&q=60", emoji: "🌌", color: "#EBF8FF" },
      { word: "La niña", translations: { en: "The girl", ar: "البنت", uk: "Дівчинка", fr: "La fille" }, imageUrl: "https://images.unsplash.com/vector-1749532960847-0321e8e5c2c7?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👧", color: "#FFF5F5" },
      { word: "La manzana", translations: { en: "The apple", ar: "التفاحة", uk: "Яблуко", fr: "La pomme" }, imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&auto=format&fit=crop&q=60", emoji: "🍎", color: "#FCE8E8" },
      { word: "La información", translations: { en: "The information", ar: "المعلومات", uk: "Інформація", fr: "L'information" }, imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=60", emoji: "ℹ️", color: "#E3EEF9" },
      { word: "La concentración", translations: { en: "The concentration", ar: "التركيز", uk: "Концентрація", fr: "La concentration" }, imageUrl: "https://plus.unsplash.com/premium_vector-1744953414546-12f23070c3d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🧠", color: "#F3E8FF" }
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
        question: "___ teléfono <trans en='(phone - ends in o)' ar='(هاتف)' uk='(телефон)' fr='(téléphone)'/>",
        options: ["El", "La"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "___ canción <trans en='(song - ends in ción)' ar='(أغنية)' uk='(пісня)' fr='(chanson)'/>",
        options: ["El", "La"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "___ casa <trans en='(house - ends in a)' ar='(منزل)' uk='(будинок)' fr='(maison)'/>",
        options: ["El", "La"],
        correctAnswer: 1
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
      { word: "Mi", translations: { en: "My", ar: "لي", uk: "Мій", fr: "Mon/Ma" }, imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=60", emoji: "🙋", color: "#FCE8E8" },
      { word: "Tu", translations: { en: "Your", ar: "لك", uk: "Твій", fr: "Ton/Ta" }, imageUrl: "https://images.unsplash.com/photo-1653685605513-fe65f8ae8dbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👉", color: "#FCE8E8" },
      { word: "Su", translations: { en: "His/Her/Their", ar: "له/لها/لهم", uk: "Його/Її/Їх", fr: "Son/Sa/Leur" }, imageUrl: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🧍", color: "#FCE8E8" },
      { word: "Nuestro / Nuestra", translations: { en: "Our", ar: "لنا", uk: "Наш/Наша", fr: "Notre" }, imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=200&auto=format&fit=crop&q=60", emoji: "🫂", color: "#FCE8E8" },
      { word: "Vuestro / Vuestra", translations: { en: "Your (plural)", ar: "لكم", uk: "Ваш/Ваша", fr: "Votre" }, imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&auto=format&fit=crop&q=60", emoji: "👋", color: "#FCE8E8" }
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
        question: "______ nombre es Ali. <trans en='(His name)' ar='(اسمه)' uk='(Його ім\`я)' fr='(Son nom)'/>",
        options: ["Mi", "Tu", "Su"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "______ familia <trans en='(Our family)' ar='(عائلتنا)' uk='(Наша сім\`я)' fr='(Notre famille)'/>",
        options: ["Nuestro", "Nuestra", "Mi"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "Yo tengo una bicicleta. Es ______ bicicleta.",
        options: ["mi", "tu", "su"],
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
      { word: "Sí", translations: { en: "Yes", ar: "نعم", uk: "Так", fr: "Oui" }, imageUrl: "https://inhispania.com/storage/2021/05/1.jpg", emoji: "✅", color: "#E2F3E7" },
      { word: "No", translations: { en: "No", ar: "لا", uk: "Ні", fr: "Non" }, imageUrl: "https://static.vecteezy.com/system/resources/previews/026/322/605/non_2x/no-sign-prohibition-and-restrictions-vector.jpg", emoji: "❌", color: "#FCE8E8" },
      { word: "Me gusta", translations: { en: "I like", ar: "يعجبني", uk: "Мені подобається", fr: "J'aime" }, imageUrl: "https://images.unsplash.com/photo-1693168058020-fd7445ff87df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👍", color: "#E3EEF9" },
      { word: "No me gusta", translations: { en: "I don't like", ar: "لا يعجبني", uk: "Мені не подобається", fr: "Je n'aime pas" }, imageUrl: "https://images.unsplash.com/photo-1693168058063-f8e3474ce214?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👎", color: "#FCE8E8" }
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
        question: "___, me llamo Juan.",
        options: ["No", "Sí"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "A mí ___ me gusta el pescado. Prefiero la carne.",
        options: ["no", "sí", "también"],
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
      { word: "Hola", translations: { en: "Hello", ar: "مرحباً", uk: "Привіт", fr: "Bonjour" }, imageUrl: "https://images.unsplash.com/photo-1616428362406-4ffd9fcbf023?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👋", color: "#FFF5F5" },
      { word: "¿Cómo estás?", translations: { en: "How are you?", ar: "كيف حالك؟", uk: "Як справи?", fr: "Comment vas-tu ?" }, imageUrl: "https://plus.unsplash.com/premium_photo-1682310544420-a8d2c8881bba?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🤔", color: "#EBF8FF" },
      { word: "Estoy bien", translations: { en: "I'm fine", ar: "أنا بخير", uk: "Я в порядку", fr: "Je vais bien" }, imageUrl: "https://plus.unsplash.com/premium_photo-1671028545792-f3a4c084f807?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "😊", color: "#E2F3E7" },
      { word: "¿Cómo te llamas?", translations: { en: "What's your name?", ar: "ما اسمك؟", uk: "Як тебе звати?", fr: "Comment t'appelles-tu ?" }, imageUrl: "https://images.unsplash.com/photo-1590086782974-e6e7b85e738e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🏷️", color: "#EBF8FF" },
      { word: "¿De dónde eres?", translations: { en: "Where are you from?", ar: "من أين أنت؟", uk: "Звідки ти?", fr: "D'où viens-tu ?" }, imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=200&auto=format&fit=crop&q=60", emoji: "🌍", color: "#FEFCBF" }
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
        question: "Responde a la pregunta: '¿Cómo te llamas?'",
        options: ["Tengo 20 años", "Me llamo Sara", "Soy de Málaga"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Responde a la pregunta: '¿De dónde eres?'",
        options: ["Soy de Senegal", "Estoy bien", "Llevo tres semanas"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Responde a la pregunta: '¿Cuántos años tienes?'",
        options: ["Tengo mucho frío", "Tengo 25 años", "Me llamo Luis"],
        correctAnswer: 1
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
      { word: "Uno (1)", translations: { en: "One", ar: "واحد", uk: "Один", fr: "Un" }, imageUrl: "https://images.unsplash.com/photo-1560363199-a1264d4ea5fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "1️⃣", color: "#EBF8FF" },
      { word: "Dos (2)", translations: { en: "Two", ar: "إثنان", uk: "Два", fr: "Deux" }, imageUrl: "https://images.unsplash.com/photo-1568548527144-383edf5c2728?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "2️⃣", color: "#EBF8FF" },
      { word: "Tres (3)", translations: { en: "Three", ar: "ثلاثة", uk: "Три", fr: "Trois" }, imageUrl: "https://images.unsplash.com/photo-1584134046510-d193d66e7ae4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "3️⃣", color: "#EBF8FF" },
      { word: "Cuatro (4)", translations: { en: "Four", ar: "أربعة", uk: "Чотири", fr: "Quatre" }, imageUrl: "https://images.unsplash.com/photo-1725378048982-61eab077b0c0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "4️⃣", color: "#EBF8FF" },
      { word: "Cinco (5)", translations: { en: "Five", ar: "خمسة", uk: "П'ять", fr: "Cinq" }, imageUrl: "https://plus.unsplash.com/premium_photo-1670044020191-934d7264fc85?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "5️⃣", color: "#EBF8FF" },
      { word: "Seis (6)", translations: { en: "Six", ar: "ستة", uk: "Шість", fr: "Six" }, imageUrl: "https://images.unsplash.com/photo-1601063186017-1b071b2fb831?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "6️⃣", color: "#EBF8FF" },
      { word: "Siete (7)", translations: { en: "Seven", ar: "سبعة", uk: "Сім", fr: "Sept" }, imageUrl: "https://images.unsplash.com/photo-1584415942461-0b87dda9cc2b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "7️⃣", color: "#EBF8FF" },
      { word: "Ocho (8)", translations: { en: "Eight", ar: "ثمانية", uk: "Вісім", fr: "Huit" }, imageUrl: "https://images.unsplash.com/photo-1725378048990-1fb4795d9a46?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "8️⃣", color: "#EBF8FF" },
      { word: "Nueve (9)", translations: { en: "Nine", ar: "تسعة", uk: "Дев'ять", fr: "Neuf" }, imageUrl: "https://images.unsplash.com/photo-1660684470385-2a062d528b08?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "9️⃣", color: "#EBF8FF" },
      { word: "Diez (10)", translations: { en: "Ten", ar: "عشرة", uk: "Десять", fr: "Dix" }, imageUrl: "https://images.unsplash.com/photo-1553721433-e42741de3a43?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🔟", color: "#EBF8FF" }
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
        question: "¿Qué número es el 'Cinco'?",
        options: ["6", "5", "10"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "3 en español es...",
        options: ["Tres", "Dos", "Uno"],
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
      { word: "España / español", translations: { en: "Spain / Spanish", ar: "إسبانيا / إسباني", uk: "Іспанія / іспанець", fr: "Espagne / espagnol" }, imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=200&auto=format&fit=crop&q=60", emoji: "🇪🇸", color: "#FFF5F5" },
      { word: "Inglaterra / inglés", translations: { en: "England / English", ar: "إنجلترا / إنجليزي", uk: "Англія / англієць", fr: "Angleterre / anglais" }, imageUrl: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🇬🇧", color: "#EBF8FF" },
      { word: "Marruecos / marroquí", translations: { en: "Morocco / Moroccan", ar: "المغرب / مغربي", uk: "Марокко / марокканець", fr: "Maroc / marocain" }, imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=200&auto=format&fit=crop&q=60", emoji: "🇲🇦", color: "#FCE8E8" },
      { word: "Francia / francés", translations: { en: "France / French", ar: "فرنسا / فرنسي", uk: "Франція / француз", fr: "France / français" }, imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200&auto=format&fit=crop&q=60", emoji: "🇫🇷", color: "#E3EEF9" },
      { word: "Senegal / senegalés", translations: { en: "Senegal / Senegalese", ar: "السنغال / سنغالي", uk: "Сенегал / сенегалець", fr: "Sénégal / sénégalais" }, imageUrl: "https://images.unsplash.com/photo-1664887248353-48fad226dbe6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🇸🇳", color: "#E2F3E7" }
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
        question: "Una persona de Francia es...",
        options: ["francés", "franco", "francia"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Fátima es de Marruecos. Ella es...",
        options: ["marrueca", "marroquí", "marruecos"],
        correctAnswer: 1
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
      { word: "El perro", translations: { en: "Dog", ar: "كلب", uk: "Собака", fr: "Chien" }, imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&auto=format&fit=crop&q=60", emoji: "🐶", color: "#FEFCBF" },
      { word: "El gato", translations: { en: "Cat", ar: "قطة", uk: "Кіт", fr: "Chat" }, imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&auto=format&fit=crop&q=60", emoji: "🐱", color: "#FEFCBF" },
      { word: "El pájaro", translations: { en: "Bird", ar: "طائر", uk: "Птах", fr: "Oiseau" }, imageUrl: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=200&auto=format&fit=crop&q=60", emoji: "🐦", color: "#FEFCBF" },
      { word: "El árbol", translations: { en: "Tree", ar: "شجرة", uk: "Дерево", fr: "Arbre" }, imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&auto=format&fit=crop&q=60", emoji: "🌳", color: "#F0FFF4" },
      { word: "La montaña", translations: { en: "Mountain", ar: "جبل", uk: "Гора", fr: "Montagne" }, imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&auto=format&fit=crop&q=60", emoji: "⛰️", color: "#F0FFF4" },
      { word: "El mar", translations: { en: "Sea", ar: "بحر", uk: "Море", fr: "Mer" }, imageUrl: "https://plus.unsplash.com/premium_photo-1675620963970-41055a7d6cfc?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🌊", color: "#F0FFF4" }
    ],
    content: `
## Mascotas y animales salvajes

## La Naturaleza
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál es una mascota común en casa?",
        options: ["La montaña", "El perro", "El árbol"],
        correctAnswer: 1
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
        question: "¿De dónde es Ali?",
        options: ["Es de Málaga", "Es de Marruecos", "Es de Francia"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿De qué quiere trabajar Ali?",
        options: ["De profesor", "De cocinero", "De conductor"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "¿Dónde está Ali ahora?",
        options: ["En Marruecos", "En Málaga", "En Madrid"],
        correctAnswer: 1
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
      { word: "Marruecos", translations: { en: "Morocco", ar: "المغرب", uk: "Марокко", fr: "Maroc" }, imageUrl: "https://plus.unsplash.com/premium_photo-1673415819362-c2ca640bfafe?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🇲🇦", color: "#FEFCBF" },
      { word: "España", translations: { en: "Spain", ar: "إسبانيا", uk: "Іспанія", fr: "Espagne" }, imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=200&auto=format&fit=crop&q=60", emoji: "🇪🇸", color: "#FFF5F5" },
      { word: "Senegal", translations: { en: "Senegal", ar: "السنغال", uk: "Сенегал", fr: "Sénégal" }, imageUrl: "https://images.unsplash.com/photo-1664887248353-48fad226dbe6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🇸🇳", color: "#F0FFF4" }
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
        question: "España está en:",
        options: ["Asia", "África", "Europa"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "¿Cómo se llama el continente con muchos desiertos al sur de Europa?",
        options: ["África", "América", "Oceanía"],
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
      { word: "El lavabo / baño", translations: { en: "Bathroom / Toilet", ar: "الحمام", uk: "Туалет / Ванна", fr: "Toilettes / Salle de bain" }, imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&auto=format&fit=crop&q=60", emoji: "🚽", color: "#EBF8FF" },
      { word: "El autobús", translations: { en: "Bus", ar: "حافلة", uk: "Автобус", fr: "Bus" }, imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&auto=format&fit=crop&q=60", emoji: "🚌", color: "#FFF5F5" },
      { word: "El metro", translations: { en: "Subway / Metro", ar: "مترو الأنفاق", uk: "Метро", fr: "Métro" }, imageUrl: "https://static.visita.malaga.eu/visita/subidas/paginas/5/3/pag_1635_1550x664.jpg", emoji: "🚇", color: "#E2F3E7" },
      { word: "La tienda", translations: { en: "Store / Shop", ar: "متجر", uk: "Магазин", fr: "Magasin" }, imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=200&auto=format&fit=crop&q=60", emoji: "🏪", color: "#FEFCBF" },
      { word: "La farmacia", translations: { en: "Pharmacy", ar: "صيدلية", uk: "Аптека", fr: "Pharmacie" }, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeXA6GEhKB1ouCM6chE8EmO-aRDxvSoxFPA&s", emoji: "💊", color: "#FCE8E8" },
      { word: "El hospital", translations: { en: "Hospital", ar: "مستشفى", uk: "Лікарня", fr: "Hôpital" }, imageUrl: "https://www.segurilatam.com/wp-content/uploads/sites/5/2020/04/hospital-dibujo-nueva-web-900x600.jpg", emoji: "🏥", color: "#E3EEF9" }
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
        question: "Necesitas lavarte las manos. Preguntas: ¿Dónde está...?",
        options: ["el metro", "el lavabo", "el autobús"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Quieres comprar algo de comida. Preguntas: ¿Dónde está...?",
        options: ["la tienda", "el hospital", "el mar"],
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
      { word: "Quiero", translations: { en: "I want", ar: "أريد", uk: "Я хочу", fr: "Je veux" }, imageUrl: "https://img.freepik.com/fotos-premium/hombre-mirando-escaparate-tienda-ropa-tiempo-compras_672594-1108.jpg", emoji: "🤲", color: "#F3E8FF" },
      { word: "Necesito", translations: { en: "I need", ar: "أحتاج", uk: "Мені потрібно", fr: "J'ai besoin" }, imageUrl: "https://plus.unsplash.com/premium_photo-1664890289273-00712b00607c?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "❗", color: "#FCE8E8" },
      { word: "Comprar", translations: { en: "To buy", ar: "أشتري", uk: "Купити", fr: "Acheter" }, imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&auto=format&fit=crop&q=60", emoji: "🛍️", color: "#E3EEF9" },
      { word: "Ir", translations: { en: "To go", ar: "أذهب", uk: "Іти", fr: "Aller" }, imageUrl: "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/0008_ir.jpg?itok=kpSvMAS4", emoji: "🚶", color: "#E2F3E7" },
      { word: "Ayuda", translations: { en: "Help", ar: "مساعدة", uk: "Допомога", fr: "Aide" }, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiz0XNHiFCNS1MNgH7mRJgDe9ufSIp3MOUQ&s", emoji: "🆘", color: "#FFF4E5" }
    ],
    content: `
## Expresar deseos y necesidades

Para pedir cosas o decir adónde vas, usamos **Quiero** (deseo) o **Necesito** (obligación/necesidad).

*   **Quiero comprar** agua. <trans en="(I want to buy water)" ar="(أريد شراء الماء)" uk="(Я хочу купити воду)" fr="(Je veux acheter de l'eau)"/>
*   **Quiero ir a** la estación. <trans en="(I want to go to the station)" ar="(أريد الذهاب إلى المحطة)" uk="(Я хочу піти на станцію)" fr="(Je veux aller à la station)"/>
*   **Necesito** ayuda, por favor. <trans en="(I need help, please)" ar="(أحتاج إلى مساعدة، من فضلك)" uk="(Мені потрібна допомога, будь ласка)" fr="(J'ai besoin d'aide, s'il vous plaît)"/>
*   **Necesito** trabajar. <trans en="(I need to work)" ar="(أحتاج إلى العمل)" uk="(Мені треба працювати)" fr="(J'ai besoin de travailler)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "No tienes agua y tienes mucha sed. Dices: '______ comprar agua'.",
        options: ["Dónde", "Necesito", "Hola"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cómo pides que alguien te asista?",
        options: ["Necesito ayuda", "Quiero ir", "El lavabo"],
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
    imageUrl: "https://images.unsplash.com/photo-1511688868859-7650ade30331?w=600&auto=format&fit=crop&q=80",
    emoji: "🌡️",
    color: "#FFF4E5",
    vocabulary: [
      { word: "Tengo hambre", translations: { en: "I'm hungry", ar: "أشعر بالجوع", uk: "Я голодний", fr: "J'ai faim" }, imageUrl: "https://plus.unsplash.com/premium_photo-1677654317273-0b3a97693677?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🤤", color: "#FFF4E5" },
      { word: "Tengo sed", translations: { en: "I'm thirsty", ar: "أشعر بالعطش", uk: "Я хочу пити", fr: "J'ai soif" }, imageUrl: "https://plus.unsplash.com/premium_photo-1688938502983-a14020dc14c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🥛", color: "#E3EEF9" },
      { word: "Tengo frío", translations: { en: "I'm cold", ar: "أشعر بالبرد", uk: "Мені холодно", fr: "J'ai froid" }, imageUrl: "https://plus.unsplash.com/premium_photo-1671004290998-333a52ebde76?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🥶", color: "#EBF8FF" },
      { word: "Tengo calor", translations: { en: "I'm hot", ar: "أشعر بالحر", uk: "Мені жарко", fr: "J'ai chaud" }, imageUrl: "https://images.unsplash.com/photo-1740560516658-5a94b0b715ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fsb3J8ZW58MHx8MHx8fDA%3D", emoji: "🥵", color: "#FCE8E8" },
      { word: "Tengo miedo", translations: { en: "I'm afraid", ar: "أشعر بالخوف", uk: "Мені страшно", fr: "J'ai peur" }, imageUrl: "https://images.unsplash.com/photo-1512548438457-4c9584d3766b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "😨", color: "#F3E8FF" }
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
        question: "Si quieres comer porque tu estómago está vacío, dices:",
        options: ["Tengo frío", "Tengo hambre", "Tengo dinero"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Para decir 'I don't have money', en español es:",
        options: ["No tengo dinero", "Necesito dinero", "Dónde está el dinero"],
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
    imageUrl: "https://images.unsplash.com/photo-1584515901387-a7a1a63376B9?w=600&auto=format&fit=crop&q=80",
    emoji: "🤕",
    color: "#FCE8E8",
    vocabulary: [
      { word: "Me duele", translations: { en: "It hurts", ar: "يؤلمني", uk: "Мені боляче", fr: "J'ai mal" }, imageUrl: "https://plus.unsplash.com/premium_photo-1661779204668-1453dc7435ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🤕", color: "#FCE8E8" },
      { word: "Me molesta", translations: { en: "It bothers me", ar: "يزعجني", uk: "Мене турбує", fr: "Ça me dérange" }, imageUrl: "https://plus.unsplash.com/premium_photo-1681842372477-2118187afa07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "😠", color: "#FFF4E5" },
      { word: "Me aburre", translations: { en: "It bores me", ar: "يصيبني بالملل", uk: "Мені нудно", fr: "Ça m'ennuie" }, imageUrl: "https://images.unsplash.com/photo-1523478016374-2a27cc521718?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🥱", color: "#E3EEF9" },
      { word: "Me preocupa", translations: { en: "It worries me", ar: "يقلقني", uk: "Мене хвилює", fr: "Ça m'inquiète" }, imageUrl: "https://images.unsplash.com/photo-1647964366344-bc680baf64e2?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "😟", color: "#F3E8FF" }
    ],
    content: `
## Expresando sentimientos y dolor

Algunos verbos en español necesitan un "pronombre" delante (como **me**, **te**, **le**) para saber a quién le afecta.

*   **Me duele** la cabeza. <trans en="(My head hurts)" ar="(رأسي يؤلمني)" uk="(У мене болить голова)" fr="(J'ai mal à la tête)"/>
*   **Me duele** el estómago.
*   **Me gusta** España. <trans en="(I like Spain)" ar="(تعجبني إسبانيا)" uk="(Мені подобається Іспанія)" fr="(J'aime l'Espagne)"/>
*   **Me molesta** el ruido. <trans en="(The noise bothers me)" ar="(الضوضاء تزعجني)" uk="(Мене дратує шум)" fr="(Le bruit me dérange)"/>
*   **Me preocupa** mi familia. <trans en="(I am worried about my family)" ar="(أنا قلق على عائلتي)" uk="(Я хвилююся за свою сім'ю)" fr="(Je m'inquiète pour ma famille)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si tu cabeza no está bien y sientes dolor, dices:",
        options: ["Me gusta la cabeza", "Tengo cabeza", "Me duele la cabeza"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Si algo es muy ruidoso y no te deja dormir:",
        options: ["Me molesta el ruido", "Me aburre el ruido", "Me gusta el ruido"],
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
        question: "¿Qué día va Ana al supermercado?",
        options: ["El lunes", "El sábado", "El domingo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Qué compra primero Ana?",
        options: ["Frutas (manzanas)", "Leche", "Carne"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "¿Cómo paga Ana?",
        options: ["Con tarjeta", "Con el teléfono", "Con dinero en efectivo"],
        correctAnswer: 2
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
        question: "¿Qué le pasa a Carlos?",
        options: ["Le duele la cabeza y tiene fiebre", "Le duele el estómago", "Tiene hambre y necesita comer"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "¿Cada cuántas horas tiene que tomar las pastillas?",
        options: ["Cada 5 horas", "Cada 8 horas", "Cada 10 horas"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "¿Cuánto dinero paga Carlos?",
        options: ["Diez euros", "Ocho euros", "Cinco euros"],
        correctAnswer: 2
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
## El Pretérito Indefinido

Usamos este tiempo verbal para acciones que empezaron y terminaron en el pasado (ayer, la semana pasada, en 2010).

### Verbos Regulares (-AR)
*   Yo habl**é**
*   Tú habl**aste**
*   Él / Ella habl**ó**
*   Nosotros habl**amos**
*   Ellos habl**aron**

**Ejemplo:** *Ayer yo hablé con mi madre por teléfono.*

### Verbos Regulares (-ER / -IR)
*   Yo com**í** / viv**í**
*   Tú com**iste** / viv**iste**
*   Él / Ella com**ió** / viv**ió**

**Ejemplo:** *El año pasado viví en Madrid.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "Ayer yo _____ (comer) una manzana.",
        options: ["comí", "comía", "como"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "La semana pasada ellos _____ (viajar) a Francia.",
        options: ["viajan", "viajaron", "viajaste"],
        correctAnswer: 1
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
## El Presente de Subjuntivo

El subjuntivo no es un tiempo verbal, es un *modo*. Lo usamos para expresar cosas que no son hechos seguros, sino ideas, deseos o sentimientos.

### Usos comunes:
1.  **Deseos:** Quiero que tú **vengas** a mi fiesta.
2.  **Emociones:** Me alegra que **estés** bien.
3.  **Duda / Probabilidad:** Es posible que mañana **llueva**.
4.  **Recomendaciones:** Te recomiendo que **estudies** más.

### Formación básica (Verbos Regulares)
*   **-AR** (hablar) -> que yo habl**e**, que tú habl**es**...
*   **-ER / -IR** (comer / vivir) -> que yo com**a**, que tú viv**as**...
    `,
    exercises: [
      {
        id: "ex1",
        question: "Espero que tú _____ (aprobar) el examen de español.",
        options: ["apruebas", "apruebes", "aprobar"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "No creo que Juan _____ (venir) hoy.",
        options: ["viene", "venga", "vino"],
        correctAnswer: 1
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
      { word: "Lunes", translations: { en: "Monday", ar: "الاثنين", uk: "Понеділок", fr: "Lundi" }, imageUrl: "https://plus.unsplash.com/premium_vector-1713902747124-570ecae4350a?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "1️⃣", color: "#E3EEF9" },
      { word: "Martes", translations: { en: "Tuesday", ar: "الثلاثاء", uk: "Вівторок", fr: "Mardi" }, imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60", emoji: "2️⃣", color: "#E3EEF9" },
      { word: "Enero", translations: { en: "January", ar: "يناير", uk: "Січень", fr: "Janvier" }, imageUrl: "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "❄️", color: "#E3EEF9" },
      { word: "La hora", translations: { en: "The time / hour", ar: "الوقت", uk: "Час", fr: "L'heure" }, imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60", emoji: "⌚", color: "#E3EEF9" }
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
        question: "¿Qué día va después del lunes?",
        options: ["Miércoles", "Martes", "Sábado"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cómo preguntas la hora?",
        options: ["¿Cómo te llamas?", "¿Dónde estás?", "¿Qué hora es?"],
        correctAnswer: 2
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
      { word: "El médico / La médica", translations: { en: "Doctor", ar: "طبيب", uk: "Лікар", fr: "Médecin" }, imageUrl: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🩺", color: "#FCE8E8" },
      { word: "El profesor / La profesora", translations: { en: "Teacher", ar: "معلم", uk: "Вчитель", fr: "Professeur" }, imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👨‍🏫", color: "#FCE8E8" },
      { word: "El cocinero / La cocinera", translations: { en: "Cook / Chef", ar: "طباخ", uk: "Кухар", fr: "Cuisinier" }, imageUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&auto=format&fit=crop&q=60", emoji: "🍳", color: "#FCE8E8" }
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
        question: "La persona que hace la comida es el...",
        options: ["Médico", "Profesor", "Cocinero"],
        correctAnswer: 2
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
      { word: "La madre", translations: { en: "Mother", ar: "أم", uk: "Мати", fr: "Mère" }, imageUrl: "https://plus.unsplash.com/premium_photo-1675103827197-b88ff0586d06?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👩", color: "#E2F3E7" },
      { word: "El padre", translations: { en: "Father", ar: "أب", uk: "Батько", fr: "Père" }, imageUrl: "https://images.unsplash.com/photo-1569870614214-04b2aef402c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👨", color: "#E2F3E7" },
      { word: "El hermano / La hermana", translations: { en: "Brother / Sister", ar: "أخ / أخت", uk: "Брат / Сестра", fr: "Frère / Sœur" }, imageUrl: "https://plus.unsplash.com/premium_photo-1658527085509-f0afd7fd9e44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "👦", color: "#E2F3E7" },
      { word: "Alto / Alta", translations: { en: "Tall", ar: "طويل", uk: "Високий", fr: "Grand" }, imageUrl: "https://plus.unsplash.com/premium_photo-1682308359145-a9b0139e2404?q=80&w=943&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "📏", color: "#E2F3E7" }
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
        question: "El papá en español se dice también...",
        options: ["El padre", "El hermano", "El abuelo"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Para decir que tu hermana tiene mucha altura dices: Mi hermana es...",
        options: ["alta", "alto", "baja"],
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
    imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&auto=format&fit=crop&q=80",
    emoji: "❓",
    color: "#FFF4E5",
    vocabulary: [
      { word: "¿Qué?", translations: { en: "What?", ar: "ماذا؟", uk: "Що?", fr: "Quoi ?" }, imageUrl: "https://www.practiceportuguese.com/cdn-cgi/image/width=800,height=534,fit=crop,quality=90,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2020/06/questions.jpg", emoji: "❓", color: "#FFF4E5" },
      { word: "¿Quién?", translations: { en: "Who?", ar: "من؟", uk: "Хто?", fr: "Qui ?" }, imageUrl: "https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2022/09/27/16642900216393.jpg", emoji: "👤", color: "#FFF4E5" },
      { word: "¿Dónde?", translations: { en: "Where?", ar: "أين؟", uk: "Де?", fr: "Où ?" }, imageUrl: "https://previews.123rf.com/images/mangsaab/mangsaab1403/mangsaab140300028/27347846-businessman-do-not-know-where-to-go-business-concept.jpg", emoji: "📍", color: "#FFF4E5" },
      { word: "¿Cuándo?", translations: { en: "When?", ar: "متى؟", uk: "Коли?", fr: "Quand ?" }, imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60", emoji: "⏳", color: "#FFF4E5" }
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
        question: "Si quieres saber el lugar, preguntas...",
        options: ["¿Quién?", "¿Qué?", "¿Dónde?"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Para preguntar por una persona usas:",
        options: ["¿Qué?", "¿Quién?", "¿Cuándo?"],
        correctAnswer: 1
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
      { word: "El pan", translations: { en: "Bread", ar: "خبز", uk: "Хліб", fr: "Pain" }, imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&auto=format&fit=crop&q=60", emoji: "🍞", color: "#EBF8FF" },
      { word: "El agua", translations: { en: "Water", ar: "ماء", uk: "Вода", fr: "Eau" }, imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "💧", color: "#EBF8FF" },
      { word: "El dormitorio", translations: { en: "Bedroom", ar: "غرفة نوم", uk: "Спальня", fr: "Chambre" }, imageUrl: "https://plus.unsplash.com/premium_photo-1683120852623-143817d6400b?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🛏️", color: "#EBF8FF" },
      { word: "La cocina", translations: { en: "Kitchen", ar: "مطبخ", uk: "Кухня", fr: "Cuisine" }, imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🍳", color: "#EBF8FF" }
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
        question: "El lugar donde duermes se llama:",
        options: ["El dormitorio", "La cocina", "El pan"],
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
## El Pretérito Perfecto (He comido...)

Usamos este tiempo para hablar de acciones pasadas que se conectan con el presente ("hoy", "esta mañana", "alguna vez"). Se forma con el verbo **HABER** + el **Participio**.

### Verbo Haber
*   Yo **he**
*   Tú **has**
*   Él/Ella **ha**
*   Nosotros **hemos**
*   Ellos **han**

### Participios Regulares
*   **-AR** -> -ado (hablar -> hablado, trabajar -> trabajado)
*   **-ER / -IR** -> -ido (comer -> comido, vivir -> vivido)

**Ejemplos:**
*   **Hoy he comido** pollo.
*   ¿Alguna vez **has estado** en España?
    `,
    exercises: [
      {
        id: "ex1",
        question: "Hoy nosotros _______ (trabajar) mucho.",
        options: ["hemos trabajado", "han trabajado", "ha trabajado"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "¿Tú _____ (estar) en Marruecos alguna vez?",
        options: ["ha estado", "has estado", "he estado"],
        correctAnswer: 1
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
## Ir + a + Infinitivo

Para hablar de planes (este fin de semana, mañana, la próxima semana), en el nivel A2 usamos mucho el "Futuro Próximo".

**Fórmula:** Verbo IR en presente + a + la acción (sin conjugar).

*   Yo **voy a viajar** a Francia.
*   Tú **vas a estudiar** español.
*   Él/Ella **va a trabajar** mañana.
*   Nosotros **vamos a comer** en un restaurante.
*   Ellos **van a dormir** temprano.
    `,
    exercises: [
      {
        id: "ex1",
        question: "El fin de semana, yo _______ español.",
        options: ["voy a estudio", "voy a estudiar", "voy estudiar"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Mañana nosotros _____ ir al cine.",
        options: ["vamos a", "vamos", "va a"],
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
        question: "Un avión es ______ rápido que un coche.",
        options: ["más", "mucho", "menos"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Mi inglés es ______ que mi español. (Es 'más bueno')",
        options: ["más bueno", "mejor", "peor"],
        correctAnswer: 1
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
      { word: "El menú / La carta", translations: { en: "Menu", ar: "قائمة الطعام", uk: "Меню", fr: "Menu" }, imageUrl: "https://images.unsplash.com/photo-1599250300435-b9693f21830d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🧾", color: "#FFF5F5" },
      { word: "La cuenta", translations: { en: "The bill", ar: "الفاتورة", uk: "Рахунок", fr: "L'addition" }, imageUrl: "https://www.shutterstock.com/image-photo/waiter-giving-bill-customer-restaurant-260nw-2595975451.jpg", emoji: "💶", color: "#FFF5F5" },
      { word: "Para beber", translations: { en: "To drink", ar: "للشرب", uk: "Пити", fr: "À boire" }, imageUrl: "https://images.unsplash.com/photo-1624340208764-db877c6b9596?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "🥤", color: "#FFF5F5" },
      { word: "Para comer", translations: { en: "To eat", ar: "للأكل", uk: "Їсти", fr: "À manger" }, imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&auto=format&fit=crop&q=60", emoji: "🍽️", color: "#FFF5F5" }
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
        question: "Cuando terminas de comer y quieres pagar, dices...",
        options: ["La carta, por favor.", "La cuenta, por favor.", "El menú, por favor."],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "El camarero te pregunta \"¿Qué van a _______?\" y respondes que quieres agua.",
        options: ["beber", "comer", "cuenta"],
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
## El Futuro Simple

Para cosas que pasarán seguro o para hacer predicciones. Se añade la terminación al infinitivo (hablar -> hablaré).

*   Yo **viajaré** mañana.
*   Tú **vivirás** en España.
*   Nosotros **estudiaremos** mucho.

## El Condicional Simple

Para situaciones hipotéticas, deseos o dar consejos ("Si pudiera, lo haría").

*   Me **gustaría** tener un perro. (Deseo)
*   Yo en tu lugar **hablaría** con él. (Consejo)
    `,
    exercises: [
      {
        id: "ex1",
        question: "Para hablar de algo que pasará en el año 2050, uso:",
        options: ["Yo hablaría", "Yo hablé", "Yo hablaré"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "\"Me _______ viajar a Marruecos un día.\" (Es un deseo)",
        options: ["gustaré", "gustaría", "gustaba"],
        correctAnswer: 1
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
        question: "¿Cuál de estas frases es para dar una opinión?",
        options: ["Deberías dormir.", "En mi opinión, es una buena idea.", "Me duele la cabeza."],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Un amigo está muy cansado. ¿Qué le dices?",
        options: ["Deberías trabajar más.", "Creo que es bueno.", "Yo que tú, descansaría."],
        correctAnswer: 2
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
        question: "No tengo dinero, _______ no compro el teléfono.",
        options: ["porque", "por eso", "aunque"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Me encanta el pastel, _______ estoy a dieta.",
        options: ["sin embargo", "por eso", "porque"],
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
        question: "\"A lo mejor\" va siempre seguido de...",
        options: ["Subjuntivo", "Indicativo", "Infinitivo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Completa la hipótesis irreal: \"Si yo _______ el presidente, cambiaría la ley.\"",
        options: ["soy", "fuera", "sería"],
        correctAnswer: 1
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
        question: "¿Qué argumentan los críticos de la digitalización en el texto?",
        options: ["Que la tecnología es inútil.", "Que provoca una falsa conexión y aislamiento social.", "Que deberíamos prohibir los teléfonos."],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "La expresión 'epidemia de soledad disfrazada' es un ejemplo de...",
        options: ["Léxico abstracto y metafórico propio de nivel avanzado.", "Gramática incorrecta.", "Vocabulario básico de nivel A1."],
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
        question: "¿Cuál de estas opciones es adecuada para el inicio de un correo electrónico formal al director de una empresa?",
        options: ["¡Qué pasa jefe!", "Estimado Director:", "Hola, amigo:"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Si quieres pedir un favor de forma muy educada (formal), dices:",
        options: ["Hazme este favor.", "¿Podría usted ayudarme, por favor?", "¡Ayuda!"],
        correctAnswer: 1
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
      { word: "El viaje", translations: { en: "The trip / travel", ar: "الرحلة", uk: "Подорож", fr: "Le voyage" }, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop&q=60", emoji: "🧳", color: "#FFF4E5" },
      { word: "El recuerdo", translations: { en: "The memory", ar: "الذكرى", uk: "Спогад", fr: "Le souvenir" }, imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=200&auto=format&fit=crop&q=60", emoji: "💭", color: "#FFF4E5" },
      { word: "Planificar", translations: { en: "To plan", ar: "التخطيط", uk: "Планувати", fr: "Planifier" }, imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60", emoji: "📅", color: "#FFF4E5" }
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
        question: "¿Qué tiempo verbal describe la circunstancia o el clima en el pasado?",
        options: ["Pretérito Indefinido", "Pretérito Imperfecto", "Presente de indicativo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Había visitado Lucía el sur de España antes de este viaje?",
        options: ["Sí, muchas veces", "No, era su primera vez", "El texto no lo menciona"],
        correctAnswer: 1
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
      { word: "Cuando", translations: { en: "When", ar: "عندما", uk: "Коли", fr: "Quand" }, imageUrl: "https://cdn-icons-png.flaticon.com/512/9586/9586100.png", emoji: "⏰", color: "#EBF8FF" },
      { word: "Aunque", translations: { en: "Although", ar: "بالرغم من", uk: "Хоча", fr: "Bien que / Aunque" }, imageUrl: "https://plus.unsplash.com/premium_photo-1664303007433-c396f15514b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVucXVlJTIwbGx1ZXZhfGVufDB8fDB8fHww", emoji: "⚖️", color: "#EBF8FF" },
      { word: "Tan pronto como", translations: { en: "As soon as", ar: "بمجرد أن", uk: "Як тільки", fr: "Dès que" }, imageUrl: "https://plus.unsplash.com/premium_photo-1762118410284-5913d04935c3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", emoji: "⚡", color: "#EBF8FF" }
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
        question: "Completa: 'Te enviaré un mensaje cuando _______ a casa'. (Acción futura)",
        options: ["llegue", "llego", "llegará"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Completa: 'Aunque no _______ dinero mañana, seré feliz'. (Hipótesis futura)",
        options: ["tengo", "tenga", "tuviera"],
        correctAnswer: 1
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
  }];