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
  emoji?: string;
  color?: string;
  vocabulary?: VocabularyItem[];
  exercises?: Exercise[];
}

export const lessons: Lesson[] = [
  {
    id: "a1-alfa-vocales",
    topic: "Las Vocales",
    title: "Alfabetización: Las Vocales",
    level: "A1",
    category: "Alfabetización",
    description: "Aprende las 5 vocales del español. Sonidos, palabras básicas como Avión, Elefante, Isla, Oso y Uva.",
    emoji: "🅰️",
    color: "#E2F3E7",
    vocabulary: [
      { word: "Avión", translations: { en: "Airplane", ar: "طائرة", uk: "Літак", fr: "Avion" }, emoji: "✈️", color: "#E2F3E7" },
      { word: "Elefante", translations: { en: "Elephant", ar: "فيل", uk: "Слон", fr: "Éléphant" }, emoji: "🐘", color: "#E2F3E7" },
      { word: "Isla", translations: { en: "Island", ar: "جزيرة", uk: "Острів", fr: "Île" }, emoji: "🏝️", color: "#E2F3E7" },
      { word: "Oso", translations: { en: "Bear", ar: "دب", uk: "Ведмідь", fr: "Ours" }, emoji: "🐻", color: "#E2F3E7" },
      { word: "Uvas", translations: { en: "Grapes", ar: "عنب", uk: "Виноград", fr: "Raisins" }, emoji: "🍇", color: "#E2F3E7" }
    ],
    content: `
## Vamos a aprender las vocales (a, e, i, o, u)

### Ejercicio de pronunciación:
Usa el botón de abajo si estuviera disponible el audio (simulación).
<button class="audio-btn">🔊 Escuchar vocales</button>
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
        question: "¿Qué imagen empieza con 'O'?",
        options: ["Elefante", "Oso", "Isla"],
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
    emoji: "👤",
    color: "#EBF8FF",
    vocabulary: [
      { word: "La cabeza", translations: { en: "Head", ar: "الرأس", uk: "Голова", fr: "Tête" }, emoji: "👧", color: "#EBF8FF" },
      { word: "La mano", translations: { en: "Hand", ar: "اليد", uk: "Рука", fr: "Main" }, emoji: "✋", color: "#EBF8FF" },
      { word: "El pie", translations: { en: "Foot", ar: "القدم", uk: "Нога", fr: "Pied" }, emoji: "🦶", color: "#EBF8FF" },
      { word: "Los ojos", translations: { en: "Eyes", ar: "العينان", uk: "Очі", fr: "Yeux" }, emoji: "👁️", color: "#EBF8FF" },
      { word: "Las piernas", translations: { en: "Legs", ar: "الساقين", uk: "Ноги", fr: "Jambes" }, emoji: "🦵", color: "#EBF8FF" },
      { word: "El brazo", translations: { en: "Arm", ar: "الذراع", uk: "Рука", fr: "Bras" }, emoji: "💪", color: "#EBF8FF" }
    ],
    content: `
## El Cuerpo Humano

Aprender las partes de nuestro cuerpo nos ayuda a comunicarnos mejor.
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cómo se dice 'Hand' en Español?",
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
    emoji: "🎨",
    color: "#FFF5F5",
    vocabulary: [
      { word: "Rojo", translations: { en: "Red", ar: "أحمر", uk: "Червоний", fr: "Rouge" }, emoji: "🍎", color: "#E53E3E" },
      { word: "Azul", translations: { en: "Blue", ar: "أزرق", uk: "Синій", fr: "Bleu" }, emoji: "💧", color: "#3182CE" },
      { word: "Verde", translations: { en: "Green", ar: "أخضر", uk: "Зелений", fr: "Vert" }, emoji: "🐸", color: "#38A169" },
      { word: "Amarillo", translations: { en: "Yellow", ar: "أصفر", uk: "Жовтий", fr: "Jaune" }, emoji: "☀️", color: "#ECC94B" },
      { word: "Naranja", translations: { en: "Orange", ar: "برتقالي", uk: "Помаранчевий", fr: "Orange" }, emoji: "🍊", color: "#DD6B20" },
      { word: "Negro", translations: { en: "Black", ar: "أسود", uk: "Чорний", fr: "Noir" }, emoji: "🎩", color: "#1A202C" }
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
    id: "a1-gram-verbos",
    topic: "Verbos",
    title: "Verbos Básicos (Ser, Estar, Tener)",
    level: "A1",
    category: "Gramática",
    description: "Aprende los tres verbos más importantes en español para poder presentarte.",
    emoji: "🏃🏻",
    color: "#E2E8F0",
    vocabulary: [
      { word: "Yo soy", translations: { en: "I am (teacher)", ar: "أنا معلم", uk: "Я вчитель", fr: "Je suis (professeur)" }, emoji: "🧑‍🏫", color: "#E2E8F0" },
      { word: "Yo estoy", translations: { en: "I am (at home)", ar: "أنا في المنزل", uk: "Я вдома", fr: "Je suis (à la maison)" }, emoji: "🏠", color: "#E2E8F0" },
      { word: "Yo tengo", translations: { en: "I have (an apple)", ar: "لدي تفاحة", uk: "Я маю", fr: "J'ai (une pomme)" }, emoji: "🍎", color: "#E2E8F0" }
    ],
    content: `
## Verbos muy importantes

Aprender la conjugación (la forma) es esencial para comunicarte.

### Verbo SER (Identidad / To be)
*   **Yo soy** Ana. *(I am Ana)*
*   **Él es** de África. *(He is from Africa)*

### Verbo ESTAR (Lugar o Emoción)
*   **Yo estoy** feliz. *(I am happy)*
*   **Tú estás** en España. *(You are in Spain)*

### Verbo TENER (To have)
*   **Yo tengo** 30 años. *(I am 30 years old)*
*   **Tú tienes** hambre. *(You are hungry)*
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
    emoji: "👕",
    color: "#E2E8F0",
    vocabulary: [
      { word: "La camiseta", translations: { en: "T-Shirt", ar: "قميص", uk: "Футболка", fr: "T-shirt" }, emoji: "👕", color: "#EDF2F7" },
      { word: "El pantalón", translations: { en: "Pants", ar: "سروال", uk: "Штани", fr: "Pantalon" }, emoji: "👖", color: "#EDF2F7" },
      { word: "Los zapatos", translations: { en: "Shoes", ar: "حذاء", uk: "Взуття", fr: "Chaussures" }, emoji: "👟", color: "#EDF2F7" },
      { word: "La chaqueta", translations: { en: "Jacket", ar: "سترة", uk: "Куртка", fr: "Veste" }, emoji: "🧥", color: "#EDF2F7" }
    ],
    content: `
## Las prendas de vestir
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si hace frío (cold), te pones:",
        options: ["Una camiseta corta", "Una chaqueta", "Un pantalón corto"],
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
    emoji: "🐶",
    color: "#FEFCBF",
    vocabulary: [
      { word: "El perro", translations: { en: "Dog", ar: "كلب", uk: "Собака", fr: "Chien" }, emoji: "🐶", color: "#FEFCBF" },
      { word: "El gato", translations: { en: "Cat", ar: "قطة", uk: "Кіт", fr: "Chat" }, emoji: "🐱", color: "#FEFCBF" },
      { word: "El pájaro", translations: { en: "Bird", ar: "طائر", uk: "Птах", fr: "Oiseau" }, emoji: "🐦", color: "#FEFCBF" },
      { word: "El árbol", translations: { en: "Tree", ar: "شجرة", uk: "Дерево", fr: "Arbre" }, emoji: "🌳", color: "#F0FFF4" },
      { word: "La montaña", translations: { en: "Mountain", ar: "جبل", uk: "Гора", fr: "Montagne" }, emoji: "⛰️", color: "#F0FFF4" },
      { word: "El mar", translations: { en: "Sea", ar: "بحر", uk: "Море", fr: "Mer" }, emoji: "🌊", color: "#F0FFF4" }
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
    emoji: "🌍",
    color: "#E2E8F0",
    vocabulary: [
      { word: "Marruecos", translations: { en: "Morocco", ar: "المغرب", uk: "Марокко", fr: "Maroc" }, emoji: "🇲🇦", color: "#FEFCBF" },
      { word: "España", translations: { en: "Spain", ar: "إسبانيا", uk: "Іспанія", fr: "Espagne" }, emoji: "🇪🇸", color: "#FFF5F5" },
      { word: "Senegal", translations: { en: "Senegal", ar: "السنغال", uk: "Сенегал", fr: "Sénégal" }, emoji: "🇸🇳", color: "#F0FFF4" }
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
  }
];

