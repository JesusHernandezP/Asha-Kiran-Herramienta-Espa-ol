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
      },
      {
        id: "ex4",
        question: "¿Con qué letra empieza 'Gato'?",
        options: ["C","G","J"],
        correctAnswer: 1
      },
      {
        id: "ex5",
        question: "¿Qué letra va después de la 'M'?",
        options: ["N","L","O"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "¿Cuál es una vocal?",
        options: ["P","E","S"],
        correctAnswer: 1
      },
      {
        id: "ex7",
        question: "¿Con qué letra termina 'Reloj'?",
        options: ["J","G","X"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "¿Cuál no es una vocal?",
        options: ["A","I","R"],
        correctAnswer: 2
      },
      {
        id: "ex9",
        question: "¿Qué letra va antes de la 'C'?",
        options: ["B","D","A"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "¿Con qué letra empieza 'Zapato'?",
        options: ["S","Z","C"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: "¿Qué letra suena fuerte en 'Perro'?",
        options: ["P","RR","O"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: "¿Qué letra falta en '_asa' (House)?",
        options: ["K","S","C"],
        correctAnswer: 2
      },
      {
        id: "ex13",
        question: "¿Cómo se escribe 'Water' en español?",
        options: ["Agua","Ajua","Awa"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿Con qué letra empieza 'Hola'?",
        options: ["O","H","J"],
        correctAnswer: 1
      },
      {
        id: "ex15",
        question: "¿Qué letra sigue a la 'T'?",
        options: ["S","U","V"],
        correctAnswer: 1
      },
      {
        id: "ex16",
        question: "¿Cuál es la primera letra del abecedario?",
        options: ["A","E","O"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "¿Cuál es la última letra del abecedario?",
        options: ["Y","X","Z"],
        correctAnswer: 2
      },
      {
        id: "ex18",
        question: "¿Con qué letra empieza 'Queso'?",
        options: ["C","K","Q"],
        correctAnswer: 2
      },
      {
        id: "ex19",
        question: "¿Qué letra es la 'H' en 'Hola'?",
        options: ["Fuerte","Muda","Suave"],
        correctAnswer: 1
      },
      {
        id: "ex20",
        question: "¿Cómo se llama la letra 'Ñ'?",
        options: ["Ene","Eñe","Eme"],
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
        options: ["La pierna", "La mano", "El pie"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Usas estos para ver:",
        options: ["Los ojos", "El brazo", "La cabeza"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "¿Qué usamos para ver?",
        options: ["Las orejas","Los ojos","La nariz"],
        correctAnswer: 1
      },
      {
        id: "ex4",
        question: "¿Qué usamos para caminar?",
        options: ["Las piernas","Los brazos","Las manos"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "¿Dónde está el pelo?",
        options: ["En el pie","En la cabeza","En el brazo"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: "¿Qué usamos para escuchar?",
        options: ["Los ojos","La boca","Las orejas"],
        correctAnswer: 2
      },
      {
        id: "ex7",
        question: "¿Cuántos dedos hay en una mano?",
        options: ["Cinco","Seis","Cuatro"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "¿Qué parte conecta la cabeza con el cuerpo?",
        options: ["El cuello","La espalda","El pecho"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "El plural de 'El pie' es...",
        options: ["Los pies","Los pie","Las pies"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "¿Qué está en la cara?",
        options: ["El codo","La nariz","La rodilla"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: "¿Con qué saboreamos la comida?",
        options: ["Con la lengua","Con los dientes","Con el cuello"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Tenemos dos...",
        options: ["Narices","Cabezas","Manos"],
        correctAnswer: 2
      },
      {
        id: "ex13",
        question: "¿Qué doblamos al caminar?",
        options: ["La rodilla","El codo","El hombro"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿Qué usamos para comer?",
        options: ["La boca","La oreja","El ojo"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "¿Dónde ponemos los zapatos?",
        options: ["En las manos","En los pies","En la cabeza"],
        correctAnswer: 1
      },
      {
        id: "ex16",
        question: "El corazón está en...",
        options: ["El pecho","La pierna","La cara"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Después de la mano viene el...",
        options: ["Pie","Brazo","Cuello"],
        correctAnswer: 1
      },
      {
        id: "ex18",
        question: "¿Qué nos duele si pensamos mucho?",
        options: ["La cabeza","El pie","La mano"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "¿Qué usamos para escribir?",
        options: ["El pie","La mano","La oreja"],
        correctAnswer: 1
      },
      {
        id: "ex20",
        question: "¿Qué usamos para ver? (Extra)",
        options: ["Las orejas","Los ojos","La nariz"],
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
        question: "El cielo es...",
        options: ["Rojo", "Azul", "Amarillo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Una manzana normalmente es...",
        options: ["Verde o Roja", "Azul o Negra", "Naranja"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "¿De qué color es la hierba?",
        options: ["Rojo","Verde","Azul"],
        correctAnswer: 1
      },
      {
        id: "ex4",
        question: "¿De qué color es la nieve?",
        options: ["Negro","Amarillo","Blanco"],
        correctAnswer: 2
      },
      {
        id: "ex5",
        question: "¿De qué color es el carbón?",
        options: ["Negro","Blanco","Gris"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "¿De qué color es un plátano?",
        options: ["Rojo","Amarillo","Azul"],
        correctAnswer: 1
      },
      {
        id: "ex7",
        question: "¿De qué color es la leche?",
        options: ["Blanca","Negra","Roja"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "El color del mar es generalmente...",
        options: ["Azul","Verde","Rojo"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Una rosa suele ser de color...",
        options: ["Rojo","Negro","Azul"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "¿Qué color resulta de mezclar blanco y negro?",
        options: ["Marrón","Gris","Rosa"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: "El chocolate es...",
        options: ["Verde","Marrón","Blanco"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: "¿De qué color es el cielo nocturno?",
        options: ["Azul oscuro / Negro","Blanco","Amarillo"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "¿Qué color significa 'Peligro' o 'Parar' en un semáforo?",
        options: ["Verde","Amarillo","Rojo"],
        correctAnswer: 2
      },
      {
        id: "ex14",
        question: "¿Qué color significa 'Avanzar' en un semáforo?",
        options: ["Rojo","Verde","Azul"],
        correctAnswer: 1
      },
      {
        id: "ex15",
        question: "¿De qué color es una naranja?",
        options: ["Naranja","Amarillo","Rojo"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Un cerdo de juguete suele ser...",
        options: ["Negro","Rosa","Verde"],
        correctAnswer: 1
      },
      {
        id: "ex17",
        question: "¿De qué color es la sangre?",
        options: ["Roja","Azul","Verde"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "¿De qué color es el sol?",
        options: ["Verde","Morado","Amarillo"],
        correctAnswer: 2
      },
      {
        id: "ex19",
        question: "El cielo despejado es...",
        options: ["Rojo","Marrón","Azul"],
        correctAnswer: 2
      },
      {
        id: "ex20",
        question: "¿De qué color es la hierba? (Extra)",
        options: ["Rojo","Verde","Azul"],
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
      },
      {
        id: "ex4",
        question: "___ chico",
        options: ["El","La","Los","Las"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "___ chicas",
        options: ["El","La","Los","Las"],
        correctAnswer: 3
      },
      {
        id: "ex6",
        question: "___ gatos",
        options: ["El","La","Los","Las"],
        correctAnswer: 2
      },
      {
        id: "ex7",
        question: "___ libro",
        options: ["El","La","Los","Las"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "___ mochilas",
        options: ["El","La","Los","Las"],
        correctAnswer: 3
      },
      {
        id: "ex9",
        question: "___ profesora",
        options: ["El","La","Los","Las"],
        correctAnswer: 1
      },
      {
        id: "ex10",
        question: "___ perros",
        options: ["El","La","Los","Las"],
        correctAnswer: 2
      },
      {
        id: "ex11",
        question: "___ agua (excepción)",
        options: ["El","La","Los","Las"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "___ manos",
        options: ["El","La","Los","Las"],
        correctAnswer: 3
      },
      {
        id: "ex13",
        question: "___ flor",
        options: ["El","La","Los","Las"],
        correctAnswer: 1
      },
      {
        id: "ex14",
        question: "___ zapatos",
        options: ["El","La","Los","Las"],
        correctAnswer: 2
      },
      {
        id: "ex15",
        question: "___ hombre",
        options: ["El","La","Los","Las"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "___ mujer",
        options: ["El","La","Los","Las"],
        correctAnswer: 1
      },
      {
        id: "ex17",
        question: "___ día (excepción)",
        options: ["El","La","Los","Las"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "___ problemas (excepción)",
        options: ["El","La","Los","Las"],
        correctAnswer: 2
      },
      {
        id: "ex19",
        question: "___ ciudades",
        options: ["El","La","Los","Las"],
        correctAnswer: 3
      },
      {
        id: "ex20",
        question: "___ universidad",
        options: ["El","La","Los","Las"],
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
      },
      {
        id: "ex4",
        question: "___ soy estudiante.",
        options: ["Él","Tú","Yo"],
        correctAnswer: 2
      },
      {
        id: "ex5",
        question: "___ es mi amigo Carlos.",
        options: ["Ella","Él","Nosotros"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: "___ comemos paella.",
        options: ["Ellos","Nosotros","Yo"],
        correctAnswer: 1
      },
      {
        id: "ex7",
        question: "___ tienes un coche rojo.",
        options: ["Tú","Él","Nosotros"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "___ son de Madrid.",
        options: ["Ellos","Él","Nosotros"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "___ (vosotros) sois hermanos.",
        options: ["Vosotros","Nosotros","Ellos"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "___ es mi madre.",
        options: ["Él","Ella","Yo"],
        correctAnswer: 1
      },
      {
        id: "ex11",
        question: "Juan y yo somos estudiantes. ___ estudiamos español.",
        options: ["Ellos","Nosotros","Vosotros"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: "María y tú. ___ cantáis muy bien.",
        options: ["Ellas","Vosotros","Nosotras"],
        correctAnswer: 1
      },
      {
        id: "ex13",
        question: "Luis y Pedro están allí. ___ son amigos.",
        options: ["Ellos","Vosotros","Nosotros"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "___ tengo frío.",
        options: ["Yo","Él","Tú"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "___ eres simpático.",
        options: ["Tú","Nosotros","Yo"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "___ estamos cansados.",
        options: ["Vosotros","Ellos","Nosotros"],
        correctAnswer: 2
      },
      {
        id: "ex17",
        question: "___ habla italiano.",
        options: ["Él / Ella","Yo","Tú"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "___ vivo en Barcelona.",
        options: ["Tú","Yo","Ellos"],
        correctAnswer: 1
      },
      {
        id: "ex19",
        question: "Paco, ___ eres muy alto.",
        options: ["él","tú","yo"],
        correctAnswer: 1
      },
      {
        id: "ex20",
        question: "Mis padres no están, ___ están trabajando.",
        options: ["ellos","nosotros","vosotros"],
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
      },
      {
        id: "ex4",
        question: "Yo ___ español.",
        options: ["soy","estoy","hablo"],
        correctAnswer: 2
      },
      {
        id: "ex5",
        question: "Tú ___ en casa.",
        options: ["eres","estás","tienes"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: "Él ___ 20 años.",
        options: ["es","tiene","está"],
        correctAnswer: 1
      },
      {
        id: "ex7",
        question: "Nosotros ___ estudiantes.",
        options: ["somos","estamos","tenemos"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Ellos ___ hambre.",
        options: ["son","tienen","están"],
        correctAnswer: 1
      },
      {
        id: "ex9",
        question: "Yo ___ muy feliz hoy.",
        options: ["estoy","soy","tengo"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Ella ___ doctora.",
        options: ["está","tiene","es"],
        correctAnswer: 2
      },
      {
        id: "ex11",
        question: "¿Dónde ___ el baño?",
        options: ["es","está","tiene"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: "Tú ___ un perro.",
        options: ["eres","estás","tienes"],
        correctAnswer: 2
      },
      {
        id: "ex13",
        question: "Nosotros ___ sed.",
        options: ["somos","tenemos","estamos"],
        correctAnswer: 1
      },
      {
        id: "ex14",
        question: "La mesa ___ de madera.",
        options: ["es","está","tiene"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "La sopa ___ caliente.",
        options: ["es","está","tiene"],
        correctAnswer: 1
      },
      {
        id: "ex16",
        question: "Yo ___ dos hermanos.",
        options: ["soy","tengo","estoy"],
        correctAnswer: 1
      },
      {
        id: "ex17",
        question: "Vosotros ___ de México.",
        options: ["sois","estáis","tenéis"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Hoy ___ lunes.",
        options: ["es","está","tiene"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "¿Qué hora ___?",
        options: ["está","tiene","es"],
        correctAnswer: 2
      },
      {
        id: "ex20",
        question: "Yo ___ enfermo.",
        options: ["soy","estoy","tengo"],
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
        options: ["Una camiseta corta", "Una chaqueta", "Un pantalón corto"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Me pongo la ___ en la cabeza.",
        options: ["Gorra","Bufanda","Camiseta"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Llevo los ___ en las piernas.",
        options: ["Pantalones","Guantes","Zapatos"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "En invierno uso una ___ para el frío.",
        options: ["Chaqueta","Camiseta","Falda"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Me pongo los ___ en los pies.",
        options: ["Sombreros","Zapatos","Cinturones"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: "Para nadar uso el ___.",
        options: ["Bañador","Abrigo","Vestido"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Para dormir me pongo el ___.",
        options: ["Pijama","Vaquero","Jersey"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Llevo una ___ en el cuello porque hace frío.",
        options: ["Bufanda","Corbata","Gorra"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Uso ___ en las manos en invierno.",
        options: ["Guantes","Calcetines","Zapatos"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Llevo ___ debajo de los zapatos.",
        options: ["Calcetines","Guantes","Bufandas"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Las mujeres a veces llevan una ___ en lugar de pantalones.",
        options: ["Falda","Camisa","Gorra"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Un ___ es muy elegante para una boda.",
        options: ["Traje","Pijama","Bañador"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Llevo una ___ de manga corta en verano.",
        options: ["Camiseta","Bufanda","Chaqueta"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Los pantalones que usamos mucho se llaman...",
        options: ["Vaqueros","Camisas","Zapatos"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Para hacer deporte uso...",
        options: ["Ropa deportiva / Chándal","Traje","Vestido"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Se pone en la cintura para sujetar el pantalón:",
        options: ["Cinturón","Corbata","Bufanda"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Para no mojarme si llueve, uso un...",
        options: ["Impermeable","Bañador","Pijama"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Las ___ son calzado abierto para el verano.",
        options: ["Sandalias","Botas","Zapatillas deportivas"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Me pongo la ___ en la cabeza. (Extra)",
        options: ["Gorra","Bufanda","Camiseta"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Llevo los ___ en las piernas. (Extra)",
        options: ["Pantalones","Guantes","Zapatos"],
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
      },
      {
        id: "ex4",
        question: "___ problema",
        options: ["El","La"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "___ solución",
        options: ["El","La"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: "___ mapa",
        options: ["El","La"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "___ universidad",
        options: ["El","La"],
        correctAnswer: 1
      },
      {
        id: "ex8",
        question: "___ idioma",
        options: ["El","La"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "___ mano",
        options: ["El","La"],
        correctAnswer: 1
      },
      {
        id: "ex10",
        question: "___ día",
        options: ["El","La"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "___ moto(cicleta)",
        options: ["El","La"],
        correctAnswer: 1
      },
      {
        id: "ex12",
        question: "___ foto(grafía)",
        options: ["El","La"],
        correctAnswer: 1
      },
      {
        id: "ex13",
        question: "___ agua (singular)",
        options: ["El","La"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "___ planeta",
        options: ["El","La"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "___ ciudad",
        options: ["El","La"],
        correctAnswer: 1
      },
      {
        id: "ex16",
        question: "___ clima",
        options: ["El","La"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "___ sofá",
        options: ["El","La"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "___ clase",
        options: ["El","La"],
        correctAnswer: 1
      },
      {
        id: "ex19",
        question: "___ flor",
        options: ["El","La"],
        correctAnswer: 1
      },
      {
        id: "ex20",
        question: "___ árbol",
        options: ["El","La"],
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
      },
      {
        id: "ex4",
        question: "___ (yo) libro es nuevo.",
        options: ["Mi","Tu","Su"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "___ (tú) casa es grande.",
        options: ["Mi","Tu","Su"],
        correctAnswer: 1
      },
      {
        id: "ex6",
        question: "___ (él) coche es rojo.",
        options: ["Su","Tu","Mi"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "___ (nosotros) amigos son simpáticos.",
        options: ["Nuestros","Vuestros","Sus"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "___ (ella) perro se llama Max.",
        options: ["Su","Tu","Mi"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "___ (vosotros) madre es profesora.",
        options: ["Vuestra","Nuestra","Su"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "___ (ellos) zapatos están limpios.",
        options: ["Sus","Tus","Mis"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "¿Es esta ___ (tú) mochila?",
        options: ["tu","su","mi"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "___ (yo) hermanos viven en París.",
        options: ["Mis","Tus","Sus"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "No encuentro ___ (yo) llaves.",
        options: ["mis","tus","sus"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "___ (nosotros) ciudad es muy bonita.",
        options: ["Nuestra","Vuestra","Su"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Pedro y ___ (él) hermana son altos.",
        options: ["su","tu","mi"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Señor, ¿es este ___ (usted) abrigo?",
        options: ["su","tu","mi"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "___ (nosotros) abuelos tienen 80 años.",
        options: ["Nuestros","Vuestros","Mis"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "___ (tú) ojos son azules.",
        options: ["Tus","Sus","Mis"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Me gusta ___ (vosotros) casa.",
        options: ["vuestra","nuestra","su"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Ana y ___ (ella) hijos van al parque.",
        options: ["sus","tus","mis"],
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
        question: "___, me llamo Juan.",
        options: ["No", "Sí"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "A mí ___ me gusta el pescado. Prefiero la carne.",
        options: ["no", "sí", "también"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Yo ___ como carne, soy vegetariano.",
        options: ["no","sí","también"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "A mí ___ me gusta el fútbol. ¡Lo odio!",
        options: ["no","sí","nunca"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "¿Te gusta el café? - ___, mucho.",
        options: ["Sí","No","Tampoco"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Ellos ___ hablan ruso, solo español.",
        options: ["no","sí","siempre"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "No me gusta el frío, y a ti ___.",
        options: ["tampoco","también","sí"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Me gusta la pizza. - A mí ___.",
        options: ["también","tampoco","no"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "___, no quiero ir.",
        options: ["No","Sí","También"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Nosotros ___ estamos cansados.",
        options: ["no","sí","y"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Él ___ tiene dinero.",
        options: ["no","sí","con"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "¿Vienes a la fiesta? - ___, no puedo.",
        options: ["No","Sí","Tampoco"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "___, gracias. Ya he comido.",
        options: ["No","Sí","También"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿Tienes hambre? - ___, quiero comer ya.",
        options: ["Sí","No","Tampoco"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "A María ___ le gusta leer.",
        options: ["no","sí","tampoco"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "A mi perro ___ le gusta bañarse.",
        options: ["no","sí","también"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Nosotros ___ trabajamos los domingos. Descansamos.",
        options: ["no","sí","tampoco"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "___ me gusta llegar tarde.",
        options: ["No","Sí","También"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "No veo nada, ___ hay luz.",
        options: ["no","sí","tampoco"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Yo ___ como carne, soy vegetariano. (Extra)",
        options: ["no","sí","también"],
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
      },
      {
        id: "ex4",
        question: "¿Cómo se dice 'Good morning'?",
        options: ["Buenos días","Buenas tardes","Buenas noches"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "¿Cómo se dice 'Good night'?",
        options: ["Buenas noches","Buenos días","Hola"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Para despedirte dices:",
        options: ["Adiós","Hola","Buenos días"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "¿Qué dices a las 16:00 h?",
        options: ["Buenas tardes","Buenos días","Buenas noches"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "- 'Encantado de conocerte' - '________'",
        options: ["Igualmente","Adiós","Bien"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Si alguien estornuda dices:",
        options: ["¡Salud!","¡Adiós!","¡Gracias!"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "¿Cómo pides un favor?",
        options: ["Por favor","De nada","Adiós"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Si te dicen 'Gracias', tú respondes:",
        options: ["De nada","Por favor","Hola"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "- '¿Qué tal?' - '________'",
        options: ["Muy bien","Me llamo Juan","Soy de Perú"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Antes de ir a dormir dices:",
        options: ["Buenas noches","Buenos días","Hasta luego"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Otra forma de decir 'Adiós' es:",
        options: ["Hasta luego","Hola","Por favor"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Para preguntar la edad dices:",
        options: ["¿Cuántos años tienes?","¿Cómo te llamas?","¿De dónde eres?"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "- '¿Dónde vives?' - '________'",
        options: ["Vivo en Madrid","Soy de Madrid","Tengo 20 años"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Para preguntar el nombre de alguien:",
        options: ["¿Cómo te llamas?","¿Qué tal?","¿De dónde eres?"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Si chocas con alguien sin querer dices:",
        options: ["Perdón / Lo siento","De nada","Gracias"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Un saludo muy informal entre amigos:",
        options: ["¡Qué pasa!","¡Buenos días señor!","¡Adiós!"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Si vas a ver a alguien mañana dices:",
        options: ["Hasta mañana","Hasta luego","Adiós para siempre"],
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
        question: "¿Qué número es el 'Cinco'?",
        options: ["6", "5", "10"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "3 en español es...",
        options: ["Tres", "Dos", "Uno"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "10 + 5 = ?",
        options: ["Quince","Catorce","Dieciséis"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "20",
        options: ["Veinte","Doce","Diez"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "El número antes de diez es...",
        options: ["Nueve","Once","Ocho"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "El número '15' se dice:",
        options: ["Quince","Cinco","Cincuenta"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "50",
        options: ["Cincuenta","Cinco","Quince"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "100",
        options: ["Cien","Cero","Cincuenta"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "30",
        options: ["Treinta","Tres","Trece"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "El número después de 'veintinueve' es:",
        options: ["Treinta","Veintiocho","Cuarenta"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "2 + 2 = ?",
        options: ["Cuatro","Cinco","Seis"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "12",
        options: ["Doce","Dos","Veinte"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "¿Cuántos meses tiene un año?",
        options: ["Doce","Diez","Once"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿Cuántos días tiene una semana?",
        options: ["Siete","Cinco","Seis"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "El número '40' se escribe:",
        options: ["Cuarenta","Cuatro","Catorce"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "¿Cómo se dice 'zero' en español?",
        options: ["Cero","Uno","Nada"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "21",
        options: ["Veintiuno","Veinte uno","Veinte y uno"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "11",
        options: ["Once","Diez y uno","Unce"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "¿Cuántas horas tiene un día?",
        options: ["Veinticuatro","Doce","Treinta"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "10 + 5 = ? (Extra)",
        options: ["Quince","Catorce","Dieciséis"],
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
        question: "Una persona de Francia es...",
        options: ["francés", "franco", "francia"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Fátima es de Marruecos. Ella es...",
        options: ["marrueca", "marroquí", "marruecos"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "Él es de Francia. Él es...",
        options: ["Francés","Francia","Francésa"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Ella es de España. Ella es...",
        options: ["Española","Español","España"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Ellos son de Alemania. Son...",
        options: ["Alemanes","Alemán","Alemanias"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Yo soy de Italia. Yo soy...",
        options: ["Italiano/a","Italia","Italio"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Ella es de Estados Unidos. Es...",
        options: ["Estadounidense","Americana","Las dos son correctas"],
        correctAnswer: 2
      },
      {
        id: "ex8",
        question: "Él es de Japón. Él es...",
        options: ["Japonés","Japón","Japonesa"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Nosotros somos de México. Somos...",
        options: ["Mexicanos","México","Mexicano"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Ella es de Inglaterra. Ella es...",
        options: ["Inglesa","Inglés","Inglaterra"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Él es de China. Él es...",
        options: ["Chino","China","Chinesco"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Ella es de Marruecos. Ella es...",
        options: ["Marroquí","Marrueca","Marroquesa"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Ellos son de Brasil. Son...",
        options: ["Brasileños","Brasil","Brasileros"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Él es de Portugal. Él es...",
        options: ["Portugués","Portugal","Portuguesa"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Ella es de Rusia. Ella es...",
        options: ["Rusa","Ruso","Rusias"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Él es de Argentina. Él es...",
        options: ["Argentino","Argentina","Argentinés"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Ella es de Canadá. Ella es...",
        options: ["Canadiense","Canadá","Canadiensa"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Él es de India. Él es...",
        options: ["Indio","Hindu","Indies"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Ella es de Colombia. Ella es...",
        options: ["Colombiana","Colombiano","Colombia"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Él es de Francia. Él es... (Extra)",
        options: ["Francés","Francia","Francésa"],
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
        question: "¿Cuál es una mascota común en casa?",
        options: ["La montaña", "El perro", "El árbol"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Qué animal produce leche?",
        options: ["La vaca","El perro","El pez"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Este animal tiene cuello largo:",
        options: ["Jirafa","Elefante","Caballo"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Es el rey de la selva:",
        options: ["León","Tigre","Mono"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "¿Qué animal ladra?",
        options: ["El perro","El gato","El pájaro"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "¿Qué animal vuela?",
        options: ["El pájaro","La tortuga","El pez"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Vive en el agua y nada:",
        options: ["Pez","Pájaro","Conejo"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "El animal que maúlla es...",
        options: ["El gato","El perro","La vaca"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Es un animal muy lento y lleva su casa:",
        options: ["Tortuga","Conejo","León"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "¿Qué animal tiene orejas largas y salta?",
        options: ["Conejo","Caballo","Elefante"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Es grande, gris y tiene trompa:",
        options: ["Elefante","Jirafa","Tigre"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Animal que produce miel:",
        options: ["Abeja","Mosca","Mariposa"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "¿Cuál de estos animales es un ave?",
        options: ["Pingüino","Mono","Caballo"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿Qué animal corre muy rápido?",
        options: ["Guepardo / Tigre","Tortuga","Oso"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Animal que come plátanos y trepa árboles:",
        options: ["Mono","Perro","Jirafa"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Es verde y salta cerca del agua:",
        options: ["Rana","Pez","Araña"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Produce lana para la ropa:",
        options: ["Oveja","Vaca","Cerdo"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Animal que cacarea y pone huevos:",
        options: ["Gallina","Vaca","Pájaro"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "¿Qué animal produce leche? (Extra)",
        options: ["La vaca","El perro","El pez"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Este animal tiene cuello largo: (Extra)",
        options: ["Jirafa","Elefante","Caballo"],
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
      },
      {
        id: "ex4",
        question: "En un texto, 'ayer' se refiere a...",
        options: ["El pasado","El presente","El futuro"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Si alguien dice 'estoy muy cansado', ¿cómo se siente?",
        options: ["Sin energía","Feliz","Enfadado"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Si la lectura dice 'Mañana lloverá', ¿cuándo ocurrirá?",
        options: ["En el futuro","En el pasado","Hoy"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "¿Qué significa 'leer un cuento'?",
        options: ["Leer una historia corta","Escribir una carta","Comprar un libro"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Si alguien tiene hambre, normalmente...",
        options: ["Come","Duerme","Corre"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Si en el texto dice 'Juan corre rápido', ¿qué hace Juan?",
        options: ["Va a mucha velocidad","Duerme","Camina lento"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Cuando un personaje 'se despide', significa que...",
        options: ["Dice adiós","Dice hola","Llora"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Si la tienda está 'cerrada', tú...",
        options: ["No puedes comprar","Puedes entrar","Compras pan"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "'Había una vez' se usa al principio de...",
        options: ["Un cuento","Una carta formal","Una noticia"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Si el protagonista 'encuentra' un tesoro, ¿qué significa?",
        options: ["Lo halla o lo ve","Lo pierde","Lo esconde"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿Qué es un 'resumen'?",
        options: ["La idea principal breve","Un cuento largo","Una pregunta"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Si alguien dice 'No entiendo', necesita...",
        options: ["Una explicación","Comida","Dormir"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Si el texto habla del 'invierno', probablemente mencione...",
        options: ["Nieve y frío","Playa y sol","Mucho calor"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "¿Qué significa 'subrayar' una palabra?",
        options: ["Poner una línea debajo","Borrarla","Ignorarla"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Si María 'estudió toda la noche', ella...",
        options: ["Está cansada hoy","Durmió muy bien","No sabe nada"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "En un diálogo, '—' significa que...",
        options: ["Alguien habla","El texto terminó","Es un título"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Si el texto dice 'Al final, fueron felices', es...",
        options: ["La conclusión","La introducción","El título"],
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
        question: "España está en:",
        options: ["Asia", "África", "Europa"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "¿Cómo se llama el continente con muchos desiertos al sur de Europa?",
        options: ["África", "América", "Oceanía"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "El país al sur de España es...",
        options: ["Marruecos","Francia","Italia"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "La capital de Francia es...",
        options: ["París","Madrid","Roma"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "País situado al norte de México:",
        options: ["Estados Unidos","Brasil","Argentina"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "¿Dónde está la Torre Eiffel?",
        options: ["Francia","Italia","España"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "¿En qué continente está China?",
        options: ["Asia","Europa","América"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "¿En qué país se encuentra Roma?",
        options: ["Italia","Grecia","Portugal"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "La capital de España es...",
        options: ["Madrid","Barcelona","Sevilla"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "El país más grande de Sudamérica es...",
        options: ["Brasil","Chile","Perú"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "¿Qué país comparte la península Ibérica con España?",
        options: ["Portugal","Francia","Italia"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "¿En qué continente está Egipto?",
        options: ["África","Asia","Europa"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Londres es la capital de...",
        options: ["Inglaterra / Reino Unido","Irlanda","Alemania"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿Qué océano está entre América y Europa?",
        options: ["Atlántico","Pacífico","Índico"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "¿En qué continente está Argentina?",
        options: ["América","África","Europa"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "¿Dónde está Tokio?",
        options: ["Japón","China","Corea"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Marruecos está en el continente de...",
        options: ["África","Europa","Asia"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Rusia está situada en...",
        options: ["Europa y Asia","Solo Asia","Solo Europa"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "¿Qué país tiene forma de bota?",
        options: ["Italia","España","Grecia"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "El país al sur de España es... (Extra)",
        options: ["Marruecos","Francia","Italia"],
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
        question: "Necesitas lavarte las manos. Preguntas: ¿Dónde está...?",
        options: ["el metro", "el lavabo", "el autobús"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Quieres comprar algo de comida. Preguntas: ¿Dónde está...?",
        options: ["la tienda", "el hospital", "el mar"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Para indicar que vayas en la misma dirección, dices:",
        options: ["Sigue todo recto","Gira a la izquierda","Ve hacia atrás"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Lo contrario de 'derecha' es...",
        options: ["Izquierda","Arriba","Recto"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Si el banco no está lejos, está...",
        options: ["Cerca","Allí","A la vuelta"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "¿Cómo preguntas dónde está el metro?",
        options: ["¿Dónde está el metro?","¿Qué es el metro?","¿Cuándo es el metro?"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Si necesitas cambiar de calle, debes...",
        options: ["Girar / Torcer","Seguir recto","Parar"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "El lugar donde dos calles se cruzan es la...",
        options: ["Esquina / Cruce","Avenida","Plaza"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Si pasas la plaza, significa que la dejas...",
        options: ["Atrás","Delante","Arriba"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Para subir a la planta 2, usas el...",
        options: ["Ascensor / Escaleras","Sótano","Coche"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "El parque está 'enfrente' significa que está...",
        options: ["Cara a cara","Al lado","Detrás"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Un lugar para caminar al lado de la calle es...",
        options: ["La acera","La carretera","El semáforo"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Lo opuesto a 'Cerca' es...",
        options: ["Lejos","Dentro","Encima"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿Qué haces en un paso de cebra?",
        options: ["Cruzar la calle","Aparcar el coche","Girar"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "El museo está 'al lado de' la iglesia, significa...",
        options: ["Muy cerca, contiguo","Lejos","Detrás"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Si te dicen 'Coge la primera calle a la derecha', tú...",
        options: ["Giras en la primera calle a la derecha","Vas recto","Giras a la izquierda"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Lo contrario de 'Subir' es...",
        options: ["Bajar","Entrar","Cruzar"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Un coche debe parar si el semáforo está en...",
        options: ["Rojo","Verde","Ámbar"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "'Sigue hasta el final de la calle' significa...",
        options: ["No gires hasta llegar al final","Date la vuelta","Cruza ahora"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Para indicar que vayas en la misma dirección, dices: (Extra)",
        options: ["Sigue todo recto","Gira a la izquierda","Ve hacia atrás"],
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
        question: "No tienes agua y tienes mucha sed. Dices: '______ comprar agua'.",
        options: ["Dónde", "Necesito", "Hola"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cómo pides que alguien te asista?",
        options: ["Necesito ayuda", "Quiero ir", "El lavabo"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Para vivir, el ser humano ___ beber agua.",
        options: ["necesita","quiere","odia"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Si estás cansado, ___ dormir.",
        options: ["tienes que / necesitas","puedes","sabes"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Yo ___ comprar pan, no hay en casa.",
        options: ["tengo que","soy","estoy"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Nosotros ___ estudiar para el examen.",
        options: ["debemos","somos","tenemos"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "¿Qué ___ hacer mañana?",
        options: ["tienes que","eres","estás"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Para viajar a otro país, a veces ___ pasaporte.",
        options: ["necesitas","comes","lees"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Ella ___ trabajar todos los días.",
        options: ["tiene que","tengo que","tienes que"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "___ silencio en la biblioteca. (Obligación general)",
        options: ["Hay que hacer","Tengo que","Necesitas"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Para aprender español, ___ practicar mucho.",
        options: ["hay que","tengo","debo de"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Yo no ___ ir, no es obligatorio.",
        options: ["tengo que","necesito","debo"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "¿Tú ___ ayuda?",
        options: ["necesitas","necesito","necesita"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Ellos ___ descansar después del partido.",
        options: ["necesitan","tienen","deben de"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Para comprar, ___ dinero.",
        options: ["hace falta","tiene","es"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "___ comer más verduras para estar sano.",
        options: ["Debes","Tienes","Haces"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Me duele la cabeza, ___ una aspirina.",
        options: ["necesito","tengo","quiero que"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Nosotros no ___ dinero, es gratis.",
        options: ["necesitamos","debemos","tenemos que"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Vosotros ___ hacer los deberes.",
        options: ["tenéis que","tenéis","debéis de"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Para vivir, el ser humano ___ beber agua. (Extra)",
        options: ["necesita","quiere","odia"],
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
        question: "Si quieres comer porque tu estómago está vacío, dices:",
        options: ["Tengo frío", "Tengo hambre", "Tengo dinero"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Para decir 'I don't have money', en español es:",
        options: ["No tengo dinero", "Necesito dinero", "Dónde está el dinero"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Si hace 40 grados, yo ___.",
        options: ["tengo calor","tengo frío","tengo miedo"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Si hace -5 grados, nosotros ___.",
        options: ["tenemos frío","tenemos calor","tenemos sueño"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "No he comido nada hoy, ___.",
        options: ["tengo hambre","tengo sed","tengo frío"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "He caminado por el desierto, ___.",
        options: ["tengo sed","tengo hambre","tengo sueño"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Son las 3 de la madrugada, ___.",
        options: ["tengo sueño","tengo calor","tengo hambre"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Veo un león en la calle, ___.",
        options: ["tengo miedo","tengo sed","tengo frío"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Necesito ir al baño, ___.",
        options: ["tengo prisa / urgencia","tengo frío","tengo hambre"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Llego tarde al trabajo, ___.",
        options: ["tengo prisa","tengo miedo","tengo sueño"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Ella ___ razón, 2 + 2 son 4.",
        options: ["tiene","es","está"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "¿___ hambre vosotros?",
        options: ["Tenéis","Estáis","Sois"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Si trabajas mucho sin parar, tú ___.",
        options: ["tienes cansancio","estás cansado","Las dos son comunes"],
        correctAnswer: 1
      },
      {
        id: "ex14",
        question: "Ellos no han bebido agua, ___.",
        options: ["tienen sed","tienen hambre","tienen prisa"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "¡Abre la ventana! ___ mucho calor.",
        options: ["Tengo","Estoy","Soy"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "¡Cierra la puerta! ___ frío.",
        options: ["Tengo","Hace","Ambas pueden ser correctas"],
        correctAnswer: 2
      },
      {
        id: "ex17",
        question: "El bebé llora porque ___ sueño.",
        options: ["tiene","está","es"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Yo nunca ___ miedo de los perros.",
        options: ["tengo","soy","estoy"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Cuando no como en todo el día, ___.",
        options: ["tengo mucha hambre","soy hambre","estoy hambre"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Si hace 40 grados, yo ___. (Extra)",
        options: ["tengo calor","tengo frío","tengo miedo"],
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
        question: "Si tu cabeza no está bien y sientes dolor, dices:",
        options: ["Me gusta la cabeza", "Tengo cabeza", "Me duele la cabeza"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Si algo es muy ruidoso y no te deja dormir:",
        options: ["Me molesta el ruido", "Me aburre el ruido", "Me gusta el ruido"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Si como mucho caramelo, me duele ___.",
        options: ["la barriga / el estómago","la rodilla","el pelo"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Si escucho música muy alta, me duelen ___.",
        options: ["los oídos","los ojos","los pies"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "He corrido 20 km, me duelen ___.",
        options: ["las piernas","las manos","las orejas"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Llevo gafas porque me duelen ___ al leer.",
        options: ["los ojos","los dientes","los brazos"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "¿A ti ___ la garganta?",
        options: ["te duele","me duele","le duele"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "A Juan ___ la cabeza.",
        options: ["le duele","me duele","te duele"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "A nosotros ___ los pies.",
        options: ["nos duelen","nos duele","me duelen"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "A ellos ___ la espalda.",
        options: ["les duele","le duelen","les duelen"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "A mí ___ el estómago.",
        options: ["me duele","te duele","me duelen"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "¿Qué te pasa? - ___ la muela.",
        options: ["Me duele","Me duelen","Te duele"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Si algo está en plural usamos:",
        options: ["duelen","duele","doler"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "A ella ___ los brazos hoy.",
        options: ["le duelen","le duele","les duelen"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Si trabajas mucho frente al ordenador, te duele...",
        options: ["La espalda / los ojos","Los pies","Las rodillas"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Doctor, ___ mucho el pecho.",
        options: ["me duele","le duele","te duele"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "A vosotros ___ las piernas de jugar al fútbol.",
        options: ["os duelen","nos duelen","les duelen"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "¿A quién ___ la cabeza?",
        options: ["le duele","me duele","les duelen"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Me he caído, me ___ todo el cuerpo.",
        options: ["duele","duelen","doler"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Si como mucho caramelo, me duele ___. (Extra)",
        options: ["la barriga / el estómago","la rodilla","el pelo"],
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
      },
      {
        id: "ex4",
        question: "¿Dónde compras la fruta y verdura?",
        options: ["En la frutería / supermercado","En la farmacia","En la zapatería"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Para comprar carne voy a...",
        options: ["La carnicería","La panadería","La pescadería"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "El lugar donde pagas en el supermercado es...",
        options: ["La caja","La puerta","El baño"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "¿Qué usamos para llevar los productos en la tienda?",
        options: ["Un carrito o cesta","Una mochila","Una maleta"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "¿Qué compras en la pescadería?",
        options: ["Pescado","Pollo","Queso"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "El pan se compra en...",
        options: ["La panadería","La ferretería","La librería"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Si quieres comprar yogures o leche, buscas la sección de...",
        options: ["Lácteos","Limpieza","Bebidas"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "¿Qué frase usas para preguntar el precio?",
        options: ["¿Cuánto cuesta?","¿Dónde está?","¿Cómo se llama?"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "La lista de cosas que necesitas comprar es...",
        options: ["La lista de la compra","El recibo","La factura"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Cuando pagas, te dan un papel que se llama...",
        options: ["Ticket / Recibo","Billete","Libro"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿Qué artículo NO está en la sección de limpieza?",
        options: ["Cebollas","Jabón","Lejía"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "En la charcutería puedes comprar...",
        options: ["Jamón y queso","Pescado","Zapatos"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Para comprar medicina vas a...",
        options: ["La farmacia","La panadería","La carnicería"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "El agua y los zumos están en la sección de...",
        options: ["Bebidas","Lácteos","Carnes"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Para pagar con tarjeta necesitas...",
        options: ["Una tarjeta de crédito/débito","Efectivo","Un cheque"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "¿Qué compras por docenas?",
        options: ["Huevos","Leche","Carne"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Si el producto pesa mucho, el supermercado lo vende por...",
        options: ["Kilos","Litros","Metros"],
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
      },
      {
        id: "ex4",
        question: "El lugar al que vas si estás enfermo es...",
        options: ["El médico / El hospital","El supermercado","La escuela"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "La persona que te receta medicinas es...",
        options: ["El doctor / La doctora","El profesor","El policía"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Si tienes fiebre, el médico te toma la...",
        options: ["Temperatura","Altura","Edad"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Si te duele la garganta y toses, tienes...",
        options: ["Tos / Resfriado","Alergia al sol","Hambre"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "El papel que el médico te da para comprar medicina se llama...",
        options: ["Receta","Factura","Carta"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Si te rompes un brazo, te ponen...",
        options: ["Una escayola / yeso","Una tirita","Una bufanda"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "¿Cómo te sientes si estás resfriado?",
        options: ["Cansado y con dolor de cabeza","Con mucha energía","Muy feliz"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Para curar un corte pequeño te pones...",
        options: ["Una tirita","Una escayola","Una inyección"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "¿Qué te pones en la axila para medir la fiebre?",
        options: ["Un termómetro","Una venda","Un fonendoscopio"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "¿Qué preguntas al llegar a la consulta?",
        options: ["¿Quién es el último?","¿Cuánto cuesta?","¿Qué hora es?"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Si un alimento te hace daño siempre, tienes...",
        options: ["Alergia o intolerancia","Fiebre","Gripe"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "La enfermera te puede poner una...",
        options: ["Inyección / Vacuna","Tirita en el zapato","Gorra"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Las pastillas y jarabes son...",
        options: ["Medicamentos","Comida","Bebidas"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "¿Qué médico cuida los dientes?",
        options: ["El dentista","El pediatra","El cirujano"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "¿Qué médico cuida a los niños?",
        options: ["El pediatra","El dentista","El oftalmólogo"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Si te duele el estómago, quizás tengas un dolor de...",
        options: ["Barriga","Cabeza","Espalda"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "¿Qué necesitas pedir antes de ir al médico?",
        options: ["Cita previa","Permiso de conducir","La cuenta"],
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
        question: "¿Qué día va después del lunes?",
        options: ["Miércoles", "Martes", "Sábado"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cómo preguntas la hora?",
        options: ["¿Cómo te llamas?", "¿Dónde estás?", "¿Qué hora es?"],
        correctAnswer: 2
      },
      {
        id: "ex3",
        question: "¿Qué día es hoy?",
        options: ["Lunes","Enero","Mañana"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "¿En qué mes estamos?",
        options: ["Octubre","Martes","Primavera"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "El primer día de la semana es...",
        options: ["Lunes","Domingo","Martes"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "El último mes del año es...",
        options: ["Diciembre","Enero","Noviembre"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "El día después de 'Martes' es...",
        options: ["Miércoles","Jueves","Lunes"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "¿Qué estación hace mucho calor?",
        options: ["Verano","Invierno","Otoño"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "¿Qué estación hace mucho frío?",
        options: ["Invierno","Primavera","Verano"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "¿Qué hora es? '14:00'",
        options: ["Son las dos de la tarde","Son las catorce de la mañana","Es la dos"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Si son las '13:30', decimos que es la una y...",
        options: ["media","cuarto","treinta"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Si son las '15:15', decimos que son las tres y...",
        options: ["cuarto","quince","media"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "El día antes de hoy fue...",
        options: ["Ayer","Mañana","Luego"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "El día después de hoy será...",
        options: ["Mañana","Ayer","Pronto"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "El fin de semana son los días...",
        options: ["Sábado y Domingo","Lunes y Martes","Viernes y Sábado"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "¿En qué mes celebramos la Navidad?",
        options: ["Diciembre","Agosto","Febrero"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Si son las '8:45', decimos que son las nueve menos...",
        options: ["cuarto","quince","media"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "¿Cuántos minutos tiene una hora?",
        options: ["Sesenta","Cien","Treinta"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "¿Cuántos segundos tiene un minuto?",
        options: ["Sesenta","Diez","Cien"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "¿Qué día es hoy? (Extra)",
        options: ["Lunes","Enero","Mañana"],
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
        question: "La persona que hace la comida es el...",
        options: ["Médico", "Profesor", "Cocinero"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "La persona que enseña en la escuela es...",
        options: ["Profesor / Profesora","Médico","Policía"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "La persona que cura a los enfermos es...",
        options: ["Médico / Doctor","Bombero","Cocinero"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "La persona que hace pan es...",
        options: ["Panadero","Carpintero","Peluquero"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "La persona que apaga el fuego es...",
        options: ["Bombero","Policía","Cartero"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "La persona que corta el pelo es...",
        options: ["Peluquero","Abogado","Mecánico"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "La persona que prepara la comida en un restaurante es...",
        options: ["Cocinero","Camarero","Panadero"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "La persona que sirve la comida en un restaurante es...",
        options: ["Camarero","Cocinero","Policía"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "La persona que arregla los coches es...",
        options: ["Mecánico","Carpintero","Médico"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "La persona que defiende a alguien en un juicio es...",
        options: ["Abogado","Juez","Policía"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "La persona que trae las cartas a casa es...",
        options: ["Cartero","Bombero","Panadero"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "La persona que construye casas es...",
        options: ["Albañil / Constructor","Mecánico","Peluquero"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "La persona que diseña edificios es...",
        options: ["Arquitecto","Abogado","Médico"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "La persona que toca música es...",
        options: ["Músico","Actor","Pintor"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "La persona que actúa en películas es...",
        options: ["Actor / Actriz","Cantante","Escritor"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "La persona que escribe libros es...",
        options: ["Escritor","Pintor","Periodista"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "La persona que informa de las noticias es...",
        options: ["Periodista","Actor","Músico"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "La persona que trabaja en una tienda vendiendo es...",
        options: ["Dependiente","Camarero","Cartero"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "La persona que enseña en la escuela es... (Extra)",
        options: ["Profesor / Profesora","Médico","Policía"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "La persona que cura a los enfermos es... (Extra)",
        options: ["Médico / Doctor","Bombero","Cocinero"],
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
        question: "El papá en español se dice también...",
        options: ["El padre", "El hermano", "El abuelo"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Para decir que tu hermana tiene mucha altura dices: Mi hermana es...",
        options: ["alta", "alto", "baja"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "El padre de mi padre es mi...",
        options: ["Abuelo","Tío","Hermano"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "La madre de mi madre es mi...",
        options: ["Abuela","Tía","Prima"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "El hermano de mi padre es mi...",
        options: ["Tío","Primo","Abuelo"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "La hermana de mi madre es mi...",
        options: ["Tía","Prima","Abuela"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "El hijo de mi tío es mi...",
        options: ["Primo","Hermano","Sobrino"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "El hijo de mi hermano es mi...",
        options: ["Sobrino","Primo","Tío"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "La hija de mi hermana es mi...",
        options: ["Sobrina","Prima","Tía"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Mi padre y mi madre son mis...",
        options: ["Padres","Abuelos","Tíos"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "El marido de mi madre es mi...",
        options: ["Padre","Tío","Abuelo"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "La mujer de mi padre es mi...",
        options: ["Madre","Tía","Abuela"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Yo soy el ___ de mis padres.",
        options: ["Hijo","Sobrino","Nieto"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Yo soy el ___ de mis abuelos.",
        options: ["Nieto","Hijo","Sobrino"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "El hermano de mi marido es mi...",
        options: ["Cuñado","Suegro","Yerno"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "El padre de mi mujer es mi...",
        options: ["Suegro","Cuñado","Yerno"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Si no tengo hermanos, soy hijo...",
        options: ["Único","Solo","Primero"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Los hijos que nacen el mismo día de la misma madre son...",
        options: ["Gemelos o Mellizos","Primos","Sobrinos"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "La persona con la que me caso es mi...",
        options: ["Marido / Mujer","Hermano","Primo"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "El padre de mi padre es mi... (Extra)",
        options: ["Abuelo","Tío","Hermano"],
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
        question: "Si quieres saber el lugar, preguntas...",
        options: ["¿Quién?", "¿Qué?", "¿Dónde?"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Para preguntar por una persona usas:",
        options: ["¿Qué?", "¿Quién?", "¿Cuándo?"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "___ te llamas?",
        options: ["Cómo","Qué","Dónde"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "___ años tienes?",
        options: ["Cuántos","Qué","Cuándo"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "___ vives?",
        options: ["Dónde","Cómo","Por qué"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "___ es esto? - Es un libro.",
        options: ["Qué","Quién","Cuál"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "___ es él? - Es mi hermano.",
        options: ["Quién","Qué","Dónde"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "___ llegas? - Mañana.",
        options: ["Cuándo","Dónde","Por qué"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "___ estudias español? - Porque me gusta.",
        options: ["Por qué","Cuándo","Dónde"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "___ de estos prefieres?",
        options: ["Cuál","Qué","Quién"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "___ cuesta esto?",
        options: ["Cuánto","Cómo","Qué"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "¿___ hora es?",
        options: ["Qué","Cuál","Cómo"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "¿___ vas? - Voy al supermercado.",
        options: ["A dónde","De dónde","Dónde"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "¿___ eres? - Soy de Marruecos.",
        options: ["De dónde","Dónde","A dónde"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "¿___ hermanos tienes?",
        options: ["Cuántos","Cuánto","Cuántas"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "¿___ está el baño?",
        options: ["Dónde","Cómo","Qué"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "¿___ se dice 'house' en español?",
        options: ["Cómo","Qué","Por qué"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "¿___ es tu número de teléfono?",
        options: ["Cuál","Qué","Cuánto"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "En español, usamos los signos de interrogación...",
        options: ["Al principio y al final (¿?)","Solo al final (?)","Solo al principio (¿)"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "___ te llamas? (Extra)",
        options: ["Cómo","Qué","Dónde"],
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
        question: "El lugar donde duermes se llama:",
        options: ["El dormitorio", "La cocina", "El pan"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "La comida de la mañana se llama...",
        options: ["Desayuno","Almuerzo","Cena"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "La comida de la noche se llama...",
        options: ["Cena","Desayuno","Comida"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Para cortar la carne usamos un...",
        options: ["Cuchillo","Tenedor","Cuchara"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Para tomar sopa usamos una...",
        options: ["Cuchara","Tenedor","Cuchillo"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Bebemos agua en un...",
        options: ["Vaso","Plato","Tenedor"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Dormimos en una...",
        options: ["Cama","Mesa","Silla"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Nos sentamos en una...",
        options: ["Silla","Mesa","Cama"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Guardamos la comida fría en...",
        options: ["La nevera / El frigorífico","El horno","El microondas"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Cocinamos en...",
        options: ["La cocina","El dormitorio","El baño"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Nos duchamos en...",
        options: ["El baño","El salón","La cocina"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "Vemos la televisión en...",
        options: ["El salón","El pasillo","El balcón"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Ponemos la ropa en el...",
        options: ["Armario","Baño","Frigorífico"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Abrimos la ___ para entrar en casa.",
        options: ["Puerta","Ventana","Pared"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Miramos por la ___ para ver la calle.",
        options: ["Ventana","Puerta","Mesa"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "La fruta amarilla y alargada es...",
        options: ["Un plátano","Una manzana","Una naranja"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "La bebida blanca que dan las vacas es...",
        options: ["Leche","Agua","Zumo"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Comemos paella en un...",
        options: ["Plato","Vaso","Tenedor"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "La comida de la mañana se llama... (Extra)",
        options: ["Desayuno","Almuerzo","Cena"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "La comida de la noche se llama... (Extra)",
        options: ["Cena","Desayuno","Comida"],
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
        question: "Hoy nosotros _______ (trabajar) mucho.",
        options: ["hemos trabajado", "han trabajado", "ha trabajado"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "¿Tú _____ (estar) en Marruecos alguna vez?",
        options: ["ha estado", "has estado", "he estado"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "Hoy ___ una manzana.",
        options: ["he comido","ha comido","hemos comido"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Esta mañana María ___ temprano.",
        options: ["se ha levantado","se han levantado","se he levantado"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Esta semana nosotros ___ mucho.",
        options: ["hemos trabajado","han trabajado","habéis trabajado"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "¿Tú ___ alguna vez a España?",
        options: ["has viajado","ha viajado","he viajado"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Este año ellos no ___ de vacaciones.",
        options: ["han ido","hemos ido","habéis ido"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Yo nunca ___ sushi.",
        options: ["he probado","has probado","ha probado"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "El pretérito perfecto de 'hacer' (yo) es...",
        options: ["he hecho","he hacido","he echo"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "El pretérito perfecto de 'escribir' (él) es...",
        options: ["ha escrito","ha escribido","ha escrebido"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "El pretérito perfecto de 'ver' (nosotros) es...",
        options: ["hemos visto","hemos vido","hemos veído"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "¿___ (vosotros) las llaves?",
        options: ["Habéis encontrado","Han encontrado","Has encontrado"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Aún no ___ (yo) mis deberes.",
        options: ["he terminado","ha terminado","has terminado"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Pedro ya ___ (volver) a casa.",
        options: ["ha vuelto","ha volvido","ha volvedo"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Esta tarde ___ (llover) mucho.",
        options: ["ha llovido","he llovido","han llovido"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "¿Qué ___ (pasar) hoy?",
        options: ["ha pasado","han pasado","has pasado"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Mis padres ___ (decir) que no.",
        options: ["han dicho","han decido","han diciado"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Hoy me ___ (levantar) a las 8.",
        options: ["he levantado","ha levantado","has levantado"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "El verbo auxiliar del pretérito perfecto es...",
        options: ["Haber","Tener","Ser"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Hoy ___ una manzana. (Extra)",
        options: ["he comido","ha comido","hemos comido"],
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
        question: "El fin de semana, yo _______ español.",
        options: ["voy a estudio", "voy a estudiar", "voy estudiar"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Mañana nosotros _____ ir al cine.",
        options: ["vamos a", "vamos", "va a"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Mañana yo ___ a comprar pan.",
        options: ["voy","vas","vamos"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "El próximo año, ella ___ a viajar a Francia.",
        options: ["va","voy","van"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Este fin de semana, nosotros ___ a ver una película.",
        options: ["vamos","van","vais"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "¿Qué ___ a hacer tú esta tarde?",
        options: ["vas","va","voy"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Mis amigos ___ a venir a mi fiesta.",
        options: ["van","vamos","va"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Vosotros ___ a aprender español muy rápido.",
        options: ["vais","van","vamos"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "El cielo está negro, ___ a llover.",
        options: ["va","voy","van"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Yo no ___ a comer más, estoy lleno.",
        options: ["voy","vas","va"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "La estructura del futuro próximo es...",
        options: ["Ir + a + infinitivo","Ir + infinitivo","Estar + infinitivo"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "¿Dónde ___ a dormir ellos hoy?",
        options: ["van","vamos","vais"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Nosotros ___ a cocinar una tortilla.",
        options: ["vamos","vais","van"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Tú y yo ___ a salir esta noche.",
        options: ["vamos","vais","van"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Usted ___ a entender esto pronto.",
        options: ["va","vas","voy"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Ellas ___ a llegar tarde.",
        options: ["van","vamos","va"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Yo ___ a estudiar más.",
        options: ["voy","vas","vamos"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "¿A qué hora ___ a terminar tú?",
        options: ["vas","va","voy"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "El tren ___ a salir en 5 minutos.",
        options: ["va","van","voy"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Mañana yo ___ a comprar pan. (Extra)",
        options: ["voy","vas","vamos"],
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
      },
      {
        id: "ex3",
        question: "Juan es ___ alto que Pedro.",
        options: ["más","muy","tan"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Esta casa es ___ grande como la otra.",
        options: ["tan","más","menos"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Yo tengo ___ libros como tú.",
        options: ["tantos","tan","más"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Ella tiene ___ años que yo.",
        options: ["menos","tan","igual"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "El león es ___ rápido que la tortuga.",
        options: ["más","menos","tan"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Mi coche es ___ bueno como el tuyo.",
        options: ["tan","igual","más"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Madrid es ___ grande que Toledo.",
        options: ["más","menos","tan"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Este examen es ___ fácil que el anterior.",
        options: ["menos","tan","igual"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "Yo como ___ como tú.",
        options: ["tanto","tan","más"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "El invierno es ___ frío que el verano.",
        options: ["más","menos","tan"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "El oro es ___ caro que la plata.",
        options: ["más","tan","igual"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Nosotros trabajamos ___ que ellos (menos cantidad).",
        options: ["menos","tan","igual"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Para igualdad con adjetivos usamos...",
        options: ["tan ... como","más ... que","tanto ... que"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "Para igualdad con sustantivos (nombres) usamos...",
        options: ["tanto/a/os/as ... como","tan ... como","más ... como"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "Tengo ___ amigas como tú.",
        options: ["tantas","tantos","tan"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Mejor es el comparativo de...",
        options: ["Bueno","Malo","Grande"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "Peor es el comparativo de...",
        options: ["Malo","Bueno","Pequeño"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "Juan es ___ alto que Pedro. (Extra)",
        options: ["más","muy","tan"],
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
        question: "Cuando terminas de comer y quieres pagar, dices...",
        options: ["La carta, por favor.", "La cuenta, por favor.", "El menú, por favor."],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "El camarero te pregunta \"¿Qué van a _______?\" y respondes que quieres agua.",
        options: ["beber", "comer", "cuenta"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "El papel donde está la lista de platos y precios es...",
        options: ["El menú / La carta","La factura","El recibo"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "La persona que te trae la comida es...",
        options: ["El camarero","El cocinero","El recepcionista"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Para pagar, pides...",
        options: ["La cuenta","La carta","El menú"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "El primer plato que comes se llama...",
        options: ["Primer plato o entrante","Postre","Bebida"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Lo dulce que comes al final de la comida es...",
        options: ["El postre","El entrante","La guarnición"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Para reservar una mesa dices...",
        options: ["Quería reservar una mesa, por favor","Quiero pagar la cuenta","¿Dónde está el baño?"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "¿Qué le dices al camarero para pedir?",
        options: ["Para mí, la ensalada por favor","Tráeme la cuenta","Adiós"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Si la comida no tiene sal, le falta...",
        options: ["Sabor / Sal","Azúcar","Agua"],
        correctAnswer: 0
      },
      {
        id: "ex11",
        question: "El dinero extra que dejas si el servicio es bueno es...",
        options: ["La propina","El impuesto","El billete"],
        correctAnswer: 0
      },
      {
        id: "ex12",
        question: "¿Qué usas para limpiarte la boca en la mesa?",
        options: ["La servilleta","El mantel","El vaso"],
        correctAnswer: 0
      },
      {
        id: "ex13",
        question: "Si la carne está muy hecha, está...",
        options: ["Muy cocinada","Poco cocinada","Cruda"],
        correctAnswer: 0
      },
      {
        id: "ex14",
        question: "Una bebida con gas muy común es...",
        options: ["El refresco / Agua con gas","El vino tinto","El café"],
        correctAnswer: 0
      },
      {
        id: "ex15",
        question: "Si eres vegetariano, no comes...",
        options: ["Carne ni pescado","Verduras","Frutas"],
        correctAnswer: 0
      },
      {
        id: "ex16",
        question: "El cuchillo, tenedor y cuchara son los...",
        options: ["Cubiertos","Platos","Vasos"],
        correctAnswer: 0
      },
      {
        id: "ex17",
        question: "¿Qué pides para beber por la mañana normalmente?",
        options: ["Un café o té","Una cerveza","Una copa de vino"],
        correctAnswer: 0
      },
      {
        id: "ex18",
        question: "Si no quieres comer en el restaurante, pides comida para...",
        options: ["Llevar","Tirar","Dormir"],
        correctAnswer: 0
      },
      {
        id: "ex19",
        question: "¿Qué significa 'Menú del día'?",
        options: ["Un menú cerrado más económico","El plato más caro","Comida para niños"],
        correctAnswer: 0
      },
      {
        id: "ex20",
        question: "El papel donde está la lista de platos y precios es... (Extra)",
        options: ["El menú / La carta","La factura","El recibo"],
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
  }];